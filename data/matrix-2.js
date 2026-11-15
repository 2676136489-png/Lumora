/* 风格矩阵 2：步骤 × 4 种主义，标志墙 × 4 种主义 */
window.PLUGINS.push(
{
  id: "mx-steps-riso", name: "孔版步骤", cat: "steps",
  desc: "橙蓝双色、套印错位的 Risograph 步骤区块。",
  tags: ["使用方式", "孔版", "双色", "步骤"],
  prompt: "做一个孔版印刷风格的步骤区块：米白纸张，三张橙红与蓝色双色套印的步骤卡，编号巨大，文字有轻微错位；每张卡有裁切线和色标，整体像独立印刷品。移动端纵向排列。",
  html: `<section class="mx-sr">
  <header><span>HOW / 03</span><h2>三步完成一次可复核的验证</h2></header>
  <div class="mx-sr-grid">
    <article><b>01</b><h3>设计</h3><p>确定变量、对照与成功标准。</p></article>
    <article><b>02</b><h3>构建</h3><p>标准化组装，保留完整记录。</p></article>
    <article><b>03</b><h3>验证</h3><p>低氧与常氧双条件读数。</p></article>
  </div>
</section>`,
  css: `.mx-sr{min-height:100vh;display:grid;align-content:center;padding:40px 48px;background:#f3ead8;color:#1c3a8f;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.mx-sr::before{content:"";position:absolute;inset:0;opacity:.2;background-image:radial-gradient(#1c3a8f .5px,transparent .5px);background-size:3px 3px}
.mx-sr header{position:relative;z-index:1;display:flex;align-items:flex-end;justify-content:space-between;gap:20px;padding-bottom:12px;border-bottom:2px solid #1c3a8f}
.mx-sr header span{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#f05a28}
.mx-sr h2{max-width:520px;font-size:clamp(1.6rem,3vw,2.3rem);line-height:1.1;letter-spacing:-.03em}
.mx-sr-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:22px}
.mx-sr-grid article{padding:16px;border:2px solid #1c3a8f;background:#f7efe0;box-shadow:5px 5px 0 rgba(240,90,40,.55)}
.mx-sr-grid b{font-size:34px;line-height:1;letter-spacing:-.05em;color:#f05a28;text-shadow:2px 2px 0 rgba(28,58,143,.5)}
.mx-sr-grid h3{margin-top:10px;font-size:18px}
.mx-sr-grid p{margin-top:4px;font-size:10px;line-height:1.6}
@media (max-width:700px){.mx-sr{padding:26px 20px}.mx-sr header{display:block}.mx-sr-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "mx-steps-web", name: "复古网页步骤", cat: "steps",
  desc: "90 年代表格、浮雕边框与箭头链接的步骤表。",
  tags: ["使用方式", "复古网页", "表格", "90年代"],
  prompt: "做一个 90 年代网页风格的步骤区块：灰色瓷砖背景，居中的表格有三列步骤，边框是凸起/凹陷的立体效果；每列有“STEP 1/2/3”标签、标题、说明和蓝色下划线箭头链接；顶部跑马灯和底部访客计数器。移动端表格改为纵向。",
  html: `<section class="mx-sw">
  <div class="mx-sw-frame">
    <h2>HOW TO USE THIS SITE</h2>
    <marquee>STEP 1 → STEP 2 → STEP 3 · PLEASE SIGN THE GUESTBOOK</marquee>
    <table><tr>
      <td><b>STEP 1</b><h3>设计</h3><p>确定变量和对照。</p><a href="#">NEXT →</a></td>
      <td><b>STEP 2</b><h3>构建</h3><p>标准化组装。</p><a href="#">NEXT →</a></td>
      <td><b>STEP 3</b><h3>验证</h3><p>双条件读数。</p><a href="#">NEXT →</a></td>
    </tr></table>
    <p class="mx-sw-count">Visitors: <b>000127</b></p>
  </div>
</section>`,
  css: `.mx-sw{min-height:100vh;display:grid;place-items:center;padding:24px;background:#c0c0c0;background-image:radial-gradient(#a8a8a8 1px,transparent 1px);background-size:4px 4px;font-family:"Times New Roman",Times,serif;color:#000}
.mx-sw-frame{width:min(680px,100%);padding:14px;border:3px outset #fff;background:#fff}
.mx-sw h2{margin:0;padding:7px;background:#000080;font-size:clamp(1.2rem,3vw,1.7rem);color:#ffff00;text-align:center}
.mx-sw marquee{padding:4px;border:2px inset #fff;background:#000;font-family:"Courier New",monospace;font-size:10px;color:#00ff00}
.mx-sw table{width:100%;border-collapse:collapse;margin-top:8px}
.mx-sw td{width:33.33%;padding:10px;border:2px inset #fff;background:#ffffcc;font-size:11px;vertical-align:top}
.mx-sw td b{display:block;color:#800000;font-size:9px}
.mx-sw h3{margin:5px 0 3px;font-size:15px}
.mx-sw td p{margin:0;line-height:1.5}
.mx-sw td a{color:#0000ee;font-size:10px}
.mx-sw-count{margin:9px 0 0;padding:5px;border:2px inset #fff;background:#000;font-family:"Courier New",monospace;font-size:9px;color:#00ff00;text-align:center}
.mx-sw-count b{color:#ffff00;letter-spacing:.18em}
@media (max-width:600px){.mx-sw table,.mx-sw tbody,.mx-sw tr,.mx-sw td{display:block;width:100%}}`,
  js: ``
},
{
  id: "mx-steps-max", name: "极繁步骤", cat: "steps",
  desc: "高密度色块、图案与重叠编号的极繁步骤区块。",
  tags: ["使用方式", "极繁主义", "拼贴", "高密度"],
  prompt: "做一个极繁主义步骤区块：亮橙背景，四个不同尺寸的色块互相叠压，分别用条纹、圆点、棋盘格和纯色；每块有超大编号和短说明，文字与装饰挤在一起但没有完全失去可读性。移动端减少重叠。",
  html: `<section class="mx-sm">
  <header><span>PROCESS / 04</span><span>FILL EVERY CORNER</span></header>
  <div class="mx-sm-grid">
    <article class="is-stripe"><b>01</b><h3>设计</h3><p>变量、对照、边界。</p></article>
    <article class="is-dot"><b>02</b><h3>构建</h3><p>标准化与记录。</p></article>
    <article class="is-check"><b>03</b><h3>测试</h3><p>双条件读数。</p></article>
    <article class="is-solid"><b>04</b><h3>学习</h3><p>把结果写回下一轮。</p></article>
  </div>
</section>`,
  css: `.mx-sm{min-height:100vh;display:grid;align-content:center;padding:24px;background:#ff6b00;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.mx-sm header{display:flex;justify-content:space-between;padding:6px 8px;border:2px solid #111;background:#ffd23f;font-family:ui-monospace,Consolas,monospace;font-size:8px}
.mx-sm-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;grid-template-rows:1fr 1fr;gap:8px;margin-top:8px;min-height:440px}
.mx-sm-grid article{padding:16px;border:2px solid #111;overflow:hidden}
.mx-sm-grid article:nth-child(1){grid-row:1/3}
.mx-sm-grid b{display:block;font-size:40px;line-height:1;letter-spacing:-.05em}
.mx-sm-grid h3{margin-top:10px;font-size:20px}
.mx-sm-grid p{margin-top:4px;font-size:10px;line-height:1.5}
.mx-sm-grid .is-stripe{background:repeating-linear-gradient(135deg,#fff 0 9px,#111 9px 18px);color:#fff}
.mx-sm-grid .is-dot{background:#7ee0dd;background-image:radial-gradient(#111 1.4px,transparent 1.4px);background-size:11px 11px}
.mx-sm-grid .is-check{background:#ff8fb1;background-image:linear-gradient(45deg,#111 25%,transparent 25%,transparent 75%,#111 75%),linear-gradient(45deg,#111 25%,#ff8fb1 25%,#ff8fb1 75%,#111 75%);background-size:18px 18px;background-position:0 0,9px 9px}
.mx-sm-grid .is-solid{background:#ffd23f}
@media (max-width:700px){.mx-sm-grid{grid-template-columns:1fr 1fr;grid-template-rows:auto;min-height:0}.mx-sm-grid article:nth-child(1){grid-row:auto;grid-column:1/3}.mx-sm-grid b{font-size:28px}}`,
  js: ``
},
{
  id: "mx-steps-decon", name: "解构步骤", cat: "steps",
  desc: "斜切面板、错位编号与断裂结构的解构步骤区块。",
  tags: ["使用方式", "解构主义", "斜切", "断裂"],
  prompt: "做一个解构主义步骤区块：米白背景，三个黑色和红色的斜切面板以不同角度穿插，编号巨大且部分被裁切；每个面板有标题和短说明，边缘互相压住，但仍保持阅读顺序。移动端取消斜切。",
  html: `<section class="mx-sd">
  <header><b>PROCESS / DECON</b><span>THREE CUTS</span></header>
  <div class="mx-sd-stage">
    <article><b>01</b><h3>设计</h3><p>先拆开原有假设。</p></article>
    <article><b>02</b><h3>构建</h3><p>把面板重新错位。</p></article>
    <article><b>03</b><h3>验证</h3><p>用读数连接断口。</p></article>
  </div>
</section>`,
  css: `.mx-sd{min-height:100vh;display:grid;align-content:center;padding:36px 44px;background:#f0ede6;color:#151515;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.mx-sd header{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #151515;font-family:ui-monospace,Consolas,monospace;font-size:8px}
.mx-sd-stage{position:relative;display:flex;gap:8px;margin-top:24px}
.mx-sd-stage article{position:relative;flex:1;padding:20px 18px;border:2px solid #151515;background:#fff;clip-path:polygon(6% 0,100% 4%,94% 100%,0 96%);transform:rotate(-3deg)}
.mx-sd-stage article:nth-child(2){background:#151515;color:#f0ede6;clip-path:polygon(0 6%,94% 0,100% 94%,6% 100%);transform:rotate(2deg) translateY(12px)}
.mx-sd-stage article:nth-child(3){background:#d23b2e;color:#fff;clip-path:polygon(4% 0,100% 0,96% 100%,0 90%);transform:rotate(-1.5deg)}
.mx-sd-stage b{font-size:38px;line-height:1;letter-spacing:-.05em;font-weight:800}
.mx-sd-stage h3{margin-top:12px;font-size:18px}
.mx-sd-stage p{margin-top:4px;font-size:10px;line-height:1.55;opacity:.8}
@media (max-width:700px){.mx-sd{padding:24px}.mx-sd-stage{flex-direction:column}.mx-sd-stage article{transform:none!important;clip-path:none}}`,
  js: ``
},
{
  id: "mx-logos-brutal", name: "粗野标志墙", cat: "logos",
  desc: "黄黑硬阴影的六格 Brutalist 标志墙。",
  tags: ["标志墙", "粗野主义", "硬阴影", "高对比"],
  prompt: "做一个粗野主义标志墙：亮黄背景，六个白色标志块排成三列两行，每块 3px 黑边和 6px 硬阴影，里面用不同字重的文字标志；悬停时块向左上移动、阴影加长。移动端两列。",
  html: `<section class="mx-lb">
  <header><b>TRUSTED / 06</b><span>NO LOGO IS TOO LOUD</span></header>
  <div class="mx-lb-grid"><div>NORTH</div><div>STILL</div><div>OXY</div><div>FIELD</div><div>MOSS</div><div>BATCH</div></div>
</section>`,
  css: `.mx-lb{min-height:100vh;display:grid;align-content:center;padding:40px 48px;background:#f5f13f;color:#111;font-family:ui-monospace,Consolas,monospace}
.mx-lb header{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:3px solid #111;font-size:8px;letter-spacing:.12em}
.mx-lb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px}
.mx-lb-grid div{display:grid;place-items:center;min-height:80px;border:3px solid #111;background:#fff;box-shadow:6px 6px 0 #111;font-size:15px;font-weight:700;letter-spacing:.04em;transition:transform .16s,box-shadow .16s}
.mx-lb-grid div:nth-child(2){font-family:Georgia,serif;font-style:italic;font-weight:400}
.mx-lb-grid div:nth-child(3){background:#111;color:#f5f13f}
.mx-lb-grid div:nth-child(4){font-family:Impact,sans-serif;font-size:20px}
.mx-lb-grid div:nth-child(5){font-weight:400;letter-spacing:.2em}
.mx-lb-grid div:nth-child(6){background:#ffd23f}
.mx-lb-grid div:hover{transform:translate(-4px,-4px);box-shadow:10px 10px 0 #111}
@media (max-width:700px){.mx-lb{padding:24px}.mx-lb-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "mx-logos-minimal", name: "极简标志墙", cat: "logos",
  desc: "单色细线、六格等距的极简标志墙。",
  tags: ["标志墙", "极简", "单色", "细线"],
  prompt: "做一个极简标志墙：白底，六格等距网格，只用细线分隔；每个标志用不同字体或字距的文字标志，全部深灰，悬停时变黑。没有阴影和边框，强调留白与对齐，移动端两列。",
  html: `<section class="mx-lm">
  <header><span>PARTNERS</span><span>2026</span></header>
  <div class="mx-lm-grid"><div>NORTH</div><div>still</div><div>OXY</div><div>FIELD</div><div>moss</div><div>BATCH</div></div>
</section>`,
  css: `.mx-lm{min-height:100vh;display:grid;align-content:center;padding:44px 56px;background:#fff;color:#333;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.mx-lm header{display:flex;justify-content:space-between;padding-bottom:12px;border-bottom:1px solid #ddd;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#999}
.mx-lm-grid{display:grid;grid-template-columns:repeat(3,1fr);border-left:1px solid #eee;border-top:1px solid #eee;margin-top:20px}
.mx-lm-grid div{display:grid;place-items:center;min-height:86px;border-right:1px solid #eee;border-bottom:1px solid #eee;font-size:14px;letter-spacing:.08em;color:#777;transition:color .2s}
.mx-lm-grid div:nth-child(2){font-family:Georgia,serif;font-style:italic}
.mx-lm-grid div:nth-child(3){font-weight:700;letter-spacing:-.03em}
.mx-lm-grid div:nth-child(5){letter-spacing:.3em;font-size:11px}
.mx-lm-grid div:nth-child(6){font-family:ui-monospace,Consolas,monospace}
.mx-lm-grid div:hover{color:#111}
@media (max-width:700px){.mx-lm{padding:26px 20px}.mx-lm-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "mx-logos-neon", name: "霓虹标志墙", cat: "logos",
  desc: "深色背景、霓虹描边与发光文字的六格标志墙。",
  tags: ["标志墙", "霓虹", "发光", "深色"],
  prompt: "做一个霓虹标志墙：近黑背景，六格标志用青色和粉色霓虹描边，文字带发光和轻微闪烁；每格有细网格和扫描线，悬停时亮度增强。移动端两列。",
  html: `<section class="mx-ln">
  <header><b>PARTNERS / NIGHT</b><span>SIGNAL ON</span></header>
  <div class="mx-ln-grid"><div>NORTH</div><div>STILL</div><div>OXY</div><div>FIELD</div><div>MOSS</div><div>BATCH</div></div>
</section>`,
  css: `.mx-ln{min-height:100vh;display:grid;align-content:center;padding:38px 46px;background:#05070f;color:#7ee0dd;font-family:ui-monospace,Consolas,monospace;overflow:hidden}
.mx-ln::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.04) 0 1px,transparent 1px 4px)}
.mx-ln header{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(126,224,221,.25);font-size:8px;letter-spacing:.14em}
.mx-ln-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin-top:18px}
.mx-ln-grid div{display:grid;place-items:center;min-height:80px;border:1px solid rgba(126,224,221,.35);background:rgba(126,224,221,.03);font-size:14px;letter-spacing:.06em;text-shadow:0 0 10px rgba(126,224,221,.55);transition:background .2s,text-shadow .2s}
.mx-ln-grid div:nth-child(even){border-color:rgba(255,43,214,.4);color:#ff8fe6;text-shadow:0 0 10px rgba(255,43,214,.55)}
.mx-ln-grid div:hover{background:rgba(126,224,221,.1);text-shadow:0 0 18px currentColor}
@media (max-width:700px){.mx-ln{padding:24px}.mx-ln-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "mx-logos-paper", name: "纸片标志墙", cat: "logos",
  desc: "剪纸、胶带与轻微旋转的纸质标志墙。",
  tags: ["标志墙", "纸感", "拼贴", "手作"],
  prompt: "做一个纸片拼贴标志墙：米色桌面背景，六个不同颜色的纸片标志随机旋转，用半透明胶带固定；每片用不同字体和字距，边缘有轻微阴影。整体像工作室墙上的合作方名单，移动端两列。",
  html: `<section class="mx-lp">
  <header><span>PARTNERS / CUT & TAPE</span><span>06</span></header>
  <div class="mx-lp-grid"><div><i></i>NORTH</div><div><i></i>still</div><div><i></i>OXY</div><div><i></i>FIELD</div><div><i></i>moss</div><div><i></i>BATCH</div></div>
</section>`,
  css: `.mx-lp{min-height:100vh;display:grid;align-content:center;padding:40px 48px;background:#d9cbb8;color:#2f2a22;font-family:Georgia,"Songti SC",serif}
.mx-lp header{display:flex;justify-content:space-between;padding-bottom:9px;border-bottom:1px solid rgba(47,42,34,.35);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.mx-lp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:22px}
.mx-lp-grid div{position:relative;display:grid;place-items:center;min-height:82px;background:#fbf6e9;box-shadow:0 8px 18px rgba(47,42,34,.16);font-size:15px;transform:rotate(-1.5deg)}
.mx-lp-grid div:nth-child(2){background:#f2e2a8;transform:rotate(1.8deg);font-style:italic}
.mx-lp-grid div:nth-child(3){background:#dfe9df;transform:rotate(-1deg);font-weight:700}
.mx-lp-grid div:nth-child(4){background:#f7d9cd;transform:rotate(2.2deg);font-family:ui-monospace,Consolas,monospace;font-size:12px}
.mx-lp-grid div:nth-child(5){background:#e8e2f4;transform:rotate(-2deg);letter-spacing:.2em;font-size:11px}
.mx-lp-grid div:nth-child(6){background:#fbf6e9;transform:rotate(1deg);font-family:Impact,sans-serif;font-size:17px}
.mx-lp-grid i{position:absolute;top:-8px;left:50%;width:40px;height:15px;margin-left:-20px;background:rgba(230,225,205,.8);transform:rotate(-3deg)}
@media (max-width:700px){.mx-lp{padding:26px 20px}.mx-lp-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
}
);
