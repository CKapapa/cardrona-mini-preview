// Customer storefront copy for the bilingual GitHub Pages preview.
// English remains the canonical source; Chinese is presented only at render time.
// Data identifiers, user input, order references and currency values are never rewritten.
import { useLayoutEffect } from 'react';
import { tx as translateStatus } from './i18nMaps';

export const CUSTOMER_ZH = {
  'Passes & packages':'雪票与套餐','Passes & Packages':'雪票与套餐','Configure pass':'配置雪票','Bike package':'山地车套餐','Book':'预订','Cart':'购物车',
  'New arrivals':'新品上架','Rentals':'装备租赁','Orders':'订单','Account':'我的账户','Log in':'登录','Create account':'创建账户',
  'Ski lessons':'滑雪课程','Mountain transport':'雪山交通','Trail map':'雪道图','Snow report':'雪况报告','Mountain & help':'雪山信息与帮助',
  'Home':'首页','Passes':'雪票','My account':'我的账户','Chinese':'中文','English':'英文','Go back':'返回','Main navigation':'主导航',
  'Season pass':'季票','Season passes':'季票','Winter Season Pass':'冬季季票','Winter Saver Season Pass':'冬季优惠季票',
  'Winter Unlimited Season Pass':'冬季无限畅滑季票','Summer Sightseeing Pass':'夏季观光票',
  'All':'全部','Lift pass':'缆车票','Lift passes':'缆车票','Packages':'套餐','Winter':'冬季','Summer':'夏季','Favorites':'收藏',
  'Season':'雪季','Buy Now':'立即购买','from / season pass':'季票起价','Winter 27 season':'2027冬季',
  '2026 pricing':'2026年参考价格','LIFT PASS':'缆车票','Choose the pass that suits your day · 2026 pricing':'按行程选择合适的雪票 · 2026年价格',
  'Show less':'收起','Learn more':'了解详情','Save pass':'收藏雪票','No saved passes yet.':'尚未收藏雪票。',
  'Sightseeing':'观光','Adult · includes 1 uplift':'成人 · 含一次缆车上行',
  'Summer Day Passes':'夏季单日票','Lift Pass and Bike Rental':'缆车票及山地车租赁','Bike Rental':'山地车租赁',
  'Peak to Pub · Lift Pass and Shuttle':'山顶到酒吧 · 缆车与接驳套餐','Summer Mountain Carting':'夏季山地滑车',
  'Learners Pass':'初学者雪票','Half Day Pass':'半日票','Single Day Pass':'单日票','Multi-Day Pass':'多日票','Lift Pass & Rental Combo':'缆车票及租赁套餐',
  'Summer 2026/27 season':'2026/27夏季','Summer visit':'夏季行程',
  'Ski or ride at both Cardrona and Treble Cone in Winter 27 with no blackout dates.':'2027年冬季可在卡德罗纳和三锥山滑雪，全季无禁用日期。',
  'Ski or ride at both Cardrona and Treble Cone in Winter 27 with no blackout dates':'2027年冬季可在卡德罗纳和三锥山滑雪，全季无禁用日期',
  'Ski or ride at Cardrona only in Winter 27. Blackout dates apply 5-16 July, 2027':'2027年冬季仅适用于卡德罗纳，7月5日至16日不可使用',
  'Enjoy alpine views and choose a scenic gondola uplift at McDougall’s Chondola.':'乘坐麦克杜格尔缆车欣赏壮丽高山风光。',
  'Full-day, afternoon and Friday evening bike park passes.':'山地车公园全天、下午及周五晚间通行票。',
  'A full-day lift ticket and mountain bike rental.':'全天缆车票及山地车租赁套餐。',
  'Enduro, downhill and full suspension options.':'可选耐力、速降及全避震山地车。',
  'Mountain access with return shuttle travel.':'包含山地通行及往返接驳车。',
  'A two-hour downhill cart pass with unlimited uplifts.':'两小时山地滑车体验，含不限次数缆车上行。',
  'Access to the beginners’ area with conveyors':'可使用设有魔毯的初学者区域','Gentle learner runs':'平缓的初级雪道',
  'A dedicated kids’ conveyor':'儿童专用魔毯','One ride on McDougall’s Chondola (Cardrona only)':'可乘坐一次麦克杜格尔缆车（仅卡德罗纳）',
  'Half a day of skiing or riding from 12:30pm':'下午12:30起可滑雪半天','Choose Cardrona or Treble Cone':'可选择卡德罗纳或三锥山',
  'Available on the day of travel only':'仅限当日购买','Purchase at ticket offices or the call centre':'在售票处或电话中心购买',
  'One full day skiing or riding':'全天滑雪通行','Ski or ride on your selected day':'在指定日期滑雪',
  'Buy online and save up to NZ$15':'在线购买最多节省15新西兰元','Access both Cardrona and Treble Cone':'可前往卡德罗纳和三锥山',
  'Ski or ride at both mountains':'可在两座雪山滑雪','Use anytime during the season':'雪季内灵活使用','The more days you buy, the less you pay':'购买天数越多，日均费用越低',
  'Single or multi-day lift pass':'单日或多日缆车票','Rental skis and boots or snowboard and boots':'可租双板和雪鞋，或单板和雪鞋',
  'Upgrade to the complete bundle for clothing and accessories':'可升级含服装和配件的完整套餐',
  // Booking / passes / cart
  'Order summary':'订单摘要','Order Summary':'订单摘要','Item Summary':'项目汇总','Sub-Total':'小计','Total due':'应付总额',
  'Total':'合计','Total (incl GST)':'总额（含商品及服务税）','Total (simulated)':'合计（模拟）','Due Today':'今日应付',
  'Continue':'继续','Checkout':'结账','Confirm demo booking':'确认演示订单','Choose a payment method':'选择支付方式',
  'Tap one to select it. This is a demo checkout.':'请选择一种支付方式。此处为演示结账。',
  'WeChat Pay':'微信支付','Credit card':'信用卡','Credit card / Visa / Mastercard':'信用卡 / Visa / Mastercard',
  'Scan or pay right inside WeChat':'通过微信内支付（流程演示）','International cards, 3-D Secure supported':'国际信用卡 · 3-D Secure流程演示',
  'Card details':'银行卡信息','Sample card preview. Card information is not collected.':'仅展示银行卡样例，不收集银行卡信息。',
  'Secure demo checkout. No payment will be taken.':'安全演示结账，不会发生真实扣款。',
  'I accept the booking terms':'我同意预订条款','Booking confirmed':'演示订单已创建',
  'Demo receipt created. This is not a valid lift ticket.':'已生成演示凭证，此凭证并非有效雪票。',
  'Order no.':'订单号','Items':'项目','Visit date':'游玩日期','Payment method':'支付方式',
  'Ticket QR code (simulated)':'电子票二维码（演示）',
  'Demo order only. No payment was taken and this QR code is not a valid product or lift ticket.':'仅供演示：未发生实际付款，此二维码不是有效商品凭证或雪票。',
  'View my orders':'查看我的订单','View Cart':'查看购物车','Add To Cart':'加入购物车','Add to cart':'加入购物车',
  'Apply Discount Code':'使用优惠码','Discount code':'优惠码','Apply code':'应用优惠码','Enter code (try PEAK10)':'输入优惠码（可试 PEAK10）',
  'Your cart is empty.':'购物车为空。','Explore passes':'浏览雪票','UNASSIGNED':'待分配','EDIT':'编辑','SHOW DETAILS':'查看详情',
  'REMOVE':'移除','CONTINUE SHOPPING':'继续选购','Cart total':'购物车合计','Cart Total':'购物车合计','View Payment Schedule ›':'查看分期计划 ›',
  'Due today':'今日应付','4 remaining':'剩余4期','Select One (Required)':'请选择（必选）','Select One (Optional)':'请选择（可选）',
  'I accept the rules of the Winter Saver':'我同意冬季优惠季票的使用规则','Age':'年龄','Adult: 18 - 64 yrs':'成人：18–64岁',
  'Pay Now':'立即付款','Buy Now, Pay Later':'先买后付','Booking online saves you':'在线预订可节省',
  'Select':'请选择','Start Date':'开始日期','Start Time':'开始时间','Start time:':'开始时间：','Select a date':'选择日期',
  'You Save':'您已节省','Got a discount code? Apply it at checkout.':'有优惠码？可在结账时使用。',
  'Item Added':'已加入购物车','Per Item Subtotal':'单项小计','Per Item Total':'单项合计','Payment is available at checkout. No real charge is made.':'结账时选择付款方式，此演示不会产生真实扣款。',
  'Payment is available at checkout. No real charge is made.':'在结账页面选择付款方式，此演示不会产生真实扣款。',
  'Visit details':'游玩信息','Selected visit date:':'已选日期：','Selected visit dates:':'已选日期：',
  'No visit date is required for these items.':'这些商品无需指定游玩日期。','Items in this order':'订单项目','Guests':'游客','Guest':'游客',
  'From':'从','To':'至','Guest details and waiver':'游客信息及免责条款','Guest details':'游客信息','Guest information':'游客信息',
  'First name *':'名 *','Last name *':'姓 *','Date of birth *':'出生日期 *','Nationality *':'国籍 *',
  'Phone *':'联系电话 *','Email *':'电子邮箱 *','China':'中国','Australia':'澳大利亚','New Zealand':'新西兰',
  'For your e-ticket':'用于接收电子票','Sign here':'请在此签名','Signature demonstration area':'演示签名区',
  'I have read and agree to the terms that apply to the products in my order.':'我已阅读并同意订单商品适用的条款。',
  'Demo form only. Guest details and signatures are not saved or sent.':'仅供演示：不会保存或发送游客信息和签名。',
  'Demo checkout · no real charge is made.':'演示结账 · 不会真实扣款。',
  'Select your pass':'选择雪票','Choose your pass':'选择雪票','Choose a date':'选择日期',
  'First timer':'初学者','Choose your session':'选择课程时段',
  // Orders and account
  'Everything for your visit':'您的行程总览','Your plans, all together.':'所有行程，一目了然。',
  'Tickets, confirmations and the details that matter.':'集中查看雪票、确认信息和行程详情。',
  'Upcoming':'即将开始','Past':'历史订单','Cancelled':'已取消','Ski passes':'滑雪票','Mountain store':'山地商店',
  'Includes eligible agent bookings made with discount codes':'包括符合条件的代理优惠码订单',
  'Confirmed':'已确认','Redeemed':'已使用','Reschedule requested':'已申请改期',
  'No orders in this view.':'暂无相关订单。','Load more':'加载更多','guest':'位游客','guests':'位游客',
  'Guest visitor':'访客','Normal visitor':'普通游客','Already an agent?':'已有代理账户？','Agent login':'代理登录',
  'Not signed in':'尚未登录','Browsing as guest':'以访客身份浏览','Email':'电子邮箱','Name':'姓名',
  'My bookings':'我的预订','Bookings and e-tickets':'预订记录与电子票',
  'Saved items':'我的收藏','Saved passes and store items':'已收藏的雪票和商品',
  'Mountain info & help':'雪山信息与帮助','Access, trails and FAQs':'交通、雪道与常见问题',
  'Agent distribution centre':'代理分销中心','Commission, agent codes and booking links':'佣金、代理码及预订链接',
  'Demo build · payments and resort systems are simulated':'演示版本 · 支付和雪场系统均为模拟',
  'Log out':'退出登录','Agent centre':'代理中心','Agent account':'代理账户','Agent access':'代理入口',
  'Enter agent code':'输入代理代码','Sign in':'登录','Sign out':'退出登录','Agent name':'代理名称',
  'That demo access code was not recognised.':'演示访问码无效。',
  'Create your account':'创建您的账户','Welcome back':'欢迎回来','Guest account':'游客账户',
  'Sign in to manage bookings and passes':'登录后管理预订和雪票','Log in with WeChat':'微信登录',
  'Log in with number':'手机号登录','Mobile number':'手机号码','Send SMS code':'发送短信验证码',
  'SMS verification code':'短信验证码','Enter 123456 to continue':'输入123456继续演示',
  'Create an account':'创建账户','Payment methods':'支付方式','Mountain help':'雪山帮助',
  // Home/resort
  'Book your visit':'预订行程','Book a ticket':'预订雪票','Eat, stay & play':'吃住玩乐',
  'Cafés & restaurants':'咖啡厅与餐厅','Events & activities':'活动与体验','Accommodation':'住宿',
  'Cafés':'咖啡厅','Activities':'活动','Stay':'住宿','Eat':'餐饮','Explore':'探索','View all':'查看全部',
  'Location:':'位置：','Opening hours:':'营业时间：','Offering:':'提供：','OPEN':'营业中',
  'Explore cafés, restaurants and bars around the mountain.':'探索雪山上的咖啡厅、餐厅和酒吧。',
  'Find a quick refuel or a relaxed lunch at Treble Cone.':'在三锥山轻松补充能量或享用午餐。',
  'Learn more':'了解详情','Check in':'入住日期','Check out':'退房日期','Nights':'晚数','night':'晚','nights':'晚',
  'Adults':'成人','Children':'儿童','Infants':'婴儿','Search':'搜索','Search stays':'搜索住宿',
  'Available':'可预订','Occupied':'已入住','Maintenance':'维护中','Book room':'预订客房',
  'Room type':'房型','Room':'房间','Guest name':'住客姓名','Save':'保存','Close':'关闭','Cancel':'取消',
  'Taste notes':'口味备注','Any preferences or allergies?':'是否有口味偏好或过敏信息？',
  'Pick your dishes, edit quantities and taste notes at checkout':'选择菜品和数量，并在结账时填写备注',
  'Weather permitting':'视天气情况开放','Hours and weather-dependent service can change. Check the':'营业时间和服务可能因天气调整，请查阅',
  'official restaurant page':'餐厅官方页面','for current details.':'了解最新详情。',
  'Full day':'全天','Half day':'半天',
  // Mountain information / support
  'Mountain':'雪山','Getting here':'交通指南','FAQs':'常见问题','Policies':'政策与条款',
  'Passes for both mountains':'两座雪山的雪票',
  'The Unlimited Season Pass covers Cardrona and Treble Cone. The Saver Season Pass is Cardrona-only. Check each pass for its mountain access.':'无限畅滑季票适用于卡德罗纳和三锥山；优惠季票仅适用于卡德罗纳。请确认每种雪票的适用雪山。',
  'Compare passes':'比较雪票','Between Queenstown and Wānaka':'位于皇后镇与瓦纳卡之间',
  'On the shore of Lake Wānaka':'位于瓦纳卡湖畔','Base / lift high':'基地 / 缆车最高点','Terrain':'雪道地形','Vertical rise':'垂直落差',
  'Longest run':'最长雪道','Winter season:':'冬季营业期：',
  'Five basins and five terrain parks':'五个雪盆及五座地形公园',
  'Beginner to advanced terrain':'从初级到高级的雪道','Nine on-mountain eateries':'九处山上餐饮场所',
  'Summit reaches 2,088 m; 700 m lift-serviced vertical':'山顶海拔2,088米，缆车覆盖垂直落差700米',
  'Beginner to expert terrain, mostly intermediate and advanced':'涵盖初级至专家级，主要为中高级雪道','Views across Lake Wānaka':'俯瞰瓦纳卡湖',
  'Getting to the mountain':'如何抵达雪山','Queenstown → Cardrona':'皇后镇 → 卡德罗纳',
  'Wānaka → Cardrona':'瓦纳卡 → 卡德罗纳','Driving and parking':'自驾与停车',
  'Free mountain road shuttle':'免费山路接驳车','Paid guest buses':'收费游客巴士','Where to stay':'住宿选择',
  'Book a shuttle or transfer':'预订接驳或接送服务','Choose your mountain, pickup, date and passengers':'选择雪山、上车地点、日期和人数',
  'Frequently asked questions':'常见问题','Booking terms':'预订条款','Read official terms':'阅读官方条款',
  'Lift passes and collection':'雪票及取票','Changes and refunds':'更改与退款',
  'Transport bookings':'交通预订','Mountain and road safety':'雪山与道路安全','Payment':'支付',
  'Official conditions can change. Check the current product terms before booking.':'官方条款可能调整。预订前请查阅最新产品条款。',
  'This demo page is not available.':'演示页面暂不可用。',
  'Contact support':'联系客服','Support':'客服支持','Help':'帮助','Trail maps':'雪道地图',
  'No real payment is processed.':'不会进行真实付款。','Preview only · no real payments or tickets':'仅供预览 · 不会真实付款或出票',
  'Cart ·':'购物车 ·','items':'件','item':'件',
  'Return':'返回','OK':'确定','Details':'详情','View details':'查看详情','Confirm':'确认',
  'Price':'价格','Quantity':'数量','Date':'日期','Add':'添加','Remove':'移除','Apply':'应用',
  'View more':'查看更多','View less':'收起','Start date':'开始日期','End date':'结束日期',
  'First-timer packages':'初学者套餐','Your first turns start here.':'开启您的第一次滑雪体验。',
  '2027 season passes on pre-sale':'2027年季票预售','Early-bird price · Unlimited all season · Treble Cone included':'早鸟价格 · 全雪季畅滑 · 包含三锥山',
  'View passes':'查看季票','Lessons':'滑雪课程','Rentals':'装备租赁','Transport':'交通','Stay':'住宿','Private, group & kids':'私教、团体及儿童课程',
  'Skis, boards & gear':'双板、单板及装备','Pickup & return travel':'接送及返程交通','On-mountain escapes':'雪山住宿体验',
  'Planning a summer visit?':'计划夏季旅行？','Mountain biking, carting & sightseeing':'山地骑行、山地滑车与观光',
  'Just need a lift pass?':'只需要缆车票？','Find your pass':'选择雪票','Ski booking':'滑雪预订','Passes · Lessons · Rentals':'雪票 · 课程 · 租赁',
  'Live inventory':'实时库存（演示）','Mountain shop':'雪山商店','New arrivals · Apparel accessories':'新品 · 服饰及配件',
  'Retail':'零售','Add On':'附加项目','Discount':'优惠','Show slide':'切换推荐',
};


// Additional language coverage for the deep booking, account, shop and resort pages.
Object.assign(CUSTOMER_ZH, {
  'Display language':'显示语言','Cardrona and Treble Cone home':'卡德罗纳及三锥山首页','Select mountain':'选择雪山',
  'Featured mountain activities':'精选雪山活动','Choose a featured slide':'选择精选活动','Close booking':'关闭预订',
  'Demonstration accommodation booking.':'住宿预订演示。','Check the details before adding your demo reservation to the cart.':'核对住宿信息后加入演示购物车。',
  'Notes:':'备注：','Unit type':'房型','Room photo':'客房照片','A sample photo of this unit type is shown for reference.':'所示为该房型的参考照片。',
  'Booking reference':'预订编号','Status':'状态','Notes':'备注','Anything we should know, e.g. high floor or early check-in':'是否有特殊要求，例如高楼层或提前入住',
  'Back to details':'返回详情','Review booking':'核对预订','Payment Plan':'付款方式','Choose your Payment Option':'选择付款方案',
  'Instalment':'分期付款','Mountain services':'雪山服务','Mountain help and support':'雪山客服与帮助',
  'Eat, stay and play categories':'餐饮住宿与活动分类','Choose mountain restaurant listings':'选择雪山餐厅列表',
  'Stay search options':'住宿搜索选项','Currency':'货币','Currency conversions are sample demo rates. Checkout uses NZD.':'汇率仅供演示，结账金额以新西兰元计。',
  'Available accommodation':'可预订住宿','Select a stay to see your demo total.':'选择住宿查看演示费用。','More info':'更多信息','Nightly availability':'每晚房态',
  'Qty':'数量','Continue booking':'继续预订','Demo room availability and sample rates only. Check the official site for live inventory and pricing.':'房态和价格仅供演示，实际库存及价格请以官方网站为准。',
  'NEW TO THE SNOW?':'第一次滑雪？','Explore first-timer packages':'浏览初学者套餐','LIMITED TIME':'限时优惠',
  'Demo catalogue':'演示商品目录','Retail':'零售','Order subtotal':'订单小计','Order details':'订单详情',
  'Your selected products and options will be confirmed in the demo checkout.':'您选购的商品和选项将在演示结账页面确认。',
  'Remove guest':'移除游客','Add guest':'增加游客','Passport name (pinyin) *':'护照姓名（拼音）*','Legal name (as on passport) *':'法定姓名（与护照一致）*',
  'e.g. CHEN WEI':'例如：CHEN WEI','e.g. Wei Chen':'例如：Wei Chen','Open cart':'打开购物车',
  'Toggle favorite':'切换收藏','CARDRONA CORNER':'卡德罗纳商店',
  'Commission, discount codes and booking links':'佣金、优惠码和预订链接','Gold Agent Applied · 10% discount active':'已应用金牌代理价 · 享受10%优惠',
  'Total commission':'佣金总额','Revenue from paid bookings':'已付款预订收入','Paid bookings':'已付款订单',
  'Commission rate':'佣金比例','Claimable':'可申请结算','Claim commission':'申请佣金结算','Nothing to claim yet':'暂无可结算佣金',
  'My discount codes':'我的优惠码','No discount codes assigned yet':'暂无分配的优惠码','Claim history':'结算记录','No claims yet':'暂无结算记录',
  'Close agent login':'关闭代理登录','Enter your agent access code to unlock agent net rates':'输入代理访问码查看专属结算价',
  'Agent access code':'代理访问码','Demo code: AGENT-10':'演示访问码：AGENT-10',
  'Find your feet on snow with supportive instructors and small groups for every level.':'专业教练与小班课程，帮助不同水平的游客自信踏上雪道。',
  'Choose a date and session':'选择日期及课程时段','Mountain status':'雪山运营状态','Open official snow report':'查看官方雪况报告',
  'Demo statuses. Confirm current openings on the official report.':'营业状态仅供演示，请以官方实时雪况为准。',
  'Children under 6 ski or ride free, but still need a lift pass. On guest buses, children under 14 must travel with adult supervision. Check the live snow report for current conditions.':'6岁以下儿童可免费滑雪，但仍需办理雪票。14岁以下儿童乘坐游客巴士须由成人陪同。最新雪况请以官方报告为准。',
  'Paid guest buses run from Queenstown and Wānaka. Free mountain road shuttles connect designated lower car parks with the mountains; no booking is required for these shuttles.':'收费游客巴士从皇后镇和瓦纳卡出发；免费山路接驳车连接山下指定停车场与雪山，无需预订。',
  'Paid bus services must be pre-booked. Free mountain road shuttles are first-come, first-served and may change with weather, road conditions or capacity. Always check the official timetable and snow report before travelling.':'收费游客巴士须提前预订。免费山路接驳车按先到先得运营，时间可能受天气、道路和载客量影响。出发前请核对官方班次及雪况。',
  'Rules depend on the pass, lesson, accommodation or transport product. Check its terms before purchase.':'各类雪票、课程、住宿和交通产品的条款有所不同，购买前请仔细阅读。',
  'Enjoy the mountain views, explore alpine trails, or take a scenic gondola ride.':'欣赏高山风光、探索步道，或乘坐观光缆车。',
  'This pass is valid on your selected summer date at Cardrona.':'该票适用于您选择的卡德罗纳夏季日期。',
  'Gondola Ride':'观光缆车','1 uplift - McDougall\'s Chondola':'麦克杜格尔缆车上行一次',
  'Enjoy a two-hour mountain carting experience with unlimited uplifts. Choose your age band, a cart size, and an available start time.':'体验两小时山地滑车（含不限次数上行），请选择年龄段、滑车尺寸和开始时间。',
  'Payment plan':'付款计划','Number of days':'天数','Select a Time':'选择时间','(Required)':'（必选）',
  'First Timer':'初学者','Adult':'成人','Child':'儿童','Senior':'长者',
  'Child: 6 - 17 yrs':'儿童：6–17岁','Child: 6 - 17':'儿童：6–17岁','Over 75 yrs: Free of Charge':'75岁以上：免费',
  'Under 6':'6岁以下','Child Under 6':'6岁以下儿童','Over 75':'75岁以上','Men':'男士','Women':'女士','Accessories':'配件',
  'All brands':'所有品牌','New':'新品','See more':'查看更多','See less':'收起','No date selected':'尚未选择日期',
  'Enduro':'耐力型','Downhill':'速降','Full Suspension':'全避震','Bike':'山地车',
  'LIFT':'缆车','CARPARK':'停车场','Conditions':'雪况','Weather':'天气','Road':'道路',
  'TEMP':'温度','WIND':'风速','GUST':'阵风','SNOW BASE':'积雪厚度','BASE · 1,800 M':'海拔1800米积雪',
  'Lifts & terrain':'缆车与雪道','Car parks & park':'停车场与设施',
  'Overnight':'昨夜','7 days':'过去7天','Snow base':'积雪厚度','No Public Access':'暂停对公众开放',
  'Gate is locked':'入口已关闭','Chain Free':'无需雪链','Latest access information':'最新通行信息',
  'Mountain information':'雪山信息',
  'Mountain conditions':'雪山状况','Mountain information':'雪山信息',
  '5-day outlook to prepare for on-mountain conditions.':'未来五天天气预报，便于提前规划行程。',
  'Weather report updated 10:10 pm':'天气更新于晚上10:10',
  'Road closed. Active road hazard on access roads.':'山路已关闭。请注意道路安全风险。',
  'See website for summer access info. Active road hazard on access roads.':'夏季通行信息请查阅官网。请注意道路安全风险。',
  'View current conditions on the official resort site':'在雪场官网查看实时状况',
  'Do not use this pass at a real gate.':'此票不可用于真实闸机通行。',
  'Continue to payment preview':'进入支付演示','Payment preview':'付款演示','Payment complete (simulation)':'付款演示完成',
  'Payment pending':'待付款','Payment cancelled':'付款已取消','Payment failed':'付款失败',
  'Preview native Mini Program confirmation':'模拟小程序原生支付确认',
  'Separate payment channel · concept only':'独立支付渠道 · 仅供概念演示',
  'Provider-hosted card confirmation · demo':'收单服务商银行卡验证 · 演示',
  'Card authorization is illustrated in the next step. No card data is collected.':'下一步将演示银行卡授权，不会收集真实卡信息。',
'Credit card (demo)':'信用卡（演示）',
  'Simulated - no funds taken':'已模拟 · 无实际扣款',
  'Summer 26/27':'2026/27夏季','Winter 27':'2027冬季',
});

// Additional customer-facing labels: review and support screens, saved orders,
// agent login and the checkout. Keep dynamic price and form values untouched.
Object.assign(CUSTOMER_ZH, {
  'Everything for your visit':'您的全部行程',
  'Your plans, all together.':'行程安排，一目了然。',
  'Tickets, confirmations and the details that matter.':'雪票、预订确认及重要行程信息。',
  'Includes eligible agent bookings made with discount codes':'包括使用代理优惠码的合资格预订',
  'No orders in this view.':'当前没有相关订单。',
  'Upcoming':'即将到来', 'Past':'历史订单', 'Cancelled':'已取消',
  'Ski passes':'滑雪票', 'Mountain store':'雪山商店',
  'Log out':'退出登录','Sign out':'退出登录', 'Already an agent?':'您是代理商吗？',
  'Agent login':'代理商登录','Agent distribution centre':'代理分销中心',
  'Guest account':'游客账户','Sign in to manage bookings and passes':'登录后管理预订及雪票',
  'Log in with WeChat':'微信登录（演示）', 'Log in with number':'手机号登录（演示）',
  'Mobile number':'手机号码','Send SMS code':'发送短信验证码',
  'SMS verification code':'短信验证码','Enter 123456 to continue':'输入 123456 继续演示',
  'Create an account':'注册账户', 'Sign in':'登录',
  'Not signed in':'尚未登录', 'Browsing as guest':'以游客身份浏览',
  'Guest visitor':'游客','Normal visitor':'普通游客',
  'My bookings':'我的预订','Saved items':'我的收藏',
  'Mountain info & help':'雪山信息与帮助',
  'Demo build · payments and resort systems are simulated':'演示版本 · 付款及雪场系统均为模拟',
  'Passes for both mountains':'双雪山雪票',
  'The Unlimited Season Pass covers Cardrona and Treble Cone. The Saver Season Pass is Cardrona-only. Check each pass for its mountain access.':'无限畅滑季票适用于卡德罗纳与三锥山；优惠季票仅适用于卡德罗纳。购买前请核对每种雪票的使用范围。',
  'Compare passes':'比较雪票', 'Getting to the mountain':'前往雪山',
  'Frequently asked questions':'常见问题','Read official terms':'查看官方条款',
  'Official conditions can change. Check the current product terms before booking.':'官方政策可能调整，预订前请核对最新商品条款。',
  'This demo page is not available.':'此演示页面暂不可用。',
  'Close menu':'关闭菜单','Pick your dishes, edit quantities and taste notes at checkout':'选择餐食，并在结账时修改数量及口味备注',
  'Taste notes':'口味备注','Any preferences or allergies?':'有忌口或过敏信息吗？',
  'Cancel':'取消','Close':'关闭', 'Decrease':'减少','Increase':'增加',
  'Phone *':'电话号码 *', 'Email *':'电子邮箱 *',
  'No orders in this view':'当前没有相关订单',
  'Cancelled':'已取消','Confirmed':'已确认','Pending':'待处理',
  'Paid':'已付款','Unpaid':'未付款','Refunded':'已退款',
  'No payment will be taken.':'不会发生真实扣款。',
  'Total · NZ$':'总额 · NZ$',
  'This unit is':'此房型状态为', 'Available':'可预订', 'Unavailable':'不可预订',
  'Check in':'入住日期','Check out':'退房日期','Nights':'晚数',
  'Location:':'位置：','Opening hours:':'营业时间：','Offering:':'服务项目：',
  'Cafés & restaurants':'咖啡厅与餐厅','Events & activities':'活动与体验',
  'Accommodation':'住宿','More activities':'更多活动',
  'Equipment size':'装备尺寸','Choose your equipment size:':'请选择装备尺寸：',
  'First name':'名','Last name':'姓','Name':'姓名','Email':'电子邮箱',
  'Show details':'查看详情', 'Remove':'移除',
  '10% discount applied':'已应用10%折扣','Code not recognized':'优惠码无效',
  'Demo food order added to your cart':'演示餐食已加入购物车',
  'A real WeChat Pay charge is not made in this preview.':'本预览不会执行真实微信支付扣款。',
});

// Customer journey translation coverage: additional pass, rental and transport copy.
Object.assign(CUSTOMER_ZH, {
  "Pass Type": "雪票类型",
  "Closed": "已关闭",
  "Your e-ticket is ready. Scan it at the lift gate.": "您的电子票已就绪。请注意：演示二维码不能用于真实闸机。",
  "View passes →": "查看季票 →",
  "◎ Agent login": "◎ 代理登录",
  "E.g. AGENT-10": "例如：AGENT-10",
  "Mountain Carting Buddy Add On": "山地滑车儿童陪同附加项",
  "Carting With Kids": "儿童同乘滑车",
  "Add a child between 6 and 8 yrs to ride tandem with an adult. Combined weight per cart must not exceed 110kg and the child must not exceed 100cm tall.": "6–8岁儿童可与成人同乘，单车总重量不得超过110公斤，儿童身高不得超过100厘米。",
  "Cardrona Valley Shuttle - up options": "卡德罗纳山谷接驳车（上行）",
  "What time do you want to catch the shuttle?": "您希望乘坐几点的接驳车？",
  "Plant a Seed": "种下一颗种子",
  "The Kārearea Project": "卡雷阿雷亚保护项目",
  "Choose your option": "请选择选项",
  "Choose a pass to see the price": "选择雪票后查看价格",
  "Illustrative demo price · payment at checkout": "价格仅供演示 · 结账时选择付款",
  "Decrease quantity": "减少数量",
  "Increase quantity": "增加数量",
  "You save": "您已节省",
  "No bike? No problem. Rent an enduro or downhill bike and hit the trails, whatever your age or ability. Summer rentals include a helmet and safety pads.": "没有山地车？可租用耐力型或速降山地车，夏季租赁包含头盔和护具。",
  "Grab a day pass and a bike rental at Cardrona Bike Park in one easy booking.": "一次预订即可获得卡德罗纳山地车公园单日票和山地车租赁。",
  "Half Day Package": "半日套餐",
  "Choose your day": "选择日期",
  "Adult or Child": "成人或儿童",
  "Choose either Enduro or Downhill bike": "选择耐力型或速降山地车",
  "Bike Size - Full Suspension": "全避震山地车尺寸",
  "Bike Insurance": "山地车保险",
  "Per day": "每天",
  "Per item total": "每项合计",
  "Plan your trip": "规划行程",
  "Choose where you’re starting and which mountain you’re visiting to compare travel options.": "选择出发地和目的雪山，比较交通方式。",
  "Cardrona Valley Road": "卡德罗纳山谷公路",
  "Wānaka": "瓦纳卡",
  "Queenstown": "皇后镇",
  "Travel options": "交通选项",
  "Cardrona Summer Shuttle": "卡德罗纳夏季接驳车",
  "Drive to Cardrona": "自驾前往卡德罗纳",
  "Après later-departure bus": "滑雪后晚间班车",
  "Fares, schedules and road conditions may change. Confirm current information on the official Cardrona & Treble Cone site before you travel.": "票价、班次和路况可能变化，出发前请在卡德罗纳与三锥山官方网站核对最新信息。",
  "Official transport information": "官方交通信息",
  "Ski & snowboard rentals": "双板与单板租赁",
  "Choose your equipment, clothing and pickup location for your mountain day.": "选择雪具、滑雪服及取件地点。",
  "Pickup & fitting": "取件与试穿",
  "On-mountain pickup starts at 8:30am. Town collection is available the day before: from noon in Queenstown or 3pm in Wānaka. Premium rentals must be collected and returned on the mountain.": "雪山取件从上午8:30开始；可提前一天在皇后镇中午12点后或瓦纳卡下午3点后取件。高级租赁装备须在雪山领取并归还。",
  "Return equipment to the pickup location unless another arrangement is confirmed.": "除非另行确认，请将装备归还至取件地点。",
  "View all rental details on Cardrona’s website": "在卡德罗纳官网查看租赁详情",
  "Choose trail map season": "选择雪道图季节",
  "Pinch to zoom or use the controls": "双指缩放或使用控制按钮",
  "Zoom out": "缩小",
  "Zoom in": "放大",
  "Official trail maps and mountain details": "官方雪道图与雪山详情",
  "Map artwork is supplied by Cardrona & Treble Cone. Check the official mountain information for current trail and lift status.": "地图由卡德罗纳与三锥山提供。实时雪道与缆车状态请以官方信息为准。",
  "Would you like to support the Cardrona Foundation?": "愿意支持卡德罗纳基金会吗？",
  "Help us spread goodness, guardianship and conservation throughout our communities.": "帮助我们共同支持当地社区及生态保护。",
  "Yes, I'd like to make a donation": "是的，我愿意捐款",
  "2027 season passes on pre-sale": "2027年季票预售"
});

const DYNAMIC = [
  [/^(\d+) demo orders$/i, (_, n) => `${n}个演示订单`],
  [/^Guest (\d+)$/i, (_, n) => `游客 ${n}`],
  [/^Ends in\s*(.+)$/i, (_, n) => `剩余时间 ${n}`],
  [/^Load more \((\d+) left\)$/i, (_, n) => `加载更多（剩余${n}条）`],
  [/^(\d+) (guest|guests)$/i, (_, n) => `${n}位游客`],
  [/^(\d+) (item|items)$/i, (_, n) => `${n}件商品`],
  [/^Cart · (\d+) items$/i, (_, n) => `购物车 · ${n}件`],
  [/^(.*) restaurants, cafés & bars$/i, (_, n) => `${n}餐厅、咖啡厅与酒吧`],
  [/^From NZ\$(\d+(?:\.\d+)?) adult$/i, (_, n) => `成人起价 NZ$${n}`],
  [/^NZ\$(\d+(?:\.\d+)?) adult$/i, (_, n) => `成人 NZ$${n}`],
  [/^(.+) selected$/i, (_, s) => `${s}已选择`],
  [/^Selected visit dates?:\s*(.+)$/i, (_, s) => `已选游玩日期：${s}`],
];

export function zhCustomer(value) {
  if (typeof value !== 'string' || !value.trim()) return value;
  const core = value.trim();
  let converted = CUSTOMER_ZH[core];
  if (!converted) {
    for (const [pattern, fn] of DYNAMIC) {
      const match = core.match(pattern);
      if (match) { converted = fn(...match); break; }
    }
  }
  if (!converted && / \u00b7 | · | \| /.test(core)) {
    const pieces = core.split(/( · | \| )/);
    if (pieces.some((s) => CUSTOMER_ZH[s])) converted = pieces.map((s) => CUSTOMER_ZH[s] || s).join('');
  }
  if (!converted) {
    const mapped = translateStatus(core, 'zh');
    if (mapped !== core) converted = mapped;
  }
  if (!converted) return value;
  return value.replace(core, converted);
}

const originalText = new WeakMap();
const originalAttrs = new WeakMap();
const ATTRS = ['placeholder', 'aria-label', 'title'];

// Translate all storefront routes, including nested configurators, without
// changing product IDs, form values, existing CSS or backend interfaces.
// This is a DOM adapter for the original demo's hundreds of hardcoded labels;
// in production, replace it with source-level react-intl/i18next message IDs.
export function useCustomerDomLanguage(lang, pathname) {
  useLayoutEffect(() => {
    const root = document.querySelector('.cardrona-mini');
    if (!root) return undefined;
    let updating = false;
    const apply = () => {
      if (updating) return;
      updating = true;
      try {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        let node;
        while ((node = walker.nextNode())) {
          const el = node.parentElement;
          if (!el || el.closest('script,style,textarea,[data-no-localize]')) continue;
          const current = node.nodeValue;
          let entry = originalText.get(node);
          // A React re-render can change the English copy or a dynamic count.
          // Only consider it a new source if it differs from the adapter's last output.
          if (!entry || current !== entry.lastApplied) {
            entry = { source: current, lastApplied: current };
            originalText.set(node, entry);
          }
          const desired = lang === 'zh' ? zhCustomer(entry.source) : entry.source;
          if (current !== desired) node.nodeValue = desired;
          entry.lastApplied = desired;
        }
        root.querySelectorAll('input,textarea,button,a,select,[aria-label],[title]').forEach((el) => {
          let attrs = originalAttrs.get(el);
          if (!attrs) { attrs = {}; originalAttrs.set(el, attrs); }
          ATTRS.forEach((attr) => {
            if (!el.hasAttribute(attr)) return;
            const current = el.getAttribute(attr);
            let entry = attrs[attr];
            if (!entry || current !== entry.lastApplied) entry = { source: current, lastApplied: current };
            const desired = lang === 'zh' ? zhCustomer(entry.source) : entry.source;
            if (current !== desired) el.setAttribute(attr, desired);
            entry.lastApplied = desired;
            attrs[attr] = entry;
          });
        });
      } finally { updating = false; }
    };
    apply();
    const observer = new MutationObserver((mutations) => {
      // Ignore the mutation events produced solely by translations.
      if (updating || mutations.every((m) => m.type === 'characterData' && originalText.has(m.target) && m.target.nodeValue === originalText.get(m.target).lastApplied)) return;
      apply();
    });
    observer.observe(root, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, [lang, pathname]);
}
