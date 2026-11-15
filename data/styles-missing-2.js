/* 补齐缺失主义：有机自然、新粗野、玻璃拟态 + 包豪斯按钮、构成主义卡、侘寂卡 */
window.PLUGINS.push(
{
  id: "page-organic", name: "有机自然页面", cat: "styles",
  desc: "奶油底、绿色有机形状与柔和曲线的 Organic 页面。",
  tags: ["风格页面", "有机", "自然", "曲线"],
  prompt: "做一个有机自然风格页面：奶油底色，深浅绿色，主视觉是几个流动的有机 blob 形状和抽象叶片；标题用圆润衬线，三张卡片边缘是不规则的柔和曲线，配一张自然质感的图片。整体安静、生长感、没有硬边，移动端减少装饰。",
  html: `<section class="pl-og">
  <div class="pl-og-blob is-a"></div><div class="pl-og-blob is-b"></div>
  <header><span>ORGANIC / 01</span><span>GROW WITH CARE</span></header>
  <div class="pl-og-hero"><h1>GROW<br><em>WITH CARE</em></h1><p>让方法像植物一样生长，让证据像根系一样可追溯。</p></div>
  <div class="pl-og-grid"><article><b>01</b><h3>Root</h3><p>先建立可复核的根系。</p></article><article><b>02</b><h3>Leaf</h3><p>让每个结论都能展开。</p></article><article><b>03</b><h3>Seed</h3><p>把方法留给下一位使用者。</p></article></div>
</section>`,
  css: `.pl-og{position:relative;min-height:100vh;overflow:hidden;padding:32px 46px;background:linear-gradient(165deg,#f6f3e8,#dfe8d6 60%,#c8d8bd);color:#2c3a26;font-family:Georgia,"Songti SC",serif}
.pl-og-blob{position:absolute;background:rgba(90,120,70,.16);border-radius:60% 40% 55% 45% / 45% 60% 40% 55%}
.pl-og-blob.is-a{right:-70px;top:-60px;width:320px;height:260px;transform:rotate(-18deg)}
.pl-og-blob.is-b{left:-90px;bottom:-90px;width:280px;height:240px;background:rgba(90,120,70,.12);transform:rotate(24deg)}
.pl-og header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(44,58,38,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-og-hero{position:relative;z-index:1;margin-top:22px}
.pl-og h1{font-size:clamp(3rem,7vw,6rem);line-height:.9;font-weight:400;letter-spacing:-.03em}
.pl-og h1 em{font-style:italic;color:#4f7040}
.pl-og-hero p{max-width:380px;margin-top:12px;font-size:12px;line-height:1.8;color:#5a6a50}
.pl-og-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-og-grid article{padding:18px;background:rgba(255,255,255,.55);border-radius:38% 62% 45% 55% / 55% 38% 62% 45%}
.pl-og-grid article:nth-child(2){border-radius:55% 45% 62% 38% / 38% 55% 45% 62%}
.pl-og-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#4f7040}
.pl-og-grid h3{margin-top:8px;font-size:18px;font-weight:400}
.pl-og-grid p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#5a6a50}
@media (max-width:700px){.pl-og{padding:24px}.pl-og-grid{grid-template-columns:1fr}.pl-og-grid article{border-radius:18px}.pl-og h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "page-neubrutalism", name: "新粗野主义页面", cat: "styles",
  desc: "亮粉、黄黑粗边框与硬阴影的 Neubrutalism 页面。",
  tags: ["风格页面", "新粗野主义", "硬阴影", "亮色"],
  prompt: "做一个新粗野主义页面：奶油底，亮粉与柠檬黄，所有元素都有 3px 黑边和 8px 硬阴影；标题用超粗无衬线，卡片以不同角度错位，悬停时向左上移动。整体比传统粗野主义更明亮、更玩味，移动端减少旋转。",
  html: `<section class="pl-nb">
  <header><b>NEU / BRUTAL</b><span>LOUD BUT CLEAR</span></header>
  <h1>LOUD<br><em>BUT CLEAR</em></h1>
  <div class="pl-nb-grid"><article><b>01</b><h3>Say it</h3><p>先把结论说清楚。</p></article><article><b>02</b><h3>Show it</h3><p>再把证据摆出来。</p></article><article><b>03</b><h3>Ship it</h3><p>最后把它变成可复用的东西。</p></article></div>
</section>`,
  css: `.pl-nb{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 44px;background:#fff8e7;color:#111;font-family:"Arial Black","Helvetica Neue",Arial,sans-serif}
.pl-nb header{display:flex;justify-content:space-between;padding:6px 8px;border:3px solid #111;background:#ffd23f;box-shadow:6px 6px 0 #111;font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-nb h1{margin-top:24px;font-size:clamp(3rem,8vw,7rem);line-height:.82;letter-spacing:-.04em;text-shadow:5px 5px 0 #ff5d8f}
.pl-nb h1 em{font-style:normal;color:#ff5d8f;-webkit-text-stroke:2px #111;text-shadow:5px 5px 0 #ffd23f}
.pl-nb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:26px}
.pl-nb-grid article{padding:16px;border:3px solid #111;background:#fff;box-shadow:8px 8px 0 #111;transform:rotate(-1.2deg);transition:transform .16s,box-shadow .16s}
.pl-nb-grid article:nth-child(2){background:#d8ff00;transform:rotate(1.4deg)}
.pl-nb-grid article:nth-child(3){background:#ffb8e6;transform:rotate(-.6deg)}
.pl-nb-grid article:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 #111}
.pl-nb-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-nb-grid h3{margin-top:7px;font-size:20px}
.pl-nb-grid p{margin-top:4px;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:9.5px;line-height:1.55}
@media (max-width:700px){.pl-nb{padding:24px}.pl-nb-grid{grid-template-columns:1fr}.pl-nb-grid article{transform:none!important}}`,
  js: ``
},
{
  id: "page-glassmorphism", name: "玻璃拟态页面", cat: "styles",
  desc: "渐变网格、磨砂玻璃面板与细高光边的 Glassmorphism 页面。",
  tags: ["风格页面", "玻璃拟态", "磨砂", "渐变"],
  prompt: "做一个玻璃拟态页面：深紫蓝渐变网格背景，漂浮几个模糊光斑；中央是一块半透明磨砂玻璃面板，带 1px 白色高光边和背景模糊；标题用清爽无衬线，三张玻璃卡片叠在背景上。整体通透、层次清楚，移动端降低模糊强度。",
  html: `<section class="pl-gm">
  <div class="pl-gm-orb is-a"></div><div class="pl-gm-orb is-b"></div>
  <header><span>GLASS / 07</span><span>SEE THROUGH THE NOISE</span></header>
  <div class="pl-gm-hero"><h1>SEE<br>THROUGH<br><em>THE NOISE</em></h1><p>让层级可见，让数据保持清晰。</p></div>
  <div class="pl-gm-grid"><article><b>01</b><h3>Layer</h3><p>透明，但不丢失结构。</p></article><article><b>02</b><h3>Blur</h3><p>降低噪声，保留信号。</p></article><article><b>03</b><h3>Light</h3><p>用边缘高光提示层级。</p></article></div>
</section>`,
  css: `.pl-gm{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:radial-gradient(700px 500px at 20% 20%,#6c5ce7,transparent 60%),radial-gradient(600px 500px at 85% 70%,#0f8b8d,transparent 60%),#120b2e;color:#f4f7ff;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-gm-orb{position:absolute;border-radius:50%;filter:blur(30px);opacity:.55}
.pl-gm-orb.is-a{right:8%;top:8%;width:220px;height:220px;background:#ff5d8f}
.pl-gm-orb.is-b{left:12%;bottom:6%;width:260px;height:260px;background:#7ee0dd}
.pl-gm header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(244,247,255,.22);font-family:ui-monospace,Consolas,monospace;font-size:8px;color:rgba(244,247,255,.65)}
.pl-gm-hero{position:relative;z-index:1;margin-top:20px;padding:24px 26px;border:1px solid rgba(255,255,255,.32);border-radius:18px;background:rgba(255,255,255,.08);backdrop-filter:blur(16px);box-shadow:inset 0 1px 0 rgba(255,255,255,.3)}
.pl-gm h1{font-size:clamp(2.8rem,6.6vw,6rem);line-height:.86;letter-spacing:-.04em}
.pl-gm h1 em{font-style:normal;color:#7ee0dd}
.pl-gm-hero p{max-width:380px;margin-top:10px;font-size:11px;line-height:1.7;color:rgba(244,247,255,.7)}
.pl-gm-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.pl-gm-grid article{padding:14px;border:1px solid rgba(255,255,255,.25);border-radius:14px;background:rgba(255,255,255,.07);backdrop-filter:blur(12px);box-shadow:inset 0 1px 0 rgba(255,255,255,.25)}
.pl-gm-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#7ee0dd}
.pl-gm-grid h3{margin-top:6px;font-size:16px}
.pl-gm-grid p{margin-top:4px;font-size:9.5px;line-height:1.55;color:rgba(244,247,255,.65)}
@media (max-width:700px){.pl-gm{padding:24px}.pl-gm-grid{grid-template-columns:1fr}.pl-gm-hero{padding:18px}}`,
  js: ``
},
{
  id: "btn-bauhaus", name: "包豪斯按钮", cat: "buttons",
  desc: "红圆、蓝方、黄胶囊的几何按钮组。",
  tags: ["按钮", "包豪斯", "几何", "三原色"],
  prompt: "做一个包豪斯风格按钮组：米白背景，三枚几何按钮——红色圆形、蓝色方形、黄色胶囊；每枚有黑色细边、无渐变、无阴影，标签是粗体无衬线。悬停时颜色反转或轻微旋转。整体像设计学院的练习，移动端纵向排列。",
  html: `<div class="pl-bb">
  <span>BAUHAUS / BUTTONS</span>
  <div><button class="is-circle" type="button">RUN</button><button class="is-square" type="button">STOP</button><button class="is-pill" type="button">GO →</button></div>
</div>`,
  css: `.pl-bb{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:26px;background:#f4f1e8;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.pl-bb>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#555}
.pl-bb>div{display:flex;align-items:center;gap:18px}
.pl-bb button{border:2px solid #111;font-family:inherit;font-size:11px;font-weight:700;letter-spacing:.04em;cursor:pointer;transition:transform .16s,background .16s,color .16s}
.pl-bb .is-circle{width:92px;height:92px;border-radius:50%;background:#e23a2e;color:#fff}
.pl-bb .is-square{width:92px;height:92px;background:#1e4fa3;color:#fff}
.pl-bb .is-pill{min-width:120px;height:46px;border-radius:999px;background:#f2c300;color:#111}
.pl-bb button:hover{transform:rotate(-4deg)}
.pl-bb .is-circle:hover{background:#fff;color:#e23a2e}
.pl-bb .is-square:hover{background:#fff;color:#1e4fa3}
.pl-bb .is-pill:hover{background:#111;color:#f2c300}
@media (max-width:560px){.pl-bb>div{flex-direction:column}}`,
  js: ``
},
{
  id: "card-constructivism", name: "构成主义卡片", cat: "cards",
  desc: "红黑斜切、巨型编号的 Constructivism 海报卡。",
  tags: ["卡片", "构成主义", "斜切", "海报"],
  prompt: "做一张构成主义风格卡片：米白卡面，右上角红色斜块，黑色巨型编号 07 被斜切，标题沿对角线排列，底部是三条短线信息。无圆角、无阴影，像一张 1920 年代海报，移动端缩小编号。",
  html: `<div class="pl-cc-wrap"><article class="pl-cc"><div class="pl-cc-red"></div><span>CONSTRUCT / 07</span><b>07</b><h2>BUILD<br>THE<br>EVIDENCE</h2><footer><span>LOW O2</span><span>2026</span><span>VERIFY</span></footer></article></div>`,
  css: `.pl-cc-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:#f2ede3}
.pl-cc{position:relative;width:min(350px,100%);min-height:470px;overflow:hidden;padding:22px;border:2px solid #111;background:#f2ede3;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.pl-cc-red{position:absolute;right:-30%;top:-10%;width:80%;height:70%;background:#d23b2e;transform:rotate(24deg)}
.pl-cc>span{position:relative;z-index:1;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em}
.pl-cc>b{position:relative;z-index:1;display:block;margin-top:10px;font-size:120px;line-height:.8;letter-spacing:-.08em;transform:rotate(-4deg)}
.pl-cc h2{position:relative;z-index:1;margin-top:18px;font-size:34px;line-height:.9;letter-spacing:-.04em;transform:rotate(-2deg)}
.pl-cc footer{position:absolute;left:22px;right:22px;bottom:18px;z-index:1;display:flex;justify-content:space-between;padding-top:8px;border-top:2px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:7px}
@media (max-width:480px){.pl-cc{min-height:420px}.pl-cc>b{font-size:90px}.pl-cc h2{font-size:28px}}`,
  js: ``
},
{
  id: "card-wabi-sabi", name: "侘寂商品卡", cat: "cards",
  desc: "粗纸、土色、不对称构图的 Wabi-sabi 商品卡。",
  tags: ["卡片", "侘寂", "土色", "留白"],
  prompt: "做一张侘寂风格商品卡：米灰粗纸背景，左侧一张偏灰的方形产品图，右侧是不对称的留白、衬线商品名、短说明和价格；用一条细线分隔，卡片轻微旋转，没有阴影和高饱和颜色。整体安静、克制，移动端上下排列。",
  html: `<div class="pl-wc-wrap"><article class="pl-wc"><figure><img src="assets/img/plugins/gallery-06.jpg" alt="静水" loading="lazy"></figure><div><span>余白 / 07</span><h2>静水</h2><p>为低氧环境设计的培养容器。保留不完美的质感。</p><b>¥ 268</b></div></article></div>`,
  css: `.pl-wc-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:#e6e0d3;font-family:Georgia,"Songti SC",serif;color:#3a352b}
.pl-wc{display:grid;grid-template-columns:.85fr 1.15fr;gap:26px;width:min(560px,100%);padding:18px;border:1px solid rgba(58,53,43,.28);background:#f2ede3;transform:rotate(-.6deg)}
.pl-wc figure{margin:0}
.pl-wc img{width:100%;height:240px;object-fit:cover;filter:sepia(.25) saturate(.55) contrast(.95)}
.pl-wc>div{padding:10px 8px 6px 0;display:flex;flex-direction:column;justify-content:center}
.pl-wc span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#7a7160}
.pl-wc h2{margin-top:10px;font-size:34px;font-weight:400;letter-spacing:.04em}
.pl-wc p{max-width:230px;margin-top:8px;font-size:11px;line-height:1.8;color:#6b6253}
.pl-wc b{display:block;margin-top:18px;padding-top:10px;border-top:1px solid rgba(58,53,43,.25);font-family:ui-monospace,Consolas,monospace;font-size:11px;font-weight:400}
@media (max-width:600px){.pl-wc{grid-template-columns:1fr;transform:none}.pl-wc img{height:190px}}`,
  js: ``
}
);
