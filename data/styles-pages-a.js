/* 风格页面 A：酸性、故障、合成波、脏渍、极繁、朋克 Zine、复古网页、孔版 */
window.PLUGINS.push(
{
  id: "page-acid",
  name: "酸性图形页面",
  cat: "styles",
  desc: "荧光酸绿、倾斜网格与叠压面板的 Acid Graphics 页面。",
  tags: ["风格页面", "酸性设计", "荧光", "反网格"],
  prompt: "做一个 Acid Graphics 风格页面：荧光酸绿背景，黑色粗线网格，巨大的倾斜无衬线标题分三行叠排，配品红色小标签和斜切按钮；下方三块黑边面板随机旋转、互相叠压，带编号和短说明。整体拥挤、刺眼、反网格，移动端减少旋转。",
  html: `<section class="pl-acid">
  <header><b>ACID / 001</b><span>ANTI-GRID ISSUE</span></header>
  <div class="pl-acid-hero">
    <h1>TOO MUCH<br><em>IS NEVER</em><br>ENOUGH</h1>
    <p>密度、噪声与过量的信息，也是一种秩序。</p>
    <a href="#">ENTER →</a>
  </div>
  <div class="pl-acid-panels">
    <article><b>01</b><h3>Overlap</h3><p>面板互相压住，边缘保留粗黑描边。</p></article>
    <article><b>02</b><h3>Distort</h3><p>文字倾斜，网格被故意打断。</p></article>
    <article><b>03</b><h3>Acid</h3><p>荧光绿与品红制造视觉刺痛。</p></article>
  </div>
  <footer><span>NO SAFE MARGINS</span><span>2026 / ACID</span></footer>
</section>`,
  css: `.pl-acid{position:relative;min-height:100vh;padding:32px 42px;background:#d8ff00;color:#0a0a0a;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.pl-acid::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(10,10,10,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(10,10,10,.16) 1px,transparent 1px);background-size:48px 48px;transform:skewY(-3deg)}
.pl-acid header{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;padding-bottom:10px;border-bottom:3px solid #0a0a0a;font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em}
.pl-acid-hero{position:relative;z-index:1;margin-top:18px}
.pl-acid h1{font-size:clamp(3.2rem,8vw,7rem);line-height:.82;letter-spacing:-.07em;transform:skewX(-6deg);font-weight:800}
.pl-acid h1 em{color:#ff00a8;font-style:normal}
.pl-acid-hero p{max-width:360px;margin-top:14px;font-size:11px;line-height:1.6;font-weight:600}
.pl-acid-hero a{display:inline-flex;margin-top:14px;padding:8px 16px;border:3px solid #0a0a0a;background:#ff00a8;font-family:ui-monospace,Consolas,monospace;font-size:10px;font-weight:700;color:#0a0a0a;box-shadow:5px 5px 0 #0a0a0a;transform:rotate(-2deg)}
.pl-acid-panels{position:relative;z-index:1;display:flex;gap:10px;margin-top:20px;padding-bottom:18px}
.pl-acid-panels article{flex:1;padding:16px;border:3px solid #0a0a0a;background:#f4ffb8;box-shadow:7px 7px 0 #0a0a0a}
.pl-acid-panels article:nth-child(1){transform:rotate(-2.5deg)}
.pl-acid-panels article:nth-child(2){transform:rotate(1.5deg) translateY(6px);background:#ffb8e6}
.pl-acid-panels article:nth-child(3){transform:rotate(-1deg)}
.pl-acid-panels b{font-family:ui-monospace,Consolas,monospace;font-size:9px}
.pl-acid-panels h3{margin-top:8px;font-size:18px;letter-spacing:-.03em}
.pl-acid-panels p{margin-top:4px;font-size:9.5px;line-height:1.5}
.pl-acid footer{position:relative;z-index:1;display:flex;justify-content:space-between;padding-top:10px;border-top:3px solid #0a0a0a;font-family:ui-monospace,Consolas,monospace;font-size:8px}
@media (max-width:700px){.pl-acid{padding:22px}.pl-acid-panels{flex-direction:column}.pl-acid-panels article{transform:none!important}}`,
  js: ``
},
{
  id: "page-glitch",
  name: "故障艺术页面",
  cat: "styles",
  desc: "RGB 分离、扫描线与损坏窗口组成的 Glitch 页面。",
  tags: ["风格页面", "故障艺术", "RGB 分离", "扫描线"],
  prompt: "做一个 Glitch Art 风格页面：近黑背景，青色与品红色 RGB 分离的标题，标题边缘有切片错位和闪烁；周围是细扫描线与噪点。下方三张“损坏”的卡片，边框有偏移色块和错误码。整体像信号损坏的终端界面，移动端减弱动画。",
  html: `<section class="pl-glitch">
  <header><span>SIGNAL / 07</span><b>▮▮▮</b></header>
  <div class="pl-glitch-hero"><h1 data-text="LOW OXYGEN">LOW OXYGEN</h1><p>数据在传输中损坏，但结论仍然可读。</p><a href="#">CONNECT</a></div>
  <div class="pl-glitch-cards">
    <article><span>ERR 01</span><h3>Missing</h3><p>缺失的读数被标记，而不是被删除。</p></article>
    <article><span>ERR 02</span><h3>Shift</h3><p>色差让边缘偏移，结构仍然保留。</p></article>
    <article><span>ERR 03</span><h3>Noise</h3><p>噪声是信号的一部分。</p></article>
  </div>
  <footer><span>0x07 / SIGNAL LOST</span><span>00:12:34</span></footer>
</section>`,
  css: `.pl-glitch{min-height:100vh;display:flex;flex-direction:column;padding:30px 44px;background:#070707;color:#e8ffff;font-family:ui-monospace,Consolas,monospace;overflow:hidden}
.pl-glitch::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.05) 0 1px,transparent 1px 4px)}
.pl-glitch header{display:flex;justify-content:space-between;padding-bottom:12px;border-bottom:1px solid rgba(0,255,255,.25);font-size:9px;letter-spacing:.18em;color:#00ffff}
.pl-glitch-hero{margin-top:34px}
.pl-glitch h1{position:relative;font-size:clamp(3rem,8vw,7rem);line-height:.9;letter-spacing:-.04em;color:#fff;text-shadow:3px 0 #ff00a8,-3px 0 #00ffff;animation:pl-glitch-shift 2.4s steps(2) infinite}
.pl-glitch h1::before,.pl-glitch h1::after{content:attr(data-text);position:absolute;inset:0;overflow:hidden}
.pl-glitch h1::before{color:#ff00a8;clip-path:inset(12% 0 68% 0);transform:translateX(-4px);animation:pl-glitch-cut 1.8s steps(3) infinite}
.pl-glitch h1::after{color:#00ffff;clip-path:inset(66% 0 10% 0);transform:translateX(4px);animation:pl-glitch-cut 2.2s steps(2) infinite reverse}
.pl-glitch-hero p{margin-top:16px;font-size:10px;color:#8fb7b7}
.pl-glitch-hero a{display:inline-block;margin-top:16px;padding:8px 14px;border:1px solid #00ffff;font-size:9px;letter-spacing:.16em;color:#00ffff}
.pl-glitch-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-glitch-cards article{position:relative;padding:16px;border:1px solid rgba(255,255,255,.18);background:#0c0c0c}
.pl-glitch-cards article::before{content:"";position:absolute;inset:-2px;border:1px solid #ff00a8;clip-path:inset(0 0 70% 0);opacity:.7}
.pl-glitch-cards span{font-size:8px;color:#ff00a8}
.pl-glitch-cards h3{margin-top:8px;font-size:16px;color:#fff}
.pl-glitch-cards p{margin-top:4px;font-size:9px;line-height:1.55;color:#8fb7b7}
.pl-glitch footer{display:flex;justify-content:space-between;margin-top:auto;padding-top:14px;border-top:1px solid rgba(0,255,255,.25);font-size:8px;color:#00ffff}
@keyframes pl-glitch-shift{0%,100%{transform:translate(0)}48%{transform:translate(1px,0)}50%{transform:translate(-2px,0)}52%{transform:translate(0)}}
@keyframes pl-glitch-cut{0%,100%{clip-path:inset(12% 0 68% 0)}50%{clip-path:inset(60% 0 22% 0)}}
@media (max-width:700px){.pl-glitch{padding:22px}.pl-glitch-cards{grid-template-columns:1fr}.pl-glitch h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "page-synthwave",
  name: "合成波页面",
  cat: "styles",
  desc: "落日、霓虹网格与镀铬标题的 80 年代 Synthwave 页面。",
  tags: ["风格页面", "合成波", "霓虹", "80年代"],
  prompt: "做一个 Synthwave 风格页面：深紫蓝天空、粉橙落日、透视网格地面，中央是镀铬渐变的超大标题和两行说明；下方三张霓虹描边卡片，青与粉双色发光。整体是 80 年代未来主义，加入细扫描线，移动端缩小落日与标题。",
  html: `<section class="pl-synth">
  <div class="pl-synth-sun"></div>
  <div class="pl-synth-floor"></div>
  <header><b>OUTRUN / 84</b><span>NIGHT DRIVE</span></header>
  <div class="pl-synth-hero"><h1>OUTRUN<br><em>THE QUIET</em></h1><p>在低氧的夜里，保持稳定的表达。</p><a href="#">START ENGINE</a></div>
  <div class="pl-synth-cards">
    <article><b>01</b><h3>Drive</h3><p>持续输出，保持节奏。</p></article>
    <article><b>02</b><h3>Glow</h3><p>霓虹只在需要时亮起。</p></article>
    <article><b>03</b><h3>Return</h3><p>回到可复核的证据。</p></article>
  </div>
</section>`,
  css: `.pl-synth{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:#140a2e;color:#fff;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-synth::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.04) 0 1px,transparent 1px 4px)}
.pl-synth-sun{position:absolute;left:50%;top:14%;width:300px;height:300px;margin-left:-150px;border-radius:50%;background:linear-gradient(180deg,#ffe066,#ff7eb3 50%,#c44dff);box-shadow:0 0 80px rgba(255,126,179,.55)}
.pl-synth-sun::after{content:"";position:absolute;left:0;right:0;top:56%;height:7px;background:#140a2e;box-shadow:0 14px 0 #140a2e,0 28px 0 #140a2e,0 42px 0 #140a2e}
.pl-synth-floor{position:absolute;left:-20%;right:-20%;bottom:-8%;height:46%;background-image:linear-gradient(rgba(0,240,255,.8) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,.8) 1px,transparent 1px);background-size:48px 34px;transform:perspective(320px) rotateX(64deg);transform-origin:center bottom;opacity:.5;mask-image:linear-gradient(180deg,transparent,#000 40%)}
.pl-synth header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid rgba(0,240,255,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.18em;color:#00f0ff}
.pl-synth-hero{position:relative;z-index:1;margin-top:20px}
.pl-synth h1{font-size:clamp(3rem,7.5vw,6.4rem);line-height:.88;font-weight:800;letter-spacing:-.05em;background:linear-gradient(180deg,#fff,#a8f0ff 38%,#ff7eb3 68%,#c44dff);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 16px rgba(0,240,255,.35))}
.pl-synth h1 em{font-style:normal}
.pl-synth-hero p{margin-top:12px;font-size:11px;color:#d7c9ff}
.pl-synth-hero a{display:inline-block;margin-top:14px;padding:8px 14px;border:1px solid #ff7eb3;border-radius:2px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#ff7eb3;box-shadow:0 0 16px rgba(255,126,179,.25) inset}
.pl-synth-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-synth-cards article{padding:14px;border:1px solid rgba(0,240,255,.35);background:rgba(10,6,30,.55);box-shadow:0 0 18px rgba(0,240,255,.12) inset}
.pl-synth-cards b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#00f0ff}
.pl-synth-cards h3{margin-top:7px;font-size:15px}
.pl-synth-cards p{margin-top:3px;font-size:9px;color:#b9a8e8}
@media (max-width:700px){.pl-synth{padding:22px}.pl-synth-sun{width:210px;height:210px;margin-left:-105px}.pl-synth-cards{grid-template-columns:1fr}.pl-synth h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "page-grunge",
  name: "脏渍风页面",
  cat: "styles",
  desc: "旧纸、撕裂边缘与做旧印章的 Grunge 页面。",
  tags: ["风格页面", "脏渍风", "旧纸", "做旧"],
  prompt: "做一个 Grunge 风格页面：灰米色旧纸背景，叠加噪点与污渍纹理；标题用粗窄的无衬线，边缘有磨损感；一张偏灰的照片被胶带斜贴在右侧，三张卡片像旧记录纸，带印章、撕裂边缘和打字机文字。整体低饱和、粗粝、像被翻旧的实验档案。",
  html: `<section class="pl-grunge">
  <div class="pl-grunge-stain"></div>
  <header><b>NOISE / ARCHIVE</b><span>FILE 07 · 1998</span></header>
  <div class="pl-grunge-hero">
    <div><h1>NOISE<br>IS DATA.</h1><p>被磨损的记录，也保留了当时的温度。</p><a href="#">OPEN FILE</a></div>
    <figure><img src="assets/img/plugins/hover-03.jpg" alt="旧记录" loading="lazy"><figcaption>FIG. 04 / 损坏的胶片</figcaption></figure>
  </div>
  <div class="pl-grunge-cards">
    <article><span>01</span><h3>Torn</h3><p>撕裂的边缘比完整的纸更可信。</p></article>
    <article><span>02</span><h3>Stain</h3><p>污渍记录了它被使用过。</p></article>
    <article><span>03</span><h3>Type</h3><p>打字机的错位也是证据。</p></article>
  </div>
</section>`,
  css: `.pl-grunge{position:relative;min-height:100vh;padding:32px 44px;background:#d8d2c4;color:#24221d;font-family:"Courier New",Consolas,monospace;overflow:hidden}
.pl-grunge::before{content:"";position:absolute;inset:0;opacity:.35;background-image:radial-gradient(#5b5548 0.7px,transparent 0.7px);background-size:5px 5px}
.pl-grunge-stain{position:absolute;right:-40px;top:-50px;width:320px;height:320px;border-radius:50%;background:radial-gradient(circle,rgba(84,72,52,.22),transparent 65%);filter:blur(6px)}
.pl-grunge header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:2px solid #24221d;font-size:8px;letter-spacing:.14em}
.pl-grunge-hero{position:relative;z-index:1;display:grid;grid-template-columns:1.1fr .9fr;gap:34px;align-items:center;margin-top:22px}
.pl-grunge h1{font-family:"Arial Narrow",Impact,sans-serif;font-size:clamp(3rem,7vw,6rem);line-height:.88;letter-spacing:-.03em;text-transform:uppercase;color:#1d1b16;text-shadow:2px 1px 0 rgba(255,255,255,.3)}
.pl-grunge-hero p{max-width:320px;margin-top:12px;font-size:10px;line-height:1.7;color:#5a5348}
.pl-grunge-hero a{display:inline-block;margin-top:14px;padding:7px 12px;border:2px solid #24221d;font-size:8px;letter-spacing:.12em;color:#24221d;background:#c9c0ad;box-shadow:3px 3px 0 #24221d}
.pl-grunge figure{margin:0;transform:rotate(2.5deg)}
.pl-grunge figure img{width:100%;height:210px;object-fit:cover;filter:grayscale(.7) contrast(1.1) sepia(.15);border:8px solid #eee8da;box-shadow:0 12px 24px rgba(36,34,29,.25)}
.pl-grunge figcaption{margin-top:6px;font-size:8px;color:#6b6356}
.pl-grunge-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-grunge-cards article{padding:14px;background:#e6dfd0;border:1px solid rgba(36,34,29,.3);transform:rotate(-1deg)}
.pl-grunge-cards article:nth-child(2){transform:rotate(1.2deg)}
.pl-grunge-cards article:nth-child(3){transform:rotate(-.6deg)}
.pl-grunge-cards span{font-size:8px;color:#8a4b36}
.pl-grunge-cards h3{margin-top:7px;font-family:"Arial Narrow",Impact,sans-serif;font-size:18px;text-transform:uppercase}
.pl-grunge-cards p{margin-top:4px;font-size:9px;line-height:1.55;color:#5a5348}
@media (max-width:700px){.pl-grunge{padding:22px}.pl-grunge-hero{grid-template-columns:1fr}.pl-grunge-cards{grid-template-columns:1fr}.pl-grunge-cards article{transform:none!important}}`,
  js: ``
},
{
  id: "page-maximalism",
  name: "极繁主义页面",
  cat: "styles",
  desc: "高密度拼贴、重叠色块与多种图案的 Maximalism 页面。",
  tags: ["风格页面", "极繁主义", "拼贴", "高密度"],
  prompt: "做一个极繁主义页面：亮橙背景，信息密度极高，多个色块、条纹、圆点、棋盘格和文字块互相叠压，几乎没有留白；中央是超大标题和一小段说明，周围散布编号、标签、按钮和三条内容块。整体拥挤但保持可读，移动端减少重叠。",
  html: `<section class="pl-max">
  <header><span>MAXIMAL / 07</span><span>MORE IS MORE</span><span>2026</span></header>
  <div class="pl-max-grid">
    <div class="pl-max-title"><h1>MORE<br>IS<br>MORE</h1><p>把每个角落都填满，让信息自己形成秩序。</p></div>
    <div class="pl-max-block is-stripe"><b>01</b><span>STRIPE</span></div>
    <div class="pl-max-block is-dot"><b>02</b><span>DOT</span></div>
    <div class="pl-max-block is-check"><b>03</b><span>CHECK</span></div>
    <div class="pl-max-block is-text"><b>04</b><p>高密度不是混乱，是另一种阅读节奏。</p></div>
    <div class="pl-max-block is-color"><b>05</b><span>COLOR</span></div>
    <div class="pl-max-block is-small"><b>06</b><span>MORE</span></div>
  </div>
  <footer><span>NO EMPTY SPACE</span><span>FILL EVERYTHING</span><span>↗</span></footer>
</section>`,
  css: `.pl-max{min-height:100vh;padding:20px;background:#ff6b00;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.pl-max header{display:flex;justify-content:space-between;padding:6px 8px;border:2px solid #111;background:#ffd23f;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.pl-max-grid{display:grid;grid-template-columns:1.3fr .7fr .7fr;grid-template-rows:1fr .6fr .6fr;gap:8px;margin-top:8px;height:calc(100vh - 100px)}
.pl-max-title{grid-row:1/4;padding:18px;border:2px solid #111;background:#fff;display:flex;flex-direction:column;justify-content:space-between}
.pl-max h1{font-size:clamp(3rem,7vw,6rem);line-height:.82;letter-spacing:-.06em}
.pl-max-title p{max-width:280px;font-size:10px;line-height:1.6}
.pl-max-block{position:relative;padding:10px;border:2px solid #111;overflow:hidden}
.pl-max-block b{position:relative;z-index:1;font-family:ui-monospace,Consolas,monospace;font-size:9px}
.pl-max-block span{position:relative;z-index:1;display:block;margin-top:8px;font-size:11px;font-weight:700}
.pl-max-block p{position:relative;z-index:1;margin-top:8px;font-size:9px;line-height:1.5}
.pl-max-block.is-stripe{background:repeating-linear-gradient(135deg,#ffd23f 0 10px,#111 10px 20px);color:#fff}
.pl-max-block.is-dot{background:#7ee0dd;background-image:radial-gradient(#111 1.4px,transparent 1.4px);background-size:12px 12px}
.pl-max-block.is-check{background:#ff8fb1;background-image:linear-gradient(45deg,#111 25%,transparent 25%,transparent 75%,#111 75%),linear-gradient(45deg,#111 25%,#ff8fb1 25%,#ff8fb1 75%,#111 75%);background-size:20px 20px;background-position:0 0,10px 10px}
.pl-max-block.is-text{background:#fff;grid-column:2/4}
.pl-max-block.is-color{background:#6c5ce7;color:#fff}
.pl-max-block.is-small{background:#ffd23f;grid-column:3}
.pl-max footer{display:flex;justify-content:space-between;margin-top:8px;padding:6px 8px;border:2px solid #111;background:#111;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#ffd23f}
@media (max-width:700px){.pl-max-grid{grid-template-columns:1fr 1fr;grid-template-rows:auto;height:auto}.pl-max-title{grid-row:auto;grid-column:1/3}.pl-max-block.is-text{grid-column:1/3}.pl-max-block.is-small{grid-column:auto}}`,
  js: ``
},
{
  id: "page-punk-zine",
  name: "朋克 Zine 页面",
  cat: "styles",
  desc: "复印机质感、剪贴字母与胶带的 Punk Zine 页面。",
  tags: ["风格页面", "朋克", "Zine", "剪贴"],
  prompt: "做一个 Punk Zine 风格页面：灰白复印纸背景，标题由不同字体、不同底色的剪贴字母拼成，边缘粗糙；三张剪报式卡片随机旋转，用胶带贴住，带编号、打字机文字和红色印章。整体像手工装订的独立杂志，移动端减少旋转。",
  html: `<section class="pl-zine">
  <header><span>ISSUE 07 / DIY</span><span>NO PERMISSION</span></header>
  <div class="pl-zine-title">
    <span>L</span><span>O</span><span>W</span><span class="is-cut">OXY</span><span>GEN</span>
  </div>
  <p class="pl-zine-sub">一份关于低氧、噪声与不完美记录的独立刊物。</p>
  <div class="pl-zine-clips">
    <article><span class="pl-zine-tape"></span><b>01 / NOTE</b><h3>Cut & Paste</h3><p>把不同来源的证据剪下来，重新排列。</p></article>
    <article><span class="pl-zine-tape"></span><b>02 / STAMP</b><h3>Copy It</h3><p>复印会丢失细节，也会产生新的质感。</p></article>
    <article><span class="pl-zine-tape"></span><b>03 / DIY</b><h3>Keep It Raw</h3><p>不修边幅，但每一页都能追溯。</p></article>
  </div>
  <footer><span>XEROX / 1998</span><span>PRINTED AT HOME</span></footer>
</section>`,
  css: `.pl-zine{position:relative;min-height:100vh;padding:30px 42px;background:#e9e9e4;color:#111;font-family:"Courier New",Consolas,monospace;overflow:hidden}
.pl-zine::before{content:"";position:absolute;inset:0;opacity:.3;background-image:radial-gradient(#111 0.5px,transparent 0.5px);background-size:4px 4px}
.pl-zine header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #111;font-size:8px;letter-spacing:.12em}
.pl-zine-title{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:4px;margin-top:18px;font-family:Impact,"Arial Black",sans-serif;font-size:clamp(3rem,8vw,7rem);line-height:.9;text-transform:uppercase}
.pl-zine-title span{padding:2px 8px;background:#111;color:#fff;transform:rotate(var(--r,0deg))}
.pl-zine-title span:nth-child(1){--r:-4deg;background:#111}
.pl-zine-title span:nth-child(2){--r:3deg;background:#fff;color:#111;border:2px solid #111}
.pl-zine-title span:nth-child(3){--r:-2deg;background:#d23b2e}
.pl-zine-title span.is-cut{--r:5deg;background:#ffd23f;color:#111;font-family:Georgia,serif;font-style:italic}
.pl-zine-title span:nth-child(5){--r:-3deg;background:#fff;color:#111;border:2px solid #111}
.pl-zine-sub{position:relative;z-index:1;max-width:420px;margin-top:12px;font-size:10px;line-height:1.6}
.pl-zine-clips{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px}
.pl-zine-clips article{position:relative;padding:16px 14px;background:#f7f7f2;border:1px solid rgba(17,17,17,.35);box-shadow:4px 4px 0 rgba(17,17,17,.25);transform:rotate(-1.5deg)}
.pl-zine-clips article:nth-child(2){transform:rotate(1.8deg)}
.pl-zine-clips article:nth-child(3){transform:rotate(-.8deg)}
.pl-zine-clips b{font-size:8px;color:#d23b2e}
.pl-zine-clips h3{margin-top:8px;font-family:Impact,"Arial Black",sans-serif;font-size:20px;text-transform:uppercase}
.pl-zine-clips p{margin-top:4px;font-size:9px;line-height:1.55}
.pl-zine-tape{position:absolute;top:-9px;left:50%;width:60px;height:18px;margin-left:-30px;background:rgba(230,225,205,.85);transform:rotate(-4deg);box-shadow:0 1px 2px rgba(17,17,17,.2)}
.pl-zine footer{position:relative;z-index:1;display:flex;justify-content:space-between;margin-top:24px;padding-top:10px;border-top:2px solid #111;font-size:8px}
@media (max-width:700px){.pl-zine{padding:22px}.pl-zine-clips{grid-template-columns:1fr}.pl-zine-clips article{transform:none!important}}`,
  js: ``
},
{
  id: "page-old-web",
  name: "复古网页",
  cat: "styles",
  desc: "90 年代表格布局、浮雕按钮与访客计数器的 Old Web 页面。",
  tags: ["风格页面", "复古网页", "90年代", "表格"],
  prompt: "做一个 90 年代复古网页：灰色瓷砖背景，居中的表格布局，边框有凸起和凹陷的立体效果；顶部是彩虹分隔线、跑马灯文字和“NEW!”闪烁标签；正文用 Times New Roman 和蓝色下划线链接，三格内容表，底部是访客计数器和“Best viewed in 800×600”。整体刻意粗糙、怀旧。",
  html: `<section class="pl-web">
  <div class="pl-web-frame">
    <h1>✧ LOW OXYGEN HOMEPAGE ✧</h1>
    <div class="pl-web-rainbow"></div>
    <marquee class="pl-web-marquee">WELCOME TO MY LAB PAGE · LAST UPDATED 1998 · SIGN MY GUESTBOOK</marquee>
    <p class="pl-web-nav"><a href="#">HOME</a> | <a href="#">PROJECT</a> | <a href="#">LINKS</a> | <a href="#">GUESTBOOK</a> <blink class="pl-web-new">NEW!</blink></p>
    <table class="pl-web-table"><tr><td><b>01 / ABOUT</b><p>这是一个关于低氧表达的个人主页。</p></td><td><b>02 / DATA</b><p>在这里放我的实验记录和图表。</p></td><td><b>03 / LINKS</b><p>友情链接和下载区。</p></td></tr></table>
    <div class="pl-web-counter">You are visitor <b>000127</b></div>
    <p class="pl-web-foot">Best viewed in Netscape Navigator · 800 × 600</p>
  </div>
</section>`,
  css: `.pl-web{min-height:100vh;display:grid;place-items:center;padding:24px;background:#c0c0c0;background-image:radial-gradient(#a8a8a8 1px,transparent 1px);background-size:4px 4px;font-family:"Times New Roman",Times,serif;color:#000}
.pl-web-frame{width:min(720px,100%);padding:14px;border:3px outset #fff;background:#fff}
.pl-web h1{margin:0;padding:8px;background:#000080;color:#ffff00;font-size:clamp(1.3rem,3.4vw,2rem);text-align:center;font-weight:700;text-shadow:2px 2px 0 #000}
.pl-web-rainbow{height:8px;margin:6px 0;background:linear-gradient(90deg,#ff0000,#ff8000,#ffff00,#00ff00,#0000ff,#8000ff)}
.pl-web-marquee{padding:4px;border:2px inset #fff;background:#000;color:#00ff00;font-family:"Courier New",monospace;font-size:11px}
.pl-web-nav{padding:6px 4px;font-size:12px;text-align:center}
.pl-web-nav a{color:#0000ee;text-decoration:underline}
.pl-web-new{color:#ff0000;font-weight:700;animation:pl-web-blink 1s steps(1) infinite}
.pl-web-table{width:100%;border-collapse:collapse;margin-top:6px}
.pl-web-table td{width:33.33%;padding:10px;border:2px inset #fff;background:#ffffcc;font-size:11px;vertical-align:top}
.pl-web-table b{display:block;margin-bottom:5px;color:#800000;font-size:10px}
.pl-web-table p{margin:0;line-height:1.5}
.pl-web-counter{margin-top:10px;padding:5px;border:2px inset #fff;background:#000;color:#00ff00;font-family:"Courier New",monospace;font-size:10px;text-align:center}
.pl-web-counter b{letter-spacing:.2em;color:#ffff00}
.pl-web-foot{margin:8px 0 0;font-size:9px;text-align:center;color:#555}
@keyframes pl-web-blink{50%{opacity:0}}
@media (max-width:600px){.pl-web-table,.pl-web-table tbody,.pl-web-table tr,.pl-web-table td{display:block;width:100%}}`,
  js: ``
},
{
  id: "page-risograph",
  name: "孔版印刷页面",
  cat: "styles",
  desc: "橙蓝双色、错位套印与纸张颗粒的 Risograph 页面。",
  tags: ["风格页面", "孔版印刷", "双色", "套印"],
  prompt: "做一个 Risograph 孔版印刷风格页面：米白纸张背景，只用橙红与蓝两种油墨，标题和图形有轻微套印错位；叠加纸颗粒和油墨不均的纹理。三张内容卡片也是双色印刷，边角有裁切线、色标和印刷标记。整体像独立出版物的封面，移动端保持双色。",
  html: `<section class="pl-riso">
  <header><span>RISO / 02</span><span>2 COLORS</span></header>
  <div class="pl-riso-hero">
    <h1>LOW<br>OXYGEN</h1>
    <div class="pl-riso-mark"><i></i><i></i><i></i></div>
    <p>用两种颜色，记录一个低氧实验的全部证据。</p>
  </div>
  <div class="pl-riso-cards">
    <article><b>01</b><h3>Orange</h3><p>主色负责强调与数字。</p></article>
    <article><b>02</b><h3>Blue</h3><p>蓝色负责结构与正文。</p></article>
    <article><b>03</b><h3>Offset</h3><p>轻微错位让画面有呼吸。</p></article>
  </div>
  <footer><span>PRINTED IN TWO PASSES</span><span>2026 / RISO</span></footer>
</section>`,
  css: `.pl-riso{position:relative;min-height:100vh;padding:32px 44px;background:#f3ead8;color:#1c3a8f;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.pl-riso::before{content:"";position:absolute;inset:0;opacity:.25;background-image:radial-gradient(#1c3a8f 0.5px,transparent 0.5px);background-size:3px 3px}
.pl-riso header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #1c3a8f;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em}
.pl-riso-hero{position:relative;z-index:1;display:flex;align-items:flex-end;gap:28px;margin-top:20px}
.pl-riso h1{font-size:clamp(3.2rem,8vw,7rem);line-height:.82;letter-spacing:-.06em;color:#f05a28;text-shadow:4px 4px 0 rgba(28,58,143,.55)}
.pl-riso-hero p{max-width:240px;padding-bottom:8px;font-size:11px;line-height:1.7;color:#1c3a8f}
.pl-riso-mark{display:flex;gap:5px;margin-left:auto;padding-bottom:10px}
.pl-riso-mark i{width:14px;height:14px;border-radius:50%;background:#f05a28;mix-blend-mode:multiply}
.pl-riso-mark i:nth-child(2){background:#1c3a8f}
.pl-riso-mark i:nth-child(3){background:#f05a28;border:2px solid #1c3a8f}
.pl-riso-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-riso-cards article{padding:14px;border:2px solid #1c3a8f;background:#f7efe0;box-shadow:5px 5px 0 rgba(240,90,40,.55)}
.pl-riso-cards b{font-family:ui-monospace,Consolas,monospace;font-size:9px;color:#f05a28}
.pl-riso-cards h3{margin-top:7px;font-size:17px;color:#1c3a8f}
.pl-riso-cards p{margin-top:4px;font-size:9.5px;line-height:1.55}
.pl-riso footer{position:relative;z-index:1;display:flex;justify-content:space-between;margin-top:26px;padding-top:8px;border-top:2px solid #1c3a8f;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#f05a28}
@media (max-width:700px){.pl-riso{padding:22px}.pl-riso-hero{display:block}.pl-riso-mark{margin:12px 0 0}.pl-riso-cards{grid-template-columns:1fr}}`,
  js: ``
}
);
