/* 页面区块类插件 */
window.PLUGINS.push(
{
  id: "hero-glass",
  name: "玻璃首屏",
  cat: "sections",
  desc: "大标题、行动按钮与悬浮玻璃数据卡组成的开场区块。",
  tags: ["hero", "首屏", "玻璃拟态", "iGEM"],
  prompt: "做一个科研项目 Wiki 的首屏区块：左侧是胶囊形眉标、超大双行标题（关键词用青绿色强调）、一段说明文字，以及深色主按钮和玻璃质感次按钮；右侧是一张半透明玻璃卡片，显示 98.6% 的大数字、发光渐变圆斑和 7 根高低不一的柱状图。背景用青绿与琥珀色径向渐变并叠加细网格，整块高度约一屏。移动端改为单列，不要引入外部依赖。",
  html: `<div class="pl-hero">
  <div class="pl-hero-copy">
    <span class="pl-hero-eyebrow"><i></i>iGEM 2026 · 合成生物学</span>
    <h1>让合成生物学<br><em>被清楚看见</em></h1>
    <p class="pl-hero-lead">一个以证据为核心的 Wiki 首屏：问题、方案与结果在同一屏内被快速理解，深读由下方页面承接。</p>
    <div class="pl-hero-actions">
      <a class="pl-hero-btn" href="#"><span>浏览项目</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M11 5l5 5-5 5"/></svg></a>
      <a class="pl-hero-btn is-ghost" href="#">查看工程循环</a>
    </div>
  </div>
  <aside class="pl-hero-panel">
    <div class="pl-hero-halo"></div>
    <div class="pl-hero-panel-top"><span>活菌培养</span><i></i></div>
    <strong class="pl-hero-metric">98.6<small>%</small></strong>
    <p class="pl-hero-metric-label">荧光表达阳性率</p>
    <div class="pl-hero-bars" aria-hidden="true">
      <i style="--h:36%"></i><i style="--h:58%"></i><i style="--h:46%"></i><i style="--h:78%"></i><i style="--h:66%"></i><i style="--h:92%"></i><i style="--h:74%"></i>
    </div>
    <div class="pl-hero-panel-foot"><span>批次 07</span><span>→ 基线的 3.2 倍</span></div>
  </aside>
</div>`,
  css: `.pl-hero{position:relative;min-height:100vh;display:grid;grid-template-columns:1.15fr .85fr;align-items:center;gap:56px;padding:64px 56px;overflow:hidden;background:radial-gradient(900px 520px at 82% 8%,rgba(255,176,0,.24),transparent 62%),radial-gradient(760px 520px at 4% 92%,rgba(15,139,141,.22),transparent 62%),linear-gradient(140deg,#fbfdff 10%,#eef5f5 100%)}
.pl-hero::before{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(23,50,77,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(23,50,77,.055) 1px,transparent 1px);background-size:46px 46px;-webkit-mask-image:radial-gradient(circle at 58% 42%,#000 8%,transparent 72%);mask-image:radial-gradient(circle at 58% 42%,#000 8%,transparent 72%)}
.pl-hero-copy{position:relative;z-index:1}
.pl-hero-eyebrow{display:inline-flex;align-items:center;gap:9px;padding:8px 13px;border:1px solid rgba(23,50,77,.16);border-radius:999px;background:rgba(255,255,255,.66);font-size:12px;font-weight:700;letter-spacing:.04em;color:#17324d;backdrop-filter:blur(12px)}
.pl-hero-eyebrow i{width:7px;height:7px;border-radius:50%;background:#0f8b8d;box-shadow:0 0 0 4px rgba(15,139,141,.14)}
.pl-hero h1{margin:22px 0 0;font-size:clamp(3rem,6.4vw,5.9rem);line-height:.96;letter-spacing:-.045em;color:#101b26;font-weight:800}
.pl-hero h1 em{font-style:normal;color:#0f8b8d}
.pl-hero-lead{max-width:520px;margin:22px 0 0;font-size:16px;line-height:1.8;color:#5d6b78}
.pl-hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}
.pl-hero-btn{display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 22px;border-radius:12px;background:#101b26;color:#fff;font-size:14px;font-weight:700;transition:transform .2s,box-shadow .2s,background .2s}
.pl-hero-btn svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;transition:transform .2s}
.pl-hero-btn:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(16,27,38,.22)}
.pl-hero-btn:hover svg{transform:translateX(3px)}
.pl-hero-btn.is-ghost{background:rgba(255,255,255,.62);color:#101b26;border:1px solid rgba(23,50,77,.18);box-shadow:none;backdrop-filter:blur(12px)}
.pl-hero-btn.is-ghost:hover{background:#fff;box-shadow:0 16px 32px rgba(23,50,77,.12)}
.pl-hero-panel{position:relative;z-index:1;overflow:hidden;padding:30px;border:1px solid rgba(255,255,255,.7);border-radius:26px;background:linear-gradient(160deg,rgba(255,255,255,.8),rgba(255,255,255,.42));box-shadow:0 40px 90px rgba(23,50,77,.18),inset 0 1px 0 #fff;backdrop-filter:blur(22px) saturate(1.3);animation:pl-hero-float 7s ease-in-out infinite}
.pl-hero-halo{position:absolute;top:-90px;right:-70px;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(255,176,0,.5),rgba(255,176,0,0) 68%);filter:blur(6px)}
.pl-hero-panel-top{position:relative;display:flex;align-items:center;justify-content:space-between;font-size:11px;font-weight:800;letter-spacing:.14em;color:#607080}
.pl-hero-panel-top i{width:8px;height:8px;border-radius:50%;background:#0f8b8d;box-shadow:0 0 0 5px rgba(15,139,141,.14);animation:pl-hero-pulse 2.4s ease-in-out infinite}
.pl-hero-metric{position:relative;display:block;margin-top:26px;font-size:70px;line-height:1;letter-spacing:-.05em;color:#101b26;font-weight:800}
.pl-hero-metric small{font-size:28px;letter-spacing:0;color:#0f8b8d}
.pl-hero-metric-label{margin-top:6px;font-size:13px;color:#607080}
.pl-hero-bars{display:flex;align-items:flex-end;gap:6px;height:92px;margin-top:26px}
.pl-hero-bars i{flex:1;height:var(--h);border-radius:5px 5px 2px 2px;background:linear-gradient(180deg,#0f8b8d,#17324d);transform-origin:bottom;animation:pl-hero-bar .9s cubic-bezier(.2,.8,.2,1) both}
.pl-hero-bars i:nth-child(2){animation-delay:.05s;background:linear-gradient(180deg,#35a7a9,#0f8b8d)}
.pl-hero-bars i:nth-child(3){animation-delay:.1s;background:linear-gradient(180deg,#ffb000,#e08c00)}
.pl-hero-bars i:nth-child(4){animation-delay:.15s;background:linear-gradient(180deg,#ffc94d,#ffb000)}
.pl-hero-bars i:nth-child(5){animation-delay:.2s;background:linear-gradient(180deg,#da4167,#b52e50)}
.pl-hero-bars i:nth-child(6){animation-delay:.25s;background:linear-gradient(180deg,#0f8b8d,#17324d)}
.pl-hero-bars i:nth-child(7){animation-delay:.3s;background:linear-gradient(180deg,#35a7a9,#0f8b8d)}
.pl-hero-panel-foot{display:flex;justify-content:space-between;margin-top:14px;padding-top:14px;border-top:1px solid rgba(23,50,77,.12);font-size:11px;color:#607080}
@keyframes pl-hero-float{50%{transform:translateY(-10px)}}
@keyframes pl-hero-pulse{50%{box-shadow:0 0 0 9px rgba(15,139,141,.04)}}
@keyframes pl-hero-bar{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@media (max-width:820px){.pl-hero{grid-template-columns:1fr;gap:36px;padding:48px 28px}.pl-hero h1{font-size:clamp(2.6rem,11vw,4rem)}.pl-hero-panel{max-width:460px}}`,
  js: ``
},
{
  id: "features-grid",
  name: "功能网格",
  cat: "sections",
  desc: "三列图标卡片，适合能力、模块或服务介绍。",
  tags: ["features", "功能", "图标", "网格"],
  prompt: "做一个三列功能网格区块：顶部是小号眉标、居中标题和一句说明；下方是 6 张白色卡片，每张包含线性图标、编号、标题和两行描述。卡片使用细描边、圆角和柔和阴影，悬停时上浮 4px 并把边框变成青绿色。整体放在浅灰蓝渐变背景上，移动端变成单列。",
  html: `<section class="pl-feat">
  <header class="pl-feat-head">
    <span class="pl-feat-kicker">组件系统</span>
    <h2>一个模块，覆盖完整叙事</h2>
    <p>把复杂项目拆成可扫读的六个面，每一面都指向可验证的证据。</p>
  </header>
  <div class="pl-feat-grid">
    <article class="pl-feat-card"><b>01</b><span class="pl-feat-icon"><svg viewBox="0 0 24 24"><path d="M4 16 15 5l4 4L8 20H4z"/><path d="M12 8l4 4"/></svg></span><h3>设计</h3><p>把问题拆成可验证的假设，并画出清晰的实验路径。</p></article>
    <article class="pl-feat-card"><b>02</b><span class="pl-feat-icon"><svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 10h16M10 4v16"/></svg></span><h3>构建</h3><p>用标准化的部件和模块，让每次组装都可复现。</p></article>
    <article class="pl-feat-card"><b>03</b><span class="pl-feat-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></svg></span><h3>测试</h3><p>记录对照、重复与读数，把结果和结论分开陈述。</p></article>
    <article class="pl-feat-card"><b>04</b><span class="pl-feat-icon"><svg viewBox="0 0 24 24"><path d="M3 7l9-4 9 4-9 4z"/><path d="M7 10v6l5 3 5-3v-6"/></svg></span><h3>学习</h3><p>把失败转化成下一轮设计约束，而不是隐藏起来。</p></article>
    <article class="pl-feat-card"><b>05</b><span class="pl-feat-icon"><svg viewBox="0 0 24 24"><path d="M4 20V10M10 20V4M16 20v-7M22 20V7"/></svg></span><h3>度量</h3><p>用清晰的指标而不是形容词，说明改进发生了什么。</p></article>
    <article class="pl-feat-card"><b>06</b><span class="pl-feat-icon"><svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2.4"/><circle cx="18" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8 11l8-4M8 13l8 4"/></svg></span><h3>共享</h3><p>让其他团队能复用你的部件、协议和判断依据。</p></article>
  </div>
</section>`,
  css: `.pl-feat{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:radial-gradient(700px 420px at 12% 0%,rgba(15,139,141,.12),transparent 60%),linear-gradient(180deg,#f8fafc,#eef3f3)}
.pl-feat-head{max-width:640px;margin-bottom:30px}
.pl-feat-kicker{display:inline-flex;padding:6px 10px;border:1px solid rgba(23,50,77,.14);border-radius:999px;background:rgba(255,255,255,.7);font-size:10px;font-weight:800;letter-spacing:.16em;color:#0f8b8d}
.pl-feat-head h2{margin-top:14px;font-size:clamp(1.9rem,3.4vw,2.9rem);line-height:1.1;letter-spacing:-.03em;color:#101b26}
.pl-feat-head p{margin-top:12px;max-width:520px;font-size:14px;line-height:1.75;color:#607080}
.pl-feat-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.pl-feat-card{position:relative;padding:20px;border:1px solid rgba(23,50,77,.12);border-radius:14px;background:rgba(255,255,255,.82);box-shadow:0 8px 24px rgba(23,50,77,.05);transition:transform .25s,border-color .25s,box-shadow .25s}
.pl-feat-card:hover{transform:translateY(-4px);border-color:rgba(15,139,141,.5);box-shadow:0 18px 36px rgba(23,50,77,.1)}
.pl-feat-card b{position:absolute;top:16px;right:18px;font-size:11px;font-weight:700;letter-spacing:.08em;color:rgba(23,50,77,.32)}
.pl-feat-icon{display:grid;place-items:center;width:38px;height:38px;margin-bottom:14px;border-radius:10px;background:rgba(15,139,141,.1);color:#0f8b8d}
.pl-feat-icon svg{width:21px;height:21px;fill:none;stroke:currentColor;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round}
.pl-feat-card h3{font-size:16px;color:#101b26;letter-spacing:-.01em}
.pl-feat-card p{margin-top:6px;font-size:12.5px;line-height:1.65;color:#6a7885}
@media (max-width:820px){.pl-feat{padding:36px 24px}.pl-feat-grid{grid-template-columns:1fr 1fr}}
@media (max-width:560px){.pl-feat-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "bento-highlights",
  name: "Bento 亮点",
  cat: "sections",
  desc: "非对称 Bento 网格，把核心结果、趋势与引语放在一张图里。",
  tags: ["bento", "亮点", "数据", "网格"],
  prompt: "做一个 Bento 布局的亮点区块：4 列网格，左侧一张 2×2 的深青色主卡，展示 3.2× 的大号结果、一段解释和右下角的环形进度图；右上角一张小卡放迷你柱状趋势；再往右一张数字卡展示 48h；底部一张横跨两列的深色引语卡。卡片之间 12px 间距，圆角 18px，悬停时出现柔和的径向高光。移动端变成单列。",
  html: `<div class="pl-bento">
  <article class="pl-bento-cell is-main">
    <span class="pl-bento-tag">核心结果</span>
    <h2>3.2×<br><em>表达提升</em></h2>
    <p>在低氧条件下，优化后的启动子组合让荧光强度达到基线的 3.2 倍。</p>
    <div class="pl-bento-ring"><span>3.2×</span></div>
  </article>
  <article class="pl-bento-cell is-spark">
    <span class="pl-bento-tag">稳定性趋势</span>
    <div class="pl-bento-spark"><i style="--h:38%"></i><i style="--h:52%"></i><i style="--h:46%"></i><i style="--h:68%"></i><i style="--h:62%"></i><i style="--h:84%"></i><i style="--h:78%"></i><i style="--h:96%"></i></div>
    <h3>连续 8 批稳定</h3>
    <p>批次间变异系数低于 6%。</p>
  </article>
  <article class="pl-bento-cell is-num">
    <strong>48<span>h</span></strong>
    <p>从取样到读数</p>
  </article>
  <article class="pl-bento-cell is-quote">
    <span class="pl-bento-quote">“</span>
    <blockquote>他们把复杂的工程循环讲成了一条可以复核的证据链。</blockquote>
    <footer>— 合作实验室评审</footer>
  </article>
</div>`,
  css: `.pl-bento{min-height:100vh;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:1.05fr .95fr;grid-template-areas:"main main spark num" "main main quote quote";gap:12px;padding:28px;background:radial-gradient(700px 460px at 90% 10%,rgba(255,176,0,.14),transparent 60%),linear-gradient(150deg,#f5f8f9,#e9f0f0)}
.pl-bento-cell{position:relative;overflow:hidden;padding:22px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:rgba(255,255,255,.84);box-shadow:0 10px 30px rgba(23,50,77,.05);transition:transform .25s,box-shadow .25s}
.pl-bento-cell::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.5),transparent 14rem);opacity:0;transition:opacity .25s;pointer-events:none}
.pl-bento-cell:hover{transform:translateY(-3px);box-shadow:0 22px 44px rgba(23,50,77,.1)}
.pl-bento-cell:hover::after{opacity:1}
.pl-bento-tag{display:inline-flex;padding:5px 9px;border:1px solid rgba(23,50,77,.14);border-radius:999px;font-size:9.5px;font-weight:800;letter-spacing:.12em;color:#607080;background:rgba(255,255,255,.7)}
.pl-bento-cell.is-main{grid-area:main;display:flex;flex-direction:column;justify-content:space-between;border:0;background:radial-gradient(500px 300px at 90% 0%,rgba(255,176,0,.24),transparent 60%),linear-gradient(150deg,#17324d,#0e2438);color:#eaf4f7}
.pl-bento-cell.is-main .pl-bento-tag{border-color:rgba(255,255,255,.2);color:#bfd6dd;background:rgba(255,255,255,.08)}
.pl-bento-cell.is-main h2{font-size:clamp(2.6rem,5vw,4.4rem);line-height:.95;letter-spacing:-.05em;color:#fff}
.pl-bento-cell.is-main h2 em{font-style:normal;color:#7fe0dd;font-size:.38em;letter-spacing:.04em;font-weight:700}
.pl-bento-cell.is-main p{max-width:330px;font-size:13px;line-height:1.7;color:#a9c3cc}
.pl-bento-ring{position:absolute;right:26px;bottom:26px;display:grid;place-items:center;width:148px;aspect-ratio:1;border-radius:50%;background:conic-gradient(from 200deg,#ffb000 0 62%,rgba(255,255,255,.14) 62% 100%)}
.pl-bento-ring::before{content:"";position:absolute;inset:11px;border-radius:50%;background:#122b40}
.pl-bento-ring span{position:relative;font-size:22px;font-weight:800;letter-spacing:-.03em;color:#fff}
.pl-bento-cell.is-spark{grid-area:spark;display:flex;flex-direction:column}
.pl-bento-spark{display:flex;align-items:flex-end;gap:5px;height:82px;margin:16px 0 10px}
.pl-bento-spark i{flex:1;height:var(--h);border-radius:3px 3px 1px 1px;background:linear-gradient(180deg,#0f8b8d,#17324d);animation:pl-bento-grow .8s cubic-bezier(.2,.8,.2,1) both}
.pl-bento-spark i:nth-child(3n){background:linear-gradient(180deg,#ffb000,#e08c00)}
.pl-bento-cell.is-spark h3{font-size:15px;color:#101b26}
.pl-bento-cell.is-spark p{margin-top:4px;font-size:11.5px;color:#6a7885}
.pl-bento-cell.is-num{grid-area:num;display:flex;flex-direction:column;justify-content:center;background:linear-gradient(160deg,#fff,#f2f7f6)}
.pl-bento-cell.is-num strong{font-size:clamp(2.2rem,3.6vw,3.2rem);line-height:1;letter-spacing:-.04em;color:#0f8b8d}
.pl-bento-cell.is-num strong span{font-size:.4em;color:#607080}
.pl-bento-cell.is-num p{margin-top:8px;font-size:11.5px;color:#6a7885}
.pl-bento-cell.is-quote{grid-area:quote;display:flex;align-items:center;gap:14px;background:linear-gradient(120deg,#e9f4f3,#fff)}
.pl-bento-quote{font-size:54px;line-height:1;color:#0f8b8d;opacity:.35}
.pl-bento-cell.is-quote blockquote{font-size:13px;line-height:1.65;color:#17324d;font-weight:600}
.pl-bento-cell.is-quote footer{margin-top:5px;font-size:10.5px;color:#6a7885}
@keyframes pl-bento-grow{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1);transform-origin:bottom}}
@media (max-width:820px){.pl-bento{grid-template-columns:1fr;grid-template-rows:auto;grid-template-areas:"main" "spark" "num" "quote";padding:18px}.pl-bento-cell.is-main{min-height:300px}}`,
  js: `document.querySelectorAll(".pl-bento-cell").forEach(function (cell) {
  cell.addEventListener("pointermove", function (event) {
    var box = cell.getBoundingClientRect();
    cell.style.setProperty("--mx", (event.clientX - box.left) + "px");
    cell.style.setProperty("--my", (event.clientY - box.top) + "px");
  });
});`
},
{
  id: "stats-band",
  name: "数据统计条",
  cat: "sections",
  desc: "四个关键指标，进入视口时数字滚动增长。",
  tags: ["stats", "数据", "计数", "指标"],
  prompt: "做一个数据统计条区块：顶部一行小标签和标题，下面四列指标，每列包含超大数字、单位、说明和一个同比变化小标签。数字在进入视口时从 0 滚动到目标值，支持小数和千分位。四列之间用竖分隔线，整体放在浅色渐变的圆角面板中，移动端变成两列。",
  html: `<section class="pl-stats">
  <header class="pl-stats-head">
    <span>数据一览</span>
    <h2>用数据建立第一层信任</h2>
  </header>
  <div class="pl-stats-row">
    <div class="pl-stat"><strong data-count="98.6" data-decimals="1" data-suffix="%">0%</strong><span class="pl-stat-label">表达阳性率</span><span class="pl-stat-delta">↑ 12.4%</span></div>
    <div class="pl-stat"><strong data-count="3.2" data-decimals="1" data-suffix="×">0×</strong><span class="pl-stat-label">相对基线提升</span><span class="pl-stat-delta">↑ 3.2×</span></div>
    <div class="pl-stat"><strong data-count="1248" data-suffix="">0</strong><span class="pl-stat-label">累计样本读数</span><span class="pl-stat-delta">↑ 216</span></div>
    <div class="pl-stat"><strong data-count="16" data-suffix="">0</strong><span class="pl-stat-label">跨学科成员</span><span class="pl-stat-delta">4 个国家</span></div>
  </div>
</section>`,
  css: `.pl-stats{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:radial-gradient(600px 400px at 85% 10%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#f7fafb,#edf3f2)}
.pl-stats-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:26px}
.pl-stats-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-stats-head h2{font-size:clamp(1.8rem,3.2vw,2.6rem);letter-spacing:-.03em;color:#101b26}
.pl-stats-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));border:1px solid rgba(23,50,77,.12);border-radius:20px;background:rgba(255,255,255,.78);box-shadow:0 24px 60px rgba(23,50,77,.07);backdrop-filter:blur(16px);overflow:hidden}
.pl-stat{position:relative;display:flex;flex-direction:column;padding:30px 26px;border-left:1px solid rgba(23,50,77,.1)}
.pl-stat:first-child{border-left:0}
.pl-stat strong{font-size:clamp(2.2rem,4vw,3.4rem);line-height:1;letter-spacing:-.05em;color:#17324d;font-variant-numeric:tabular-nums}
.pl-stat-label{margin-top:10px;font-size:12.5px;color:#607080}
.pl-stat-delta{width:fit-content;margin-top:14px;padding:4px 8px;border-radius:999px;background:rgba(15,139,141,.1);font-size:10.5px;font-weight:700;color:#0f8b8d}
@media (max-width:820px){.pl-stats{padding:36px 24px}.pl-stats-head{display:block}.pl-stats-row{grid-template-columns:1fr 1fr}.pl-stat:nth-child(3){border-left:0}.pl-stat:nth-child(n+3){border-top:1px solid rgba(23,50,77,.1)}}`,
  js: `(function () {
  var nodes = document.querySelectorAll(".pl-stat strong");
  function run(el) {
    var end = parseFloat(el.getAttribute("data-count"));
    var decimals = parseInt(el.getAttribute("data-decimals") || "0", 10);
    var suffix = el.getAttribute("data-suffix") || "";
    var start = performance.now();
    var duration = 1200;
    function tick(now) {
      var t = Math.min(1, (now - start) / duration);
      var eased = 1 - Math.pow(1 - t, 3);
      var value = end * eased;
      el.textContent = (decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString()) + suffix;
      if (t < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      run(entry.target);
      io.unobserve(entry.target);
    });
  }, { threshold: 0.5 });
  nodes.forEach(function (node) { io.observe(node); });
})();`
},
{
  id: "testimonials",
  name: "用户评价",
  cat: "sections",
  desc: "三张引言卡片，适合评审反馈、合作方或用户声音。",
  tags: ["testimonials", "评价", "引语", "社交证明"],
  prompt: "做一个三列用户评价区块：顶部是眉标、标题和说明；每张白色卡片包含五颗琥珀色星星、一段两到三行的引言、渐变色圆形头像（用姓名首字母）、姓名和身份。卡片高度一致，悬停时上浮；整体背景是浅色纸张质感，移动端单列。",
  html: `<section class="pl-quotes">
  <header class="pl-quotes-head">
    <span>他们怎么说</span>
    <h2>被认真读过，才有说服力</h2>
    <p>来自评审、合作实验室与使用者的真实反馈。</p>
  </header>
  <div class="pl-quotes-grid">
    <article class="pl-quote-card">
      <div class="pl-quote-stars">★★★★★</div>
      <blockquote>他们的 Wiki 没有把结论藏在图里，每一步都能找到对应的证据和对照。</blockquote>
      <footer><span class="pl-quote-avatar a">ML</span><div><strong>马林</strong><small>iGEM 评审 · 2025</small></div></footer>
    </article>
    <article class="pl-quote-card">
      <div class="pl-quote-stars">★★★★★</div>
      <blockquote>从 HP 访谈回到实验设计的闭环讲得很清楚，这是我们最愿意合作的一类团队。</blockquote>
      <footer><span class="pl-quote-avatar b">ZJ</span><div><strong>周嘉</strong><small>合作实验室 · 课题组长</small></div></footer>
    </article>
    <article class="pl-quote-card">
      <div class="pl-quote-stars">★★★★★</div>
      <blockquote>页面读起来很安静，但信息密度很高。术语解释让我们这些外行也能跟上。</blockquote>
      <footer><span class="pl-quote-avatar c">KW</span><div><strong>柯文</strong><small>社区工作坊参与者</small></div></footer>
    </article>
  </div>
</section>`,
  css: `.pl-quotes{min-height:100vh;display:grid;align-content:center;padding:48px 52px;background:radial-gradient(760px 420px at 8% 100%,rgba(255,176,0,.14),transparent 60%),linear-gradient(180deg,#fbfaf7,#f1f4f3)}
.pl-quotes-head{max-width:620px;margin-bottom:28px}
.pl-quotes-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-quotes-head h2{margin-top:12px;font-size:clamp(1.8rem,3.2vw,2.6rem);letter-spacing:-.03em;color:#101b26}
.pl-quotes-head p{margin-top:10px;font-size:14px;color:#607080}
.pl-quotes-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.pl-quote-card{display:flex;flex-direction:column;padding:24px;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:rgba(255,255,255,.88);box-shadow:0 10px 30px rgba(23,50,77,.05);transition:transform .25s,box-shadow .25s}
.pl-quote-card:hover{transform:translateY(-4px);box-shadow:0 20px 40px rgba(23,50,77,.1)}
.pl-quote-stars{font-size:12px;letter-spacing:3px;color:#ffb000}
.pl-quote-card blockquote{flex:1;margin:16px 0 22px;font-size:13.5px;line-height:1.75;color:#33434f}
.pl-quote-card footer{display:flex;align-items:center;gap:10px;padding-top:16px;border-top:1px solid rgba(23,50,77,.09)}
.pl-quote-avatar{display:grid;place-items:center;width:38px;height:38px;border-radius:50%;font-size:12px;font-weight:800;color:#fff}
.pl-quote-avatar.a{background:linear-gradient(135deg,#0f8b8d,#17324d)}
.pl-quote-avatar.b{background:linear-gradient(135deg,#ffb000,#da4167)}
.pl-quote-avatar.c{background:linear-gradient(135deg,#17324d,#0f8b8d)}
.pl-quote-card footer strong{display:block;font-size:12.5px;color:#101b26}
.pl-quote-card footer small{display:block;margin-top:2px;font-size:10.5px;color:#7a8792}
@media (max-width:820px){.pl-quotes{padding:36px 24px}.pl-quotes-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "pricing",
  name: "价格表",
  cat: "sections",
  desc: "三档方案与月付/年付切换，中间方案高亮。",
  tags: ["pricing", "价格", "订阅", "方案"],
  prompt: "做一个三档价格表区块：标题居中，右侧一个胶囊形月付/年付切换开关；三张方案卡并排，中间主推方案用深色背景和琥珀色标签，每张包含方案名、价格、周期、四到五条功能、行动按钮。切换年付时价格数字变化并出现节省提示。卡片细描边、大圆角，移动端单列。",
  html: `<section class="pl-price">
  <header class="pl-price-head">
    <div><span>价格方案</span><h2>按团队规模选择</h2></div>
    <div class="pl-price-switch"><span class="mo">月付</span><span class="yr">年付 -20%</span><button type="button" aria-label="切换计费周期" aria-pressed="false"><i></i></button></div>
  </header>
  <div class="pl-price-grid">
    <article class="pl-price-card">
      <span class="pl-price-name">入门版</span>
      <div class="pl-price-amount"><span class="mo">¥0</span><span class="yr">¥0</span><small>/ 月</small></div>
      <p class="pl-price-note">适合单页项目与个人练习。</p>
      <ul><li>1 个项目空间</li><li>基础插件库</li><li>静态导出</li><li>社区支持</li></ul>
      <a class="pl-price-btn" href="#">免费开始</a>
    </article>
    <article class="pl-price-card is-featured">
      <span class="pl-price-flag">推荐</span>
      <span class="pl-price-name">实验室版</span>
      <div class="pl-price-amount"><span class="mo">¥39</span><span class="yr">¥31</span><small>/ 月</small></div>
      <p class="pl-price-note">适合参赛团队与实验室。</p>
      <ul><li>5 个项目空间</li><li>全部区块</li><li>评审模式预检</li><li>自定义主题变量</li></ul>
      <a class="pl-price-btn" href="#">选择实验室版</a>
    </article>
    <article class="pl-price-card">
      <span class="pl-price-name">团队版</span>
      <div class="pl-price-amount"><span class="mo">¥99</span><span class="yr">¥79</span><small>/ 月</small></div>
      <p class="pl-price-note">适合跨学科协作与长期维护。</p>
      <ul><li>无限项目空间</li><li>品牌与字体管理</li><li>多人协作权限</li><li>优先技术支持</li></ul>
      <a class="pl-price-btn" href="#">联系团队</a>
    </article>
  </div>
</section>`,
  css: `.pl-price{min-height:100vh;display:grid;align-content:center;padding:44px 52px;background:radial-gradient(800px 460px at 50% 0%,rgba(15,139,141,.1),transparent 60%),linear-gradient(180deg,#f8fbfb,#eef3f3)}
.pl-price-head{display:flex;align-items:end;justify-content:space-between;gap:24px;margin-bottom:26px}
.pl-price-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-price-head h2{margin-top:10px;font-size:clamp(1.8rem,3.2vw,2.6rem);letter-spacing:-.03em;color:#101b26}
.pl-price-switch{display:inline-flex;align-items:center;gap:10px;padding:5px;border:1px solid rgba(23,50,77,.14);border-radius:999px;background:rgba(255,255,255,.8);font-size:11px;font-weight:700;color:#7a8792}
.pl-price-switch span{padding:4px 6px;border-radius:999px;transition:color .2s,background .2s}
.pl-price-switch .mo{color:#fff;background:#17324d}
.pl-price-switch button{position:relative;width:38px;height:22px;padding:0;border:0;border-radius:999px;background:#d9e2e2;cursor:pointer;transition:background .2s}
.pl-price-switch button i{position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(0,0,0,.2);transition:transform .2s}
.pl-price.is-yearly .pl-price-switch .mo{color:#7a8792;background:transparent}
.pl-price.is-yearly .pl-price-switch .yr{color:#fff;background:#17324d}
.pl-price.is-yearly .pl-price-switch button{background:#0f8b8d}
.pl-price.is-yearly .pl-price-switch button i{transform:translateX(16px)}
.pl-price-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;align-items:stretch}
.pl-price-card{position:relative;display:flex;flex-direction:column;padding:26px 24px;border:1px solid rgba(23,50,77,.13);border-radius:18px;background:rgba(255,255,255,.88);box-shadow:0 10px 30px rgba(23,50,77,.05)}
.pl-price-card.is-featured{border-color:transparent;background:linear-gradient(160deg,#17324d,#0e2438);color:#eaf4f7;box-shadow:0 26px 50px rgba(23,50,77,.24);transform:translateY(-6px)}
.pl-price-flag{position:absolute;top:16px;right:16px;padding:4px 9px;border-radius:999px;background:#ffb000;color:#3a2800;font-size:9.5px;font-weight:800;letter-spacing:.08em}
.pl-price-name{font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#607080}
.pl-price-card.is-featured .pl-price-name{color:#8fd7d5}
.pl-price-amount{display:flex;align-items:baseline;gap:4px;margin-top:18px;font-weight:800;color:#101b26}
.pl-price-card.is-featured .pl-price-amount{color:#fff}
.pl-price-amount span{font-size:42px;line-height:1;letter-spacing:-.05em}
.pl-price-amount small{font-size:11px;font-weight:600;color:#7a8792}
.pl-price-card.is-featured .pl-price-amount small{color:#93b2bc}
.pl-price .yr{display:none}
.pl-price.is-yearly .mo{display:none}
.pl-price.is-yearly .yr{display:inline}
.pl-price-amount .mo,.pl-price-amount .yr{font-size:42px}
.pl-price-note{margin-top:8px;font-size:11.5px;line-height:1.6;color:#7a8792}
.pl-price-card.is-featured .pl-price-note{color:#9db9c2}
.pl-price-card ul{flex:1;display:grid;gap:9px;margin:20px 0 22px;padding:18px 0 0;border-top:1px solid rgba(23,50,77,.1);list-style:none}
.pl-price-card.is-featured ul{border-color:rgba(255,255,255,.14)}
.pl-price-card li{position:relative;padding-left:18px;font-size:12px;color:#4d5d6a}
.pl-price-card li::before{content:"";position:absolute;left:0;top:6px;width:6px;height:6px;border-radius:50%;background:#0f8b8d}
.pl-price-card.is-featured li{color:#c4d8de}
.pl-price-card.is-featured li::before{background:#ffb000}
.pl-price-btn{display:grid;place-items:center;min-height:42px;border-radius:10px;border:1px solid rgba(23,50,77,.18);background:rgba(255,255,255,.6);font-size:12.5px;font-weight:800;color:#17324d;transition:background .2s,transform .2s}
.pl-price-btn:hover{transform:translateY(-2px);background:#fff}
.pl-price-card.is-featured .pl-price-btn{border-color:transparent;background:#ffb000;color:#231800}
.pl-price-card.is-featured .pl-price-btn:hover{background:#ffc23d}
@media (max-width:820px){.pl-price{padding:34px 22px}.pl-price-head{display:block}.pl-price-switch{margin-top:16px}.pl-price-grid{grid-template-columns:1fr}.pl-price-card.is-featured{transform:none}}`,
  js: `(function () {
  var box = document.querySelector(".pl-price");
  var toggle = box.querySelector(".pl-price-switch button");
  toggle.addEventListener("click", function () {
    var on = box.classList.toggle("is-yearly");
    toggle.setAttribute("aria-pressed", on ? "true" : "false");
  });
})();`
},
{
  id: "faq-accordion",
  name: "FAQ 手风琴",
  cat: "sections",
  desc: "单开式问答列表，带平滑高度与加号旋转。",
  tags: ["faq", "问答", "手风琴", "折叠"],
  prompt: "做一个 FAQ 手风琴区块：左侧是眉标、标题和一句说明，右侧是 5 条问答，每条由标题按钮和答案组成，默认展开第一条。点击时只展开一条，高度用 grid-template-rows 从 0fr 到 1fr 平滑过渡，加号图标旋转 45 度。整体用细线分隔，不使用卡片阴影，移动端单列。",
  html: `<section class="pl-faq">
  <div class="pl-faq-intro">
    <span>常见问题</span>
    <h2>在提问之前，<br>先看这里。</h2>
    <p>关于数据、复用与安全的常见问题。还有疑问可以直接邮件联系团队。</p>
  </div>
  <div class="pl-faq-list">
    <div class="pl-faq-item is-open">
      <button type="button" aria-expanded="true"><span>这些实验数据可以复现吗？</span><i></i></button>
      <div class="pl-faq-answer"><div><p>可以。每个关键结论都标注了原始读数、实验批次和对照设置，协议页提供完整的步骤与参数。</p></div></div>
    </div>
    <div class="pl-faq-item">
      <button type="button" aria-expanded="false"><span>插件可以直接用在其他 Wiki 吗？</span><i></i></button>
      <div class="pl-faq-answer"><div><p>可以。每个区块都是独立的 HTML/CSS/JS 片段，复制源码后替换文案与图片即可使用。</p></div></div>
    </div>
    <div class="pl-faq-item">
      <button type="button" aria-expanded="false"><span>是否支持深色模式？</span><i></i></button>
      <div class="pl-faq-answer"><div><p>大部分区块使用变量控制颜色，替换 :root 中的设计令牌即可适配深色主题。</p></div></div>
    </div>
    <div class="pl-faq-item">
      <button type="button" aria-expanded="false"><span>图片和字体有版权要求吗？</span><i></i></button>
      <div class="pl-faq-answer"><div><p>示例图片仅用于演示，正式发布前请替换为你拥有授权的素材，并在归属说明页面标注来源。</p></div></div>
    </div>
    <div class="pl-faq-item">
      <button type="button" aria-expanded="false"><span>如何联系团队？</span><i></i></button>
      <div class="pl-faq-answer"><div><p>可以通过页脚邮箱或合作页面留言，我们通常会在两个工作日内回复。</p></div></div>
    </div>
  </div>
</section>`,
  css: `.pl-faq{min-height:100vh;display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;align-content:center;padding:48px 52px;background:linear-gradient(180deg,#fbfcfc,#f0f4f3)}
.pl-faq-intro span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-faq-intro h2{margin-top:14px;font-size:clamp(1.9rem,3.4vw,2.8rem);line-height:1.08;letter-spacing:-.03em;color:#101b26}
.pl-faq-intro p{margin-top:14px;font-size:13px;line-height:1.75;color:#6a7885}
.pl-faq-list{border-top:1px solid rgba(23,50,77,.14)}
.pl-faq-item{border-bottom:1px solid rgba(23,50,77,.14)}
.pl-faq-item button{display:flex;align-items:center;justify-content:space-between;gap:18px;width:100%;padding:16px 0;border:0;background:transparent;text-align:left;font-size:13.5px;font-weight:700;color:#17324d;cursor:pointer}
.pl-faq-item button i{position:relative;flex:none;width:18px;height:18px;border-radius:50%;border:1px solid rgba(23,50,77,.2);transition:transform .3s,background .3s,border-color .3s}
.pl-faq-item button i::before,.pl-faq-item button i::after{content:"";position:absolute;top:50%;left:50%;width:8px;height:1px;background:#17324d;transform:translate(-50%,-50%);transition:background .3s}
.pl-faq-item button i::after{transform:translate(-50%,-50%) rotate(90deg)}
.pl-faq-item.is-open button i{transform:rotate(45deg);background:#0f8b8d;border-color:#0f8b8d}
.pl-faq-item.is-open button i::before,.pl-faq-item.is-open button i::after{background:#fff}
.pl-faq-answer{display:grid;grid-template-rows:0fr;transition:grid-template-rows .32s ease}
.pl-faq-answer>div{overflow:hidden}
.pl-faq-answer p{padding-bottom:16px;max-width:520px;font-size:12.5px;line-height:1.75;color:#6a7885}
.pl-faq-item.is-open .pl-faq-answer{grid-template-rows:1fr}
@media (max-width:820px){.pl-faq{grid-template-columns:1fr;gap:26px;padding:36px 24px}}`,
  js: `document.querySelectorAll(".pl-faq-item").forEach(function (item) {
  var button = item.querySelector("button");
  button.addEventListener("click", function () {
    var open = item.classList.contains("is-open");
    document.querySelectorAll(".pl-faq-item").forEach(function (other) {
      other.classList.remove("is-open");
      other.querySelector("button").setAttribute("aria-expanded", "false");
    });
    if (!open) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});`
},
{
  id: "cta-banner",
  name: "行动召唤",
  cat: "sections",
  desc: "深色渐变 CTA 面板，适合页面收尾。",
  tags: ["cta", "行动召唤", "转化", "收尾"],
  prompt: "做一个深色行动召唤区块：整屏深海军蓝背景，左上和右下各有一个模糊的青绿与琥珀色光斑，中间是一行小标签、两行超大标题、一段说明和两个按钮（实心琥珀色与描边玻璃）。底部一行三个小标签写静态优先、响应式、可访问性。标题居中，移动端字号缩小。",
  html: `<div class="pl-cta">
  <div class="pl-cta-orb a"></div>
  <div class="pl-cta-orb b"></div>
  <span class="pl-cta-tag">随时开始</span>
  <h2>把你的项目<br>讲成一个清楚的故事</h2>
  <p>从首屏到结果页，用一套可复用的区块，把复杂研究变成可读、可查、可复现的叙事。</p>
  <div class="pl-cta-actions">
    <a class="pl-cta-btn" href="#">开始搭建 <span>→</span></a>
    <a class="pl-cta-btn is-ghost" href="#">浏览全部插件</a>
  </div>
  <div class="pl-cta-foot"><span>静态优先</span><span>响应式</span><span>可访问性</span></div>
</div>`,
  css: `.pl-cta{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;padding:64px 40px;text-align:center;background:radial-gradient(700px 460px at 12% 8%,rgba(15,139,141,.34),transparent 62%),radial-gradient(600px 420px at 88% 92%,rgba(255,176,0,.24),transparent 62%),linear-gradient(150deg,#132b40,#081520)}
.pl-cta::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:54px 54px;-webkit-mask-image:radial-gradient(circle at 50% 50%,#000 10%,transparent 74%);mask-image:radial-gradient(circle at 50% 50%,#000 10%,transparent 74%)}
.pl-cta-orb{position:absolute;border-radius:50%;filter:blur(70px);opacity:.55}
.pl-cta-orb.a{top:-80px;left:-60px;width:300px;height:300px;background:#0f8b8d;animation:pl-cta-drift 12s ease-in-out infinite}
.pl-cta-orb.b{right:-80px;bottom:-100px;width:340px;height:340px;background:#da4167;animation:pl-cta-drift 14s ease-in-out infinite reverse}
.pl-cta-tag{position:relative;padding:7px 12px;border:1px solid rgba(255,255,255,.18);border-radius:999px;background:rgba(255,255,255,.06);font-size:10px;font-weight:800;letter-spacing:.18em;color:#9fd6d5}
.pl-cta h2{position:relative;margin-top:24px;font-size:clamp(2.6rem,5.4vw,4.4rem);line-height:1;letter-spacing:-.045em;color:#fff}
.pl-cta p{position:relative;max-width:560px;margin-top:20px;font-size:14px;line-height:1.75;color:#a9c3cc}
.pl-cta-actions{position:relative;display:flex;flex-wrap:wrap;justify-content:center;gap:12px;margin-top:32px}
.pl-cta-btn{display:inline-flex;align-items:center;gap:10px;min-height:48px;padding:0 24px;border-radius:12px;background:#ffb000;color:#241900;font-size:13.5px;font-weight:800;transition:transform .2s,box-shadow .2s}
.pl-cta-btn:hover{transform:translateY(-2px);box-shadow:0 18px 36px rgba(255,176,0,.25)}
.pl-cta-btn span{transition:transform .2s}
.pl-cta-btn:hover span{transform:translateX(3px)}
.pl-cta-btn.is-ghost{border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.08);color:#fff;backdrop-filter:blur(10px)}
.pl-cta-btn.is-ghost:hover{background:rgba(255,255,255,.14);box-shadow:none}
.pl-cta-foot{position:relative;display:flex;flex-wrap:wrap;justify-content:center;gap:22px;margin-top:34px;font-size:10.5px;letter-spacing:.12em;color:#7f9ba6}
@keyframes pl-cta-drift{50%{transform:translate(24px,-18px) scale(1.08)}}
@media (max-width:700px){.pl-cta{padding:52px 24px}}`,
  js: ``
},
{
  id: "footer-mega",
  name: "页脚",
  cat: "sections",
  desc: "带品牌、订阅、三列链接与版权行的深色页脚。",
  tags: ["footer", "页脚", "订阅", "版权"],
  prompt: "做一个深色页脚区块：左侧是品牌标志和一句项目说明，右侧是订阅输入框（邮箱 + 箭头按钮）；下方三列链接分别是项目、资源、联系，最后一行是版权、许可协议和社交链接。背景用深海军蓝，细线分隔，文字用低饱和灰蓝，悬停变白。移动端改为单列。",
  html: `<footer class="pl-foot">
  <div class="pl-foot-top">
    <div class="pl-foot-brand">
      <span class="pl-foot-mark">启</span>
      <div><strong>启明团队</strong><small>iGEM 2026 · 合成生物学</small></div>
      <p>以证据为核心的 Wiki 设计系统，让复杂研究被更清楚地理解。</p>
    </div>
    <form class="pl-foot-sub" onsubmit="return false">
      <label for="pl-foot-mail">订阅项目进展</label>
      <div><input id="pl-foot-mail" type="email" placeholder="you@example.com"><button type="submit" aria-label="订阅">→</button></div>
      <small>每月一封，随时退订。</small>
    </form>
  </div>
  <div class="pl-foot-grid">
    <div><span>项目</span><a href="#">描述</a><a href="#">工程</a><a href="#">结果</a><a href="#">模型</a></div>
    <div><span>资源</span><a href="#">插件库</a><a href="#">协议</a><a href="#">安全</a><a href="#">归属说明</a></div>
    <div><span>联系</span><a href="#">team@example.org</a><a href="#">GitLab</a><a href="#">Instagram</a><a href="#">合作申请</a></div>
  </div>
  <div class="pl-foot-bottom">
    <span>© 2026 启明团队。内容采用 CC BY 4.0 许可协议。</span>
    <div><a href="#">隐私</a><a href="#">许可</a><a href="#">回到顶部 ↑</a></div>
  </div>
</footer>`,
  css: `.pl-foot{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:48px 52px 30px;background:radial-gradient(700px 400px at 90% 0%,rgba(15,139,141,.16),transparent 60%),#0c1722;color:#c7d7dd}
.pl-foot-top{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;padding-bottom:32px;border-bottom:1px solid rgba(255,255,255,.1)}
.pl-foot-brand{display:grid;grid-template-columns:46px 1fr;gap:12px;align-items:center}
.pl-foot-mark{display:grid;place-items:center;width:46px;height:46px;border-radius:12px;background:linear-gradient(135deg,#0f8b8d,#da4167);font-size:14px;font-weight:800;color:#fff}
.pl-foot-brand strong{display:block;font-size:14px;color:#fff}
.pl-foot-brand small{display:block;margin-top:2px;font-size:10px;color:#7f99a4}
.pl-foot-brand p{grid-column:1/-1;margin-top:8px;max-width:340px;font-size:11.5px;line-height:1.7;color:#87a1ac}
.pl-foot-sub label{display:block;font-size:10px;font-weight:800;letter-spacing:.14em;color:#7f99a4}
.pl-foot-sub>div{display:flex;gap:8px;margin-top:12px}
.pl-foot-sub input{flex:1;min-width:0;height:44px;padding:0 14px;border:1px solid rgba(255,255,255,.16);border-radius:10px;background:rgba(255,255,255,.06);color:#fff;font-size:12.5px;outline:none;transition:border-color .2s}
.pl-foot-sub input::placeholder{color:#6f8893}
.pl-foot-sub input:focus{border-color:#0f8b8d}
.pl-foot-sub button{width:44px;height:44px;border:0;border-radius:10px;background:#ffb000;color:#241900;font-size:16px;font-weight:800;cursor:pointer;transition:transform .2s}
.pl-foot-sub button:hover{transform:translateX(2px)}
.pl-foot-sub small{display:block;margin-top:8px;font-size:10px;color:#6f8893}
.pl-foot-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px;padding:28px 0;border-bottom:1px solid rgba(255,255,255,.1)}
.pl-foot-grid span{display:block;margin-bottom:12px;font-size:10px;font-weight:800;letter-spacing:.14em;color:#6f8893}
.pl-foot-grid a{display:block;width:fit-content;padding:4px 0;font-size:12px;color:#b3c8cf;transition:color .2s,transform .2s}
.pl-foot-grid a:hover{color:#fff;transform:translateX(2px)}
.pl-foot-bottom{display:flex;align-items:center;justify-content:space-between;gap:18px;padding-top:20px;font-size:10.5px;color:#6f8893}
.pl-foot-bottom div{display:flex;gap:16px}
.pl-foot-bottom a:hover{color:#fff}
@media (max-width:820px){.pl-foot{padding:36px 24px 24px}.pl-foot-top,.pl-foot-grid{grid-template-columns:1fr}.pl-foot-bottom{display:block}.pl-foot-bottom div{margin-top:8px}}`,
  js: ``
}
);
