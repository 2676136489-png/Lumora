/* 风格矩阵 3：集成 × 4 种主义，联系 × 4 种主义 */
window.PLUGINS.push(
{
  id: "mx-int-swiss", name: "瑞士集成", cat: "integrations",
  desc: "严格表格、状态点与红黑配色的瑞士集成列表。",
  tags: ["集成", "瑞士风格", "表格", "状态"],
  prompt: "做一个瑞士国际主义风格的集成列表：白底，顶部黑线与标题，下面是一张四行表格，每行有应用名、用途、状态点和箭头；表头用等宽小字，状态点用绿/灰/红，推荐行加浅灰底和红色左边线。整体严格对齐，无圆角。",
  html: `<section class="mx-is">
  <header><span>INTEGRATIONS / 04</span><h2>Connect the tools you already use.</h2></header>
  <div class="mx-is-table">
    <div class="mx-is-row mx-is-head"><span>工具</span><span>用途</span><span>状态</span><span></span></div>
    <div class="mx-is-row"><span><b>Notion</b></span><span>实验记录</span><span><i class="is-on"></i>已连接</span><a href="#">→</a></div>
    <div class="mx-is-row is-featured"><span><b>GitHub</b></span><span>代码与版本</span><span><i class="is-on"></i>已连接</span><a href="#">→</a></div>
    <div class="mx-is-row"><span><b>Figma</b></span><span>设计稿</span><span><i></i>未连接</span><a href="#">→</a></div>
    <div class="mx-is-row"><span><b>Slack</b></span><span>通知</span><span><i class="is-warn"></i>需授权</span><a href="#">→</a></div>
  </div>
</section>`,
  css: `.mx-is{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:44px 54px;background:#fff;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.mx-is header{padding-bottom:16px;border-bottom:2px solid #111}
.mx-is header span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#e23a2e}
.mx-is h2{max-width:560px;margin-top:8px;font-size:clamp(1.8rem,3.6vw,2.8rem);line-height:1.05;letter-spacing:-.04em}
.mx-is-table{margin-top:14px}
.mx-is-row{display:grid;grid-template-columns:1.1fr 1fr .9fr auto;align-items:center;gap:12px;padding:13px 8px;border-bottom:1px solid #ddd;font-size:11px}
.mx-is-head{padding:7px 8px;border-bottom:1px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.1em;color:#888}
.mx-is-row b{font-size:13px;font-weight:600}
.mx-is-row span:nth-child(2){color:#555}
.mx-is-row span:nth-child(3){display:flex;align-items:center;gap:6px;font-size:9px;color:#555}
.mx-is-row i{width:7px;height:7px;border-radius:50%;background:#ccc}
.mx-is-row i.is-on{background:#2f9f6f}
.mx-is-row i.is-warn{background:#e0a100}
.mx-is-row a{font-family:ui-monospace,Consolas,monospace;font-size:12px;color:#111}
.mx-is-row.is-featured{background:#f3f3f3;border-left:3px solid #e23a2e;padding-left:10px}
@media (max-width:700px){.mx-is{padding:28px 20px}.mx-is-row{grid-template-columns:1fr 1fr auto}.mx-is-row span:nth-child(2),.mx-is-head span:nth-child(2){display:none}}`,
  js: ``
},
{
  id: "mx-int-terminal", name: "终端集成", cat: "integrations",
  desc: "命令行安装、状态输出与进度条的终端集成页。",
  tags: ["集成", "终端", "命令行", "状态"],
  prompt: "做一个终端风格的集成页：深绿黑背景，顶部终端栏，下面是四条安装命令，每条包含 $ connect 工具名、进度条和 [OK]；右侧显示延迟与状态。整体像正在运行的开发工具，加入闪烁光标和扫描线，移动端缩小字号。",
  html: `<section class="mx-it">
  <header><span>~/integrations</span><span>4 CONNECTED</span></header>
  <div class="mx-it-list">
    <div><b>$ connect notion</b><i></i><span>[OK] 12ms</span></div>
    <div><b>$ connect github</b><i></i><span>[OK] 18ms</span></div>
    <div><b>$ connect figma</b><i></i><span>[OK] 21ms</span></div>
    <div><b>$ connect slack</b><i></i><span>[AUTH] 需要授权</span></div>
  </div>
  <footer>ready for next command<span class="mx-it-cursor"></span></footer>
</section>`,
  css: `.mx-it{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:32px 42px;background:#07100b;color:#7cff9b;font-family:ui-monospace,Consolas,"Courier New",monospace}
.mx-it::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(180deg,rgba(255,255,255,.03) 0 1px,transparent 1px 4px)}
.mx-it header{position:relative;z-index:1;display:flex;justify-content:space-between;padding:8px 10px;border:1px solid rgba(124,255,155,.25);font-size:8px;letter-spacing:.12em;color:rgba(124,255,155,.6)}
.mx-it-list{position:relative;z-index:1;display:grid;gap:7px;margin-top:12px}
.mx-it-list div{display:grid;grid-template-columns:1.2fr 2fr auto;align-items:center;gap:12px;padding:10px 12px;border:1px solid rgba(124,255,155,.18);background:rgba(124,255,155,.03)}
.mx-it-list b{font-size:10px;font-weight:400;color:#d9ffe6}
.mx-it-list i{height:5px;border-radius:99px;background:linear-gradient(90deg,#7cff9b 0 76%,rgba(124,255,155,.15) 76%)}
.mx-it-list div:nth-child(2) i{background:linear-gradient(90deg,#7cff9b 0 88%,rgba(124,255,155,.15) 88%)}
.mx-it-list div:nth-child(3) i{background:linear-gradient(90deg,#7cff9b 0 64%,rgba(124,255,155,.15) 64%)}
.mx-it-list div:nth-child(4) i{background:linear-gradient(90deg,#febc2e 0 40%,rgba(124,255,155,.15) 40%)}
.mx-it-list span{font-size:8px;color:rgba(124,255,155,.65)}
.mx-it-list div:nth-child(4) span{color:#febc2e}
.mx-it footer{position:relative;z-index:1;margin-top:14px;font-size:9px;color:rgba(124,255,155,.55)}
.mx-it-cursor{display:inline-block;width:7px;height:12px;margin-left:4px;background:#7cff9b;vertical-align:-2px;animation:mx-it-blink 1s steps(1) infinite}
@keyframes mx-it-blink{50%{opacity:0}}
@media (max-width:640px){.mx-it{padding:22px}.mx-it-list div{grid-template-columns:1fr auto}.mx-it-list i{display:none}}`,
  js: ``
},
{
  id: "mx-int-y2k", name: "Y2K 集成", cat: "integrations",
  desc: "银色塑料质感图标、气泡与高光边框的千禧集成页。",
  tags: ["集成", "Y2K", "塑料", "高光"],
  prompt: "做一个 Y2K 千禧风格集成页：银蓝渐变背景，六个像早期塑料软件图标的高光方块，排成三列，带反光边框、蓝紫色渐变和像素小标签；背景漂浮气泡，标题用镀铬字。悬停时图标轻微放大并出现光晕。",
  html: `<section class="mx-iy">
  <div class="mx-iy-bubble is-a"></div><div class="mx-iy-bubble is-b"></div>
  <header><b>CONNECTED / 2000</b><span>6 APPS ONLINE</span></header>
  <h2>PLUG INTO<br>THE FUTURE</h2>
  <div class="mx-iy-grid"><div><i>N</i><span>NOTION</span></div><div><i>G</i><span>GITHUB</span></div><div><i>F</i><span>FIGMA</span></div><div><i>S</i><span>SLACK</span></div><div><i>D</i><span>DRIVE</span></div><div><i>Z</i><span>ZOTERO</span></div></div>
</section>`,
  css: `.mx-iy{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:28px 40px;background:linear-gradient(160deg,#d7e9ff,#a8c8ff 45%,#e6d7ff);color:#1a2a5a;font-family:"Trebuchet MS","Helvetica Neue",Arial,sans-serif;overflow:hidden}
.mx-iy-bubble{position:absolute;border-radius:50%;background:radial-gradient(circle at 30% 25%,rgba(255,255,255,.95),rgba(168,200,255,.2) 45%,rgba(255,255,255,.08));border:1px solid rgba(255,255,255,.8)}
.mx-iy-bubble.is-a{right:5%;top:8%;width:110px;height:110px}
.mx-iy-bubble.is-b{left:6%;bottom:8%;width:70px;height:70px}
.mx-iy header{position:relative;z-index:1;display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(26,42,90,.35);font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.12em}
.mx-iy h2{position:relative;z-index:1;margin-top:14px;font-size:clamp(2rem,4.6vw,3.8rem);line-height:.9;letter-spacing:-.04em;background:linear-gradient(180deg,#fff,#7e9fe0 55%,#fff);-webkit-background-clip:text;background-clip:text;color:transparent;filter:drop-shadow(0 2px 0 rgba(95,127,201,.45))}
.mx-iy-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px}
.mx-iy-grid div{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;min-height:94px;border:1px solid #fff;border-radius:14px;background:linear-gradient(180deg,rgba(255,255,255,.92),rgba(200,220,255,.7));box-shadow:inset 0 1px 0 #fff,0 8px 18px rgba(95,127,201,.18);transition:transform .2s}
.mx-iy-grid div:hover{transform:translateY(-4px) scale(1.03)}
.mx-iy-grid i{display:grid;place-items:center;width:38px;height:38px;border-radius:11px;background:linear-gradient(145deg,#fff,#8fb0ff);border:1px solid #fff;box-shadow:inset 0 1px 0 #fff,0 3px 7px rgba(95,127,201,.3);font-style:normal;font-weight:700;font-size:15px;color:#2a4a9a}
.mx-iy-grid span{font-family:ui-monospace,Consolas,monospace;font-size:7px;letter-spacing:.1em;color:#3a4f8a}
@media (max-width:700px){.mx-iy{padding:22px}.mx-iy-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "mx-int-memphis", name: "孟菲斯集成", cat: "integrations",
  desc: "粗描边、亮色几何与波点组成的孟菲斯集成页。",
  tags: ["集成", "孟菲斯", "几何", "玩味"],
  prompt: "做一个孟菲斯风格集成页：奶油底，六个集成卡用粗黑描边、硬阴影和不同亮色，卡片边缘飞出圆点、波浪线和三角；每个卡有字母图标、名称和一句状态。整体活泼、拥挤、像 80 年代海报，移动端两列。",
  html: `<section class="mx-im">
  <header><span>INTEGRATIONS / 06</span><span>MAKE IT LOUD</span></header>
  <h2>CONNECT<br>THE DOTS</h2>
  <div class="mx-im-grid"><div><i>N</i><b>NOTION</b></div><div><i>G</i><b>GITHUB</b></div><div><i>F</i><b>FIGMA</b></div><div><i>S</i><b>SLACK</b></div><div><i>D</i><b>DRIVE</b></div><div><i>Z</i><b>ZOTERO</b></div></div>
</section>`,
  css: `.mx-im{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:30px 40px;background:#f4f1e8;color:#111;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.mx-im header{display:flex;justify-content:space-between;padding-bottom:7px;border-bottom:3px solid #111;font-family:ui-monospace,Consolas,monospace;font-size:8px}
.mx-im h2{margin-top:12px;font-size:clamp(2.2rem,5vw,4rem);line-height:.86;letter-spacing:-.05em}
.mx-im-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:18px}
.mx-im-grid div{position:relative;display:flex;align-items:center;gap:8px;padding:14px;border:3px solid #111;background:#fff;box-shadow:5px 5px 0 #111;transition:transform .16s}
.mx-im-grid div:nth-child(2){background:#ffd23f}
.mx-im-grid div:nth-child(3){background:#7ee0dd}
.mx-im-grid div:nth-child(4){background:#ff8fb1}
.mx-im-grid div:nth-child(5){background:#a8e6ff}
.mx-im-grid div:nth-child(6){background:#ffd23f}
.mx-im-grid div:hover{transform:translate(-3px,-3px)}
.mx-im-grid i{display:grid;place-items:center;width:30px;height:30px;border:2px solid #111;border-radius:50%;background:#fff;font-style:normal;font-weight:700;font-size:13px}
.mx-im-grid b{font-size:9px}
.mx-im-grid div::after{content:"";position:absolute;right:8px;top:8px;width:7px;height:7px;border-radius:50%;background:#111}
.mx-im-grid div:nth-child(odd)::after{background:#ff5d8f}
@media (max-width:700px){.mx-im{padding:22px}.mx-im-grid{grid-template-columns:1fr 1fr}}`,
  js: ``
},
{
  id: "mx-contact-neubrutal", name: "新粗野联系", cat: "contact",
  desc: "黄黑硬阴影、粗边框输入框的新粗野联系表单。",
  tags: ["联系", "新粗野主义", "表单", "硬阴影"],
  prompt: "做一个新粗野主义联系区块：亮黄背景，左侧是超大标题和联系信息，右侧是一张白底、3px 黑边、8px 硬阴影的表单，两个输入框和黑底按钮；输入框也是粗边框、无圆角。悬停按钮向左上移动，移动端单列。",
  html: `<section class="mx-cn">
  <div><h2>SAY<br>HELLO.</h2><p>合作、评审或只是想聊聊低氧表达。</p><div class="mx-cn-info"><b>team@example.org</b><span>上海 · 2026</span></div></div>
  <form><label>姓名<input type="text" placeholder="你的名字"></label><label>邮箱<input type="email" placeholder="you@example.org"></label><label>留言<textarea placeholder="写点什么"></textarea></label><button type="button">发送 →</button></form>
</section>`,
  css: `.mx-cn{min-height:100vh;display:grid;grid-template-columns:1fr .9fr;gap:34px;align-items:center;padding:40px 48px;background:#f5f13f;color:#111;font-family:ui-monospace,Consolas,"Courier New",monospace}
.mx-cn h2{font-family:Impact,"Arial Black",sans-serif;font-size:clamp(3rem,7vw,6rem);line-height:.82;letter-spacing:-.04em}
.mx-cn p{max-width:300px;margin-top:12px;font-size:10px;line-height:1.6}
.mx-cn-info{display:grid;gap:5px;margin-top:20px;font-size:9px}
.mx-cn-info span{color:#555}
.mx-cn form{padding:20px;border:3px solid #111;background:#fff;box-shadow:8px 8px 0 #111}
.mx-cn label{display:block;margin-bottom:12px;font-size:9px;font-weight:700}
.mx-cn input,.mx-cn textarea{display:block;width:100%;margin-top:5px;padding:9px;border:2px solid #111;background:#fff;font-family:inherit;font-size:10px;outline:none}
.mx-cn textarea{min-height:70px;resize:vertical}
.mx-cn button{width:100%;min-height:40px;border:3px solid #111;background:#111;font-family:inherit;font-size:10px;font-weight:700;color:#f5f13f;box-shadow:5px 5px 0 #ff5d8f;cursor:pointer;transition:transform .15s,box-shadow .15s}
.mx-cn button:hover{transform:translate(-3px,-3px);box-shadow:8px 8px 0 #ff5d8f}
@media (max-width:700px){.mx-cn{grid-template-columns:1fr;padding:26px 20px}}`,
  js: ``
},
{
  id: "mx-contact-neumorph", name: "新拟态联系", cat: "contact",
  desc: "柔和双向阴影、浅灰蓝背景的新拟态联系表单。",
  tags: ["联系", "新拟态", "软阴影", "表单"],
  prompt: "做一个新拟态联系区块：浅灰蓝背景，中央一张同色卡片，卡片、输入框和按钮都用双向柔和阴影做出凸起/内凹效果；卡片内有标签、两个输入框、一个文本域和一枚青色主按钮。整体安静、柔和，移动端单列。",
  html: `<section class="mx-cnm">
  <form class="mx-cnm-card"><span>CONTACT / SOFT</span><h2>保持联系</h2><label>姓名<input type="text" placeholder="你的名字"></label><label>邮箱<input type="email" placeholder="you@example.org"></label><label>留言<textarea placeholder="写点什么"></textarea></label><button type="button">发送</button></form>
</section>`,
  css: `.mx-cnm{min-height:100vh;display:grid;place-items:center;padding:40px;background:#e7ecf1;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif}
.mx-cnm-card{width:min(380px,100%);padding:26px;border-radius:22px;background:#e7ecf1;box-shadow:14px 14px 28px #c7ced6,-14px -14px 28px #ffffff}
.mx-cnm-card>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#8a97a2}
.mx-cnm h2{margin-top:7px;font-size:24px;letter-spacing:-.03em;color:#33434f}
.mx-cnm label{display:block;margin-top:14px;font-size:9px;font-weight:600;color:#5d6d7a}
.mx-cnm input,.mx-cnm textarea{display:block;width:100%;margin-top:5px;padding:10px 11px;border:0;border-radius:10px;background:#e7ecf1;box-shadow:inset 4px 4px 8px #c7ced6,inset -4px -4px 8px #ffffff;font-family:inherit;font-size:10px;color:#33434f;outline:none}
.mx-cnm textarea{min-height:64px;resize:vertical}
.mx-cnm button{width:100%;min-height:40px;margin-top:16px;border:0;border-radius:10px;background:#e7ecf1;box-shadow:6px 6px 12px #c7ced6,-6px -6px 12px #ffffff;font-family:inherit;font-size:10px;font-weight:700;color:#2f8f7a;cursor:pointer}
.mx-cnm button:active{box-shadow:inset 4px 4px 8px #c7ced6,inset -4px -4px 8px #ffffff}`,
  js: ``
},
{
  id: "mx-contact-web", name: "复古网页联系", cat: "contact",
  desc: "90 年代浮雕表单、表格与访客留言风格的联系页。",
  tags: ["联系", "复古网页", "表单", "90年代"],
  prompt: "做一个 90 年代网页风格的联系页：灰色瓷砖背景，居中的凸起表格，标题栏是深蓝底黄字，里面是 name/email/message 三个输入框和一枚立体按钮；顶部有跑马灯“CONTACT US”，底部有“请留言”的蓝色链接。移动端表格纵向。",
  html: `<section class="mx-cw">
  <div class="mx-cw-frame"><h2>CONTACT US!</h2><marquee>WE REPLY WITHIN 24 HOURS · PLEASE LEAVE A MESSAGE</marquee><form><label>NAME<input type="text"></label><label>EMAIL<input type="email"></label><label>MESSAGE<textarea></textarea></label><button type="button">SEND MESSAGE</button></form><p><a href="#">Sign my guestbook</a> · <a href="#">Back to home</a></p></div>
</section>`,
  css: `.mx-cw{min-height:100vh;display:grid;place-items:center;padding:24px;background:#c0c0c0;background-image:radial-gradient(#a8a8a8 1px,transparent 1px);background-size:4px 4px;font-family:"Times New Roman",Times,serif;color:#000}
.mx-cw-frame{width:min(520px,100%);padding:14px;border:3px outset #fff;background:#fff}
.mx-cw h2{margin:0;padding:7px;background:#000080;font-size:20px;color:#ffff00;text-align:center}
.mx-cw marquee{padding:4px;border:2px inset #fff;background:#000;font-family:"Courier New",monospace;font-size:9px;color:#00ff00}
.mx-cw form{margin-top:10px;padding:12px;border:2px inset #fff;background:#ffffcc}
.mx-cw label{display:block;margin-bottom:8px;font-size:10px;font-weight:700}
.mx-cw input,.mx-cw textarea{display:block;width:100%;margin-top:3px;padding:5px;border:2px inset #fff;background:#fff;font-family:"Courier New",monospace;font-size:10px;outline:none}
.mx-cw textarea{min-height:56px;resize:vertical}
.mx-cw button{width:100%;min-height:30px;border:2px outset #fff;background:#c0c0c0;font-family:"Times New Roman",serif;font-size:11px;font-weight:700;cursor:pointer}
.mx-cw button:active{border-style:inset}
.mx-cw p{margin:8px 0 0;font-size:9px;text-align:center}
.mx-cw a{color:#0000ee}`,
  js: ``
},
{
  id: "mx-contact-acid", name: "酸性联系", cat: "contact",
  desc: "荧光酸绿、倾斜表单与品红标签的 Acid 联系页。",
  tags: ["联系", "酸性设计", "荧光", "倾斜"],
  prompt: "做一个 Acid Graphics 风格联系页：荧光酸绿背景，黑色网格，左侧巨大的倾斜标题，右侧一张倾斜的黑色表单单，输入框是白底黑边，标签用品红底色，按钮是黄底黑边带硬阴影。整体刺眼、拥挤、反网格，移动端取消倾斜。",
  html: `<section class="mx-ca">
  <div class="mx-ca-copy"><span>CONTACT / ACID</span><h2>TOO LOUD?<br>GOOD.</h2><p>合作、评审、或者直接来吵一架。</p></div>
  <form class="mx-ca-form"><label>NAME<input type="text" placeholder="你的名字"></label><label>EMAIL<input type="email" placeholder="you@example.org"></label><label>MESSAGE<textarea placeholder="写点什么"></textarea></label><button type="button">SEND IT →</button></form>
</section>`,
  css: `.mx-ca{position:relative;min-height:100vh;display:grid;grid-template-columns:1fr .9fr;gap:30px;align-items:center;padding:40px 46px;background:#d8ff00;color:#0a0a0a;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.mx-ca::before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(10,10,10,.16) 1px,transparent 1px),linear-gradient(90deg,rgba(10,10,10,.16) 1px,transparent 1px);background-size:44px 44px;transform:skewY(-3deg)}
.mx-ca-copy{position:relative;z-index:1;transform:skewX(-5deg)}
.mx-ca-copy>span{font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.16em;color:#ff00a8}
.mx-ca h2{margin-top:10px;font-size:clamp(3rem,7vw,6rem);line-height:.82;letter-spacing:-.06em}
.mx-ca p{max-width:300px;margin-top:12px;font-size:10px;font-weight:600}
.mx-ca-form{position:relative;z-index:1;padding:18px;border:3px solid #0a0a0a;background:#0a0a0a;box-shadow:8px 8px 0 #ff00a8;transform:rotate(1.5deg)}
.mx-ca label{display:block;margin-bottom:10px;font-family:ui-monospace,Consolas,monospace;font-size:8px;font-weight:700;color:#d8ff00}
.mx-ca label:nth-child(2){color:#ffb8e6}
.mx-ca input,.mx-ca textarea{display:block;width:100%;margin-top:4px;padding:8px;border:2px solid #0a0a0a;background:#fff;font-family:inherit;font-size:10px;outline:none}
.mx-ca textarea{min-height:60px;resize:vertical}
.mx-ca button{width:100%;min-height:38px;border:3px solid #0a0a0a;background:#d8ff00;font-family:ui-monospace,Consolas,monospace;font-size:10px;font-weight:700;box-shadow:4px 4px 0 #ff00a8;cursor:pointer}
@media (max-width:700px){.mx-ca{grid-template-columns:1fr;padding:26px 20px}.mx-ca-copy,.mx-ca-form{transform:none}}`,
  js: ``
}
);
