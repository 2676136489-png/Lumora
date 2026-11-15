/* 补充的界面控件（原创实现） */
window.PLUGINS.push(
{
  id: "choice-controls",
  name: "复选框与单选框",
  cat: "choices",
  desc: "自定义复选框标签与单选项，带选择摘要。",
  tags: ["复选框", "单选框", "控件", "表单"],
  prompt: "做一个选择控件区块：顶部是标签和标题，下面两组控件。第一组是四个胶囊形复选框，选中时青绿色描边、浅色底并显示勾选标记；第二组是三个单选项，左侧是圆形选择点。底部显示“已选 N 个模块 · 频率”的摘要，随选择实时更新。使用原生 input，保留键盘可访问性。",
  html: `<section class="pl-choice-set">
  <header class="pl-choice-set-head"><span>选择控件</span><h2>复选框与单选框</h2></header>
  <div class="pl-choice-group"><h3>附加模块</h3>
    <div class="pl-check-list">
      <label><input type="checkbox" checked data-choice-check><span>荧光成像</span></label>
      <label><input type="checkbox" data-choice-check><span>蛋白纯化</span></label>
      <label><input type="checkbox" checked data-choice-check><span>数据看板</span></label>
      <label><input type="checkbox" data-choice-check><span>安全审查</span></label>
    </div>
  </div>
  <div class="pl-choice-group"><h3>实验频率</h3>
    <div class="pl-radio-list">
      <label><input type="radio" name="pl-choice-freq" checked data-choice-radio><span>每日 · 快速迭代</span></label>
      <label><input type="radio" name="pl-choice-freq" data-choice-radio><span>隔日 · 平衡节奏</span></label>
      <label><input type="radio" name="pl-choice-freq" data-choice-radio><span>每周 · 深度验证</span></label>
    </div>
  </div>
  <p class="pl-choice-sum" data-choice-sum>已选 2 个模块 · 每日</p>
</section>`,
  css: `.pl-choice-set{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:48px;background:radial-gradient(700px 460px at 20% 20%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-choice-set-head{width:min(560px,100%);margin-bottom:22px}
.pl-choice-set-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-choice-set-head h2{margin-top:8px;font-size:clamp(1.7rem,3vw,2.2rem);letter-spacing:-.04em;color:#101b26}
.pl-choice-group{width:min(560px,100%);padding:18px 20px;border:1px solid rgba(23,50,77,.11);border-radius:14px;background:rgba(255,255,255,.88);box-shadow:0 10px 26px rgba(23,50,77,.05)}
.pl-choice-group+.pl-choice-group{margin-top:10px}
.pl-choice-group h3{font-size:11px;font-weight:800;letter-spacing:.06em;color:#607080}
.pl-check-list{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.pl-check-list label,.pl-radio-list label{position:relative;cursor:pointer}
.pl-check-list input,.pl-radio-list input{position:absolute;opacity:0;pointer-events:none}
.pl-check-list span{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid rgba(23,50,77,.14);border-radius:999px;font-size:11px;color:#607080;transition:border-color .2s,background .2s,color .2s}
.pl-check-list span::before{content:"";width:13px;height:13px;border:1px solid rgba(23,50,77,.26);border-radius:4px;background:#fff;transition:background .2s,border-color .2s}
.pl-check-list input:checked+span{border-color:#0f8b8d;background:#f3faf9;color:#17324d}
.pl-check-list input:checked+span::before{border-color:#0f8b8d;background:#0f8b8d;box-shadow:inset 0 0 0 3px #fff}
.pl-radio-list{display:grid;gap:8px;margin-top:12px}
.pl-radio-list span{display:flex;align-items:center;gap:9px;padding:9px 11px;border:1px solid transparent;border-radius:8px;font-size:11.5px;color:#607080;transition:background .2s,color .2s}
.pl-radio-list span::before{content:"";width:14px;height:14px;border:1px solid rgba(23,50,77,.28);border-radius:50%;background:#fff;transition:background .2s,border-color .2s,box-shadow .2s}
.pl-radio-list input:checked+span{background:#f3faf9;color:#17324d;font-weight:700}
.pl-radio-list input:checked+span::before{border-color:#0f8b8d;background:#0f8b8d;box-shadow:inset 0 0 0 3px #fff}
.pl-choice-sum{margin-top:16px;font-size:10.5px;color:#0f8b8d;font-weight:700}
@media (max-width:600px){.pl-choice-set{padding:32px 20px}}`,
  js: `(function () {
  var checks = Array.prototype.slice.call(document.querySelectorAll("[data-choice-check]"));
  var radios = Array.prototype.slice.call(document.querySelectorAll("[data-choice-radio]"));
  var sum = document.querySelector("[data-choice-sum]");
  function update() {
    var count = checks.filter(function (item) { return item.checked; }).length;
    var picked = radios.filter(function (item) { return item.checked; })[0];
    var label = picked ? picked.nextElementSibling.textContent.split(" · ")[0] : "未选择";
    sum.textContent = "已选 " + count + " 个模块 · " + label;
  }
  checks.concat(radios).forEach(function (item) {
    item.addEventListener("change", update);
  });
})();`
},
{
  id: "breadcrumb-pagination",
  name: "面包屑与分页",
  cat: "pagination",
  desc: "路径面包屑与可点击分页，适合长列表页。",
  tags: ["面包屑", "分页", "导航", "列表"],
  prompt: "做一个导航扩展区块：顶部是面包屑路径（首页 / 项目 / 结果），用斜线分隔，最后一项加粗。下面是一张白色卡片，包含标题、当前页数与页码按钮；页码包括上一页、1–4、省略号、8 和下一页，点击后当前页高亮并更新文字。整体居中，浅色背景，页码按钮为圆形，当前页青绿色实心。",
  html: `<section class="pl-crumb">
  <nav class="pl-crumb-path" aria-label="面包屑"><a href="#">首页</a><i>/</i><a href="#">项目</a><i>/</i><span>结果</span></nav>
  <div class="pl-crumb-card">
    <span>RESULTS</span>
    <h2>结果与证据</h2>
    <p>第 <b data-page-num>1</b> 页，共 8 页</p>
    <div class="pl-page-btns" data-pages>
      <button type="button" data-page="prev" aria-label="上一页">←</button>
      <button type="button" class="is-active" data-page="1">1</button>
      <button type="button" data-page="2">2</button>
      <button type="button" data-page="3">3</button>
      <button type="button" data-page="4">4</button>
      <span>…</span>
      <button type="button" data-page="8">8</button>
      <button type="button" data-page="next" aria-label="下一页">→</button>
    </div>
  </div>
</section>`,
  css: `.pl-crumb{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:48px;background:linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-crumb-path{display:flex;align-items:center;gap:8px;margin-bottom:20px;font-size:11px;color:#8a97a2}
.pl-crumb-path a:hover{color:#0f8b8d}
.pl-crumb-path i{font-style:normal;color:#c1cbd2}
.pl-crumb-path span{font-weight:700;color:#17324d}
.pl-crumb-card{width:min(520px,100%);padding:28px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:rgba(255,255,255,.92);box-shadow:0 26px 56px rgba(23,50,77,.1);text-align:center}
.pl-crumb-card>span{font-size:9px;font-weight:800;letter-spacing:.18em;color:#0f8b8d}
.pl-crumb-card h2{margin-top:10px;font-size:26px;letter-spacing:-.04em;color:#101b26}
.pl-crumb-card p{margin-top:6px;font-size:11px;color:#8a97a2}
.pl-crumb-card p b{color:#17324d}
.pl-page-btns{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:5px;margin-top:22px}
.pl-page-btns button{display:grid;place-items:center;width:32px;height:32px;border:1px solid rgba(23,50,77,.13);border-radius:50%;background:#fff;font-size:11px;color:#607080;cursor:pointer;transition:background .2s,color .2s,border-color .2s}
.pl-page-btns button:hover{border-color:#0f8b8d;color:#0f8b8d}
.pl-page-btns button.is-active{border-color:transparent;background:#0f8b8d;color:#fff}
.pl-page-btns span{font-size:11px;color:#a5b0ba}
@media (max-width:600px){.pl-crumb{padding:32px 20px}}`,
  js: `(function () {
  var total = 8;
  var current = 1;
  var num = document.querySelector("[data-page-num]");
  var box = document.querySelector("[data-pages]");
  var buttons = Array.prototype.slice.call(box.querySelectorAll("[data-page]"));
  function render() {
    num.textContent = current;
    buttons.forEach(function (button) {
      var value = button.getAttribute("data-page");
      button.classList.toggle("is-active", value === String(current));
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var value = button.getAttribute("data-page");
      if (value === "prev") current = Math.max(1, current - 1);
      else if (value === "next") current = Math.min(total, current + 1);
      else current = Number(value);
      render();
    });
  });
})();`
},
{
  id: "social-share",
  name: "社交分享",
  cat: "social",
  desc: "复制链接、邮件与社交平台分享，带状态提示。",
  tags: ["社交", "分享", "复制链接", "状态"],
  prompt: "做一个社交分享卡片：顶部是小标签和标题，下面一张白色卡片，包含一条结果摘要和四个分享按钮（复制链接、邮件、微博、微信）。复制链接使用剪贴板并显示状态提示；微博和微信只复制链接并提示去应用粘贴，不加载任何第三方脚本。按钮为浅色描边，悬停变青绿色。",
  html: `<section class="pl-share">
  <header class="pl-share-head"><span>社交</span><h2>分享这条结果</h2><p>链接在本地复制，不会上传到第三方。</p></header>
  <div class="pl-share-card">
    <div class="pl-share-post"><span>结果 07</span><h3>低氧条件下表达提升 3.2 倍</h3><p>连续 8 批稳定，变异系数低于 6%。</p></div>
    <div class="pl-share-actions">
      <button type="button" data-share="copy">复制链接</button>
      <a href="mailto:?subject=低氧表达结果&body=查看结果：">邮件</a>
      <button type="button" data-share="weibo">微博</button>
      <button type="button" data-share="wechat">微信</button>
    </div>
    <p class="pl-share-status" data-share-status>链接只会在本地复制。</p>
  </div>
</section>`,
  css: `.pl-share{min-height:100vh;display:grid;align-content:center;justify-items:center;padding:48px;background:radial-gradient(700px 460px at 80% 15%,rgba(255,176,0,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-share-head{width:min(500px,100%);margin-bottom:20px}
.pl-share-head span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-share-head h2{margin-top:8px;font-size:clamp(1.7rem,3vw,2.2rem);letter-spacing:-.04em;color:#101b26}
.pl-share-head p{margin-top:6px;font-size:11px;color:#7a8792}
.pl-share-card{width:min(500px,100%);padding:24px;border:1px solid rgba(23,50,77,.12);border-radius:16px;background:#fff;box-shadow:0 24px 50px rgba(23,50,77,.09)}
.pl-share-post{padding:18px;border-radius:12px;background:linear-gradient(150deg,#f3faf9,#eef4f3)}
.pl-share-post span{font-size:9px;font-weight:800;letter-spacing:.12em;color:#0f8b8d}
.pl-share-post h3{margin-top:8px;font-size:17px;letter-spacing:-.02em;color:#17324d}
.pl-share-post p{margin-top:5px;font-size:10.5px;color:#7a8792}
.pl-share-actions{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:16px}
.pl-share-actions button,.pl-share-actions a{display:grid;place-items:center;min-height:38px;border:1px solid rgba(23,50,77,.13);border-radius:9px;background:#fff;font-size:10.5px;font-weight:700;color:#607080;cursor:pointer;transition:border-color .2s,color .2s,background .2s}
.pl-share-actions button:hover,.pl-share-actions a:hover{border-color:#0f8b8d;background:#f3faf9;color:#0f8b8d}
.pl-share-status{margin-top:12px;font-size:9.5px;color:#9aa6b0;text-align:center}
.pl-share-status.is-done{color:#0f8b8d;font-weight:700}
@media (max-width:560px){.pl-share{padding:32px 20px}.pl-share-actions{grid-template-columns:1fr 1fr}}`,
  js: `(function () {
  var status = document.querySelector("[data-share-status]");
  var buttons = Array.prototype.slice.call(document.querySelectorAll("[data-share]"));
  function copy(text, done) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () { fallback(text, done); });
    } else fallback(text, done);
  }
  function fallback(text, done) {
    var area = document.createElement("textarea");
    area.value = text;
    area.style.position = "fixed";
    area.style.top = "-1000px";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); done(); } catch (error) { /* noop */ }
    document.body.removeChild(area);
  }
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      var kind = button.getAttribute("data-share");
      var demoUrl = location.protocol === "about:" ? "http://127.0.0.1:8000/wiki/pages/results.html" : location.href;
      copy(demoUrl, function () {
        status.textContent = kind === "copy" ? "链接已复制。" : "链接已复制，打开应用粘贴即可。";
        status.classList.add("is-done");
      });
    });
  });
})();`
},
{
  id: "announcement-bar",
  name: "公告条",
  cat: "notifications",
  desc: "可关闭的顶部公告条与内页维护通知卡。",
  tags: ["通知", "公告", "横幅", "关闭"],
  prompt: "做一个通知区块：页面顶部是一条深色公告条，左侧是琥珀色“新”标签，中间是一句更新说明和一个链接，右侧是关闭按钮；关闭后公告条隐藏。下方是主内容区，包含小标签、大标题、一段说明和一张维护通知卡。整体用浅色渐变背景，公告条和通知卡形成清晰层级。",
  html: `<div class="pl-notice">
  <div class="pl-notice-bar" data-notice-bar>
    <span>新</span>
    <p>插件库新增 12 个区块，包含页头、关于与对比表。</p>
    <a href="#">查看更新 →</a>
    <button type="button" data-notice-close aria-label="关闭公告">×</button>
  </div>
  <div class="pl-notice-main">
    <span>通知</span>
    <h1>重要信息<br>放在页面顶部</h1>
    <p>公告条适合发布更新、维护与活动信息，不打断用户正在做的任务。</p>
    <div class="pl-notice-card"><b>维护通知</b><span>10 月 20 日 02:00–03:00 暂停服务，期间数据不会丢失。</span></div>
  </div>
</div>`,
  css: `.pl-notice{min-height:100vh;background:radial-gradient(700px 460px at 80% 10%,rgba(15,139,141,.14),transparent 60%),linear-gradient(180deg,#fbfcfc,#eef3f2)}
.pl-notice-bar{display:flex;align-items:center;gap:12px;padding:11px 22px;background:#101b26;color:#fff;font-size:11px}
.pl-notice-bar>span{padding:3px 8px;border-radius:999px;background:#ffb000;font-size:8.5px;font-weight:800;letter-spacing:.1em;color:#241900}
.pl-notice-bar p{flex:1;min-width:0;font-size:10.5px;color:#c6d6dc;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.pl-notice-bar a{flex:none;font-size:10px;font-weight:700;color:#ffb000}
.pl-notice-bar button{flex:none;width:24px;height:24px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:transparent;color:#fff;font-size:13px;cursor:pointer}
.pl-notice-main{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:calc(100vh - 46px);padding:48px;text-align:center}
.pl-notice-main>span{font-size:10px;font-weight:800;letter-spacing:.18em;color:#da4167}
.pl-notice-main h1{margin-top:14px;font-size:clamp(2.4rem,4.8vw,3.8rem);line-height:1.02;letter-spacing:-.045em;color:#101b26}
.pl-notice-main>p{max-width:440px;margin-top:14px;font-size:12px;line-height:1.75;color:#6a7885}
.pl-notice-card{max-width:460px;margin-top:28px;padding:16px 20px;border:1px solid rgba(23,50,77,.12);border-radius:12px;background:rgba(255,255,255,.86);box-shadow:0 16px 36px rgba(23,50,77,.08);text-align:left}
.pl-notice-card b{display:block;font-size:11px;color:#17324d}
.pl-notice-card span{display:block;margin-top:4px;font-size:10.5px;line-height:1.6;color:#7a8792}
@media (max-width:600px){.pl-notice-bar{padding:10px 14px}.pl-notice-bar p{font-size:9.5px}.pl-notice-main{padding:32px 20px}}`,
  js: `(function () {
  var bar = document.querySelector("[data-notice-bar]");
  var close = document.querySelector("[data-notice-close]");
  if (!bar || !close) return;
  close.addEventListener("click", function () {
    bar.style.display = "none";
  });
})();`
}
);
