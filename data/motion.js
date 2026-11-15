/* 动效与数据类插件 */
window.PLUGINS.push(
{
  id: "particles",
  name: "粒子场背景",
  cat: "motion",
  desc: "Canvas 粒子连线背景，可承载标题与数据。",
  tags: ["particles", "粒子", "canvas", "背景", "动效"],
  prompt: "做一个 Canvas 粒子连线背景：全屏画布上生成 50-70 个彩色小圆点，缓慢漂移，距离小于 120px 的点之间绘制半透明连线；颜色用青绿、琥珀、珊瑚和深蓝。前景放一块半透明玻璃面板，包含眉标、标题和一句说明。适配 devicePixelRatio，窗口缩放时重新生成粒子密度。",
  html: `<div class="pl-particles">
  <canvas class="pl-particles-canvas" data-particles></canvas>
  <div class="pl-particles-copy">
    <span>动效层</span>
    <h2>让静态页面<br>有呼吸感</h2>
    <p>轻量 Canvas 粒子场，适合首屏或章节头图。不依赖任何第三方库。</p>
    <div class="pl-particles-meta"><i></i>60 帧 · 支持减少动态效果</div>
  </div>
</div>`,
  css: `.pl-particles{position:relative;min-height:100vh;display:grid;place-items:center;overflow:hidden;background:radial-gradient(700px 460px at 20% 10%,rgba(15,139,141,.2),transparent 60%),radial-gradient(600px 420px at 90% 90%,rgba(255,176,0,.16),transparent 60%),linear-gradient(150deg,#f7fbfb,#eaf2f1)}
.pl-particles-canvas{position:absolute;inset:0;width:100%;height:100%}
.pl-particles-copy{position:relative;z-index:1;width:min(620px,86%);padding:34px;border:1px solid rgba(255,255,255,.7);border-radius:20px;background:rgba(255,255,255,.6);box-shadow:0 30px 70px rgba(23,50,77,.12);backdrop-filter:blur(20px) saturate(1.3);text-align:center}
.pl-particles-copy span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-particles-copy h2{margin-top:14px;font-size:clamp(2.2rem,4.4vw,3.4rem);line-height:1;letter-spacing:-.045em;color:#101b26}
.pl-particles-copy p{max-width:400px;margin:14px auto 0;font-size:12.5px;line-height:1.75;color:#607080}
.pl-particles-meta{display:inline-flex;align-items:center;gap:7px;margin-top:20px;font-size:9.5px;letter-spacing:.08em;color:#8a97a2}
.pl-particles-meta i{width:6px;height:6px;border-radius:50%;background:#0f8b8d;box-shadow:0 0 0 4px rgba(15,139,141,.12)}`,
  js: `(function () {
  var canvas = document.querySelector("[data-particles]");
  var ctx = canvas.getContext("2d");
  var colors = ["#0f8b8d", "#ffb000", "#da4167", "#17324d"];
  var particles = [];
  var width = 0;
  var height = 0;
  function resize() {
    var box = canvas.getBoundingClientRect();
    var ratio = Math.min(2, window.devicePixelRatio || 1);
    width = box.width;
    height = box.height;
    canvas.width = Math.max(1, Math.floor(width * ratio));
    canvas.height = Math.max(1, Math.floor(height * ratio));
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }
  function seed() {
    particles.length = 0;
    var count = Math.min(64, Math.max(30, Math.floor(width / 16)));
    for (var i = 0; i < count; i += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.42,
        vy: (Math.random() - 0.5) * 0.42,
        r: Math.random() * 2.2 + 1.2,
        color: colors[i % colors.length]
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < particles.length; i += 1) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.globalAlpha = 0.66;
      ctx.fillStyle = p.color;
      ctx.fill();
      for (var j = i + 1; j < particles.length; j += 1) {
        var other = particles[j];
        var distance = Math.sqrt(Math.pow(p.x - other.x, 2) + Math.pow(p.y - other.y, 2));
        if (distance < 122) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(other.x, other.y);
          ctx.globalAlpha = (1 - distance / 122) * 0.2;
          ctx.strokeStyle = p.color;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
  }
  resize();
  seed();
  draw();
  window.addEventListener("resize", function () { resize(); seed(); });
})();`
},
{
  id: "scrollytelling",
  name: "滚动叙事",
  cat: "motion",
  desc: "左侧步骤滚动，右侧视觉数字同步变化。",
  tags: ["scrolly", "滚动", "叙事", "步骤", "工程循环"],
  prompt: "做一个滚动叙事组件：左侧是可滚动的三步内容（设计、构建、测试），右侧是粘性视觉面板，中央一个圆环和巨大的步骤编号。滚动左侧时，当前步骤进入视口，右侧编号、标题和圆环旋转角度同步更新，当前步骤卡片高亮。使用 IntersectionObserver 监听滚动容器，不依赖滚动库。",
  html: `<div class="pl-scrolly">
  <div class="pl-scrolly-main" data-scrolly-scroll>
    <section class="pl-scrolly-intro"><span>设计 · 构建 · 测试</span><h1>工程循环，<br>一步一步讲。</h1><p>向下滚动，右侧的视觉会跟随当前步骤变化。</p></section>
    <article class="pl-scrolly-step is-active" data-step="0"><span>步骤 01</span><h2>设计</h2><p>从问题出发，列出可验证的假设。把启动子强度、宿主背景和培养条件拆成三个变量。</p></article>
    <article class="pl-scrolly-step" data-step="1"><span>步骤 02</span><h2>构建</h2><p>用标准化的组装流程构建 24 个组合。每一个构建都保留序列与验证记录，而不只是最终胜出的那一个。</p></article>
    <article class="pl-scrolly-step" data-step="2"><span>步骤 03</span><h2>测试</h2><p>在低氧与常氧条件下分别读数，用同一批宿主与对照排除批次差异，把结果与结论分开陈述。</p></article>
    <article class="pl-scrolly-step is-learn" data-step="3"><span>步骤 04</span><h2>学习</h2><p>常氧条件下的优势缩小，说明环境是关键变量。这个差异直接改变了下一轮的实验设计。</p></article>
  </div>
  <aside class="pl-scrolly-visual">
    <div class="pl-scrolly-ring" data-scrolly-ring><b data-scrolly-num>01</b></div>
    <span class="pl-scrolly-label" data-scrolly-label>设计</span>
    <div class="pl-scrolly-dots"><i class="is-active"></i><i></i><i></i><i></i></div>
  </aside>
</div>`,
  css: `.pl-scrolly{display:grid;grid-template-columns:minmax(0,1fr) 300px;gap:24px;height:100vh;padding:32px 40px;overflow:hidden;background:radial-gradient(700px 460px at 90% 10%,rgba(15,139,141,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-scrolly-main{overflow:auto;padding-right:10px;scroll-behavior:smooth}
.pl-scrolly-main::-webkit-scrollbar{width:5px}
.pl-scrolly-main::-webkit-scrollbar-thumb{background:rgba(23,50,77,.2);border-radius:99px}
.pl-scrolly-intro{display:flex;flex-direction:column;justify-content:center;min-height:64vh;padding:10px 0}
.pl-scrolly-intro span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-scrolly-intro h1{margin-top:16px;font-size:clamp(2.4rem,4.4vw,3.4rem);line-height:1.02;letter-spacing:-.045em;color:#101b26}
.pl-scrolly-intro p{max-width:400px;margin-top:14px;font-size:12.5px;line-height:1.75;color:#6a7885}
.pl-scrolly-step{min-height:190px;margin-bottom:14px;padding:24px;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:rgba(255,255,255,.62);transition:border-color .3s,background .3s,transform .3s}
.pl-scrolly-step.is-active{border-color:rgba(15,139,141,.5);background:rgba(255,255,255,.94);transform:translateX(4px);box-shadow:0 18px 40px rgba(23,50,77,.08)}
.pl-scrolly-step span{font-size:9px;font-weight:800;letter-spacing:.16em;color:#0f8b8d}
.pl-scrolly-step h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-scrolly-step p{margin-top:8px;font-size:12px;line-height:1.8;color:#6a7885}
.pl-scrolly-step.is-learn{border-style:dashed}
.pl-scrolly-visual{position:sticky;top:0;align-self:start;display:flex;flex-direction:column;align-items:center;justify-content:center;height:calc(100vh - 64px);border:1px solid rgba(23,50,77,.12);border-radius:20px;background:rgba(255,255,255,.66);box-shadow:0 22px 50px rgba(23,50,77,.08);backdrop-filter:blur(16px)}
.pl-scrolly-ring{display:grid;place-items:center;width:180px;height:180px;border-radius:50%;border:12px solid rgba(15,139,141,.14);border-top-color:#0f8b8d;border-right-color:#ffb000;transform:rotate(var(--turn,0deg));transition:transform .55s cubic-bezier(.2,.8,.2,1)}
.pl-scrolly-ring b{display:grid;place-items:center;width:110px;height:110px;border-radius:50%;background:#fff;font-size:34px;letter-spacing:-.05em;color:#17324d;transform:rotate(calc(var(--turn,0deg) * -1));transition:transform .55s cubic-bezier(.2,.8,.2,1)}
.pl-scrolly-label{margin-top:22px;font-size:14px;font-weight:800;letter-spacing:.08em;color:#17324d}
.pl-scrolly-dots{display:flex;gap:6px;margin-top:16px}
.pl-scrolly-dots i{width:6px;height:6px;border-radius:50%;background:rgba(23,50,77,.18);transition:background .25s,width .25s}
.pl-scrolly-dots i.is-active{width:18px;border-radius:99px;background:#0f8b8d}
@media (max-width:760px){.pl-scrolly{grid-template-columns:1fr;padding:20px}.pl-scrolly-visual{display:none}}`,
  js: `(function () {
  var scroller = document.querySelector("[data-scrolly-scroll]");
  var steps = Array.prototype.slice.call(document.querySelectorAll(".pl-scrolly-step"));
  var ring = document.querySelector("[data-scrolly-ring]");
  var num = document.querySelector("[data-scrolly-num]");
  var label = document.querySelector("[data-scrolly-label]");
  var dots = Array.prototype.slice.call(document.querySelectorAll(".pl-scrolly-dots i"));
  function activate(index) {
    steps.forEach(function (step, i) { step.classList.toggle("is-active", i === index); });
    dots.forEach(function (dot, i) { dot.classList.toggle("is-active", i === index); });
    num.textContent = ("0" + (index + 1)).slice(-2);
    label.textContent = steps[index].querySelector("h2").textContent;
    ring.style.setProperty("--turn", index * 90 + "deg");
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) activate(parseInt(entry.target.getAttribute("data-step"), 10));
    });
  }, { root: scroller, rootMargin: "-40% 0px -45% 0px", threshold: 0 });
  steps.forEach(function (step) { observer.observe(step); });
})();`
},
{
  id: "marquee",
  name: "跑马灯",
  cat: "motion",
  desc: "双向滚动的文字带，悬停暂停。",
  tags: ["marquee", "跑马灯", "滚动", "文字", "动效"],
  prompt: "做一个双向跑马灯区块：两行超大文字标签反向滚动，内容复制两份实现无缝循环，悬停时暂停。第一行是项目关键词，第二行是工具与技术，标签之间用小圆点分隔。两侧加渐隐遮罩，整体放在深色背景上，标题居中放在两行之间。",
  html: `<div class="pl-marq">
  <div class="pl-marq-row"><div class="pl-marq-track"><span>设计</span><i></i><span>构建</span><i></i><span>测试</span><i></i><span>学习</span><i></i><span>分享</span><i></i><span>设计</span><i></i><span>构建</span><i></i><span>测试</span><i></i><span>学习</span><i></i><span>分享</span><i></i></div></div>
  <div class="pl-marq-center"><span>可复用动效</span><h2>让页面<br>流动起来</h2><p>悬停任意一行暂停滚动。</p></div>
  <div class="pl-marq-row is-reverse"><div class="pl-marq-track"><span>HTML</span><i></i><span>CSS</span><i></i><span>JAVASCRIPT</span><i></i><span>SVG</span><i></i><span>CANVAS</span><i></i><span>HTML</span><i></i><span>CSS</span><i></i><span>JAVASCRIPT</span><i></i><span>SVG</span><i></i><span>CANVAS</span><i></i></div></div>
</div>`,
  css: `.pl-marq{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden;background:radial-gradient(700px 460px at 20% 20%,rgba(15,139,141,.26),transparent 60%),radial-gradient(600px 420px at 85% 85%,rgba(255,176,0,.18),transparent 60%),linear-gradient(150deg,#132b40,#081520)}
.pl-marq-row{position:relative;overflow:hidden;padding:10px 0;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.pl-marq-track{display:flex;align-items:center;gap:26px;width:max-content;animation:pl-marq-scroll 26s linear infinite}
.pl-marq-row:hover .pl-marq-track{animation-play-state:paused}
.pl-marq-row.is-reverse .pl-marq-track{animation-direction:reverse;animation-duration:32s}
.pl-marq-track span{font-size:clamp(2.4rem,5.4vw,4.4rem);font-weight:800;letter-spacing:-.04em;color:rgba(255,255,255,.14);white-space:nowrap;transition:color .3s}
.pl-marq-row:hover .pl-marq-track span{color:rgba(255,255,255,.26)}
.pl-marq-track i{width:10px;height:10px;border-radius:50%;background:#ffb000;opacity:.6}
.pl-marq-row.is-reverse .pl-marq-track span{color:rgba(143,215,213,.22);font-size:clamp(1.8rem,3.6vw,3rem)}
.pl-marq-row.is-reverse .pl-marq-track i{background:#0f8b8d}
.pl-marq-center{position:relative;z-index:2;padding:22px 40px;text-align:center}
.pl-marq-center span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#8fd7d5}
.pl-marq-center h2{margin-top:12px;font-size:clamp(2.4rem,4.8vw,3.8rem);line-height:1;letter-spacing:-.045em;color:#fff}
.pl-marq-center p{margin-top:12px;font-size:11px;color:#8ba7b2}
@keyframes pl-marq-scroll{to{transform:translateX(-50%)}}`
  ,
  js: ``
},
{
  id: "evidence-filter",
  name: "证据筛选",
  cat: "data",
  desc: "按湿实验、模型、HP 与安全筛选结果卡片。",
  tags: ["filter", "筛选", "证据", "结果", "分类"],
  prompt: "做一个证据筛选组件：顶部一排胶囊筛选标签（全部、湿实验、模型、人类实践、安全），每个带数量；下方是 3 列证据卡片，每张有小分类标签、标题和一句结论。点击标签即时过滤卡片，并更新当前显示数量。卡片使用白色底、细描边和圆角，移动端两列。",
  html: `<section class="pl-filter">
  <header class="pl-filter-head">
    <div><span>证据</span><h2>按来源筛选结论</h2></div>
    <p>显示 <b data-filter-count>6</b> / 6 条证据</p>
  </header>
  <div class="pl-filter-chips" data-filter-group>
    <button type="button" class="is-active" data-filter="all">全部 <b>6</b></button>
    <button type="button" data-filter="wet">湿实验 <b>2</b></button>
    <button type="button" data-filter="model">模型 <b>1</b></button>
    <button type="button" data-filter="hp">人类实践 <b>2</b></button>
    <button type="button" data-filter="safety">安全 <b>1</b></button>
  </div>
  <div class="pl-filter-grid" data-filter-grid>
    <article data-cat="wet"><span class="pl-filter-tag">湿实验</span><h3>组合 07 表达提升</h3><p>低氧条件下荧光强度达到基线 3.2 倍，n=8。</p></article>
    <article data-cat="wet"><span class="pl-filter-tag is-amber">湿实验</span><h3>批次稳定性</h3><p>连续 8 批变异系数低于 6%，排除位置效应。</p></article>
    <article data-cat="model"><span class="pl-filter-tag is-deep">模型</span><h3>启动子活性预测</h3><p>模型预测与实测的相关系数为 0.86。</p></article>
    <article data-cat="hp"><span class="pl-filter-tag is-coral">人类实践</span><h3>低氧场景访谈</h3><p>12 位从业者确认现场氧浓度远低于实验室。</p></article>
    <article data-cat="hp"><span class="pl-filter-tag is-coral">人类实践</span><h3>设计修改记录</h3><p>访谈后把常氧验证改为主验证之外的对照。</p></article>
    <article data-cat="safety"><span class="pl-filter-tag is-moss">安全</span><h3>逃逸风险评估</h3><p>引入营养缺陷型，环境存活时间显著缩短。</p></article>
  </div>
</section>`,
  css: `.pl-filter{min-height:100vh;display:grid;align-content:center;padding:40px 48px;background:radial-gradient(700px 460px at 90% 8%,rgba(255,176,0,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-filter-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:16px}
.pl-filter-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-filter-head h2{margin-top:8px;font-size:clamp(1.7rem,3vw,2.3rem);letter-spacing:-.03em;color:#101b26}
.pl-filter-head p{font-size:10.5px;color:#8a97a2}
.pl-filter-head b{color:#17324d}
.pl-filter-chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px}
.pl-filter-chips button{padding:8px 12px;border:1px solid rgba(23,50,77,.14);border-radius:999px;background:rgba(255,255,255,.75);font-size:10.5px;color:#607080;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
.pl-filter-chips button b{margin-left:2px;font-size:9px;opacity:.65}
.pl-filter-chips button:hover{background:#fff}
.pl-filter-chips button.is-active{border-color:#17324d;background:#17324d;color:#fff}
.pl-filter-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.pl-filter-grid article{padding:16px;border:1px solid rgba(23,50,77,.12);border-radius:12px;background:rgba(255,255,255,.88);box-shadow:0 8px 20px rgba(23,50,77,.04);animation:pl-filter-in .25s ease both}
.pl-filter-grid article[hidden]{display:none}
.pl-filter-tag{display:inline-flex;padding:3px 7px;border-radius:999px;background:rgba(15,139,141,.1);font-size:8.5px;font-weight:800;letter-spacing:.06em;color:#0f8b8d}
.pl-filter-tag.is-amber{background:rgba(255,176,0,.14);color:#a06f00}
.pl-filter-tag.is-deep{background:rgba(23,50,77,.1);color:#17324d}
.pl-filter-tag.is-coral{background:rgba(218,65,103,.1);color:#da4167}
.pl-filter-tag.is-moss{background:rgba(125,143,105,.16);color:#5e7049}
.pl-filter-grid h3{margin-top:9px;font-size:12.5px;color:#17324d}
.pl-filter-grid p{margin-top:5px;font-size:10.5px;line-height:1.6;color:#7a8792}
@keyframes pl-filter-in{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
@media (max-width:820px){.pl-filter{padding:30px 22px}.pl-filter-grid{grid-template-columns:1fr 1fr}}`,
  js: `(function () {
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter-group] button"));
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-filter-grid] article"));
  var counter = document.querySelector("[data-filter-count]");
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      var filter = chip.getAttribute("data-filter");
      chips.forEach(function (item) { item.classList.toggle("is-active", item === chip); });
      var visible = 0;
      cards.forEach(function (card) {
        var match = filter === "all" || card.getAttribute("data-cat") === filter;
        card.hidden = !match;
        if (match) visible += 1;
      });
      counter.textContent = visible;
    });
  });
})();`
},
{
  id: "glossary-note",
  name: "术语注释",
  cat: "data",
  desc: "正文中的虚线术语，悬浮或聚焦显示解释。",
  tags: ["glossary", "术语", "注释", "阅读", "tooltip"],
  prompt: "做一个术语注释组件：一段正常排版的正文，其中三个专业术语用青绿色虚线下划线标出，悬停或键盘聚焦时在上方弹出深色解释气泡，带小箭头；气泡最大宽度 280px，不打断正文阅读。文末附一个三行术语小表，方便打印或快速浏览。",
  html: `<div class="pl-gloss">
  <span>可读的科学</span>
  <h2>不打断阅读的解释</h2>
  <p class="pl-gloss-text">在低氧条件下，<span class="pl-note" tabindex="0" data-note="一段能被 RNA 聚合酶识别并启动转录的 DNA 序列。">启动子</span>的活性会显著影响荧光蛋白的表达。我们通过 8 个批次的重复实验，确认批次间的<span class="pl-note" tabindex="0" data-note="标准差除以平均值，用来衡量数据的离散程度；越小说明重复性越好。">变异系数</span>低于 6%。同时设置<span class="pl-note" tabindex="0" data-note="除实验变量外，其余条件保持一致的对照组，用于排除其他解释。">对照实验</span>，排除位置效应和宿主背景带来的干扰。</p>
  <div class="pl-gloss-table">
    <div><b>启动子</b><span>驱动基因转录的 DNA 序列</span></div>
    <div><b>变异系数</b><span>衡量批次间离散程度的相对指标</span></div>
    <div><b>对照实验</b><span>排除其他变量的基准组</span></div>
  </div>
</div>`,
  css: `.pl-gloss{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:48px;background:radial-gradient(700px 460px at 20% 10%,rgba(15,139,141,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-gloss>span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-gloss h2{margin-top:12px;font-size:clamp(1.9rem,3.4vw,2.7rem);letter-spacing:-.04em;color:#101b26;text-align:center}
.pl-gloss-text{max-width:600px;margin-top:22px;font-size:15px;line-height:2.05;color:#4d5d6a}
.pl-note{position:relative;display:inline;border-bottom:2px dotted #0f8b8d;color:#0f8b8d;font-weight:700;cursor:help}
.pl-note::after{content:attr(data-note);position:absolute;left:50%;bottom:calc(100% + 12px);width:max-content;max-width:280px;padding:10px 12px;border-radius:9px;background:#17324d;font-size:11px;font-weight:400;line-height:1.6;color:#fff;box-shadow:0 14px 30px rgba(23,50,77,.24);opacity:0;transform:translate(-50%,6px);pointer-events:none;transition:opacity .18s,transform .18s;z-index:3}
.pl-note::before{content:"";position:absolute;left:50%;bottom:calc(100% + 3px);border:5px solid transparent;border-top-color:#17324d;opacity:0;transform:translate(-50%,6px);transition:opacity .18s,transform .18s;z-index:3}
.pl-note:hover::after,.pl-note:focus-visible::after,.pl-note:hover::before,.pl-note:focus-visible::before{opacity:1;transform:translate(-50%,0)}
.pl-gloss-table{width:min(600px,100%);margin-top:30px;padding-top:8px;border-top:1px solid rgba(23,50,77,.12)}
.pl-gloss-table div{display:grid;grid-template-columns:90px 1fr;gap:12px;padding:8px 0;border-bottom:1px solid rgba(23,50,77,.07)}
.pl-gloss-table b{font-size:11px;color:#17324d}
.pl-gloss-table span{font-size:10.5px;line-height:1.6;color:#8a97a2}
@media (max-width:700px){.pl-gloss{padding:32px 22px}.pl-gloss-text{font-size:14px}}`,
  js: ``
},
{
  id: "data-bars",
  name: "数据条组",
  cat: "data",
  desc: "水平数据条，进入视口后从 0 展开。",
  tags: ["data", "数据", "条形图", "进度", "指标"],
  prompt: "做一个水平数据条组件：标题下方五行数据，每行左侧是标签，中间是浅灰色轨道，轨道里是青绿色渐变填充条，右侧是百分比数值。页面加载后填充条从 0 平滑展开到目标值，并带一点延迟错落。底部有一行小字说明样本量与统计口径。",
  html: `<section class="pl-bars">
  <header class="pl-bars-head"><div><span>测量数据</span><h2>五组关键读数</h2></div><p>样本量 n=8 · 取最近一批中位数</p></header>
  <div class="pl-bars-list" data-bars>
    <div class="pl-bar-row"><span>荧光表达阳性率</span><div><i style="--w:98.6%"></i></div><b>98.6%</b></div>
    <div class="pl-bar-row"><span>低氧条件存活率</span><div><i style="--w:82%"></i></div><b>82%</b></div>
    <div class="pl-bar-row"><span>批次间一致性</span><div><i style="--w:64%"></i></div><b>64%</b></div>
    <div class="pl-bar-row"><span>模型预测准确率</span><div><i style="--w:48%"></i></div><b>48%</b></div>
    <div class="pl-bar-row"><span>环境逃逸风险下降</span><div><i style="--w:31%"></i></div><b>31%</b></div>
  </div>
  <footer class="pl-bars-foot"><span></span>数值仅用于演示，不代表真实实验结论。</footer>
</section>`,
  css: `.pl-bars{min-height:100vh;display:grid;align-content:center;padding:44px 52px;background:radial-gradient(700px 460px at 10% 10%,rgba(15,139,141,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-bars-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:26px}
.pl-bars-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-bars-head h2{margin-top:8px;font-size:clamp(1.7rem,3vw,2.3rem);letter-spacing:-.03em;color:#101b26}
.pl-bars-head p{font-size:10px;color:#8a97a2}
.pl-bars-list{display:grid;gap:16px}
.pl-bar-row{display:grid;grid-template-columns:150px minmax(0,1fr) 60px;align-items:center;gap:16px}
.pl-bar-row>span{font-size:11.5px;color:#4d5d6a}
.pl-bar-row>div{height:10px;border-radius:99px;background:rgba(23,50,77,.08);overflow:hidden}
.pl-bar-row i{display:block;width:0;height:100%;border-radius:99px;background:linear-gradient(90deg,#0f8b8d,#35a7a9);transition:width 1.1s cubic-bezier(.2,.8,.2,1)}
.pl-bar-row:nth-child(2) i{background:linear-gradient(90deg,#0f8b8d,#ffb000)}
.pl-bar-row:nth-child(3) i{background:linear-gradient(90deg,#17324d,#0f8b8d)}
.pl-bar-row:nth-child(4) i{background:linear-gradient(90deg,#ffb000,#e08c00)}
.pl-bar-row:nth-child(5) i{background:linear-gradient(90deg,#da4167,#b52e50)}
.pl-bar-row b{font-size:13px;color:#17324d;text-align:right;font-variant-numeric:tabular-nums}
.pl-bars-foot{display:flex;align-items:center;gap:8px;margin-top:26px;padding-top:14px;border-top:1px solid rgba(23,50,77,.1);font-size:9.5px;color:#9aa6b0}
.pl-bars-foot span{width:6px;height:6px;border-radius:50%;background:#0f8b8d}
@media (max-width:700px){.pl-bars{padding:32px 22px}.pl-bar-row{grid-template-columns:96px minmax(0,1fr) 52px;gap:10px}}`,
  js: `(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll(".pl-bar-row i"));
  function run() {
    items.forEach(function (item, i) {
      setTimeout(function () { item.style.width = item.style.getPropertyValue("--w"); }, 120 + i * 110);
    });
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        run();
        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });
  if (items.length) observer.observe(items[0].closest(".pl-bars"));
})();`
}
);
