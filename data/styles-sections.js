/* 风格化独立设计：瑞士、复古、纸感、蒸汽波、等距 */
window.PLUGINS.push(
{
  id: "swiss-pricing",
  name: "瑞士价格表",
  cat: "sections",
  desc: "国际主义网格、红黑配色与巨型数字的价格表。",
  tags: ["价格", "瑞士风格", "网格", "编辑设计"],
  prompt: "做一个瑞士国际主义风格的价格表：白底黑字，顶部大号无衬线标题和一句说明；下面是一张严格对齐的五列表格，表头用等宽大写小字，三行方案用 1px 黑线分隔，价格用超大数字，推荐行加浅灰底和红色标记；底部是一行脚注。不要卡片和圆角，突出网格、留白和字重对比。移动端隐藏部分列。",
  html: `<section class="pl-swiss">
  <header><span>PRICING / 2026</span><h1>Clear pricing.<br>No small print.</h1><p>按项目规模选择，所有方案都包含源码与提示词。</p></header>
  <div class="pl-swiss-table">
    <div class="pl-swiss-row pl-swiss-head"><span>计划</span><span>月费</span><span>项目</span><span>支持</span><span></span></div>
    <div class="pl-swiss-row is-featured"><span><b>Studio</b><em>推荐</em></span><strong>¥ 249</strong><span>5</span><span>邮件</span><a href="#">选择 →</a></div>
    <div class="pl-swiss-row"><span><b>Lab</b></span><strong>¥ 690</strong><span>20</span><span>优先</span><a href="#">选择 →</a></div>
    <div class="pl-swiss-row"><span><b>Institute</b></span><strong>¥ 1,980</strong><span>不限</span><span>专属</span><a href="#">选择 →</a></div>
  </div>
  <footer><span>含税</span><span>可随时取消</span><span>年付减免 20%</span><span>2026 / Q4</span></footer>
</section>`,
  css: `.pl-swiss{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:46px 56px;background:#fff;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.pl-swiss header{display:flex;align-items:flex-end;justify-content:space-between;gap:30px;padding-bottom:22px;border-bottom:2px solid #111}
.pl-swiss header>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#e23a2e}
.pl-swiss h1{font-size:clamp(2.4rem,5vw,4.2rem);font-weight:700;line-height:.95;letter-spacing:-.055em;text-align:right}
.pl-swiss header p{max-width:230px;font-size:11px;line-height:1.65;color:#555}
.pl-swiss-table{margin-top:12px}
.pl-swiss-row{display:grid;grid-template-columns:1.2fr .9fr .6fr .8fr auto;align-items:center;gap:16px;padding:15px 4px;border-bottom:1px solid #ddd}
.pl-swiss-head{padding:8px 4px;border-bottom:1px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em;text-transform:uppercase;color:#777}
.pl-swiss-row>span b{font-size:16px;font-weight:600}
.pl-swiss-row>span em{display:inline-block;margin-left:8px;padding:2px 5px;background:#e23a2e;font-size:7px;font-style:normal;font-weight:700;color:#fff;vertical-align:2px}
.pl-swiss-row strong{font-size:34px;font-weight:700;letter-spacing:-.05em}
.pl-swiss-row>span{font-size:11px;color:#333}
.pl-swiss-row a{font-family:ui-monospace,Consolas,monospace;font-size:9px;color:#111;white-space:nowrap}
.pl-swiss-row.is-featured{background:#f2f2f2;border-left:3px solid #e23a2e;padding-left:10px}
.pl-swiss footer{display:flex;flex-wrap:wrap;gap:20px;margin-top:18px;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.1em;color:#888}
@media (max-width:720px){.pl-swiss{padding:30px 22px}.pl-swiss header{display:block}.pl-swiss h1{text-align:left;margin-top:10px}.pl-swiss header p{margin-top:12px}.pl-swiss-row{grid-template-columns:1.2fr 1fr auto;gap:8px}.pl-swiss-row>span:nth-child(3),.pl-swiss-row>span:nth-child(4),.pl-swiss-head span:nth-child(3),.pl-swiss-head span:nth-child(4){display:none}.pl-swiss-row strong{font-size:24px}}`,
  js: ``
},
{
  id: "retro-newsletter",
  name: "复古订阅",
  cat: "sections",
  desc: "70 年代日落渐变、颗粒与贴纸的订阅区块。",
  tags: ["订阅", "复古", "70年代", "渐变"],
  prompt: "做一个 70 年代复古风格的订阅区块：橙粉棕日落渐变背景，叠加细小颗粒纹理和几条波浪线，右上角一个圆形太阳；左侧是衬线大标题、短说明、圆角胶囊邮箱输入框和订阅按钮，右侧一张倾斜的圆形贴纸写着“每月一封”。整体温暖、圆润、有印刷感，移动端单列。",
  html: `<section class="pl-retro">
  <div class="pl-retro-sun"></div>
  <div class="pl-retro-lines"></div>
  <div class="pl-retro-copy">
    <span>STAY CLOSE / 1978</span>
    <h1>把下一次<br><em>灵感</em>寄给你</h1>
    <p>每月一封，关于低氧表达、实验方法与可复核的设计。</p>
    <form><input type="email" placeholder="你的邮箱"><button type="button">订阅</button></form>
    <small>不发送垃圾邮件 · 随时退订</small>
  </div>
  <div class="pl-retro-sticker">每月<br><b>一封</b></div>
</section>`,
  css: `.pl-retro{position:relative;min-height:100vh;display:flex;align-items:center;gap:40px;overflow:hidden;padding:48px 56px;background:linear-gradient(165deg,#ffd6a5 0%,#f4a261 38%,#e76f51 66%,#6d3b2a 100%);color:#3a2118;font-family:Georgia,"Songti SC",serif}
.pl-retro::after{content:"";position:absolute;inset:0;pointer-events:none;opacity:.18;background-image:radial-gradient(#3a2118 0.6px,transparent 0.6px);background-size:4px 4px}
.pl-retro-sun{position:absolute;right:-60px;top:-80px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,#fff3c4 0%,#ffcf6b 45%,rgba(255,207,107,0) 70%);filter:blur(2px)}
.pl-retro-lines{position:absolute;left:0;right:0;bottom:56px;height:90px;opacity:.35;background:repeating-linear-gradient(180deg,transparent 0 10px,rgba(58,33,24,.5) 10px 12px);mask-image:linear-gradient(90deg,transparent,#000 30%,#000 70%,transparent)}
.pl-retro-copy{position:relative;z-index:1;max-width:560px}
.pl-retro-copy>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.2em;color:#7a3f2c}
.pl-retro h1{margin-top:14px;font-size:clamp(2.8rem,5.6vw,5rem);font-weight:400;line-height:1.02;letter-spacing:-.04em;color:#3a2118}
.pl-retro h1 em{font-style:italic;color:#8c3b26}
.pl-retro p{max-width:400px;margin-top:16px;font-size:13px;line-height:1.75;color:#5a362a}
.pl-retro form{display:flex;max-width:420px;margin-top:24px;padding:5px;border:2px solid #3a2118;border-radius:999px;background:#fff6e8}
.pl-retro input{flex:1;min-width:0;padding:8px 14px;border:0;background:transparent;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:11px;color:#3a2118;outline:none}
.pl-retro button{padding:9px 18px;border:0;border-radius:999px;background:#3a2118;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:10px;font-weight:700;color:#ffd6a5;cursor:pointer}
.pl-retro small{display:block;margin-top:10px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:9px;color:#7a4a38}
.pl-retro-sticker{position:relative;z-index:1;display:grid;place-items:center;width:150px;height:150px;margin-left:auto;border:2px solid #3a2118;border-radius:50%;background:#f7e7c6;font-family:ui-monospace,Consolas,monospace;font-size:12px;line-height:1.4;text-align:center;transform:rotate(9deg);box-shadow:6px 6px 0 rgba(58,33,24,.25)}
.pl-retro-sticker b{display:block;font-size:22px}
@media (max-width:720px){.pl-retro{display:block;padding:34px 22px}.pl-retro-sticker{width:110px;height:110px;margin:28px 0 0;font-size:9px}.pl-retro h1{font-size:2.6rem}}`,
  js: ``
},
{
  id: "paper-testimonial",
  name: "纸感评价",
  cat: "sections",
  desc: "桌面、胶带与手写便签组成的用户评价。",
  tags: ["评价", "纸感", "手写", "拼贴"],
  prompt: "做一个纸感拼贴风的用户评价：桌面背景是暖灰格纹，上面斜放一张米白便签，便签顶部有半透明胶带，正文用偏手写的字体写一句访谈引语，底部署名和身份；旁边再叠一张更小的黄色便签。整体像贴在实验记录本上的纸条，轻微旋转和纸阴影，移动端缩小并改为纵向叠放。",
  html: `<section class="pl-paper">
  <article class="pl-paper-note">
    <span class="pl-paper-tape"></span>
    <p>“读完结果页，我第一次能判断这个平台在低氧条件下到底稳不稳。”</p>
    <footer><b>周嘉</b><span>现场研究者 · 访谈 04</span></footer>
  </article>
  <article class="pl-paper-mini">
    <span class="pl-paper-tape"></span>
    <p>“不要只给我曲线，给我样本量和对照。”</p>
    <small>记录于工作坊</small>
  </article>
</section>`,
  css: `.pl-paper{min-height:100vh;display:flex;align-items:center;justify-content:center;gap:28px;padding:48px;background:#d9cbb8;color:#3a332b;font-family:Georgia,"Songti SC",serif}
.pl-paper::before{content:"";position:absolute;inset:0;opacity:.18;background-image:linear-gradient(rgba(58,51,43,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(58,51,43,.3) 1px,transparent 1px);background-size:26px 26px}
.pl-paper-note,.pl-paper-mini{position:relative;z-index:1;box-shadow:0 18px 36px rgba(58,51,43,.2)}
.pl-paper-note{width:min(460px,70vw);padding:38px 34px 26px;background:#fbf6e9;transform:rotate(-2.4deg)}
.pl-paper-note p{font-size:clamp(1.2rem,2.4vw,1.7rem);line-height:1.55;color:#2f2a22}
.pl-paper-note footer{display:flex;align-items:baseline;gap:10px;margin-top:26px;padding-top:14px;border-top:1px dashed rgba(58,51,43,.3)}
.pl-paper-note b{font-family:ui-monospace,Consolas,monospace;font-size:11px}
.pl-paper-note span{font-family:ui-sans-serif,system-ui,sans-serif;font-size:9px;color:#7a6f60}
.pl-paper-mini{width:190px;padding:26px 20px 18px;background:#f2e2a8;transform:rotate(3.6deg);align-self:flex-end}
.pl-paper-mini p{font-size:12px;line-height:1.65}
.pl-paper-mini small{display:block;margin-top:12px;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#8a7a55}
.pl-paper-tape{position:absolute;top:-12px;left:50%;width:88px;height:24px;margin-left:-44px;background:rgba(236,228,204,.8);transform:rotate(-3deg);box-shadow:0 1px 3px rgba(58,51,43,.15)}
.pl-paper-mini .pl-paper-tape{width:64px;margin-left:-32px;transform:rotate(4deg)}
@media (max-width:600px){.pl-paper{flex-direction:column;padding:34px 20px}.pl-paper-note,.pl-paper-mini{width:100%;transform:none}.pl-paper-mini{align-self:stretch}}`,
  js: ``
},
{
  id: "vaporwave-hero",
  name: "蒸汽波首屏",
  cat: "sections",
  desc: "霓虹夕阳、透视网格与铬字标题的首屏。",
  tags: ["首屏", "蒸汽波", "霓虹", "透视"],
  prompt: "做一个蒸汽波风格的首屏：深紫蓝背景，上半部是粉橙渐变的巨大夕阳，下半部是透视网格地面；中央是镀铬渐变的超大标题、日文/中文小字、两枚霓虹描边按钮。加入扫描线和轻微光晕，整体高饱和、复古未来感，移动端缩小标题并保持网格。",
  html: `<section class="pl-vapor">
  <div class="pl-vapor-sun"></div>
  <div class="pl-vapor-floor"></div>
  <div class="pl-vapor-copy">
    <span>低氧 ・ 二〇二六</span>
    <h1>LOW<br><em>OXYGEN</em></h1>
    <p>稳定表达，在呼吸之外。</p>
    <div><a href="#">进入平台</a><a href="#">查看证据</a></div>
  </div>
</section>`,
  css: `.pl-vapor{position:relative;min-height:100vh;overflow:hidden;background:#120b2e;color:#fff;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-vapor::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.045) 0 1px,transparent 1px 4px)}
.pl-vapor-sun{position:absolute;left:50%;top:12%;width:340px;height:340px;margin-left:-170px;border-radius:50%;background:linear-gradient(180deg,#fff2a8,#ff8fb1 45%,#b05cff 100%);box-shadow:0 0 90px rgba(255,143,177,.5)}
.pl-vapor-sun::after{content:"";position:absolute;left:0;right:0;top:58%;height:8px;background:#120b2e;box-shadow:0 16px 0 #120b2e,0 32px 0 #120b2e,0 48px 0 #120b2e,0 64px 0 #120b2e}
.pl-vapor-floor{position:absolute;left:-20%;right:-20%;bottom:-10%;height:52%;background-image:linear-gradient(rgba(126,224,221,.7) 1px,transparent 1px),linear-gradient(90deg,rgba(126,224,221,.7) 1px,transparent 1px);background-size:46px 34px;transform:perspective(340px) rotateX(62deg);transform-origin:center bottom;opacity:.55;mask-image:linear-gradient(180deg,transparent,#000 40%)}
.pl-vapor-copy{position:relative;z-index:1;padding:56px 60px}
.pl-vapor-copy>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.3em;color:#7ee0dd}
.pl-vapor h1{margin-top:18px;font-size:clamp(3.2rem,8vw,7rem);line-height:.9;font-weight:800;letter-spacing:-.05em;background:linear-gradient(180deg,#fff 0%,#a8f0ff 40%,#ff8fb1 70%,#b05cff 100%);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 0 18px rgba(168,240,255,.35))}
.pl-vapor h1 em{font-style:normal}
.pl-vapor p{margin-top:16px;font-size:13px;color:#d7c9ff}
.pl-vapor-copy>div{display:flex;gap:12px;margin-top:26px}
.pl-vapor-copy a{padding:10px 16px;border:1px solid #7ee0dd;border-radius:3px;font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.12em;color:#7ee0dd;text-transform:uppercase;box-shadow:0 0 18px rgba(126,224,221,.25) inset}
.pl-vapor-copy a:last-child{border-color:#ff8fb1;color:#ff8fb1;box-shadow:0 0 18px rgba(255,143,177,.25) inset}
@media (max-width:640px){.pl-vapor-copy{padding:36px 24px}.pl-vapor-sun{width:230px;height:230px;margin-left:-115px}.pl-vapor h1{font-size:3.2rem}}`,
  js: ``
},
{
  id: "isometric-features",
  name: "等距功能卡",
  cat: "sections",
  desc: "带透视、侧面厚度与悬浮效果的三张功能卡。",
  tags: ["功能", "等距", "3D", "透视"],
  prompt: "做一个等距风格的功能卡组：浅蓝灰背景与细网格，三张卡片排成一行，每张用 perspective 轻微旋转，并用伪元素做出侧面厚度，像从桌面立起来；卡片内有编号、标题、说明和一条底部进度条。悬停时卡片回正并上浮。移动端取消旋转、改为纵向。",
  html: `<section class="pl-iso">
  <header><span>SYSTEM / 03</span><h2>三个模块，叠在一起</h2><p>设计、构建与验证共享同一套数据口径。</p></header>
  <div class="pl-iso-stage">
    <article><b>01</b><h3>设计</h3><p>确定变量、成功标准与筛选边界。</p><i></i></article>
    <article><b>02</b><h3>构建</h3><p>标准化组装，保留空载与无启动子对照。</p><i></i></article>
    <article><b>03</b><h3>验证</h3><p>低氧与常氧双条件读数，每批 8 个重复。</p><i></i></article>
  </div>
</section>`,
  css: `.pl-iso{min-height:100vh;display:grid;align-content:center;padding:46px 56px;background:linear-gradient(180deg,#eef4f7,#dfe9ee);color:#17324d;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.pl-iso::before{content:"";position:absolute;inset:0;opacity:.35;background-image:linear-gradient(rgba(23,50,77,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(23,50,77,.12) 1px,transparent 1px);background-size:34px 34px;mask-image:radial-gradient(circle at 50% 60%,#000,transparent 72%)}
.pl-iso header{position:relative;z-index:1;max-width:600px}
.pl-iso header span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#0f8b8d}
.pl-iso h2{margin-top:8px;font-size:clamp(1.9rem,3.6vw,2.8rem);letter-spacing:-.04em}
.pl-iso header p{margin-top:8px;font-size:11px;color:#6a7885}
.pl-iso-stage{position:relative;z-index:1;display:flex;gap:24px;margin-top:30px;perspective:1000px}
.pl-iso-stage article{position:relative;flex:1;padding:22px 20px 26px;border:1px solid rgba(23,50,77,.12);border-radius:10px;background:#fff;box-shadow:10px 12px 0 #c9d8de;transform:rotateX(4deg) rotateY(-7deg);transition:transform .3s,box-shadow .3s}
.pl-iso-stage article:nth-child(2){transform:rotateX(4deg) rotateY(0deg)}
.pl-iso-stage article:nth-child(3){transform:rotateX(4deg) rotateY(7deg)}
.pl-iso-stage article:hover{transform:rotateX(0) rotateY(0) translateY(-8px);box-shadow:16px 20px 0 #b9ccd4}
.pl-iso-stage article::after{content:"";position:absolute;left:0;right:0;bottom:-10px;height:10px;border-radius:0 0 8px 8px;background:#c9d8de;transform:skewX(-38deg);transform-origin:left top}
.pl-iso-stage b{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.12em;color:#0f8b8d}
.pl-iso-stage h3{margin-top:12px;font-size:18px;color:#17324d}
.pl-iso-stage p{margin-top:6px;font-size:11px;line-height:1.65;color:#6a7885}
.pl-iso-stage i{display:block;height:5px;margin-top:16px;border-radius:99px;background:linear-gradient(90deg,#0f8b8d,#7fe0dd)}
.pl-iso-stage article:nth-child(2) i{background:linear-gradient(90deg,#ffb000,#ffd166)}
.pl-iso-stage article:nth-child(3) i{background:linear-gradient(90deg,#da4167,#f08aa0)}
@media (max-width:760px){.pl-iso{padding:32px 22px}.pl-iso-stage{flex-direction:column;gap:18px;perspective:none}.pl-iso-stage article,.pl-iso-stage article:nth-child(2),.pl-iso-stage article:nth-child(3){transform:none}}`,
  js: ``
}
);
