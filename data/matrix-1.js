/* 风格矩阵 1：页头 × 4 种主义，关于 × 4 种主义 */
window.PLUGINS.push(
{
  id: "mx-header-brutal", name: "粗野页头", cat: "header",
  desc: "黄黑粗边框、硬阴影的 Brutalist 导航页头。",
  tags: ["页头", "粗野主义", "硬阴影", "高对比"],
  prompt: "做一个粗野主义页头：亮黄背景，横向导航条有 3px 黑边和 6px 硬阴影，品牌是黑底黄字方块，导航项是独立黑边小方块，右侧是黑底 CTA。下方是超大的压缩体标题和一行小字。移动端隐藏部分导航项。",
  html: `<header class="mx-hb">
  <div class="mx-hb-nav"><b>LOW/OXY</b><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a><a class="mx-hb-cta" href="#">进入 →</a></div>
  <h1>A HEADER<br>WITH ATTITUDE</h1>
  <p>不隐藏结构，也不隐藏边框。</p>
</header>`,
  css: `.mx-hb{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:28px 34px;background:#f5f13f;color:#111;font-family:ui-monospace,Consolas,"Courier New",monospace}
.mx-hb-nav{display:flex;align-items:center;gap:7px;padding:9px;border:3px solid #111;background:#fff;box-shadow:7px 7px 0 #111}
.mx-hb-nav b{padding:6px 9px;background:#111;font-size:12px;letter-spacing:.04em;color:#f5f13f}
.mx-hb-nav a{padding:6px 8px;border:2px solid #111;font-size:9px;color:#111;text-decoration:none}
.mx-hb-nav a:hover{background:#111;color:#fff}
.mx-hb-cta{margin-left:auto;background:#111;color:#fff!important;border-color:#111!important}
.mx-hb h1{margin-top:30px;font-family:Impact,"Arial Black",sans-serif;font-size:clamp(3rem,8.5vw,7rem);line-height:.82;letter-spacing:-.04em}
.mx-hb p{margin-top:12px;font-size:10px;letter-spacing:.08em}
@media (max-width:640px){.mx-hb{padding:20px}.mx-hb-nav a:not(.mx-hb-cta){display:none}}`,
  js: ``
},
{
  id: "mx-header-terminal", name: "终端页头", cat: "header",
  desc: "命令行导航、状态指示与闪烁光标的 Terminal 页头。",
  tags: ["页头", "终端", "命令行", "等宽"],
  prompt: "做一个终端风格页头：近黑背景、绿色等宽字，顶部是带圆点的终端栏，下面是命令行式导航（品牌、./project、./engineering、./results、[ONLINE]），右侧一个闪烁光标。再下面是一行超大命令和状态输出。整体像正在运行的实验系统。",
  html: `<header class="mx-ht">
  <div class="mx-ht-bar"><i></i><i></i><i></i><span>~/low-oxygen</span></div>
  <nav><b>lumen</b><a href="#">./project</a><a href="#">./engineering</a><a href="#">./results</a><span>[ONLINE]</span></nav>
  <div class="mx-ht-line">$ status --system<span class="mx-ht-cursor"></span></div>
  <h1>STABLE<br>UNDER LOW O2</h1>
  <p>all systems nominal / batch 07 verified</p>
</header>`,
  css: `.mx-ht{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:24px 34px;background:radial-gradient(600px 380px at 50% 0%,rgba(40,255,140,.08),transparent 60%),#07100b;color:#7cff9b;font-family:ui-monospace,Consolas,"Courier New",monospace}
.mx-ht-bar{display:flex;align-items:center;gap:5px;padding:8px 10px;border:1px solid rgba(124,255,155,.25);border-bottom:0;background:rgba(124,255,155,.04);font-size:8px;color:rgba(124,255,155,.55)}
.mx-ht-bar i{width:7px;height:7px;border-radius:50%;background:#ff5f57}
.mx-ht-bar i:nth-child(2){background:#febc2e}
.mx-ht-bar i:nth-child(3){background:#28c840}
.mx-ht nav{display:flex;align-items:center;gap:18px;padding:12px 14px;border:1px solid rgba(124,255,155,.25);font-size:9px}
.mx-ht nav b{font-size:13px;color:#d9ffe6}
.mx-ht nav a{color:rgba(124,255,155,.7);text-decoration:none}
.mx-ht nav a:hover{color:#7cff9b}
.mx-ht nav span{margin-left:auto;color:#7cff9b;font-size:8px}
.mx-ht-line{margin-top:34px;font-size:11px;color:rgba(217,255,230,.6)}
.mx-ht-cursor{display:inline-block;width:7px;height:13px;margin-left:4px;background:#7cff9b;vertical-align:-2px;animation:mx-ht-blink 1s steps(1) infinite}
.mx-ht h1{margin-top:12px;font-size:clamp(2.8rem,7vw,5.8rem);line-height:.92;letter-spacing:-.05em;color:#d9ffe6;text-shadow:0 0 24px rgba(124,255,155,.3)}
.mx-ht p{margin-top:12px;font-size:10px;color:rgba(124,255,155,.6)}
@keyframes mx-ht-blink{50%{opacity:0}}
@media (max-width:640px){.mx-ht{padding:18px}.mx-ht nav a:nth-of-type(2),.mx-ht nav a:nth-of-type(3){display:none}}`,
  js: ``
},
{
  id: "mx-header-editorial", name: "编辑页头", cat: "header",
  desc: "衬线报头、日期线与极细分割线的 Editorial 页头。",
  tags: ["页头", "编辑设计", "衬线", "报头"],
  prompt: "做一个编辑风格页头：米白纸张背景，顶部是日期、期号和地点的小字，下面是细线包住的巨大衬线报头，再下面是一行小写字母间距很大的导航。整体像一份严肃的独立报纸头版，移动端缩小报头。",
  html: `<header class="mx-he">
  <div class="mx-he-meta"><span>VOL. 07 / NO. 03</span><span>2026 · SHANGHAI</span><span>READING TIME 6 MIN</span></div>
  <h1>LOW OXYGEN<br><em>REVIEW</em></h1>
  <nav><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a><a href="#">归档</a></nav>
  <p>一份关于低氧表达的独立观察。</p>
</header>`,
  css: `.mx-he{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:34px 48px;background:#f7f4ed;color:#1c1a16;font-family:Georgia,"Songti SC",serif}
.mx-he-meta{display:flex;justify-content:space-between;padding-bottom:9px;border-bottom:1px solid rgba(28,26,22,.35);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#7a7164}
.mx-he h1{margin-top:14px;padding:12px 0;border-top:2px solid #1c1a16;border-bottom:1px solid #1c1a16;font-size:clamp(3rem,8vw,6.4rem);font-weight:400;line-height:.9;letter-spacing:-.05em;text-align:center}
.mx-he h1 em{font-style:italic;color:#b23a2a}
.mx-he nav{display:flex;justify-content:center;gap:26px;padding:12px 0;border-bottom:1px solid rgba(28,26,22,.25)}
.mx-he nav a{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.14em;color:#1c1a16;text-decoration:none;text-transform:uppercase}
.mx-he nav a:hover{color:#b23a2a}
.mx-he p{margin-top:14px;font-size:11px;color:#6f665a;text-align:center}
@media (max-width:640px){.mx-he{padding:22px}.mx-he-meta span:nth-child(3){display:none}.mx-he nav{gap:12px;flex-wrap:wrap}}`,
  js: ``
},
{
  id: "mx-header-y2k", name: "Y2K 页头", cat: "header",
  desc: "银色镀铬、胶囊导航与气泡装饰的千禧页头。",
  tags: ["页头", "Y2K", "镀铬", "气泡"],
  prompt: "做一个 Y2K 千禧风格页头：银蓝渐变背景，漂浮半透明气泡；中央是镀铬渐变的品牌字，外面包一条白色高光胶囊导航，右侧是亮面 CTA。整体像 2000 年的科技产品官网，移动端缩小胶囊并隐藏气泡。",
  html: `<header class="mx-hy">
  <div class="mx-hy-bubble is-a"></div><div class="mx-hy-bubble is-b"></div>
  <div class="mx-hy-nav"><b>LUMEN<span>2000</span></b><a href="#">PROJECT</a><a href="#">LAB</a><a href="#">DATA</a><a class="mx-hy-cta" href="#">ENTER</a></div>
  <h1>FUTURE<br>IS SHINY</h1>
  <p>LOW OXYGEN / NEXT MILLENNIUM</p>
</header>`,
  css: `.mx-hy{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:30px 40px;background:linear-gradient(160deg,#d7e9ff,#a8c8ff 48%,#e6d7ff);color:#1a2a5a;font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif;overflow:hidden}
.mx-hy-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(168,200,255,.2) 45%,rgba(255,255,255,.08));border:1px solid rgba(255,255,255,.8)}
.mx-hy-bubble.is-a{right:6%;top:10%;width:120px;height:120px}
.mx-hy-bubble.is-b{left:8%;bottom:12%;width:70px;height:70px}
.mx-hy-nav{position:relative;z-index:1;display:flex;align-items:center;gap:18px;padding:8px 10px 8px 16px;border:1px solid #fff;border-radius:999px;background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(200,220,255,.72));box-shadow:inset 0 1px 0 #fff,0 8px 20px rgba(95,127,201,.22)}
.mx-hy-nav b{font-size:16px;letter-spacing:.02em;background:linear-gradient(180deg,#fff,#7e9fe0 55%,#fff);-webkit-background-clip:text;background-clip:text;color:transparent}
.mx-hy-nav b span{margin-left:3px;font-family:ui-monospace,Consolas,monospace;font-size:7px;color:#5f7fc9}
.mx-hy-nav a{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.08em;color:#3a4f8a;text-decoration:none}
.mx-hy-cta{margin-left:auto;padding:7px 14px;border-radius:999px;background:linear-gradient(180deg,#fff,#c8d8ff);border:1px solid #fff;box-shadow:inset 0 1px 0 #fff,0 3px 8px rgba(95,127,201,.3)}
.mx-hy h1{position:relative;z-index:1;margin-top:28px;font-size:clamp(3rem,8vw,6.4rem);line-height:.84;letter-spacing:-.04em;background:linear-gradient(180deg,#fff,#d7e9ff 30%,#7e9fe0 55%,#fff 70%,#5f7fc9);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 3px 0 rgba(95,127,201,.45))}
.mx-hy p{position:relative;z-index:1;margin-top:12px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#3a4f8a}
@media (max-width:700px){.mx-hy{padding:22px}.mx-hy-nav a:not(.mx-hy-cta){display:none}.mx-hy-bubble.is-a{width:80px;height:80px}}`,
  js: ``
},
{
  id: "mx-about-swiss", name: "瑞士关于", cat: "about",
  desc: "三栏网格、红色编号与严格对齐的瑞士关于页。",
  tags: ["关于", "瑞士风格", "网格", "红黑"],
  prompt: "做一个瑞士国际主义风格的关于区块：白底，顶部一条黑线，三栏严格网格；左栏是红色大编号 01 和竖排小标签，中栏是巨大的无衬线标题和两段说明，右栏是三条用细线分隔的事实。整体只用黑、白、红，强调对齐和留白。",
  html: `<section class="mx-asw">
  <div class="mx-asw-num"><b>01</b><span>ABOUT / 关于</span></div>
  <div class="mx-asw-main"><h2>一个在低氧里<br>保持稳定的平台。</h2><p>从启动子文库到批次验证，所有结论都指向可复核的证据。</p><p>我们把复杂的工程循环拆成可读的步骤，让评审能快速判断哪里可信、哪里仍需验证。</p></div>
  <div class="mx-asw-facts"><div><b>2026</b><span>项目年份</span></div><div><b>240</b><span>候选组合</span></div><div><b>8</b><span>稳定批次</span></div></div>
</section>`,
  css: `.mx-asw{min-height:100vh;display:grid;grid-template-columns:.55fr 1.2fr .7fr;gap:28px;align-items:start;padding:44px 52px;background:#fff;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;border-top:8px solid #e23a2e}
.mx-asw-num{border-right:1px solid #111;padding-right:20px}
.mx-asw-num b{display:block;font-size:74px;line-height:.9;font-weight:700;letter-spacing:-.07em;color:#e23a2e}
.mx-asw-num span{display:block;margin-top:12px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;writing-mode:vertical-rl}
.mx-asw h2{font-size:clamp(2rem,4vw,3.3rem);line-height:1;letter-spacing:-.05em}
.mx-asw p{max-width:520px;margin-top:14px;font-size:12px;line-height:1.75;color:#555}
.mx-asw-facts{display:grid;gap:0;border-top:2px solid #111}
.mx-asw-facts div{display:flex;align-items:baseline;justify-content:space-between;padding:12px 0;border-bottom:1px solid #ccc}
.mx-asw-facts b{font-size:26px;letter-spacing:-.04em}
.mx-asw-facts span{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#777}
@media (max-width:760px){.mx-asw{grid-template-columns:1fr;padding:30px 22px}.mx-asw-num{border-right:0;border-bottom:1px solid #111;padding:0 0 14px}.mx-asw-num span{writing-mode:horizontal-tb}}`,
  js: ``
},
{
  id: "mx-about-zine", name: "Zine 关于", cat: "about",
  desc: "剪贴标题、胶带照片与复印质感的关于区块。",
  tags: ["关于", "Zine", "拼贴", "复印"],
  prompt: "做一个朋克 Zine 风格的关于区块：灰白复印纸背景，左侧是不同字体和底色的剪贴标题，右侧一张斜贴的黑白照片，照片用胶带固定；下方三条事实像剪报，随机旋转。整体手工、粗粝、像独立刊物内页。",
  html: `<section class="mx-az">
  <div class="mx-az-title"><span>ABOUT</span><span class="is-cut">the</span><span>LAB</span></div>
  <div class="mx-az-grid">
    <div><p>我们不追求完美的曲线，只追求能被人复核的证据。</p><div class="mx-az-facts"><b>240 组合</b><b>8 批次</b><b>12 次访谈</b></div></div>
    <figure><span></span><img src="assets/img/plugins/hover-01.jpg" alt="实验室" loading="lazy"><figcaption>FIG. 01 / 记录于 2026</figcaption></figure>
  </div>
</section>`,
  css: `.mx-az{min-height:100vh;padding:36px 44px;background:#e9e9e4;color:#111;font-family:"Courier New",Consolas,monospace;overflow:hidden}
.mx-az::before{content:"";position:absolute;inset:0;opacity:.22;background-image:radial-gradient(#111 .5px,transparent .5px);background-size:4px 4px}
.mx-az-title{display:flex;gap:5px;font-family:Impact,"Arial Black",sans-serif;font-size:clamp(3rem,8vw,6.8rem);line-height:.9;text-transform:uppercase}
.mx-az-title span{padding:1px 8px;background:#111;color:#fff;transform:rotate(-3deg)}
.mx-az-title .is-cut{background:#ffd23f;color:#111;font-family:Georgia,serif;font-style:italic;transform:rotate(4deg)}
.mx-az-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:center;margin-top:22px}
.mx-az-grid p{max-width:430px;font-size:12px;line-height:1.75}
.mx-az-facts{display:flex;flex-wrap:wrap;gap:7px;margin-top:18px}
.mx-az-facts b{padding:5px 8px;border:1px solid #111;background:#f7f7f2;font-size:9px;font-weight:400;transform:rotate(var(--r,0deg))}
.mx-az-facts b:nth-child(2){--r:2deg;background:#ffd23f}
.mx-az-facts b:nth-child(3){--r:-2deg;background:#d23b2e;color:#fff}
.mx-az figure{position:relative;margin:0;transform:rotate(2.4deg)}
.mx-az figure img{width:100%;height:250px;object-fit:cover;filter:grayscale(1) contrast(1.15);border:7px solid #f7f7f2;box-shadow:0 12px 24px rgba(17,17,17,.2)}
.mx-az figure>span{position:absolute;top:-10px;left:50%;width:70px;height:20px;margin-left:-35px;background:rgba(230,225,205,.85);transform:rotate(-4deg)}
.mx-az figcaption{margin-top:6px;font-size:8px}
@media (max-width:700px){.mx-az{padding:24px}.mx-az-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "mx-about-solar", name: "太阳朋克关于", cat: "about",
  desc: "暖阳渐变、有机图片形状与植物曲线的关于区块。",
  tags: ["关于", "太阳朋克", "有机", "暖色"],
  prompt: "做一个太阳朋克风格的关于区块：暖黄到浅绿的天空渐变，右侧图片被裁成有机的叶形圆角，左上角一轮柔和的太阳；左侧是圆形衬线标题、两段说明和三个绿色数据点，边缘有抽象的叶片曲线。整体乐观、自然、明亮。",
  html: `<section class="mx-abs">
  <div class="mx-abs-sun"></div>
  <div class="mx-abs-copy"><span>ABOUT / 01</span><h2>让实验<br>和阳光一起生长。</h2><p>我们把低氧表达平台设计成可以共享、可以维护、也可以被社区继续生长的系统。</p><div class="mx-abs-stats"><div><b>2026</b><span>开始</span></div><div><b>240</b><span>组合</span></div><div><b>12</b><span>访谈</span></div></div></div>
  <figure><img src="assets/img/plugins/gallery-03.jpg" alt="植物" loading="lazy"></figure>
</section>`,
  css: `.mx-abs{position:relative;min-height:100vh;display:grid;grid-template-columns:1fr .85fr;gap:34px;align-items:center;padding:42px 50px;background:linear-gradient(165deg,#ffe9b0,#cfe8b8 55%,#8fc9a8);color:#20402c;font-family:Georgia,"Songti SC",serif;overflow:hidden}
.mx-abs-sun{position:absolute;left:-40px;top:-60px;width:220px;height:220px;border-radius:50%;background:radial-gradient(circle,#fff6c9,#ffd166 60%,rgba(255,209,102,0));filter:blur(1px)}
.mx-abs-copy{position:relative;z-index:1}
.mx-abs-copy>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#3f6f4e}
.mx-abs h2{margin-top:10px;font-size:clamp(2.2rem,4.6vw,3.8rem);line-height:1.02;font-weight:400;letter-spacing:-.03em}
.mx-abs p{max-width:440px;margin-top:12px;font-size:12px;line-height:1.75;color:#4f6f58}
.mx-abs-stats{display:flex;gap:24px;margin-top:22px}
.mx-abs-stats b{display:block;font-size:22px;font-weight:400}
.mx-abs-stats span{display:block;margin-top:2px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:8px;color:#5b7764}
.mx-abs figure{margin:0;position:relative;z-index:1}
.mx-abs figure img{width:100%;height:330px;object-fit:cover;border-radius:52% 48% 42% 58% / 46% 38% 62% 54%;box-shadow:0 24px 50px rgba(63,111,78,.2)}
@media (max-width:760px){.mx-abs{grid-template-columns:1fr;padding:30px 22px}.mx-abs figure img{height:220px}}`,
  js: ``
},
{
  id: "mx-about-deco", name: "装饰艺术关于", cat: "about",
  desc: "深蓝、金色几何框与拱形图片的 Art Deco 关于区块。",
  tags: ["关于", "装饰艺术", "金色", "拱形"],
  prompt: "做一个装饰艺术风格的关于区块：深海军蓝背景，左侧是一张放在金色拱形框里的图片，右上角有放射状金色线条；右侧是金色小标签、衬线标题、两段说明和三条金色细线分隔的数据。整体对称、克制、像 1920 年代的展览图录。",
  html: `<section class="mx-abd">
  <figure><div class="mx-abd-arch"><img src="assets/img/plugins/gallery-04.jpg" alt="器皿" loading="lazy"></div><figcaption>PLATE 01 / LOW OXYGEN</figcaption></figure>
  <div class="mx-abd-copy"><span>ABOUT THE PROJECT</span><h2>AN OBSERVATION<br>IN LOW OXYGEN</h2><p>从实验室到现场，我们只保留可以被追溯的读数与决策。</p><div class="mx-abd-facts"><div><b>240</b><span>COMBINATIONS</span></div><div><b>08</b><span>BATCHES</span></div><div><b>12</b><span>INTERVIEWS</span></div></div></div>
</section>`,
  css: `.mx-abd{position:relative;min-height:100vh;display:grid;grid-template-columns:.9fr 1.1fr;gap:40px;align-items:center;padding:40px 50px;background:radial-gradient(600px 420px at 20% 50%,rgba(200,169,106,.12),transparent 60%),#0a1628;color:#d9c08a;font-family:Georgia,"Songti SC",serif;overflow:hidden}
.mx-abd::after{content:"";position:absolute;right:-60px;top:-60px;width:260px;height:260px;background:repeating-conic-gradient(from 180deg at 100% 0,#c8a96a 0 1deg,transparent 1deg 9deg);opacity:.3}
.mx-abd figure{position:relative;z-index:1;margin:0}
.mx-abd-arch{overflow:hidden;border:1px solid #c8a96a;border-radius:180px 180px 4px 4px;padding:8px}
.mx-abd-arch img{width:100%;height:340px;object-fit:cover;border-radius:172px 172px 2px 2px;filter:sepia(.3) saturate(.8)}
.mx-abd figcaption{margin-top:8px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#8c7648;text-align:center}
.mx-abd-copy{position:relative;z-index:1}
.mx-abd-copy>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.22em;color:#a88f5c}
.mx-abd h2{margin-top:12px;font-size:clamp(2rem,4.2vw,3.4rem);line-height:1.08;font-weight:400;letter-spacing:.04em}
.mx-abd p{max-width:420px;margin-top:14px;font-size:11px;line-height:1.8;color:#a68f6a}
.mx-abd-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px;padding-top:14px;border-top:1px solid rgba(200,169,106,.35)}
.mx-abd-facts b{display:block;font-size:24px;font-weight:400;letter-spacing:.04em}
.mx-abd-facts span{display:block;margin-top:3px;font-family:ui-monospace,Consolas,monospace;font-size:7px;letter-spacing:.1em;color:#8c7648}
@media (max-width:760px){.mx-abd{grid-template-columns:1fr;padding:30px 22px}.mx-abd-arch img{height:240px}}`,
  js: ``
}
);
