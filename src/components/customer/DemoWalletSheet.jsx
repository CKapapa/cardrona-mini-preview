import { useEffect, useState } from 'react';
import { Check, ChevronLeft, CreditCard, MessageCircle, ShieldCheck, X } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const wallets = {
  wechat: { en: 'WeChat Pay', zh: '微信支付', color: '#168a4f', icon: MessageCircle },
  card: { en: 'Visa / Mastercard', zh: 'Visa / Mastercard 银行卡', color: '#345f82', icon: CreditCard },
};

/**
 * Bilingual, safe *visual demonstration* of the native wallet confirmation sequence.
 * No wallet SDK, payment API, QR payment code, backend, or merchant keys are used.
 * Real WeChat Mini Program checkout must call wx.requestPayment with backend-signed
 * parameters, then verify the merchant's server notification / order query.
 */
export default function DemoWalletSheet({ method, amount, onCancel, onSuccess }) {
  const { t, lang } = useLang();
  const [stage, setStage] = useState('review');
  const [busy, setBusy] = useState(false);
  const wallet = wallets[method] || wallets.wechat;
  const Icon = wallet.icon;

  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape' && !busy) onCancel(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel, busy]);

  const simulateSuccess = () => {
    if (busy) return;
    setBusy(true);
    setStage('checking');
    // Demo-only delay to illustrate the payment-to-order verification stage.
    window.setTimeout(() => { setBusy(false); onSuccess(); }, 650);
  };
  const amountString = `NZ$${Number(amount || 0).toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center bg-[#071627]/60 px-0 pb-0 sm:items-center sm:p-4" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="demo-wallet-title" className="w-full max-w-[430px] overflow-hidden rounded-t-[26px] bg-white shadow-2xl sm:rounded-[22px]" style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 16px)' }}>
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <button type="button" disabled={busy} onClick={stage === 'authorize' ? () => setStage('review') : onCancel} className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600" aria-label={t('返回或取消','Go back or cancel')}>{stage === 'authorize' ? <ChevronLeft size={19}/> : <X size={18}/>}</button>
          <span className="text-[12px] font-semibold tracking-[0.08em] text-slate-500">{t('付款流程演示','PAYMENT FLOW DEMO')}</span>
          <span className="w-9"/>
        </div>

        <div className="space-y-4 px-6 pb-4 pt-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-white" style={{ backgroundColor: wallet.color }}><Icon size={26}/></div>
          <div>
            <h2 id="demo-wallet-title" className="text-[21px] font-bold text-[#1b2f3b]">{lang === 'zh' ? wallet.zh : wallet.en}</h2>
            <p className="mt-2 text-[12px] leading-5 text-[#667788]">{stage === 'review' ? t('请确认演示订单金额。','Review your order before continuing.') : stage === 'authorize' ? t('此页面模拟钱包的确认步骤，不会要求支付密码。','This screen simulates wallet authorization without collecting a PIN or password.') : t('正在模拟支付状态核验……','Simulating payment status verification…')}</p>
          </div>

          <div className="rounded-2xl bg-[#f2f5f8] px-4 py-5">
            <p className="text-[11px] text-[#657487]">{t('订单金额 · 仅供演示','ORDER TOTAL · DEMO ONLY')}</p>
            <p className="mt-2 text-[31px] font-bold tracking-tight text-[#152b3b]">{amountString}</p>
            <p className="mt-1 text-[11px] text-[#778390]">{t('实际结算币种、汇率与费用由支付服务商确定。','Real currency conversion and fees depend on the payment provider.')}</p>
          </div>

          {method === 'wechat' && <p className="rounded-xl bg-[#edf8f1] px-3 py-3 text-left text-[11px] leading-5 text-[#296445]">{t('正式小程序将通过微信支付接口唤起授权界面，并在服务器核实交易状态后才出票。','In production, the Mini Program would open WeChat Pay and issue a ticket only after server-side verification.')}</p>}
          {method === 'card' && <p className="rounded-xl bg-[#eff4f8] px-3 py-3 text-left text-[11px] leading-5 text-[#526779]">{t('正式银行卡付款应由合规收单服务商提供安全结账页面及验证。','Live card payments would use a compliant provider checkout and authentication.')}</p>}

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#6c7a88]"><ShieldCheck size={15}/>{t('无真实交易 · 不会扣款 · 不生成有效雪票','No charge · No live payment · No valid lift ticket')}</div>
        </div>
        <div className="space-y-2 px-5 pb-2">
          {stage === 'review' ? <button type="button" onClick={() => setStage('authorize')} className="h-12 w-full rounded-xl text-[14px] font-semibold text-white" style={{ backgroundColor: wallet.color }}>{t('继续查看付款确认','Continue to payment confirmation')}</button> : stage === 'authorize' ? <><button type="button" onClick={simulateSuccess} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl text-[14px] font-semibold text-white" style={{ backgroundColor: wallet.color }}><Check size={17}/>{t('模拟付款成功','Simulate successful payment')}</button><button type="button" onClick={onCancel} className="h-11 w-full rounded-xl border border-[#d5dde5] text-[13px] font-medium text-[#506477]">{t('取消付款（保留购物车）','Cancel payment (keep cart)')}</button></> : <div className="flex h-12 items-center justify-center gap-2 rounded-xl bg-[#edf3f7] text-[13px] text-[#446079]"><span className="h-4 w-4 animate-spin rounded-full border-2 border-[#cad9e4] border-t-[#496b82]"/>{t('核对演示付款状态','Checking simulated result')}</div>}
          {stage === 'review' && <button type="button" onClick={onCancel} className="h-10 w-full text-[12px] text-[#6d7a88]">{t('暂不付款','Not now')}</button>}
        </div>
      </section>
    </div>
  );
}
