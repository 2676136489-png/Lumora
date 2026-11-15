/* 主义 × 组件矩阵 2：终端表格、孔版卡、太阳朋克数据、蒸汽朋克仪表、解构导航、波普提示、VHS 卡、迷幻加载、多巴胺提示、装饰艺术表单、构成导航、暗黑学院表单 */
window.PLUGINS.push(
{
  id: "table-terminal", name: "终端数据表", cat: "data",
  desc: "绿色终端窗口、等宽表格与状态码的 Terminal 数据表。",
  tags: ["数据", "终端", "表格", "状态"],
  prompt: "做一个终端风格数据表：深绿黑窗口，顶部终端栏，表格三行四列，列头等宽大写，状态用 [OK] / [WARN] 着色；底部一行命令提示与闪烁光标。整体像正在运行的实验日志。",
  html: `<div class="xp-tt"><header><i></i><i></i><i></i><span>~/batches</span></header><table><thead><tr><th>BATCH</th><th>EXPRESSION</th><th>CV</th><th>STATUS</th></tr></thead><tbody><tr><td>07</td><td>3.2×</td><td>4.8%</td><td>[OK]</td></tr><tr><td>06</td><td>3.1×</td><td>4.1%</td><td>[OK]</td></tr><tr><td>05</td><td>2.9×</td><td>5.5%</td><td>[WARN]</td></tr></tbody></table><footer>$ tail -f batches.log<span></span></footer></div>`,
  css: `.xp-tt{width:min(440px,calc(100vw - 40px));margin:auto;border:1px solid rgba(124,255,155,.25);background:#07100b;font-family:ui-monospace,Consolas,"Courier New",monospace;color:#7cff9b}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#050907}
.xp-tt header{display:flex;align-items:center;gap:5px;padding:8px 10px;border-bottom:1px solid rgba(124,255,155,.2);font-size:8px;color:rgba(124,255,155,.5)}
.xp-tt header i{width:7px;height:7px;border-radius:50%;background:#ff5f57}
.xp-tt header i:nth-child(2){background:#febc2e}
.xp-tt header i:nth-child(3){background:#28c840}
.xp-tt header span{margin-left:6px}
.xp-tt table{width:100%;border-collapse:collapse;font-size:9px}
.xp-tt th{padding:8px 10px;border-bottom:1px solid rgba(124,255,155,.25);font-weight:400;text-align:left;color:rgba(124,255,155,.5)}
.xp-tt td{padding:9px 10px;border-bottom:1px solid rgba(124,255,155,.1)}
.xp-tt td:last-child{color:#d9ffe6}
.xp-tt tr:nth-child(3) td:last-child{color:#febc2e}
.xp-tt footer{padding:9px 10px;font-size:8px;color:rgba(124,255,155,.55)}
.xp-tt footer span{display:inline-block;width:6px;height:11px;margin-left:4px;background:#7cff9b;vertical-align:-2px;animation:xp-tt-blink 1s steps(1) infinite}
@keyframes xp-tt-blink{50%{opacity:0}}`,
  js: ``
},
{
  id: "card-risograph", name: "孔版套餐卡", cat: "cards",
  desc: "橙蓝双色套印、裁切标记的 Risograph 套餐卡。",
  tags: ["卡片", "孔版", "双色", "套印"],
  prompt: "做一张孔版印刷套餐卡：米白纸面，只用橙红与蓝，标题有轻微套印错位，卡片边角有裁切线和色标；价格巨大，三条功能用蓝色细线分隔，底部是橙色按钮。整体像独立印刷品，移动端缩窄。",
  html: `<div class="xp-rc"><article><div class="xp-rc-marks"><i></i><i></i></div><span>RISO / PLAN 02</span><h2>STUDIO</h2><b>¥ 249<span>/ 月</span></b><ul><li>低氧主验证</li><li>8 批稳定性</li><li>全部原始读数</li></ul><a href="#">选择 →</a></article></div>`,
  css: `.xp-rc{min-height:100vh;display:grid;place-items:center;padding:40px;background:#f3ead8;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.xp-rc article{position:relative;width:min(310px,100%);padding:22px;border:2px solid #1c3a8f;background:#f7efe0;box-shadow:6px 6px 0 rgba(240,90,40,.5)}
.xp-rc-marks i{position:absolute;width:12px;height:12px;border:1px solid #1c3a8f}
.xp-rc-marks i:first-child{left:6px;top:6px;border-right:0;border-bottom:0}
.xp-rc-marks i:last-child{right:6px;bottom:6px;border-left:0;border-top:0}
.xp-rc>article>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#f05a28}
.xp-rc h2{margin-top:8px;font-size:34px;letter-spacing:-.04em;color:#1c3a8f;text-shadow:2px 2px 0 rgba(240,90,40,.45)}
.xp-rc b{display:block;margin-top:6px;font-size:28px;color:#f05a28}
.xp-rc b span{font-size:9px;font-weight:400;color:#1c3a8f}
.xp-rc ul{margin:14px 0 0;padding:0;list-style:none}
.xp-rc li{padding:7px 0;border-top:1px solid rgba(28,58,143,.3);font-size:10px;color:#1c3a8f}
.xp-rc a{display:block;margin-top:14px;padding:8px;border:2px solid #1c3a8f;background:#f05a28;font-family:ui-monospace,Consolas,monospace;font-size:8px;color:#fff;text-align:center}`,
  js: ``
},
{
  id: "stats-solarpunk", name: "太阳朋克数据", cat: "data",
  desc: "暖阳渐变、植物曲线与绿色指标的数据卡。",
  tags: ["数据", "太阳朋克", "自然", "指标"],
  prompt: "做一个太阳朋克数据卡：暖黄到浅绿渐变，左上角柔和太阳，卡片边缘是植物曲线；三列指标（3.2×、98.6%、8）用深绿大数字，底部一条绿色进度条和一句社区说明。整体乐观、自然。",
  html: `<div class="xp-ss"><div class="xp-ss-sun"></div><article><span>SOLAR / DATA</span><h2>生长中的证据</h2><div class="xp-ss-grid"><div><b>3.2×</b><span>相对表达</span></div><div><b>98.6%</b><span>阳性率</span></div><div><b>8</b><span>稳定批次</span></div></div><i></i><p>把方法与收成一起开放给社区。</p></article></div>`,
  css: `.xp-ss{min-height:100vh;display:grid;place-items:center;padding:40px;background:linear-gradient(165deg,#ffe9b0,#cfe8b8 55%,#8fc9a8);font-family:Georgia,"Songti SC",serif;overflow:hidden}
.xp-ss-sun{position:absolute;left:-40px;top:-50px;width:200px;height:200px;border-radius:50%;background:radial-gradient(circle,#fff6c9,#ffd166 60%,rgba(255,209,102,0));filter:blur(1px)}
.xp-ss article{position:relative;z-index:1;width:min(360px,100%);padding:22px;border:1px solid rgba(63,111,78,.35);border-radius:16px;background:rgba(255,255,255,.62);backdrop-filter:blur(6px);color:#20402c}
.xp-ss span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#3f6f4e}
.xp-ss h2{margin-top:8px;font-size:24px;font-weight:400}
.xp-ss-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}
.xp-ss-grid b{display:block;font-size:24px;font-weight:400}
.xp-ss-grid span{display:block;margin-top:2px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:8px;color:#5b7764}
.xp-ss>article>i{display:block;height:6px;margin-top:16px;border-radius:99px;background:linear-gradient(90deg,#3f6f4e 0 78%,rgba(63,111,78,.15) 78%)}
.xp-ss p{margin-top:10px;font-family:ui-sans-serif,system-ui,sans-serif;font-size:9px;color:#5b7764}`,
  js: ``
},
{
  id: "gauge-steampunk", name: "蒸汽朋克仪表", cat: "data",
  desc: "黄铜表盘、铆钉与指针的 Steampunk 压力仪表。",
  tags: ["数据", "蒸汽朋克", "黄铜", "仪表"],
  prompt: "做一个蒸汽朋克压力仪表：深棕背景，圆形黄铜表盘有铆钉、刻度与红色指针，指针指向 0.07 BAR；下方是黄铜铭牌和一行状态文字。整体厚重、机械、维多利亚时代，移动端缩小表盘。",
  html: `<div class="xp-sg"><div class="xp-sg-gauge"><i></i><b>0.07</b><span>BAR</span></div><div class="xp-sg-plate"><span>LOW OXYGEN / PRESSURE</span><b>STABLE</b></div></div>`,
  css: `.xp-sg{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;background:radial-gradient(500px 400px at 50% 20%,rgba(200,169,106,.14),transparent 60%),#241a12;font-family:Georgia,"Songti SC",serif}
.xp-sg-gauge{position:relative;display:grid;place-items:center;width:180px;height:180px;border:8px solid #8a6a3a;border-radius:50%;background:radial-gradient(circle,#e4d2a8,#c8a96a 70%,#8a6a3a);box-shadow:inset 0 0 0 3px #241a12,0 10px 24px rgba(0,0,0,.4)}
.xp-sg-gauge::before{content:"";position:absolute;inset:14px;border:2px solid #3a2a1c;border-radius:50%;background:repeating-conic-gradient(from -120deg,#3a2a1c 0 1deg,transparent 1deg 15deg);opacity:.5}
.xp-sg-gauge i{position:absolute;left:50%;bottom:50%;width:2px;height:58px;background:#d23b2e;transform-origin:bottom center;transform:rotate(38deg)}
.xp-sg-gauge i::after{content:"";position:absolute;left:-5px;bottom:-5px;width:12px;height:12px;border-radius:50%;background:#3a2a1c}
.xp-sg-gauge b{position:relative;z-index:1;margin-top:34px;font-size:26px;color:#3a2a1c}
.xp-sg-gauge span{position:relative;z-index:1;margin-top:-4px;font-family:ui-monospace,Consolas,monospace;font-size:7px;color:#3a2a1c}
.xp-sg-plate{width:min(260px,80vw);padding:10px 14px;border:2px solid #8a6a3a;background:linear-gradient(180deg,#3a2a1c,#2a1e14);box-shadow:inset 0 0 0 2px #241a12;text-align:center}
.xp-sg-plate span{display:block;font-family:ui-monospace,Consolas,monospace;font-size:7px;letter-spacing:.14em;color:#8a6a3a}
.xp-sg-plate b{display:block;margin-top:4px;font-size:16px;color:#e4d2a8}`,
  js: ``
},
{
  id: "nav-deconstructivism", name: "解构导航", cat: "nav",
  desc: "断裂斜切、错位链接与红黑构图的 Deconstructivism 导航。",
  tags: ["导航", "解构主义", "斜切", "断裂"],
  prompt: "做一个解构主义导航：米白背景，黑色粗线，四个导航链接分别放在不同角度的斜切面板上，互相穿插；品牌被拆成两块，右侧一块红色斜块。整体像被拆开的建筑平面，移动端取消斜切。",
  html: `<nav class="xp-nd"><div class="xp-nd-brand"><span>DE</span><span>CON</span></div><div class="xp-nd-links"><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">团队</a></div><div class="xp-nd-red"></div></nav>`,
  css: `.xp-nd{position:relative;min-height:100vh;overflow:hidden;padding:30px 40px;background:#f0ede6;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.xp-nd-brand{position:relative;z-index:2;display:flex;gap:4px;font-family:Impact,"Arial Black",sans-serif;font-size:46px}
.xp-nd-brand span{padding:2px 8px;background:#111;color:#f0ede6;transform:rotate(-4deg)}
.xp-nd-brand span:nth-child(2){background:#d23b2e;transform:rotate(3deg);clip-path:polygon(8% 0,100% 8%,92% 100%,0 92%)}
.xp-nd-links{position:relative;z-index:2;display:flex;flex-wrap:wrap;gap:8px;margin-top:24px}
.xp-nd-links a{padding:12px 18px;border:2px solid #111;background:#fff;font-size:12px;color:#111;text-decoration:none;transform:rotate(-2deg)}
.xp-nd-links a:nth-child(2){transform:rotate(2deg);background:#111;color:#f0ede6}
.xp-nd-links a:nth-child(3){transform:rotate(-1deg);background:#d23b2e;color:#fff}
.xp-nd-links a:nth-child(4){transform:rotate(3deg)}
.xp-nd-red{position:absolute;right:-10%;top:-20%;width:45%;height:120%;background:#d23b2e;transform:rotate(18deg);opacity:.25}
@media (max-width:640px){.xp-nd{padding:24px}.xp-nd-links a{transform:none!important}}`,
  js: ``
},
{
  id: "toast-popart", name: "波普提示", cat: "notifications",
  desc: "半调网点、粗描边与漫画气泡的 Pop Art 提示。",
  tags: ["通知", "波普", "漫画", "半调"],
  prompt: "做一个波普艺术提示：亮黄背景，一个白底黑边的漫画气泡写“SAVED!”，气泡带尖角和红色投影，周围有半调网点和星形装饰；下方一行小字说明。整体像漫画分格，移动端缩小气泡。",
  html: `<div class="xp-tp"><div class="xp-tp-bubble">SAVED!<i></i></div><p>批次 07 已保存到本地记录。</p></div>`,
  css: `.xp-tp{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;background:#ffd23f;overflow:hidden;font-family:"Arial Black","Helvetica Neue",Arial,sans-serif}
.xp-tp::before{content:"";position:absolute;inset:0;opacity:.28;background-image:radial-gradient(#e63946 1.5px,transparent 1.5px);background-size:12px 12px}
.xp-tp-bubble{position:relative;z-index:1;padding:26px 38px;border:4px solid #111;border-radius:50%;background:#fff;font-size:44px;letter-spacing:-.04em;box-shadow:8px 8px 0 #e63946;transform:rotate(-4deg)}
.xp-tp-bubble i{position:absolute;left:26px;bottom:-24px;border:14px solid transparent;border-top-color:#111;transform:rotate(-16deg)}
.xp-tp p{position:relative;z-index:1;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:12px;font-weight:600}`,
  js: ``
},
{
  id: "card-vhs", name: "VHS 视频卡", cat: "media",
  desc: "时间码、跟踪线与播放按钮的 VHS 视频卡。",
  tags: ["媒体", "VHS", "视频", "时间码"],
  prompt: "做一个 VHS 视频卡：深蓝黑背景，视频缩略图有扫描线、色差和时间码，中央有播放三角；下方是标题、时长和手写编号，右上角是 REC 红点。整体像旧录像带封面，移动端缩窄。",
  html: `<div class="xp-vc"><article><div class="xp-vc-media"><img src="assets/img/plugins/carousel-02.jpg" alt="视频" loading="lazy"><span>▶</span><b>00:12:34</b><i>REC</i></div><div><span>TAPE / 07</span><h2>低氧实验记录</h2><small>未剪辑 · 1998</small></div></article></div>`,
  css: `.xp-vc{min-height:100vh;display:grid;place-items:center;padding:40px;background:#0a0c1a;font-family:ui-monospace,Consolas,"Courier New",monospace;color:#e8f4ff}
.xp-vc article{width:min(340px,100%);padding:10px;border:1px solid rgba(232,244,255,.22);background:rgba(10,20,40,.8)}
.xp-vc-media{position:relative;overflow:hidden}
.xp-vc-media img{width:100%;height:190px;object-fit:cover;filter:saturate(.6) contrast(1.15) sepia(.1)}
.xp-vc-media::after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(180deg,rgba(255,255,255,.06) 0 1px,transparent 1px 3px)}
.xp-vc-media span{position:absolute;left:50%;top:50%;z-index:1;display:grid;place-items:center;width:44px;height:44px;margin:-22px 0 0 -22px;border:1px solid #fff;border-radius:50%;background:rgba(10,12,26,.55);font-size:14px;color:#fff}
.xp-vc-media b{position:absolute;right:8px;bottom:8px;z-index:1;font-size:8px;color:#7ee0dd}
.xp-vc-media i{position:absolute;left:8px;top:8px;z-index:1;font-size:8px;font-style:normal;color:#ff5f57}
.xp-vc article>div:last-child{padding:12px 6px 6px}
.xp-vc span{font-size:8px;color:#ff2bd6}
.xp-vc h2{margin-top:6px;font-size:15px;color:#e8f4ff}
.xp-vc small{display:block;margin-top:5px;font-size:7px;color:#8fb7c9}`,
  js: ``
},
{
  id: "loader-psychedelic", name: "迷幻加载", cat: "feedback",
  desc: "旋转色场、波浪圆环与扭曲文字的 Psychedelic 加载。",
  tags: ["加载", "迷幻", "旋涡", "高饱和"],
  prompt: "做一个迷幻加载状态：高饱和 conic 色场缓慢旋转，中央是一个波浪边框圆环，里面写“LOADING”，文字有彩色阴影；背景有重复放射纹理。整体像 60 年代迷幻海报，移动端降低动画速度。",
  html: `<div class="xp-pl"><div class="xp-pl-ring"><span>LOADING</span></div><p>EXPANDING THE SIGNAL</p></div>`,
  css: `.xp-pl{position:relative;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px;background:conic-gradient(from 40deg,#ff5d8f,#ffd23f,#7ee0dd,#6c5ce7,#ff5d8f);overflow:hidden;font-family:"Arial Rounded MT Bold","Helvetica Neue",Arial,sans-serif}
.xp-pl::before{content:"";position:absolute;inset:-20%;background:repeating-conic-gradient(from 0deg at 50% 50%,rgba(255,255,255,.18) 0deg 8deg,transparent 8deg 16deg);animation:xp-pl-spin 28s linear infinite}
.xp-pl-ring{position:relative;z-index:1;display:grid;place-items:center;width:180px;height:180px;border:3px solid #1a0b2e;border-radius:42% 58% 55% 45% / 45% 42% 58% 55%;background:rgba(255,255,255,.82);animation:xp-pl-morph 6s ease-in-out infinite}
.xp-pl-ring span{font-size:22px;color:#1a0b2e;text-shadow:3px 3px 0 #ff5d8f,-3px -3px 0 #7ee0dd}
.xp-pl p{position:relative;z-index:1;font-family:ui-monospace,Consolas,monospace;font-size:9px;letter-spacing:.18em;color:#1a0b2e}
@keyframes xp-pl-spin{to{transform:rotate(360deg)}}
@keyframes xp-pl-morph{50%{border-radius:58% 42% 45% 55% / 55% 58% 42% 45%}}`,
  js: ``
},
{
  id: "toast-dopamine", name: "多巴胺提示", cat: "notifications",
  desc: "亮色胶囊、弹跳图形与高饱和按钮的 Dopamine 提示。",
  tags: ["通知", "多巴胺", "高饱和", "弹跳"],
  prompt: "做一个多巴胺风格提示：奶油底，一个亮粉色胶囊提示条，左侧是黄色圆形对勾，右侧是黑色关闭按钮；周围有蓝色和橙色的小几何块，提示条轻微弹跳。整体轻快、明亮，移动端缩窄。",
  html: `<div class="xp-td"><div class="xp-td-toast"><i></i><div><b>已保存</b><span>批次 07 记录同步完成</span></div><button type="button" aria-label="关闭">×</button></div><em></em><em></em></div>`,
  css: `.xp-td{position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#fffaf0;overflow:hidden;font-family:"Arial Rounded MT Bold","Helvetica Neue",Arial,sans-serif}
.xp-td-toast{position:relative;z-index:1;display:flex;align-items:center;gap:12px;width:min(360px,calc(100vw - 40px));padding:14px 16px;border:3px solid #1b1b1b;border-radius:999px;background:#ff8fb1;box-shadow:5px 5px 0 #1b1b1b;animation:xp-td-bounce 2.4s ease-in-out infinite}
.xp-td-toast i{display:grid;place-items:center;width:34px;height:34px;border:3px solid #1b1b1b;border-radius:50%;background:#ffd23f}
.xp-td-toast i::after{content:"✓";font-size:16px}
.xp-td-toast div{flex:1}
.xp-td-toast b{display:block;font-size:12px}
.xp-td-toast span{display:block;font-family:ui-sans-serif,system-ui,"PingFang SC",sans-serif;font-size:9px;font-weight:400}
.xp-td-toast button{width:26px;height:26px;border:2px solid #1b1b1b;border-radius:50%;background:#fff;font-size:14px;line-height:1;cursor:pointer}
.xp-td em{position:absolute;border:3px solid #1b1b1b}
.xp-td em:first-of-type{left:14%;top:26%;width:40px;height:40px;border-radius:50%;background:#7ee0dd}
.xp-td em:last-of-type{right:16%;bottom:24%;width:30px;height:30px;background:#ffd23f;transform:rotate(18deg)}
@keyframes xp-td-bounce{50%{transform:translateY(-6px)}}`,
  js: ``
},
{
  id: "form-artdeco", name: "装饰艺术表单", cat: "forms",
  desc: "深蓝、金色细线与对称构图的 Art Deco 表单。",
  tags: ["表单", "装饰艺术", "金色", "对称"],
  prompt: "做一个装饰艺术表单：深海军蓝背景，金色细线画出对称边框与扇形装饰，标题用衬线大写；三个输入框是透明底、金色下划线，按钮是金色描边。整体像 1920 年代酒店登记卡，移动端缩窄。",
  html: `<form class="xp-fd"><div class="xp-fd-fan"></div><span>MEMBERSHIP / 1926</span><h2>REQUEST<br>AN INVITATION</h2><label>NAME<input type="text"></label><label>EMAIL<input type="email"></label><label>MESSAGE<textarea></textarea></label><button type="button">SUBMIT</button></form>`,
  css: `.xp-fd{position:relative;width:min(400px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(200,169,106,.6);background:#0a1628;color:#d9c08a;font-family:Georgia,"Songti SC",serif;box-shadow:0 24px 50px rgba(0,0,0,.35)}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#0a1628}
.xp-fd-fan{position:absolute;left:50%;top:0;width:220px;height:90px;margin-left:-110px;opacity:.35;background:repeating-conic-gradient(from 270deg at 50% 100%,#c8a96a 0 1deg,transparent 1deg 9deg);mask-image:radial-gradient(ellipse at 50% 100%,#000 0 60%,transparent 61%)}
.xp-fd>span{position:relative;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.2em;color:#a88f5c}
.xp-fd h2{position:relative;margin-top:8px;font-size:28px;line-height:1.1;font-weight:400;letter-spacing:.04em}
.xp-fd label{display:block;margin-top:14px;font-size:8px;letter-spacing:.12em;color:#a88f5c}
.xp-fd input,.xp-fd textarea{display:block;width:100%;margin-top:4px;padding:7px 0;border:0;border-bottom:1px solid rgba(200,169,106,.45);background:transparent;font-family:Georgia,serif;font-size:11px;color:#e4d2a8;outline:none}
.xp-fd textarea{min-height:52px;resize:vertical}
.xp-fd button{width:100%;min-height:38px;margin-top:18px;border:1px solid #c8a96a;background:transparent;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#c8a96a;cursor:pointer}
.xp-fd button:hover{background:#c8a96a;color:#0a1628}`,
  js: ``
},
{
  id: "nav-constructivism", name: "构成主义导航", cat: "nav",
  desc: "红黑斜块、巨型字与对角线构图的 Constructivism 导航。",
  tags: ["导航", "构成主义", "红黑", "斜向"],
  prompt: "做一个构成主义导航：米白背景，红色斜块从右上切入，黑色巨型品牌字沿对角线排列；四个导航链接分别放在黑、红、白斜切面板上，整体像一张政治海报。移动端取消斜切。",
  html: `<nav class="xp-nc"><div class="xp-nc-red"></div><b>BUILD</b><div class="xp-nc-links"><a href="#">项目</a><a href="#">工程</a><a href="#">结果</a><a href="#">联系</a></div></nav>`,
  css: `.xp-nc{position:relative;min-height:100vh;overflow:hidden;padding:30px 40px;background:#f2ede3;font-family:Impact,"Arial Black",sans-serif;color:#111}
.xp-nc-red{position:absolute;right:-15%;top:-15%;width:60%;height:130%;background:#d23b2e;transform:rotate(18deg)}
.xp-nc>b{position:relative;z-index:1;display:block;font-size:clamp(4rem,10vw,8rem);line-height:.82;letter-spacing:-.05em;transform:rotate(-2deg)}
.xp-nc-links{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:6px;margin-top:26px;transform:rotate(-2deg)}
.xp-nc-links a{padding:10px 16px;border:2px solid #111;background:#fff;font-family:ui-monospace,Consolas,monospace;font-size:10px;color:#111;text-decoration:none}
.xp-nc-links a:nth-child(2){background:#111;color:#f2ede3}
.xp-nc-links a:nth-child(3){background:#d23b2e;color:#fff}
@media (max-width:640px){.xp-nc{padding:24px}.xp-nc-links{transform:none}}`,
  js: ``
},
{
  id: "form-darkacademia", name: "暗黑学院表单", cat: "forms",
  desc: "深棕、米色衬线、细金线与图书馆气质的表单。",
  tags: ["表单", "暗黑学院", "衬线", "图书馆"],
  prompt: "做一个暗黑学院风格表单：深棕背景，米色衬线文字，细金线边框；标题像书页章节，三个输入框是透明底、米色下划线，按钮是米色描边。角落有页码与一句拉丁文小字，整体像旧图书馆的登记卡。",
  html: `<form class="xp-fa2"><span>FORM / NO. 07</span><h2>Request a reading</h2><label>Name<input type="text"></label><label>Email<input type="email"></label><label>Message<textarea></textarea></label><button type="button">SUBMIT</button><footer>MMXXVI · EX LIBRIS</footer></form>`,
  css: `.xp-fa2{position:relative;width:min(400px,calc(100vw - 40px));margin:auto;padding:26px;border:1px solid rgba(200,169,106,.35);background:#1c1510;color:#d9c8a8;font-family:Georgia,"Songti SC",serif}
body{display:grid;place-items:center;min-height:100vh;padding:40px;background:#1c1510}
.xp-fa2>span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#a88f5c}
.xp-fa2 h2{margin-top:8px;font-size:26px;font-weight:400;letter-spacing:.02em}
.xp-fa2 label{display:block;margin-top:14px;font-size:8px;letter-spacing:.1em;color:#a88f5c}
.xp-fa2 input,.xp-fa2 textarea{display:block;width:100%;margin-top:4px;padding:7px 0;border:0;border-bottom:1px solid rgba(200,169,106,.35);background:transparent;font-family:Georgia,serif;font-size:11px;color:#e4d2a8;outline:none}
.xp-fa2 textarea{min-height:52px;resize:vertical}
.xp-fa2 button{width:100%;min-height:36px;margin-top:16px;border:1px solid #c8a96a;background:transparent;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.14em;color:#c8a96a;cursor:pointer}
.xp-fa2 button:hover{background:#c8a96a;color:#1c1510}
.xp-fa2 footer{margin-top:14px;padding-top:8px;border-top:1px solid rgba(200,169,106,.22);font-family:ui-monospace,Consolas,monospace;font-size:7px;letter-spacing:.14em;color:#8c7648;text-align:center}`,
  js: ``
}
);
