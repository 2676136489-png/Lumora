/* 风格矩阵 4：博客 × 4 种主义，对比 × 4 种主义 */
window.PLUGINS.push(
{
  id: "mx-blog-editorial", name: "编辑博客", cat: "blog",
  desc: "衬线标题、偏置图片与不对称网格的编辑博客。",
  tags: ["博客", "编辑设计", "衬线", "图文"],
  prompt: "做一个编辑风格博客：米白背景，顶部是栏目名和期号，下面三篇文章以不对称网格排列，第一篇大图加衬线标题，后两篇小图加标题、摘要和阅读时间；用细线分隔。整体像文化杂志的专题页，移动端单列。",
  html: `<section class="mx-be">
  <header><b>JOURNAL / 03</b><span>NOTES ON LOW OXYGEN</span></header>
  <div class="mx-be-grid">
    <article class="is-lead"><img src="assets/img/plugins/carousel-02.jpg" alt="记录" loading="lazy"><span>FIELD NOTE 01</span><h2>在低氧里，重新理解稳定</h2><p>稳定的不是曲线，而是每一次读数都能被追溯。</p></article>
    <article><img src="assets/img/plugins/gallery-01.jpg" alt="实验" loading="lazy"><span>METHOD 02</span><h3>对照实验的三个常见错误</h3><p>4 分钟阅读</p></article>
    <article><img src="assets/img/plugins/hover-02.jpg" alt="分子" loading="lazy"><span>DESIGN 03</span><h3>把复杂流程画成一张图</h3><p>6 分钟阅读</p></article>
  </div>
</section>`,
  css: `.mx-be{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:36px 46px;background:#fbfaf7;color:#1c1a16;font-family:Georgia,"Songti SC",serif}
.mx-be header{display:flex;justify-content:space-between;padding-bottom:9px;border-bottom:1px solid rgba(28,26,22,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#7a7164}
.mx-be-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:16px;margin-top:18px}
.mx-be article{border-top:1px solid rgba(28,26,22,.2);padding-top:10px}
.mx-be img{width:100%;height:130px;object-fit:cover;filter:saturate(.85)}
.mx-be .is-lead img{height:230px}
.mx-be span{display:block;margin-top:9px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#b23a2a}
.mx-be h2{margin-top:7px;font-size:clamp(1.5rem,3vw,2.3rem);line-height:1.1;font-weight:400}
.mx-be h3{margin-top:7px;font-size:15px;line-height:1.25;font-weight:400}
.mx-be p{margin-top:6px;font-size:10px;line-height:1.6;color:#7a7164}
@media (max-width:760px){.mx-be{padding:26px 20px}.mx-be-grid{grid-template-columns:1fr}.mx-be img,.mx-be .is-lead img{height:180px}}`,
  js: ``
},
{
  id: "mx-blog-zine", name: "Zine 博客", cat: "blog",
  desc: "剪贴标题、胶带与复印质感的朋克博客。",
  tags: ["博客", "Zine", "剪贴", "复印"],
  prompt: "做一个朋克 Zine 风格博客：灰白复印纸，三张剪报式文章卡随机旋转，用胶带固定；标题由不同字体和底色拼成，配黑白图片、手写编号和红色印章。整体手工、粗粝，移动端减少旋转。",
  html: `<section class="mx-bz">
  <header><b>ZINE / ISSUE 07</b><span>NO ALGORITHM</span></header>
  <div class="mx-bzg">
    <article><i></i><img src="assets/img/plugins/hover-01.jpg" alt="实验室" loading="lazy"><h3>在低氧里，<br>重新理解稳定</h3><small>01 / FIELD</small></article>
    <article><i></i><img src="assets/img/plugins/gallery-05.jpg" alt="培养皿" loading="lazy"><h3>对照实验的<br>三个错误</h3><small>02 / METHOD</small></article>
    <article><i></i><img src="assets/img/plugins/carousel-04.jpg" alt="记录" loading="lazy"><h3>把流程<br>画成一张图</h3><small>03 / DESIGN</small></article>
  </div>
</section>`,
  css: `.mx-bz{min-height:100vh;padding:34px 42px;background:#e9e9e4;color:#111;font-family:"Courier New",Consolas,monospace;overflow:hidden}
.mx-bz::before{content:"";position:absolute;inset:0;opacity:.22;background-image:radial-gradient(#111 .5px,transparent .5px);background-size:4px 4px}
.mx-bz header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #111;font-size:8px;letter-spacing:.12em}
.mx-bzg{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:22px}
.mx-bzg article{position:relative;padding:10px 10px 14px;background:#f7f7f2;border:1px solid rgba(17,17,17,.3);box-shadow:4px 4px 0 rgba(17,17,17,.22);transform:rotate(-1.5deg)}
.mx-bzg article:nth-child(2){transform:rotate(1.8deg);margin-top:10px}
.mx-bzg article:nth-child(3){transform:rotate(-.8deg);margin-top:4px}
.mx-bzg img{width:100%;height:150px;object-fit:cover;filter:grayscale(1) contrast(1.1)}
.mx-bzg h3{margin-top:10px;font-family:Impact,"Arial Black",sans-serif;font-size:20px;line-height:1.05;text-transform:uppercase}
.mx-bzg small{display:block;margin-top:8px;font-size:8px;color:#d23b2e}
.mx-bzg i{position:absolute;top:-8px;left:50%;width:54px;height:16px;margin-left:-27px;background:rgba(230,225,205,.8);transform:rotate(-3deg)}
@media (max-width:700px){.mx-bz{padding:24px}.mx-bzg{grid-template-columns:1fr}.mx-bzg article{transform:none!important;margin:0!important}}`,
  js: ``
},
{
  id: "mx-blog-vhs", name: "VHS 博客", cat: "blog",
  desc: "时间码、跟踪线与录像带标签的 VHS 博客。",
  tags: ["博客", "VHS", "时间码", "录像带"],
  prompt: "做一个 VHS 风格博客：深蓝黑背景，三张录像带缩略图，画面有扫描线、色差和时间码；每张下面有手写编号、标题和时长。右上角有 PLAY ▶ 和时间，整体像旧录像带目录，移动端单列。",
  html: `<section class="mx-bv">
  <header><span>PLAY ▶ / ARCHIVE</span><span>SP · 00:12:34</span></header>
  <div class="mx-bvg">
    <article><img src="assets/img/plugins/carousel-02.jpg" alt="记录" loading="lazy"><b>00:04:12</b><h3>在低氧里重新理解稳定</h3><small>TAPE 01</small></article>
    <article><img src="assets/img/plugins/gallery-01.jpg" alt="实验" loading="lazy"><b>00:07:48</b><h3>对照实验的三个错误</h3><small>TAPE 02</small></article>
    <article><img src="assets/img/plugins/hover-02.jpg" alt="分子" loading="lazy"><b>00:03:26</b><h3>把复杂流程画成一张图</h3><small>TAPE 03</small></article>
  </div>
</section>`,
  css: `.mx-bv{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:28px 40px;background:#0a0c1a;color:#e8f4ff;font-family:ui-monospace,Consolas,"Courier New",monospace;overflow:hidden}
.mx-bv::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px)}
.mx-bv header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(232,244,255,.25);font-size:8px;letter-spacing:.14em;color:#7ee0dd}
.mx-bvg{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
.mx-bvg article{padding:8px;border:1px solid rgba(232,244,255,.2);background:rgba(10,20,40,.7)}
.mx-bvg img{width:100%;height:140px;object-fit:cover;filter:saturate(.7) contrast(1.1);box-shadow:2px 2px 0 rgba(255,43,214,.3)}
.mx-bvg b{display:block;margin-top:7px;font-size:8px;color:#ff2bd6}
.mx-bvg h3{margin-top:5px;font-size:12px;line-height:1.35;color:#e8f4ff}
.mx-bvg small{display:block;margin-top:6px;font-size:7px;color:#8fb7c9}
@media (max-width:700px){.mx-bv{padding:20px}.mx-bvg{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "mx-blog-academia", name: "暗黑学院博客", cat: "blog",
  desc: "深棕、衬线、细金线与图书馆气质的博客。",
  tags: ["博客", "暗黑学院", "衬线", "图书馆"],
  prompt: "做一个暗黑学院风格博客：深棕背景，米色文字，三篇文章以书页式纵向排列，每篇有细金线、衬线标题、摘要和页码；配一张低饱和的图片，整体像旧图书馆的目录卡。移动端单列。",
  html: `<section class="mx-ba">
  <header><span>THE LOW OXYGEN PAPERS</span><span>MMXXVI</span></header>
  <div class="mx-bag">
    <article><span>I.</span><h3>在低氧里，重新理解稳定</h3><p>稳定的不是曲线，而是每一次读数都能被追溯。</p><small>pp. 04–12</small></article>
    <article><span>II.</span><h3>对照实验的三个常见错误</h3><p>样本量、位置效应与宿主背景。</p><small>pp. 14–21</small></article>
    <article><span>III.</span><h3>把复杂流程画成一张图</h3><p>从工程循环到可读的证据链。</p><small>pp. 24–31</small></article>
  </div>
</section>`,
  css: `.mx-ba{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:36px 48px;background:#1c1510;color:#d9c8a8;font-family:Georgia,"Songti SC",serif}
.mx-ba header{display:flex;justify-content:space-between;padding-bottom:9px;border-bottom:1px solid rgba(200,169,106,.35);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#a88f5c}
.mx-bag{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:22px}
.mx-bag article{padding-top:12px;border-top:1px solid rgba(200,169,106,.28)}
.mx-bag span{font-family:ui-monospace,Consolas,monospace;font-size:9px;color:#c8a96a}
.mx-bag h3{margin-top:9px;font-size:18px;line-height:1.2;font-weight:400}
.mx-bag p{margin-top:7px;font-size:10px;line-height:1.7;color:#a68f6a}
.mx-bag small{display:block;margin-top:12px;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#8c7648}
@media (max-width:760px){.mx-ba{padding:26px 20px}.mx-bag{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "mx-compare-swiss", name: "瑞士对比", cat: "comparison",
  desc: "严格表格、红黑标记与清晰行的瑞士对比表。",
  tags: ["对比", "瑞士风格", "表格", "红黑"],
  prompt: "做一个瑞士风格对比表：白底黑字，顶部大标题和说明，下面是一张严格对齐的四行三列表格，左列是指标，中间是传统方法，右侧是本项目，用红点和勾表示差异；用 1px 黑线分隔，推荐列加浅灰底。移动端隐藏说明列。",
  html: `<section class="mx-cs">
  <header><span>COMPARISON / 04</span><h2>What changes.</h2></header>
  <div class="mx-cs-table">
    <div class="mx-cs-row mx-cs-head"><span>指标</span><span>传统方法</span><span class="is-strong">本项目</span></div>
    <div class="mx-cs-row"><span>低氧验证</span><span>补充条件</span><span class="is-strong">主验证</span></div>
    <div class="mx-cs-row"><span>批次重复</span><span>n=3</span><span class="is-strong">n=8</span></div>
    <div class="mx-cs-row"><span>原始读数</span><span>部分保留</span><span class="is-strong">全部保留</span></div>
    <div class="mx-cs-row"><span>协议复用</span><span>无</span><span class="is-strong">标准化模板</span></div>
  </div>
</section>`,
  css: `.mx-cs{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:44px 54px;background:#fff;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.mx-cs header{padding-bottom:14px;border-bottom:2px solid #111}
.mx-cs header span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#e23a2e}
.mx-cs h2{margin-top:7px;font-size:clamp(2rem,4vw,3.2rem);line-height:1;letter-spacing:-.05em}
.mx-cs-table{margin-top:12px}
.mx-cs-row{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:12px;padding:13px 6px;border-bottom:1px solid #ddd;font-size:11px}
.mx-cs-head{padding:7px 6px;border-bottom:1px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.1em;color:#888}
.mx-cs-row span:first-child{font-weight:600}
.mx-cs-row span:nth-child(2){color:#777}
.mx-cs-row .is-strong{color:#111;font-weight:700;background:#f2f2f2;margin:-13px -6px;padding:13px 6px;border-left:3px solid #e23a2e}
.mx-cs-head .is-strong{background:transparent;border-left:0;margin:0;padding:0;color:#111}
@media (max-width:650px){.mx-cs{padding:28px 20px}.mx-cs-row{grid-template-columns:1fr 1fr}.mx-cs-row span:nth-child(2),.mx-cs-head span:nth-child(2){display:none}}`,
  js: ``
},
{
  id: "mx-compare-brutal", name: "粗野对比", cat: "comparison",
  desc: "黄黑双面板、硬阴影与粗字对比的 Brutalist 对比页。",
  tags: ["对比", "粗野主义", "双面板", "硬阴影"],
  prompt: "做一个粗野主义对比页：亮黄背景，左右两块大面板，左边白底写“旧方法”，右边黑底写“本项目”，每块有 3px 黑边和 8px 硬阴影；中间用黑色大字“VS”连接。每条对比项用粗线和方框，移动端上下排列。",
  html: `<section class="mx-cb">
  <h2>OLD WAY <span>VS</span> OUR WAY</h2>
  <div class="mx-cb-grid">
    <article><b>THEM</b><ul><li>常氧主验证</li><li>n=3</li><li>部分读数</li><li>一次性协议</li></ul></article>
    <article class="is-dark"><b>US</b><ul><li>低氧主验证</li><li>n=8</li><li>全部读数</li><li>标准化模板</li></ul></article>
  </div>
</section>`,
  css: `.mx-cb{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:34px 44px;background:#f5f13f;color:#111;font-family:ui-monospace,Consolas,"Courier New",monospace}
.mx-cb h2{font-family:Impact,"Arial Black",sans-serif;font-size:clamp(2.4rem,6vw,5rem);line-height:.9;letter-spacing:-.03em;text-align:center}
.mx-cb h2 span{color:#ff5d8f}
.mx-cb-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:20px}
.mx-cb article{padding:18px;border:3px solid #111;background:#fff;box-shadow:8px 8px 0 #111}
.mx-cb article.is-dark{background:#111;color:#f5f13f}
.mx-cb b{display:block;font-size:18px;letter-spacing:.08em}
.mx-cb ul{margin:14px 0 0;padding:0;list-style:none}
.mx-cb li{padding:9px 0;border-top:2px solid currentColor;font-size:11px}
.mx-cb li::before{content:"□ ";font-size:13px}
.mx-cb article.is-dark li::before{content:"■ "}
@media (max-width:700px){.mx-cb{padding:24px}.mx-cb-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "mx-compare-cyber", name: "赛博对比", cat: "comparison",
  desc: "终端双栏、状态码与霓虹分隔的赛博对比页。",
  tags: ["对比", "赛博", "终端", "霓虹"],
  prompt: "做一个赛博朋克风格对比页：深黑背景，中间一条青色霓虹分隔线，左右两栏像终端输出；左栏是旧方法，带红色警告和错误码，右栏是本项目，带青色 OK 和状态码。标题有青/品红色差，整体像系统诊断界面。",
  html: `<section class="mx-cc">
  <header><span>DIAGNOSTIC / 04</span><span>STATUS: IMPROVED</span></header>
  <div class="mx-cc-grid">
    <article><b>LEGACY</b><p><span>WARN</span> 常氧主验证</p><p><span>WARN</span> n=3</p><p><span>ERR</span> 部分读数丢失</p><p><span>ERR</span> 协议不可复用</p></article>
    <article class="is-good"><b>LUMEN</b><p><span>OK</span> 低氧主验证</p><p><span>OK</span> n=8</p><p><span>OK</span> 全部读数保留</p><p><span>OK</span> 标准化模板</p></article>
  </div>
</section>`,
  css: `.mx-cc{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:30px 42px;background:#05070f;color:#bffcff;font-family:ui-monospace,Consolas,"Courier New",monospace;overflow:hidden}
.mx-cc::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.04) 0 1px,transparent 1px 4px)}
.mx-cc header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(0,240,255,.3);font-size:8px;color:#00f0ff}
.mx-cc-grid{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
.mx-cc-grid article{padding:16px;border:1px solid rgba(255,43,214,.35);background:rgba(10,10,25,.8)}
.mx-cc-grid article.is-good{border-color:rgba(0,240,255,.45);box-shadow:0 0 24px rgba(0,240,255,.1) inset}
.mx-cc-grid b{display:block;margin-bottom:12px;font-size:14px;letter-spacing:.1em;color:#ff2bd6;text-shadow:1px 0 #00f0ff}
.mx-cc-grid .is-good b{color:#00f0ff;text-shadow:1px 0 #ff2bd6}
.mx-cc-grid p{margin:0 0 7px;font-size:10px;color:#8fb7c9}
.mx-cc-grid p span{display:inline-block;min-width:38px;margin-right:6px;padding:2px 4px;border:1px solid currentColor;font-size:7px;color:#ff2bd6}
.mx-cc-grid .is-good p span{color:#00f0ff}
@media (max-width:700px){.mx-cc{padding:22px}.mx-cc-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "mx-compare-paper", name: "纸感对比", cat: "comparison",
  desc: "两张便签、胶带与手写勾选的纸感对比页。",
  tags: ["对比", "纸感", "便签", "手写"],
  prompt: "做一个纸感对比页：暖灰桌面，左右两张不同颜色的便签，用胶带贴在桌上；左边写旧方法，右边写本项目，每条用铅笔勾或叉标记；中间用一张小纸条写“VS”。整体像工作坊墙上的对比练习，轻微旋转。",
  html: `<section class="mx-cp">
  <article class="mx-cpp is-old"><i></i><h3>旧方法</h3><p>× 常氧主验证</p><p>× n=3</p><p>× 部分读数</p><p>× 一次性协议</p></article>
  <div class="mx-cp-vs">VS</div>
  <article class="mx-cpp is-new"><i></i><h3>本项目</h3><p>✓ 低氧主验证</p><p>✓ n=8</p><p>✓ 全部读数</p><p>✓ 标准化模板</p></article>
</section>`,
  css: `.mx-cp{min-height:100vh;display:flex;align-items:center;justify-content:center;gap:18px;padding:40px;background:#d9cbb8;color:#3a332b;font-family:Georgia,"Songti SC",serif}
.mx-cp::before{content:"";position:absolute;inset:0;opacity:.16;background-image:linear-gradient(rgba(58,51,43,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(58,51,43,.3) 1px,transparent 1px);background-size:26px 26px}
.mx-cpp{position:relative;z-index:1;width:min(280px,40vw);padding:26px 22px;background:#fbf6e9;box-shadow:0 18px 34px rgba(58,51,43,.2);transform:rotate(-2deg)}
.mx-cpp.is-new{background:#f2e2a8;transform:rotate(2deg)}
.mx-cpp i{position:absolute;top:-10px;left:50%;width:60px;height:18px;margin-left:-30px;background:rgba(236,228,204,.85);transform:rotate(-3deg)}
.mx-cpp h3{margin:0 0 12px;font-size:24px;font-weight:400}
.mx-cpp p{margin:7px 0;padding-bottom:6px;border-bottom:1px dashed rgba(58,51,43,.25);font-size:12px}
.mx-cpp.is-old p{color:#8a7a6a}
.mx-cpp.is-new p{color:#2f5a3a}
.mx-cp-vs{position:relative;z-index:1;padding:6px 8px;border:1px solid #3a332b;background:#d9cbb8;font-family:ui-monospace,Consolas,monospace;font-size:10px;transform:rotate(-4deg)}
@media (max-width:700px){.mx-cp{flex-direction:column;padding:30px 20px}.mx-cpp{width:100%;transform:none}.mx-cpp.is-new{transform:none}}`,
  js: ``
}
);
