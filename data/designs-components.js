/* 独立设计：卡片、按钮与表单（每项使用不同的结构与交互） */
window.PLUGINS.push(
{
  id: "profile-id-card",
  name: "证件卡",
  cat: "cards",
  desc: "带挂绳槽、色条与条形码的成员证件卡。",
  tags: ["卡片", "证件", "成员", "条形码"],
  prompt: "做一张成员证件卡：竖向卡片，顶部有挂绳槽和蓝色色条；卡面包含渐变圆形首字母头像、成员编号、姓名、角色、两个元信息与底部伪条形码。卡片使用米白底、细边框和轻微阴影，悬停时轻微旋转。整体像真实工牌，移动端居中显示。",
  html: `<div class="pl-id-wrap">
  <article class="pl-id">
    <span class="pl-id-slot"></span>
    <div class="pl-id-strip">ACCESS / DRY LAB</div>
    <div class="pl-id-body">
      <span class="pl-id-ava">LY</span>
      <span class="pl-id-kicker">MEMBER ID</span>
      <h2>李蕴</h2>
      <p>干实验 · 建模与数据可视化</p>
      <div class="pl-id-meta"><span>ID 0026</span><span>2026</span></div>
      <div class="pl-id-code"></div>
    </div>
  </article>
</div>`,
  css: `.pl-id-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:radial-gradient(640px 420px at 30% 20%,rgba(15,139,141,.14),transparent 60%),#eef2f4}
.pl-id{position:relative;width:300px;overflow:hidden;border:1px solid rgba(23,50,77,.14);border-radius:16px;background:#fbfaf6;box-shadow:0 28px 60px rgba(23,50,77,.16);transition:transform .3s}
.pl-id:hover{transform:rotate(-2deg) translateY(-4px)}
.pl-id-slot{position:absolute;top:14px;left:50%;z-index:2;width:54px;height:9px;margin-left:-27px;border-radius:99px;background:#dfe5e8;box-shadow:inset 0 2px 3px rgba(23,50,77,.18)}
.pl-id-strip{height:74px;padding:44px 18px 0;background:linear-gradient(120deg,#17324d,#0f8b8d);font-family:ui-monospace,Consolas,monospace;font-size:8.5px;letter-spacing:.16em;color:#bde4e2}
.pl-id-body{padding:0 20px 22px}
.pl-id-ava{display:grid;place-items:center;width:64px;height:64px;margin-top:-32px;border:3px solid #fbfaf6;border-radius:50%;background:linear-gradient(135deg,#17324d,#0f8b8d);font-family:Georgia,"Songti SC",serif;font-size:19px;color:#fff}
.pl-id-kicker{display:block;margin-top:12px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#93a0aa}
.pl-id h2{margin-top:5px;font-family:Georgia,"Songti SC",serif;font-size:24px;font-weight:400;color:#101b26}
.pl-id p{margin-top:3px;font-size:10.5px;color:#7a8792}
.pl-id-meta{display:flex;justify-content:space-between;margin-top:18px;padding-top:12px;border-top:1px solid rgba(23,50,77,.12);font-family:ui-monospace,Consolas,monospace;font-size:8.5px;letter-spacing:.08em;color:#607080}
.pl-id-code{height:38px;margin-top:12px;background:repeating-linear-gradient(90deg,#17324d 0 2px,transparent 2px 5px,#17324d 5px 6px,transparent 6px 10px);opacity:.82}`,
  js: ``
},
{
  id: "product-card",
  name: "商品卡",
  cat: "cards",
  desc: "悬停切换两张图片的电商商品卡，带价格与加入状态。",
  tags: ["卡片", "商品", "电商", "图片切换"],
  prompt: "做一个电商商品卡：正方形图片区，悬停时第一张图淡出、第二张图淡入，左上角有折扣标签；下方是系列标签、商品名、评分、价格和加入按钮。点击加入后按钮变成已加入状态。卡片白底、12px 圆角、轻阴影，适合实验耗材或产品展示。",
  html: `<div class="pl-prod-wrap">
  <article class="pl-prod">
    <div class="pl-prod-media">
      <img class="is-front" src="assets/img/plugins/gallery-02.jpg" alt="实验器皿" loading="lazy">
      <img class="is-back" src="assets/img/plugins/gallery-05.jpg" alt="培养皿" loading="lazy">
      <span>-20%</span>
    </div>
    <div class="pl-prod-body">
      <span>LAB SERIES</span>
      <h3>低氧培养套装</h3>
      <div class="pl-prod-stars">★★★★★ <b>4.9</b></div>
      <div class="pl-prod-foot"><strong>¥ 268</strong><button type="button" data-prod-add>加入</button></div>
    </div>
  </article>
</div>`,
  css: `.pl-prod-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:radial-gradient(600px 400px at 70% 10%,rgba(255,176,0,.12),transparent 60%),#f6f7f5}
.pl-prod{width:300px;overflow:hidden;border:1px solid rgba(23,50,77,.12);border-radius:12px;background:#fff;box-shadow:0 18px 40px rgba(23,50,77,.1)}
.pl-prod-media{position:relative;aspect-ratio:1;overflow:hidden;background:#e9eeec}
.pl-prod-media img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity .45s,transform .6s}
.pl-prod-media .is-back{opacity:0;transform:scale(1.04)}
.pl-prod:hover .is-back{opacity:1;transform:scale(1)}
.pl-prod:hover .is-front{opacity:0}
.pl-prod-media span{position:absolute;top:12px;left:12px;z-index:2;padding:4px 8px;border-radius:999px;background:#101b26;font-size:9px;font-weight:700;color:#fff}
.pl-prod-body{padding:16px 16px 18px}
.pl-prod-body>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#0f8b8d}
.pl-prod h3{margin-top:6px;font-size:15px;color:#101b26}
.pl-prod-stars{margin-top:7px;font-size:10px;letter-spacing:2px;color:#ffb000}
.pl-prod-stars b{margin-left:4px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:9px;letter-spacing:0;color:#7a8792}
.pl-prod-foot{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(23,50,77,.1)}
.pl-prod-foot strong{font-size:18px;letter-spacing:-.02em;color:#17324d}
.pl-prod-foot button{min-height:34px;padding:0 14px;border:0;border-radius:8px;background:#17324d;font-size:10.5px;font-weight:700;color:#fff;cursor:pointer;transition:background .2s}
.pl-prod-foot button:hover{background:#0f8b8d}
.pl-prod-foot button.is-done{background:#0f8b8d}`,
  js: `(function () {
  var button = document.querySelector("[data-prod-add]");
  if (!button) return;
  button.addEventListener("click", function () {
    var done = button.classList.toggle("is-done");
    button.textContent = done ? "已加入" : "加入";
  });
})();`
},
{
  id: "ticket-card",
  name: "票券卡",
  cat: "cards",
  desc: "带撕裂边、检票联与条形码的活动票券。",
  tags: ["卡片", "票券", "活动", "条形码"],
  prompt: "做一张活动票券：横向卡片，左侧是主券（活动标签、标题、日期/时间/席位三列），右侧是带虚线分隔的检票联（ADMIT ONE、编号和条形码）。主券与检票联之间用两个半圆缺口形成撕裂感，卡片米白底、深色文字、轻旋转悬停。移动端保持横向并缩小字号。",
  html: `<div class="pl-ticket-wrap">
  <article class="pl-ticket">
    <div class="pl-ticket-main">
      <span>SYNTHETIC BIOLOGY / 2026</span>
      <h2>低氧表达<br>年度报告</h2>
      <div class="pl-ticket-meta">
        <div><b>10.24</b><span>日期</span></div>
        <div><b>19:30</b><span>时间</span></div>
        <div><b>A-07</b><span>席位</span></div>
      </div>
    </div>
    <div class="pl-ticket-stub">
      <span>ADMIT ONE</span>
      <b>07</b>
      <div class="pl-ticket-code"></div>
    </div>
  </article>
</div>`,
  css: `.pl-ticket-wrap{min-height:100vh;display:grid;place-items:center;padding:40px;background:radial-gradient(600px 400px at 30% 80%,rgba(218,65,103,.14),transparent 60%),#f4f1ea}
.pl-ticket{position:relative;display:grid;grid-template-columns:1fr 150px;width:min(560px,100%);overflow:hidden;border:1px solid rgba(28,26,22,.16);border-radius:14px;background:#fffdf8;box-shadow:0 24px 54px rgba(28,26,22,.14);transition:transform .25s}
.pl-ticket:hover{transform:translateY(-4px) rotate(-.6deg)}
.pl-ticket::before,.pl-ticket::after{content:"";position:absolute;right:136px;width:20px;height:20px;border-radius:50%;background:#f4f1ea;z-index:2}
.pl-ticket::before{top:-10px}
.pl-ticket::after{bottom:-10px}
.pl-ticket-main{padding:26px 28px}
.pl-ticket-main>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#b23a2a}
.pl-ticket-main h2{margin-top:12px;font-family:Georgia,"Songti SC",serif;font-size:32px;font-weight:400;line-height:1.1}
.pl-ticket-meta{display:flex;gap:28px;margin-top:24px;padding-top:14px;border-top:1px dashed rgba(28,26,22,.2)}
.pl-ticket-meta b{display:block;font-family:ui-monospace,Consolas,monospace;font-size:15px;color:#1c1a16}
.pl-ticket-meta span{display:block;margin-top:3px;font-size:8.5px;color:#857a6c}
.pl-ticket-stub{display:flex;flex-direction:column;align-items:center;justify-content:space-between;padding:26px 16px;border-left:1px dashed rgba(28,26,22,.28);background:#f7f2e8}
.pl-ticket-stub>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#857a6c}
.pl-ticket-stub b{font-family:Georgia,"Songti SC",serif;font-size:44px;font-weight:400;color:#b23a2a}
.pl-ticket-code{width:64px;height:42px;background:repeating-linear-gradient(90deg,#1c1a16 0 2px,transparent 2px 5px,#1c1a16 5px 6px,transparent 6px 10px)}
@media (max-width:560px){.pl-ticket{grid-template-columns:1fr 120px}.pl-ticket-main{padding:20px}.pl-ticket-main h2{font-size:26px}.pl-ticket-meta{gap:16px}}`,
  js: ``
},
{
  id: "neumorphic-buttons",
  name: "新拟态按钮",
  cat: "buttons",
  desc: "软阴影凸起按钮、图标按钮与滑动开关。",
  tags: ["按钮", "新拟态", "软阴影", "开关"],
  prompt: "做一个新拟态按钮组：浅灰蓝背景，三枚控件并排。第一枚是凸起的主按钮，按下时变为内凹；第二枚是方形图标按钮；第三枚是带滑块的自动保存开关。所有控件使用双向柔和阴影，无边框，悬停和按下有明显的光影变化。移动端纵向排列。",
  html: `<div class="pl-neu">
  <span>NEUMORPHIC / CONTROLS</span>
  <h2>软阴影控件</h2>
  <div class="pl-neu-row">
    <button class="pl-neu-btn" type="button">开始</button>
    <button class="pl-neu-btn is-icon" type="button" aria-label="设置">⚙</button>
    <button class="pl-neu-btn is-switch" type="button" data-neu-toggle aria-pressed="false"><i></i><span>自动保存</span></button>
  </div>
</div>`,
  css: `.pl-neu{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;background:#e7ecf1;text-align:center}
.pl-neu>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#8a97a2}
.pl-neu h2{margin-top:10px;font-size:clamp(1.8rem,3.2vw,2.4rem);letter-spacing:-.03em;color:#33434f}
.pl-neu-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:24px;margin-top:36px}
.pl-neu-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-width:104px;min-height:48px;padding:0 20px;border:0;border-radius:14px;background:#e7ecf1;box-shadow:8px 8px 16px #c7ced6,-8px -8px 16px #ffffff;font-family:ui-sans-serif,system-ui,sans-serif;font-size:12px;font-weight:700;color:#4d5d6a;cursor:pointer;transition:box-shadow .18s,transform .18s}
.pl-neu-btn:hover{transform:translateY(-2px)}
.pl-neu-btn:active,.pl-neu-btn.is-on{box-shadow:inset 5px 5px 10px #c7ced6,inset -5px -5px 10px #ffffff;transform:none}
.pl-neu-btn.is-icon{min-width:48px;padding:0;font-size:18px}
.pl-neu-btn.is-switch{min-width:148px;justify-content:flex-start;padding:0 14px}
.pl-neu-btn.is-switch i{position:relative;display:block;width:38px;height:22px;border-radius:99px;background:#d7dee5;box-shadow:inset 2px 2px 5px #c0c8d0;transition:background .2s}
.pl-neu-btn.is-switch i::after{content:"";position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#f7fafc;box-shadow:2px 2px 4px #b8c0c8;transition:transform .22s}
.pl-neu-btn.is-switch span{font-size:10.5px}
.pl-neu-btn.is-switch.is-on i{background:#a9d9d7}
.pl-neu-btn.is-switch.is-on i::after{transform:translateX(16px)}
@media (max-width:560px){.pl-neu-row{flex-direction:column}}`,
  js: `(function () {
  var toggle = document.querySelector("[data-neu-toggle]");
  if (!toggle) return;
  toggle.addEventListener("click", function () {
    var on = toggle.classList.toggle("is-on");
    toggle.setAttribute("aria-pressed", on ? "true" : "false");
  });
})();`
},
{
  id: "brutalist-button",
  name: "粗野按钮",
  cat: "buttons",
  desc: "黄黑高对比、硬阴影、无圆角的大按钮。",
  tags: ["按钮", "粗野主义", "硬阴影", "高对比"],
  prompt: "做一个粗野主义按钮组合：亮黄色背景，中央一枚黑底黄字的超大按钮，带 8px 硬阴影；旁边一枚白底黑边次按钮。悬停时主按钮向左上移动、阴影加长，按下时回位。全部无圆角、粗边框、等宽大写标签，移动端纵向排列。",
  html: `<div class="pl-bbtn">
  <a class="pl-bbtn-main" href="#">开始构建 <b>→</b></a>
  <a class="pl-bbtn-ghost" href="#">查看文档</a>
  <span>HARD SHADOW / NO RADIUS</span>
</div>`,
  css: `.pl-bbtn{min-height:100vh;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:18px;padding:40px;background:#f5f13f;font-family:ui-monospace,Consolas,"Courier New",monospace}
.pl-bbtn-main{display:inline-flex;align-items:center;gap:14px;padding:18px 26px;border:3px solid #111;background:#111;box-shadow:8px 8px 0 #111;font-size:14px;font-weight:700;letter-spacing:.04em;color:#f5f13f;transition:transform .16s,box-shadow .16s}
.pl-bbtn-main:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 #111}
.pl-bbtn-main:active{transform:translate(4px,4px);box-shadow:4px 4px 0 #111}
.pl-bbtn-main b{font-size:17px}
.pl-bbtn-ghost{padding:18px 22px;border:3px solid #111;background:#fff;box-shadow:8px 8px 0 #111;font-size:12px;font-weight:700;color:#111;transition:transform .16s,box-shadow .16s}
.pl-bbtn-ghost:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 #111}
.pl-bbtn>span{width:100%;margin-top:10px;text-align:center;font-size:9px;letter-spacing:.16em;color:#111}`,
  js: ``
},
{
  id: "split-button",
  name: "分裂按钮",
  cat: "buttons",
  desc: "主操作加下拉菜单的分裂按钮。",
  tags: ["按钮", "分裂按钮", "下拉", "菜单"],
  prompt: "做一个分裂按钮：左侧是深色主操作“发布结果”，右侧是带下拉箭头的独立按钮，两者共享圆角外框。点击箭头展开三个选项，选中后更新下方状态文字。菜单白底、细边框、轻阴影，点击外部或按 Esc 关闭。移动端保持横向但缩小内边距。",
  html: `<div class="pl-split-wrap">
  <div class="pl-split" data-split>
    <button class="pl-split-main" type="button">发布结果</button>
    <button class="pl-split-arrow" type="button" data-split-toggle aria-label="更多选项" aria-expanded="false">⌄</button>
    <div class="pl-split-menu" data-split-menu>
      <button type="button">保存草稿</button>
      <button type="button">导出 PDF</button>
      <button type="button">仅团队可见</button>
    </div>
  </div>
  <p data-split-status>选择发布方式</p>
</div>`,
  css: `.pl-split-wrap{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;background:radial-gradient(640px 420px at 50% 20%,rgba(15,139,141,.12),transparent 60%),#f7f9f8}
.pl-split{position:relative;display:flex;border-radius:10px;box-shadow:0 14px 30px rgba(23,50,77,.14)}
.pl-split-main{min-height:46px;padding:0 22px;border:0;border-radius:10px 0 0 10px;background:#17324d;font-size:12px;font-weight:700;color:#fff;cursor:pointer}
.pl-split-main:hover{background:#0f8b8d}
.pl-split-arrow{width:42px;border:0;border-left:1px solid rgba(255,255,255,.18);border-radius:0 10px 10px 0;background:#17324d;font-size:14px;color:#fff;cursor:pointer;transition:background .2s}
.pl-split-arrow:hover{background:#0f8b8d}
.pl-split-menu{position:absolute;top:calc(100% + 8px);right:0;z-index:2;display:none;width:170px;padding:6px;border:1px solid rgba(23,50,77,.13);border-radius:10px;background:#fff;box-shadow:0 18px 38px rgba(23,50,77,.16)}
.pl-split-menu.is-open{display:grid;gap:2px}
.pl-split-menu button{padding:9px 10px;border:0;border-radius:7px;background:transparent;font-size:11px;text-align:left;color:#4d5d6a;cursor:pointer}
.pl-split-menu button:hover{background:#f2f7f6;color:#17324d}
.pl-split-wrap>p{margin-top:18px;font-size:10px;color:#8a97a2}`,
  js: `(function () {
  var box = document.querySelector("[data-split]");
  var toggle = document.querySelector("[data-split-toggle]");
  var menu = document.querySelector("[data-split-menu]");
  var status = document.querySelector("[data-split-status]");
  if (!box || !toggle || !menu) return;
  function close() { menu.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }
  toggle.addEventListener("click", function (event) {
    event.stopPropagation();
    var open = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  menu.querySelectorAll("button").forEach(function (button) {
    button.addEventListener("click", function () {
      status.textContent = "已选择：" + button.textContent;
      close();
    });
  });
  document.addEventListener("click", function (event) { if (!box.contains(event.target)) close(); });
  document.addEventListener("keydown", function (event) { if (event.key === "Escape") close(); });
})();`
},
{
  id: "otp-input",
  name: "验证码输入",
  cat: "forms",
  desc: "六位验证码输入，自动跳格、退格与粘贴。",
  tags: ["表单", "验证码", "输入", "键盘"],
  prompt: "做一个六位验证码输入组件：标题、说明、六个等宽数字框、验证按钮和状态文字。输入数字自动跳到下一格，退格回到上一格，支持整段粘贴；聚焦时边框变青绿色。输入满六位后按钮可用，提交显示“验证通过（演示）”。移动端保持一行六格并缩小间距。",
  html: `<div class="pl-otp">
  <span>VERIFY</span>
  <h2>输入六位验证码</h2>
  <p>验证码已发送至 team@example.org</p>
  <div class="pl-otp-row" data-otp>
    <input maxlength="1" inputmode="numeric" aria-label="第 1 位">
    <input maxlength="1" inputmode="numeric" aria-label="第 2 位">
    <input maxlength="1" inputmode="numeric" aria-label="第 3 位">
    <input maxlength="1" inputmode="numeric" aria-label="第 4 位">
    <input maxlength="1" inputmode="numeric" aria-label="第 5 位">
    <input maxlength="1" inputmode="numeric" aria-label="第 6 位">
  </div>
  <button type="button" data-otp-submit>验证</button>
  <small data-otp-status>演示：输入任意六位数字</small>
</div>`,
  css: `.pl-otp{width:min(420px,calc(100vw - 40px));margin:auto;padding:28px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.1)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(640px 420px at 20% 20%,rgba(15,139,141,.12),transparent 60%),#f5f8f7}
.pl-otp>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-otp h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-otp p{margin-top:6px;font-size:10.5px;color:#7a8792}
.pl-otp-row{display:grid;grid-template-columns:repeat(6,1fr);gap:8px;margin-top:20px}
.pl-otp-row input{width:100%;height:48px;border:1px solid rgba(23,50,77,.16);border-radius:9px;background:#fbfcfc;font-family:ui-monospace,Consolas,monospace;font-size:18px;text-align:center;color:#17324d;outline:none;transition:border-color .2s,box-shadow .2s}
.pl-otp-row input:focus{border-color:#0f8b8d;box-shadow:0 0 0 3px rgba(15,139,141,.12)}
.pl-otp>button{width:100%;min-height:42px;margin-top:18px;border:0;border-radius:9px;background:#17324d;font-size:12px;font-weight:700;color:#fff;cursor:pointer}
.pl-otp>button:hover{background:#0f8b8d}
.pl-otp>small{display:block;margin-top:10px;font-size:9.5px;color:#9aa6b0;text-align:center}
.pl-otp>small.is-done{color:#0f8b8d;font-weight:700}
@media (max-width:480px){.pl-otp{padding:22px}.pl-otp-row{gap:5px}.pl-otp-row input{height:42px;font-size:16px}}`,
  js: `(function () {
  var inputs = Array.prototype.slice.call(document.querySelectorAll("[data-otp] input"));
  var submit = document.querySelector("[data-otp-submit]");
  var status = document.querySelector("[data-otp-status]");
  if (!inputs.length) return;
  inputs.forEach(function (input, i) {
    input.addEventListener("input", function () {
      input.value = input.value.replace(/[^0-9]/g, "").slice(0, 1);
      if (input.value && i < inputs.length - 1) inputs[i + 1].focus();
    });
    input.addEventListener("keydown", function (event) {
      if (event.key === "Backspace" && !input.value && i > 0) inputs[i - 1].focus();
    });
    input.addEventListener("paste", function (event) {
      event.preventDefault();
      var text = (event.clipboardData || window.clipboardData).getData("text").replace(/[^0-9]/g, "");
      text.split("").slice(0, inputs.length).forEach(function (char, j) {
        if (inputs[j]) inputs[j].value = char;
      });
      var next = Math.min(text.length, inputs.length - 1);
      inputs[next].focus();
    });
  });
  if (submit) {
    submit.addEventListener("click", function () {
      var code = inputs.map(function (input) { return input.value; }).join("");
      if (status) {
        status.textContent = code.length === 6 ? "验证通过（演示）" : "请输入完整六位数字";
        status.classList.toggle("is-done", code.length === 6);
      }
    });
  }
})();`
},
{
  id: "range-slider",
  name: "预算滑杆",
  cat: "forms",
  desc: "带浮动数值气泡与刻度标签的自定义滑杆。",
  tags: ["表单", "滑杆", "数值", "预算"],
  prompt: "做一个预算滑杆：顶部是标签和标题，中间是醒目的当前金额与说明；下方一条自定义滑杆，滑块上方有跟随位置的数值气泡，底部四档刻度标签。拖动时金额与气泡位置实时更新。浅色卡片、青绿色轨道，移动端保持单列。",
  html: `<div class="pl-range">
  <span>BUDGET</span>
  <h2>选择实验预算</h2>
  <div class="pl-range-value"><b data-range-value>¥ 12,000</b><span>含耗材与测序</span></div>
  <div class="pl-range-track">
    <input type="range" min="2000" max="30000" step="1000" value="12000" data-range aria-label="实验预算">
    <div class="pl-range-bubble" data-range-bubble>¥ 12,000</div>
  </div>
  <div class="pl-range-ticks"><span>2k</span><span>10k</span><span>20k</span><span>30k</span></div>
</div>`,
  css: `.pl-range{width:min(460px,calc(100vw - 40px));margin:auto;padding:28px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.1)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(640px 420px at 80% 20%,rgba(255,176,0,.12),transparent 60%),#f7f9f8}
.pl-range>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-range h2{margin-top:8px;font-size:22px;letter-spacing:-.03em;color:#101b26}
.pl-range-value{display:flex;align-items:baseline;gap:10px;margin-top:20px}
.pl-range-value b{font-size:32px;letter-spacing:-.04em;color:#17324d}
.pl-range-value span{font-size:10px;color:#8a97a2}
.pl-range-track{position:relative;margin-top:34px;padding-top:6px}
.pl-range-track input{width:100%;height:4px;border-radius:99px;background:linear-gradient(90deg,#0f8b8d var(--p,36%),#e2e8e7 var(--p,36%));appearance:none;outline:none;cursor:ew-resize}
.pl-range-track input::-webkit-slider-thumb{width:20px;height:20px;border:3px solid #fff;border-radius:50%;background:#0f8b8d;box-shadow:0 4px 12px rgba(23,50,77,.24);appearance:none}
.pl-range-track input::-moz-range-thumb{width:16px;height:16px;border:3px solid #fff;border-radius:50%;background:#0f8b8d;box-shadow:0 4px 12px rgba(23,50,77,.24)}
.pl-range-bubble{position:absolute;top:-26px;left:var(--p,36%);transform:translateX(-50%);padding:4px 8px;border-radius:6px;background:#17324d;font-family:ui-monospace,Consolas,monospace;font-size:9px;color:#fff;white-space:nowrap;transition:left .05s linear}
.pl-range-bubble::after{content:"";position:absolute;left:50%;bottom:-4px;width:8px;height:8px;background:#17324d;transform:translateX(-50%) rotate(45deg)}
.pl-range-ticks{display:flex;justify-content:space-between;margin-top:14px;font-family:ui-monospace,Consolas,monospace;font-size:8.5px;color:#9aa6b0}
@media (max-width:480px){.pl-range{padding:22px}.pl-range-value b{font-size:26px}}`,
  js: `(function () {
  var range = document.querySelector("[data-range]");
  var value = document.querySelector("[data-range-value]");
  var bubble = document.querySelector("[data-range-bubble]");
  if (!range) return;
  function update() {
    var pct = (range.value - range.min) / (range.max - range.min) * 100;
    var text = "¥ " + Number(range.value).toLocaleString();
    if (value) value.textContent = text;
    if (bubble) bubble.textContent = text;
    range.style.setProperty("--p", pct + "%");
    if (bubble) bubble.style.setProperty("--p", pct + "%");
  }
  range.addEventListener("input", update);
  update();
})();`
}
);
