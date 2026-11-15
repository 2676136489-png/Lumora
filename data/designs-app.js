/* 独立设计：上传、加载、空状态、侧边导航、移动标签栏、看板与环图 */
window.PLUGINS.push(
{
  id: "file-drop",
  name: "文件拖放",
  cat: "forms",
  desc: "拖拽上传区域与文件列表，支持点击选择。",
  tags: ["表单", "上传", "拖放", "文件"],
  prompt: "做一个文件上传组件：标题和说明，下方是虚线拖放区，包含上传图标、主提示、次提示和隐藏的文件输入；拖入文件时边框与背景变色。上传后在下方列出文件名、大小和删除按钮。整体浅色卡片，移动端保持单列，文件列表可换行。",
  html: `<div class="pl-drop">
  <span>UPLOAD</span>
  <h2>上传实验记录</h2>
  <p>支持 CSV / XLSX，单个文件不超过 20MB。</p>
  <div class="pl-drop-zone" data-drop>
    <span class="pl-drop-icon">↑</span>
    <strong>拖放文件到这里</strong>
    <small>或点击选择文件</small>
    <input type="file" multiple data-file-input aria-label="选择文件">
  </div>
  <ul class="pl-drop-list" data-file-list></ul>
</div>`,
  css: `.pl-drop{width:min(440px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.1)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(640px 420px at 30% 20%,rgba(15,139,141,.12),transparent 60%),#f6f8f7}
.pl-drop>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-drop h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-drop>p{margin-top:6px;font-size:10.5px;color:#7a8792}
.pl-drop-zone{position:relative;display:flex;flex-direction:column;align-items:center;gap:5px;margin-top:18px;padding:26px 16px;border:1.5px dashed rgba(23,50,77,.24);border-radius:12px;background:#fafcfb;text-align:center;transition:border-color .2s,background .2s}
.pl-drop-zone.is-over{border-color:#0f8b8d;background:#f0faf8}
.pl-drop-icon{display:grid;place-items:center;width:36px;height:36px;margin-bottom:4px;border-radius:50%;background:rgba(15,139,141,.1);font-size:17px;color:#0f8b8d}
.pl-drop-zone strong{font-size:12px;color:#17324d}
.pl-drop-zone small{font-size:9.5px;color:#9aa6b0}
.pl-drop-zone input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer}
.pl-drop-list{display:grid;gap:6px;margin:12px 0 0;padding:0;list-style:none}
.pl-drop-list li{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 10px;border-radius:8px;background:#f5f8f7;font-size:10px;color:#4d5d6a}
.pl-drop-list li b{font-weight:600;color:#17324d}
.pl-drop-list li button{width:22px;height:22px;border:0;border-radius:50%;background:#e8eeec;color:#7a8792;cursor:pointer}`,
  js: `(function () {
  var zone = document.querySelector("[data-drop]");
  var input = document.querySelector("[data-file-input]");
  var list = document.querySelector("[data-file-list]");
  if (!zone || !input || !list) return;
  function render(files) {
    list.innerHTML = "";
    Array.prototype.slice.call(files).forEach(function (file) {
      var li = document.createElement("li");
      li.innerHTML = "<span><b>" + file.name + "</b> · " + Math.round(file.size / 1024) + " KB</span><button type='button' aria-label='移除'>×</button>";
      li.querySelector("button").addEventListener("click", function () { li.remove(); });
      list.appendChild(li);
    });
  }
  input.addEventListener("change", function () { render(input.files); });
  ["dragenter", "dragover"].forEach(function (name) {
    zone.addEventListener(name, function (event) { event.preventDefault(); zone.classList.add("is-over"); });
  });
  ["dragleave", "drop"].forEach(function (name) {
    zone.addEventListener(name, function (event) { event.preventDefault(); zone.classList.remove("is-over"); });
  });
  zone.addEventListener("drop", function (event) { if (event.dataTransfer) render(event.dataTransfer.files); });
})();`
},
{
  id: "pixel-loader",
  name: "像素加载器",
  cat: "feedback",
  desc: "8×8 像素网格逐格亮起，适合复古或游戏化界面。",
  tags: ["加载", "像素", "复古", "动效"],
  prompt: "做一个像素风加载器：深色背景，中央是 8×8 的小方块网格，方块按波浪顺序依次亮起再熄灭；下方是等宽大写 LOADING 和百分比文字。方块使用青绿与琥珀两色，整体带轻微扫描线，移动端保持网格尺寸自适应。",
  html: `<div class="pl-pixel">
  <div class="pl-pixel-grid" data-pixel></div>
  <span>LOADING</span>
  <b data-pixel-pct>0%</b>
</div>`,
  css: `.pl-pixel{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(600px 400px at 50% 30%,rgba(15,139,141,.14),transparent 60%),#0b1114;font-family:ui-monospace,Consolas,monospace;overflow:hidden}
.pl-pixel::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.03) 0 1px,transparent 1px 4px)}
.pl-pixel-grid{display:grid;grid-template-columns:repeat(8,12px);gap:5px;position:relative;z-index:1}
.pl-pixel-grid i{width:12px;height:12px;background:#26343a;animation:pl-pixel-on 1.6s ease-in-out infinite;animation-delay:calc(var(--d) * 40ms)}
.pl-pixel-grid i:nth-child(3n){background:#163b3a;animation-name:pl-pixel-alt}
.pl-pixel>span{position:relative;z-index:1;font-size:9px;letter-spacing:.3em;color:#7fe0dd}
.pl-pixel>b{position:relative;z-index:1;font-size:13px;font-weight:400;color:#8fd7d5}
@keyframes pl-pixel-on{0%,100%{opacity:.2;transform:scale(.8)}45%{opacity:1;transform:scale(1);background:#7fe0dd}}
@keyframes pl-pixel-alt{0%,100%{opacity:.2;transform:scale(.8)}45%{opacity:1;transform:scale(1);background:#ffb000}}`,
  js: `(function () {
  var grid = document.querySelector("[data-pixel]");
  var pct = document.querySelector("[data-pixel-pct]");
  if (!grid) return;
  for (var i = 0; i < 64; i += 1) {
    var cell = document.createElement("i");
    cell.style.setProperty("--d", (i % 8) + Math.floor(i / 8));
    grid.appendChild(cell);
  }
  var value = 0;
  setInterval(function () {
    value = (value + 3) % 101;
    if (pct) pct.textContent = value + "%";
  }, 120);
})();`
},
{
  id: "empty-state",
  name: "空状态",
  cat: "feedback",
  desc: "带几何插画、说明与行动按钮的空状态。",
  tags: ["反馈", "空状态", "插画", "引导"],
  prompt: "做一个空状态：浅色背景与居中卡片，卡片上方用 CSS 几何图形画一个打开的盒子（盒盖、盒身、几张飘出的纸片），下方是标题、两行说明和一个主按钮。颜色克制，青绿点缀，移动端缩小插画与内边距。",
  html: `<div class="pl-empty">
  <div class="pl-empty-art" aria-hidden="true">
    <span class="pl-empty-lid"></span>
    <span class="pl-empty-box"></span>
    <i></i><i></i><i></i>
  </div>
  <h2>还没有实验记录</h2>
  <p>创建第一条记录后，读数、对照与结论会在这里按批次归档。</p>
  <button type="button">新建记录</button>
</div>`,
  css: `.pl-empty{width:min(380px,calc(100vw - 40px));margin:auto;padding:34px 28px;border:1px solid rgba(23,50,77,.12);border-radius:20px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.09);text-align:center}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(640px 420px at 50% 20%,rgba(15,139,141,.1),transparent 60%),#f7f9f8}
.pl-empty-art{position:relative;width:120px;height:100px;margin:0 auto 18px}
.pl-empty-box{position:absolute;left:14px;bottom:0;width:92px;height:58px;border:2px solid #17324d;border-radius:6px;background:#f4faf9}
.pl-empty-box::after{content:"";position:absolute;left:10px;right:10px;top:14px;height:2px;background:#0f8b8d;opacity:.4}
.pl-empty-lid{position:absolute;left:8px;top:22px;width:104px;height:18px;border:2px solid #17324d;border-radius:5px;background:#fff;transform:rotate(-8deg);transform-origin:left center}
.pl-empty-art i{position:absolute;width:18px;height:24px;border:1px solid rgba(23,50,77,.25);border-radius:2px;background:#fff;animation:pl-empty-float 3s ease-in-out infinite}
.pl-empty-art i:nth-child(3){left:38px;top:2px;transform:rotate(-8deg)}
.pl-empty-art i:nth-child(4){left:58px;top:8px;transform:rotate(6deg);animation-delay:.4s}
.pl-empty-art i:nth-child(5){left:76px;top:0;transform:rotate(12deg);animation-delay:.8s}
@keyframes pl-empty-float{50%{transform:translateY(-5px) rotate(0)}}
.pl-empty h2{margin-top:6px;font-size:20px;letter-spacing:-.03em;color:#101b26}
.pl-empty p{max-width:270px;margin:8px auto 0;font-size:11px;line-height:1.7;color:#7a8792}
.pl-empty button{min-height:38px;margin-top:18px;padding:0 18px;border:0;border-radius:9px;background:#17324d;font-size:11px;font-weight:700;color:#fff;cursor:pointer}
.pl-empty button:hover{background:#0f8b8d}`,
  js: ``
},
{
  id: "sidebar-nav",
  name: "侧边导航",
  cat: "nav",
  desc: "深色侧栏加浅色内容区的应用式导航。",
  tags: ["导航", "侧边栏", "应用", "工作台"],
  prompt: "做一个应用侧边导航：左侧 220px 深色侧栏，包含品牌、搜索框、四个导航项（其中一项带数字徽标）和底部用户卡片；右侧浅色内容区，包含标题、说明与三张数据卡。点击导航项切换高亮。移动端侧栏变为顶部横向导航。",
  html: `<div class="pl-side">
  <aside class="pl-side-bar">
    <div class="pl-side-brand"><span>启</span>启明工作台</div>
    <label class="pl-side-search"><i>⌕</i><input type="search" placeholder="搜索"></label>
    <nav class="pl-side-nav" data-side-nav>
      <button class="is-active" type="button">概览</button>
      <button type="button">构建 <b>24</b></button>
      <button type="button">结果</button>
      <button type="button">设置</button>
    </nav>
    <div class="pl-side-user"><span>LY</span><div><b>李蕴</b><small>干实验</small></div></div>
  </aside>
  <section class="pl-side-main">
    <span>WORKSPACE / OVERVIEW</span>
    <h1>下午好，李蕴</h1>
    <p>当前有 3 个批次等待读数，1 个批次已完成验证。</p>
    <div class="pl-side-cards">
      <article><b>24</b><span>待处理组合</span></article>
      <article><b>8</b><span>稳定批次</span></article>
      <article><b>98.6%</b><span>阳性率</span></article>
    </div>
  </section>
</div>`,
  css: `.pl-side{display:grid;grid-template-columns:220px 1fr;height:100vh;background:#f5f8f7;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-side-bar{display:flex;flex-direction:column;padding:20px 16px;background:#101b26;color:#dce8eb}
.pl-side-brand{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700}
.pl-side-brand span{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:linear-gradient(135deg,#0f8b8d,#da4167);font-size:11px;color:#fff}
.pl-side-search{display:flex;align-items:center;gap:6px;margin-top:20px;padding:7px 9px;border:1px solid rgba(255,255,255,.12);border-radius:8px;background:rgba(255,255,255,.06)}
.pl-side-search i{font-style:normal;font-size:12px;color:#6f8994}
.pl-side-search input{flex:1;min-width:0;border:0;background:transparent;font-size:10px;color:#fff;outline:none}
.pl-side-search input::placeholder{color:#6f8994}
.pl-side-nav{display:grid;gap:3px;margin-top:18px}
.pl-side-nav button{display:flex;align-items:center;justify-content:space-between;padding:9px 10px;border:0;border-radius:7px;background:transparent;font-size:11px;text-align:left;color:#9db2bb;cursor:pointer}
.pl-side-nav button:hover{background:rgba(255,255,255,.07);color:#fff}
.pl-side-nav button.is-active{background:rgba(15,139,141,.22);color:#fff}
.pl-side-nav b{min-width:20px;padding:1px 5px;border-radius:99px;background:#0f8b8d;font-size:8px;font-weight:700;color:#fff;text-align:center}
.pl-side-user{display:flex;align-items:center;gap:8px;margin-top:auto;padding-top:14px;border-top:1px solid rgba(255,255,255,.1)}
.pl-side-user>span{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,#17324d,#0f8b8d);font-size:9px;font-weight:700;color:#fff}
.pl-side-user b{display:block;font-size:10.5px}
.pl-side-user small{display:block;font-size:8.5px;color:#7b949e}
.pl-side-main{padding:44px 46px;overflow:auto}
.pl-side-main>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-side-main h1{margin-top:10px;font-size:clamp(1.8rem,3.2vw,2.6rem);letter-spacing:-.04em;color:#101b26}
.pl-side-main>p{margin-top:8px;font-size:11.5px;color:#7a8792}
.pl-side-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:26px}
.pl-side-cards article{padding:16px;border:1px solid rgba(23,50,77,.1);border-radius:11px;background:#fff}
.pl-side-cards b{display:block;font-size:24px;letter-spacing:-.04em;color:#17324d}
.pl-side-cards span{display:block;margin-top:4px;font-size:9px;color:#8a97a2}
@media (max-width:700px){.pl-side{grid-template-columns:1fr;grid-template-rows:auto 1fr}.pl-side-bar{padding:12px 16px}.pl-side-nav{grid-auto-flow:column;overflow:auto;margin-top:10px}.pl-side-search,.pl-side-user{display:none}.pl-side-main{padding:26px 20px}.pl-side-cards{grid-template-columns:1fr}}`,
  js: `(function () {
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-side-nav] button"));
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (item) { item.classList.toggle("is-active", item === button); });
    });
  });
})();`
},
{
  id: "mobile-tabbar",
  name: "移动标签栏",
  cat: "nav",
  desc: "手机外框内的底部标签栏与中央悬浮按钮。",
  tags: ["导航", "移动端", "标签栏", "悬浮按钮"],
  prompt: "做一个移动端底部标签栏演示：居中放一个手机外框，顶部有刘海和标题，内容区显示一张简洁的概览卡，底部是四个标签（首页、搜索、数据、我的）和中央悬浮加号按钮。点击标签切换高亮，中央按钮显示一个提示条。整体深色界面、浅色卡片，桌面端保持手机比例。",
  html: `<div class="pl-phone-wrap">
  <div class="pl-phone">
    <div class="pl-phone-notch"></div>
    <div class="pl-phone-head"><span>9:41</span><b>概览</b><span>•••</span></div>
    <div class="pl-phone-body">
      <span>BATCH 07</span>
      <h2>低氧表达</h2>
      <div class="pl-phone-card"><b>98.6%</b><span>阳性率</span><i></i><i></i><i></i><i></i><i></i></div>
      <div class="pl-phone-row"><div><b>3.2×</b><span>相对基线</span></div><div><b>8 批</b><span>稳定验证</span></div></div>
    </div>
    <nav class="pl-tabbar" data-tabbar>
      <button class="is-active" type="button" aria-label="首页">⌂</button>
      <button type="button" aria-label="搜索">⌕</button>
      <button class="pl-tab-fab" type="button" data-tab-fab aria-label="新建">+</button>
      <button type="button" aria-label="数据">▥</button>
      <button type="button" aria-label="我的">◉</button>
    </nav>
    <div class="pl-phone-toast" data-phone-toast>已新建记录</div>
  </div>
</div>`,
  css: `.pl-phone-wrap{min-height:100vh;display:grid;place-items:center;padding:30px;background:radial-gradient(700px 460px at 50% 10%,rgba(15,139,141,.16),transparent 60%),#0b1116}
.pl-phone{position:relative;width:280px;height:520px;overflow:hidden;border:7px solid #1b2730;border-radius:34px;background:#f7faf9;box-shadow:0 34px 70px rgba(0,0,0,.4)}
.pl-phone-notch{position:absolute;top:0;left:50%;width:92px;height:20px;margin-left:-46px;border-radius:0 0 12px 12px;background:#1b2730;z-index:2}
.pl-phone-head{display:flex;align-items:center;justify-content:space-between;padding:28px 16px 10px;font-size:8px;color:#8a97a2}
.pl-phone-head b{font-size:11px;color:#17324d}
.pl-phone-body{padding:6px 16px 80px}
.pl-phone-body>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#0f8b8d}
.pl-phone-body h2{margin-top:6px;font-size:24px;letter-spacing:-.04em;color:#101b26}
.pl-phone-card{margin-top:16px;padding:16px;border-radius:14px;background:#fff;box-shadow:0 12px 26px rgba(23,50,77,.08)}
.pl-phone-card b{display:block;font-size:32px;letter-spacing:-.05em;color:#17324d}
.pl-phone-card span{font-size:9px;color:#8a97a2}
.pl-phone-card i{display:block;height:6px;margin-top:9px;border-radius:99px;background:linear-gradient(90deg,#0f8b8d,#7fe0dd);width:var(--w,80%)}
.pl-phone-card i:nth-child(3){--w:94%}
.pl-phone-card i:nth-child(4){--w:72%;background:linear-gradient(90deg,#ffb000,#ffd166)}
.pl-phone-card i:nth-child(5){--w:58%}
.pl-phone-card i:nth-child(6){--w:46%;background:linear-gradient(90deg,#da4167,#f08aa0)}
.pl-phone-row{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}
.pl-phone-row div{padding:12px;border-radius:12px;background:#eef4f2}
.pl-phone-row b{display:block;font-size:17px;color:#17324d}
.pl-phone-row span{font-size:8px;color:#8a97a2}
.pl-tabbar{position:absolute;left:10px;right:10px;bottom:10px;display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-radius:20px;background:rgba(16,27,38,.94);backdrop-filter:blur(14px)}
.pl-tabbar button{display:grid;place-items:center;width:30px;height:30px;border:0;border-radius:50%;background:transparent;font-size:14px;color:#7b949e;cursor:pointer}
.pl-tabbar button.is-active{color:#7fe0dd}
.pl-tabbar .pl-tab-fab{width:42px;height:42px;margin-top:-20px;background:#0f8b8d;font-size:20px;color:#fff;box-shadow:0 8px 18px rgba(15,139,141,.4)}
.pl-phone-toast{position:absolute;left:50%;bottom:78px;padding:6px 10px;border-radius:99px;background:#101b26;font-size:8.5px;color:#fff;opacity:0;transform:translate(-50%,6px);transition:opacity .2s,transform .2s;pointer-events:none}
.pl-phone-toast.is-show{opacity:1;transform:translate(-50%,0)}`,
  js: `(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-tabbar] button:not([data-tab-fab])"));
  var fab = document.querySelector("[data-tab-fab]");
  var toast = document.querySelector("[data-phone-toast]");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (item) { item.classList.toggle("is-active", item === tab); });
    });
  });
  if (fab) {
    fab.addEventListener("click", function () {
      if (!toast) return;
      toast.classList.add("is-show");
      setTimeout(function () { toast.classList.remove("is-show"); }, 1500);
    });
  }
})();`
},
{
  id: "kanban-board",
  name: "看板",
  cat: "data",
  desc: "三列任务看板，卡片可在列间移动。",
  tags: ["数据", "看板", "任务", "状态"],
  prompt: "做一个三列任务看板：待处理、进行中、已完成，每列有标题、计数和若干任务卡；卡片包含标签、标题、负责人头像和移动按钮。点击移动按钮把卡片送到下一列，并更新列计数。整体浅灰背景、白色列、细边框，移动端横向滚动。",
  html: `<div class="pl-kanban" data-kanban>
  <section class="pl-kb-col" data-col="todo"><header><span>待处理</span><b data-kb-count>2</b></header><div><article><span>湿实验</span><h3>批次 08 取样</h3><footer><i>ML</i><button type="button" data-kb-move>→</button></footer></article><article><span>模型</span><h3>更新参数表</h3><footer><i>LY</i><button type="button" data-kb-move>→</button></footer></article></div></section>
  <section class="pl-kb-col" data-col="doing"><header><span>进行中</span><b data-kb-count>1</b></header><div><article><span>设计</span><h3>结果页信息架构</h3><footer><i>CC</i><button type="button" data-kb-move>→</button></footer></article></div></section>
  <section class="pl-kb-col" data-col="done"><header><span>已完成</span><b data-kb-count>1</b></header><div><article><span>安全</span><h3>废弃物流程评审</h3><footer><i>XA</i><button type="button" data-kb-move>→</button></footer></article></div></section>
</div>`,
  css: `.pl-kanban{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;min-height:100vh;padding:40px 44px;background:#f3f6f5;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;overflow:auto}
.pl-kb-col{min-width:0;padding:14px;border:1px solid rgba(23,50,77,.1);border-radius:14px;background:#e9efed}
.pl-kb-col header{display:flex;align-items:center;justify-content:space-between;padding:0 4px 10px;border-bottom:1px solid rgba(23,50,77,.1)}
.pl-kb-col header span{font-size:11px;font-weight:700;color:#17324d}
.pl-kb-col header b{display:grid;place-items:center;min-width:20px;height:18px;border-radius:99px;background:#fff;font-size:8px;color:#607080}
.pl-kb-col>div{display:grid;gap:8px;margin-top:10px}
.pl-kb-col article{padding:12px;border:1px solid rgba(23,50,77,.1);border-radius:10px;background:#fff;box-shadow:0 4px 12px rgba(23,50,77,.04)}
.pl-kb-col article>span{font-size:8px;font-weight:700;letter-spacing:.08em;color:#0f8b8d}
.pl-kb-col article h3{margin-top:6px;font-size:11.5px;line-height:1.4;color:#17324d}
.pl-kb-col article footer{display:flex;align-items:center;justify-content:space-between;margin-top:12px}
.pl-kb-col article i{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#eef4f2;font-size:7px;font-style:normal;font-weight:700;color:#0f8b8d}
.pl-kb-col article button{width:24px;height:24px;border:1px solid rgba(23,50,77,.12);border-radius:6px;background:#fff;font-size:11px;color:#607080;cursor:pointer}
.pl-kb-col article button:hover{border-color:#0f8b8d;color:#0f8b8d}
@media (max-width:700px){.pl-kanban{grid-template-columns:repeat(3,220px);padding:24px}}`,
  js: `(function () {
  var board = document.querySelector("[data-kanban]");
  if (!board) return;
  var order = ["todo", "doing", "done"];
  function counts() {
    board.querySelectorAll("[data-col]").forEach(function (col) {
      var n = col.querySelectorAll("article").length;
      var badge = col.querySelector("[data-kb-count]");
      if (badge) badge.textContent = n;
    });
  }
  board.addEventListener("click", function (event) {
    var button = event.target.closest("[data-kb-move]");
    if (!button) return;
    var article = button.closest("article");
    var col = button.closest("[data-col]");
    var index = order.indexOf(col.getAttribute("data-col"));
    if (index < order.length - 1) {
      board.querySelector('[data-col="' + order[index + 1] + '"] > div').appendChild(article);
      counts();
    }
  });
})();`
},
{
  id: "donut-chart",
  name: "环形图",
  cat: "data",
  desc: "纯 CSS 分段环形图，带图例与中心总数。",
  tags: ["数据", "环形图", "图表", "图例"],
  prompt: "做一个纯 CSS 环形图：左侧是 conic-gradient 画出的四段环，中心留白并显示总量；右侧是四条图例，每条有颜色圆点、名称、数值和百分比。环段使用青绿、琥珀、珊瑚与深蓝，悬停图例时对应段变亮。整体白色卡片、浅灰背景，移动端上下排列。",
  html: `<div class="pl-donut-wrap">
  <div class="pl-donut"><div class="pl-donut-hole"><b>1,248</b><span>样本读数</span></div></div>
  <div class="pl-donut-legend">
    <div><i style="--c:#0f8b8d"></i><span>湿实验</span><b>42%</b></div>
    <div><i style="--c:#ffb000"></i><span>模型</span><b>26%</b></div>
    <div><i style="--c:#da4167"></i><span>人类实践</span><b>18%</b></div>
    <div><i style="--c:#17324d"></i><span>安全</span><b>14%</b></div>
  </div>
</div>`,
  css: `.pl-donut-wrap{display:flex;align-items:center;justify-content:center;gap:52px;min-height:100vh;padding:40px;background:#f6f8f7;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-donut{position:relative;width:240px;height:240px;border-radius:50%;background:conic-gradient(#0f8b8d 0 42%,#ffb000 42% 68%,#da4167 68% 86%,#17324d 86% 100%);box-shadow:0 24px 50px rgba(23,50,77,.14)}
.pl-donut::after{content:"";position:absolute;inset:34px;border-radius:50%;background:#f6f8f7}
.pl-donut-hole{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:1}
.pl-donut-hole b{font-size:32px;letter-spacing:-.05em;color:#17324d}
.pl-donut-hole span{font-size:9px;color:#8a97a2}
.pl-donut-legend{display:grid;gap:10px;min-width:190px}
.pl-donut-legend div{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:8px;transition:background .2s}
.pl-donut-legend div:hover{background:#fff}
.pl-donut-legend i{width:9px;height:9px;border-radius:3px;background:var(--c)}
.pl-donut-legend span{flex:1;font-size:11px;color:#4d5d6a}
.pl-donut-legend b{font-family:ui-monospace,Consolas,monospace;font-size:10px;color:#17324d}
@media (max-width:640px){.pl-donut-wrap{flex-direction:column;gap:26px}.pl-donut{width:200px;height:200px}}`,
  js: ``
}
);
