/* 反馈与导航类插件 */
window.PLUGINS.push(
{
  id: "toast-stack",
  name: "通知堆叠",
  cat: "feedback",
  desc: "右上角滑入的 Toast，自动消失并带进度条。",
  tags: ["toast", "通知", "反馈", "消息"],
  prompt: "做一个 Toast 通知演示：左侧是标题和三个触发按钮（成功、提醒、错误），右侧是通知堆叠区域。点击后在右上角滑入一条通知，包含圆形图标、标题、说明和关闭按钮，底部有一条 3.4 秒的倒计时进度条，自动淡出。最多同时保留三条，可手动关闭。使用原生 DOM 创建，无依赖。",
  html: `<div class="pl-toast-demo">
  <div class="pl-toast-copy">
    <span>反馈</span>
    <h2>通知不该<br>打断任务</h2>
    <p>轻量、可关闭、自动消失。点击下面的按钮试试。</p>
    <div class="pl-toast-btns">
      <button type="button" data-toast="success">成功通知</button>
      <button type="button" data-toast="info">提醒通知</button>
      <button type="button" data-toast="error">错误通知</button>
    </div>
  </div>
  <div class="pl-toast-area" data-toast-area aria-live="polite">
    <div class="pl-toast-empty" data-toast-empty><span>通知会在这里堆叠</span><small>3.4 秒后自动消失</small></div>
  </div>
</div>`,
  css: `.pl-toast-demo{position:relative;min-height:100vh;display:grid;grid-template-columns:1fr 350px;align-items:center;gap:40px;padding:56px;overflow:hidden;background:radial-gradient(700px 460px at 85% 15%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-toast-copy span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-toast-copy h2{margin-top:12px;font-size:clamp(2rem,3.8vw,3rem);line-height:1.02;letter-spacing:-.04em;color:#101b26}
.pl-toast-copy p{max-width:330px;margin-top:14px;font-size:12.5px;line-height:1.7;color:#6a7885}
.pl-toast-btns{display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.pl-toast-btns button{min-height:38px;padding:0 14px;border:1px solid rgba(23,50,77,.16);border-radius:9px;background:rgba(255,255,255,.7);font-size:11.5px;font-weight:700;color:#17324d;cursor:pointer;transition:background .2s,transform .2s}
.pl-toast-btns button:hover{background:#fff;transform:translateY(-1px)}
.pl-toast-area{display:grid;gap:10px;align-content:center;min-height:300px}
.pl-toast-empty{display:grid;place-content:center;justify-items:center;gap:4px;min-height:96px;border:1px dashed rgba(23,50,77,.2);border-radius:12px;background:rgba(255,255,255,.45);color:#8a97a2;text-align:center}
.pl-toast-empty span{font-size:11px;font-weight:600}
.pl-toast-empty small{font-size:9px;letter-spacing:.06em;opacity:.8}
.pl-toast{position:relative;display:flex;align-items:flex-start;gap:11px;overflow:hidden;padding:14px 14px 16px;border:1px solid rgba(23,50,77,.12);border-radius:12px;background:#fff;box-shadow:0 18px 40px rgba(23,50,77,.14);opacity:0;transform:translateX(24px);transition:opacity .24s,transform .24s}
.pl-toast.is-in{opacity:1;transform:none}
.pl-toast-icon{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:50%;font-size:12px;font-weight:800;color:#fff}
.pl-toast.is-success .pl-toast-icon{background:#0f8b8d}
.pl-toast.is-info .pl-toast-icon{background:#17324d}
.pl-toast.is-error .pl-toast-icon{background:#da4167}
.pl-toast div{flex:1;min-width:0}
.pl-toast strong{display:block;font-size:12px;color:#101b26}
.pl-toast p{margin-top:2px;font-size:10.5px;line-height:1.5;color:#7a8792}
.pl-toast button{flex:none;width:20px;height:20px;padding:0;border:0;background:transparent;font-size:15px;line-height:1;color:#9aa6b0;cursor:pointer}
.pl-toast button:hover{color:#17324d}
.pl-toast-progress{position:absolute;left:0;bottom:0;width:100%;height:2px;transform-origin:left;animation:pl-toast-bar 3.4s linear forwards}
.pl-toast.is-success .pl-toast-progress{background:#0f8b8d}
.pl-toast.is-info .pl-toast-progress{background:#17324d}
.pl-toast.is-error .pl-toast-progress{background:#da4167}
@keyframes pl-toast-bar{from{transform:scaleX(1)}to{transform:scaleX(0)}}
@media (max-width:820px){.pl-toast-demo{grid-template-columns:1fr;padding:32px}.pl-toast-area{min-height:0}}`,
  js: `(function () {
  var area = document.querySelector("[data-toast-area]");
  var placeholder = area.querySelector("[data-toast-empty]");
  function syncPlaceholder() {
    if (placeholder) placeholder.hidden = area.querySelectorAll(".pl-toast").length > 0;
  }
  var data = {
    success: ["保存成功", "你的草稿已经同步到云端。"],
    info: ["新版本可用", "插件库新增了 5 个媒体区块。"],
    error: ["上传失败", "网络中断，请稍后重试。"]
  };
  function remove(el) {
    el.classList.remove("is-in");
    setTimeout(function () { el.remove(); syncPlaceholder(); }, 240);
  }
  function spawn(type) {
    var item = data[type];
    var el = document.createElement("div");
    el.className = "pl-toast is-" + type;
    el.innerHTML = '<span class="pl-toast-icon">' + (type === "success" ? "✓" : type === "error" ? "!" : "i") + '</span><div><strong>' + item[0] + '</strong><p>' + item[1] + '</p></div><button type="button" aria-label="关闭">×</button><i class="pl-toast-progress"></i>';
    area.appendChild(el);
    var live = area.querySelectorAll(".pl-toast");
    if (live.length > 3) area.removeChild(live[0]);
    syncPlaceholder();
    requestAnimationFrame(function () { el.classList.add("is-in"); });
    var timer = setTimeout(function () { remove(el); }, 3400);
    el.querySelector("button").addEventListener("click", function () {
      clearTimeout(timer);
      remove(el);
    });
  }
  document.querySelectorAll("[data-toast]").forEach(function (button) {
    button.addEventListener("click", function () { spawn(button.getAttribute("data-toast")); });
  });
  spawn("success");
  setTimeout(function () { spawn("info"); }, 500);
})();`
},
{
  id: "modal-dialog",
  name: "模态对话框",
  cat: "feedback",
  desc: "带背景模糊与确认结果的居中对话框。",
  tags: ["modal", "对话框", "弹窗", "确认"],
  prompt: "做一个模态对话框组件：页面中央有一个触发按钮，点击后出现半透明模糊背景和居中的白色对话框，包含小标签、标题、说明、取消与确认两个按钮。点击背景、取消、确认或按 Esc 都能关闭；确认后页面上的状态标签更新为已提交。对话框进入时轻微上浮并淡入，圆角 18px。",
  html: `<div class="pl-modal-demo">
  <span class="pl-modal-kicker">确认</span>
  <h2>需要二次确认的动作</h2>
  <p>提交后不可撤回的实验结果，应该先问一句。</p>
  <button class="pl-modal-trigger" type="button" data-modal-open>打开对话框</button>
  <span class="pl-modal-status" data-modal-status>尚未提交</span>
  <div class="pl-modal-backdrop" data-modal-backdrop>
    <div class="pl-modal-card" role="dialog" aria-modal="true" aria-labelledby="pl-modal-title">
      <button class="pl-modal-x" type="button" data-modal-close aria-label="关闭">×</button>
      <span>提交结果</span>
      <h3 id="pl-modal-title">提交实验结果？</h3>
      <p>提交后本次读数将锁定，并同步给所有协作成员。你仍然可以添加补充说明。</p>
      <div class="pl-modal-actions">
        <button type="button" class="is-ghost" data-modal-close>取消</button>
        <button type="button" class="is-solid" data-modal-confirm>确认提交</button>
      </div>
    </div>
  </div>
</div>`,
  css: `.pl-modal-demo{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;background:radial-gradient(700px 460px at 50% 30%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-modal-kicker{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-modal-demo h2{margin-top:12px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.03em;color:#101b26}
.pl-modal-demo>p{margin-top:10px;font-size:12.5px;color:#6a7885}
.pl-modal-trigger{min-height:44px;margin-top:24px;padding:0 20px;border:0;border-radius:10px;background:#17324d;color:#fff;font-size:12.5px;font-weight:800;cursor:pointer;transition:background .2s,transform .2s}
.pl-modal-trigger:hover{background:#0f8b8d;transform:translateY(-1px)}
.pl-modal-status{margin-top:14px;font-size:10.5px;color:#8a97a2}
.pl-modal-status.is-done{color:#0f8b8d;font-weight:700}
.pl-modal-backdrop{position:fixed;inset:0;z-index:8;display:none;place-items:center;padding:24px;background:rgba(10,18,24,.48);backdrop-filter:blur(6px)}
.pl-modal-backdrop.is-open{display:grid}
.pl-modal-card{position:relative;width:min(400px,100%);padding:28px;border-radius:18px;background:#fff;box-shadow:0 40px 90px rgba(8,16,22,.3);text-align:left;animation:pl-modal-in .3s cubic-bezier(.2,.8,.2,1) both}
.pl-modal-card>span{font-size:9px;font-weight:800;letter-spacing:.16em;color:#0f8b8d}
.pl-modal-card h3{margin-top:10px;font-size:23px;letter-spacing:-.03em;color:#101b26}
.pl-modal-card p{margin-top:10px;font-size:12px;line-height:1.75;color:#6a7885}
.pl-modal-x{position:absolute;top:16px;right:16px;width:28px;height:28px;padding:0;border:0;border-radius:50%;background:#f1f5f4;color:#7a8792;font-size:15px;cursor:pointer}
.pl-modal-x:hover{background:#e6eeec;color:#17324d}
.pl-modal-actions{display:flex;gap:8px;margin-top:24px}
.pl-modal-actions button{flex:1;min-height:42px;border-radius:10px;font-size:12px;font-weight:800;cursor:pointer;transition:background .2s}
.pl-modal-actions .is-ghost{border:1px solid rgba(23,50,77,.16);background:#fff;color:#17324d}
.pl-modal-actions .is-ghost:hover{background:#f5f8f7}
.pl-modal-actions .is-solid{border:0;background:#17324d;color:#fff}
.pl-modal-actions .is-solid:hover{background:#0f8b8d}
@keyframes pl-modal-in{from{opacity:0;transform:translateY(14px) scale(.98)}to{opacity:1;transform:none}}`,
  js: `(function () {
  var backdrop = document.querySelector("[data-modal-backdrop]");
  var status = document.querySelector("[data-modal-status]");
  function open() { backdrop.classList.add("is-open"); }
  function close() { backdrop.classList.remove("is-open"); }
  document.querySelector("[data-modal-open]").addEventListener("click", open);
  backdrop.querySelectorAll("[data-modal-close]").forEach(function (button) {
    button.addEventListener("click", close);
  });
  backdrop.addEventListener("click", function (event) {
    if (event.target === backdrop) close();
  });
  document.querySelector("[data-modal-confirm]").addEventListener("click", function () {
    status.textContent = "已提交 · 刚刚";
    status.classList.add("is-done");
    close();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") close();
  });
})();`
},
{
  id: "tooltip",
  name: "工具提示",
  cat: "feedback",
  desc: "四个方向的悬浮提示，支持键盘聚焦。",
  tags: ["tooltip", "提示", "悬浮", "说明"],
  prompt: "做一个工具提示演示：中央一行四个按钮，分别向上、右、下、左弹出提示气泡。气泡是深色圆角矩形，带一个小三角箭头，悬停或键盘聚焦时淡入并轻微位移。按钮本身是白色描边圆角样式，下方有一段说明文字。移动端只保留上下两个方向。",
  html: `<div class="pl-tip-demo">
  <span>提示</span>
  <h2>把解释放在需要的地方</h2>
  <p>悬停或使用 Tab 键聚焦，查看四个方向的提示。</p>
  <div class="pl-tip-row">
    <button class="pl-tip is-top" type="button" data-tip="保存在当前浏览器">顶部提示</button>
    <button class="pl-tip is-right" type="button" data-tip="复制为 HTML 片段">右侧提示</button>
    <button class="pl-tip is-bottom" type="button" data-tip="支持键盘操作">底部提示</button>
    <button class="pl-tip is-left" type="button" data-tip="导出为静态页面">左侧提示</button>
  </div>
</div>`,
  css: `.pl-tip-demo{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;background:linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-tip-demo>span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-tip-demo h2{margin-top:12px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.03em;color:#101b26}
.pl-tip-demo>p{margin-top:10px;font-size:12px;color:#6a7885}
.pl-tip-row{display:flex;flex-wrap:wrap;justify-content:center;gap:34px;margin-top:70px}
.pl-tip{position:relative;min-height:40px;padding:0 16px;border:1px solid rgba(23,50,77,.16);border-radius:9px;background:rgba(255,255,255,.8);font-size:11.5px;font-weight:700;color:#17324d;cursor:help;transition:background .2s}
.pl-tip:hover{background:#fff}
.pl-tip::after{content:attr(data-tip);position:absolute;width:max-content;max-width:190px;padding:7px 10px;border-radius:7px;background:#17324d;font-size:10.5px;font-weight:500;line-height:1.4;color:#fff;box-shadow:0 8px 20px rgba(23,50,77,.2);opacity:0;pointer-events:none;transition:opacity .18s,transform .18s}
.pl-tip::before{content:"";position:absolute;border:5px solid transparent;opacity:0;transition:opacity .18s}
.pl-tip:hover::after,.pl-tip:focus-visible::after,.pl-tip:hover::before,.pl-tip:focus-visible::before{opacity:1}
.pl-tip.is-top::after{bottom:calc(100% + 11px);left:50%;transform:translate(-50%,6px)}
.pl-tip.is-top:hover::after,.pl-tip.is-top:focus-visible::after{transform:translate(-50%,0)}
.pl-tip.is-top::before{bottom:calc(100% + 1px);left:50%;margin-left:-5px;border-top-color:#17324d}
.pl-tip.is-right::after{left:calc(100% + 11px);top:50%;transform:translate(-6px,-50%)}
.pl-tip.is-right:hover::after,.pl-tip.is-right:focus-visible::after{transform:translate(0,-50%)}
.pl-tip.is-right::before{left:calc(100% + 1px);top:50%;margin-top:-5px;border-right-color:#17324d}
.pl-tip.is-bottom::after{top:calc(100% + 11px);left:50%;transform:translate(-50%,-6px)}
.pl-tip.is-bottom:hover::after,.pl-tip.is-bottom:focus-visible::after{transform:translate(-50%,0)}
.pl-tip.is-bottom::before{top:calc(100% + 1px);left:50%;margin-left:-5px;border-bottom-color:#17324d}
.pl-tip.is-left::after{right:calc(100% + 11px);top:50%;transform:translate(6px,-50%)}
.pl-tip.is-left:hover::after,.pl-tip.is-left:focus-visible::after{transform:translate(0,-50%)}
.pl-tip.is-left::before{right:calc(100% + 1px);top:50%;margin-top:-5px;border-left-color:#17324d}
@media (max-width:700px){.pl-tip-row{gap:18px 12px;margin-top:56px}}`,
  js: ``
},
{
  id: "skeleton-loader",
  name: "骨架屏",
  cat: "feedback",
  desc: "加载中的占位骨架，一键切换真实内容。",
  tags: ["skeleton", "骨架屏", "加载", "占位"],
  prompt: "做一个骨架屏加载组件：一张 320px 宽的卡片，先显示灰色骨架（圆形头像、三行长短不一的文字、一块大媒体区域），带从左到右的微光扫过动画；点击下方按钮后模拟加载 1.2 秒，骨架淡出、真实内容淡入，包括头像、姓名、角色、数据图和说明。再次点击可重新播放加载。",
  html: `<div class="pl-skel">
  <article class="pl-skel-card" data-skel-card>
    <div class="pl-skel-real">
      <div class="pl-skel-top"><span class="pl-skel-avatar">LY</span><div><strong>李蕴</strong><small>干实验 · 建模</small></div></div>
      <div class="pl-skel-chart"><i style="--h:34%"></i><i style="--h:52%"></i><i style="--h:44%"></i><i style="--h:72%"></i><i style="--h:64%"></i><i style="--h:88%"></i></div>
      <p>连续 8 批稳定表达的荧光数据，批次间变异系数低于 6%。</p>
    </div>
    <div class="pl-skel-ghost" aria-hidden="true">
      <div class="pl-skel-top"><span class="g-avatar"></span><div class="g-lines"><i class="g-line is-60"></i><i class="g-line is-40"></i></div></div>
      <span class="g-media"></span>
      <div class="g-lines"><i class="g-line is-100"></i><i class="g-line is-80"></i></div>
    </div>
  </article>
  <button class="pl-skel-btn" type="button" data-skel-btn>模拟加载</button>
</div>`,
  css: `.pl-skel{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;background:radial-gradient(700px 460px at 30% 20%,rgba(15,139,141,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-skel-card{position:relative;width:320px;min-height:300px;padding:22px;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:#fff;box-shadow:0 24px 50px rgba(23,50,77,.1);overflow:hidden}
.pl-skel-top{display:flex;align-items:center;gap:10px}
.pl-skel-avatar{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#17324d,#0f8b8d);font-size:12px;font-weight:800;color:#fff}
.pl-skel-top strong{display:block;font-size:12.5px;color:#101b26}
.pl-skel-top small{display:block;margin-top:2px;font-size:10px;color:#8a97a2}
.pl-skel-chart{display:flex;align-items:flex-end;gap:5px;height:90px;margin-top:18px;padding:12px;border-radius:10px;background:#f3f7f6}
.pl-skel-chart i{flex:1;height:var(--h);border-radius:3px 3px 1px 1px;background:linear-gradient(180deg,#0f8b8d,#17324d);animation:pl-skel-grow .6s cubic-bezier(.2,.8,.2,1) both}
.pl-skel-chart i:nth-child(2n){background:linear-gradient(180deg,#ffb000,#e08c00)}
.pl-skel-real p{margin-top:14px;font-size:11px;line-height:1.65;color:#7a8792}
.pl-skel-card>.pl-skel-real{transition:opacity .3s}
.pl-skel-ghost{position:absolute;inset:0;padding:22px;background:#fff;opacity:0;pointer-events:none;transition:opacity .3s}
.pl-skel-card.is-loading .pl-skel-real{opacity:0}
.pl-skel-card.is-loading .pl-skel-ghost{opacity:1}
.g-avatar{display:block;width:40px;height:40px;border-radius:50%}
.g-line{display:block;height:9px;margin-top:7px;border-radius:4px}
.g-line.is-100{width:100%}.g-line.is-80{width:80%}.g-line.is-60{width:60%}.g-line.is-40{width:70%}
.g-lines{flex:1}
.g-media{display:block;height:110px;margin-top:18px;border-radius:10px}
.g-avatar,.g-line,.g-media{background:linear-gradient(90deg,#eef2f3 25%,#f8fafa 37%,#eef2f3 63%);background-size:400% 100%;animation:pl-skel-shimmer 1.4s ease infinite}
@keyframes pl-skel-shimmer{0%{background-position:100% 0}100%{background-position:0 0}}
@keyframes pl-skel-grow{from{transform:scaleY(0);transform-origin:bottom}to{transform:scaleY(1);transform-origin:bottom}}
.pl-skel-btn{margin-top:20px;min-height:38px;padding:0 18px;border:1px solid rgba(23,50,77,.16);border-radius:9px;background:rgba(255,255,255,.8);font-size:11.5px;font-weight:700;color:#17324d;cursor:pointer;transition:background .2s}
.pl-skel-btn:hover{background:#fff}`,
  js: `(function () {
  var card = document.querySelector("[data-skel-card]");
  var button = document.querySelector("[data-skel-btn]");
  var timer;
  button.addEventListener("click", function () {
    clearTimeout(timer);
    card.classList.add("is-loading");
    button.textContent = "加载中…";
    timer = setTimeout(function () {
      card.classList.remove("is-loading");
      button.textContent = "重新加载";
    }, 1200);
  });
})();`
},
{
  id: "spinner-set",
  name: "加载器集合",
  cat: "feedback",
  desc: "环形、点状、柱状与进度环四种加载状态。",
  tags: ["loader", "加载", "spinner", "进度"],
  prompt: "做一个加载器集合：四宫格里分别展示环形旋转、三点跳动、四柱缩放和 72% 进度环，每个下方有小标签。底部一个主按钮，点击后按钮进入加载态（内联小圆环 + 提交中），1.6 秒后恢复并显示已完成。全部使用纯 CSS 动画，不引入依赖。",
  html: `<div class="pl-spin">
  <header class="pl-spin-head"><span>加载中</span><h2>等待也可以有节奏</h2></header>
  <div class="pl-spin-grid">
    <div class="pl-spin-cell"><i class="pl-ring"></i><span>环形</span></div>
    <div class="pl-spin-cell"><i class="pl-dots"><b></b><b></b><b></b></i><span>点状</span></div>
    <div class="pl-spin-cell"><i class="pl-bars"><b></b><b></b><b></b><b></b></i><span>柱状</span></div>
    <div class="pl-spin-cell"><span class="pl-progress"><b>72%</b></span><span>进度环</span></div>
  </div>
  <button class="pl-spin-btn" type="button" data-spin-btn><i></i><span>提交并加载</span></button>
</div>`,
  css: `.pl-spin{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;background:radial-gradient(700px 460px at 70% 20%,rgba(255,176,0,.12),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-spin-head{text-align:center;margin-bottom:26px}
.pl-spin-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-spin-head h2{margin-top:10px;font-size:clamp(1.6rem,2.8vw,2.1rem);letter-spacing:-.03em;color:#101b26}
.pl-spin-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;width:min(470px,100%)}
.pl-spin-cell{display:flex;flex-direction:column;align-items:center;gap:12px;padding:22px 8px;border:1px solid rgba(23,50,77,.12);border-radius:14px;background:rgba(255,255,255,.86);box-shadow:0 10px 24px rgba(23,50,77,.05)}
.pl-spin-cell>span:last-child{font-size:9.5px;color:#8a97a2}
.pl-ring{width:30px;height:30px;border:3px solid rgba(15,139,141,.16);border-top-color:#0f8b8d;border-radius:50%;animation:pl-spin-rotate .8s linear infinite}
.pl-dots{display:flex;gap:5px;height:30px;align-items:center}
.pl-dots b{width:7px;height:7px;border-radius:50%;background:#17324d;animation:pl-spin-bounce 1s ease-in-out infinite}
.pl-dots b:nth-child(2){animation-delay:.15s;background:#0f8b8d}
.pl-dots b:nth-child(3){animation-delay:.3s;background:#ffb000}
.pl-bars{display:flex;align-items:center;gap:4px;height:30px}
.pl-bars b{width:5px;height:24px;border-radius:3px;background:#0f8b8d;animation:pl-spin-scale 1s ease-in-out infinite}
.pl-bars b:nth-child(2){animation-delay:.1s;background:#35a7a9}
.pl-bars b:nth-child(3){animation-delay:.2s;background:#ffb000}
.pl-bars b:nth-child(4){animation-delay:.3s;background:#da4167}
.pl-progress{display:grid;place-items:center;width:40px;height:40px;border-radius:50%;background:conic-gradient(#0f8b8d 0 72%,rgba(15,139,141,.14) 72% 100%)}
.pl-progress b{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#fff;font-size:9px;font-weight:800;color:#17324d}
.pl-spin-btn{display:inline-flex;align-items:center;gap:9px;min-height:44px;margin-top:24px;padding:0 20px;border:0;border-radius:10px;background:#17324d;color:#fff;font-size:12px;font-weight:800;cursor:pointer;transition:background .2s}
.pl-spin-btn:hover{background:#0f8b8d}
.pl-spin-btn i{display:none;width:14px;height:14px;border:2px solid rgba(255,255,255,.3);border-top-color:#fff;border-radius:50%;animation:pl-spin-rotate .7s linear infinite}
.pl-spin-btn.is-loading i{display:block}
.pl-spin-btn.is-loading{background:#607080;cursor:wait}
@keyframes pl-spin-rotate{to{transform:rotate(360deg)}}
@keyframes pl-spin-bounce{50%{transform:translateY(-5px);opacity:.5}}
@keyframes pl-spin-scale{50%{transform:scaleY(.45)}}
@media (max-width:600px){.pl-spin-grid{grid-template-columns:repeat(2,1fr)}}`,
  js: `(function () {
  var button = document.querySelector("[data-spin-btn]");
  var label = button.querySelector("span");
  button.addEventListener("click", function () {
    if (button.classList.contains("is-loading")) return;
    button.classList.add("is-loading");
    label.textContent = "提交中…";
    setTimeout(function () {
      button.classList.remove("is-loading");
      label.textContent = "已完成 ✓";
      setTimeout(function () { label.textContent = "提交并加载"; }, 1800);
    }, 1600);
  });
})();`
},
{
  id: "floating-dock",
  name: "悬浮工具坞",
  cat: "nav",
  desc: "底部居中悬浮操作坞，带标签与主题切换。",
  tags: ["dock", "悬浮", "导航", "工具坞", "返回顶部"],
  prompt: "做一个底部居中的悬浮工具坞：半透明玻璃胶囊容器里有四个图标按钮（回到顶部、切换主题、搜索、分享），悬停时上方浮出文字标签。点击主题按钮切换演示区明暗，点击搜索展开一个内联输入条，点击分享显示状态提示。整体固定在视口底部，移动端保持横向排列。",
  html: `<div class="pl-dock-demo" data-dock-demo>
  <div class="pl-dock-copy">
    <span>悬浮工具坞</span>
    <h2>常用动作，<br>始终在手边。</h2>
    <p>长页面里不必回到顶部寻找入口。点击坞里的图标试试主题、搜索和分享。</p>
  </div>
  <div class="pl-dock">
    <button type="button" data-dock="top" data-label="回到顶部">↑</button>
    <button type="button" data-dock="theme" data-label="切换主题">◐</button>
    <button type="button" data-dock="search" data-label="搜索">⌕</button>
    <button type="button" data-dock="share" data-label="分享">↗</button>
  </div>
  <div class="pl-dock-search" data-dock-search>
    <input type="search" placeholder="搜索这个页面…" data-dock-input>
    <button type="button" data-dock-close aria-label="关闭">×</button>
  </div>
  <span class="pl-dock-note" data-dock-note></span>
</div>`,
  css: `.pl-dock-demo{--dbg:#f8fbfb;--dink:#101b26;--dsub:#6a7885;position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px;text-align:center;background:radial-gradient(700px 460px at 50% 20%,rgba(15,139,141,.14),transparent 60%),var(--dbg);transition:background .3s}
.pl-dock-demo.is-night{--dbg:#0d1a24;--dink:#eef5f7;--dsub:#93a9b4;background:radial-gradient(700px 460px at 50% 20%,rgba(15,139,141,.24),transparent 60%),var(--dbg)}
.pl-dock-copy span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-dock-copy h2{margin-top:12px;font-size:clamp(2rem,3.8vw,3rem);line-height:1.02;letter-spacing:-.04em;color:var(--dink);transition:color .3s}
.pl-dock-copy p{max-width:430px;margin-top:14px;font-size:12.5px;line-height:1.7;color:var(--dsub)}
.pl-dock{position:fixed;left:50%;bottom:24px;z-index:5;display:flex;gap:6px;padding:8px;border:1px solid rgba(23,50,77,.14);border-radius:16px;background:rgba(255,255,255,.82);box-shadow:0 20px 44px rgba(23,50,77,.16);backdrop-filter:blur(18px);transform:translateX(-50%)}
.pl-dock-demo.is-night .pl-dock{border-color:rgba(255,255,255,.14);background:rgba(18,32,42,.82)}
.pl-dock button{position:relative;display:grid;place-items:center;width:42px;height:42px;border:1px solid rgba(23,50,77,.12);border-radius:11px;background:rgba(255,255,255,.6);color:#17324d;font-size:15px;cursor:pointer;transition:background .2s,transform .2s,color .2s}
.pl-dock-demo.is-night .pl-dock button{border-color:rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#e6f1f3}
.pl-dock button:hover{transform:translateY(-3px);background:#fff}
.pl-dock-demo.is-night .pl-dock button:hover{background:rgba(255,255,255,.14)}
.pl-dock button::after{content:attr(data-label);position:absolute;bottom:calc(100% + 10px);left:50%;padding:5px 8px;border-radius:6px;background:#17324d;font-size:9.5px;font-weight:600;color:#fff;white-space:nowrap;opacity:0;transform:translate(-50%,4px);pointer-events:none;transition:opacity .18s,transform .18s}
.pl-dock button:hover::after{opacity:1;transform:translate(-50%,0)}
.pl-dock-search{position:fixed;left:50%;bottom:88px;z-index:6;display:none;align-items:center;gap:8px;width:min(360px,calc(100% - 40px));padding:8px;border:1px solid rgba(23,50,77,.14);border-radius:12px;background:#fff;box-shadow:0 20px 44px rgba(23,50,77,.16);transform:translateX(-50%)}
.pl-dock-search.is-open{display:flex}
.pl-dock-search input{flex:1;min-width:0;height:34px;padding:0 8px;border:0;background:transparent;font-size:12px;outline:none}
.pl-dock-search button{width:28px;height:28px;border:0;border-radius:7px;background:#f1f5f4;color:#7a8792;cursor:pointer}
.pl-dock-note{position:fixed;left:50%;bottom:88px;z-index:4;padding:8px 13px;border-radius:8px;background:#17324d;font-size:10.5px;color:#fff;opacity:0;transform:translate(-50%,6px);transition:opacity .2s,transform .2s;pointer-events:none}
.pl-dock-note.is-show{opacity:1;transform:translate(-50%,0)}`,
  js: `(function () {
  var demo = document.querySelector("[data-dock-demo]");
  var search = document.querySelector("[data-dock-search]");
  var input = document.querySelector("[data-dock-input]");
  var note = document.querySelector("[data-dock-note]");
  function flash(text) {
    note.textContent = text;
    note.classList.add("is-show");
    setTimeout(function () { note.classList.remove("is-show"); }, 1800);
  }
  document.querySelectorAll("[data-dock]").forEach(function (button) {
    button.addEventListener("click", function () {
      var action = button.getAttribute("data-dock");
      if (action === "top") window.scrollTo({ top: 0, behavior: "smooth" });
      if (action === "theme") demo.classList.toggle("is-night");
      if (action === "search") {
        search.classList.toggle("is-open");
        if (search.classList.contains("is-open")) input.focus();
      }
      if (action === "share") flash("链接已复制到剪贴板");
    });
  });
  document.querySelector("[data-dock-close]").addEventListener("click", function () {
    search.classList.remove("is-open");
  });
})();`
},
{
  id: "command-palette",
  name: "命令面板",
  cat: "nav",
  desc: "⌘K 呼出的搜索面板，筛选命令并快速跳转。",
  tags: ["command", "命令面板", "搜索", "快捷键", "导航"],
  prompt: "做一个命令面板组件：页面中央是标题和一个触发按钮，点击或按 ⌘K / Ctrl+K 打开全屏遮罩，中间是搜索框和命令列表。输入关键词即时过滤命令，列表项右侧显示分类，没有结果时显示空状态；按 Esc 关闭，点击命令项后关闭并显示状态提示。面板用深色半透明遮罩和白色圆角容器。",
  html: `<div class="pl-cmd-demo">
  <span>命令面板</span>
  <h2>键盘用户的快速入口</h2>
  <p>按 ⌘K / Ctrl+K，或点击下面的按钮。</p>
  <button class="pl-cmd-open" type="button" data-cmd-open>打开命令面板</button>
  <span class="pl-cmd-status" data-cmd-status></span>
  <div class="pl-cmd" data-cmd>
    <div class="pl-cmd-box">
      <div class="pl-cmd-top">
        <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg>
        <input type="text" placeholder="搜索命令…" data-cmd-input>
        <kbd>ESC</kbd>
      </div>
      <div class="pl-cmd-list" data-cmd-list>
        <button type="button" data-cmd-item><span>跳到工程循环</span><small>页面</small></button>
        <button type="button" data-cmd-item><span>打开实验结果</span><small>页面</small></button>
        <button type="button" data-cmd-item><span>复制当前区块源码</span><small>操作</small></button>
        <button type="button" data-cmd-item><span>切换深色模式</span><small>设置</small></button>
        <button type="button" data-cmd-item><span>查看安全评估</span><small>页面</small></button>
        <button type="button" data-cmd-item><span>联系团队成员</span><small>联系人</small></button>
      </div>
      <div class="pl-cmd-empty" data-cmd-empty hidden>没有匹配的命令</div>
    </div>
  </div>
</div>`,
  css: `.pl-cmd-demo{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;text-align:center;background:radial-gradient(700px 460px at 50% 30%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-cmd-demo>span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-cmd-demo h2{margin-top:12px;font-size:clamp(1.8rem,3.2vw,2.5rem);letter-spacing:-.03em;color:#101b26}
.pl-cmd-demo>p{margin-top:10px;font-size:12px;color:#6a7885}
.pl-cmd-open{min-height:44px;margin-top:24px;padding:0 20px;border:0;border-radius:10px;background:#17324d;color:#fff;font-size:12.5px;font-weight:800;cursor:pointer;transition:background .2s}
.pl-cmd-open:hover{background:#0f8b8d}
.pl-cmd-status{min-height:16px;margin-top:12px;font-size:10.5px;color:#0f8b8d}
.pl-cmd{position:fixed;inset:0;z-index:8;display:none;place-items:start center;padding-top:14vh;background:rgba(10,18,24,.5);backdrop-filter:blur(7px)}
.pl-cmd.is-open{display:grid}
.pl-cmd-box{width:min(520px,calc(100% - 40px));overflow:hidden;border:1px solid rgba(23,50,77,.12);border-radius:15px;background:rgba(255,255,255,.96);box-shadow:0 40px 90px rgba(8,16,22,.28);animation:pl-cmd-in .25s cubic-bezier(.2,.8,.2,1) both}
.pl-cmd-top{display:flex;align-items:center;gap:10px;padding:14px;border-bottom:1px solid rgba(23,50,77,.1)}
.pl-cmd-top svg{width:17px;height:17px;fill:none;stroke:#8a97a2;stroke-width:1.7;stroke-linecap:round}
.pl-cmd-top input{flex:1;min-width:0;border:0;background:transparent;font-size:13px;outline:none;color:#101b26}
.pl-cmd-top kbd{padding:3px 6px;border:1px solid rgba(23,50,77,.14);border-radius:5px;background:#f4f7f7;font-family:inherit;font-size:9px;color:#7a8792}
.pl-cmd-list{display:grid;gap:2px;max-height:300px;overflow:auto;padding:8px}
.pl-cmd-list button{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;padding:11px 12px;border:0;border-radius:8px;background:transparent;text-align:left;cursor:pointer;transition:background .15s}
.pl-cmd-list button:hover,.pl-cmd-list button.is-active{background:#f0f7f6}
.pl-cmd-list span{font-size:12px;color:#33434f}
.pl-cmd-list small{font-size:9px;color:#9aa6b0}
.pl-cmd-empty{padding:22px;font-size:11.5px;color:#9aa6b0;text-align:center}
@keyframes pl-cmd-in{from{opacity:0;transform:translateY(-10px) scale(.99)}to{opacity:1;transform:none}}`,
  js: `(function () {
  var palette = document.querySelector("[data-cmd]");
  var input = palette.querySelector("[data-cmd-input]");
  var items = Array.prototype.slice.call(palette.querySelectorAll("[data-cmd-item]"));
  var empty = palette.querySelector("[data-cmd-empty]");
  var status = document.querySelector("[data-cmd-status]");
  function open() {
    palette.classList.add("is-open");
    input.value = "";
    filter("");
    setTimeout(function () { input.focus(); }, 40);
  }
  function close() { palette.classList.remove("is-open"); }
  function filter(query) {
    var visible = 0;
    items.forEach(function (item) {
      var match = item.textContent.toLowerCase().indexOf(query.toLowerCase()) > -1;
      item.hidden = !match;
      if (match) visible += 1;
    });
    empty.hidden = visible > 0;
  }
  document.querySelector("[data-cmd-open]").addEventListener("click", open);
  palette.addEventListener("click", function (event) { if (event.target === palette) close(); });
  input.addEventListener("input", function () { filter(input.value.trim()); });
  document.addEventListener("keydown", function (event) {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      palette.classList.contains("is-open") ? close() : open();
    }
    if (event.key === "Escape") close();
  });
  items.forEach(function (item) {
    item.addEventListener("click", function () {
      status.textContent = "已执行：" + item.querySelector("span").textContent;
      close();
    });
  });
})();`
},
{
  id: "toc-scrollspy",
  name: "目录高亮",
  cat: "nav",
  desc: "内文滚动时自动高亮右侧目录，适合长文档。",
  tags: ["toc", "目录", "scrollspy", "文档", "长页"],
  prompt: "做一个长文目录与滚动高亮组件：左侧是可独立滚动的内容区，包含四个带编号的章节；右侧是粘性目录，列出章节标题。滚动内容区时，当前章节对应的目录项自动高亮并加一条左侧青绿色竖线；点击目录项平滑滚动到对应章节。整体放在两列布局中，移动端隐藏目录。",
  html: `<div class="pl-doc">
  <article class="pl-doc-main" data-doc-scroll>
    <span class="pl-doc-kicker">设计笔记</span>
    <h1>如何让一页 Wiki<br>被顺畅读完</h1>
    <p class="pl-doc-lead">结构不是装饰。它决定了读者能不能在三十秒内找到判断所需的证据。</p>
    <section id="pl-d1"><h2><b>01</b>先给结论</h2><p>把最重要的结果放在开篇，而不是藏在第三屏之后。评审和学生都更愿意读一个先给答案、再给过程的页面。</p><p>结论需要限定条件：在什么体系、什么时间、与什么对照相比。没有边界的结论通常不可复核。</p></section>
    <section id="pl-d2"><h2><b>02</b>再给证据</h2><p>每一条主张后面都应该能追到一张图、一组读数或一次访谈。图片需要图注、样本量和统计说明。</p><p>把失败实验也放进来，说明它如何改变了下一轮设计。这比只展示成功更能体现工程能力。</p></section>
    <section id="pl-d3"><h2><b>03</b>降低阅读门槛</h2><p>术语第一次出现时给出简短解释，避免读者跳出页面搜索。长段落拆成小标题和短句，移动端尤其重要。</p><p>颜色只用来区分层级和状态，不要承载唯一信息。图表同时提供文字摘要。</p></section>
    <section id="pl-d4"><h2><b>04</b>留下可复用的东西</h2><p>协议、参数、引物和代码都应该能被其他团队直接使用。明确标注许可与归属。</p><p>最后，给读者一个下一步：查看结果、下载协议或联系团队。</p></section>
  </article>
  <aside class="pl-doc-toc">
    <span>本页目录</span>
    <a href="#pl-d1" class="is-active" data-toc="pl-d1">01 · 先给结论</a>
    <a href="#pl-d2" data-toc="pl-d2">02 · 再给证据</a>
    <a href="#pl-d3" data-toc="pl-d3">03 · 降低门槛</a>
    <a href="#pl-d4" data-toc="pl-d4">04 · 可复用</a>
  </aside>
</div>`,
  css: `.pl-doc{display:grid;grid-template-columns:minmax(0,1fr) 200px;gap:34px;height:100vh;padding:36px 44px;background:linear-gradient(180deg,#fbfcfc,#eef3f2);overflow:hidden}
.pl-doc-main{overflow:auto;padding-right:12px;scroll-behavior:smooth}
.pl-doc-main::-webkit-scrollbar{width:5px}
.pl-doc-main::-webkit-scrollbar-thumb{background:rgba(23,50,77,.2);border-radius:99px}
.pl-doc-kicker{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-doc-main h1{margin-top:12px;font-size:34px;line-height:1.08;letter-spacing:-.04em;color:#101b26}
.pl-doc-lead{max-width:500px;margin:14px 0 24px;font-size:13px;line-height:1.8;color:#607080}
.pl-doc-main section{padding:4px 0 22px;border-top:1px solid rgba(23,50,77,.1)}
.pl-doc-main section h2{margin-top:16px;font-size:16px;color:#17324d}
.pl-doc-main section h2 b{display:inline-block;margin-right:8px;font-size:10px;color:#0f8b8d;letter-spacing:.06em}
.pl-doc-main section p{margin-top:8px;font-size:12px;line-height:1.8;color:#6a7885}
.pl-doc-toc{position:sticky;top:0;align-self:start;padding:14px 0 14px 16px;border-left:1px solid rgba(23,50,77,.12)}
.pl-doc-toc span{display:block;margin-bottom:10px;font-size:9px;font-weight:800;letter-spacing:.14em;color:#9aa6b0}
.pl-doc-toc a{position:relative;display:block;padding:7px 0;font-size:11.5px;color:#8a97a2;transition:color .2s}
.pl-doc-toc a::before{content:"";position:absolute;left:-17px;top:50%;width:2px;height:0;background:#0f8b8d;transition:height .2s}
.pl-doc-toc a:hover{color:#17324d}
.pl-doc-toc a.is-active{color:#0f8b8d;font-weight:700}
.pl-doc-toc a.is-active::before{height:14px;margin-top:-7px}
@media (max-width:760px){.pl-doc{grid-template-columns:1fr;padding:24px}.pl-doc-toc{display:none}}`,
  js: `(function () {
  var scroller = document.querySelector("[data-doc-scroll]");
  var links = Array.prototype.slice.call(document.querySelectorAll("[data-toc]"));
  var sections = links.map(function (link) { return document.getElementById(link.getAttribute("data-toc")); });
  function setActive(id) {
    links.forEach(function (link) {
      link.classList.toggle("is-active", link.getAttribute("data-toc") === id);
    });
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { root: scroller, rootMargin: "-8% 0px -72% 0px", threshold: 0 });
  sections.forEach(function (section) { if (section) observer.observe(section); });
  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var section = document.getElementById(link.getAttribute("data-toc"));
      if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
})();`
},
{
  id: "scroll-progress",
  name: "阅读进度",
  cat: "nav",
  desc: "顶部阅读进度条与滚动后出现的返回顶部按钮。",
  tags: ["progress", "进度", "返回顶部", "阅读"],
  prompt: "做一个阅读进度组件：页面顶部有一条 3px 的渐变色进度条，随内容滚动实时增长；右下角有一个圆形返回顶部按钮，滚动超过一屏后淡入。内容区包含三到四个章节，足够产生明显滚动。全部基于滚动容器计算，点击按钮平滑回到顶部。",
  html: `<div class="pl-read">
  <div class="pl-read-track"><i data-read-bar></i></div>
  <div class="pl-read-main" data-read-scroll>
    <section class="pl-read-hero"><span>长文阅读</span><h1>一页讲完<br>一个完整项目</h1><p>向下滚动，观察顶部进度条与右下角按钮。</p></section>
    <section><h2>01 · 问题</h2><p>在真实环境里，工程菌需要面对低氧、营养波动和竞争压力。体外常氧条件下的高表达，并不等于现场有效。</p><p>我们把问题拆成三个可测试的假设：启动子强度、宿主背景和培养条件。</p></section>
    <section><h2>02 · 设计</h2><p>第一轮构建覆盖了 24 个启动子组合，用同一批宿主和标准化操作减少批次差异。</p><p>每条构建都记录了序列、验证结果和对应的读数，避免只留下最终胜出的那一个。</p></section>
    <section><h2>03 · 结果</h2><p>在低氧条件下，组合 07 的荧光强度达到基线的 3.2 倍，连续 8 批的变异系数低于 6%。</p><p>常氧条件下优势缩小到 1.4 倍，说明环境确实是关键变量，而不是附带条件。</p></section>
    <section><h2>04 · 下一步</h2><p>下一轮会测试更长时程的稳定性，并把启动子文库开放给其他团队复用。</p></section>
    <footer>— 全文完 —</footer>
  </div>
  <button class="pl-read-top" type="button" data-read-top aria-label="回到顶部">↑</button>
</div>`,
  css: `.pl-read{position:relative;height:100vh;overflow:hidden;background:#fbfcfc}
.pl-read-track{position:absolute;top:0;left:0;right:0;z-index:4;height:3px;background:rgba(23,50,77,.08)}
.pl-read-track i{display:block;width:100%;height:100%;background:linear-gradient(90deg,#0f8b8d,#ffb000,#da4167);transform:scaleX(0);transform-origin:left;transition:transform .1s linear}
.pl-read-main{height:100%;overflow:auto;padding:0 52px;scroll-behavior:smooth}
.pl-read-main::-webkit-scrollbar{width:5px}
.pl-read-main::-webkit-scrollbar-thumb{background:rgba(23,50,77,.2);border-radius:99px}
.pl-read-main section{max-width:560px;margin:0 auto;padding:24px 0 28px;border-top:1px solid rgba(23,50,77,.1)}
.pl-read-main section h2{font-size:18px;color:#17324d;letter-spacing:-.02em}
.pl-read-main section p{margin-top:8px;font-size:12px;line-height:1.85;color:#6a7885}
.pl-read-hero{display:flex;flex-direction:column;justify-content:center;min-height:78vh;border-top:0!important;text-align:center}
.pl-read-hero span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-read-hero h1{margin-top:16px;font-size:clamp(2.4rem,4.6vw,3.6rem);line-height:1.02;letter-spacing:-.045em;color:#101b26}
.pl-read-hero p{margin-top:16px;font-size:12px;color:#7a8792}
.pl-read-main footer{padding:30px 0 90px;font-size:10px;letter-spacing:.16em;color:#9aa6b0;text-align:center}
.pl-read-top{position:absolute;right:26px;bottom:26px;z-index:5;display:grid;place-items:center;width:44px;height:44px;border:1px solid rgba(23,50,77,.14);border-radius:50%;background:rgba(255,255,255,.9);box-shadow:0 12px 28px rgba(23,50,77,.16);color:#17324d;font-size:15px;cursor:pointer;opacity:0;transform:translateY(8px);pointer-events:none;transition:opacity .25s,transform .25s}
.pl-read-top.is-show{opacity:1;transform:none;pointer-events:auto}`,
  js: `(function () {
  var scroller = document.querySelector("[data-read-scroll]");
  var bar = document.querySelector("[data-read-bar]");
  var top = document.querySelector("[data-read-top]");
  function update() {
    var max = scroller.scrollHeight - scroller.clientHeight;
    var ratio = max > 0 ? scroller.scrollTop / max : 0;
    bar.style.transform = "scaleX(" + Math.min(1, Math.max(0, ratio)) + ")";
    top.classList.toggle("is-show", scroller.scrollTop > scroller.clientHeight * 0.6);
  }
  scroller.addEventListener("scroll", update, { passive: true });
  top.addEventListener("click", function () { scroller.scrollTo({ top: 0, behavior: "smooth" }); });
  update();
})();`
},
{
  id: "mega-menu",
  name: "大菜单",
  cat: "nav",
  desc: "带三列链接与推荐卡的下拉大菜单。",
  tags: ["menu", "菜单", "mega", "导航", "下拉"],
  prompt: "做一个顶部导航加下拉大菜单：深色导航栏左侧是品牌，中间是三个链接，其中产品项点击后展开一块宽大的下拉面板，里面分三列链接，右侧是一张带 NEW 标签的推荐卡片。面板有白色背景、细描边和阴影，点击外部或按 Esc 关闭。移动端面板改为单列滚动。",
  html: `<div class="pl-nav" data-nav-demo>
  <div class="pl-nav-bar">
    <strong class="pl-nav-brand">启明<span>Wiki</span></strong>
    <nav class="pl-nav-links">
      <button type="button" data-nav-trigger aria-expanded="false">产品 <i>⌄</i></button>
      <a href="#">工程</a>
      <a href="#">结果</a>
    </nav>
    <a class="pl-nav-cta" href="#">开始搭建</a>
  </div>
  <div class="pl-nav-panel" data-nav-panel>
    <div class="pl-nav-col"><span>页面</span><a href="#">描述</a><a href="#">工程循环</a><a href="#">结果</a><a href="#">安全</a></div>
    <div class="pl-nav-col"><span>插件</span><a href="#">页面区块</a><a href="#">媒体画廊</a><a href="#">表单控件</a><a href="#">导航组件</a></div>
    <div class="pl-nav-col"><span>资源</span><a href="#">设计令牌</a><a href="#">可访问性</a><a href="#">归属说明</a><a href="#">更新日志</a></div>
    <div class="pl-nav-card"><span>新</span><strong>图片画廊<br>与灯箱</strong><p>三列瀑布流 + 键盘切换。</p><a href="#">查看插件 →</a></div>
  </div>
  <div class="pl-nav-body">
    <span>导航</span>
    <h2>一个菜单，<br>容纳整个站点。</h2>
    <p>点击上方“产品”展开大菜单。</p>
  </div>
</div>`,
  css: `.pl-nav{position:relative;min-height:100vh;overflow:hidden;background:radial-gradient(700px 460px at 70% 10%,rgba(15,139,141,.16),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-nav-bar{position:relative;z-index:3;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 26px;border-bottom:1px solid rgba(23,50,77,.1);background:rgba(255,255,255,.82);backdrop-filter:blur(14px)}
.pl-nav-brand{font-size:15px;letter-spacing:-.03em;color:#101b26}
.pl-nav-brand span{color:#0f8b8d}
.pl-nav-links{display:flex;align-items:center;gap:4px}
.pl-nav-links button,.pl-nav-links a{padding:8px 11px;border:0;border-radius:8px;background:transparent;font-size:11.5px;font-weight:600;color:#607080;cursor:pointer;transition:background .18s,color .18s}
.pl-nav-links button:hover,.pl-nav-links a:hover,.pl-nav-links button.is-open{background:#f1f6f5;color:#17324d}
.pl-nav-links i{font-style:normal;display:inline-block;margin-left:3px;transition:transform .2s}
.pl-nav-links button.is-open i{transform:rotate(180deg)}
.pl-nav-cta{padding:8px 14px;border-radius:8px;background:#17324d;font-size:11px;font-weight:700;color:#fff}
.pl-nav-panel{position:absolute;top:60px;left:24px;right:24px;z-index:2;display:none;grid-template-columns:repeat(3,1fr) 1.1fr;gap:26px;padding:24px;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:#fff;box-shadow:0 34px 70px rgba(23,50,77,.18);animation:pl-nav-in .22s ease both}
.pl-nav-panel.is-open{display:grid}
.pl-nav-col span{display:block;margin-bottom:9px;font-size:9px;font-weight:800;letter-spacing:.14em;color:#9aa6b0}
.pl-nav-col a{display:block;width:fit-content;padding:5px 0;font-size:11.5px;color:#4d5d6a;transition:color .15s,transform .15s}
.pl-nav-col a:hover{color:#0f8b8d;transform:translateX(2px)}
.pl-nav-card{padding:16px;border-radius:12px;background:linear-gradient(150deg,#17324d,#0d2235);color:#fff}
.pl-nav-card span{display:inline-flex;padding:3px 7px;border-radius:999px;background:#ffb000;font-size:8px;font-weight:800;letter-spacing:.1em;color:#241900}
.pl-nav-card strong{display:block;margin-top:10px;font-size:16px;line-height:1.2;letter-spacing:-.02em}
.pl-nav-card p{margin-top:6px;font-size:10px;line-height:1.5;color:#9db9c2}
.pl-nav-card a{display:inline-flex;margin-top:12px;font-size:10px;font-weight:700;color:#8fd7d5}
.pl-nav-body{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:calc(100vh - 61px);padding:40px;text-align:center}
.pl-nav-body span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-nav-body h2{margin-top:14px;font-size:clamp(2.2rem,4.4vw,3.4rem);line-height:1.02;letter-spacing:-.04em;color:#101b26}
.pl-nav-body p{margin-top:14px;font-size:12px;color:#6a7885}
@keyframes pl-nav-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
@media (max-width:760px){.pl-nav-panel{grid-template-columns:1fr 1fr;max-height:60vh;overflow:auto}.pl-nav-card{grid-column:1/-1}}`,
  js: `(function () {
  var box = document.querySelector("[data-nav-demo]");
  var trigger = box.querySelector("[data-nav-trigger]");
  var panel = box.querySelector("[data-nav-panel]");
  function setOpen(open) {
    panel.classList.toggle("is-open", open);
    trigger.classList.toggle("is-open", open);
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
  }
  trigger.addEventListener("click", function () {
    setOpen(!panel.classList.contains("is-open"));
  });
  document.addEventListener("click", function (event) {
    if (!box.contains(event.target)) setOpen(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
})();`
}
);
