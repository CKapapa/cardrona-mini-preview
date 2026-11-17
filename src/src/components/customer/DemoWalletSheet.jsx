import { useEffect, useState } from 'react';
import { Check, CreditCard, ShieldCheck, X } from 'lucide-react';
import { useLang } from '@/lib/i18n';

// Reference artwork is the unaltered bilingual WeChat Pay mark. Download the official
// merchant-use asset from pay.wechatpay.cn/static/material/brand.shtml for production.
// This URL is display-only; the demo does not authenticate with WeChat Pay.
export const WECHAT_PAY_MARK = 'https://upload.wikimedia.org/wikipedia/commons/7/7a/WeChat_Pay.png';

const surface = '#ffffff';
const green = '#07B857';

/**
 * WeChat-style payment interaction for a browser demonstration only.
 * Do not ask for a real WeChat PIN or reproduce a credential-entry form.
 * A native Mini Program uses wx.requestPayment. Merchant server must verify
 * paid status before issuing the real ticket.
 */
export default function DemoWalletSheet({ method = 'wechat', amount, onCancel, onSuccess }) {
  const { lang } = useLang();
  const zh = lang === 'zh';
  const [stage, setStage] = useState('confirm');
  const [busy, setBusy] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);
  const isWeChat = method === 'wechat';
  const money = `NZ$${Number(amount || 0).toLocaleString('en-NZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const t = (chinese, english) => zh ? chinese : english;

  useEffect(() => {
    const handleEscape = (event) => { if (event.key === 'Escape' && !busy) onCancel(); };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [busy, onCancel]);

  function approveDemo() {
    if (busy) return;
    setBusy(true);
    setStage('checking');
    // Visual simulation only: no real SDK calls, payment requests or credentials.
    window.setTimeout(() => { onSuccess(); }, 800);
  }

  return (
    <div className="fixed inset-0 z-[110] flex items-end justify-center bg-[#0d1d2b]/60 sm:items-center sm:p-5" role="presentation">
      <section role="dialog" aria-modal="true" aria-labelledby="demo-payment-title" className="w-full max-w-[430px] overflow-hidden rounded-t-[22px] bg-white shadow-2xl sm:rounded-[20px]" style={{ background: surface, paddingBottom: 'max(16px, env(safe-area-inset-bottom))' }}>
        <div className="flex h-[58px] items-center justify-between border-b border-[#edf0f2] px-5">
          <button type="button" onClick={onCancel} disabled={busy} aria-label={t('取消付款','Cancel payment')} className="flex h-9 w-9 items-center justify-center rounded-full text-[#56636e] disabled:opacity-40"><X size={21}/></button>
          <span className="text-[14px] font-medium text-[#26333d]">{t('确认付款 · 演示','Payment confirmation · Demo')}</span>
          <span className="w-9" aria-hidden="true"/>
        </div>

        <div className="px-6 pb-0 pt-6 text-center">
          {isWeChat ? (
            <div className="mx-auto flex h-[48px] items-center justify-center">
              {<img className="h-[40px] max-w-[185px] object-contain" src={logoFailed ? `${import.meta.env.BASE_URL}images/wechatpay-logo-fallback.svg` : WECHAT_PAY_MARK} alt="微信支付 WeChat Pay" onError={() => setLogoFailed(true)} />}
            </div>
          ) : (
            <div className="mx-auto flex h-12 items-center justify-center gap-2 text-[#26333d]"><CreditCard size={25}/><span className="font-semibold">Visa / Mastercard</span></div>
          )}
          <p className="mt-6 text-[13px] text-[#6b7883]">Cardrona × Treble Cone</p>
          <h2 id="demo-payment-title" className="mt-2 text-[36px] font-semibold leading-tight tracking-tight text-[#152b35]">{money}</h2>
          <p className="mt-2 text-[12px] text-[#869099]">{t('付款金额 · 新西兰元','Amount due · New Zealand dollars')}</p>

          {stage !== 'checking' ? (
            <div className="mt-7 rounded-[14px] border border-[#e5e9eb] bg-[#fbfcfc] px-4 py-4 text-left">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] text-[#87919a]">{t('付款方式','Payment method')}</p>
                  <p className="mt-1 text-[13px] font-medium text-[#26333d]">{isWeChat ? t('微信支付 · 演示付款','WeChat Pay · Demo') : t('银行卡 · 演示付款','Card payment · Demo')}</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#edf4f0] px-2.5 py-1 text-[11px] font-medium text-[#36754c]">{t('演示模式','Demo mode')}</span>
              </div>
              <div className="my-4 h-px bg-[#e8ecee]"/>
              <div className="flex items-center justify-between gap-3 text-[12px]">
                <span className="text-[#70808a]">{t('收款方','Merchant')}</span><span className="font-medium text-[#344550]">Cardrona × Treble Cone</span>
              </div>
            </div>
          ) : (
            <div className="mt-9 flex flex-col items-center gap-3 py-5">
              <span className="h-7 w-7 animate-spin rounded-full border-[3px] border-[#d8eee2] border-t-[#07B857]" />
              <p className="text-[13px] text-[#5f707c]">{t('正在核对演示交易状态','Checking simulated payment status')}</p>
            </div>
          )}

          <p className="mt-5 flex items-start justify-center gap-2 text-[11px] leading-5 text-[#78848c]"><ShieldCheck size={15} className="mt-0.5 shrink-0"/>{t('仅供界面演示，不会扣款，也不会生成有效雪票。','Preview only. No money is charged or valid ski ticket issued.')}</p>
        </div>

        <div className="mt-6 space-y-2 px-5 pb-1">
          {stage === 'checking' ? <div className="flex h-[48px] items-center justify-center text-[13px] text-[#637480]">{t('核验中…','Verifying…')}</div> : (
            <>
              <button type="button" onClick={approveDemo} disabled={busy} className="flex h-[49px] w-full items-center justify-center gap-2 rounded-[11px] text-[15px] font-semibold text-white disabled:opacity-50" style={{ backgroundColor: isWeChat ? green : '#263d50' }}>
                <Check size={18}/>{isWeChat ? t('模拟确认微信付款','Simulate WeChat Pay approval') : t('模拟确认银行卡付款','Simulate card approval')}
              </button>
              <button type="button" onClick={onCancel} className="h-[44px] w-full text-[13px] text-[#667783]">{t('取消并返回结账','Cancel and return to checkout')}</button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
