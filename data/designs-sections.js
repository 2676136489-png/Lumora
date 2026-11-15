/* 独立设计：页面区块（结构、排版与交互各自不同） */
window.PLUGINS.push(
{
  id: "editorial-hero",
  name: "编辑型首屏",
  cat: "sections",
  desc: "杂志式非对称首屏，衬线标题、偏置图片与事实栏。",
  tags: ["首屏", "编辑设计", "衬线", "非对称"],
  prompt: "做一个杂志编辑风格的首屏：米白纸张背景，顶部一条细线导航；左侧是超大衬线标题、短导语和文字链接；右侧是一张偏置的实验图片，带细边框和图注；底部是一条事实栏，三项数据用竖线分隔。整体采用非对称网格、大留白和深棕文字，移动端改为单列。",
  html: `<section class="pl-ed">
  <header class="pl-ed-nav"><strong>FIELD / NOTES</strong><span>2026 · 合成生物学</span></header>
  <div class="pl-ed-grid">
    <div class="pl-ed-copy">
      <span class="pl-ed-kicker">项目档案 07</span>
      <h1>低氧环境下的<br><em>稳定表达</em></h1>
      <p>从启动子文库到批次验证，记录一条可复核的工程路径。</p>
      <a class="pl-ed-link" href="#">阅读全文 <b>→</b></a>
    </div>
    <figure class="pl-ed-figure">
      <img src="assets/img/plugins/hover-03.jpg" alt="实验台" loading="lazy">
      <figcaption>批次 07 · 低氧培养 · 48h</figcaption>
    </figure>
  </div>
  <footer class="pl-ed-facts">
    <div><b>98.6%</b><span>表达阳性率</span></div>
    <div><b>3.2×</b><span>相对基线</span></div>
    <div><b>8 批</b><span>连续验证</span></div>
    <div><b>12 位</b><span>利益相关者</span></div>
  </footer>
</section>`,
  css: `.pl-ed{min-height:100vh;display:flex;flex-direction:column;padding:34px 52px 30px;background:#f2ede4;color:#1c1a16;font-family:Georgia,"Songti SC","SimSun",serif}
.pl-ed-nav{display:flex;align-items:center;justify-content:space-between;padding-bottom:14px;border-bottom:1px solid rgba(28,26,22,.28);font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;text-transform:uppercase}
.pl-ed-nav span{color:#7a7164}
.pl-ed-grid{flex:1;display:grid;grid-template-columns:1.15fr .85fr;align-items:center;gap:54px;padding:38px 0}
.pl-ed-kicker{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.18em;color:#b23a2a;text-transform:uppercase}
.pl-ed h1{margin-top:18px;font-size:clamp(2.8rem,5.6vw,5rem);font-weight:400;line-height:1.02;letter-spacing:-.035em}
.pl-ed h1 em{font-style:italic;color:#b23a2a}
.pl-ed p{max-width:430px;margin-top:20px;font-size:14px;line-height:1.85;color:#5f574c}
.pl-ed-link{display:inline-flex;align-items:center;gap:10px;margin-top:26px;padding-bottom:4px;border-bottom:1px solid #1c1a16;font-size:12px;letter-spacing:.04em;color:#1c1a16}
.pl-ed-link b{transition:transform .2s}
.pl-ed-link:hover b{transform:translateX(4px)}
.pl-ed-figure{margin:0}
.pl-ed-figure img{width:100%;height:330px;object-fit:cover;border:1px solid rgba(28,26,22,.24);filter:saturate(.85)}
.pl-ed-figure figcaption{margin-top:10px;font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.1em;color:#7a7164}
.pl-ed-facts{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;padding-top:18px;border-top:1px solid rgba(28,26,22,.28)}
.pl-ed-facts b{display:block;font-size:25px;font-weight:400;letter-spacing:-.03em}
.pl-ed-facts span{display:block;margin-top:3px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:9.5px;color:#7a7164}
@media (max-width:800px){.pl-ed{padding:26px 22px 24px}.pl-ed-grid{grid-template-columns:1fr;gap:28px;padding:28px 0}.pl-ed-figure img{height:230px}.pl-ed-facts{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "terminal-hero",
  name: "终端首屏",
  cat: "sections",
  desc: "深色终端窗口，等宽字体、扫描线与循环打字。",
  tags: ["首屏", "终端", "等宽", "打字"],
  prompt: "做一个终端风格的首屏：深墨绿背景，中央是带红黄绿圆点的终端窗口，等宽字体、绿色文字和细扫描线。窗口内先显示一行命令，再是超大标题、短说明、两个方括号按钮，底部一行循环打字的命令行。加入闪烁光标，移动端缩小标题与内边距。",
  html: `<div class="pl-term">
  <div class="pl-term-bar"><i></i><i></i><i></i><span>~/project/low-oxygen</span></div>
  <div class="pl-term-body">
    <p class="pl-term-line">$ run --project low-oxygen</p>
    <h1>LOW OXYGEN<br><em>EXPRESSION</em></h1>
    <p class="pl-term-copy">A synthetic biology platform for stable expression in hypoxic environments.</p>
    <div class="pl-term-actions"><a href="#">[ 查看项目 ]</a><a href="#">[ 工程循环 ]</a></div>
    <p class="pl-term-type"><span data-term-type></span><i></i></p>
  </div>
</div>`,
  css: `.pl-term{position:relative;min-height:100vh;display:grid;place-items:center;padding:40px;background:radial-gradient(700px 460px at 50% 0%,rgba(40,255,140,.08),transparent 60%),#07100b;color:#7cff9b;font-family:ui-monospace,Consolas,"Courier New",monospace;overflow:hidden}
.pl-term::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.035) 0 1px,transparent 1px 4px)}
.pl-term-bar{position:absolute;top:22px;left:22px;right:22px;display:flex;align-items:center;gap:6px;padding:10px 14px;border:1px solid rgba(124,255,155,.25);border-radius:8px 8px 0 0;background:rgba(124,255,155,.04)}
.pl-term-bar i{width:8px;height:8px;border-radius:50%;background:#ff5f57}
.pl-term-bar i:nth-child(2){background:#febc2e}
.pl-term-bar i:nth-child(3){background:#28c840}
.pl-term-bar span{margin-left:8px;font-size:9px;color:rgba(124,255,155,.55)}
.pl-term-body{position:relative;z-index:1;width:min(760px,100%);margin-top:40px}
.pl-term-line{font-size:11px;color:rgba(124,255,155,.55)}
.pl-term h1{margin-top:20px;font-size:clamp(2.8rem,7vw,5.6rem);line-height:.98;letter-spacing:-.04em;font-weight:700;color:#d9ffe6}
.pl-term h1 em{font-style:normal;color:#7cff9b;text-shadow:0 0 24px rgba(124,255,155,.35)}
.pl-term-copy{max-width:520px;margin-top:20px;font-size:12px;line-height:1.8;color:rgba(217,255,230,.62)}
.pl-term-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
.pl-term-actions a{padding:10px 14px;border:1px solid rgba(124,255,155,.35);border-radius:4px;font-size:11px;color:#7cff9b;transition:background .2s,color .2s}
.pl-term-actions a:hover{background:#7cff9b;color:#07100b}
.pl-term-type{min-height:18px;margin-top:30px;font-size:11px;color:rgba(124,255,155,.72)}
.pl-term-type i{display:inline-block;width:7px;height:13px;margin-left:4px;background:#7cff9b;vertical-align:-2px;animation:pl-term-blink 1s steps(1) infinite}
@keyframes pl-term-blink{50%{opacity:0}}
@media (max-width:600px){.pl-term{padding:24px}.pl-term-bar{left:12px;right:12px;top:12px}.pl-term h1{font-size:2.5rem}}`,
  js: `(function () {
  var el = document.querySelector("[data-term-type]");
  if (!el) return;
  var lines = ["启动子文库已加载。", "批次 07 验证完成。", "等待下一步指令。"];
  var index = 0, char = 0, deleting = false;
  function tick() {
    var text = lines[index];
    el.textContent = text.slice(0, char);
    if (!deleting && char < text.length) { char += 1; setTimeout(tick, 90); }
    else if (!deleting) { deleting = true; setTimeout(tick, 1200); }
    else if (char > 0) { char -= 1; setTimeout(tick, 40); }
    else { deleting = false; index = (index + 1) % lines.length; setTimeout(tick, 300); }
  }
  tick();
})();`
},
{
  id: "brutalist-features",
  name: "粗野主义功能墙",
  cat: "sections",
  desc: "黄黑高对比、粗边框与硬阴影的六宫格功能墙。",
  tags: ["功能", "粗野主义", "高对比", "硬阴影"],
  prompt: "做一个粗野主义功能墙：亮黄色背景，黑色粗标题，六张白色卡片排成三列，每张卡片有 3px 黑色边框和 8px 硬阴影，悬停时卡片左上移动并加长阴影。卡片内用等宽大写编号、粗体标题和两行说明，整体高对比、无圆角。移动端两列再单列。",
  html: `<section class="pl-bf">
  <header class="pl-bf-head"><span>FEATURES / 06</span><h2>把复杂流程<br>拆成可执行模块</h2></header>
  <div class="pl-bf-grid">
    <article><b>01</b><h3>文库设计</h3><p>覆盖启动子与核糖体结合位点的组合空间。</p></article>
    <article><b>02</b><h3>标准组装</h3><p>统一构建流程，减少批次间的操作差异。</p></article>
    <article><b>03</b><h3>低氧验证</h3><p>在 2% 氧气条件下完成两阶段筛选。</p></article>
    <article><b>04</b><h3>批次重复</h3><p>每批 8 个重复，保留完整原始读数。</p></article>
    <article><b>05</b><h3>模型预测</h3><p>用敏感性分析确定下一轮构建优先级。</p></article>
    <article><b>06</b><h3>协议固化</h3><p>将校准、取样与废弃物处理写入标准流程。</p></article>
  </div>
</section>`,
  css: `.pl-bf{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:#f5f13f;color:#111;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-bf-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;margin-bottom:26px}
.pl-bf-head span{font-family:ui-monospace,Consolas,monospace;font-size:10px;font-weight:700;letter-spacing:.16em}
.pl-bf-head h2{font-size:clamp(2rem,4vw,3.2rem);line-height:1;letter-spacing:-.04em;text-align:right}
.pl-bf-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.pl-bf-grid article{padding:20px;border:3px solid #111;background:#fff;box-shadow:8px 8px 0 #111;transition:transform .18s,box-shadow .18s}
.pl-bf-grid article:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 #111}
.pl-bf-grid b{font-family:ui-monospace,Consolas,monospace;font-size:10px;letter-spacing:.14em}
.pl-bf-grid h3{margin-top:16px;font-size:18px;letter-spacing:-.02em}
.pl-bf-grid p{margin-top:6px;font-size:11.5px;line-height:1.65;color:#333}
@media (max-width:800px){.pl-bf{padding:32px 20px}.pl-bf-head{display:block}.pl-bf-head h2{text-align:left;margin-top:8px}.pl-bf-grid{grid-template-columns:1fr 1fr}}
@media (max-width:520px){.pl-bf-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "zigzag-features",
  name: "交错功能行",
  cat: "sections",
  desc: "图文左右交替的功能说明，强调长文阅读。",
  tags: ["功能", "交错布局", "图文", "长文"],
  prompt: "做一个图文交错的功能说明：每个功能占一行，左侧文字（编号、衬线标题、说明、三条要点），右侧一张 4:3 图片；下一行左右互换。整体米白背景、细线分隔、图片小圆角。移动端所有行改为图片在上、文字在下。",
  html: `<section class="pl-zig">
  <header class="pl-zig-head"><span>HOW IT WORKS</span><h2>三步建立可复核的表达平台</h2></header>
  <div class="pl-zig-row">
    <div class="pl-zig-text"><span>01</span><h3>建立文库</h3><p>以启动子强度与核糖体结合位点为核心变量，构建可比较的组合空间。</p><ul><li>240 个候选组合</li><li>统一宿主背景</li><li>保留空载对照</li></ul></div>
    <figure><img src="assets/img/plugins/hover-01.jpg" alt="藻类培养" loading="lazy"></figure>
  </div>
  <div class="pl-zig-row is-reverse">
    <div class="pl-zig-text"><span>02</span><h3>低氧筛选</h3><p>先在 96 孔板中初筛，再对前 10% 组合进行独立批次验证。</p><ul><li>2% 氧气条件</li><li>8 个重复</li><li>96 孔板初筛</li></ul></div>
    <figure><img src="assets/img/plugins/carousel-01.jpg" alt="实验室" loading="lazy"></figure>
  </div>
  <div class="pl-zig-row">
    <div class="pl-zig-text"><span>03</span><h3>固化协议</h3><p>将校准、取样、读数与废弃物处理写入标准化协议，供其他团队复用。</p><ul><li>设备校准记录</li><li>三步读数流程</li><li>打印版记录表</li></ul></div>
    <figure><img src="assets/img/plugins/hover-02.jpg" alt="分子结构" loading="lazy"></figure>
  </div>
</section>`,
  css: `.pl-zig{min-height:100vh;padding:46px 54px;background:#fbfaf7;color:#1c1a16;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-zig-head{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding-bottom:18px;border-bottom:1px solid rgba(28,26,22,.2)}
.pl-zig-head span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#b23a2a}
.pl-zig-head h2{font-family:Georgia,"Songti SC",serif;font-size:clamp(1.7rem,3vw,2.4rem);font-weight:400;letter-spacing:-.03em}
.pl-zig-row{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:48px;padding:26px 0;border-bottom:1px solid rgba(28,26,22,.14)}
.pl-zig-row.is-reverse .pl-zig-text{order:2}
.pl-zig-row.is-reverse figure{order:1}
.pl-zig-text>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.14em;color:#b23a2a}
.pl-zig-text h3{margin-top:8px;font-family:Georgia,"Songti SC",serif;font-size:24px;font-weight:400}
.pl-zig-text p{margin-top:8px;font-size:11.5px;line-height:1.75;color:#6d6357}
.pl-zig-text ul{display:flex;flex-wrap:wrap;gap:6px 18px;margin:12px 0 0;padding:0;list-style:none}
.pl-zig-text li{position:relative;padding-left:12px;font-size:10px;color:#4d463d}
.pl-zig-text li::before{content:"";position:absolute;left:0;top:6px;width:4px;height:4px;border-radius:50%;background:#b23a2a}
.pl-zig figure{margin:0}
.pl-zig figure img{width:100%;height:210px;object-fit:cover;border-radius:8px;filter:saturate(.9)}
@media (max-width:760px){.pl-zig{padding:32px 22px}.pl-zig-head{display:block}.pl-zig-head h2{margin-top:8px}.pl-zig-row{grid-template-columns:1fr;gap:18px}.pl-zig-row.is-reverse .pl-zig-text,.pl-zig-row.is-reverse figure{order:initial}}`,
  js: ``
},
{
  id: "process-sticky",
  name: "粘性流程说明",
  cat: "sections",
  desc: "左侧粘性摘要、右侧滚动步骤，当前步骤同步更新。",
  tags: ["流程", "粘性", "步骤", "滚动"],
  prompt: "做一个粘性流程说明：左侧固定显示当前步骤编号、标题和一句摘要，右侧是可滚动的四段步骤内容。滚动右侧时，左侧编号与标题同步变化，右侧当前步骤加边框和浅色底。整体两列布局，左列使用大号衬线编号，右列每段至少一屏高，移动端改为单列并隐藏粘性面板。",
  html: `<div class="pl-proc">
  <aside class="pl-proc-sticky">
    <span>PROCESS</span>
    <b data-proc-num>01</b>
    <h2 data-proc-title>设计</h2>
    <p data-proc-desc>确定变量、成功标准与筛选边界。</p>
  </aside>
  <div class="pl-proc-steps" data-proc-steps>
    <article class="is-active" data-step="0"><span>01</span><h3>设计</h3><p>以启动子强度、宿主背景与氧气浓度为核心变量，确定筛选边界。</p></article>
    <article data-step="1"><span>02</span><h3>构建</h3><p>用标准化组装流程构建 240 个组合，设置空载与无启动子对照。</p></article>
    <article data-step="2"><span>03</span><h3>测试</h3><p>在低氧与常氧条件下分别读数，每批 8 个重复。</p></article>
    <article data-step="3"><span>04</span><h3>学习</h3><p>根据批次差异调整文库覆盖范围，并将校准步骤写入协议。</p></article>
  </div>
</div>`,
  css: `.pl-proc{display:grid;grid-template-columns:330px minmax(0,1fr);gap:40px;height:100vh;padding:34px 48px;overflow:hidden;background:#f7f8f4}
.pl-proc-sticky{display:flex;flex-direction:column;justify-content:center;align-self:start;height:calc(100vh - 68px);padding-right:30px;border-right:1px solid rgba(23,50,77,.14)}
.pl-proc-sticky span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-proc-sticky b{margin-top:18px;font-size:76px;line-height:1;letter-spacing:-.06em;color:#17324d;font-weight:400}
.pl-proc-sticky h2{margin-top:8px;font-family:Georgia,"Songti SC",serif;font-size:30px;font-weight:400;color:#101b26}
.pl-proc-sticky p{max-width:220px;margin-top:10px;font-size:12px;line-height:1.7;color:#6a7885}
.pl-proc-steps{overflow:auto;padding-right:12px}
.pl-proc-steps article{min-height:34vh;margin-bottom:14px;padding:22px;border:1px solid transparent;border-radius:12px;transition:border-color .25s,background .25s}
.pl-proc-steps article.is-active{border-color:rgba(15,139,141,.35);background:rgba(255,255,255,.8)}
.pl-proc-steps span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.14em;color:#0f8b8d}
.pl-proc-steps h3{margin-top:8px;font-size:20px;color:#17324d}
.pl-proc-steps p{margin-top:8px;font-size:12px;line-height:1.8;color:#6a7885}
@media (max-width:760px){.pl-proc{grid-template-columns:1fr;height:auto;padding:24px;overflow:visible}.pl-proc-sticky{display:none}.pl-proc-steps article{min-height:0}}`,
  js: `(function () {
  var steps = Array.prototype.slice.call(document.querySelectorAll("[data-step]"));
  var num = document.querySelector("[data-proc-num]");
  var title = document.querySelector("[data-proc-title]");
  var desc = document.querySelector("[data-proc-desc]");
  if (!steps.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var i = Number(entry.target.getAttribute("data-step"));
      steps.forEach(function (step) { step.classList.toggle("is-active", step === entry.target); });
      num.textContent = ("0" + (i + 1)).slice(-2);
      title.textContent = entry.target.querySelector("h3").textContent;
      desc.textContent = entry.target.querySelector("p").textContent;
    });
  }, { rootMargin: "-35% 0px -50% 0px" });
  steps.forEach(function (step) { io.observe(step); });
})();`
},
{
  id: "team-grid",
  name: "团队网格",
  cat: "sections",
  desc: "六人团队网格，渐变头像、角色标签与简介。",
  tags: ["团队", "头像", "网格", "人物"],
  prompt: "做一个团队介绍网格：米色背景，顶部是小标签与衬线标题；下面三列两行共六张成员卡，每张含渐变色圆形首字母头像、姓名、角色标签和一句简介。卡片无阴影、细边框，悬停时头像轻微放大、卡片上浮。移动端两列。",
  html: `<section class="pl-team">
  <header class="pl-team-head"><span>TEAM / 06</span><h2>六个方向，同一套证据标准</h2><p>湿实验、建模、设计、安全与传播共同维护项目的一致性。</p></header>
  <div class="pl-team-grid">
    <article><span class="pl-team-ava" style="--a:#0f8b8d;--b:#17324d">马</span><h3>马林</h3><b>湿实验</b><p>低氧培养、文库构建与批次读数。</p></article>
    <article><span class="pl-team-ava" style="--a:#ffb000;--b:#da4167">李</span><h3>李蕴</h3><b>建模</b><p>敏感性分析、筛选优先级与结果解释。</p></article>
    <article><span class="pl-team-ava" style="--a:#17324d;--b:#0f8b8d">周</span><h3>周嘉</h3><b>人类实践</b><p>访谈、工作坊与反馈整合。</p></article>
    <article><span class="pl-team-ava" style="--a:#da4167;--b:#ffb000">陈</span><h3>陈澈</h3><b>设计与前端</b><p>信息架构、视觉系统与可访问性。</p></article>
    <article><span class="pl-team-ava" style="--a:#7d8f69;--b:#17324d">许</span><h3>许安</h3><b>安全</b><p>风险评估、废弃物流程与机构沟通。</p></article>
    <article><span class="pl-team-ava" style="--a:#6c5ce7;--b:#0f8b8d">林</span><h3>林一</h3><b>传播</b><p>图文记录、对外沟通与答辩材料。</p></article>
  </div>
</section>`,
  css: `.pl-team{min-height:100vh;display:grid;align-content:center;padding:46px 52px;background:#f7f4ee;color:#1c1a16;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-team-head{max-width:620px;margin-bottom:26px}
.pl-team-head span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#b23a2a}
.pl-team-head h2{margin-top:10px;font-family:Georgia,"Songti SC",serif;font-size:clamp(1.8rem,3.2vw,2.6rem);font-weight:400;letter-spacing:-.03em}
.pl-team-head p{margin-top:8px;font-size:11.5px;color:#7a7164}
.pl-team-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.pl-team-grid article{padding:18px;border:1px solid rgba(28,26,22,.14);border-radius:10px;background:rgba(255,255,255,.55);transition:transform .2s,background .2s}
.pl-team-grid article:hover{transform:translateY(-3px);background:#fff}
.pl-team-ava{display:grid;place-items:center;width:46px;height:46px;border-radius:50%;background:linear-gradient(135deg,var(--a),var(--b));font-family:Georgia,"Songti SC",serif;font-size:17px;color:#fff;transition:transform .25s}
.pl-team-grid article:hover .pl-team-ava{transform:scale(1.08)}
.pl-team-grid h3{margin-top:12px;font-size:14px;color:#1c1a16}
.pl-team-grid b{display:inline-flex;margin-top:4px;padding:2px 7px;border-radius:999px;background:rgba(28,26,22,.06);font-size:8.5px;font-weight:600;color:#6d6357}
.pl-team-grid p{margin-top:8px;font-size:10.5px;line-height:1.6;color:#7a7164}
@media (max-width:800px){.pl-team{padding:32px 22px}.pl-team-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
}
);
