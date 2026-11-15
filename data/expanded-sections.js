/* 补充的页面区块（原创实现，参考通用区块分类，不复制第三方内容） */
window.PLUGINS.push(
{
  id: "header-glass",
  name: "玻璃页头",
  cat: "header",
  desc: "吸顶玻璃导航，含品牌、链接、行动按钮与移动菜单。",
  tags: ["页头", "导航", "吸顶", "玻璃"],
  prompt: "做一个吸顶玻璃页头：左侧是方形品牌标记和团队名，中间是 4 个导航链接，右侧是深色行动按钮和移动端菜单按钮。页头高约 64px，半透明白底加背景模糊，底部一条细描边。移动端隐藏链接，把菜单按钮展开为纵向面板。下方留一块渐变背景，展示标题与说明，整块高度约一屏。",
  html: `<div class="pl-header-demo">
  <header class="pl-header-bar">
    <a class="pl-header-brand" href="#"><span>启</span>启明实验室</a>
    <nav class="pl-header-links"><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a></nav>
    <div class="pl-header-actions"><a class="pl-header-cta" href="#">插件库</a><button class="pl-header-toggle" type="button" data-header-toggle aria-label="打开菜单">≡</button></div>
    <nav class="pl-header-mobile" data-header-mobile><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a></nav>
  </header>
  <div class="pl-header-body">
    <span>导航组件</span>
    <h1>把导航<br>留在手边</h1>
    <p>吸顶页头让长页面的主要入口始终可见，同时保持内容区的安静。</p>
  </div>
</div>`,
  css: `.pl-header-demo{min-height:100vh;overflow:hidden;background:radial-gradient(700px 420px at 85% 10%,rgba(255,176,0,.16),transparent 60%),radial-gradient(600px 380px at 8% 85%,rgba(15,139,141,.16),transparent 60%),linear-gradient(150deg,#fbfdfd,#eef4f3)}
.pl-header-bar{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:22px;padding:14px 40px;border-bottom:1px solid rgba(23,50,77,.1);background:rgba(255,255,255,.74);backdrop-filter:blur(18px) saturate(1.3)}
.pl-header-brand{display:inline-flex;align-items:center;gap:9px;font-size:13px;font-weight:800;letter-spacing:-.01em;color:#101b26;white-space:nowrap}
.pl-header-brand span{display:grid;place-items:center;width:32px;height:32px;border-radius:9px;background:linear-gradient(135deg,#17324d,#0f8b8d);font-size:13px;color:#fff}
.pl-header-links{display:flex;gap:2px;margin-left:14px}
.pl-header-links a{padding:8px 11px;border-radius:8px;font-size:11.5px;font-weight:600;color:#607080;transition:background .18s,color .18s}
.pl-header-links a:hover{background:rgba(15,139,141,.08);color:#17324d}
.pl-header-actions{display:flex;align-items:center;gap:8px;margin-left:auto}
.pl-header-cta{padding:9px 14px;border-radius:9px;background:#17324d;font-size:11px;font-weight:800;color:#fff;transition:background .2s}
.pl-header-cta:hover{background:#0f8b8d}
.pl-header-toggle{display:none;place-items:center;width:34px;height:34px;border:1px solid rgba(23,50,77,.16);border-radius:8px;background:#fff;font-size:16px;cursor:pointer}
.pl-header-mobile{display:none;position:absolute;top:100%;left:0;right:0;padding:8px 24px 14px;border-bottom:1px solid rgba(23,50,77,.1);background:#fff;box-shadow:0 18px 36px rgba(23,50,77,.12)}
.pl-header-mobile.is-open{display:grid}
.pl-header-mobile a{padding:11px 0;border-bottom:1px solid rgba(23,50,77,.07);font-size:12px;color:#4d5d6a}
.pl-header-mobile a:last-child{border-bottom:0}
.pl-header-body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:calc(100vh - 64px);padding:40px;text-align:center}
.pl-header-body span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-header-body h1{margin-top:14px;font-size:clamp(2.6rem,5.4vw,4.4rem);line-height:1;letter-spacing:-.045em;color:#101b26}
.pl-header-body p{max-width:440px;margin-top:16px;font-size:12.5px;line-height:1.75;color:#6a7885}
@media (max-width:700px){.pl-header-bar{padding:12px 20px}.pl-header-links{display:none}.pl-header-toggle{display:grid}.pl-header-body{padding:32px 20px}}`,
  js: `(function () {
  var toggle = document.querySelector("[data-header-toggle]");
  var mobile = document.querySelector("[data-header-mobile]");
  if (!toggle || !mobile) return;
  toggle.addEventListener("click", function () {
    var open = mobile.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
})();`
},
{
  id: "about-split",
  name: "关于分栏",
  cat: "about",
  desc: "左文右图的关于区块，适合讲项目起点与关键数据。",
  tags: ["关于", "分栏", "项目", "数据"],
  prompt: "做一个关于区块：左侧是小标签、两行大标题、两段说明和三组关键数据；右侧是一块渐变玻璃画布，里面放一个旋转的环形图形、一张显示 98.6% 的浮动数据卡和一条批次说明。整体两列布局，背景为浅色径向渐变，移动端改为上下排列。不要使用外部图片。",
  html: `<section class="pl-about">
  <div class="pl-about-copy">
    <span>关于项目</span>
    <h2>从一个<br>真实的低氧问题开始</h2>
    <p>在肠道、土壤和水体里，氧气浓度远低于实验室。我们希望工程菌在真实条件下仍然稳定工作，而不是只在理想培养皿里表现良好。</p>
    <div class="pl-about-stats">
      <div><strong>12</strong><span>位访谈对象</span></div>
      <div><strong>8</strong><span>轮构建筛选</span></div>
      <div><strong>3.2×</strong><span>相对基线提升</span></div>
    </div>
  </div>
  <div class="pl-about-stage">
    <div class="pl-about-ring"></div>
    <div class="pl-about-card"><strong>98.6%</strong><span>表达阳性率</span></div>
    <div class="pl-about-note">批次 07 · 低氧培养</div>
  </div>
</section>`,
  css: `.pl-about{min-height:100vh;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:48px;padding:56px;background:radial-gradient(700px 460px at 90% 12%,rgba(255,176,0,.14),transparent 60%),radial-gradient(600px 420px at 6% 88%,rgba(15,139,141,.16),transparent 60%),linear-gradient(150deg,#fbfdfd,#eef4f3)}
.pl-about-copy span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-about-copy h2{margin-top:14px;font-size:clamp(2.2rem,4vw,3.4rem);line-height:1.03;letter-spacing:-.045em;color:#101b26}
.pl-about-copy p{max-width:460px;margin-top:16px;font-size:13px;line-height:1.85;color:#6a7885}
.pl-about-stats{display:flex;gap:34px;margin-top:28px;padding-top:20px;border-top:1px solid rgba(23,50,77,.1)}
.pl-about-stats strong{display:block;font-size:26px;letter-spacing:-.04em;color:#0f8b8d}
.pl-about-stats span{font-size:10px;color:#7a8792}
.pl-about-stage{position:relative;min-height:400px;overflow:hidden;border:1px solid rgba(255,255,255,.7);border-radius:24px;background:radial-gradient(320px 240px at 75% 20%,rgba(255,176,0,.32),transparent 70%),linear-gradient(150deg,#17324d,#0d2235);box-shadow:0 34px 70px rgba(23,50,77,.22)}
.pl-about-ring{position:absolute;left:50%;top:48%;width:230px;height:230px;margin:-115px 0 0 -115px;border-radius:50%;background:conic-gradient(from 210deg,#ffb000 0 58%,rgba(255,255,255,.12) 58% 100%);animation:pl-about-spin 18s linear infinite}
.pl-about-ring::after{content:"";position:absolute;inset:13px;border-radius:50%;background:#122b40}
.pl-about-card{position:absolute;left:50%;top:48%;width:160px;margin:-48px 0 0 -80px;padding:16px;border:1px solid rgba(255,255,255,.16);border-radius:14px;background:rgba(255,255,255,.1);text-align:center;backdrop-filter:blur(12px)}
.pl-about-card strong{display:block;font-size:32px;letter-spacing:-.05em;color:#fff}
.pl-about-card span{font-size:10px;color:#9db9c2}
.pl-about-note{position:absolute;left:24px;bottom:22px;padding:6px 10px;border:1px solid rgba(255,255,255,.16);border-radius:999px;font-size:9px;letter-spacing:.08em;color:#9db9c2}
@keyframes pl-about-spin{to{transform:rotate(360deg)}}
@media (max-width:800px){.pl-about{grid-template-columns:1fr;gap:30px;padding:36px 24px}.pl-about-stage{min-height:320px}}`,
  js: ``
},
{
  id: "how-it-works",
  name: "使用方式",
  cat: "steps",
  desc: "三段式步骤说明，用编号和虚线连接流程。",
  tags: ["使用方式", "步骤", "流程", "三列"],
  prompt: "做一个三步使用说明：顶部是居中小标签、标题和一句说明；下面三列，每列有一个编号圆点、标题和两行描述，三列之间用一条横向虚线连接。编号使用深色实心圆，当前步骤可用琥珀色强调。整体浅色背景，移动端改为纵向排列并隐藏连接线。",
  html: `<section class="pl-steps">
  <header class="pl-steps-head"><span>使用方式</span><h2>三步接入一页 Wiki</h2><p>从选择区块到发布，尽量保持每次只改一件事。</p></header>
  <div class="pl-steps-grid">
    <article class="is-active"><span>01</span><h3>选一块</h3><p>按页面位置筛选区块，先看实时预览，再决定是否复制。</p></article>
    <article><span>02</span><h3>换内容</h3><p>替换标题、数据和图片，保留原来的间距、字号与颜色层级。</p></article>
    <article><span>03</span><h3>发布</h3><p>检查移动端与键盘操作，确认没有外部依赖后再上线。</p></article>
  </div>
  <p class="pl-steps-note">每一步都可以单独回退，不必重做整页。</p>
</section>`,
  css: `.pl-steps{min-height:100vh;display:grid;align-content:center;padding:52px;background:linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-steps-head{max-width:560px;margin:0 auto 34px;text-align:center}
.pl-steps-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-steps-head h2{margin-top:12px;font-size:clamp(1.9rem,3.4vw,2.7rem);letter-spacing:-.04em;color:#101b26}
.pl-steps-head p{margin-top:10px;font-size:12px;line-height:1.7;color:#6a7885}
.pl-steps-grid{position:relative;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;max-width:860px;margin:0 auto}
.pl-steps-grid::before{content:"";position:absolute;top:22px;left:12%;right:12%;height:1px;background:repeating-linear-gradient(90deg,rgba(23,50,77,.18) 0 6px,transparent 6px 12px)}
.pl-steps-grid article{position:relative;z-index:1;padding:0 18px;text-align:center}
.pl-steps-grid article>span{display:grid;place-items:center;width:44px;height:44px;margin:0 auto;border:1px solid rgba(23,50,77,.14);border-radius:50%;background:#fff;font-size:11px;font-weight:800;color:#607080;box-shadow:0 6px 16px rgba(23,50,77,.06)}
.pl-steps-grid article.is-active>span{border-color:transparent;background:#17324d;color:#ffb000}
.pl-steps-grid h3{margin-top:16px;font-size:15px;color:#17324d}
.pl-steps-grid p{margin-top:6px;font-size:11.5px;line-height:1.7;color:#7a8792}
.pl-steps-note{margin-top:30px;text-align:center;font-size:10px;letter-spacing:.08em;color:#9aa6b0}
@media (max-width:700px){.pl-steps{padding:36px 22px}.pl-steps-grid{grid-template-columns:1fr;gap:24px}.pl-steps-grid::before{display:none}}`,
  js: ``
},
{
  id: "logo-wall",
  name: "文字标志墙",
  cat: "logos",
  desc: "六个文字标志组成的合作方与支持方展示墙。",
  tags: ["标志墙", "合作方", "文字标志", "网格"],
  prompt: "做一个文字标志墙：顶部是小标签和标题，下面 3×2 网格放 6 个文字标志，每个用不同字重或字体风格区分，默认低饱和灰色，悬停变深。底部一行小字说明正式发布时替换为授权标识。整体白底、细描边、无图片，移动端两列。",
  html: `<section class="pl-logos">
  <header class="pl-logos-head"><span>支持与合作</span><h2>这些团队正在使用</h2></header>
  <div class="pl-logos-grid">
    <div class="is-serif">学院实验平台</div>
    <div class="is-bold">创新基金</div>
    <div class="is-mono">开放科学</div>
    <div class="is-wide">生物实验室</div>
    <div class="is-thin">基因中心</div>
    <div class="is-italic">iGEM 2026</div>
  </div>
  <p class="pl-logos-note">文字标志仅用于版式示意，正式发布时替换为授权标识。</p>
</section>`,
  css: `.pl-logos{min-height:100vh;display:grid;align-content:center;padding:52px;background:radial-gradient(600px 380px at 50% 0%,rgba(15,139,141,.1),transparent 60%),#fbfcfc}
.pl-logos-head{text-align:center}
.pl-logos-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-logos-head h2{margin-top:12px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.04em;color:#101b26}
.pl-logos-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:760px;margin:30px auto 0}
.pl-logos-grid div{display:grid;place-items:center;min-height:86px;border:1px solid rgba(23,50,77,.1);border-radius:14px;background:rgba(255,255,255,.7);font-size:15px;color:#93a0aa;transition:color .25s,border-color .25s,transform .25s}
.pl-logos-grid div:hover{color:#17324d;border-color:rgba(15,139,141,.35);transform:translateY(-2px)}
.pl-logos-grid .is-serif{font-family:Georgia,"Songti SC",serif;font-size:17px}
.pl-logos-grid .is-bold{font-weight:800;letter-spacing:.04em}
.pl-logos-grid .is-mono{font-family:ui-monospace,Consolas,monospace;font-size:13px;letter-spacing:.08em}
.pl-logos-grid .is-wide{letter-spacing:.18em;font-size:12px}
.pl-logos-grid .is-thin{font-weight:300;font-size:17px}
.pl-logos-grid .is-italic{font-style:italic;font-family:Georgia,serif}
.pl-logos-note{margin-top:22px;text-align:center;font-size:9.5px;color:#9aa6b0}
@media (max-width:700px){.pl-logos{padding:36px 22px}.pl-logos-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "integrations",
  name: "集成网格",
  cat: "integrations",
  desc: "六个工具集成卡片，带状态与悬停高光。",
  tags: ["集成", "工具", "网格", "状态"],
  prompt: "做一个工具集成网格：顶部是标题和说明，下面三列共 6 张卡片，每张包含一个线性图标、工具名、两句说明和一个“已连接”状态标签。卡片白底、细描边、圆角 14px，悬停时上浮并出现青绿色边框。整体浅色背景，移动端两列。",
  html: `<section class="pl-int">
  <header class="pl-int-head"><span>集成</span><h2>把常用工具接进来</h2><p>所有集成都只读取必要的字段，连接状态一目了然。</p></header>
  <div class="pl-int-grid">
    <article><span class="pl-int-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h5"/></svg></span><h3>代码仓库</h3><p>同步构建记录与版本说明。</p><b>已连接</b></article>
    <article><span class="pl-int-icon"><svg viewBox="0 0 24 24"><path d="M5 5h14v14H5z"/><path d="M5 10h14M10 5v14"/></svg></span><h3>文献库</h3><p>把引用与协议关联到页面。</p><b>已连接</b></article>
    <article><span class="pl-int-icon"><svg viewBox="0 0 24 24"><path d="M4 19V9M10 19V5M16 19v-6M22 19V8"/></svg></span><h3>数据看板</h3><p>自动同步关键读数与趋势。</p><b>已连接</b></article>
    <article><span class="pl-int-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span><h3>实验记录</h3><p>按批次整理取样与读数。</p><b>已连接</b></article>
    <article><span class="pl-int-icon"><svg viewBox="0 0 24 24"><path d="M4 7l8-4 8 4-8 4z"/><path d="M8 10v5l4 2 4-2v-5"/></svg></span><h3>设计协作</h3><p>共享颜色、字体与组件规则。</p><b>已连接</b></article>
    <article><span class="pl-int-icon"><svg viewBox="0 0 24 24"><path d="M13 3L5 14h6l-1 7 9-12h-6z"/></svg></span><h3>自动化</h3><p>在读数完成后触发提醒。</p><b>已连接</b></article>
  </div>
</section>`,
  css: `.pl-int{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-int-head{max-width:520px}
.pl-int-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-int-head h2{margin-top:12px;font-size:clamp(1.9rem,3.4vw,2.6rem);letter-spacing:-.04em;color:#101b26}
.pl-int-head p{margin-top:10px;font-size:12px;line-height:1.7;color:#6a7885}
.pl-int-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:28px}
.pl-int-grid article{position:relative;padding:18px;border:1px solid rgba(23,50,77,.11);border-radius:14px;background:rgba(255,255,255,.86);transition:transform .25s,border-color .25s,box-shadow .25s}
.pl-int-grid article:hover{transform:translateY(-3px);border-color:rgba(15,139,141,.4);box-shadow:0 16px 34px rgba(23,50,77,.08)}
.pl-int-icon{display:grid;place-items:center;width:36px;height:36px;border-radius:10px;background:rgba(15,139,141,.09);color:#0f8b8d}
.pl-int-icon svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.pl-int-grid h3{margin-top:13px;font-size:13px;color:#17324d}
.pl-int-grid p{margin-top:4px;font-size:10.5px;line-height:1.6;color:#7a8792}
.pl-int-grid b{display:inline-flex;margin-top:12px;padding:3px 7px;border-radius:999px;background:rgba(15,139,141,.09);font-size:8.5px;font-weight:700;color:#0f8b8d}
@media (max-width:800px){.pl-int{padding:36px 22px}.pl-int-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "contact-split",
  name: "联系分栏",
  cat: "contact",
  desc: "左侧联系信息、右侧留言表单的双栏区块。",
  tags: ["联系", "表单", "分栏", "留言"],
  prompt: "做一个联系区块：左侧是小标签、两行标题、一段说明和三行联系信息（邮箱、实验室、回复时间）；右侧是白色表单卡片，包含姓名、邮箱、留言三个字段和深色提交按钮。提交后按钮下方显示“已记录”状态。两列布局，浅色背景，移动端上下排列。",
  html: `<section class="pl-contact">
  <div class="pl-contact-copy">
    <span>联系</span>
    <h2>把问题<br>发给我们</h2>
    <p>无论是复用协议、加入工作坊，还是想一起验证低氧条件，都欢迎直接写信。</p>
    <ul>
      <li><b>邮箱</b><span>team@example.org</span></li>
      <li><b>实验室</b><span>学院实验平台 3 层</span></li>
      <li><b>回复</b><span>两个工作日内</span></li>
    </ul>
  </div>
  <form class="pl-contact-form" data-contact-form>
    <label>姓名<input type="text" placeholder="你的名字" required></label>
    <label>邮箱<input type="email" placeholder="you@example.com" required></label>
    <label>留言<textarea rows="3" placeholder="想了解什么？" required></textarea></label>
    <button type="submit">发送消息 →</button>
    <small data-contact-status>演示表单，不会真的发送。</small>
  </form>
</section>`,
  css: `.pl-contact{min-height:100vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px;padding:52px;background:radial-gradient(700px 460px at 10% 90%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-contact-copy span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-contact-copy h2{margin-top:12px;font-size:clamp(2.2rem,4vw,3.2rem);line-height:1.03;letter-spacing:-.045em;color:#101b26}
.pl-contact-copy p{max-width:420px;margin-top:14px;font-size:12.5px;line-height:1.8;color:#6a7885}
.pl-contact-copy ul{display:grid;gap:10px;margin:24px 0 0;padding:18px 0 0;border-top:1px solid rgba(23,50,77,.1);list-style:none}
.pl-contact-copy li{display:flex;justify-content:space-between;gap:20px;font-size:11.5px}
.pl-contact-copy li b{color:#17324d}
.pl-contact-copy li span{color:#7a8792}
.pl-contact-form{padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:rgba(255,255,255,.92);box-shadow:0 26px 56px rgba(23,50,77,.1)}
.pl-contact-form label{display:block;margin-bottom:14px;font-size:10px;font-weight:700;letter-spacing:.06em;color:#607080}
.pl-contact-form input,.pl-contact-form textarea{display:block;width:100%;margin-top:6px;padding:11px 12px;border:1px solid rgba(23,50,77,.14);border-radius:9px;background:#fbfcfc;font-size:12px;color:#101b26;outline:none;resize:vertical;transition:border-color .2s,background .2s}
.pl-contact-form input:focus,.pl-contact-form textarea:focus{border-color:#0f8b8d;background:#fff}
.pl-contact-form input::placeholder,.pl-contact-form textarea::placeholder{color:#a5b0ba}
.pl-contact-form button{width:100%;min-height:42px;border:0;border-radius:10px;background:#17324d;font-size:12px;font-weight:800;color:#fff;cursor:pointer;transition:background .2s}
.pl-contact-form button:hover{background:#0f8b8d}
.pl-contact-form small{display:block;margin-top:10px;font-size:9.5px;line-height:1.5;color:#9aa6b0;text-align:center}
.pl-contact-form small.is-done{color:#0f8b8d;font-weight:700}
@media (max-width:800px){.pl-contact{grid-template-columns:1fr;gap:28px;padding:36px 22px}}`,
  js: `(function () {
  var form = document.querySelector("[data-contact-form]");
  var status = document.querySelector("[data-contact-status]");
  if (!form || !status) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    status.textContent = "已记录，我们会在两个工作日内回复。";
    status.classList.add("is-done");
    form.reset();
  });
})();`
},
{
  id: "blog-grid",
  name: "博客三卡",
  cat: "blog",
  desc: "三篇项目日志卡片，含图片、标签、标题与日期。",
  tags: ["博客", "文章", "卡片", "日志"],
  prompt: "做一个三列博客区块：顶部左侧是标签与标题，右侧是“查看全部”链接；下面三张文章卡，每张包含 16:10 图片、分类与阅读时长、两行标题、一句摘要和日期。图片使用本地资源，卡片圆角 16px，悬停时图片轻微放大。移动端单列。",
  html: `<section class="pl-blog">
  <header class="pl-blog-head">
    <div><span>项目日志</span><h2>最近的实验记录</h2></div>
    <a href="#">查看全部 →</a>
  </header>
  <div class="pl-blog-grid">
    <article><img src="assets/img/plugins/hover-01.jpg" alt="藻类培养" loading="lazy"><div><span>实验 · 3 分钟</span><h3>从单菌落到可复现的批次</h3><p>控制温度、光照与取样节奏，让每一批都有可比性。</p><time>2026-10-18</time></div></article>
    <article><img src="assets/img/plugins/hover-02.jpg" alt="分子结构" loading="lazy"><div><span>设计 · 5 分钟</span><h3>把部件组合成可测试的假设</h3><p>每个构建都对应一个明确读数，避免“看起来更好”。</p><time>2026-10-11</time></div></article>
    <article><img src="assets/img/plugins/hover-03.jpg" alt="实验台" loading="lazy"><div><span>复盘 · 4 分钟</span><h3>失败读数如何改变下一轮</h3><p>保留没有通过筛选的组合，它们解释了设计为什么调整。</p><time>2026-10-04</time></div></article>
  </div>
</section>`,
  css: `.pl-blog{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-blog-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:24px}
.pl-blog-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-blog-head h2{margin-top:8px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.04em;color:#101b26}
.pl-blog-head a{font-size:11px;font-weight:700;color:#0f8b8d}
.pl-blog-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.pl-blog-grid article{overflow:hidden;border:1px solid rgba(23,50,77,.11);border-radius:16px;background:#fff;box-shadow:0 12px 28px rgba(23,50,77,.06);transition:transform .25s,box-shadow .25s}
.pl-blog-grid article:hover{transform:translateY(-3px);box-shadow:0 20px 40px rgba(23,50,77,.1)}
.pl-blog-grid img{width:100%;height:160px;object-fit:cover;transition:transform .5s}
.pl-blog-grid article:hover img{transform:scale(1.04)}
.pl-blog-grid article>div{padding:16px 16px 18px}
.pl-blog-grid article span{font-size:9px;font-weight:800;letter-spacing:.08em;color:#da4167}
.pl-blog-grid h3{margin-top:7px;font-size:13.5px;line-height:1.35;color:#17324d}
.pl-blog-grid p{margin-top:6px;font-size:10.5px;line-height:1.6;color:#7a8792}
.pl-blog-grid time{display:block;margin-top:10px;font-size:9px;color:#a5b0ba}
@media (max-width:800px){.pl-blog{padding:36px 22px}.pl-blog-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "comparison-table",
  name: "对比表",
  cat: "comparison",
  desc: "三档方案的功能对比表，中间方案高亮。",
  tags: ["对比", "表格", "方案", "价格"],
  prompt: "做一个方案对比表：顶部是标签和标题，下面一张三列方案对比表，第一列是功能名称，后三列分别对应入门版、实验室版和团队版，中间列用浅青绿色背景高亮。表格包含 5 行功能，用勾号和短横线表示支持与否。使用真实 table 标签，细线分隔，移动端可横向滚动。",
  html: `<section class="pl-ctable">
  <header class="pl-ctable-head"><span>方案对比</span><h2>三种规模，同一套标准</h2><p>功能不拆碎，按团队实际使用方式划分。</p></header>
  <div class="pl-ctable-wrap">
    <table>
      <thead><tr><th>功能</th><th>入门版</th><th class="is-featured">实验室版</th><th>团队版</th></tr></thead>
      <tbody>
        <tr><td>项目空间</td><td>1 个</td><td class="is-featured">5 个</td><td>无限</td></tr>
        <tr><td>可复用区块</td><td>基础库</td><td class="is-featured">全部区块</td><td>全部区块</td></tr>
        <tr><td>评审模式预检</td><td>—</td><td class="is-featured">✓</td><td>✓</td></tr>
        <tr><td>协作成员</td><td>3 人</td><td class="is-featured">10 人</td><td>不限</td></tr>
        <tr><td>技术支持</td><td>社区</td><td class="is-featured">优先</td><td>专属</td></tr>
      </tbody>
    </table>
  </div>
</section>`,
  css: `.pl-ctable{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:radial-gradient(700px 460px at 80% 10%,rgba(255,176,0,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-ctable-head{max-width:560px;margin-bottom:24px}
.pl-ctable-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-ctable-head h2{margin-top:10px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.04em;color:#101b26}
.pl-ctable-head p{margin-top:8px;font-size:11.5px;color:#7a8792}
.pl-ctable-wrap{overflow:auto;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:#fff;box-shadow:0 18px 40px rgba(23,50,77,.07)}
.pl-ctable table{width:100%;border-collapse:collapse;min-width:560px;font-size:11.5px}
.pl-ctable th,.pl-ctable td{padding:13px 16px;border-bottom:1px solid rgba(23,50,77,.08);text-align:center;color:#4d5d6a}
.pl-ctable th:first-child,.pl-ctable td:first-child{text-align:left;color:#17324d;font-weight:700}
.pl-ctable th{background:#f7faf9;font-size:10px;letter-spacing:.06em;color:#607080}
.pl-ctable th.is-featured{background:#e9f5f3;color:#0f8b8d}
.pl-ctable td.is-featured{background:#f3faf9;color:#0f8b8d;font-weight:700}
.pl-ctable tbody tr:last-child td{border-bottom:0}
.pl-ctable tbody tr:hover td{background:#fbfcfc}
.pl-ctable tbody tr:hover td.is-featured{background:#ecf7f5}
@media (max-width:800px){.pl-ctable{padding:36px 22px}}`,
  js: ``
}
);
