/* 媒体类插件 */
window.PLUGINS.push(
{
  id: "gallery-masonry",
  name: "图片画廊 + 灯箱",
  cat: "media",
  desc: "三列瀑布流图片墙，点击放大并支持键盘切换。",
  tags: ["gallery", "图片", "灯箱", "瀑布流", "lightbox"],
  prompt: "做一个实验图像档案画廊：顶部是标题和操作提示，下面用 CSS columns 做三列瀑布流，图片高度错落，圆角 12px，底部叠加编号和说明。点击任意图片打开全屏灯箱，背景深色模糊，左右箭头切换，支持键盘左右键和 Esc 关闭。图片使用 object-fit cover，移动端改为两列。",
  html: `<div class="pl-gal">
  <header class="pl-gal-head">
    <div><span>现场记录</span><h2>实验图像档案</h2></div>
    <p>点击任意图片放大，支持 ← → 与 Esc 键。</p>
  </header>
  <div class="pl-gal-grid">
    <button class="pl-gal-item" type="button" data-cap="菌落形态 · 批次 07"><img src="assets/img/plugins/gallery-01.jpg" alt="青绿色菌落" loading="lazy"><span><b>01</b>菌落形态</span></button>
    <button class="pl-gal-item" type="button" data-cap="样品处理 ·  amber liquid"><img src="assets/img/plugins/gallery-02.jpg" alt="琥珀色液体玻璃器皿" loading="lazy"><span><b>02</b>样品处理</span></button>
    <button class="pl-gal-item" type="button" data-cap="凝胶电泳 · UV 成像"><img src="assets/img/plugins/gallery-03.jpg" alt="凝胶电泳条带" loading="lazy"><span><b>03</b>凝胶电泳</span></button>
    <button class="pl-gal-item" type="button" data-cap="显微成像 · 40× 物镜"><img src="assets/img/plugins/gallery-04.jpg" alt="显微镜镜头" loading="lazy"><span><b>04</b>显微成像</span></button>
    <button class="pl-gal-item" type="button" data-cap="细菌画 · 珊瑚粉"><img src="assets/img/plugins/gallery-05.jpg" alt="珊瑚粉色细菌画" loading="lazy"><span><b>05</b>细菌画</span></button>
    <button class="pl-gal-item" type="button" data-cap="取样现场 · 无菌操作"><img src="assets/img/plugins/gallery-06.jpg" alt="戴手套取样的手" loading="lazy"><span><b>06</b>取样现场</span></button>
  </div>
  <div class="pl-galbox" data-galbox>
    <button class="pl-gal-close" type="button" data-gal-close aria-label="关闭">×</button>
    <button class="pl-gal-nav is-prev" type="button" data-gal-prev aria-label="上一张">←</button>
    <figure><img data-gal-img alt=""><figcaption data-gal-cap></figcaption></figure>
    <button class="pl-gal-nav is-next" type="button" data-gal-next aria-label="下一张">→</button>
  </div>
</div>`,
  css: `.pl-gal{min-height:100vh;padding:40px 48px 48px;background:linear-gradient(180deg,#f8faf9,#eef2f1)}
.pl-gal-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:22px}
.pl-gal-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-gal-head h2{margin-top:8px;font-size:clamp(1.7rem,3vw,2.4rem);letter-spacing:-.03em;color:#101b26}
.pl-gal-head p{max-width:260px;font-size:11.5px;line-height:1.6;color:#6a7885;text-align:right}
.pl-gal-grid{columns:3;column-gap:12px}
.pl-gal-item{position:relative;display:block;width:100%;margin:0 0 12px;padding:0;border:0;border-radius:12px;overflow:hidden;background:#dfe7e5;cursor:zoom-in;break-inside:avoid}
.pl-gal-item img{width:100%;height:180px;object-fit:cover;transition:transform .5s ease,filter .5s ease}
.pl-gal-item:nth-child(2) img{height:216px}
.pl-gal-item:nth-child(3) img{height:206px}
.pl-gal-item:nth-child(4) img{height:170px}
.pl-gal-item:nth-child(5) img{height:198px}
.pl-gal-item:nth-child(6) img{height:188px}
.pl-gal-item span{position:absolute;left:0;right:0;bottom:0;display:flex;align-items:center;gap:8px;padding:26px 12px 11px;background:linear-gradient(transparent,rgba(8,16,20,.72));color:#fff;font-size:11.5px;font-weight:600;text-align:left}
.pl-gal-item span b{font-size:9px;letter-spacing:.1em;opacity:.7}
.pl-gal-item:hover img{transform:scale(1.05);filter:brightness(1.05)}
.pl-galbox{position:fixed;inset:0;z-index:9;display:none;place-items:center;background:rgba(7,13,17,.86);backdrop-filter:blur(10px)}
.pl-galbox.is-open{display:grid}
.pl-galbox figure{max-width:78vw;max-height:82vh;margin:0;text-align:center}
.pl-galbox img{max-width:100%;max-height:70vh;border-radius:12px;object-fit:contain;box-shadow:0 30px 80px rgba(0,0,0,.5)}
.pl-galbox figcaption{margin-top:14px;font-size:12px;color:#cfe0e4}
.pl-gal-close{position:absolute;top:20px;right:24px;width:40px;height:40px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:rgba(255,255,255,.08);color:#fff;font-size:20px;cursor:pointer}
.pl-gal-nav{position:absolute;top:50%;width:46px;height:46px;margin-top:-23px;border:1px solid rgba(255,255,255,.18);border-radius:50%;background:rgba(255,255,255,.08);color:#fff;font-size:17px;cursor:pointer;transition:background .2s}
.pl-gal-nav:hover,.pl-gal-close:hover{background:rgba(255,255,255,.2)}
.pl-gal-nav.is-prev{left:28px}
.pl-gal-nav.is-next{right:28px}
@media (max-width:820px){.pl-gal{padding:28px 20px}.pl-gal-head{display:block}.pl-gal-head p{margin-top:8px;text-align:left}.pl-gal-grid{columns:2}.pl-gal-item img,.pl-gal-item:nth-child(n) img{height:150px}}`,
  js: `(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll(".pl-gal-item"));
  var box = document.querySelector("[data-galbox]");
  var image = box.querySelector("[data-gal-img]");
  var caption = box.querySelector("[data-gal-cap]");
  var index = 0;
  function show(i) {
    index = (i + items.length) % items.length;
    var item = items[index];
    image.src = item.querySelector("img").src;
    caption.textContent = item.getAttribute("data-cap") + "  ·  " + (index + 1) + " / " + items.length;
  }
  function open(i) {
    show(i);
    box.classList.add("is-open");
  }
  function close() { box.classList.remove("is-open"); }
  items.forEach(function (item, i) {
    item.addEventListener("click", function () { open(i); });
  });
  box.querySelector("[data-gal-close]").addEventListener("click", close);
  box.querySelector("[data-gal-prev]").addEventListener("click", function () { show(index - 1); });
  box.querySelector("[data-gal-next]").addEventListener("click", function () { show(index + 1); });
  box.addEventListener("click", function (event) { if (event.target === box) close(); });
  document.addEventListener("keydown", function (event) {
    if (!box.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });
})();`
},
{
  id: "image-hover",
  name: "图片悬停卡",
  cat: "media",
  desc: "三张图片卡，悬停时缩放并浮出标题与说明。",
  tags: ["image", "图片", "悬停", "卡片", "hover"],
  prompt: "做一个三列图片悬停卡片区块：每张图使用 4:3 比例的 object-fit cover，底部有深色渐变遮罩，默认只显示一个小标签；悬停时图片放大到 1.06，标题和说明从下方滑入。卡片圆角 16px，整体放在浅色背景上，标题区在网格上方。移动端单列。",
  html: `<section class="pl-hover">
  <header class="pl-hover-head"><span>视觉故事</span><h2>让图像承担一半叙事</h2><p>悬停查看每个实验阶段的现场记录。</p></header>
  <div class="pl-hover-grid">
    <figure class="pl-hover-card"><img src="assets/img/plugins/hover-01.jpg" alt="藻类细丝" loading="lazy"><figcaption><span>01 · 培养</span><h3>从单菌落到可复现的批次</h3><p>控制温度、光照与取样节奏。</p></figcaption></figure>
    <figure class="pl-hover-card"><img src="assets/img/plugins/hover-02.jpg" alt="发光分子结构" loading="lazy"><figcaption><span>02 · 设计</span><h3>把部件组合成可测试的假设</h3><p>每个构建都对应一个明确读数。</p></figcaption></figure>
    <figure class="pl-hover-card"><img src="assets/img/plugins/hover-03.jpg" alt="实验台" loading="lazy"><figcaption><span>03 · 验证</span><h3>让结果经得起重复与对照</h3><p>记录失败，也记录失败带来的修正。</p></figcaption></figure>
  </div>
</section>`,
  css: `.pl-hover{min-height:100vh;display:grid;align-content:center;padding:44px 48px;background:radial-gradient(700px 420px at 92% 0%,rgba(255,176,0,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-hover-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:22px}
.pl-hover-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-hover-head h2{font-size:clamp(1.7rem,3vw,2.4rem);letter-spacing:-.03em;color:#101b26}
.pl-hover-head p{max-width:260px;font-size:11.5px;line-height:1.6;color:#6a7885}
.pl-hover-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.pl-hover-card{position:relative;overflow:hidden;margin:0;border-radius:16px;background:#dfe7e5;box-shadow:0 16px 36px rgba(23,50,77,.08);cursor:pointer}
.pl-hover-card img{width:100%;height:300px;object-fit:cover;transition:transform .6s cubic-bezier(.2,.8,.2,1),filter .4s}
.pl-hover-card figcaption{position:absolute;left:0;right:0;bottom:0;padding:52px 18px 18px;background:linear-gradient(transparent,rgba(7,16,21,.86));color:#fff;transform:translateY(10px);transition:transform .35s}
.pl-hover-card figcaption span{font-size:9.5px;font-weight:800;letter-spacing:.14em;color:#8fd7d5}
.pl-hover-card figcaption h3{margin-top:8px;font-size:15px;line-height:1.35;color:#fff}
.pl-hover-card figcaption p{margin-top:6px;font-size:11px;line-height:1.6;color:#b9cdd3;opacity:0;transform:translateY(6px);transition:opacity .35s .05s,transform .35s .05s}
.pl-hover-card:hover img{transform:scale(1.06);filter:brightness(1.02)}
.pl-hover-card:hover figcaption{transform:translateY(0)}
.pl-hover-card:hover figcaption p{opacity:1;transform:translateY(0)}
@media (max-width:820px){.pl-hover{padding:32px 22px}.pl-hover-head{display:block}.pl-hover-head p{margin-top:8px}.pl-hover-grid{grid-template-columns:1fr}.pl-hover-card img{height:230px}}`,
  js: ``
},
{
  id: "carousel-snap",
  name: "横向轮播",
  cat: "media",
  desc: "滚动吸附轮播，支持箭头与圆点导航。",
  tags: ["carousel", "轮播", "滑动", "scroll-snap"],
  prompt: "做一个横向图片轮播：视口使用 scroll-snap-type x mandatory，每张幻灯片宽度约 46%，4:3 图片带圆角和底部标题；左右两侧悬浮圆形箭头按钮，底部有圆点指示器和当前序号。点击箭头平滑滚动一屏，滚动时同步圆点状态。隐藏滚动条，移动端幻灯片宽度 86%。",
  html: `<section class="pl-car">
  <header class="pl-car-head">
    <div><span>图集</span><h2>横向浏览实验阶段</h2></div>
    <div class="pl-car-count"><b data-car-current>01</b><span>/ 04</span></div>
  </header>
  <div class="pl-car-shell">
    <div class="pl-car-viewport" data-car-viewport>
      <article class="pl-car-slide"><img src="assets/img/plugins/carousel-01.jpg" alt="现代实验室" loading="lazy"><div><span>01</span><h3>实验室</h3><p>干净的起点与可追踪的流程。</p></div></article>
      <article class="pl-car-slide"><img src="assets/img/plugins/carousel-02.jpg" alt="青色液体波浪" loading="lazy"><div><span>02</span><h3>样品</h3><p>每次取样都对应一个批次编号。</p></div></article>
      <article class="pl-car-slide"><img src="assets/img/plugins/carousel-03.jpg" alt="研究人员讨论" loading="lazy"><div><span>03</span><h3>讨论</h3><p>把数据放回设计决策里。</p></div></article>
      <article class="pl-car-slide"><img src="assets/img/plugins/carousel-04.jpg" alt="金色晶体" loading="lazy"><div><span>04</span><h3>结果</h3><p>可复核的图像与读数。</p></div></article>
    </div>
    <button class="pl-car-arrow is-prev" type="button" data-car-prev aria-label="上一张">←</button>
    <button class="pl-car-arrow is-next" type="button" data-car-next aria-label="下一张">→</button>
  </div>
  <div class="pl-car-dots" data-car-dots><button class="is-active" type="button" aria-label="第 1 张"></button><button type="button" aria-label="第 2 张"></button><button type="button" aria-label="第 3 张"></button><button type="button" aria-label="第 4 张"></button></div>
</section>`,
  css: `.pl-car{min-height:100vh;display:grid;align-content:center;padding:40px 48px;background:linear-gradient(180deg,#f8fbfb,#edf3f2)}
.pl-car-head{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:20px}
.pl-car-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-car-head h2{margin-top:8px;font-size:clamp(1.7rem,3vw,2.4rem);letter-spacing:-.03em;color:#101b26}
.pl-car-count{font-size:12px;color:#7a8792;font-variant-numeric:tabular-nums}
.pl-car-count b{font-size:24px;color:#17324d;letter-spacing:-.03em}
.pl-car-shell{position:relative}
.pl-car-viewport{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:none}
.pl-car-viewport::-webkit-scrollbar{display:none}
.pl-car-slide{flex:0 0 46%;scroll-snap-align:start;overflow:hidden;border-radius:16px;background:#dfe7e5;box-shadow:0 14px 32px rgba(23,50,77,.08)}
.pl-car-slide img{width:100%;height:250px;object-fit:cover;transition:transform .5s}
.pl-car-slide:hover img{transform:scale(1.04)}
.pl-car-slide div{padding:14px 16px 16px;background:#fff}
.pl-car-slide span{font-size:9.5px;font-weight:800;letter-spacing:.12em;color:#0f8b8d}
.pl-car-slide h3{margin-top:4px;font-size:15px;color:#101b26}
.pl-car-slide p{margin-top:3px;font-size:11px;color:#6a7885}
.pl-car-arrow{position:absolute;top:112px;width:42px;height:42px;border:1px solid rgba(23,50,77,.14);border-radius:50%;background:rgba(255,255,255,.9);box-shadow:0 10px 24px rgba(23,50,77,.14);color:#17324d;font-size:15px;cursor:pointer;transition:background .2s,transform .2s}
.pl-car-arrow:hover{background:#fff;transform:scale(1.05)}
.pl-car-arrow.is-prev{left:-14px}
.pl-car-arrow.is-next{right:-14px}
.pl-car-dots{display:flex;justify-content:center;gap:6px;margin-top:18px}
.pl-car-dots button{width:7px;height:7px;padding:0;border:0;border-radius:50%;background:rgba(23,50,77,.2);cursor:pointer;transition:width .25s,background .25s}
.pl-car-dots button.is-active{width:22px;border-radius:99px;background:#0f8b8d}
@media (max-width:820px){.pl-car{padding:30px 22px}.pl-car-slide{flex-basis:86%}.pl-car-slide img{height:200px}.pl-car-arrow.is-prev{left:4px}.pl-car-arrow.is-next{right:4px}}`,
  js: `(function () {
  var viewport = document.querySelector("[data-car-viewport]");
  var slides = Array.prototype.slice.call(viewport.querySelectorAll(".pl-car-slide"));
  var dots = Array.prototype.slice.call(document.querySelectorAll("[data-car-dots] button"));
  var current = document.querySelector("[data-car-current]");
  function step() { return slides[0].offsetWidth + 14; }
  function sync() {
    var index = Math.round(viewport.scrollLeft / step());
    index = Math.max(0, Math.min(slides.length - 1, index));
    dots.forEach(function (dot, i) { dot.classList.toggle("is-active", i === index); });
    current.textContent = ("0" + (index + 1)).slice(-2);
  }
  viewport.addEventListener("scroll", sync, { passive: true });
  document.querySelector("[data-car-prev]").addEventListener("click", function () { viewport.scrollBy({ left: -step(), behavior: "smooth" }); });
  document.querySelector("[data-car-next]").addEventListener("click", function () { viewport.scrollBy({ left: step(), behavior: "smooth" }); });
  dots.forEach(function (dot, i) {
    dot.addEventListener("click", function () { viewport.scrollTo({ left: step() * i, behavior: "smooth" }); });
  });
  sync();
})();`
},
{
  id: "compare-slider",
  name: "前后对比滑杆",
  cat: "media",
  desc: "拖动滑杆对比草稿与完成态，适合设计迭代展示。",
  tags: ["compare", "对比", "滑杆", "before-after"],
  prompt: "做一个前后对比滑杆区块：同一块画布上叠两层内容，左侧放灰色草稿版，右侧放精修版，用 clip-path 按滑杆位置裁切。两侧内容各占一半，避免文字在分割线处重叠；中间有一条竖向白线和圆形拖拽手柄，底部放一条自定义样式的 range 滑杆。拖拽时实时更新裁切比例，左上角和右上角分别标注“修改前”与“修改后”。",
  html: `<div class="pl-cmp" data-cmp style="--split:52%">
  <div class="pl-cmp-layer is-before">
    <div class="pl-cmp-doc">
      <div class="pl-cmp-lines"><i style="width:32%"></i><i style="width:88%"></i><i style="width:74%"></i><i style="width:64%"></i></div>
      <div class="pl-cmp-box"><i></i><i></i><i></i></div>
    </div>
  </div>
  <div class="pl-cmp-layer is-after">
    <div class="pl-cmp-doc is-rich">
      <span class="pl-cmp-tag">结果 07</span>
      <h2>表达强度<br>提升 3.2 倍</h2>
      <p>优化后的启动子组合在低氧条件下保持稳定表达。</p>
      <div class="pl-cmp-metrics"><div><strong>98.6%</strong><span>阳性率</span></div><div><strong>48h</strong><span>读数周期</span></div></div>
    </div>
  </div>
  <div class="pl-cmp-handle"></div>
  <span class="pl-cmp-label is-left">修改前</span>
  <span class="pl-cmp-label is-right">修改后</span>
  <input type="range" min="6" max="94" value="52" aria-label="对比位置" data-cmp-range>
</div>`,
  css: `.pl-cmp{position:relative;min-height:100vh;overflow:hidden;background:#e9eeef}
.pl-cmp-layer{position:absolute;inset:0;display:flex;align-items:center;padding:44px 40px 72px}
.pl-cmp.is-before,.pl-cmp-layer.is-before{justify-content:flex-start;background:linear-gradient(135deg,#e7ebee,#dbe2e4)}
.pl-cmp-layer.is-after{clip-path:inset(0 0 0 var(--split));justify-content:flex-end;background:radial-gradient(700px 460px at 70% 20%,rgba(255,176,0,.18),transparent 62%),linear-gradient(140deg,#f9fdfd,#e4f2f0)}
.pl-cmp-doc{width:min(44%,400px);padding:24px;border:1px dashed rgba(23,50,77,.22);border-radius:14px;background:rgba(255,255,255,.5)}
.pl-cmp-lines{display:grid;gap:10px;margin-bottom:22px}
.pl-cmp-lines i{height:10px;border-radius:4px;background:#c8d1d6}
.pl-cmp-lines i:first-child{height:18px;background:#b7c2c8}
.pl-cmp-box{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;height:120px}
.pl-cmp-box i{display:block;border-radius:8px;background:#d2dade}
.pl-cmp-doc.is-rich{border:1px solid rgba(23,50,77,.12);background:rgba(255,255,255,.88);box-shadow:0 30px 70px rgba(23,50,77,.14);backdrop-filter:blur(16px)}
.pl-cmp-tag{display:inline-flex;padding:5px 9px;border-radius:999px;background:rgba(15,139,141,.12);font-size:9.5px;font-weight:800;letter-spacing:.12em;color:#0f8b8d}
.pl-cmp-doc.is-rich h2{margin-top:14px;font-size:clamp(1.8rem,3.2vw,2.6rem);line-height:1.05;letter-spacing:-.04em;color:#101b26}
.pl-cmp-doc.is-rich p{margin-top:12px;font-size:12px;line-height:1.7;color:#607080}
.pl-cmp-metrics{display:flex;gap:32px;margin-top:22px;padding-top:18px;border-top:1px solid rgba(23,50,77,.1)}
.pl-cmp-metrics strong{display:block;font-size:26px;letter-spacing:-.04em;color:#0f8b8d}
.pl-cmp-metrics span{font-size:10.5px;color:#7a8792}
.pl-cmp-handle{position:absolute;top:0;bottom:0;left:var(--split);z-index:3;width:2px;margin-left:-1px;background:#fff;box-shadow:0 0 0 1px rgba(23,50,77,.16),0 0 24px rgba(23,50,77,.2);pointer-events:none}
.pl-cmp-handle::after{content:"";position:absolute;top:50%;left:50%;width:40px;height:40px;margin:-20px 0 0 -20px;border:2px solid #fff;border-radius:50%;background:rgba(255,255,255,.16);box-shadow:0 8px 24px rgba(23,50,77,.22);backdrop-filter:blur(4px)}
.pl-cmp-label{position:absolute;top:22px;z-index:4;padding:5px 10px;border-radius:999px;background:rgba(8,16,20,.5);font-size:9.5px;font-weight:800;letter-spacing:.12em;color:#fff;backdrop-filter:blur(6px)}
.pl-cmp-label.is-left{left:24px}
.pl-cmp-label.is-right{right:24px}
.pl-cmp input{position:absolute;left:12%;right:12%;bottom:22px;z-index:5;width:76%;height:4px;margin:0;border-radius:99px;background:rgba(23,50,77,.16);appearance:none;cursor:ew-resize}
.pl-cmp input::-webkit-slider-thumb{width:18px;height:18px;border:2px solid #fff;border-radius:50%;background:#0f8b8d;box-shadow:0 4px 12px rgba(23,50,77,.25);appearance:none}
.pl-cmp input::-moz-range-thumb{width:18px;height:18px;border:2px solid #fff;border-radius:50%;background:#0f8b8d}
@media (max-width:700px){.pl-cmp-layer{padding:28px 18px 60px}.pl-cmp-doc{width:46%;padding:16px}.pl-cmp-doc.is-rich h2{font-size:1.4rem}.pl-cmp-doc.is-rich p{font-size:10px}.pl-cmp-metrics{gap:12px;margin-top:14px;padding-top:12px}.pl-cmp-metrics strong{font-size:18px}.pl-cmp-box{height:80px}}`,
  js: `(function () {
  var box = document.querySelector("[data-cmp]");
  var range = box.querySelector("[data-cmp-range]");
  function update() { box.style.setProperty("--split", range.value + "%"); }
  range.addEventListener("input", update);
  update();
})();`
},
{
  id: "image-stack",
  name: "图片堆叠",
  cat: "media",
  desc: "拍立得式图片堆叠，按钮循环切换最上层。",
  tags: ["image", "图片", "堆叠", "polaroid", "切换"],
  prompt: "做一个拍立得风格的图片堆叠组件：三张 4:3 图片叠放在中央，最上层完整显示，后两层向下偏移、缩小并略微旋转，形成纸牌堆效果；下方是上一张/下一张按钮和 01 / 03 计数。点击切换时用 transform 过渡重新排列，图片带白色相框和柔和阴影。",
  html: `<div class="pl-stack">
  <header class="pl-stack-head"><span>图像盒</span><h2>实验结果，也可以被翻看</h2></header>
  <div class="pl-stack-stage" data-stack>
    <figure class="pl-stack-card"><img src="assets/img/plugins/stack-01.jpg" alt="发光的培养皿" loading="lazy"><figcaption>荧光菌落 · 07</figcaption></figure>
    <figure class="pl-stack-card"><img src="assets/img/plugins/stack-02.jpg" alt="琥珀色液滴" loading="lazy"><figcaption>样品切片 · 12</figcaption></figure>
    <figure class="pl-stack-card"><img src="assets/img/plugins/stack-03.jpg" alt="试管中的植物" loading="lazy"><figcaption>植物样本 · 03</figcaption></figure>
  </div>
  <div class="pl-stack-controls">
    <button type="button" data-stack-prev aria-label="上一张">←</button>
    <span><b data-stack-index>01</b> / 03</span>
    <button type="button" data-stack-next aria-label="下一张">→</button>
  </div>
</div>`,
  css: `.pl-stack{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:36px 40px;background:radial-gradient(700px 420px at 80% 10%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfaf7,#eef2f1)}
.pl-stack-head{justify-self:start;margin-bottom:6px}
.pl-stack-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-stack-head h2{margin-top:8px;font-size:clamp(1.6rem,2.8vw,2.2rem);letter-spacing:-.03em;color:#101b26}
.pl-stack-stage{position:relative;width:300px;height:330px;margin-top:10px}
.pl-stack-card{position:absolute;inset:0;margin:0;padding:10px 10px 38px;border-radius:6px;background:#fff;box-shadow:0 24px 50px rgba(23,50,77,.2);transition:transform .45s cubic-bezier(.2,.8,.2,1),opacity .45s;transform-origin:center bottom}
.pl-stack-card img{width:100%;height:250px;object-fit:cover;border-radius:2px}
.pl-stack-card figcaption{padding-top:9px;font-size:10.5px;letter-spacing:.04em;color:#6a7885;text-align:center}
.pl-stack-controls{display:flex;align-items:center;gap:16px;margin-top:22px}
.pl-stack-controls button{width:38px;height:38px;border:1px solid rgba(23,50,77,.14);border-radius:50%;background:rgba(255,255,255,.8);color:#17324d;font-size:14px;cursor:pointer;transition:background .2s,transform .2s}
.pl-stack-controls button:hover{background:#fff;transform:scale(1.05)}
.pl-stack-controls span{font-size:11px;color:#7a8792;font-variant-numeric:tabular-nums}
.pl-stack-controls b{font-size:13px;color:#17324d}
@media (max-width:700px){.pl-stack-stage{width:260px;height:300px}.pl-stack-card img{height:220px}}`,
  js: `(function () {
  var stage = document.querySelector("[data-stack]");
  var cards = Array.prototype.slice.call(stage.querySelectorAll(".pl-stack-card"));
  var indexEl = document.querySelector("[data-stack-index]");
  var active = 0;
  function render() {
    cards.forEach(function (card, i) {
      var offset = (i - active + cards.length) % cards.length;
      card.style.zIndex = cards.length - offset;
      card.style.transform = "translateY(" + (offset * 14) + "px) scale(" + (1 - offset * 0.05) + ") rotate(" + ((offset - 1) * 2.4) + "deg)";
      card.style.opacity = offset > 2 ? 0 : 1;
    });
    indexEl.textContent = ("0" + (active + 1)).slice(-2);
  }
  document.querySelector("[data-stack-prev]").addEventListener("click", function () { active = (active - 1 + cards.length) % cards.length; render(); });
  document.querySelector("[data-stack-next]").addEventListener("click", function () { active = (active + 1) % cards.length; render(); });
  cards.forEach(function (card, i) { card.addEventListener("click", function () { active = i; render(); }); });
  render();
})();`
}
);
