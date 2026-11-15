/* 主义 × 组件矩阵 3：Y2K 提示、包豪斯卡、瑞士表单、侘寂表单、新艺术按钮、新拟态卡、玻璃表单、复古未来卡、Aero 按钮、编辑导航、有机表单 */
window.PLUGINS.push(
{
  id: "toast-y2k", name: "Y2K 提示", cat: "notifications",
  desc: "银色镀铬、气泡与高光边框的千禧提示条。",
  tags: ["通知", "Y2K", "镀铬", "气泡"],
  prompt: "做一个 Y2K 千禧风格提示条：银蓝渐变背景，提示条是镀铬胶囊，带白色高光和蓝色投影；左侧是蓝色圆形图标，右侧是关闭按钮，周围漂浮半透明气泡。整体塑料感、未来感，移动端缩窄。",
  html: `<div class="xp-ty"><div class="xp-ty-bubble is-a"></div><div class="xp-ty-bubble is-b"></div><div class="xp-ty-toast"><i>✓</i><div><b>同步完成</b><span>批次 07 已上传</span></div><button type="button" aria-label="关闭">×</button></div></div>`,
  css: `.xp-ty{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(160deg,#d7e9ff,#a8c8ff 50%,#e6d7ff);font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.xp-ty-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(168,200,255,.18) 55%,rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.8)}
.xp-ty-bubble.is-a{right:8%;top:12%;width:100px;height:100px}
.xp-ty-bubble.is-b{left:7%;bottom:12%;width:64px;height:64px}
.xp-ty-toast{position:relative;z-index:1;display:flex;align-items:center;gap:10px;width:min(360px,calc(100vw - 40px));padding:12px 14px;border:1px solid #fff;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(200,220,255,.72));box-shadow:inset 0 1px 0 #fff,0 10px 24px rgba(95,127,201,.25)}
.xp-ty-toast i{display:grid;place-items:center;width:32px;height:32px;border:1px solid #fff;border-radius:50%;background:linear-gradient(145deg,#fff,#8fb0ff);font-style:normal;font-weight:700;color:#2a4a9a}
.xp-ty-toast div{flex:1}
.xp-ty-toast b{display:block;font-size:11px;color:#1a2a5a}
.xp-ty-toast span{display:block;font-family:ui-monospace,Consolas,monospace;font-size:7px;color:#4a5f9a}
.xp-ty-toast button{width:24px;height:24px;border:1px solid #fff;border-radius:50%;background:#fff;font-size:13px;line-height:1;cursor:pointer}`,
  js: ``
},
{
  id: "card-bauhaus", name: "包豪斯卡片", cat: "cards",
  desc: "红圆、蓝方、黄三角与严格网格的 Bauhaus 卡。",
  tags: ["卡片", "包豪斯", "几何", "三原色"],
  prompt: "做一张包豪斯风格卡片：米白底，严格网格，红圆、蓝方、黄三角三个几何形占据上半部；下半部是粗无衬线标题、两行说明和一条黑色分割线。无圆角、无阴影，像设计学院练习，移动端缩窄。",
  html: `<div class="xp-bc-wrap"><article class="xp-bc"><div class="xp-bc-shapes"><i></i><i></i><i></i></div><span>BAUHAUS / 07</span><h2>FORM<br>FOLLOWS<br>FUNCTION</h2><p>圆形、方形与三角形，构成可理解的结构。</p><footer>1926 · LUMEN</footer></article></div>`,
  css: `.xp-bc-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:#f4f1e8;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.xp-bc{width:min(320px,100%);padding:20px;border:2px solid #111;background:#fff}
.xp-bc-shapes{position:relative;height:150px;margin-bottom:16px}
.xp-bc-shapes i{position:absolute;display:block}
.xp-bc-shapes i:nth-child(1){left:0;top:16px;width:80px;height:80px;border-radius:50%;background:#e23a2e}
.xp-bc-shapes i:nth-child(2){right:28px;top:0;width:64px;height:64px;background:#1e4fa3}
.xp-bc-shapes i:nth-child(3){right:0;bottom:0;width:0;height:0;border-left:36px solid transparent;border-right:36px solid transparent;border-bottom:62px solid #f2c300}
.xp-bc>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#e23a2e}
.xp-bc h2{margin-top:6px;font-size:28px;line-height:.9;letter-spacing:-.04em}
.xp-bc p{margin-top:8px;font-size:10px;line-height:1.55;color:#555}
.xp-bc footer{margin-top:14px;padding-top:8px;border-top:2px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:7px;color:#777}`,
  js: ``
},
{
  id: "form-swiss", name: "瑞士表单", cat: "forms",
  desc: "三栏网格、红黑标签与严格对齐的瑞士表单。",
  tags: ["表单", "瑞士风格", "网格", "红黑"],
  prompt: "做一个瑞士国际主义表单：白底，顶部黑线与红色编号，表单用严格的两栏标签/输入对齐，输入框只有下边框，提交按钮是黑底红字方块。整体只用黑白红，强调对齐与留白，移动端单列。",
  html: `<form class="xp-fs"><header><b>07</b><span>CONTACT / FORM</span></header><h2>Send a precise message.</h2><div class="xp-fs-row"><label>NAME</label><input type="text" placeholder="Your name"></div><div class="xp-fs-row"><label>EMAIL</label><input type="email" placeholder="you@example.org"></div><div class="xp-fs-row"><label>MESSAGE</label><textarea placeholder="Keep it short."></textarea></div><button type="button">SEND →</button></form>`,
  css: `.xp-fs{width:min(460px,calc(100vw - 40px));margin:auto;padding:22px;border-top:6px solid #e23a2e;background:#fff;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#f2f2f2}
.xp-fs header{display:flex;justify-content:space-between;padding-bottom:7px;border-bottom:2px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#777}
.xp-fs header b{font-size:22px;color:#e23a2e}
.xp-fs h2{margin:10px 0 16px;font-size:24px;letter-spacing:-.04em}
.xp-fs-row{display:grid;grid-template-columns:90px 1fr;gap:10px;align-items:start;padding:9px 0;border-bottom:1px solid #ddd}
.xp-fs label{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.1em;color:#777;padding-top:5px}
.xp-fs input,.xp-fs textarea{width:100%;padding:4px 0;border:0;border-bottom:1px solid #bbb;background:transparent;font-family:inherit;font-size:11px;outline:none}
.xp-fs input:focus,.xp-fs textarea:focus{border-color:#e23a2e}
.xp-fs textarea{min-height:52px;resize:vertical}
.xp-fs button{min-height:38px;margin-top:16px;padding:0 18px;border:0;background:#111;font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.1em;color:#e23a2e;cursor:pointer}
@media (max-width:520px){.xp-fs-row{grid-template-columns:1fr;gap:3px}}`,
  js: ``
},
{
  id: "form-wabisabi", name: "侘寂表单", cat: "forms",
  desc: "粗纸、土色、不对称布局的 Wabi-sabi 表单。",
  tags: ["表单", "侘寂", "土色", "留白"],
  prompt: "做一个侘寂风格表单：米灰粗纸背景，表单左侧偏移，标签用衬线小字，输入框只有细下划线，提交按钮是深土色的窄条；右侧留出大片空白并放一条手写备注。整体安静、不对称，移动端收拢。",
  html: `<form class="xp-fw"><span>FORM / 07</span><h2>留下一句话。</h2><label>名字<input type="text"></label><label>邮箱<input type="email"></label><label>留言<textarea></textarea></label><button type="button">发送</button><p>不完美也可以。</p></form>`,
  css: `.xp-fw{width:min(380px,calc(100vw - 40px));margin:auto;padding:26px 30px 22px 22px;border:1px solid rgba(58,53,43,.28);background:#f2ede3;font-family:Georgia,"Songti SC",serif;color:#3a352b;transform:translateX(-6px)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#e6e0d3}
.xp-fw>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#7a7160}
.xp-fw h2{margin-top:8px;font-size:26px;font-weight:400}
.xp-fw label{display:block;margin-top:16px;font-size:9px;letter-spacing:.06em;color:#6b6253}
.xp-fw input,.xp-fw textarea{display:block;width:100%;margin-top:4px;padding:6px 0;border:0;border-bottom:1px solid rgba(58,53,43,.3);background:transparent;font-family:Georgia,serif;font-size:11px;color:#3a352b;outline:none}
.xp-fw textarea{min-height:54px;resize:vertical}
.xp-fw button{min-height:34px;margin-top:18px;padding:0 16px;border:1px solid #3a352b;background:#3a352b;font-family:ui-sans-serif,system-ui,sans-serif;font-size:9px;color:#f2ede3;cursor:pointer}
.xp-fw p{max-width:200px;margin-top:12px;font-size:9px;line-height:1.6;color:#7a7160;text-align:right}`,
  js: ``
},
{
  id: "btn-artnouveau", name: "新艺术按钮", cat: "buttons",
  desc: "金色曲线边框、深绿底与衬线文字的新艺术按钮。",
  tags: ["按钮", "新艺术", "金色", "曲线"],
  prompt: "做一个新艺术风格按钮：深绿背景，按钮是金色细线构成的拱形边框，内部深绿底、金色衬线文字；悬停时边框变亮、内部出现微光。旁边一个更小的文字链接。整体优雅、流动，移动端纵向排列。",
  html: `<div class="xp-ba"><button class="xp-ba-main" type="button">进入花园 →</button><a class="xp-ba-link" href="#">查看档案</a></div>`,
  css: `.xp-ba{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:radial-gradient(500px 400px at 50% 20%,rgba(200,169,106,.12),transparent 60%),#0f2a22;font-family:Georgia,"Songti SC",serif}
.xp-ba-main{position:relative;min-width:200px;min-height:58px;padding:0 28px;border:1px solid #c8a96a;border-radius:120px 120px 12px 12px;background:#123128;font-family:inherit;font-size:15px;letter-spacing:.04em;color:#d9c08a;cursor:pointer;transition:background .2s,box-shadow .2s}
.xp-ba-main::before{content:"";position:absolute;inset:6px;border:1px solid rgba(200,169,106,.35);border-radius:114px 114px 8px 8px;pointer-events:none}
.xp-ba-main:hover{background:#1a4033;box-shadow:0 0 24px rgba(200,169,106,.25)}
.xp-ba-link{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#a88f5c;border-bottom:1px solid rgba(200,169,106,.4)}`,
  js: ``
},
{
  id: "card-neumorphism", name: "新拟态数据卡", cat: "cards",
  desc: "浅灰双向软阴影、凸起指标与内凹按钮的新拟态卡。",
  tags: ["卡片", "新拟态", "软阴影", "数据"],
  prompt: "做一张新拟态数据卡：浅灰蓝背景，卡片同色、双向柔和阴影，三个指标像凸起的软块，底部按钮是内凹效果；整体安静、柔和、无边框，移动端缩窄。",
  html: `<div class="xp-nc2"><article class="xp-nc2-card"><span>SOFT / DATA</span><h2>低氧表达</h2><div class="xp-nc2-grid"><div><b>3.2×</b><span>表达</span></div><div><b>98.6%</b><span>阳性</span></div><div><b>8</b><span>批次</span></div></div><button type="button">查看详情</button></article></div>`,
  css: `.xp-nc2{min-height:100vh;display:grid;place-items:center;padding:40px;background:#e7ecf1;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.xp-nc2-card{width:min(340px,100%);padding:24px;border-radius:22px;background:#e7ecf1;box-shadow:14px 14px 28px #c7ced6,-14px -14px 28px #ffffff}
.xp-nc2-card>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#8a97a2}
.xp-nc2 h2{margin-top:7px;font-size:24px;letter-spacing:-.03em;color:#33434f}
.xp-nc2-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}
.xp-nc2-grid div{padding:12px 8px;border-radius:12px;background:#e7ecf1;box-shadow:inset 4px 4px 8px #c7ced6,inset -4px -4px 8px #ffffff;text-align:center}
.xp-nc2-grid b{display:block;font-size:17px;color:#2f8f7a}
.xp-nc2-grid span{display:block;font-size:8px;color:#8a97a2}
.xp-nc2 button{width:100%;min-height:38px;margin-top:16px;border:0;border-radius:10px;background:#e7ecf1;box-shadow:6px 6px 12px #c7ced6,-6px -6px 12px #ffffff;font-family:inherit;font-size:10px;font-weight:700;color:#4d5d6a;cursor:pointer}
.xp-nc2 button:active{box-shadow:inset 4px 4px 8px #c7ced6,inset -4px -4px 8px #ffffff}`,
  js: ``
},
{
  id: "form-glassmorphism", name: "玻璃表单", cat: "forms",
  desc: "渐变网格上的磨砂玻璃表单与高光边。",
  tags: ["表单", "玻璃拟态", "磨砂", "渐变"],
  prompt: "做一个玻璃拟态表单：深紫蓝渐变网格背景，漂浮模糊光斑，表单是半透明磨砂玻璃面板，1px 白色高光边、背景模糊；输入框是透明底和细白边，按钮是亮青半透明。整体通透、层次清楚，移动端降低模糊。",
  html: `<form class="xp-fg"><span>GLASS / FORM</span><h2>保持联系</h2><label>NAME<input type="text" placeholder="你的名字"></label><label>EMAIL<input type="email" placeholder="you@example.org"></label><label>MESSAGE<textarea placeholder="写点什么"></textarea></label><button type="button">SEND →</button></form>`,
  css: `.xp-fg{width:min(380px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(255,255,255,.3);border-radius:18px;background:rgba(255,255,255,.08);backdrop-filter:blur(16px);box-shadow:inset 0 1px 0 rgba(255,255,255,.3);font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;color:#f4f7ff}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(600px 460px at 20% 20%,#6c5ce7,transparent 60%),radial-gradient(500px 460px at 85% 70%,#0f8b8d,transparent 60%),#120b2e}
.xp-fg>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#7ee0dd}
.xp-fg h2{margin-top:7px;font-size:24px}
.xp-fg label{display:block;margin-top:14px;font-size:9px;color:rgba(244,247,255,.7)}
.xp-fg input,.xp-fg textarea{display:block;width:100%;margin-top:5px;padding:9px;border:1px solid rgba(255,255,255,.22);border-radius:8px;background:rgba(255,255,255,.06);font-family:inherit;font-size:10px;color:#fff;outline:none}
.xp-fg input:focus,.xp-fg textarea:focus{border-color:#7ee0dd}
.xp-fg textarea{min-height:60px;resize:vertical}
.xp-fg button{width:100%;min-height:40px;margin-top:16px;border:1px solid rgba(255,255,255,.3);border-radius:9px;background:rgba(126,224,221,.24);font-family:inherit;font-size:10px;font-weight:700;color:#fff;cursor:pointer}`,
  js: ``
},
{
  id: "card-retrofuturism", name: "复古未来卡", cat: "cards",
  desc: "粉彩太空时代、原子环与圆形窗口的复古未来卡。",
  tags: ["卡片", "复古未来", "原子", "太空时代"],
  prompt: "做一张复古未来主义卡片：粉彩青绿底，右上角是原子环，卡片上半部有圆形窗口和星芒；标题用圆润无衬线，价格与一条细线，底部是胶囊按钮。整体 1950/60 年代太空时代，移动端缩窄。",
  html: `<div class="xp-rfc"><article><div class="xp-rfc-visual"><i></i><span>ORBIT / 07</span></div><h2>低氧轨道舱</h2><p>为低氧环境设计的稳定表达模块。</p><div><b>¥ 1,280</b><a href="#">查看 →</a></div></article></div>`,
  css: `.xp-rfc{min-height:100vh;display:grid;place-items:center;padding:40px;background:linear-gradient(165deg,#e8f7f2,#cfe9e4 55%,#f7d9b8);font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif;color:#1e3a3a}
.xp-rfc article{width:min(320px,100%);overflow:hidden;border:1px solid rgba(30,58,58,.25);border-radius:16px;background:rgba(255,255,255,.6)}
.xp-rfc-visual{position:relative;height:150px;background:linear-gradient(180deg,#cfe9e4,#f7d9b8)}
.xp-rfc-visual i{position:absolute;left:50%;top:50%;width:86px;height:86px;margin:-43px 0 0 -43px;border:1px solid rgba(30,58,58,.4);border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fd8cf)}
.xp-rfc-visual i::after{content:"";position:absolute;left:-20px;top:50%;width:126px;height:34px;border:1px solid rgba(30,58,58,.4);border-radius:50%;transform:translateY(-50%) rotate(32deg)}
.xp-rfc-visual span{position:absolute;left:12px;top:10px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.xp-rfc h2{margin-top:0;padding:14px 16px 0;font-size:20px}
.xp-rfc p{padding:4px 16px 0;font-size:9.5px;line-height:1.55;color:#4a6a66}
.xp-rfc article>div:last-child{display:flex;align-items:center;justify-content:space-between;margin:14px 16px 16px;padding-top:10px;border-top:1px solid rgba(30,58,58,.2)}
.xp-rfc b{font-size:17px}
.xp-rfc a{padding:7px 11px;border:1px solid #1e3a3a;border-radius:999px;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#1e3a3a}`,
  js: ``
},
{
  id: "btn-frutigeraero", name: "Aero 按钮", cat: "buttons",
  desc: "蓝绿玻璃高光、气泡与亮面质感的 Frutiger Aero 按钮。",
  tags: ["按钮", "Frutiger Aero", "玻璃", "高光"],
  prompt: "做一个 Frutiger Aero 风格按钮组：蓝绿天空渐变背景，漂浮水滴气泡；主按钮是亮面玻璃胶囊，带白色高光、内阴影和柔和投影；次按钮是透明玻璃描边。悬停时亮度提升。整体 2000 年代初科技感，移动端纵向排列。",
  html: `<div class="xp-bfa"><div class="xp-bfa-bubble is-a"></div><div class="xp-bfa-bubble is-b"></div><div class="xp-bfa-row"><button class="xp-bfa-main" type="button">启动系统 →</button><button class="xp-bfa-ghost" type="button">查看说明</button></div></div>`,
  css: `.xp-bfa{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;background:linear-gradient(180deg,#c8ecff,#7fd0e8 50%,#3a9bb5);font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.xp-bfa::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.45),transparent 32%);pointer-events:none}
.xp-bfa-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(255,255,255,.12) 55%,rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.8)}
.xp-bfa-bubble.is-a{right:8%;top:12%;width:110px;height:110px}
.xp-bfa-bubble.is-b{left:7%;bottom:12%;width:70px;height:70px}
.xp-bfa-row{position:relative;z-index:1;display:flex;gap:12px}
.xp-bfa button{min-height:48px;padding:0 22px;border:1px solid #fff;border-radius:999px;font-family:inherit;font-size:11px;font-weight:700;color:#0d3a4a;cursor:pointer}
.xp-bfa-main{background:linear-gradient(180deg,#fff,#bfe9ff);box-shadow:inset 0 1px 0 #fff,0 5px 14px rgba(13,58,74,.22)}
.xp-bfa-ghost{background:linear-gradient(180deg,rgba(255,255,255,.45),rgba(255,255,255,.15));box-shadow:inset 0 1px 0 #fff}
.xp-bfa button:hover{filter:brightness(1.05)}
@media (max-width:520px){.xp-bfa-row{flex-direction:column}}`,
  js: ``
},
{
  id: "nav-editorial", name: "编辑导航", cat: "nav",
  desc: "衬线报头、日期线与小写导航的 Editorial 导航。",
  tags: ["导航", "编辑设计", "衬线", "报头"],
  prompt: "做一个编辑风格导航：米白背景，顶部是日期、期号与地点的小字，中间是细线包住的巨大衬线品牌字，下面一行小写字母间距很大的导航链接。整体像一份独立报纸的头版导航，移动端缩小品牌与链接间距。",
  html: `<nav class="xp-ne"><div class="xp-ne-meta"><span>VOL. 07 / NO. 03</span><span>2026 · SHANGHAI</span><span>INDEX</span></div><b>LOW OXYGEN<br><em>REVIEW</em></b><div class="xp-ne-links"><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a><a href="#">归档</a></div></nav>`,
  css: `.xp-ne{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:34px 48px;background:#f7f4ed;font-family:Georgia,"Songti SC",serif;color:#1c1a16}
.xp-ne-meta{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(28,26,22,.35);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#7a7164}
.xp-ne>b{display:block;padding:14px 0;border-bottom:1px solid #1c1a16;font-size:clamp(3rem,8vw,6.4rem);font-weight:400;line-height:.88;letter-spacing:-.05em;text-align:center}
.xp-ne>b em{font-style:italic;color:#b23a2a}
.xp-ne-links{display:flex;justify-content:center;flex-wrap:wrap;gap:26px;padding:12px 0;border-bottom:1px solid rgba(28,26,22,.25)}
.xp-ne-links a{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.14em;color:#1c1a16;text-transform:uppercase}
.xp-ne-links a:hover{color:#b23a2a}
@media (max-width:640px){.xp-ne{padding:24px}.xp-ne-meta span:nth-child(2){display:none}.xp-ne-links{gap:12px}}`,
  js: ``
},
{
  id: "form-organic", name: "有机表单", cat: "forms",
  desc: "奶油、绿色 blob 与柔和曲线的 Organic 表单。",
  tags: ["表单", "有机", "自然", "曲线"],
  prompt: "做一个有机自然风格表单：奶油底色，表单是柔和的不规则圆角卡片，周围有绿色 blob 形状；标签用衬线小字，输入框是浅绿底、无硬边，按钮是深绿胶囊。整体安静、生长感，移动端收拢曲线。",
  html: `<form class="xp-fo"><div class="xp-fo-blob"></div><span>ORGANIC / FORM</span><h2>让方法<br>继续生长。</h2><label>名字<input type="text"></label><label>邮箱<input type="email"></label><label>留言<textarea></textarea></label><button type="button">发送 →</button></form>`,
  css: `.xp-fo{position:relative;width:min(380px,calc(100vw - 40px));margin:auto;padding:26px;border-radius:42% 58% 46% 54% / 8% 10% 90% 92%;background:rgba(255,255,255,.62);font-family:Georgia,"Songti SC",serif;color:#2c3a26;overflow:hidden}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:linear-gradient(165deg,#f6f3e8,#dfe8d6 60%,#c8d8bd)}
.xp-fo-blob{position:absolute;right:-50px;top:-40px;width:180px;height:150px;border-radius:60% 40% 55% 45% / 45% 60% 40% 55%;background:rgba(90,120,70,.16)}
.xp-fo>span{position:relative;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#4f7040}
.xp-fo h2{position:relative;margin-top:8px;font-size:26px;font-weight:400;line-height:1.15}
.xp-fo label{position:relative;display:block;margin-top:13px;font-size:9px;color:#5a6a50}
.xp-fo input,.xp-fo textarea{display:block;width:100%;margin-top:4px;padding:8px 10px;border:0;border-radius:24px;background:rgba(90,120,70,.09);font-family:Georgia,serif;font-size:10px;color:#2c3a26;outline:none}
.xp-fo textarea{min-height:54px;border-radius:14px;resize:vertical}
.xp-fo button{position:relative;min-height:36px;margin-top:16px;padding:0 16px;border:0;border-radius:999px;background:#4f7040;font-family:ui-sans-serif,system-ui,sans-serif;font-size:9px;color:#f6f3e8;cursor:pointer}`,
  js: ``
}
);
