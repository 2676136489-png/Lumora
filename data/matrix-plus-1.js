/* 主义 × 组件矩阵 1：粗野表单、新粗野开关、赛博面板、酸性开关、故障加载、蒸汽波卡、合成波卡、孟菲斯社交、脏渍画廊、极繁导航、Zine 表单、复古分页 */
window.PLUGINS.push(
{
  id: "form-brutalist", name: "粗野表单", cat: "forms",
  desc: "黄黑粗边框、硬阴影与等宽标签的 Brutalist 表单。",
  tags: ["表单", "粗野主义", "硬阴影", "高对比"],
  prompt: "做一个粗野主义表单：亮黄背景，黑色 3px 边框，所有输入框和按钮都有 6px 硬阴影，标签用等宽大写。三个字段加一个黑底提交按钮，整体像一张强硬的登记表，移动端单列。",
  html: `<form class="xp-fb"><h2>SEND A SIGNAL</h2><label>NAME<input type="text" placeholder="YOUR NAME"></label><label>EMAIL<input type="email" placeholder="YOU@EXAMPLE.ORG"></label><label>MESSAGE<textarea placeholder="SAY SOMETHING"></textarea></label><button type="button">TRANSMIT →</button></form>`,
  css: `.xp-fb{width:min(400px,calc(100vw - 40px));margin:auto;padding:22px;border:3px solid #111;background:#f5f13f;box-shadow:8px 8px 0 #111;font-family:ui-monospace,Consolas,"Courier New",monospace}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#fff8e7}
.xp-fb h2{margin:0 0 14px;font-size:20px;letter-spacing:-.02em}
.xp-fb label{display:block;margin-bottom:11px;font-size:8px;font-weight:700;letter-spacing:.08em}
.xp-fb input,.xp-fb textarea{display:block;width:100%;margin-top:5px;padding:9px;border:3px solid #111;background:#fff;font-family:inherit;font-size:10px;outline:none}
.xp-fb textarea{min-height:64px;resize:vertical}
.xp-fb button{width:100%;min-height:40px;border:3px solid #111;background:#111;font-family:inherit;font-size:10px;font-weight:700;color:#f5f13f;box-shadow:5px 5px 0 #ff5d8f;cursor:pointer}
.xp-fb button:hover{transform:translate(-2px,-2px);box-shadow:7px 7px 0 #ff5d8f}`,
  js: ``
},
{
  id: "toggle-neubrutal", name: "新粗野开关", cat: "choices",
  desc: "亮粉黄、粗黑边与硬阴影的 Neubrutalism 开关。",
  tags: ["开关", "新粗野主义", "硬阴影", "亮色"],
  prompt: "做一个新粗野主义开关卡：奶油底，亮粉卡片与柠檬黄开关，3px 黑边、8px 硬阴影；开关滑块是黑色方块，打开后移到右侧并变绿。整体玩味、直接，移动端缩窄。",
  html: `<div class="xp-tn"><div class="xp-tn-card"><span>AUTO / SAVE</span><h2>自动保存</h2><p>每 30 秒保存一次实验记录。</p><button type="button" class="xp-tn-switch" data-xp-tn aria-pressed="false"><i></i></button></div></div>`,
  css: `.xp-tn{min-height:100vh;display:grid;place-items:center;padding:40px;background:#fff8e7;font-family:"Arial Black","Helvetica Neue",Arial,sans-serif}
.xp-tn-card{width:min(320px,100%);padding:24px;border:3px solid #111;background:#ff5d8f;box-shadow:8px 8px 0 #111;text-align:center}
.xp-tn-card>span{display:block;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em}
.xp-tn h2{margin-top:8px;font-size:26px}
.xp-tn p{margin-top:6px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:10px;line-height:1.5}
.xp-tn-switch{position:relative;width:78px;height:38px;margin-top:18px;border:3px solid #111;border-radius:999px;background:#d8ff00;box-shadow:5px 5px 0 #111;cursor:pointer}
.xp-tn-switch i{position:absolute;top:3px;left:3px;width:26px;height:26px;border:3px solid #111;background:#fff;transition:transform .22s cubic-bezier(.34,1.56,.64,1)}
.xp-tn-switch.is-on{background:#7ee0dd}
.xp-tn-switch.is-on i{transform:translateX(40px);background:#111}`,
  js: `(function(){var t=document.querySelector("[data-xp-tn]");if(!t)return;t.addEventListener("click",function(){var on=t.classList.toggle("is-on");t.setAttribute("aria-pressed",on?"true":"false")})})();`
},
{
  id: "panel-cyberpunk", name: "赛博数据面板", cat: "data",
  desc: "霓虹青品红、扫描线与状态条的 Cyberpunk 数据面板。",
  tags: ["数据", "赛博朋克", "霓虹", "扫描线"],
  prompt: "做一个赛博朋克数据面板：近黑背景，青色与品红霓虹，细扫描线；面板内三行状态（批次、阳性率、表达强度），每行有标签、数值和进度条，右上角是闪烁的 ONLINE。整体像系统诊断界面。",
  html: `<div class="xp-cp"><header><span>SYS / 07</span><b>ONLINE</b></header><h2>LOW OXYGEN / STATUS</h2><div class="xp-cp-row"><span>BATCH 07</span><b>PASS</b><i style="--w:100%"></i></div><div class="xp-cp-row"><span>POSITIVE</span><b>98.6%</b><i style="--w:98.6%"></i></div><div class="xp-cp-row"><span>EXPRESSION</span><b>3.2×</b><i style="--w:82%"></i></div></div>`,
  css: `.xp-cp{width:min(420px,calc(100vw - 40px));margin:auto;padding:22px;border:1px solid rgba(0,240,255,.4);background:rgba(5,8,16,.92);color:#bffcff;font-family:ui-monospace,Consolas,"Courier New",monospace;box-shadow:0 0 40px rgba(0,240,255,.14)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(500px 400px at 50% 30%,#12203a,#05070f)}
.xp-cp header{display:flex;justify-content:space-between;padding-bottom:7px;border-bottom:1px solid rgba(0,240,255,.3);font-size:8px;color:#00f0ff}
.xp-cp header b{color:#7ee0dd;animation:xp-cp-blink 1.4s steps(1) infinite}
.xp-cp h2{margin-top:12px;font-size:17px;letter-spacing:.08em;text-shadow:1px 0 #ff2bd6,-1px 0 #00f0ff}
.xp-cp-row{display:grid;grid-template-columns:1fr auto;gap:6px;margin-top:14px;font-size:9px}
.xp-cp-row span{color:#7fb7c9}
.xp-cp-row b{color:#00f0ff}
.xp-cp-row i{grid-column:1/-1;height:5px;border-radius:99px;background:linear-gradient(90deg,#ff2bd6 var(--w,60%),rgba(0,240,255,.12) var(--w,60%))}
@keyframes xp-cp-blink{50%{opacity:.25}}`,
  js: ``
},
{
  id: "toggle-acid", name: "酸性开关", cat: "choices",
  desc: "荧光酸绿、倾斜布局与品红滑块的 Acid 开关。",
  tags: ["开关", "酸性设计", "荧光", "倾斜"],
  prompt: "做一个酸性设计开关：荧光酸绿背景与黑色网格，卡片倾斜，标签用黑底品红字，开关轨道是黑边黄底，滑块是品红圆形；打开后滑块右移并变黑。整体刺眼、反网格，移动端取消倾斜。",
  html: `<div class="xp-ta"><div class="xp-ta-card"><span>ACID / SWITCH</span><h2>OVERDRIVE</h2><button type="button" class="xp-ta-switch" data-xp-ta aria-pressed="false"><i></i></button><p>按住开关，让页面更吵。</p></div></div>`,
  css: `.xp-ta{min-height:100vh;display:grid;place-items:center;padding:40px;background:#d8ff00;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.xp-ta::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(10,10,10,.14) 1px,transparent 1px),linear-gradient(90deg,rgba(10,10,10,.14) 1px,transparent 1px);background-size:42px 42px;transform:skewY(-3deg)}
.xp-ta-card{position:relative;z-index:1;width:min(300px,100%);padding:24px;border:3px solid #0a0a0a;background:#f4ffb8;box-shadow:9px 9px 0 #0a0a0a;transform:rotate(-2deg);text-align:center}
.xp-ta-card>span{display:inline-block;padding:2px 6px;background:#0a0a0a;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#ffb8e6}
.xp-ta h2{margin-top:10px;font-size:30px;letter-spacing:-.05em;transform:skewX(-6deg)}
.xp-ta-switch{position:relative;width:84px;height:40px;margin-top:16px;border:3px solid #0a0a0a;border-radius:999px;background:#ffd23f;box-shadow:4px 4px 0 #0a0a0a;cursor:pointer}
.xp-ta-switch i{position:absolute;top:4px;left:4px;width:26px;height:26px;border:2px solid #0a0a0a;border-radius:50%;background:#ff00a8;transition:transform .24s}
.xp-ta-switch.is-on{background:#ff00a8}
.xp-ta-switch.is-on i{transform:translateX(42px);background:#0a0a0a}
.xp-ta p{margin-top:12px;font-size:9px;font-weight:600}`,
  js: `(function(){var t=document.querySelector("[data-xp-ta]");if(!t)return;t.addEventListener("click",function(){var on=t.classList.toggle("is-on");t.setAttribute("aria-pressed",on?"true":"false")})})();`
},
{
  id: "loader-glitch", name: "故障加载", cat: "feedback",
  desc: "RGB 分离、切片与扫描线的 Glitch 加载状态。",
  tags: ["加载", "故障艺术", "RGB", "扫描线"],
  prompt: "做一个故障艺术加载状态：近黑背景，巨大的 LOADING 文字有青色/品红色差与切片错位，下面三条不规则进度条闪烁；整体像信号损坏的终端，加入扫描线和轻微抖动。",
  html: `<div class="xp-gl"><h2 data-text="LOADING">LOADING</h2><div class="xp-gl-bars"><i></i><i></i><i></i></div><span>RECONSTRUCTING SIGNAL</span></div>`,
  css: `.xp-gl{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:#070707;color:#e8ffff;font-family:ui-monospace,Consolas,"Courier New",monospace;overflow:hidden}
.xp-gl::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.05) 0 1px,transparent 1px 4px)}
.xp-gl h2{position:relative;z-index:1;font-size:clamp(2.4rem,7vw,5rem);letter-spacing:.06em;text-shadow:3px 0 #ff00a8,-3px 0 #00ffff;animation:xp-gl-shift 2.4s steps(2) infinite}
.xp-gl h2::before,.xp-gl h2::after{content:attr(data-text);position:absolute;inset:0;overflow:hidden}
.xp-gl h2::before{color:#ff00a8;clip-path:inset(18% 0 62% 0);transform:translateX(-4px)}
.xp-gl h2::after{color:#00ffff;clip-path:inset(62% 0 14% 0);transform:translateX(4px)}
.xp-gl-bars{position:relative;z-index:1;display:flex;gap:5px}
.xp-gl-bars i{display:block;width:34px;height:6px;background:#00ffff;animation:xp-gl-bar 1.2s steps(2) infinite}
.xp-gl-bars i:nth-child(2){background:#ff00a8;animation-delay:.2s}
.xp-gl-bars i:nth-child(3){animation-delay:.4s}
.xp-gl>span{position:relative;z-index:1;font-size:8px;letter-spacing:.2em;color:#8fb7b7}
@keyframes xp-gl-shift{50%{transform:translate(1px,-1px)}}
@keyframes xp-gl-bar{50%{opacity:.2;transform:scaleX(.5)}}`,
  js: ``
},
{
  id: "card-vaporwave", name: "蒸汽波商品卡", cat: "cards",
  desc: "粉紫落日、铬字与霓虹边框的 Vaporwave 商品卡。",
  tags: ["卡片", "蒸汽波", "铬字", "落日"],
  prompt: "做一张蒸汽波商品卡：深紫背景，卡片上半部是粉橙落日与透视网格，下半部是镀铬标题、日文小字、价格和霓虹按钮；边框细青，整体高饱和、复古未来，移动端缩窄。",
  html: `<div class="xp-cv"><article><div class="xp-cv-visual"><b>低氧</b><span>LOW OXYGEN</span><i></i></div><div class="xp-cv-body"><span>VAPOR / 07</span><h2>静水培养器</h2><p>为低氧环境设计的培养容器。</p><div><b>¥ 1,280</b><a href="#">ADD →</a></div></div></article></div>`,
  css: `.xp-cv{min-height:100vh;display:grid;place-items:center;padding:40px;background:#140a2e;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.xp-cv article{width:min(320px,100%);overflow:hidden;border:1px solid #ff7eb3;background:#0e0820;box-shadow:0 0 30px rgba(255,126,179,.2)}
.xp-cv-visual{position:relative;height:190px;overflow:hidden;background:linear-gradient(180deg,#2b0f4a,#ff7eb3 60%,#ffd166)}
.xp-cv-visual::after{content:"";position:absolute;left:-20%;right:-20%;bottom:-10%;height:45%;background-image:linear-gradient(rgba(0,240,255,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,.7) 1px,transparent 1px);background-size:34px 24px;transform:perspective(240px) rotateX(62deg);opacity:.55}
.xp-cv-visual b{position:absolute;left:16px;top:14px;z-index:1;writing-mode:vertical-rl;font-size:12px;letter-spacing:.2em;color:#fff}
.xp-cv-visual span{position:absolute;left:50%;top:44%;z-index:1;transform:translate(-50%,-50%);font-size:22px;font-weight:800;letter-spacing:.04em;background:linear-gradient(180deg,#fff,#a8f0ff 45%,#ff7eb3);-webkit-background-clip:text;background-clip:text;color:transparent}
.xp-cv-visual i{position:absolute;left:50%;top:32%;z-index:1;width:70px;height:70px;margin-left:-35px;border-radius:50%;background:linear-gradient(180deg,#ffe066,#ff7eb3);box-shadow:0 0 30px rgba(255,126,179,.6)}
.xp-cv-body{padding:16px}
.xp-cv-body>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#7ee0dd}
.xp-cv h2{margin-top:6px;font-size:20px;color:#fff}
.xp-cv p{margin-top:4px;font-size:9px;color:#b9a8e8}
.xp-cv-body>div{display:flex;align-items:baseline;justify-content:space-between;margin-top:14px;padding-top:10px;border-top:1px solid rgba(255,126,179,.3)}
.xp-cv-body>div b{font-size:16px;color:#ff7eb3}
.xp-cv-body>div a{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#7ee0dd}`,
  js: ``
},
{
  id: "card-synthwave", name: "合成波套餐卡", cat: "cards",
  desc: "落日网格、霓虹描边与铬字价格的 Synthwave 套餐卡。",
  tags: ["卡片", "合成波", "霓虹", "套餐"],
  prompt: "做一张合成波套餐卡：深紫背景，顶部是落日与透视网格，卡片用青/粉霓虹描边；标题镀铬，价格巨大，三条功能用霓虹小勾，底部是发光按钮。整体 80 年代未来主义，移动端缩窄。",
  html: `<div class="xp-cs"><article><div class="xp-cs-sun"></div><span>NIGHT DRIVE / 84</span><h2>OUTRUN</h2><b>¥ 249<span>/ 月</span></b><ul><li>低氧主验证</li><li>8 批稳定性</li><li>完整原始读数</li></ul><a href="#">START ENGINE</a></article></div>`,
  css: `.xp-cs{min-height:100vh;display:grid;place-items:center;padding:40px;background:#140a2e;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.xp-cs article{position:relative;width:min(320px,100%);overflow:hidden;padding:22px;border:1px solid #00f0ff;background:#0d0722;box-shadow:0 0 26px rgba(0,240,255,.18)}
.xp-cs-sun{position:absolute;right:-40px;top:-40px;width:160px;height:160px;border-radius:50%;background:linear-gradient(180deg,#ffe066,#ff7eb3 55%,#c44dff);opacity:.5}
.xp-cs>article>span{position:relative;z-index:1;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#00f0ff}
.xp-cs h2{position:relative;z-index:1;margin-top:8px;font-size:36px;letter-spacing:-.04em;background:linear-gradient(180deg,#fff,#a8f0ff 45%,#ff7eb3);-webkit-background-clip:text;background-clip:text;color:transparent}
.xp-cs b{position:relative;z-index:1;display:block;margin-top:6px;font-size:30px;color:#ff7eb3}
.xp-cs b span{font-size:9px;font-weight:400;color:#b9a8e8}
.xp-cs ul{position:relative;z-index:1;margin:16px 0 0;padding:0;list-style:none}
.xp-cs li{padding:7px 0;border-top:1px solid rgba(0,240,255,.18);font-size:10px;color:#bffcff}
.xp-cs li::before{content:"✓ ";color:#00f0ff}
.xp-cs a{position:relative;z-index:1;display:block;margin-top:16px;padding:9px;border:1px solid #ff7eb3;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#ff7eb3;text-align:center}`,
  js: ``
},
{
  id: "social-memphis", name: "孟菲斯社交", cat: "social",
  desc: "彩色头像、几何装饰与粗描边的 Memphis 社交组件。",
  tags: ["社交", "孟菲斯", "头像", "几何"],
  prompt: "做一个孟菲斯风格社交组件：奶油底，卡片有 3px 黑边和硬阴影；左侧是四个彩色头像叠在一起，旁边 +12；右侧是标题、关注按钮和几条彩色几何装饰。整体玩味、明亮，移动端上下排列。",
  html: `<div class="xp-sm"><article><div class="xp-sm-avatars"><i style="--c:#ff5d8f">M</i><i style="--c:#7ee0dd">L</i><i style="--c:#ffd23f">C</i><i style="--c:#6c5ce7">X</i><b>+12</b></div><div><span>COMMUNITY / 07</span><h2>一起把证据做完</h2><p>关注项目，获取批次与协议更新。</p><a href="#">FOLLOW →</a></div></article></div>`,
  css: `.xp-sm{min-height:100vh;display:grid;place-items:center;padding:40px;background:#f4f1e8;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.xp-sm article{width:min(360px,100%);padding:20px;border:3px solid #111;background:#fff;box-shadow:7px 7px 0 #111}
.xp-sm-avatars{display:flex;align-items:center;margin-bottom:18px}
.xp-sm-avatars i{display:grid;place-items:center;width:42px;height:42px;margin-right:-10px;border:3px solid #111;border-radius:50%;background:var(--c);font-style:normal;font-weight:700;font-size:12px;color:#111}
.xp-sm-avatars b{margin-left:18px;font-family:ui-monospace,Consolas,monospace;font-size:9px}
.xp-sm span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#ff5d8f}
.xp-sm h2{margin-top:6px;font-size:22px;letter-spacing:-.03em}
.xp-sm p{margin-top:5px;font-size:10px;line-height:1.55;color:#555}
.xp-sm a{display:inline-block;margin-top:14px;padding:8px 12px;border:3px solid #111;background:#ffd23f;font-family:ui-monospace,Consolas,monospace;font-size:8px;font-weight:700;color:#111;box-shadow:4px 4px 0 #111}`,
  js: ``
},
{
  id: "gallery-grunge", name: "脏渍画廊", cat: "media",
  desc: "旧照片、胶带与灰度处理的 Grunge 图片墙。",
  tags: ["画廊", "脏渍风", "旧照片", "胶带"],
  prompt: "做一个脏渍风图片墙：旧纸背景，三张灰度照片以不同角度贴在一起，边缘有胶带和磨损；每张下面有打字机图注和编号。整体低饱和、粗粝，移动端横向滚动。",
  html: `<div class="xp-gg"><header><b>ARCHIVE / 03</b><span>DAMAGED BUT READABLE</span></header><div class="xp-gg-grid"><figure><i></i><img src="assets/img/plugins/hover-01.jpg" alt="记录" loading="lazy"><figcaption>01 / 批次 07</figcaption></figure><figure><i></i><img src="assets/img/plugins/gallery-05.jpg" alt="培养皿" loading="lazy"><figcaption>02 / 培养皿</figcaption></figure><figure><i></i><img src="assets/img/plugins/carousel-04.jpg" alt="记录" loading="lazy"><figcaption>03 / 原始读数</figcaption></figure></div></div>`,
  css: `.xp-gg{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:28px 36px;background:#d8d2c4;font-family:"Courier New",Consolas,monospace;color:#24221d;overflow:hidden}
.xp-gg::before{content:"";position:absolute;inset:0;opacity:.26;background-image:radial-gradient(#5b5548 .6px,transparent .6px);background-size:5px 5px}
.xp-gg header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #24221d;font-size:8px}
.xp-gg-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}
.xp-gg figure{position:relative;margin:0;padding:7px 7px 10px;background:#f2ede1;box-shadow:0 10px 20px rgba(36,34,29,.2);transform:rotate(-1.5deg)}
.xp-gg figure:nth-child(2){transform:rotate(1.8deg);margin-top:10px}
.xp-gg figure:nth-child(3){transform:rotate(-.8deg)}
.xp-gg img{width:100%;height:140px;object-fit:cover;filter:grayscale(1) contrast(1.1) sepia(.12)}
.xp-gg figure i{position:absolute;top:-8px;left:50%;width:52px;height:16px;margin-left:-26px;background:rgba(230,225,205,.85);transform:rotate(-3deg)}
.xp-gg figcaption{margin-top:6px;font-size:8px;color:#5a5348}
@media (max-width:700px){.xp-gg{padding:22px}.xp-gg-grid{grid-template-columns:repeat(3,200px);overflow-x:auto;padding-bottom:12px}}`,
  js: ``
},
{
  id: "nav-maximalism", name: "极繁导航", cat: "nav",
  desc: "高密度色块、图案与重叠标签的 Maximalism 导航。",
  tags: ["导航", "极繁主义", "高密度", "拼贴"],
  prompt: "做一个极繁主义导航：亮橙背景，导航条上每个链接都有不同色块、条纹或圆点，品牌被几何图形包围；链接之间几乎不留白，整体拥挤但可点击。移动端改为纵向堆叠。",
  html: `<nav class="xp-nm"><div class="xp-nm-brand"><b>LO</b><span>W</span><span>OXY</span></div><div class="xp-nm-links"><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a><a href="#">联系</a></div><div class="xp-nm-tag">MORE<br>IS<br>MORE</div></nav>`,
  css: `.xp-nm{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;gap:10px;padding:24px;background:#ff6b00;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.xp-nm::before{content:"";position:absolute;inset:0;background-image:radial-gradient(#111 1.4px,transparent 1.4px);background-size:16px 16px;opacity:.18}
.xp-nm-brand{position:relative;z-index:1;display:flex;gap:4px;font-family:Impact,"Arial Black",sans-serif;font-size:38px}
.xp-nm-brand b{padding:2px 8px;background:#111;color:#ffd23f}
.xp-nm-brand span{padding:2px 8px;background:#fff;border:2px solid #111}
.xp-nm-brand span:nth-child(3){background:#ff5d8f}
.xp-nm-links{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:4px}
.xp-nm-links a{padding:12px 14px;border:2px solid #111;background:#fff;font-family:ui-monospace,Consolas,monospace;font-size:10px;color:#111;text-decoration:none}
.xp-nm-links a:nth-child(1){background:#ffd23f}
.xp-nm-links a:nth-child(2){background:#7ee0dd;background-image:repeating-linear-gradient(90deg,#111 0 2px,transparent 2px 8px)}
.xp-nm-links a:nth-child(3){background:#ff5d8f}
.xp-nm-links a:nth-child(4){background:#fff;background-image:radial-gradient(#111 1px,transparent 1px);background-size:8px 8px}
.xp-nm-links a:nth-child(5){background:#6c5ce7;color:#fff}
.xp-nm-tag{position:relative;z-index:1;align-self:flex-end;padding:8px;border:2px solid #111;background:#111;font-family:ui-monospace,Consolas,monospace;font-size:9px;line-height:1.2;color:#ffd23f;transform:rotate(4deg)}
@media (max-width:640px){.xp-nm-links{flex-direction:column}.xp-nm-links a{width:100%}}`,
  js: ``
},
{
  id: "form-zine", name: "Zine 表单", cat: "forms",
  desc: "复印质感、剪贴标签与胶带的 Punk Zine 表单。",
  tags: ["表单", "Zine", "复印", "拼贴"],
  prompt: "做一个朋克 Zine 表单：灰白复印纸，标题由不同字体和底色拼成，表单标签像剪下来的纸条，输入框是粗边黑框，按钮是黑底白字；角落有红色印章和胶带。整体手工、粗粝，移动端单列。",
  html: `<form class="xp-zf"><div class="xp-zf-title"><span>SEND</span><span class="is-cut">us</span><span>A NOTE</span></div><label>NAME<input type="text"></label><label>EMAIL<input type="email"></label><label>MESSAGE<textarea></textarea></label><button type="button">POST IT →</button><span class="xp-zf-stamp">DIY / 07</span></form>`,
  css: `.xp-zf{width:min(400px,calc(100vw - 40px));margin:auto;padding:22px;border:2px solid #111;background:#f7f7f2;font-family:"Courier New",Consolas,monospace;box-shadow:8px 8px 0 rgba(17,17,17,.2);transform:rotate(-.8deg)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#e9e9e4}
.xp-zf-title{display:flex;gap:4px;font-family:Impact,"Arial Black",sans-serif;font-size:30px;text-transform:uppercase}
.xp-zf-title span{padding:1px 6px;background:#111;color:#fff;transform:rotate(-2deg)}
.xp-zf-title .is-cut{background:#ffd23f;color:#111;font-family:Georgia,serif;font-style:italic;transform:rotate(3deg)}
.xp-zf label{display:block;margin-top:12px;font-size:9px;font-weight:700}
.xp-zf input,.xp-zf textarea{display:block;width:100%;margin-top:4px;padding:8px;border:2px solid #111;background:#fff;font-family:inherit;font-size:10px;outline:none}
.xp-zf textarea{min-height:60px;resize:vertical}
.xp-zf button{width:100%;min-height:38px;margin-top:14px;border:2px solid #111;background:#111;font-family:inherit;font-size:9px;font-weight:700;color:#fff;cursor:pointer}
.xp-zf-stamp{position:absolute;right:18px;bottom:14px;padding:3px 6px;border:2px solid #d23b2e;font-size:8px;color:#d23b2e;transform:rotate(-8deg)}`,
  js: ``
},
{
  id: "pagination-oldweb", name: "复古分页", cat: "pagination",
  desc: "90 年代浮雕按钮、蓝色链接与访客计数器的分页。",
  tags: ["分页", "复古网页", "浮雕", "90年代"],
  prompt: "做一个 90 年代网页风格分页：灰色瓷砖背景，居中的表格里有 Prev / 1 / 2 / 3 / Next，按钮是凸起或凹陷的立体边框，当前页用黄色底；下方是访客计数器和“Best viewed in 800×600”。移动端横向滚动。",
  html: `<div class="xp-pw"><div class="xp-pw-box"><span>Page 2 of 3</span><div class="xp-pw-links"><a href="#">&lt; Prev</a><a href="#">1</a><a class="is-current" href="#">2</a><a href="#">3</a><a href="#">Next &gt;</a></div><p>Visitors: <b>000127</b></p><small>Best viewed in Netscape Navigator · 800×600</small></div></div>`,
  css: `.xp-pw{min-height:100vh;display:grid;place-items:center;padding:24px;background:#c0c0c0;background-image:radial-gradient(#a8a8a8 1px,transparent 1px);background-size:4px 4px;font-family:"Times New Roman",Times,serif;color:#000}
.xp-pw-box{width:min(420px,100%);padding:14px;border:3px outset #fff;background:#fff;text-align:center}
.xp-pw-box>span{display:block;padding:5px;border:2px inset #fff;background:#000080;font-family:"Courier New",monospace;font-size:10px;color:#ffff00}
.xp-pw-links{display:flex;flex-wrap:wrap;justify-content:center;gap:4px;margin-top:10px}
.xp-pw-links a{min-width:32px;padding:4px 7px;border:2px outset #fff;background:#c0c0c0;font-size:11px;color:#0000ee;text-decoration:none}
.xp-pw-links a:active{border-style:inset}
.xp-pw-links .is-current{background:#ffff00;color:#000;font-weight:700}
.xp-pw p{margin:10px 0 0;padding:4px;border:2px inset #fff;background:#000;font-family:"Courier New",monospace;font-size:9px;color:#00ff00}
.xp-pw p b{color:#ffff00;letter-spacing:.18em}
.xp-pw small{display:block;margin-top:8px;font-size:8px;color:#555}`,
  js: ``
}
);
