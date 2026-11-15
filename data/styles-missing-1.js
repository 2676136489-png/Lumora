/* 补齐缺失主义：包豪斯、构成主义、侘寂、新艺术、复古未来、Frutiger Aero */
window.PLUGINS.push(
{
  id: "page-bauhaus", name: "包豪斯页面", cat: "styles",
  desc: "红黄蓝三原色、几何形与不对称网格的 Bauhaus 页面。",
  tags: ["风格页面", "包豪斯", "几何", "三原色"],
  prompt: "做一个包豪斯风格页面：米白背景，红黄蓝三原色，圆形、方形、三角形作为主视觉；标题用粗无衬线分三行，左侧一个巨大红色圆形，右侧一个蓝色方形和黄色三角形；下方三张严格对齐的功能卡片。整体像 1920 年代的设计学院海报，移动端减少几何装饰。",
  html: `<section class="pl-bh">
  <header><b>BAUHAUS / 01</b><span>FORM · FUNCTION · EVIDENCE</span></header>
  <div class="pl-bh-hero">
    <div class="pl-bh-shapes"><i class="is-circle"></i><i class="is-square"></i><i class="is-tri"></i></div>
    <h1>FORM<br>FOLLOWS<br><em>FUNCTION</em></h1>
    <p>把复杂流程拆成能被理解、被使用、被复核的基本形。</p>
  </div>
  <div class="pl-bh-grid">
    <article><b>01</b><h3>圆形</h3><p>连续、可重复的批次。</p></article>
    <article><b>02</b><h3>方形</h3><p>稳定的结构与被记录的边界。</p></article>
    <article><b>03</b><h3>三角</h3><p>变量、对照与结论的关系。</p></article>
  </div>
</section>`,
  css: `.pl-bh{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 46px;background:#f4f1e8;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.pl-bh header{display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.pl-bh-hero{position:relative;display:grid;grid-template-columns:1.2fr .8fr;gap:20px;align-items:center;margin-top:18px}
.pl-bh h1{position:relative;z-index:1;font-size:clamp(2.8rem,7vw,6rem);line-height:.84;letter-spacing:-.05em}
.pl-bh h1 em{font-style:normal;color:#1e4fa3}
.pl-bh-hero p{position:relative;z-index:1;max-width:300px;margin-top:12px;font-size:11px;line-height:1.6;color:#4a4a4a}
.pl-bh-shapes{position:relative;height:190px}
.pl-bh-shapes i{position:absolute;display:block}
.pl-bh-shapes .is-circle{right:10%;top:0;width:130px;height:130px;border-radius:50%;background:#e23a2e}
.pl-bh-shapes .is-square{right:36%;bottom:0;width:90px;height:90px;background:#1e4fa3}
.pl-bh-shapes .is-tri{right:0;bottom:10px;width:0;height:0;border-left:55px solid transparent;border-right:55px solid transparent;border-bottom:95px solid #f2c300}
.pl-bh-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
.pl-bh-grid article{padding:14px;border-top:3px solid #111;background:#fff}
.pl-bh-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#e23a2e}
.pl-bh-grid h3{margin-top:6px;font-size:17px}
.pl-bh-grid p{margin-top:4px;font-size:10px;line-height:1.5;color:#555}
.pl-bh-grid article:nth-child(2){border-top-color:#1e4fa3}
.pl-bh-grid article:nth-child(3){border-top-color:#f2c300}
@media (max-width:700px){.pl-bh{padding:24px}.pl-bh-hero{grid-template-columns:1fr}.pl-bh-shapes{height:120px;order:-1}.pl-bh-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "page-constructivism", name: "构成主义页面", cat: "styles",
  desc: "红黑米白、斜向构图与巨型字的 Constructivism 页面。",
  tags: ["风格页面", "构成主义", "红黑", "斜向"],
  prompt: "做一个构成主义风格页面：米白背景，巨大的红色斜块从右上切入，黑色粗体标题沿对角线错位排列；三块黑/红/米白面板以不同角度叠压，带编号和短句。整体像 1920 年代的政治海报，强烈、直接，移动端取消斜切。",
  html: `<section class="pl-co">
  <div class="pl-co-slash"></div>
  <header><b>CONSTRUCT / 07</b><span>BUILD THE EVIDENCE</span></header>
  <h1>BUILD<br><em>THE</em><br>EVIDENCE</h1>
  <div class="pl-co-grid">
    <article><b>01</b><h3>问题</h3><p>先把不可靠的假设拆掉。</p></article>
    <article><b>02</b><h3>结构</h3><p>用对照与重复重新搭建。</p></article>
    <article><b>03</b><h3>结论</h3><p>只保留能被复核的部分。</p></article>
  </div>
</section>`,
  css: `.pl-co{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:#f2ede3;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.pl-co-slash{position:absolute;right:-10%;top:-10%;width:55%;height:130%;background:#d23b2e;transform:rotate(18deg);opacity:.92}
.pl-co header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:2px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-co h1{position:relative;z-index:1;margin-top:18px;font-size:clamp(3rem,8vw,7rem);line-height:.82;letter-spacing:-.05em;transform:rotate(-2deg)}
.pl-co h1 em{font-style:normal;color:#fff;background:#111;padding:0 8px}
.pl-co-grid{position:relative;z-index:1;display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:8px;margin-top:20px}
.pl-co-grid article{padding:14px;border:2px solid #111;background:#fff;transform:rotate(-2deg)}
.pl-co-grid article:nth-child(2){background:#111;color:#f2ede3;transform:rotate(2deg);margin-top:12px}
.pl-co-grid article:nth-child(3){background:#d23b2e;color:#fff;transform:rotate(-1deg)}
.pl-co-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-co-grid h3{margin-top:6px;font-size:17px}
.pl-co-grid p{margin-top:4px;font-size:10px;line-height:1.5;opacity:.8}
@media (max-width:700px){.pl-co{padding:24px}.pl-co-slash{display:none}.pl-co h1{font-size:2.8rem}.pl-co-grid{grid-template-columns:1fr}.pl-co-grid article{transform:none!important;margin:0!important}}`,
  js: ``
},
{
  id: "page-wabi-sabi", name: "侘寂页面", cat: "styles",
  desc: "粗纸、土色、不对称与留白的 Wabi-sabi 页面。",
  tags: ["风格页面", "侘寂", "土色", "留白"],
  prompt: "做一个侘寂风格页面：粗糙的米灰纸背景，低饱和土绿与棕色，巨大的留白；标题用衬线，字距较大，左侧一张偏灰的图片，右侧短句与三行安静的数据。整体不追求对称和完美，允许轻微偏移和纸纹，移动端单列。",
  html: `<section class="pl-ws">
  <header><span>WABI / SABI</span><span>IMPERFECT, STILL STABLE</span></header>
  <div class="pl-ws-grid">
    <figure><img src="assets/img/plugins/gallery-06.jpg" alt="静水" loading="lazy"><figcaption>不完全对称，也不完全稳定。</figcaption></figure>
    <div><h1>不完美，<br>仍然稳定。</h1><p>接受批次间的微小差异，把注意力放在可复核的读数与边界上。</p><div class="pl-ws-facts"><div><b>8 批</b><span>连续验证</span></div><div><b>6%</b><span>变异系数上限</span></div><div><b>2%</b><span>氧气浓度</span></div></div></div>
  </div>
</section>`,
  css: `.pl-ws{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:38px 52px;background:#e6e0d3;color:#3a352b;font-family:Georgia,"Songti SC",serif;overflow:hidden}
.pl-ws::before{content:"";position:absolute;inset:0;opacity:.2;background-image:radial-gradient(#5b5548 .6px,transparent .6px);background-size:5px 5px}
.pl-ws header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(58,53,43,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.pl-ws-grid{position:relative;z-index:1;display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;align-items:center;margin-top:22px}
.pl-ws figure{margin:0;transform:translateY(10px)}
.pl-ws figure img{width:100%;height:280px;object-fit:cover;filter:sepia(.25) saturate(.6) contrast(.95)}
.pl-ws figcaption{margin-top:8px;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#7a7160}
.pl-ws h1{font-size:clamp(2.6rem,5.4vw,4.8rem);line-height:1.05;font-weight:400;letter-spacing:-.02em}
.pl-ws p{max-width:430px;margin-top:14px;font-size:12px;line-height:1.9;color:#6b6253}
.pl-ws-facts{display:flex;gap:26px;margin-top:24px;padding-top:12px;border-top:1px solid rgba(58,53,43,.25)}
.pl-ws-facts b{display:block;font-size:19px;font-weight:400}
.pl-ws-facts span{display:block;margin-top:2px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:8px;color:#7a7160}
@media (max-width:700px){.pl-ws{padding:26px 20px}.pl-ws-grid{grid-template-columns:1fr;gap:20px}.pl-ws figure img{height:200px}}`,
  js: ``
},
{
  id: "page-art-nouveau", name: "新艺术页面", cat: "styles",
  desc: "金色曲线、植物纹样与拱形构图的 Art Nouveau 页面。",
  tags: ["风格页面", "新艺术", "曲线", "植物"],
  prompt: "做一个新艺术风格页面：深绿与金色，中央是一个由细金线构成的拱形边框，边框上缠绕抽象植物曲线；标题用衬线，字距舒展；三张内容卡也使用拱形顶部和金色细线。整体优雅、流动、像 1900 年代的海报，移动端减少曲线装饰。",
  html: `<section class="pl-an">
  <div class="pl-an-vine is-a"></div><div class="pl-an-vine is-b"></div>
  <header><span>ART NOUVEAU / 1900</span><span>GROW IN LINES</span></header>
  <div class="pl-an-hero"><h1>GROW<br><em>IN LINES</em></h1><p>让结构像植物一样生长，让证据像年轮一样留下。</p></div>
  <div class="pl-an-grid"><article><b>01</b><h3>曲线</h3><p>柔和的边界也能承载严格的结构。</p></article><article><b>02</b><h3>纹样</h3><p>重复的细节让阅读有节奏。</p></article><article><b>03</b><h3>生长</h3><p>方法可以被后来者继续延伸。</p></article></div>
</section>`,
  css: `.pl-an{position:relative;min-height:100vh;overflow:hidden;padding:32px 46px;background:radial-gradient(700px 500px at 50% 20%,rgba(200,169,106,.12),transparent 60%),#0f2a22;color:#d9c08a;font-family:Georgia,"Songti SC",serif}
.pl-an-vine{position:absolute;border:1px solid rgba(200,169,106,.45);border-radius:50%}
.pl-an-vine.is-a{right:-80px;top:-60px;width:360px;height:360px}
.pl-an-vine.is-b{left:-100px;bottom:-100px;width:320px;height:320px}
.pl-an header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(200,169,106,.45);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#a88f5c}
.pl-an-hero{position:relative;z-index:1;margin-top:22px;padding:26px 34px;border:1px solid rgba(200,169,106,.65);border-radius:160px 160px 0 0}
.pl-an h1{font-size:clamp(2.8rem,6.4vw,5.8rem);line-height:.9;font-weight:400;letter-spacing:.02em}
.pl-an h1 em{font-style:italic;color:#e4d2a8}
.pl-an-hero p{max-width:420px;margin-top:12px;font-size:11px;line-height:1.8;color:#a68f6a}
.pl-an-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.pl-an-grid article{padding:16px;border:1px solid rgba(200,169,106,.45);border-radius:90px 90px 0 0;background:rgba(200,169,106,.05)}
.pl-an-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#a88f5c}
.pl-an-grid h3{margin-top:8px;font-size:18px;font-weight:400}
.pl-an-grid p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#a68f6a}
@media (max-width:700px){.pl-an{padding:24px}.pl-an-hero{padding:20px;border-radius:90px 90px 0 0}.pl-an-grid{grid-template-columns:1fr}.pl-an-vine{display:none}}`,
  js: ``
},
{
  id: "page-retro-futurism", name: "复古未来页面", cat: "styles",
  desc: "太空时代、原子环与粉彩渐变的 Retro-Futurism 页面。",
  tags: ["风格页面", "复古未来", "太空时代", "原子"],
  prompt: "做一个复古未来主义页面：50/60 年代太空时代风格，粉彩青绿与橙色，中央是巨大的原子环和星芒，标题用圆润无衬线；三张卡片像太空舱面板，带圆形窗口和细线。整体乐观、干净、带一点复古科幻，移动端缩小原子环。",
  html: `<section class="pl-rf">
  <div class="pl-rf-atom"><i></i><i></i><i></i></div>
  <header><span>RETRO FUTURE / 1962</span><span>TOMORROW IS LOW OXYGEN</span></header>
  <div class="pl-rf-hero"><h1>TOMORROW<br><em>IS LOW OXYGEN</em></h1><p>用今天的证据，设计明天的稳定表达。</p></div>
  <div class="pl-rf-grid"><article><i></i><b>01</b><h3>Orbit</h3><p>在低氧轨道上保持稳定。</p></article><article><i></i><b>02</b><h3>Signal</h3><p>让读数穿过噪声。</p></article><article><i></i><b>03</b><h3>Return</h3><p>把结果带回地面。</p></article></div>
</section>`,
  css: `.pl-rf{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:linear-gradient(165deg,#e8f7f2,#cfe9e4 55%,#f7d9b8);color:#1e3a3a;font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.pl-rf-atom{position:absolute;right:4%;top:10%;width:280px;height:280px}
.pl-rf-atom i{position:absolute;inset:0;border:1px solid rgba(30,58,58,.35);border-radius:50%;transform:rotate(0deg)}
.pl-rf-atom i:nth-child(1){transform:rotate(0deg) scaleY(.38)}
.pl-rf-atom i:nth-child(2){transform:rotate(60deg) scaleY(.38)}
.pl-rf-atom i:nth-child(3){transform:rotate(120deg) scaleY(.38)}
.pl-rf header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(30,58,58,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-rf-hero{position:relative;z-index:1;margin-top:24px}
.pl-rf h1{font-size:clamp(2.8rem,6.6vw,6rem);line-height:.88;letter-spacing:-.04em;color:#1e3a3a}
.pl-rf h1 em{font-style:normal;color:#d9773a}
.pl-rf-hero p{max-width:360px;margin-top:12px;font-size:11px;line-height:1.7;color:#4a6a66}
.pl-rf-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px}
.pl-rf-grid article{position:relative;padding:16px;border:1px solid rgba(30,58,58,.25);border-radius:16px;background:rgba(255,255,255,.55)}
.pl-rf-grid i{display:block;width:28px;height:28px;margin-bottom:10px;border:1px solid #1e3a3a;border-radius:50%;background:radial-gradient(circle at 35% 30%,#fff,#9fd8cf)}
.pl-rf-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#d9773a}
.pl-rf-grid h3{margin-top:6px;font-size:17px}
.pl-rf-grid p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#4a6a66}
@media (max-width:700px){.pl-rf{padding:24px}.pl-rf-atom{width:180px;height:180px}.pl-rf-grid{grid-template-columns:1fr}}`,
  js: ``
},
{
  id: "page-frutiger-aero", name: "Frutiger Aero 页面", cat: "styles",
  desc: "天空渐变、玻璃高光与气泡的 Frutiger Aero 页面。",
  tags: ["风格页面", "Frutiger Aero", "玻璃", "气泡"],
  prompt: "做一个 Frutiger Aero 风格页面：蓝绿天空到水面的渐变，漂浮半透明气泡，中央是一块高光玻璃面板；标题用清爽无衬线，白色高光与深蓝文字；三张卡片像早期科技产品的玻璃按钮，带水滴高光。整体明亮、湿润、2000 年代初的科技乐观主义。",
  html: `<section class="pl-fa">
  <div class="pl-fa-bubble is-a"></div><div class="pl-fa-bubble is-b"></div><div class="pl-fa-bubble is-c"></div>
  <header><span>FRUTIGER AERO / 2006</span><span>CLEAR AIR FUTURE</span></header>
  <div class="pl-fa-hero"><h1>CLEAR<br>AIR<br><em>FUTURE</em></h1><p>让复杂的技术看起来清澈、可接近、值得信任。</p></div>
  <div class="pl-fa-grid"><article><i></i><b>01</b><h3>Water</h3><p>流动的界面，稳定的读数。</p></article><article><i></i><b>02</b><h3>Glass</h3><p>透明，但不丢失层级。</p></article><article><i></i><b>03</b><h3>Air</h3><p>轻盈的操作，清晰的结果。</p></article></div>
</section>`,
  css: `.pl-fa{position:relative;min-height:100vh;overflow:hidden;padding:30px 44px;background:linear-gradient(180deg,#bfe9ff,#7fd0e8 45%,#3a9bb5);color:#0d3a4a;font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif}
.pl-fa::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.45),transparent 30%);pointer-events:none}
.pl-fa-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(255,255,255,.15) 55%,rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.8)}
.pl-fa-bubble.is-a{right:8%;top:12%;width:130px;height:130px}
.pl-fa-bubble.is-b{right:30%;top:42%;width:50px;height:50px}
.pl-fa-bubble.is-c{left:6%;bottom:12%;width:80px;height:80px}
.pl-fa header{position:relative;z-index:1;display:flex;justify-content:space-between;padding-bottom:8px;border-bottom:1px solid rgba(13,58,74,.3);font-family:ui-monospace,Consolas,monospace;font-size:8px}
.pl-fa-hero{position:relative;z-index:1;margin-top:20px;padding:22px 26px;border:1px solid #fff;border-radius:18px;background:linear-gradient(180deg,rgba(255,255,255,.65),rgba(255,255,255,.2));box-shadow:inset 0 1px 0 #fff,0 10px 24px rgba(13,58,74,.14);backdrop-filter:blur(8px)}
.pl-fa h1{font-size:clamp(2.8rem,6.6vw,6rem);line-height:.86;letter-spacing:-.04em;color:#0d3a4a;text-shadow:0 1px 0 #fff}
.pl-fa h1 em{font-style:normal;color:#e86f3a}
.pl-fa-hero p{max-width:380px;margin-top:10px;font-size:11px;line-height:1.7;color:#2a5a6a}
.pl-fa-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px}
.pl-fa-grid article{padding:14px;border:1px solid #fff;border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.8),rgba(220,245,250,.45));box-shadow:inset 0 1px 0 #fff,0 6px 16px rgba(13,58,74,.12);backdrop-filter:blur(6px)}
.pl-fa-grid i{display:block;width:26px;height:26px;margin-bottom:9px;border:1px solid #fff;border-radius:50%;background:radial-gradient(circle at 30% 25%,#fff,#7fd0e8 60%,#3a9bb5)}
.pl-fa-grid b{font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#0d6a7a}
.pl-fa-grid h3{margin-top:6px;font-size:16px;color:#0d3a4a}
.pl-fa-grid p{margin-top:4px;font-size:9.5px;line-height:1.55;color:#2a5a6a}
@media (max-width:700px){.pl-fa{padding:24px}.pl-fa-hero{padding:18px}.pl-fa-grid{grid-template-columns:1fr}.pl-fa-bubble.is-b{display:none}}`,
  js: ``
}
);
