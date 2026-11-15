/* 风格化独立设计：奢华、装饰艺术、孟菲斯、日式、黏土、分段、赛博、输入状态、工具提示、形变加载、Bento */
window.PLUGINS.push(
{
  id: "luxury-product",
  name: "奢华商品卡",
  cat: "cards",
  desc: "深绿、金色细线与衬线标题的高端商品卡。",
  tags: ["卡片", "奢华", "产品", "衬线"],
  prompt: "做一个奢华风格的商品卡：深墨绿背景，中央是一张米白卡片，卡片有极细的金色边框，上方是大图、金色编号“NO. 07”，下方是衬线商品名、短说明、价格和“查看细节”文字链接。悬停时图片缓慢放大，整体安静、留白多、像高端实验室器皿目录。移动端卡片收窄。",
  html: `<div class="pl-lux">
  <article class="pl-lux-card">
    <div class="pl-lux-img"><img src="assets/img/plugins/gallery-04.jpg" alt="静水培养器" loading="lazy"><span>NO. 07</span></div>
    <div class="pl-lux-body">
      <span>LOW OXYGEN SERIES</span>
      <h2>静水培养器</h2>
      <p>为低氧环境设计的双层培养容器，兼容标准 96 孔板。</p>
      <div><strong>¥ 1,280</strong><a href="#">查看细节 →</a></div>
    </div>
  </article>
</div>`,
  css: `.pl-lux{min-height:100vh;display:grid;place-items:center;padding:44px;background:radial-gradient(700px 500px at 50% 0%,rgba(200,169,106,.14),transparent 60%),#0d211a;font-family:Georgia,"Songti SC",serif}
.pl-lux-card{width:min(360px,100%);padding:12px;border:1px solid rgba(200,169,106,.5);background:#f5f0e4;box-shadow:0 30px 60px rgba(0,0,0,.35)}
.pl-lux-img{position:relative;aspect-ratio:4/3;overflow:hidden;background:#0d211a}
.pl-lux-img img{width:100%;height:100%;object-fit:cover;filter:saturate(.8) contrast(1.05);transition:transform .8s ease}
.pl-lux-card:hover .pl-lux-img img{transform:scale(1.05)}
.pl-lux-img span{position:absolute;top:12px;left:12px;padding:4px 8px;border:1px solid rgba(245,240,228,.7);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#f5f0e4}
.pl-lux-body{padding:20px 18px 16px}
.pl-lux-body>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.18em;color:#8a7444}
.pl-lux h2{margin-top:8px;font-size:27px;font-weight:400;letter-spacing:-.02em;color:#10281f}
.pl-lux p{margin-top:8px;font-size:11px;line-height:1.7;color:#6f6656}
.pl-lux-body>div{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-top:18px;padding-top:12px;border-top:1px solid rgba(200,169,106,.45)}
.pl-lux strong{font-size:18px;font-weight:400;color:#10281f}
.pl-lux a{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.06em;color:#8a7444}`,
  js: ``
},
{
  id: "deco-event",
  name: "装饰艺术邀请函",
  cat: "cards",
  desc: "深蓝与金色几何扇形组成的 Art Deco 邀请卡。",
  tags: ["卡片", "装饰艺术", "几何", "金色"],
  prompt: "做一张装饰艺术风格的活动邀请卡：深海军蓝背景，卡片中央用金色细线画出扇形与放射几何图案，顶部是小号金色标签，中间是衬线大写标题和日期，底部是“仅限邀请”。整体对称、克制、带金属光泽，悬停时金色线条微微发亮。移动端缩小字号。",
  html: `<div class="pl-deco">
  <article class="pl-deco-card">
    <div class="pl-deco-fan"></div>
    <span>THE LOW OXYGEN SOCIETY</span>
    <h2>ANNUAL<br>REPORT</h2>
    <div class="pl-deco-meta"><b>10 / 24</b><i></i><b>2026</b></div>
    <footer>INVITATION ONLY</footer>
  </article>
</div>`,
  css: `.pl-deco{min-height:100vh;display:grid;place-items:center;padding:44px;background:radial-gradient(600px 420px at 50% 10%,rgba(200,169,106,.12),transparent 60%),#0a1628}
.pl-deco-card{position:relative;width:min(360px,100%);overflow:hidden;padding:38px 30px 26px;border:1px solid rgba(200,169,106,.55);background:#0c1b33;text-align:center;font-family:Georgia,"Songti SC",serif;color:#d9c08a;box-shadow:0 30px 60px rgba(0,0,0,.35)}
.pl-deco-card::before,.pl-deco-card::after{content:"";position:absolute;left:14px;right:14px;height:1px;background:linear-gradient(90deg,transparent,#c8a96a,transparent)}
.pl-deco-card::before{top:12px}
.pl-deco-card::after{bottom:12px}
.pl-deco-fan{position:absolute;left:50%;top:52px;width:220px;height:110px;margin-left:-110px;opacity:.55;background:repeating-conic-gradient(from 270deg at 50% 100%,#c8a96a 0deg 1deg,transparent 1deg 9deg);mask-image:radial-gradient(ellipse at 50% 100%,#000 0 60%,transparent 61%)}
.pl-deco-card>span{position:relative;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.22em;color:#a88f5c}
.pl-deco h2{position:relative;margin-top:54px;font-size:clamp(2.2rem,5vw,3.2rem);font-weight:400;line-height:1.05;letter-spacing:.06em}
.pl-deco-meta{position:relative;display:flex;align-items:center;justify-content:center;gap:12px;margin-top:22px;padding-top:14px;border-top:1px solid rgba(200,169,106,.3)}
.pl-deco-meta b{font-family:ui-monospace,Consolas,monospace;font-size:13px;font-weight:400;letter-spacing:.12em}
.pl-deco-meta i{width:4px;height:4px;background:#c8a96a;transform:rotate(45deg)}
.pl-deco footer{position:relative;margin-top:18px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.22em;color:#8c7648}`,
  js: ``
},
{
  id: "memphis-card",
  name: "孟菲斯卡片",
  cat: "cards",
  desc: "粗黑描边、亮色几何图形与波点组成的孟菲斯卡片。",
  tags: ["卡片", "孟菲斯", "几何", "玩味"],
  prompt: "做一个孟菲斯风格的卡片：白底、3px 黑边、硬阴影，卡片边缘飞出彩色圆点、波浪线、棋盘格和三角；左上角有 NEW 标签，中间是粗体大标题和两行说明，底部是黑底白字按钮。整体明亮、玩味、像 80 年代海报，移动端缩小图形。",
  html: `<div class="pl-memphis">
  <article class="pl-memphis-card">
    <span class="pl-memphis-tag">NEW</span>
    <div class="pl-memphis-shapes"><i></i><i></i><i></i><i></i></div>
    <h2>把实验<br>做成一场<br>游戏</h2>
    <p>每一步都有反馈，每个批次都可回看。</p>
    <a href="#">开始实验 →</a>
  </article>
</div>`,
  css: `.pl-memphis{min-height:100vh;display:grid;place-items:center;padding:44px;background:#f4f1e8;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-memphis-card{position:relative;width:min(350px,100%);padding:30px 26px;border:3px solid #111;background:#fff;box-shadow:10px 10px 0 #111}
.pl-memphis-tag{position:absolute;top:-14px;right:22px;padding:3px 10px;border:2px solid #111;background:#ffd23f;font-family:ui-monospace,Consolas,monospace;font-size:9px;font-weight:700;transform:rotate(6deg)}
.pl-memphis-shapes i{position:absolute;display:block}
.pl-memphis-shapes i:nth-child(1){left:-16px;top:54px;width:26px;height:26px;border-radius:50%;background:#ff5d8f;border:2px solid #111}
.pl-memphis-shapes i:nth-child(2){right:-20px;top:120px;width:34px;height:16px;background:repeating-linear-gradient(90deg,#1e88e5 0 5px,transparent 5px 9px);transform:rotate(-14deg)}
.pl-memphis-shapes i:nth-child(3){left:-22px;bottom:72px;width:30px;height:30px;background:#1e88e5;transform:rotate(45deg);border:2px solid #111}
.pl-memphis-shapes i:nth-child(4){right:24px;bottom:-13px;width:44px;height:10px;border-radius:99px;background:#ffd23f;border:2px solid #111;transform:rotate(-8deg)}
.pl-memphis h2{position:relative;font-size:clamp(2.1rem,4.6vw,3rem);line-height:.98;letter-spacing:-.05em;color:#111}
.pl-memphis p{position:relative;margin-top:12px;font-size:11px;line-height:1.65;color:#555}
.pl-memphis a{position:relative;display:inline-flex;margin-top:22px;padding:10px 14px;border:2px solid #111;background:#111;font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.08em;color:#fff;box-shadow:4px 4px 0 #ff5d8f}
@media (max-width:480px){.pl-memphis-card{padding:24px 20px}.pl-memphis-shapes i:nth-child(2),.pl-memphis-shapes i:nth-child(3){display:none}}`,
  js: ``
},
{
  id: "jp-minimal-product",
  name: "日式极简商品",
  cat: "cards",
  desc: "竖排文字、留白与细线构成的日式商品卡。",
  tags: ["卡片", "日式", "极简", "留白"],
  prompt: "做一个日式极简商品卡：米白背景，左侧竖排商品名与一行小字，右侧一张小尺寸产品图，图片下方是细线、价格和一句说明。整体留白极大、无阴影、无圆角，使用衬线与细黑线，像产品目录的一页。移动端保持横向但缩小竖排字号。",
  html: `<div class="pl-jp">
  <article class="pl-jp-card">
    <div class="pl-jp-vert">静水 / 低氧培养</div>
    <img src="assets/img/plugins/gallery-06.jpg" alt="静水" loading="lazy">
    <div class="pl-jp-info"><span>余白</span><h2>静水</h2><p>为低氧环境设计的培养容器。克制、安静、可重复。</p><b>¥ 268</b></div>
  </article>
</div>`,
  css: `.pl-jp{min-height:100vh;display:grid;place-items:center;padding:50px;background:#f4f1ea;font-family:Georgia,"Songti SC",serif;color:#1f1d18}
.pl-jp-card{display:grid;grid-template-columns:auto 220px 1fr;align-items:center;gap:28px;width:min(660px,100%);padding:28px;border:1px solid rgba(31,29,24,.16);background:#faf8f2}
.pl-jp-vert{writing-mode:vertical-rl;font-size:13px;letter-spacing:.24em;color:#6f6a5f}
.pl-jp-card img{width:100%;height:250px;object-fit:cover;filter:saturate(.75)}
.pl-jp-info{padding-left:8px;border-left:1px solid rgba(31,29,24,.16)}
.pl-jp-info>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.2em;color:#9a9486}
.pl-jp-info h2{margin-top:8px;font-size:34px;font-weight:400;letter-spacing:.04em}
.pl-jp-info p{max-width:220px;margin-top:10px;font-size:11px;line-height:1.8;color:#6f6a5f}
.pl-jp-info b{display:block;margin-top:20px;font-family:ui-monospace,Consolas,monospace;font-size:12px;font-weight:400;letter-spacing:.08em}
@media (max-width:640px){.pl-jp{padding:26px 18px}.pl-jp-card{grid-template-columns:auto 1fr;gap:18px;padding:20px}.pl-jp-card img{grid-column:2;height:180px}.pl-jp-info{grid-column:1 / -1;border-left:0;border-top:1px solid rgba(31,29,24,.16);padding:14px 0 0}.pl-jp-vert{font-size:11px}}`,
  js: ``
},
{
  id: "clay-toggle",
  name: "黏土开关",
  cat: "choices",
  desc: "厚实 3D 黏土质感的开关与卡片。",
  tags: ["开关", "黏土", "3D", "柔和"],
  prompt: "做一个黏土拟态风格的开关卡：淡紫背景，卡片和开关都有厚实、圆润的多层阴影，像软黏土；卡片内有小标签、标题、说明和一枚大号开关，关闭时滑块在左且为灰白，开启时轨道变青绿、滑块右移并轻微弹跳。整体柔和、可爱，移动端缩小。",
  html: `<div class="pl-clay">
  <div class="pl-clay-card">
    <span>CLAY / CONTROL</span>
    <h2>夜间模式</h2>
    <p>在低光环境下降低界面亮度，保留读数对比度。</p>
    <button class="pl-clay-switch" type="button" data-clay-toggle aria-pressed="false"><i></i></button>
  </div>
</div>`,
  css: `.pl-clay{min-height:100vh;display:grid;place-items:center;padding:44px;background:#e9e3f7;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-clay-card{width:min(340px,100%);padding:28px;border-radius:32px;background:#efeafb;box-shadow:18px 18px 36px #c9c0e0,-18px -18px 36px #ffffff;text-align:center}
.pl-clay-card>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.18em;color:#8f83b5}
.pl-clay h2{margin-top:10px;font-size:26px;letter-spacing:-.03em;color:#4a3f6b}
.pl-clay p{max-width:250px;margin:8px auto 0;font-size:11px;line-height:1.7;color:#8a7fa8}
.pl-clay-switch{position:relative;width:96px;height:50px;margin-top:24px;border:0;border-radius:99px;background:#dcd4ef;box-shadow:inset 6px 6px 12px #c3b9d8,inset -6px -6px 12px #ffffff;cursor:pointer;transition:background .25s}
.pl-clay-switch i{position:absolute;top:6px;left:6px;width:38px;height:38px;border-radius:50%;background:#f7f4ff;box-shadow:5px 5px 10px #c3b9d8,-3px -3px 8px #ffffff;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
.pl-clay-switch.is-on{background:#8fd0bf}
.pl-clay-switch.is-on i{transform:translateX(46px);background:#eafff8}`,
  js: `(function () {
  var toggle = document.querySelector("[data-clay-toggle]");
  if (!toggle) return;
  toggle.addEventListener("click", function () {
    var on = toggle.classList.toggle("is-on");
    toggle.setAttribute("aria-pressed", on ? "true" : "false");
  });
})();`
},
{
  id: "cyber-login",
  name: "赛博登录",
  cat: "forms",
  desc: "霓虹网格、故障标题与发光输入框的登录卡。",
  tags: ["登录", "赛博", "霓虹", "故障"],
  prompt: "做一个赛博朋克风格登录卡：深黑蓝背景，细网格与扫描线，卡片内是青色故障标题、短说明、两个深色输入框（聚焦时青色发光）、一个霓虹青按钮和底部小字。标题用青/品红双重阴影制造轻微故障感，整体像终端系统的访问界面，移动端收窄。",
  html: `<div class="pl-cyber">
  <div class="pl-cyber-card">
    <span>ACCESS / 0x07</span>
    <h2>LOW OXYGEN</h2>
    <p>授权实验室访问低氧表达数据。</p>
    <label>IDENTITY<input type="text" placeholder="lab@example.org"></label>
    <label>PASSCODE<input type="password" placeholder="••••••••"></label>
    <button type="button">进入系统</button>
    <small>加密连接 · 需授权</small>
  </div>
</div>`,
  css: `.pl-cyber{min-height:100vh;display:grid;place-items:center;padding:40px;background:#05070f;font-family:ui-monospace,Consolas,"Courier New",monospace;overflow:hidden}
.pl-cyber::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(0,240,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(0,240,255,.08) 1px,transparent 1px);background-size:38px 38px;mask-image:radial-gradient(circle at 50% 50%,#000,transparent 75%)}
.pl-cyber::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.03) 0 1px,transparent 1px 4px)}
.pl-cyber-card{position:relative;z-index:1;width:min(380px,100%);padding:28px;border:1px solid rgba(0,240,255,.28);background:rgba(5,10,20,.9);box-shadow:0 0 40px rgba(0,240,255,.12)}
.pl-cyber-card>span{font-size:8px;letter-spacing:.22em;color:#00f0ff}
.pl-cyber h2{margin-top:12px;font-size:28px;letter-spacing:.06em;color:#e8fdff;text-shadow:2px 0 #ff2bd6,-2px 0 #00f0ff}
.pl-cyber p{margin-top:8px;font-size:10px;color:#6f8f96}
.pl-cyber label{display:block;margin-top:18px;font-size:8px;letter-spacing:.16em;color:#00f0ff}
.pl-cyber input{display:block;width:100%;margin-top:7px;padding:11px 10px;border:1px solid rgba(0,240,255,.22);background:#070d18;font-family:ui-monospace,Consolas,monospace;font-size:11px;color:#d9fbff;outline:none;transition:border-color .2s,box-shadow .2s}
.pl-cyber input:focus{border-color:#00f0ff;box-shadow:0 0 0 3px rgba(0,240,255,.12)}
.pl-cyber button{width:100%;min-height:42px;margin-top:20px;border:1px solid #00f0ff;background:transparent;font-family:ui-monospace,Consolas,monospace;font-size:10px;letter-spacing:.16em;color:#00f0ff;cursor:pointer;transition:background .2s,color .2s}
.pl-cyber button:hover{background:#00f0ff;color:#05070f}
.pl-cyber small{display:block;margin-top:12px;font-size:8px;color:#4f6f76;text-align:center}`,
  js: ``
},
{
  id: "input-states",
  name: "输入框状态",
  cat: "forms",
  desc: "默认、聚焦、错误、通过与禁用五种输入状态。",
  tags: ["表单", "输入框", "状态", "校验"],
  prompt: "做一个输入框状态展示：白色卡片内依次排列默认、聚焦、错误、通过、禁用五种输入框，每个都有标签、输入内容和辅助文字；聚焦态有青绿色描边与光晕，错误态红色并显示提示，通过态绿色并显示对勾，禁用态灰底不可编辑。整体像设计系统文档的一页，移动端保持单列。",
  html: `<div class="pl-inputs">
  <span>FIELDS / STATES</span>
  <h2>输入框的五种状态</h2>
  <label>默认<input type="text" placeholder="输入项目名称"></label>
  <label class="is-focus">聚焦<input type="text" value="低氧表达平台"></label>
  <label class="is-error">错误<input type="text" value="abc"><small>只能使用字母、数字与连字符</small></label>
  <label class="is-success">通过<input type="text" value="low-oxygen-07"><small>名称可用</small></label>
  <label class="is-disabled">禁用<input type="text" value="只读字段" disabled></label>
</div>`,
  css: `.pl-inputs{width:min(430px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.1);font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:radial-gradient(640px 420px at 20% 20%,rgba(15,139,141,.1),transparent 60%),#f6f8f7}
.pl-inputs>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-inputs h2{margin-top:8px;font-size:21px;letter-spacing:-.03em;color:#101b26}
.pl-inputs label{display:block;margin-top:14px;font-size:9px;font-weight:600;color:#607080}
.pl-inputs input{display:block;width:100%;margin-top:6px;padding:10px 11px;border:1px solid rgba(23,50,77,.16);border-radius:8px;background:#fbfcfc;font-family:inherit;font-size:11px;color:#17324d;outline:none;transition:border-color .2s,box-shadow .2s}
.pl-inputs small{display:block;margin-top:5px;font-size:8.5px;color:#8a97a2}
.pl-inputs label.is-focus input{border-color:#0f8b8d;box-shadow:0 0 0 3px rgba(15,139,141,.12)}
.pl-inputs label.is-focus{color:#0f8b8d}
.pl-inputs label.is-error input{border-color:#da4167;background:#fffafb}
.pl-inputs label.is-error{color:#da4167}
.pl-inputs label.is-error small{color:#da4167}
.pl-inputs label.is-success input{border-color:#3f9f6f;background:#fbfefc}
.pl-inputs label.is-success{color:#3f9f6f}
.pl-inputs label.is-success small{color:#3f9f6f}
.pl-inputs label.is-disabled{color:#9aa6b0}
.pl-inputs label.is-disabled input{border-color:#e5e9ea;background:#f1f4f4;color:#9aa6b0}`,
  js: ``
},
{
  id: "tooltip-playground",
  name: "工具提示",
  cat: "feedback",
  desc: "上下左右四个方向的悬停与聚焦提示。",
  tags: ["工具提示", "反馈", "悬停", "方向"],
  prompt: "做一个工具提示演示：浅灰卡片中央是四个按十字排列的按钮，分别标注上、右、下、左；悬停或键盘聚焦时，按钮上方/右侧/下方/左侧浮出深色小提示，带小三角和淡入动画。提示内容分别是四个方向的说明。整体简洁、可访问，移动端缩小间距。",
  html: `<div class="pl-tip">
  <span>TOOLTIPS / 04</span>
  <h2>四个方向</h2>
  <div class="pl-tip-stage">
    <button type="button" data-tip="上方提示" class="is-top">上</button>
    <button type="button" data-tip="右侧提示" class="is-right">右</button>
    <button type="button" data-tip="下方提示" class="is-bottom">下</button>
    <button type="button" data-tip="左侧提示" class="is-left">左</button>
  </div>
</div>`,
  css: `.pl-tip{width:min(420px,calc(100vw - 40px));margin:auto;padding:28px;border:1px solid rgba(23,50,77,.12);border-radius:18px;background:#fff;box-shadow:0 26px 56px rgba(23,50,77,.1);text-align:center;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#f6f8f7}
.pl-tip>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-tip h2{margin-top:8px;font-size:21px;letter-spacing:-.03em;color:#101b26}
.pl-tip-stage{position:relative;display:grid;grid-template-columns:repeat(3,64px);grid-template-rows:repeat(3,44px);justify-content:center;gap:8px;margin-top:18px}
.pl-tip-stage button{position:relative;border:1px solid rgba(23,50,77,.14);border-radius:8px;background:#f7faf9;font-size:10px;color:#17324d;cursor:pointer;outline:none;transition:border-color .2s,background .2s}
.pl-tip-stage button:hover,.pl-tip-stage button:focus{border-color:#0f8b8d;background:#eff8f6}
.pl-tip-stage .is-top{grid-column:2;grid-row:1}
.pl-tip-stage .is-right{grid-column:3;grid-row:2}
.pl-tip-stage .is-bottom{grid-column:2;grid-row:3}
.pl-tip-stage .is-left{grid-column:1;grid-row:2}
.pl-tip-stage button::after{content:attr(data-tip);position:absolute;padding:5px 8px;border-radius:5px;background:#101b26;font-size:8px;color:#fff;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .18s,transform .18s}
.pl-tip-stage button::before{content:"";position:absolute;width:0;height:0;border:4px solid transparent;opacity:0;pointer-events:none;transition:opacity .18s}
.pl-tip-stage .is-top::after{bottom:calc(100% + 7px);left:50%;transform:translate(-50%,3px)}
.pl-tip-stage .is-top::before{bottom:calc(100% - 1px);left:50%;transform:translateX(-50%);border-top-color:#101b26}
.pl-tip-stage .is-bottom::after{top:calc(100% + 7px);left:50%;transform:translate(-50%,-3px)}
.pl-tip-stage .is-bottom::before{top:calc(100% - 1px);left:50%;transform:translateX(-50%);border-bottom-color:#101b26}
.pl-tip-stage .is-right::after{left:calc(100% + 7px);top:50%;transform:translate(-3px,-50%)}
.pl-tip-stage .is-right::before{left:calc(100% - 1px);top:50%;transform:translateY(-50%);border-right-color:#101b26}
.pl-tip-stage .is-left::after{right:calc(100% + 7px);top:50%;transform:translate(3px,-50%)}
.pl-tip-stage .is-left::before{right:calc(100% - 1px);top:50%;transform:translateY(-50%);border-left-color:#101b26}
.pl-tip-stage button:hover::after,.pl-tip-stage button:focus::after{opacity:1;transform:translate(-50%,0)}
.pl-tip-stage .is-right:hover::after,.pl-tip-stage .is-right:focus::after,
.pl-tip-stage .is-left:hover::after,.pl-tip-stage .is-left:focus::after{transform:translate(0,-50%)}
.pl-tip-stage button:hover::before,.pl-tip-stage button:focus::before{opacity:1}`,
  js: ``
},
{
  id: "morph-loader",
  name: "形变加载器",
  cat: "feedback",
  desc: "有机形变渐变球体与同步文字的加载状态。",
  tags: ["加载", "形变", "有机", "渐变"],
  prompt: "做一个有机形变加载器：深色背景中央是一个渐变球体，用 border-radius 关键帧不断变形、缓慢旋转，像液态金属；下方是等宽大写 SYNCING 和三个依次亮起的小点。整体安静、科技感，不要像素或进度条。移动端缩小球体。",
  html: `<div class="pl-morph">
  <div class="pl-morph-blob"></div>
  <span>SYNCING</span>
  <div class="pl-morph-dots"><i></i><i></i><i></i></div>
</div>`,
  css: `.pl-morph{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:radial-gradient(600px 420px at 50% 30%,rgba(15,139,141,.16),transparent 60%),#0a1014;font-family:ui-monospace,Consolas,monospace}
.pl-morph-blob{width:120px;height:120px;background:linear-gradient(135deg,#0f8b8d,#7fe0dd 45%,#ffb000);box-shadow:0 0 60px rgba(15,139,141,.35);animation:pl-morph-shape 6s ease-in-out infinite,pl-morph-spin 12s linear infinite}
.pl-morph>span{font-size:9px;letter-spacing:.3em;color:#8fd7d5}
.pl-morph-dots{display:flex;gap:6px}
.pl-morph-dots i{width:5px;height:5px;border-radius:50%;background:#7fe0dd;animation:pl-morph-dot 1.2s ease-in-out infinite}
.pl-morph-dots i:nth-child(2){animation-delay:.2s}
.pl-morph-dots i:nth-child(3){animation-delay:.4s}
@keyframes pl-morph-shape{0%,100%{border-radius:60% 40% 55% 45% / 45% 60% 40% 55%}33%{border-radius:40% 60% 35% 65% / 55% 40% 60% 45%}66%{border-radius:55% 45% 65% 35% / 40% 55% 45% 60%}}
@keyframes pl-morph-spin{to{transform:rotate(360deg)}}
@keyframes pl-morph-dot{0%,100%{opacity:.2;transform:translateY(0)}50%{opacity:1;transform:translateY(-3px)}}`,
  js: ``
},
{
  id: "bento-dashboard",
  name: "Bento 数据面板",
  cat: "data",
  desc: "深浅混合、不同尺寸卡片拼成的 Bento 数据面板。",
  tags: ["数据", "Bento", "面板", "仪表盘"],
  prompt: "做一个 Bento 风格的数据面板：四块不同尺寸的圆角卡片拼成不对称网格，包含大数字、柱状迷你图、环形阳性率、最近批次列表和一块深色行动卡。明暗卡片交错，数字大、标签小，整体像产品仪表盘。移动端改为两列并重排。",
  html: `<div class="pl-bento">
  <article class="pl-bento-tile is-main"><span>本批样本</span><b>1,248</b><div class="pl-bento-bars"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></article>
  <article class="pl-bento-tile is-ring"><span>阳性率</span><div class="pl-bento-ring"><span>98.6%</span></div></article>
  <article class="pl-bento-tile is-list"><span>最近批次</span><ul><li><b>07</b><em>通过</em></li><li><b>06</b><em>通过</em></li><li><b>05</b><em>复核</em></li></ul></article>
  <article class="pl-bento-tile is-dark"><span>下一步</span><b>08</b><p>低氧条件下增加 4 个重复，验证批次差异。</p></article>
</div>`,
  css: `.pl-bento{display:grid;grid-template-columns:1.4fr .8fr .8fr;grid-template-rows:1fr 1fr;gap:10px;min-height:100vh;padding:26px;background:#eef2f1;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-bento-tile{padding:16px;border-radius:16px;background:#fff;border:1px solid rgba(23,50,77,.08);box-shadow:0 8px 20px rgba(23,50,77,.05)}
.pl-bento-tile>span{display:block;font-size:9px;color:#8a97a2}
.pl-bento-tile b{display:block;margin-top:6px;font-size:32px;letter-spacing:-.05em;color:#17324d}
.pl-bento-tile.is-main{grid-column:1;grid-row:1 / 3;display:flex;flex-direction:column;justify-content:space-between}
.pl-bento-tile.is-main b{font-size:52px}
.pl-bento-bars{display:flex;align-items:flex-end;gap:5px;height:90px}
.pl-bento-bars i{flex:1;border-radius:4px 4px 0 0;background:linear-gradient(180deg,#7fe0dd,#0f8b8d);height:var(--h,50%)}
.pl-bento-bars i:nth-child(1){--h:32%}.pl-bento-bars i:nth-child(2){--h:48%}.pl-bento-bars i:nth-child(3){--h:40%}.pl-bento-bars i:nth-child(4){--h:66%}.pl-bento-bars i:nth-child(5){--h:58%}.pl-bento-bars i:nth-child(6){--h:82%}.pl-bento-bars i:nth-child(7){--h:74%}.pl-bento-bars i:nth-child(8){--h:94%}
.pl-bento-tile.is-ring{grid-column:2;grid-row:1;display:flex;flex-direction:column;justify-content:space-between}
.pl-bento-ring{position:relative;display:grid;place-items:center;width:86px;height:86px;margin:6px auto 0;border-radius:50%;background:conic-gradient(#0f8b8d 0 98.6%,#e7eeec 98.6% 100%)}
.pl-bento-ring::after{content:"";position:absolute;inset:11px;border-radius:50%;background:#fff}
.pl-bento-ring span{position:relative;z-index:1;font-size:15px;font-weight:700;color:#17324d}
.pl-bento-tile.is-list{grid-column:3;grid-row:1}
.pl-bento-tile.is-list ul{display:grid;gap:6px;margin:8px 0 0;padding:0;list-style:none}
.pl-bento-tile.is-list li{display:flex;align-items:center;justify-content:space-between;padding:5px 7px;border-radius:6px;background:#f5f8f7;font-size:9px;color:#607080}
.pl-bento-tile.is-list b{font-size:10px;color:#17324d}
.pl-bento-tile.is-list em{font-style:normal;font-size:8px;color:#0f8b8d}
.pl-bento-tile.is-list li:nth-child(3) em{color:#ffb000}
.pl-bento-tile.is-dark{grid-column:2 / 4;grid-row:2;background:#101b26;color:#dce8eb}
.pl-bento-tile.is-dark>span{color:#7fe0dd}
.pl-bento-tile.is-dark b{color:#fff;font-size:34px}
.pl-bento-tile.is-dark p{max-width:300px;margin-top:4px;font-size:10px;line-height:1.6;color:#9db2bb}
@media (max-width:700px){.pl-bento{grid-template-columns:1fr 1fr;grid-template-rows:auto;padding:16px}.pl-bento-tile.is-main{grid-column:1 / 3;grid-row:auto}.pl-bento-tile.is-ring{grid-column:1;grid-row:auto}.pl-bento-tile.is-list{grid-column:2;grid-row:auto}.pl-bento-tile.is-dark{grid-column:1 / 3;grid-row:auto}}`,
  js: ``
}
);
