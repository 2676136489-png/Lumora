/* 补齐缺失主义：新艺术卡、复古未来首屏、Frutiger Aero 面板、有机卡、新粗野按钮、玻璃卡 */
window.PLUGINS.push(
{
  id: "card-art-nouveau", name: "新艺术卡片", cat: "cards",
  desc: "金色拱形边框、植物曲线与衬线排版的 Art Nouveau 卡。",
  tags: ["卡片", "新艺术", "金色", "拱形"],
  prompt: "做一张新艺术风格卡片：深绿色背景，金色细线拱形边框，边框上缠绕抽象植物曲线；内部是一张偏灰的图片、衬线标题和两行说明，底部有金色细线和编号。整体优雅、流动，移动端缩窄卡片。",
  html: `<div class="pl-ac-wrap"><article class="pl-ac"><div class="pl-ac-frame"></div><img src="assets/img/plugins/gallery-03.jpg" alt="植物" loading="lazy"><span>ART NOUVEAU / 07</span><h2>生长<br>在曲线里</h2><p>让结构像植物一样延伸，让证据像年轮一样留下。</p><footer>1900 · LUMEN</footer></article></div>`,
  css: `.pl-ac-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:radial-gradient(600px 420px at 50% 20%,rgba(200,169,106,.12),transparent 60%),#0f2a22}
.pl-ac{position:relative;width:min(350px,100%);padding:24px;border:1px solid rgba(200,169,106,.55);background:#123128;color:#d9c08a;font-family:Georgia,"Songti SC",serif;text-align:center}
.pl-ac-frame{position:absolute;inset:10px;border:1px solid rgba(200,169,106,.35);border-radius:120px 120px 0 0;pointer-events:none}
.pl-ac img{width:100%;height:190px;object-fit:cover;border-radius:90px 90px 0 0;filter:sepia(.35) saturate(.7)}
.pl-ac>span{display:block;margin-top:14px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#a88f5c}
.pl-ac h2{margin-top:8px;font-size:30px;font-weight:400;line-height:1.1;letter-spacing:.03em}
.pl-ac p{max-width:240px;margin:10px auto 0;font-size:10px;line-height:1.75;color:#a68f6a}
.pl-ac footer{margin-top:16px;padding-top:8px;border-top:1px solid rgba(200,169,106,.35);font-family:ui-monospace,Consolas,monospace;font-size:7px;letter-spacing:.14em;color:#8c7648}`,
  js: ``
},
{
  id: "hero-retro-futurism", name: "复古未来首屏", cat: "sections",
  desc: "原子环、星芒与粉彩渐变的太空时代首屏。",
  tags: ["首屏", "复古未来", "原子", "太空时代"],
  prompt: "做一个复古未来主义首屏：粉彩青绿到橙色的天空渐变，右侧是巨大的原子环和星芒，左侧是圆润无衬线大标题、短说明和两枚胶囊按钮；底部有三条太空舱式的数据。整体乐观、干净、1950/60 年代科幻感，移动端缩小原子环。",
  html: `<section class="pl-rh">
  <div class="pl-rh-atom"><i></i><i></i><i></i><b></b></div>
  <header><span>RETRO FUTURE / 1962</span><span>ORBIT LOW OXYGEN</span></header>
  <div class="pl-rh-copy"><h1>TOMORROW<br>IS LOW<br><em>OXYGEN</em></h1><p>用今天的证据，设计明天的稳定表达。</p><div><a href="#">进入轨道</a><a href="#">查看数据</a></div></div>
  <footer><div><b>2%</b><span>O2</span></div><div><b>3.2×</b><span>EXPRESSION</span></div><div><b>8</b><span>BATCHES</span></div></footer>
</section>`,
  css: `.pl-rh{position:relative;min-height:100vh;overflow:hidden;display:flex;flex-direction:column;justify-content:center;padding:30px 44px;background:linear-gradient(165deg,#e8f7f2,#cfe9e4 55%,#f7d9b8);color:#1e3a3a;font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.pl-rh-atom{position:absolute;right:4%;top:14%;width:320px;height:320px}
.pl-rh-atom i{position:absolute;inset:0;border:1px solid rgba(30,58,58,.35);border-radius:50%;transform:scaleY(.38)}
.pl-rh-atom i:nth-child(2){transform:rotate(60deg) scaleY(.38)}
.pl-rh-atom i:nth-child(3){transform:rotate(120deg) scaleY(.38)}
.pl-rh-atom b{position:absolute;left:50%;top:50%;width:28px;height:28px;margin:-14px;border-radius:50%;background:#d9773a}
.pl-rh header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(30,58,58,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-rh-copy{position:relative;z-index:1;margin-top:18px;max-width:560px}
.pl-rh h1{font-size:clamp(3rem,7vw,6.4rem);line-height:.86;letter-spacing:-.04em}
.pl-rh h1 em{font-style:normal;color:#d9773a}
.pl-rh-copy p{max-width:360px;margin-top:12px;font-size:12px;line-height:1.7;color:#4a6a66}
.pl-rh-copy>div{display:flex;gap:8px;margin-top:18px}
.pl-rh-copy a{padding:9px 14px;border:1px solid #1e3a3a;border-radius:999px;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#1e3a3a}
.pl-rh-copy a:first-child{background:#1e3a3a;color:#e8f7f2}
.pl-rh footer{position:relative;z-index:1;display:flex;gap:34px;margin-top:26px;padding-top:12px;border-top:1px solid rgba(30,58,58,.25)}
.pl-rh footer b{display:block;font-size:20px;font-weight:400}
.pl-rh footer span{display:block;font-family:ui-monospace,Consolas,monospace;font-size:7px;color:#4a6a66}
@media (max-width:700px){.pl-rh{padding:24px}.pl-rh-atom{width:190px;height:190px;right:-40px;top:8%}.pl-rh h1{font-size:2.8rem}}`,
  js: ``
},
{
  id: "panel-frutiger-aero", name: "Frutiger Aero 面板", cat: "sections",
  desc: "天空渐变、玻璃高光与水滴气泡的数据面板。",
  tags: ["面板", "Frutiger Aero", "玻璃", "水滴"],
  prompt: "做一个 Frutiger Aero 风格数据面板：蓝绿天空渐变背景，漂浮半透明水滴气泡；中央一块高光玻璃面板，里面是三列数据、进度条和一枚亮面按钮。所有元素有白色高光、柔和阴影和圆角，整体湿润、明亮、2000 年代初科技感。",
  html: `<section class="pl-fp">
  <div class="pl-fp-bubble is-a"></div><div class="pl-fp-bubble is-b"></div>
  <div class="pl-fp-panel">
    <header><span>SYSTEM / AERO</span><span>ALL CLEAR</span></header>
    <h2>低氧表达 · 运行概览</h2>
    <div class="pl-fp-grid"><div><b>3.2×</b><span>相对表达</span><i style="--w:88%"></i></div><div><b>98.6%</b><span>阳性率</span><i style="--w:96%"></i></div><div><b>8</b><span>稳定批次</span><i style="--w:72%"></i></div></div>
    <button type="button">查看完整数据 →</button>
  </div>
</section>`,
  css: `.pl-fp{position:relative;min-height:100vh;display:grid;place-items:center;overflow:hidden;padding:36px;background:linear-gradient(180deg,#c8ecff,#7fd0e8 50%,#3a9bb5);font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.pl-fp::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.45),transparent 32%);pointer-events:none}
.pl-fp-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(255,255,255,.12) 55%,rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.8)}
.pl-fp-bubble.is-a{right:8%;top:10%;width:120px;height:120px}
.pl-fp-bubble.is-b{left:7%;bottom:10%;width:80px;height:80px}
.pl-fp-panel{position:relative;z-index:1;width:min(560px,100%);padding:24px;border:1px solid #fff;border-radius:20px;background:linear-gradient(180deg,rgba(255,255,255,.72),rgba(230,248,255,.42));box-shadow:inset 0 1px 0 #fff,0 18px 40px rgba(13,58,74,.18);backdrop-filter:blur(10px)}
.pl-fp header{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(13,58,74,.2);font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#0d6a7a}
.pl-fp h2{margin-top:12px;font-size:24px;color:#0d3a4a;text-shadow:0 1px 0 #fff}
.pl-fp-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:16px}
.pl-fp-grid div{padding:12px;border:1px solid #fff;border-radius:12px;background:rgba(255,255,255,.55);box-shadow:inset 0 1px 0 #fff}
.pl-fp-grid b{display:block;font-size:24px;color:#0d3a4a}
.pl-fp-grid span{display:block;font-family:ui-monospace,Consolas,monospace;font-size:7px;color:#2a5a6a}
.pl-fp-grid i{display:block;height:6px;margin-top:9px;border-radius:99px;background:linear-gradient(90deg,#3a9bb5 var(--w,70%),rgba(58,155,181,.18) var(--w,70%))}
.pl-fp button{width:100%;min-height:40px;margin-top:16px;border:1px solid #fff;border-radius:999px;background:linear-gradient(180deg,#fff,#bfe9ff);font-family:inherit;font-size:10px;font-weight:700;color:#0d3a4a;box-shadow:inset 0 1px 0 #fff,0 3px 8px rgba(13,58,74,.18);cursor:pointer}
@media (max-width:560px){.pl-fp{padding:20px}.pl-fp-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "card-organic", name: "有机卡片", cat: "cards",
  desc: "奶油底、绿色 blob 与柔和曲线的 Organic 卡片。",
  tags: ["卡片", "有机", "自然", "曲线"],
  prompt: "做一张有机自然风格卡片：奶油底色，卡片边缘是不规则的柔和曲线，顶部一张偏绿的自然图片；下方是衬线标题、短说明和一个绿色胶囊链接。整体像从纸上生长出来，没有硬边和强阴影，移动端缩窄。",
  html: `<div class="pl-oc-wrap"><article class="pl-oc"><img src="assets/img/plugins/hover-02.jpg" alt="自然" loading="lazy"><div><span>ORGANIC / 03</span><h2>像根系<br>一样生长</h2><p>让方法可以被后来者继续延伸，而不是停在一次展示里。</p><a href="#">继续生长 →</a></div></article></div>`,
  css: `.pl-oc-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:linear-gradient(165deg,#f6f3e8,#dfe8d6 60%,#c8d8bd);font-family:Georgia,"Songti SC",serif;color:#2c3a26}
.pl-oc{width:min(340px,100%);overflow:hidden;border-radius:42% 58% 46% 54% / 12% 18% 82% 88%;background:rgba(255,255,255,.62);padding:14px}
.pl-oc img{width:100%;height:190px;object-fit:cover;border-radius:38% 62% 52% 48% / 16% 20% 80% 84%}
.pl-oc>div{padding:14px 12px 18px}
.pl-oc span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;color:#4f7040}
.pl-oc h2{margin-top:7px;font-size:26px;font-weight:400;line-height:1.15}
.pl-oc p{margin-top:7px;font-size:10px;line-height:1.7;color:#5a6a50}
.pl-oc a{display:inline-block;margin-top:12px;padding:6px 11px;border-radius:999px;background:#4f7040;font-family:ui-sans-serif,system-ui,sans-serif;font-size:8px;color:#f6f3e8}`,
  js: ``
},
{
  id: "btn-neubrutalism", name: "新粗野按钮", cat: "buttons",
  desc: "亮粉黄、粗黑边与硬阴影的新粗野按钮组。",
  tags: ["按钮", "新粗野主义", "硬阴影", "亮色"],
  prompt: "做一个新粗野主义按钮组：奶油底，两枚按钮——亮粉主按钮和柠檬黄次按钮，都有 3px 黑边和 8px 硬阴影；悬停时向左上移动、阴影加长，按下回位。文字用粗体无衬线，移动端纵向排列。",
  html: `<div class="pl-nbb"><span>NEU / BRUTAL BUTTONS</span><div><button class="is-primary" type="button">开始构建 →</button><button class="is-secondary" type="button">查看文档</button></div></div>`,
  css: `.pl-nbb{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:24px;background:#fff8e7;font-family:"Arial Black","Helvetica Neue",Arial,sans-serif}
.pl-nbb>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#555}
.pl-nbb>div{display:flex;gap:14px}
.pl-nbb button{min-height:52px;padding:0 22px;border:3px solid #111;font-family:inherit;font-size:12px;font-weight:700;cursor:pointer;box-shadow:8px 8px 0 #111;transition:transform .16s,box-shadow .16s}
.pl-nbb .is-primary{background:#ff5d8f;color:#111}
.pl-nbb .is-secondary{background:#d8ff00;color:#111}
.pl-nbb button:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 #111}
.pl-nbb button:active{transform:translate(4px,4px);box-shadow:4px 4px 0 #111}
@media (max-width:520px){.pl-nbb>div{flex-direction:column}}`,
  js: ``
},
{
  id: "card-glassmorphism", name: "玻璃拟态卡片", cat: "cards",
  desc: "渐变网格上悬浮的磨砂玻璃数据卡。",
  tags: ["卡片", "玻璃拟态", "磨砂", "渐变"],
  prompt: "做一张玻璃拟态数据卡：深紫蓝渐变网格背景，几个模糊光斑；卡片是半透明磨砂玻璃，1px 白色高光边、背景模糊；内部是标题、三个数据和一个细进度条。整体通透、层次清楚，移动端降低模糊强度。",
  html: `<div class="pl-gc-wrap"><div class="pl-gc-orb is-a"></div><div class="pl-gc-orb is-b"></div><article class="pl-gc"><header><span>GLASS / DATA</span><span>LIVE</span></header><h2>低氧表达概览</h2><div class="pl-gc-grid"><div><b>3.2×</b><span>相对表达</span></div><div><b>98.6%</b><span>阳性率</span></div><div><b>8</b><span>稳定批次</span></div></div><i></i></article></div>`,
  css: `.pl-gc-wrap{position:relative;min-height:100vh;display:grid;place-items:center;padding:40px;overflow:hidden;background:radial-gradient(600px 460px at 20% 20%,#6c5ce7,transparent 60%),radial-gradient(500px 460px at 85% 70%,#0f8b8d,transparent 60%),#120b2e;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-gc-orb{position:absolute;border-radius:50%;filter:blur(26px);opacity:.55}
.pl-gc-orb.is-a{right:10%;top:10%;width:180px;height:180px;background:#ff5d8f}
.pl-gc-orb.is-b{left:10%;bottom:8%;width:200px;height:200px;background:#7ee0dd}
.pl-gc{position:relative;z-index:1;width:min(360px,100%);padding:22px;border:1px solid rgba(255,255,255,.3);border-radius:18px;background:rgba(255,255,255,.08);backdrop-filter:blur(16px);box-shadow:inset 0 1px 0 rgba(255,255,255,.3);color:#f4f7ff}
.pl-gc header{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(244,247,255,.2);font-family:ui-monospace,Consolas,monospace;font-size:8px;color:rgba(244,247,255,.6)}
.pl-gc h2{margin-top:12px;font-size:22px}
.pl-gc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:16px}
.pl-gc-grid b{display:block;font-size:22px;color:#7ee0dd}
.pl-gc-grid span{display:block;font-size:8px;color:rgba(244,247,255,.6)}
.pl-gc>i{display:block;height:5px;margin-top:16px;border-radius:99px;background:linear-gradient(90deg,#7ee0dd 0 76%,rgba(126,224,221,.18) 76%)}`,
  js: ``
}
);
