import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowUpRight, CloudSnow, Mountain, Thermometer, Wind } from 'lucide-react';

const MOUNTAIN_PHOTOS = {
  Cardrona: 'https://images.ctfassets.net/2atbvuhykqrn/zqD6u143cOKQ9cE4ab6FK/b9a946a427d1b3ec31dde64e4e71cb8d/W24-Mountains_Imagery-Cardrona_Half_Page_Image.webp?w=1200&h=700&fit=fill&fm=webp&q=80',
  'Treble Cone': 'https://images.ctfassets.net/2atbvuhykqrn/21XEVqbsE99Ohb1AXWAZQu/2a8b0a5694e29c906caa75b7ebe232d1/W24-Mountains_Imagery-Treble_Cone_Half_Page_Image.webp?w=1200&h=700&fit=fill&fm=webp&q=80',
};
const OFFICIAL_REPORT = 'https://cardrona-treblecone.com/snow-report';

const REPORTS = {
  Cardrona: {
    summary: 'Closed for the 2026 winter season',
    summaryDetail: 'Summer operations and the Bike Park reopen 12 December.',
    summaryUpdated: 'Snow report updated 18 Oct, 4:34 pm',
    snow: [['Overnight', '0 cm'], ['7 days', '24 cm'], ['Base · 1,800 m', '87 cm']],
    conditions: [['3°C', 'TEMP', Thermometer], ['21 km/h', 'WIND', Wind], ['40 km/h', 'GUST', CloudSnow], ['87 cm', 'BASE · 1,800 M', Mountain]],
    weather: [['3°C', 'TEMP'], ['21 km/h', 'WIND'], ['40 km/h', 'GUST']],
    weatherUpdated: 'Weather report updated 10:10 pm',
    forecast: [['Fri 13th', '5°C', '21 km/h', 'wind'], ['Sat 14th', '6°C', '13 km/h', 'sun'], ['Sun 15th', '5°C', '43 km/h', 'wind'], ['Mon 16th', '3°C', '32 km/h', 'cloud'], ['Tue 17th', '2°C', '24 km/h', 'wind']],
    forecastNote: '5-day outlook to prepare for on-mountain conditions.',
    roadStatus: 'Closed',
    roadTitle: 'No Public Access',
    roadDetail: 'Access road closed. Active road hazard on access roads.',
    statusCards: [['LIFT', '0 / 10', 'Lifts & terrain', 'text-emerald-600'], ['CARPARK', '0 / 6', 'Car parks & park', 'text-amber-600']],
  },
  'Treble Cone': {
    summary: 'Closed for the season',
    summaryDetail: 'Thanks for joining us this season. See you next season.',
    summaryUpdated: 'Snow report updated 7 Oct, 10:34 am',
    snow: [['Overnight', '—'], ['7 days', '—'], ['Snow base', '—']],
    conditions: [['4°C', 'TEMP', Thermometer], ['14 km/h', 'WIND', Wind], ['26 km/h', 'GUST', CloudSnow], ['—', 'SNOW BASE', Mountain]],
    weather: [['4°C', 'TEMP'], ['14 km/h', 'WIND'], ['26 km/h', 'GUST']],
    weatherUpdated: 'Weather report updated 10:10 pm',
    forecast: [['Fri 13th', '6°C', '16 km/h'], ['Sat 14th', '7°C', '10 km/h'], ['Sun 15th', '5°C', '37 km/h'], ['Mon 16th', '4°C', '27 km/h'], ['Tue 17th', '2°C', '19 km/h']],
    forecastNote: 'Official 5-day forecast for Treble Cone.',
    roadStatus: 'Chain Free',
    roadTitle: 'Gate is locked',
    roadDetail: 'See website for summer access info. Active road hazard on access roads.',
    statusCards: [['LIFT', '0 / 10', 'Lifts & terrain', 'text-emerald-600'], ['CARPARK', '0 / 6', 'Car parks & park', 'text-amber-600']],
  },
};

export default function MountainReport({ mountain, lang = 'en' }) {
  const [tab, setTab] = useState('Conditions');
  const report = REPORTS[mountain] || REPORTS.Cardrona;
  const officialUrl = `${OFFICIAL_REPORT}${mountain === 'Treble Cone' ? '?mountainId=treblecone' : ''}`;
  const labels = ['Conditions', 'Weather', 'Road'];
  const chinese = lang === 'zh';
  const localTitle = chinese ? (mountain === 'Cardrona' ? '2026 冬季雪季已结束' : '本季滑雪运营已结束') : report.summary;
  const localDetail = chinese ? (mountain === 'Cardrona' ? '夏季运营及山地自行车公园将于12月12日开放。' : '感谢您本季的到访。期待下一雪季再见。') : report.summaryDetail;

  return <section className="mini-mountain-report" aria-label={`${mountain} mountain report`}>
    <div className="mini-mountain-hero">
      <img src={MOUNTAIN_PHOTOS[mountain] || MOUNTAIN_PHOTOS.Cardrona} alt={`${mountain} mountain landscape`} />
      <div className="mini-hero-shade" />
      <div className="mini-hero-overline"><span>{mountain.toUpperCase()}</span><span className="mini-hero-status">{chinese ? '2026 雪季结束' : '2026 SEASON CLOSED'}</span></div>
      <div className="mini-hero-copy">
        <small>{chinese ? '雪山资讯 · 历史数据' : 'MOUNTAIN UPDATE · HISTORICAL SNAPSHOT'}</small>
        <h1>{localTitle}</h1>
        <p>{localDetail}</p>
        <a href={officialUrl} target="_blank" rel="noreferrer">{chinese ? '查看官网最新雪况' : 'Check official live report'} <ArrowUpRight size={14}/></a>
      </div>
    </div>

    <details className="mini-report-disclosure">
      <summary><span><Mountain size={18}/><span><b>{chinese ? '雪山实时信息入口' : 'Mountain conditions'}</b><small>{report.summaryUpdated} · {chinese ? '演示快照' : 'demo snapshot'}</small></span></span><span className="mini-report-summary-action">{chinese ? '详情' : 'Details'} <ArrowUpRight size={14}/></span></summary>
      <div className="mini-report-tabs" role="tablist" aria-label="Mountain information">
        {labels.map((name) => <button key={name} type="button" role="tab"
          aria-selected={tab === name} onClick={() => setTab(name)}
          className={tab === name ? 'is-selected' : ''}>{chinese ? { Conditions: '雪况', Weather: '天气', Road: '道路' }[name] : name}</button>)}
      </div>
      <div className="mini-report-tab-content" role="tabpanel">
        {tab === 'Conditions' ? <>
          <div className="mini-conditions-grid">{report.conditions.map(([value, label, Icon]) => <div key={label}><Icon size={17}/><b>{value}</b><small>{label}</small></div>)}</div>
          <div className="mini-lift-summary">{report.statusCards.map(([label, value, action]) => <Link key={label} to={`/snow-report?mountainId=${mountain === 'Treble Cone' ? 'treblecone' : 'cardrona'}&view=${label === 'LIFT' ? 'lifts' : 'carparks'}`}><b>{value}</b><span>{action}<ArrowUpRight size={12}/></span></Link>)}</div>
        </> : tab === 'Weather' ? <>
          <div className="mini-conditions-grid">{report.weather.map(([value, label]) => <div key={label}><b>{value}</b><small>{label}</small></div>)}</div>
          <div className="mini-weather-forecast">{report.forecast.map(([day, temp, wind]) => <div key={day}><span>{day}</span><b>{temp}</b><span>{wind}</span></div>)}</div>
        </> : <div className="mini-road-advisory"><AlertTriangle size={18}/><div><b>{report.roadTitle}</b><p>{report.roadDetail}</p><a href={officialUrl} target="_blank" rel="noreferrer">Latest access information <ArrowUpRight size={13}/></a></div></div>}
        <a href={officialUrl} target="_blank" rel="noreferrer" className="mini-official-link">{chinese ? '前往官网查看最新雪山信息' : 'View current conditions on the official resort site'} <ArrowUpRight size={13}/></a>
      </div>
    </details>
  </section>;
}
