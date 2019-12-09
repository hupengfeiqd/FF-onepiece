import Index from '../views/Index'

export const routes = [
  { path:"/", component:Index },
  // 海贼
  { path:"/pirates"},
  { path:"/pirates/fourEmperor",component: () => import('../views/pirates/FourEmperor')},// 四皇
  { path:"/pirates/qiWuHai",component: () => import('../views/pirates/QiWuHai')}, // 七武海
  { path:"/pirates/superstar",component: () => import('../views/pirates/Superstar')}, // 极恶时代
  { path:"/pirates/strawHatGang",component: () => import('../views/pirates/StrawHatGang')}, // 草帽一伙
  { path:"/pirates/moneyRanking",component: () => import('../views/pirates/MoneyRanking')}, // 悬赏金排行榜
  { path:"/pirates/piratesTiming",component: () => import('../views/pirates/piratesTiming'),children:[
    { path:"/pirates/piratesTiming/:piraName",name: "timing",component: () => import('../components/showMember')},
  ],redirect:{ name: "timing", params: {piraName: "罗杰海贼团",pName: "哥尔·D·罗杰(已逝)"}}},  // 大海贼时代
  // 世界政府
  { path:"/worldGovt"},
  { path:"/worldGovt/navybase",component: () => import('../views/Navybase')}, // 海军本部
  { path:"/worldGovt/cipherPOL",component: () => import('../views/CipherPOL')}, // 间谍机关
  { path:"/worldGovt/prison",component: () => import('../views/Prison')}, // 海底大监狱
  // 革命军
  { path:"/revolutionaryArmy", component: () => import('../views/RevolutionaryArmy') },
  // 航线旅程
  { path:"/trip", component: () => import('../views/Trip') },
  // 和之国
  { path:"/hezhiguo", component: () => import('../views/HeZhiGuo') },
  // 历史正文
  { path:"/history", component: () => import('../views/History') },
  // 恶魔果实
  { path:"/devilFruit", component: () => import('../views/DevilFruit') },
  // 古代兵器
  { path:"/ancientWeapon", component: () => import('../views/AncientWeapon') },
  // 地理设定
  // { path:"/geography", component: () => import('../views/Geography') },
  // 漫画信息
  { path:"/cartoonInfo", component: () => import('../views/CartoonInfo'),redirect:{ path: "/cartoonInfo/createBackground"},children:[
    { path: "/cartoonInfo/createBackground", component: () => import('../views/cartoon/CreateBackground') },
    { path: "/cartoonInfo/storyIntroduction", component: () => import('../views/cartoon/StoryIntroduction') },
    { path: "/cartoonInfo/roleIntroduction", component: () => import('../views/cartoon/RoleIntroduction') },
    { path: "/cartoonInfo/termDiction", component: () => import('../views/cartoon/TermDiction') },
    { path: "/cartoonInfo/publishInfo", component: () => import('../views/cartoon/PublishInfo') },
    { path: "/cartoonInfo/cartoonTitle", component: () => import('../views/cartoon/CartoonTitle') },
    { path: "/cartoonInfo/animationTitle", component: () => import('../views/cartoon/AnimationTitle') },
    { path: "/cartoonInfo/prizeRecord", component: () => import('../views/cartoon/PrizeRecord') },
    { path: "/cartoonInfo/theatreEdition", component: () => import('../views/cartoon/TheatreEdition') },
  ] },
  { path:"*",redirect:"/" }
]
