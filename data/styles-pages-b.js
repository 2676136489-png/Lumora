/* 风格页面 B：太阳朋克、蒸汽朋克、解构、波普、VHS、迷幻、多巴胺、Y2K */
window.PLUGINS.push(
{
  id: "page-solarpunk",
  name: "太阳朋克页面",
  cat: "styles",
  desc: "暖阳、植物曲线与太阳能板组成的 Solarpunk 页面。",
  tags: ["风格页面", "太阳朋克", "自然", "未来"],
  prompt: "做一个 Solarpunk 风格页面：暖黄到浅绿的天空渐变，左上角一轮柔和的太阳，画面边缘有抽象的植物叶片和藤蔓曲线；三张卡片像太阳能板与种植箱的结合，圆角、浅色、带绿色描边。整体乐观、自然、明亮，移动端减少装饰。",
  html: `<section class="pl-solar">
  <div class="pl-solar-sun"></div>
  <div class="pl-solar-leaf is-a"></div>
  <div class="pl-solar-leaf is-b"></div>
  <header><b>SOLAR / 01</b><span>GROW WITH THE SUN</span></header>
  <div class="pl-solar-hero"><h1>GROW<br>IN LIGHT</h1><p>让实验、能源与社区一起生长。</p><a href="#">进入花园</a></div>
  <div class="pl-solar-cards">
    <article><i></i><b>01</b><h3>Sun</h3><p>把自然光变成可用的能量。</p></article>
    <article><i></i><b>02</b><h3>Soil</h3><p>在低氧土壤里维持稳定的微生物群落。</p></article>
    <article><i></i><b>03</b><h3>Share</h3><p>把方法和收成开放给社区。</p></article>
  </div>
</section>`,
  css: `.pl-solar{position:relative;min-height:100vh;overflow:hidden;padding:32px 44px;background:linear-gradient(165deg,#ffe9b0,#cfe8b8 48%,#8fc9a8);color:#20402c;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-solar-sun{position:absolute;right:8%;top:8%;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,#fff6c9,#ffd166 60%,rgba(255,209,102,0));filter:blur(1px)}
.pl-solar-leaf{position:absolute;border-radius:60% 40% 55% 45% / 45% 60% 40% 55%;background:rgba(63,111,78,.16)}
.pl-solar-leaf.is-a{left:-70px;bottom:-80px;width:280px;height:240px;transform:rotate(-18deg)}
.pl-solar-leaf.is-b{right:-40px;bottom:60px;width:180px;height:150px;background:rgba(63,111,78,.12);transform:rotate(24deg)}
.pl-solar header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:1px solid rgba(32,64,44,.25);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em}
.pl-solar-hero{position:relative;z-index:1;margin-top:22px}
.pl-solar h1{font-size:clamp(3rem,7vw,6rem);line-height:.88;letter-spacing:-.05em;color:#20402c}
.pl-solar-hero p{margin-top:12px;font-size:12px;color:#4f6f58}
.pl-solar-hero a{display:inline-block;margin-top:14px;padding:8px 16px;border-radius:999px;background:#20402c;font-size:10px;font-weight:700;color:#eaf6d8}
.pl-solar-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-solar-cards article{position:relative;padding:16px;border:1px solid rgba(63,111,78,.35);border-radius:14px;background:rgba(255,255,255,.62);backdrop-filter:blur(6px)}
.pl-solar-cards i{display:block;width:28px;height:18px;margin-bottom:10px;border:1px solid #3f6f4e;background:linear-gradient(135deg,#3f6f4e 50%,#9fd8b4 50%);border-radius:3px}
.pl-solar-cards b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#3f6f4e}
.pl-solar-cards h3{margin-top:7px;font-size:17px;color:#20402c}
.pl-solar-cards p{margin-top:4px;font-size:10px;line-height:1.6;color:#5b7764}
@media (max-width:700px){.pl-solar{padding:22px}.pl-solar-sun{width:120px;height:120px}.pl-solar-cards{grid-template-columns:1fr}.pl-solar h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "page-steampunk",
  name: "蒸汽朋克页面",
  cat: "styles",
  desc: "黄铜齿轮、铆钉与维多利亚字体的 Steampunk 页面。",
  tags: ["风格页面", "蒸汽朋克", "黄铜", "齿轮"],
  prompt: "做一个 Steampunk 风格页面：深棕背景，黄铜色边框与铆钉，角落有几枚由重复渐变画出的齿轮；标题用维多利亚衬线，正文像老式机器铭牌。三张卡片做成黄铜面板，带内阴影、螺丝和编号。整体厚重、机械、复古未来。",
  html: `<section class="pl-steam">
  <div class="pl-steam-gear is-a"></div>
  <div class="pl-steam-gear is-b"></div>
  <header><b>AETHER / 1897</b><span>PRESSURE: 0.07 BAR</span></header>
  <div class="pl-steam-hero"><h1>THE<br>LOW OXYGEN<br>MACHINE</h1><p>一台在稀薄空气中保持运转的表达装置。</p><a href="#">启动机器</a></div>
  <div class="pl-steam-cards">
    <article><i></i><b>01</b><h3>Boiler</h3><p>稳定的压力，稳定的输出。</p></article>
    <article><i></i><b>02</b><h3>Gear</h3><p>每个齿轮都参与同一条证据链。</p></article>
    <article><i></i><b>03</b><h3>Gauge</h3><p>读数必须可以被复核。</p></article>
  </div>
</section>`,
  css: `.pl-steam{position:relative;min-height:100vh;overflow:hidden;padding:30px 42px;background:radial-gradient(700px 480px at 50% 0%,rgba(200,169,106,.16),transparent 60%),#241a12;color:#d8c49a;font-family:Georgia,"Songti SC",serif}
.pl-steam-gear{position:absolute;border-radius:50%;background:repeating-conic-gradient(from 0deg,#8a6a3a 0deg 8deg,#3a2a1c 8deg 16deg);opacity:.35}
.pl-steam-gear::after{content:"";position:absolute;inset:22%;border-radius:50%;background:#241a12;border:2px solid #8a6a3a}
.pl-steam-gear.is-a{right:-50px;top:-40px;width:220px;height:220px;animation:pl-steam-spin 30s linear infinite}
.pl-steam-gear.is-b{left:-60px;bottom:-60px;width:180px;height:180px;animation:pl-steam-spin 24s linear infinite reverse}
.pl-steam header{position:relative;z-index:1;display:flex;justify-content:space-between;padding:10px 12px;border:2px solid #8a6a3a;background:rgba(0,0,0,.2);box-shadow:inset 0 0 0 2px #241a12,inset 0 0 0 4px rgba(200,169,106,.35);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#c8a96a}
.pl-steam-hero{position:relative;z-index:1;margin-top:24px}
.pl-steam h1{font-size:clamp(2.6rem,6vw,5.2rem);line-height:.92;letter-spacing:.02em;color:#e4d2a8;text-shadow:2px 2px 0 #3a2a1c}
.pl-steam-hero p{max-width:360px;margin-top:12px;font-size:11px;line-height:1.7;color:#a68f6a}
.pl-steam-hero a{display:inline-block;margin-top:14px;padding:8px 14px;border:2px solid #c8a96a;background:#3a2a1c;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#e4d2a8;box-shadow:inset 0 1px 0 rgba(255,255,255,.2)}
.pl-steam-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-steam-cards article{position:relative;padding:16px;border:2px solid #8a6a3a;background:linear-gradient(180deg,#3a2a1c,#2a1e14);box-shadow:inset 0 0 0 3px #241a12,inset 0 0 0 4px rgba(200,169,106,.3),0 8px 18px rgba(0,0,0,.35)}
.pl-steam-cards i{position:absolute;top:6px;right:6px;width:7px;height:7px;border-radius:50%;background:#c8a96a;box-shadow:inset 0 1px 1px rgba(0,0,0,.5)}
.pl-steam-cards b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#c8a96a}
.pl-steam-cards h3{margin-top:7px;font-size:17px;color:#e4d2a8}
.pl-steam-cards p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#a68f6a}
@keyframes pl-steam-spin{to{transform:rotate(360deg)}}
@media (max-width:700px){.pl-steam{padding:22px}.pl-steam-cards{grid-template-columns:1fr}.pl-steam h1{font-size:2.4rem}}`,
  js: ``
},
{
  id: "page-deconstructivism",
  name: "解构主义页面",
  cat: "styles",
  desc: "断裂网格、斜切面板与错位标题的解构主义页面。",
  tags: ["风格页面", "解构主义", "断裂", "斜切"],
  prompt: "做一个解构主义风格页面：米白背景，黑色与红色，标题被拆成几块错位排列，部分被裁切；主视觉由多个斜切、旋转的矩形面板叠成，边缘互相穿插；三张内容卡也以不同角度错位，但保持可读。整体像建筑剖面被拆开重组，移动端减少斜切。",
  html: `<section class="pl-decon">
  <header><b>DECON / 03</b><span>STRUCTURE IS A VERB</span></header>
  <div class="pl-decon-hero">
    <h1><span>LOW</span><span>OXY</span><span>GEN</span></h1>
    <div class="pl-decon-shard is-a"></div>
    <div class="pl-decon-shard is-b"></div>
    <p>把结构拆开，再以证据重新拼回去。</p>
  </div>
  <div class="pl-decon-cards">
    <article><b>01</b><h3>Break</h3><p>先承认原有结构不再适用。</p></article>
    <article><b>02</b><h3>Shift</h3><p>把面板错开，让新的关系出现。</p></article>
    <article><b>03</b><h3>Rebuild</h3><p>用可复核的读数重新连接。</p></article>
  </div>
</section>`,
  css: `.pl-decon{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:#f0ede6;color:#151515;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.pl-decon header{display:flex;justify-content:space-between;padding-bottom:10px;border-bottom:2px solid #151515;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em}
.pl-decon-hero{position:relative;margin-top:18px;min-height:250px}
.pl-decon h1{position:relative;z-index:2;display:flex;gap:8px;font-size:clamp(3rem,8vw,6.6rem);line-height:.85;letter-spacing:-.06em;font-weight:800}
.pl-decon h1 span{display:block;padding:2px 8px;background:#151515;color:#f0ede6;transform:rotate(var(--r,0deg))}
.pl-decon h1 span:nth-child(1){--r:-4deg;clip-path:polygon(0 0,100% 0,92% 100%,0 88%)}
.pl-decon h1 span:nth-child(2){--r:3deg;background:#d23b2e;clip-path:polygon(8% 0,100% 6%,100% 100%,0 92%)}
.pl-decon h1 span:nth-child(3){--r:-2deg;clip-path:polygon(0 8%,94% 0,100% 92%,6% 100%)}
.pl-decon-shard{position:absolute;border:2px solid #151515;background:#fff;z-index:1}
.pl-decon-shard.is-a{right:8%;top:0;width:180px;height:150px;transform:rotate(8deg) skewY(-6deg);clip-path:polygon(0 0,100% 12%,88% 100%,0 86%)}
.pl-decon-shard.is-b{right:22%;top:80px;width:120px;height:120px;background:#d23b2e;transform:rotate(-10deg);clip-path:polygon(12% 0,100% 0,88% 100%,0 88%)}
.pl-decon-hero p{position:relative;z-index:2;max-width:300px;margin-top:16px;font-size:11px;line-height:1.7;color:#5a5a5a}
.pl-decon-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-decon-cards article{padding:14px;border:2px solid #151515;background:#fff;transform:rotate(-1.2deg)}
.pl-decon-cards article:nth-child(2){transform:rotate(1.6deg) translateY(8px)}
.pl-decon-cards article:nth-child(3){transform:rotate(-.6deg)}
.pl-decon-cards b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#d23b2e}
.pl-decon-cards h3{margin-top:7px;font-size:17px}
.pl-decon-cards p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#5a5a5a}
@media (max-width:700px){.pl-decon{padding:22px}.pl-decon h1{font-size:2.6rem;flex-wrap:wrap}.pl-decon-shard{display:none}.pl-decon-cards{grid-template-columns:1fr}.pl-decon-cards article{transform:none!important}}`,
  js: ``
},
{
  id: "page-pop-art",
  name: "波普艺术页面",
  cat: "styles",
  desc: "半调网点、粗黑描边与漫画分格的 Pop Art 页面。",
  tags: ["风格页面", "波普", "漫画", "半调"],
  prompt: "做一个 Pop Art 风格页面：亮黄背景叠加红色半调网点，标题用超粗漫画字，带黑色描边和红色投影；旁边一个带“POW!”的对话气泡。三张卡片做成漫画分格，粗黑边框、亮色底、半调阴影。整体高饱和、俏皮、像旧漫画封面。",
  html: `<section class="pl-pop">
  <header><b>POP! / 07</b><span>ISSUE 07 · 1964</span></header>
  <div class="pl-pop-hero">
    <h1>LOW<br>OXYGEN!</h1>
    <div class="pl-pop-bubble">POW!</div>
    <p>稳定表达，也可以是一件很响亮的事。</p>
  </div>
  <div class="pl-pop-cards">
    <article><span>01</span><h3>BAM</h3><p>读数要清晰，像漫画的分格。</p></article>
    <article><span>02</span><h3>ZAP</h3><p>对比要强烈，结论要直接。</p></article>
    <article><span>03</span><h3>WOW</h3><p>好的结果值得被看见。</p></article>
  </div>
</section>`,
  css: `.pl-pop{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:#ffd23f;color:#111;font-family:"Arial Black","Helvetica Neue",Arial,sans-serif}
.pl-pop::before{content:"";position:absolute;inset:0;opacity:.28;background-image:radial-gradient(#e63946 1.5px,transparent 1.5px);background-size:12px 12px}
.pl-pop header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:4px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.pl-pop-hero{position:relative;z-index:1;margin-top:20px}
.pl-pop h1{font-size:clamp(3.4rem,8vw,7rem);line-height:.82;letter-spacing:-.04em;color:#fff;-webkit-text-stroke:3px #111;text-shadow:6px 6px 0 #e63946}
.pl-pop-bubble{position:absolute;right:6%;top:10px;display:grid;place-items:center;width:110px;height:90px;border:4px solid #111;border-radius:50%;background:#fff;font-size:26px;font-weight:900;transform:rotate(8deg);box-shadow:5px 5px 0 #111}
.pl-pop-bubble::after{content:"";position:absolute;left:12px;bottom:-18px;border:10px solid transparent;border-top-color:#111;transform:rotate(-14deg)}
.pl-pop-hero p{max-width:320px;margin-top:14px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:11px;font-weight:600;line-height:1.6}
.pl-pop-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-pop-cards article{padding:14px;border:4px solid #111;background:#fff;box-shadow:6px 6px 0 #111;transform:rotate(-1deg)}
.pl-pop-cards article:nth-child(2){background:#a8e6ff;transform:rotate(1.2deg)}
.pl-pop-cards article:nth-child(3){background:#ffb3c1;transform:rotate(-.8deg)}
.pl-pop-cards span{font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-pop-cards h3{margin-top:6px;font-size:22px;letter-spacing:-.02em}
.pl-pop-cards p{margin-top:4px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:9.5px;line-height:1.55}
@media (max-width:700px){.pl-pop{padding:22px}.pl-pop-bubble{width:80px;height:68px;font-size:18px}.pl-pop-cards{grid-template-columns:1fr}.pl-pop-cards article{transform:none!important}}`,
  js: ``
},
{
  id: "page-vhs",
  name: "VHS 录像带页面",
  cat: "styles",
  desc: "时间码、跟踪线与色差组成的 VHS 录像带页面。",
  tags: ["风格页面", "VHS", "录像带", "时间码"],
  prompt: "做一个 VHS 录像带风格页面：深蓝黑画面，四角有摄像机取景框与 REC 红点，右上角是 PLAY ▶ 和时间码 00:12:34；标题有青/品红色差与轻微抖动，画面覆盖跟踪线和噪点。三张卡片像录像带标签，带手写编号和磨损边缘。整体像 90 年代录像回放。",
  html: `<section class="pl-vhs">
  <div class="pl-vhs-frame"></div>
  <header><span>PLAY ▶</span><span>SP · 00:12:34</span></header>
  <div class="pl-vhs-hero"><h1>LOW<br>OXYGEN</h1><p>REC 1998 · 低氧实验录像 / 未剪辑</p><a href="#">PLAY TAPE</a></div>
  <div class="pl-vhs-cards">
    <article><span>01</span><h3>Tracking</h3><p>画面在抖动，数据仍然可读。</p></article>
    <article><span>02</span><h3>Chroma</h3><p>色差是磁带的签名。</p></article>
    <article><span>03</span><h3>Rewind</h3><p>回到原始读数。</p></article>
  </div>
  <footer><span>● REC</span><span>CH 03</span></footer>
</section>`,
  css: `.pl-vhs{position:relative;min-height:100vh;overflow:hidden;padding:28px 42px;background:#0a0c1a;color:#e8f4ff;font-family:ui-monospace,Consolas,"Courier New",monospace}
.pl-vhs::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.05) 0 1px,transparent 1px 3px)}
.pl-vhs-frame{position:absolute;inset:12px;border:1px solid rgba(232,244,255,.3);pointer-events:none}
.pl-vhs-frame::before,.pl-vhs-frame::after{content:"";position:absolute;width:26px;height:26px;border:2px solid rgba(232,244,255,.45)}
.pl-vhs-frame::before{left:-1px;top:-1px;border-right:0;border-bottom:0}
.pl-vhs-frame::after{right:-1px;bottom:-1px;border-left:0;border-top:0}
.pl-vhs header{position:relative;z-index:1;display:flex;justify-content:space-between;padding:4px 8px;font-size:9px;letter-spacing:.16em;color:#7ee0dd}
.pl-vhs-hero{position:relative;z-index:1;margin-top:30px}
.pl-vhs h1{font-size:clamp(3rem,8vw,7rem);line-height:.88;letter-spacing:-.04em;color:#fff;text-shadow:3px 0 #ff2bd6,-3px 0 #00f0ff;animation:pl-vhs-jitter 3s steps(2) infinite}
.pl-vhs-hero p{margin-top:14px;font-size:10px;color:#8fb7c9}
.pl-vhs-hero a{display:inline-block;margin-top:14px;padding:8px 14px;border:1px solid #7ee0dd;font-size:9px;letter-spacing:.16em;color:#7ee0dd}
.pl-vhs-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-vhs-cards article{padding:14px;border:1px solid rgba(232,244,255,.22);background:rgba(10,20,40,.7);box-shadow:2px 2px 0 rgba(255,43,214,.35)}
.pl-vhs-cards span{font-size:8px;color:#ff2bd6}
.pl-vhs-cards h3{margin-top:7px;font-size:16px}
.pl-vhs-cards p{margin-top:4px;font-size:9px;line-height:1.55;color:#8fb7c9}
.pl-vhs footer{position:relative;z-index:1;display:flex;justify-content:space-between;margin-top:26px;padding-top:8px;border-top:1px solid rgba(232,244,255,.2);font-size:8px;color:#ff5f57}
@keyframes pl-vhs-jitter{0%,100%{transform:translate(0)}48%{transform:translate(1px,-1px)}50%{transform:translate(-1px,1px)}52%{transform:translate(0)}}
@media (max-width:700px){.pl-vhs{padding:20px}.pl-vhs-cards{grid-template-columns:1fr}.pl-vhs h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "page-psychedelic",
  name: "迷幻页面",
  cat: "styles",
  desc: "旋转色场、波浪边框与扭曲标题的 Psychedelic 页面。",
  tags: ["风格页面", "迷幻", "旋涡", "高饱和"],
  prompt: "做一个 Psychedelic 风格页面：高饱和的旋转 conic-gradient 背景，标题用圆润粗体和多重彩色阴影，边缘像在融化；三张卡片是波浪形圆角，边框和底色都带彩虹渐变，轻微旋转。整体像 60 年代迷幻海报，移动端降低背景复杂度。",
  html: `<section class="pl-psy">
  <header><b>PSY / 07</b><span>EXPAND YOUR MIND</span></header>
  <div class="pl-psy-hero"><h1>LOW<br><em>OXYGEN</em></h1><p>在旋转的颜色里，找到稳定的那一个读数。</p><a href="#"> dive in </a></div>
  <div class="pl-psy-cards">
    <article><b>01</b><h3>Swirl</h3><p>让颜色先于语言发生。</p></article>
    <article><b>02</b><h3>Melt</h3><p>边缘可以柔软，结论必须清晰。</p></article>
    <article><b>03</b><h3>Float</h3><p>在噪声里保持重心。</p></article>
  </div>
</section>`,
  css: `.pl-psy{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:conic-gradient(from 40deg at 70% 30%,#ff5d8f,#ffd23f,#7ee0dd,#6c5ce7,#ff5d8f);color:#1a0b2e;font-family:"Arial Rounded MT Bold","Helvetica Neue",Arial,sans-serif}
.pl-psy::before{content:"";position:absolute;inset:-20%;background:repeating-conic-gradient(from 0deg at 50% 50%,rgba(255,255,255,.18) 0deg 8deg,transparent 8deg 16deg);animation:pl-psy-spin 30s linear infinite}
.pl-psy header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #1a0b2e;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em}
.pl-psy-hero{position:relative;z-index:1;margin-top:20px}
.pl-psy h1{font-size:clamp(3.2rem,8vw,7rem);line-height:.84;letter-spacing:-.04em;color:#fff;text-shadow:4px 4px 0 #ff5d8f,-4px -4px 0 #7ee0dd,8px 8px 0 rgba(26,11,46,.25)}
.pl-psy h1 em{font-style:normal;color:#ffd23f}
.pl-psy-hero p{max-width:340px;margin-top:14px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:11px;line-height:1.6}
.pl-psy-hero a{display:inline-block;margin-top:14px;padding:8px 16px;border:2px solid #1a0b2e;border-radius:999px;background:#fff;font-size:10px;font-weight:700;color:#1a0b2e}
.pl-psy-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-psy-cards article{padding:16px;border:2px solid #1a0b2e;border-radius:38% 62% 55% 45% / 45% 38% 62% 55%;background:rgba(255,255,255,.78);transform:rotate(-2deg)}
.pl-psy-cards article:nth-child(2){transform:rotate(2deg);border-radius:55% 45% 38% 62% / 62% 55% 45% 38%}
.pl-psy-cards b{font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-psy-cards h3{margin-top:7px;font-size:17px}
.pl-psy-cards p{margin-top:4px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:9.5px;line-height:1.5}
@keyframes pl-psy-spin{to{transform:rotate(360deg)}}
@media (max-width:700px){.pl-psy{padding:22px}.pl-psy-cards{grid-template-columns:1fr}.pl-psy-cards article{transform:none!important}.pl-psy h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "page-dopamine",
  name: "多巴胺页面",
  cat: "styles",
  desc: "高饱和色块、圆润几何与轻快排版的 Dopamine 页面。",
  tags: ["风格页面", "多巴胺", "高饱和", "活泼"],
  prompt: "做一个 Dopamine Design 风格页面：奶油白底上放粉色、亮蓝、柠檬黄、橙色的超大圆角和几何块，标题用圆润粗体，按钮像糖果；三张卡片颜色各异，带弹性圆角、粗描边和轻微错位。整体轻快、明亮、让人愉悦，移动端减少装饰块。",
  html: `<section class="pl-dopa">
  <div class="pl-dopa-blob is-a"></div>
  <div class="pl-dopa-blob is-b"></div>
  <header><b>DOPAMINE / 07</b><span>FEEL GOOD DESIGN</span></header>
  <div class="pl-dopa-hero"><h1>FEEL<br>GOOD</h1><p>让每一次点击都有一点小小的奖励。</p><a href="#">LET'S GO</a></div>
  <div class="pl-dopa-cards">
    <article><span>01</span><h3>Pop</h3><p>颜色先打招呼。</p></article>
    <article><span>02</span><h3>Bounce</h3><p>反馈轻快，但不打扰。</p></article>
    <article><span>03</span><h3>Smile</h3><p>让复杂的事看起来可接近。</p></article>
  </div>
</section>`,
  css: `.pl-dopa{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:#fffaf0;color:#1b1b1b;font-family:"Arial Rounded MT Bold","Helvetica Neue",Arial,sans-serif}
.pl-dopa-blob{position:absolute;border-radius:50%;filter:blur(1px)}
.pl-dopa-blob.is-a{right:-60px;top:-60px;width:280px;height:280px;background:#ff8fb1}
.pl-dopa-blob.is-b{left:-80px;bottom:-90px;width:260px;height:260px;background:#7ee0dd}
.pl-dopa header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:3px solid #1b1b1b;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em}
.pl-dopa-hero{position:relative;z-index:1;margin-top:20px}
.pl-dopa h1{font-size:clamp(3.4rem,8vw,7rem);line-height:.84;letter-spacing:-.05em;color:#1b1b1b;text-shadow:5px 5px 0 #ffd23f}
.pl-dopa-hero p{max-width:320px;margin-top:12px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:12px;font-weight:600;line-height:1.6}
.pl-dopa-hero a{display:inline-block;margin-top:14px;padding:9px 18px;border:3px solid #1b1b1b;border-radius:999px;background:#ffd23f;font-size:10px;font-weight:800;color:#1b1b1b;box-shadow:4px 4px 0 #1b1b1b;transform:rotate(-2deg)}
.pl-dopa-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-dopa-cards article{padding:16px;border:3px solid #1b1b1b;border-radius:22px 8px 22px 8px;background:#ff8fb1;box-shadow:5px 5px 0 #1b1b1b;transform:rotate(-1deg)}
.pl-dopa-cards article:nth-child(2){background:#7ee0dd;border-radius:8px 22px 8px 22px;transform:rotate(1.2deg)}
.pl-dopa-cards article:nth-child(3){background:#ffd23f;transform:rotate(-.6deg)}
.pl-dopa-cards span{font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-dopa-cards h3{margin-top:7px;font-size:19px}
.pl-dopa-cards p{margin-top:4px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:9.5px;line-height:1.5}
@media (max-width:700px){.pl-dopa{padding:22px}.pl-dopa-cards{grid-template-columns:1fr}.pl-dopa-cards article{transform:none!important}.pl-dopa h1{font-size:2.9rem}}`,
  js: ``
},
{
  id: "page-y2k",
  name: "Y2K 千禧页面",
  cat: "styles",
  desc: "镀铬字、气泡与银色渐变的 Y2K 千禧美学页面。",
  tags: ["风格页面", "Y2K", "千禧", "镀铬"],
  prompt: "做一个 Y2K 千禧美学页面：银蓝渐变背景，漂浮着半透明气泡和星形闪光；标题是镀铬渐变字，带白色高光和蓝色投影；三张卡片像早期塑料电子产品，银灰底、圆角、反光边框和像素小标签。整体未来感、塑料感、带一点可爱。",
  html: `<section class="pl-y2k">
  <div class="pl-y2k-bubble is-a"></div>
  <div class="pl-y2k-bubble is-b"></div>
  <div class="pl-y2k-bubble is-c"></div>
  <header><b>Y2K / 2000</b><span>FUTURE IS SHINY</span></header>
  <div class="pl-y2k-hero"><h1>LOW<br>OXYGEN</h1><p>欢迎来到下一个千年，表达仍然稳定。</p><a href="#">ENTER 2000</a></div>
  <div class="pl-y2k-cards">
    <article><span>01</span><h3>Chrome</h3><p>一切都可以反光。</p></article>
    <article><span>02</span><h3>Bubble</h3><p>轻盈、透明、悬浮。</p></article>
    <article><span>03</span><h3>Pixel</h3><p>小小的像素也有未来感。</p></article>
  </div>
</section>`,
  css: `.pl-y2k{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:linear-gradient(160deg,#d7e9ff,#a8c8ff 45%,#e6d7ff 100%);color:#1a2a5a;font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.pl-y2k-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(168,200,255,.25) 45%,rgba(255,255,255,.1));border:1px solid rgba(255,255,255,.8);box-shadow:inset -8px -8px 16px rgba(120,160,255,.2)}
.pl-y2k-bubble.is-a{right:8%;top:12%;width:120px;height:120px}
.pl-y2k-bubble.is-b{right:22%;top:38%;width:60px;height:60px}
.pl-y2k-bubble.is-c{left:8%;bottom:12%;width:90px;height:90px}
.pl-y2k header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid rgba(26,42,90,.4);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em}
.pl-y2k-hero{position:relative;z-index:1;margin-top:20px}
.pl-y2k h1{font-size:clamp(3.2rem,8vw,7rem);line-height:.86;letter-spacing:-.04em;background:linear-gradient(180deg,#fff 0%,#d7e9ff 30%,#7e9fe0 55%,#fff 70%,#5f7fc9 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 3px 0 rgba(95,127,201,.5))}
.pl-y2k-hero p{max-width:320px;margin-top:12px;font-size:11px;line-height:1.6;color:#3a4f8a}
.pl-y2k-hero a{display:inline-block;margin-top:14px;padding:8px 16px;border:1px solid #fff;border-radius:999px;background:linear-gradient(180deg,#fff,#c8d8ff);font-family:ui-monospace,Consolas,monospace;font-size:9px;font-weight:700;color:#1a2a5a;box-shadow:0 4px 10px rgba(95,127,201,.3),inset 0 1px 0 #fff}
.pl-y2k-cards{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-y2k-cards article{padding:16px;border:1px solid #fff;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,.9),rgba(214,230,255,.78));box-shadow:inset 0 1px 0 #fff,0 8px 18px rgba(95,127,201,.18)}
.pl-y2k-cards span{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#5f7fc9}
.pl-y2k-cards h3{margin-top:7px;font-size:17px;color:#1a2a5a}
.pl-y2k-cards p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#4a5f9a}
@media (max-width:700px){.pl-y2k{padding:22px}.pl-y2k-cards{grid-template-columns:1fr}.pl-y2k h1{font-size:2.8rem}}`,
  js: ``
}
);
