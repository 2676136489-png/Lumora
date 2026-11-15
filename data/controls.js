/* 按钮、卡片、表单类插件 */
window.PLUGINS.push(
{
  id: "button-shine",
  name: "流光按钮",
  cat: "buttons",
  desc: "主按钮、次按钮与图标按钮的统一展示，悬停有流光。",
  tags: ["button", "按钮", "流光", "hover"],
  prompt: "做一个按钮样式展示区块：三个示例并排，第一个是深色主按钮，悬停时有一道斜向白色高光从左扫到右，并且整体上浮 2px；第二个是带箭头的描边次按钮；第三个是方形图标按钮。每个按钮下方有 10px 的小字说明。整体居中放在浅色背景上，移动端纵向排列。",
  html: `<div class="pl-btns">
  <header class="pl-btns-head">
    <span>按钮</span>
    <h2>按钮的三个基本态</h2>
    <p>主行动、次行动和图标按钮，统一在 44px 高度体系内。</p>
  </header>
  <div class="pl-btns-row">
    <div class="pl-btns-item"><a class="pl-btn-primary" href="#"><span>开始探索</span><i></i></a><small>悬停有流光扫过</small></div>
    <div class="pl-btns-item"><a class="pl-btn-ghost" href="#">查看文档 <b>→</b></a><small>次级行动</small></div>
    <div class="pl-btns-item"><button class="pl-btn-icon" type="button" aria-label="收藏">☆</button><small>图标按钮</small></div>
  </div>
</div>`,
  css: `.pl-btns{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:48px;text-align:center;background:radial-gradient(700px 420px at 50% 0%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#f9fbfb,#edf2f2)}
.pl-btns-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-btns-head h2{margin-top:10px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.03em;color:#101b26}
.pl-btns-head p{margin-top:8px;font-size:12.5px;color:#6a7885}
.pl-btns-row{display:flex;flex-wrap:wrap;align-items:start;justify-content:center;gap:26px;margin-top:34px}
.pl-btns-item{display:grid;justify-items:center;gap:12px}
.pl-btns-item small{font-size:10.5px;color:#7a8792}
.pl-btn-primary{position:relative;display:inline-flex;align-items:center;justify-content:center;overflow:hidden;min-height:48px;padding:0 26px;border-radius:12px;background:#101b26;color:#fff;font-size:13.5px;font-weight:800;transition:transform .2s,box-shadow .2s}
.pl-btn-primary i{position:absolute;top:-20%;left:-40%;width:34%;height:140%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.5),transparent);transform:skewX(-20deg) translateX(-160%);transition:transform .6s ease}
.pl-btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(16,27,38,.22)}
.pl-btn-primary:hover i{transform:skewX(-20deg) translateX(520%)}
.pl-btn-ghost{display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:0 22px;border:1px solid rgba(23,50,77,.18);border-radius:12px;background:rgba(255,255,255,.66);color:#101b26;font-size:13.5px;font-weight:700;backdrop-filter:blur(10px);transition:background .2s,transform .2s}
.pl-btn-ghost b{transition:transform .2s}
.pl-btn-ghost:hover{background:#fff;transform:translateY(-2px)}
.pl-btn-ghost:hover b{transform:translateX(3px)}
.pl-btn-icon{display:grid;place-items:center;width:48px;height:48px;border:1px solid rgba(23,50,77,.18);border-radius:12px;background:rgba(255,255,255,.66);color:#17324d;font-size:20px;cursor:pointer;backdrop-filter:blur(10px);transition:background .2s,transform .2s,color .2s}
.pl-btn-icon:hover{background:#ffb000;color:#241900;transform:translateY(-2px) rotate(8deg)}
@media (max-width:700px){.pl-btns{padding:32px 20px}.pl-btns-row{gap:20px}}`,
  js: ``
},
{
  id: "button-magnetic",
  name: "磁吸按钮",
  cat: "buttons",
  desc: "追踪指针的圆形按钮，带跟随位移与复位。",
  tags: ["button", "按钮", "磁吸", "指针", "magnetic"],
  prompt: "做一个磁吸按钮演示：在浅色渐变背景中央放一个 160px 的圆形深色按钮，内部是文字和箭头。鼠标在周围区域移动时，按钮朝指针方向轻微位移（约为偏移量的 18%），离开后平滑回到原位。按钮外圈有青绿色光晕，悬停时放大。页面上方有小标题和操作提示。",
  html: `<div class="pl-mag" data-mag-area>
  <header class="pl-mag-head"><span>磁吸</span><h2>靠近一点</h2><p>在区域内移动指针，按钮会轻轻跟随。</p></header>
  <div class="pl-mag-stage">
    <div class="pl-mag-glow"></div>
    <button class="pl-mag-btn" type="button" data-mag-btn><span>进入项目</span><b>→</b></button>
  </div>
  <small class="pl-mag-foot">指针跟随 · translate3d</small>
</div>`,
  css: `.pl-mag{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:40px;text-align:center;background:radial-gradient(700px 460px at 50% 40%,rgba(255,176,0,.16),transparent 60%),linear-gradient(180deg,#fbfcfc,#edf3f2);overflow:hidden}
.pl-mag-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-mag-head h2{margin-top:8px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.03em;color:#101b26}
.pl-mag-head p{margin-top:6px;font-size:12px;color:#6a7885}
.pl-mag-stage{position:relative;display:grid;place-items:center;width:360px;height:230px;margin:14px 0}
.pl-mag-glow{position:absolute;width:210px;height:210px;border-radius:50%;background:radial-gradient(circle,rgba(15,139,141,.3),transparent 68%);filter:blur(10px);animation:pl-mag-breathe 4s ease-in-out infinite}
.pl-mag-btn{position:relative;z-index:2;display:grid;place-content:center;gap:4px;width:150px;height:150px;border:0;border-radius:50%;background:linear-gradient(150deg,#17324d,#0d2235);color:#fff;cursor:pointer;box-shadow:0 26px 50px rgba(23,50,77,.3),inset 0 1px 0 rgba(255,255,255,.16);transition:transform .16s ease-out,box-shadow .2s;will-change:transform}
.pl-mag-btn span{font-size:14px;font-weight:800;letter-spacing:.02em}
.pl-mag-btn b{font-size:16px;color:#ffb000;transition:transform .2s}
.pl-mag-btn:hover{box-shadow:0 32px 60px rgba(23,50,77,.36);transform:scale(1.04)}
.pl-mag-btn:hover b{transform:translateX(4px)}
.pl-mag-foot{font-size:10px;letter-spacing:.12em;color:#8a97a2}
@keyframes pl-mag-breathe{50%{transform:scale(1.08);opacity:.8}}
@media (max-width:600px){.pl-mag-stage{width:300px}}`,
  js: `(function () {
  var area = document.querySelector("[data-mag-area]");
  var button = document.querySelector("[data-mag-btn]");
  area.addEventListener("pointermove", function (event) {
    var box = button.getBoundingClientRect();
    var cx = box.left + box.width / 2;
    var cy = box.top + box.height / 2;
    var dx = (event.clientX - cx) * 0.18;
    var dy = (event.clientY - cy) * 0.18;
    button.style.transform = "translate3d(" + dx + "px," + dy + "px,0)";
  });
  area.addEventListener("pointerleave", function () {
    button.style.transform = "translate3d(0,0,0)";
  });
})();`
},
{
  id: "segmented-control",
  name: "分段控件",
  cat: "buttons",
  desc: "三段切换，黑色滑块跟随并切换内容面板。",
  tags: ["segmented", "分段", "切换", "tabs"],
  prompt: "做一个分段控件：一个圆角胶囊容器里有三个等宽选项（概览、实验、结果），选中项背后有一块黑色圆角滑块，切换时滑块平滑移动；下方内容面板随选项淡入切换。面板高度固定，避免跳动。整体放在浅色卡片中，移动端保持横向三个选项。",
  html: `<div class="pl-seg" data-seg>
  <header class="pl-seg-head"><span>视图模式</span><h2>同一份数据，三种读法</h2></header>
  <div class="pl-seg-track">
    <span class="pl-seg-pill"></span>
    <button class="is-active" type="button" data-seg-btn="0">概览</button>
    <button type="button" data-seg-btn="1">实验</button>
    <button type="button" data-seg-btn="2">结果</button>
  </div>
  <div class="pl-seg-panels">
    <div class="pl-seg-panel is-active" data-seg-panel="0">
      <div class="pl-seg-stats"><div><strong>07</strong><span>实验批次</span></div><div><strong>3</strong><span>设计循环</span></div><div><strong>16</strong><span>团队成员</span></div></div>
      <p>这是项目的整体快照，适合放在页面顶部让人快速建立印象。</p>
    </div>
    <div class="pl-seg-panel" data-seg-panel="1">
      <ul class="pl-seg-list"><li><b>01</b>构建启动子文库并验证多样性</li><li><b>02</b>在低氧条件下筛选高表达组合</li><li><b>03</b>用对照实验排除位置效应</li></ul>
    </div>
    <div class="pl-seg-panel" data-seg-panel="2">
      <div class="pl-seg-result"><strong>3.2×</strong><div><b>表达强度提升</b><span>连续 8 批稳定，变异系数 &lt; 6%</span></div></div>
    </div>
  </div>
</div>`,
  css: `.pl-seg{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:40px;background:linear-gradient(180deg,#f8fbfb,#eef3f2)}
.pl-seg-head{width:min(460px,100%);margin-bottom:18px}
.pl-seg-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-seg-head h2{margin-top:8px;font-size:clamp(1.6rem,2.8vw,2.1rem);letter-spacing:-.03em;color:#101b26}
.pl-seg-track{position:relative;display:flex;width:min(460px,100%);padding:4px;border:1px solid rgba(23,50,77,.12);border-radius:999px;background:rgba(255,255,255,.8);box-shadow:0 10px 24px rgba(23,50,77,.06)}
.pl-seg-pill{position:absolute;top:4px;left:4px;width:calc((100% - 8px) / 3);height:calc(100% - 8px);border-radius:999px;background:#17324d;transition:transform .3s cubic-bezier(.2,.8,.2,1)}
.pl-seg-track button{position:relative;z-index:1;flex:1;padding:10px 0;border:0;background:transparent;font-size:12.5px;font-weight:700;color:#7a8792;cursor:pointer;transition:color .25s}
.pl-seg-track button.is-active{color:#fff}
.pl-seg-panels{width:min(460px,100%);min-height:190px;margin-top:14px;padding:22px;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:rgba(255,255,255,.86);box-shadow:0 16px 36px rgba(23,50,77,.06)}
.pl-seg-panel{display:none;animation:pl-seg-in .3s ease both}
.pl-seg-panel.is-active{display:block}
.pl-seg-stats{display:flex;gap:30px;padding-bottom:16px;border-bottom:1px solid rgba(23,50,77,.1)}
.pl-seg-stats strong{display:block;font-size:28px;letter-spacing:-.04em;color:#0f8b8d}
.pl-seg-stats span{font-size:10.5px;color:#7a8792}
.pl-seg-panel p{margin-top:14px;font-size:12px;line-height:1.7;color:#607080}
.pl-seg-list{display:grid;gap:10px;margin:0;padding:0;list-style:none}
.pl-seg-list li{display:flex;gap:10px;font-size:12px;line-height:1.5;color:#4d5d6a}
.pl-seg-list b{flex:none;width:22px;height:22px;border-radius:50%;background:rgba(15,139,141,.1);font-size:9.5px;line-height:22px;text-align:center;color:#0f8b8d}
.pl-seg-result{display:flex;align-items:center;gap:18px}
.pl-seg-result strong{font-size:46px;letter-spacing:-.05em;color:#0f8b8d}
.pl-seg-result b{display:block;font-size:12.5px;color:#101b26}
.pl-seg-result span{display:block;margin-top:3px;font-size:10.5px;color:#7a8792}
@keyframes pl-seg-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@media (max-width:600px){.pl-seg{padding:28px 20px}}`,
  js: `(function () {
  var box = document.querySelector("[data-seg]");
  var buttons = Array.prototype.slice.call(box.querySelectorAll("[data-seg-btn]"));
  var panels = Array.prototype.slice.call(box.querySelectorAll("[data-seg-panel]"));
  var pill = box.querySelector(".pl-seg-pill");
  buttons.forEach(function (button, i) {
    button.addEventListener("click", function () {
      buttons.forEach(function (item, j) { item.classList.toggle("is-active", i === j); });
      panels.forEach(function (panel, j) { panel.classList.toggle("is-active", i === j); });
      pill.style.transform = "translateX(" + (i * 100) + "%)";
    });
  });
})();`
},
{
  id: "tilt-card",
  name: "3D 倾斜卡",
  cat: "cards",
  desc: "跟随指针的 3D 倾斜与高光，适合重点内容卡。",
  tags: ["card", "卡片", "3D", "tilt", "视差"],
  prompt: "做一个 3D 倾斜卡片：一张 360px 宽的白色数据卡，包含小标签、标题、说明、两组指标和一个文字链接。鼠标在卡片上移动时，卡片分别绕 X/Y 轴旋转约 8 度，并有一个跟随指针的径向高光；离开后平滑回正。外层容器提供 perspective，卡片底部有深色投影。",
  html: `<div class="pl-tilt-wrap">
  <header class="pl-tilt-head"><span>数据卡片</span><h2>让重点内容有重量</h2></header>
  <article class="pl-tilt" data-tilt>
    <div class="pl-tilt-shine"></div>
    <span class="pl-tilt-tag">批次 07 · 2026</span>
    <h3>荧光表达报告</h3>
    <p>优化后的启动子组合在低氧条件下保持稳定，连续 8 批读数一致。</p>
    <div class="pl-tilt-stats">
      <div><strong>98.6%</strong><span>阳性率</span></div>
      <div><strong>3.2×</strong><span>相对基线</span></div>
    </div>
    <a class="pl-tilt-link" href="#">查看完整数据 →</a>
  </article>
  <small class="pl-tilt-foot">移动指针查看倾斜效果</small>
</div>`,
  css: `.pl-tilt-wrap{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:40px;perspective:1000px;background:radial-gradient(700px 460px at 50% 30%,rgba(15,139,141,.16),transparent 60%),linear-gradient(180deg,#fbfcfc,#edf2f2)}
.pl-tilt-head{justify-self:start;width:min(560px,100%);margin-bottom:18px}
.pl-tilt-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-tilt-head h2{margin-top:8px;font-size:clamp(1.6rem,2.8vw,2.1rem);letter-spacing:-.03em;color:#101b26}
.pl-tilt{position:relative;width:340px;padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:20px;background:rgba(255,255,255,.9);box-shadow:0 30px 60px rgba(23,50,77,.16);transform:rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .18s ease-out,box-shadow .2s;transform-style:preserve-3d;overflow:hidden}
.pl-tilt:hover{box-shadow:0 40px 80px rgba(23,50,77,.22)}
.pl-tilt-shine{position:absolute;inset:0;background:radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(255,255,255,.9),transparent 12rem);opacity:.9;pointer-events:none}
.pl-tilt>*{position:relative}
.pl-tilt-tag{display:inline-flex;padding:5px 9px;border-radius:999px;background:rgba(15,139,141,.1);font-size:9px;font-weight:800;letter-spacing:.12em;color:#0f8b8d}
.pl-tilt h3{margin-top:14px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-tilt p{margin-top:8px;font-size:12px;line-height:1.7;color:#607080}
.pl-tilt-stats{display:flex;gap:28px;margin-top:20px;padding-top:18px;border-top:1px solid rgba(23,50,77,.1)}
.pl-tilt-stats strong{display:block;font-size:26px;letter-spacing:-.04em;color:#17324d}
.pl-tilt-stats span{font-size:10px;color:#7a8792}
.pl-tilt-link{display:inline-flex;margin-top:20px;font-size:11.5px;font-weight:700;color:#0f8b8d}
.pl-tilt-foot{margin-top:22px;font-size:10px;letter-spacing:.1em;color:#8a97a2}
@media (max-width:600px){.pl-tilt{width:min(340px,calc(100vw - 40px))}}`,
  js: `(function () {
  var card = document.querySelector("[data-tilt]");
  card.addEventListener("pointermove", function (event) {
    var box = card.getBoundingClientRect();
    var x = event.clientX - box.left;
    var y = event.clientY - box.top;
    card.style.setProperty("--rx", ((y / box.height) - 0.5) * -9 + "deg");
    card.style.setProperty("--ry", ((x / box.width) - 0.5) * 9 + "deg");
    card.style.setProperty("--mx", x + "px");
    card.style.setProperty("--my", y + "px");
  });
  card.addEventListener("pointerleave", function () {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
  });
})();`
},
{
  id: "profile-card",
  name: "成员卡片",
  cat: "cards",
  desc: "带头像、数据与关注按钮的团队成员卡。",
  tags: ["card", "卡片", "profile", "团队", "成员"],
  prompt: "做一个团队成员卡片：顶部是青绿渐变封面，左侧头像用首字母圆形徽章压住封面下沿；下方依次是姓名、角色、三列小数据（贡献、实验、模型）和一个通栏关注按钮。点击关注后按钮变成实心已关注状态，数字加一。卡片圆角 18px，带柔和阴影，悬停上浮。",
  html: `<div class="pl-profile-wrap">
  <article class="pl-profile">
    <div class="pl-profile-cover"><span>干实验</span></div>
    <div class="pl-profile-body">
      <span class="pl-profile-avatar">LY</span>
      <h3>李蕴</h3>
      <p>干实验 · 建模与数据可视化</p>
      <div class="pl-profile-stats">
        <div><strong data-profile-count="24">24</strong><span>贡献</span></div>
        <div><strong>8</strong><span>实验</span></div>
        <div><strong>3</strong><span>模型</span></div>
      </div>
      <button class="pl-profile-follow" type="button" data-follow>关注</button>
    </div>
  </article>
  <small class="pl-profile-foot">点击按钮切换关注状态</small>
</div>`,
  css: `.pl-profile-wrap{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:40px;background:radial-gradient(700px 460px at 70% 20%,rgba(255,176,0,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-profile{width:330px;overflow:hidden;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.14);transition:transform .25s,box-shadow .25s}
.pl-profile:hover{transform:translateY(-4px);box-shadow:0 34px 70px rgba(23,50,77,.2)}
.pl-profile-cover{position:relative;height:88px;background:radial-gradient(220px 120px at 80% 0%,rgba(255,176,0,.5),transparent 70%),linear-gradient(135deg,#0f8b8d,#17324d)}
.pl-profile-cover span{position:absolute;top:14px;right:14px;padding:4px 8px;border:1px solid rgba(255,255,255,.24);border-radius:999px;font-size:8.5px;font-weight:800;letter-spacing:.14em;color:#d9f0ef}
.pl-profile-body{padding:0 22px 22px}
.pl-profile-avatar{display:grid;place-items:center;width:64px;height:64px;margin-top:-32px;border:3px solid #fff;border-radius:50%;background:linear-gradient(135deg,#17324d,#0f8b8d);color:#fff;font-size:18px;font-weight:800;box-shadow:0 8px 20px rgba(23,50,77,.2)}
.pl-profile h3{margin-top:12px;font-size:19px;letter-spacing:-.02em;color:#101b26}
.pl-profile p{margin-top:4px;font-size:11.5px;color:#7a8792}
.pl-profile-stats{display:flex;justify-content:space-between;margin-top:18px;padding:14px 0;border-top:1px solid rgba(23,50,77,.09);border-bottom:1px solid rgba(23,50,77,.09)}
.pl-profile-stats div{flex:1;text-align:center}
.pl-profile-stats strong{display:block;font-size:18px;letter-spacing:-.03em;color:#17324d;font-variant-numeric:tabular-nums}
.pl-profile-stats span{display:block;margin-top:2px;font-size:9.5px;color:#8a97a2}
.pl-profile-follow{width:100%;margin-top:18px;min-height:40px;border:0;border-radius:10px;background:#17324d;color:#fff;font-size:12px;font-weight:800;cursor:pointer;transition:background .2s,color .2s}
.pl-profile-follow:hover{background:#0f8b8d}
.pl-profile-follow.is-followed{background:rgba(15,139,141,.12);color:#0f8b8d}
.pl-profile-foot{margin-top:18px;font-size:10px;letter-spacing:.1em;color:#8a97a2}`,
  js: `(function () {
  var button = document.querySelector("[data-follow]");
  var counter = document.querySelector("[data-profile-count]");
  button.addEventListener("click", function () {
    var on = button.classList.toggle("is-followed");
    button.textContent = on ? "已关注 ✓" : "关注";
    counter.textContent = on ? "25" : "24";
  });
})();`
},
{
  id: "flip-card",
  name: "翻转卡片",
  cat: "cards",
  desc: "正反两面的 3D 翻转卡，悬停或点击切换。",
  tags: ["card", "卡片", "flip", "翻转", "3D"],
  prompt: "做一个 3D 翻转卡片：正面是深青色渐变，显示编号、标题和一句提示；背面是白色，显示一段解释和一个链接。卡片宽 300、高 330，悬停时绕 Y 轴旋转 180 度，背面内容同步转正；同时支持点击切换，方便触屏。外层容器设置 perspective，卡片启用 preserve-3d。",
  html: `<div class="pl-flip-wrap">
  <div class="pl-flip" data-flip tabindex="0">
    <div class="pl-flip-face pl-flip-front">
      <span>01 / 03</span>
      <h3>为什么是<br>低氧条件？</h3>
      <p>悬停或点击翻面</p>
    </div>
    <div class="pl-flip-face pl-flip-back">
      <span>答案</span>
      <p>因为目标应用场景发生在肠道低氧环境，体外常氧条件下的高表达并不能代表真实效果。</p>
      <a href="#">查看实验依据 →</a>
    </div>
  </div>
</div>`,
  css: `.pl-flip-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;perspective:1200px;background:radial-gradient(700px 460px at 50% 40%,rgba(15,139,141,.16),transparent 60%),linear-gradient(180deg,#fbfcfc,#edf2f2)}
.pl-flip{position:relative;width:300px;height:330px;transform-style:preserve-3d;transition:transform .65s cubic-bezier(.2,.8,.2,1);cursor:pointer}
.pl-flip:hover,.pl-flip.is-flipped{transform:rotateY(180deg)}
.pl-flip-face{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between;padding:26px;border-radius:20px;backface-visibility:hidden;box-shadow:0 30px 60px rgba(23,50,77,.2)}
.pl-flip-front{background:radial-gradient(260px 180px at 80% 0%,rgba(255,176,0,.3),transparent 70%),linear-gradient(150deg,#17324d,#0d2235);color:#fff}
.pl-flip-front span{font-size:9px;font-weight:800;letter-spacing:.16em;color:#8fd7d5}
.pl-flip-front h3{font-size:30px;line-height:1.08;letter-spacing:-.04em;color:#fff}
.pl-flip-front p{font-size:10.5px;letter-spacing:.08em;color:#8ba7b2}
.pl-flip-back{transform:rotateY(180deg);background:#fff;color:#101b26}
.pl-flip-back span{font-size:9px;font-weight:800;letter-spacing:.16em;color:#0f8b8d}
.pl-flip-back p{font-size:13px;line-height:1.8;color:#4d5d6a}
.pl-flip-back a{font-size:11.5px;font-weight:800;color:#0f8b8d}`,
  js: `(function () {
  var card = document.querySelector("[data-flip]");
  card.addEventListener("click", function () { card.classList.toggle("is-flipped"); });
  card.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      card.classList.toggle("is-flipped");
    }
  });
})();`
},
{
  id: "floating-input",
  name: "浮动标签表单",
  cat: "forms",
  desc: "聚焦时标签上浮，带下划线动画与提交状态。",
  tags: ["form", "表单", "input", "浮动标签", "登录"],
  prompt: "做一个浮动标签表单卡片：白色圆角卡片内包含标题、说明、两个输入框（邮箱和密码）和一个深色提交按钮。输入框默认显示占位标签，聚焦或有内容时标签缩小上浮到顶部，底部出现青绿色下划线并展开。提交后按钮变为已提交状态。适合登录或订阅场景。",
  html: `<form class="pl-form" data-pl-form>
  <span class="pl-form-tag">加入通讯</span>
  <h2>创建你的项目空间</h2>
  <p>保存进度、复用插件，并与团队共享同一套设计语言。</p>
  <label class="pl-field"><input type="email" placeholder=" " required><span>邮箱地址</span><i></i></label>
  <label class="pl-field"><input type="password" placeholder=" " required><span>设置密码</span><i></i></label>
  <button type="submit">创建账号 <b>→</b></button>
  <small>提交即表示同意服务条款与隐私政策。</small>
</form>`,
  css: `.pl-form{width:min(360px,calc(100vw - 40px));margin:auto;padding:30px;border:1px solid rgba(23,50,77,.12);border-radius:20px;background:rgba(255,255,255,.92);box-shadow:0 30px 70px rgba(23,50,77,.12)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(700px 460px at 20% 20%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-form-tag{font-size:9px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-form h2{margin-top:10px;font-size:23px;letter-spacing:-.03em;color:#101b26}
.pl-form>p{margin-top:8px;font-size:11.5px;line-height:1.7;color:#6a7885}
.pl-field{position:relative;display:block;margin-top:20px}
.pl-field input{width:100%;height:54px;padding:20px 2px 6px;border:0;border-bottom:1px solid rgba(23,50,77,.18);background:transparent;font-size:13px;color:#101b26;outline:none}
.pl-field span{position:absolute;left:2px;top:17px;font-size:12.5px;color:#8a97a2;pointer-events:none;transition:top .2s,font-size .2s,color .2s}
.pl-field input:focus+span,.pl-field input:not(:placeholder-shown)+span{top:2px;font-size:9.5px;font-weight:700;letter-spacing:.05em;color:#0f8b8d}
.pl-field i{position:absolute;left:0;bottom:0;width:100%;height:2px;background:#0f8b8d;transform:scaleX(0);transform-origin:left;transition:transform .3s}
.pl-field input:focus~i{transform:scaleX(1)}
.pl-form button{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;min-height:46px;margin-top:26px;border:0;border-radius:11px;background:#17324d;color:#fff;font-size:13px;font-weight:800;cursor:pointer;transition:background .2s,transform .2s}
.pl-form button:hover{background:#0f8b8d;transform:translateY(-1px)}
.pl-form button b{transition:transform .2s}
.pl-form button:hover b{transform:translateX(3px)}
.pl-form button.is-done{background:#0f8b8d}
.pl-form small{display:block;margin-top:14px;font-size:9.5px;line-height:1.6;color:#9aa6b0;text-align:center}`,
  js: `(function () {
  var form = document.querySelector("[data-pl-form]");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var button = form.querySelector("button");
    button.classList.add("is-done");
    button.textContent = "已创建 ✓";
    setTimeout(function () {
      button.classList.remove("is-done");
      button.innerHTML = "创建账号 <b>→</b>";
    }, 2200);
  });
})();`
},
{
  id: "search-inline",
  name: "即时搜索",
  cat: "forms",
  desc: "输入即筛选的结果面板，带分类与空状态。",
  tags: ["search", "搜索", "筛选", "输入框", "结果"],
  prompt: "做一个即时搜索组件：顶部是圆角搜索框，左侧放大镜图标，右侧显示 ⌘K 快捷键；聚焦时下方展开结果面板，列出 6 条页面/实验/成员结果，每条有标题和右侧分类。输入关键词即时过滤，没有匹配时显示空状态提示。整体放在浅色卡片背景上。",
  html: `<div class="pl-search">
  <header class="pl-search-head"><span>搜索</span><h2>找到你想看的那一页</h2></header>
  <div class="pl-search-box">
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
    <input type="search" placeholder="搜索页面、实验或成员…" data-search-input autocomplete="off">
    <kbd>⌘K</kbd>
  </div>
  <div class="pl-search-panel" data-search-panel>
    <button type="button" data-search-item><span>工程循环</span><small>页面</small></button>
    <button type="button" data-search-item><span>荧光表达实验 07</span><small>实验</small></button>
    <button type="button" data-search-item><span>低氧条件建模</span><small>模型</small></button>
    <button type="button" data-search-item><span>李蕴</span><small>成员</small></button>
    <button type="button" data-search-item><span>安全评估</span><small>页面</small></button>
    <button type="button" data-search-item><span>合作实验室访谈</span><small>人类实践</small></button>
    <div class="pl-search-empty" data-search-empty hidden>没有匹配结果，试试更短的关键词。</div>
  </div>
</div>`,
  css: `.pl-search{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:40px;background:radial-gradient(700px 460px at 78% 10%,rgba(255,176,0,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-search-head{width:min(470px,100%);margin-bottom:18px}
.pl-search-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-search-head h2{margin-top:8px;font-size:clamp(1.6rem,2.8vw,2.1rem);letter-spacing:-.03em;color:#101b26}
.pl-search-box{display:flex;align-items:center;gap:10px;width:min(470px,100%);height:52px;padding:0 14px;border:1px solid rgba(23,50,77,.14);border-radius:14px;background:#fff;box-shadow:0 12px 30px rgba(23,50,77,.08)}
.pl-search-box svg{width:18px;height:18px;fill:none;stroke:#8a97a2;stroke-width:1.7;stroke-linecap:round}
.pl-search-box input{flex:1;min-width:0;border:0;background:transparent;font-size:13px;color:#101b26;outline:none}
.pl-search-box input::placeholder{color:#9aa6b0}
.pl-search-box kbd{padding:3px 6px;border:1px solid rgba(23,50,77,.14);border-radius:5px;background:#f4f7f7;font-family:inherit;font-size:9.5px;color:#7a8792}
.pl-search-panel{width:min(470px,100%);margin-top:8px;padding:6px;border:1px solid rgba(23,50,77,.12);border-radius:14px;background:rgba(255,255,255,.94);box-shadow:0 22px 50px rgba(23,50,77,.12)}
.pl-search-panel button{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding:11px 12px;border:0;border-radius:9px;background:transparent;text-align:left;cursor:pointer;transition:background .15s}
.pl-search-panel button:hover{background:#f2f7f6}
.pl-search-panel span{font-size:12px;color:#33434f}
.pl-search-panel small{padding:3px 7px;border-radius:999px;background:rgba(15,139,141,.08);font-size:9px;color:#0f8b8d}
.pl-search-empty{padding:16px 12px;font-size:11.5px;color:#9aa6b0;text-align:center}`,
  js: `(function () {
  var input = document.querySelector("[data-search-input]");
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-search-item]"));
  var empty = document.querySelector("[data-search-empty]");
  input.addEventListener("input", function () {
    var query = input.value.trim().toLowerCase();
    var visible = 0;
    items.forEach(function (item) {
      var match = item.textContent.toLowerCase().indexOf(query) > -1;
      item.hidden = !match;
      if (match) visible += 1;
    });
    empty.hidden = visible > 0;
  });
  document.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      input.focus();
    }
  });
})();`
},
{
  id: "toggle-switch",
  name: "开关组",
  cat: "forms",
  desc: "三个设置项开关，实时汇总开启数量。",
  tags: ["toggle", "开关", "设置", "switch"],
  prompt: "做一个设置项开关组：白色卡片里三行设置，每行左侧是标题和一行说明，右侧是胶囊形开关。开启时轨道变成青绿色，白色圆点左右滑动，并带一点弹性。底部显示当前已开启数量。开关使用 button + role=switch + aria-checked，点击可切换。",
  html: `<div class="pl-toggles">
  <header class="pl-toggles-head"><span>偏好设置</span><h2>通知与显示</h2></header>
  <div class="pl-toggle-row"><div><strong>每周项目摘要</strong><span>周一早上收到一封进展邮件。</span></div><button type="button" class="pl-switch is-on" role="switch" aria-checked="true" aria-label="每周项目摘要"><i></i></button></div>
  <div class="pl-toggle-row"><div><strong>实验提醒</strong><span>取样与读数前 30 分钟提醒。</span></div><button type="button" class="pl-switch is-on" role="switch" aria-checked="true" aria-label="实验提醒"><i></i></button></div>
  <div class="pl-toggle-row"><div><strong>自动保存草稿</strong><span>编辑时每 30 秒保存一次。</span></div><button type="button" class="pl-switch" role="switch" aria-checked="false" aria-label="自动保存草稿"><i></i></button></div>
  <div class="pl-toggle-status">已开启 <b data-toggle-count>2</b> / 3 项</div>
</div>`,
  css: `.pl-toggles{width:min(440px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:rgba(255,255,255,.94);box-shadow:0 26px 56px rgba(23,50,77,.12)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(700px 460px at 20% 10%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-toggles-head span{font-size:9.5px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-toggles-head h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-toggle-row{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:16px 0;border-bottom:1px solid rgba(23,50,77,.09)}
.pl-toggle-row strong{display:block;font-size:12.5px;color:#17324d}
.pl-toggle-row span{display:block;margin-top:3px;font-size:10.5px;line-height:1.5;color:#8a97a2}
.pl-switch{position:relative;flex:none;width:44px;height:26px;padding:0;border:0;border-radius:99px;background:#d7dfe2;cursor:pointer;transition:background .25s}
.pl-switch i{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 2px 5px rgba(23,50,77,.25);transition:transform .28s cubic-bezier(.3,1.4,.5,1)}
.pl-switch.is-on{background:#0f8b8d}
.pl-switch.is-on i{transform:translateX(18px)}
.pl-toggle-status{margin-top:16px;padding:10px 12px;border-radius:9px;background:#f3f7f6;font-size:10.5px;color:#7a8792;text-align:center}
.pl-toggle-status b{color:#0f8b8d}`,
  js: `(function () {
  var switches = Array.prototype.slice.call(document.querySelectorAll(".pl-switch"));
  var counter = document.querySelector("[data-toggle-count]");
  function count() {
    counter.textContent = switches.filter(function (item) { return item.classList.contains("is-on"); }).length;
  }
  switches.forEach(function (item) {
    item.addEventListener("click", function () {
      var on = item.classList.toggle("is-on");
      item.setAttribute("aria-checked", on ? "true" : "false");
      count();
    });
  });
})();`
},
{
  id: "color-picker",
  name: "取色器",
  cat: "forms",
  desc: "预设色板加自定义取色，实时预览十六进制值。",
  tags: ["color", "取色", "色板", "设计令牌"],
  prompt: "做一个取色器组件：左侧是一块大的颜色预览面板，显示当前色值和名称；右侧或下方是六个预设色块加一个自定义颜色输入；点击色块或使用系统取色器都会实时更新预览背景和十六进制文本。色块选中时有白色描边和外圈。整体放在白色圆角卡片中。",
  html: `<div class="pl-color" data-color-box>
  <header class="pl-color-head"><span>设计令牌</span><h2>选一个主色</h2></header>
  <div class="pl-color-preview" data-color-preview>
    <span data-color-hex>#0F8B8D</span>
    <small>主色变量 --accent</small>
    <i data-color-name>青绿</i>
  </div>
  <div class="pl-color-swatches">
    <button type="button" class="is-active" style="--c:#0f8b8d" data-color="#0F8B8D" data-name="青绿" aria-label="青绿"></button>
    <button type="button" style="--c:#ffb000" data-color="#FFB000" data-name="琥珀" aria-label="琥珀"></button>
    <button type="button" style="--c:#da4167" data-color="#DA4167" data-name="珊瑚" aria-label="珊瑚"></button>
    <button type="button" style="--c:#17324d" data-color="#17324D" data-name="深蓝" aria-label="深蓝"></button>
    <button type="button" style="--c:#7d8f69" data-color="#7D8F69" data-name="苔绿" aria-label="苔绿"></button>
    <button type="button" style="--c:#6c5ce7" data-color="#6C5CE7" data-name="鸢尾" aria-label="鸢尾"></button>
    <label class="pl-color-custom"><input type="color" value="#0f8b8d" data-color-input aria-label="自定义颜色"><span>+</span></label>
  </div>
  <p class="pl-color-note">点击色块，或使用右侧取色器自定义。</p>
</div>`,
  css: `.pl-color{width:min(400px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.12)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(700px 460px at 80% 20%,rgba(255,176,0,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-color-head span{font-size:9.5px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-color-head h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-color-preview{position:relative;height:150px;margin-top:18px;padding:18px;border-radius:14px;background:#0f8b8d;transition:background .25s;overflow:hidden}
.pl-color-preview::after{content:"";position:absolute;inset:0;background:radial-gradient(280px 180px at 80% 0%,rgba(255,255,255,.24),transparent 70%)}
.pl-color-preview span{position:relative;z-index:1;font-size:24px;font-weight:800;letter-spacing:-.03em;color:#fff}
.pl-color-preview small{position:absolute;left:18px;bottom:30px;z-index:1;font-size:10px;color:rgba(255,255,255,.72)}
.pl-color-preview i{position:absolute;right:16px;bottom:16px;z-index:1;padding:4px 9px;border-radius:999px;background:rgba(255,255,255,.2);font-size:9.5px;font-style:normal;font-weight:700;color:#fff}
.pl-color-swatches{display:flex;gap:9px;margin-top:18px}
.pl-color-swatches button{width:34px;height:34px;padding:0;border:0;border-radius:50%;background:var(--c);cursor:pointer;transition:transform .2s}
.pl-color-swatches button:hover{transform:scale(1.1)}
.pl-color-swatches button.is-active{box-shadow:0 0 0 2px #fff,0 0 0 4px var(--c)}
.pl-color-custom{position:relative;display:grid;place-items:center;width:34px;height:34px;border:1px dashed rgba(23,50,77,.3);border-radius:50%;cursor:pointer}
.pl-color-custom input{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:pointer}
.pl-color-custom span{font-size:16px;color:#7a8792}
.pl-color-note{margin-top:14px;font-size:10px;color:#9aa6b0}`,
  js: `(function () {
  var box = document.querySelector("[data-color-box]");
  var preview = box.querySelector("[data-color-preview]");
  var hex = box.querySelector("[data-color-hex]");
  var name = box.querySelector("[data-color-name]");
  var swatches = Array.prototype.slice.call(box.querySelectorAll("[data-color]"));
  var custom = box.querySelector("[data-color-input]");
  function set(color, label) {
    preview.style.background = color;
    hex.textContent = color.toUpperCase();
    name.textContent = label;
  }
  swatches.forEach(function (swatch) {
    swatch.addEventListener("click", function () {
      swatches.forEach(function (item) { item.classList.remove("is-active"); });
      swatch.classList.add("is-active");
      set(swatch.getAttribute("data-color"), swatch.getAttribute("data-name"));
    });
  });
  custom.addEventListener("input", function () {
    swatches.forEach(function (item) { item.classList.remove("is-active"); });
    set(custom.value, "自定义");
  });
})();`
},
{
  id: "choice-cards",
  name: "选择卡片",
  cat: "forms",
  desc: "自定义单选卡片与多选标签，纯 CSS 状态。",
  tags: ["choice", "单选", "复选", "表单", "卡片"],
  prompt: "做一个选择卡片组件：上方三个自定义单选项卡片，每个包含标题、说明和一个圆形勾选标记；选中项边框变青绿、背景微亮、勾选点填充。下方一组多选胶囊标签，选中时变深色底白字。使用原生 radio/checkbox 配合相邻兄弟选择器实现，保留键盘可访问性。",
  html: `<div class="pl-choice">
  <header class="pl-choice-head"><span>偏好设置</span><h2>选择你的实验节奏</h2></header>
  <div class="pl-choice-grid">
    <label class="pl-choice-card"><input type="radio" name="pl-freq" checked><span class="pl-choice-body"><b>每日</b><small>快速迭代</small><i></i></span></label>
    <label class="pl-choice-card"><input type="radio" name="pl-freq"><span class="pl-choice-body"><b>隔日</b><small>平衡节奏</small><i></i></span></label>
    <label class="pl-choice-card"><input type="radio" name="pl-freq"><span class="pl-choice-body"><b>每周</b><small>深度验证</small><i></i></span></label>
  </div>
  <p class="pl-choice-label">附加模块</p>
  <div class="pl-choice-pills">
    <label><input type="checkbox" checked><span>荧光成像</span></label>
    <label><input type="checkbox"><span>蛋白纯化</span></label>
    <label><input type="checkbox" checked><span>数据看板</span></label>
    <label><input type="checkbox"><span>安全审查</span></label>
  </div>
</div>`,
  css: `.pl-choice{width:min(480px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:rgba(255,255,255,.94);box-shadow:0 26px 56px rgba(23,50,77,.12)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(700px 460px at 20% 20%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-choice-head span{font-size:9.5px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-choice-head h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-choice-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:18px}
.pl-choice-card{position:relative;cursor:pointer}
.pl-choice-card input{position:absolute;opacity:0;pointer-events:none}
.pl-choice-body{display:block;padding:14px;border:1px solid rgba(23,50,77,.14);border-radius:12px;background:#fff;transition:border-color .2s,background .2s,box-shadow .2s}
.pl-choice-body b{display:block;font-size:12.5px;color:#17324d}
.pl-choice-body small{display:block;margin-top:3px;font-size:9.5px;color:#8a97a2}
.pl-choice-body i{display:grid;place-items:center;width:15px;height:15px;margin-top:10px;border:1px solid rgba(23,50,77,.22);border-radius:50%;transition:background .2s,border-color .2s}
.pl-choice-body i::after{content:"";width:5px;height:5px;border-radius:50%;background:transparent;transition:background .2s}
.pl-choice-card input:checked+.pl-choice-body{border-color:#0f8b8d;background:#f4faf9;box-shadow:0 8px 20px rgba(15,139,141,.08)}
.pl-choice-card input:checked+.pl-choice-body i{border-color:#0f8b8d;background:#0f8b8d}
.pl-choice-card input:checked+.pl-choice-body i::after{background:#fff}
.pl-choice-card input:focus-visible+.pl-choice-body{outline:2px solid #0f8b8d;outline-offset:2px}
.pl-choice-label{margin-top:20px;font-size:10px;font-weight:800;letter-spacing:.1em;color:#7a8792}
.pl-choice-pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.pl-choice-pills label{position:relative;cursor:pointer}
.pl-choice-pills input{position:absolute;opacity:0;pointer-events:none}
.pl-choice-pills span{display:inline-flex;padding:8px 13px;border:1px solid rgba(23,50,77,.14);border-radius:999px;background:#fff;font-size:11px;color:#607080;transition:background .2s,color .2s,border-color .2s}
.pl-choice-pills input:checked+span{border-color:#17324d;background:#17324d;color:#fff}
.pl-choice-pills input:focus-visible+span{outline:2px solid #0f8b8d;outline-offset:2px}`,
  js: ``
}
);
