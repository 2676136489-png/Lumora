/* 主义 × 组件矩阵 4：为故障、合成波、脏渍、蒸汽朋克、波普、迷幻、多巴胺补齐第二个不同类别组件 */
window.PLUGINS.push(
{
  id: "social-glitch", name: "故障分享栏", cat: "social",
  desc: "RGB 分离标题、扫描线与错位按钮的故障艺术分享栏。",
  tags: ["社交", "故障艺术", "RGB 分离", "扫描线"],
  prompt: "做一个故障艺术风格分享栏：近黑底，标题用青色与品红错位重影，三条分享按钮横向排列，按钮边框带扫描线，鼠标悬停时文字短促抖动并出现 RGB 位移；底部一行小字。整体克制，只让错位与扫描线成为主要视觉，移动端纵向排列。",
  html: `<div class="xp-sg"><header><span>SHARE / 07</span><b data-text="SEND IT">SEND IT</b></header><div class="xp-sg-links"><button type="button"><i>01</i><span>复制链接</span><em>COPY</em></button><button type="button"><i>02</i><span>分享到微博</span><em>WEIBO</em></button><button type="button"><i>03</i><span>发送邮件</span><em>MAIL</em></button></div><p>信号可能失真，内容不会。</p></div>`,
  css: `body{margin:0;background:#08080b}
.xp-sg{position:relative;width:min(430px,calc(100vw - 40px));min-height:100vh;margin:auto;display:flex;flex-direction:column;justify-content:center;gap:22px;padding:40px 0;color:#e8e8ee;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.xp-sg::after{content:"";position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.035) 0 1px,transparent 1px 4px)}
.xp-sg header{display:flex;align-items:flex-end;justify-content:space-between;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,.16)}
.xp-sg header span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#5f5f70}
.xp-sg header b{position:relative;font-size:34px;line-height:.9;letter-spacing:-.05em}
.xp-sg header b::before,.xp-sg header b::after{content:attr(data-text);position:absolute;inset:0}
.xp-sg header b::before{color:#00e5ff;transform:translate(-2px,-1px);mix-blend-mode:screen;animation:xp-sg-shift 3.4s steps(2) infinite}
.xp-sg header b::after{color:#ff2bd6;transform:translate(2px,1px);mix-blend-mode:screen;animation:xp-sg-shift 2.8s steps(2) infinite reverse}
.xp-sg-links{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.xp-sg-links button{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:14px 12px;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.03);color:#e8e8ee;text-align:left;cursor:pointer;transition:border-color .18s,transform .18s,background .18s}
.xp-sg-links button:hover{border-color:#00e5ff;background:rgba(0,229,255,.06);transform:translateX(2px)}
.xp-sg-links button:hover span{text-shadow:-1.5px 0 #ff2bd6,1.5px 0 #00e5ff}
.xp-sg-links i{font-family:ui-monospace,Consolas,monospace;font-size:8px;font-style:normal;color:#00e5ff}
.xp-sg-links span{font-size:12px;font-weight:700;line-height:1.3}
.xp-sg-links em{font-family:ui-monospace,Consolas,monospace;font-size:7px;font-style:normal;letter-spacing:.14em;color:#77778a}
.xp-sg p{margin:0;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.08em;color:#5f5f70}
@keyframes xp-sg-shift{0%,90%,100%{transform:translate(-2px,-1px)}92%{transform:translate(-6px,1px)}94%{transform:translate(2px,-2px)}96%{transform:translate(-1px,2px)}}
@media (max-width:420px){.xp-sg-links{grid-template-columns:1fr}.xp-sg header b{font-size:28px}}
@media (prefers-reduced-motion:reduce){.xp-sg header b::before,.xp-sg header b::after{animation:none}}`,
  js: ``
},
{
  id: "btn-synthwave", name: "合成波按钮", cat: "buttons",
  desc: "霓虹落日、透视网格与发光按钮的合成波操作区。",
  tags: ["按钮", "合成波", "霓虹", "80年代"],
  prompt: "做一个合成波风格按钮区：深紫夜空，下方是透视霓虹网格，中间一轮橙粉渐变落日；按钮为粉青渐变、大写宽字距、带外发光，悬停时上浮并增强辉光。只保留一个按钮和一个编号说明，移动端缩小落日与网格。",
  html: `<div class="xp-bs"><div class="xp-bs-sun"></div><div class="xp-bs-grid"></div><div class="xp-bs-cta"><span>NIGHT DRIVE / 1986</span><button type="button">开始运行</button><em>INSERT COIN</em></div></div>`,
  css: `body{margin:0;background:#0a0518}
.xp-bs{position:relative;min-height:100vh;display:grid;place-items:center;overflow:hidden;background:linear-gradient(180deg,#0a0518 0%,#1a0b33 52%,#2a0a3a 100%);font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif}
.xp-bs-sun{position:absolute;top:22%;width:clamp(120px,30vw,180px);aspect-ratio:1;border-radius:50%;background:linear-gradient(180deg,#ffd166 0%,#ff8a3d 46%,#ff2bd6 100%);box-shadow:0 0 70px rgba(255,43,214,.45)}
.xp-bs-sun::after{content:"";position:absolute;inset:0;border-radius:50%;background:repeating-linear-gradient(180deg,transparent 0 8px,rgba(10,5,24,.85) 8px 11px)}
.xp-bs-grid{position:absolute;left:-20%;right:-20%;bottom:0;height:46%;background:repeating-linear-gradient(90deg,transparent 0 44px,rgba(0,229,255,.22) 44px 45px),repeating-linear-gradient(0deg,transparent 0 30px,rgba(0,229,255,.18) 30px 31px);transform:perspective(220px) rotateX(58deg);transform-origin:bottom;mask-image:linear-gradient(180deg,transparent,#000 38%)}
.xp-bs-cta{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:140px}
.xp-bs-cta span,.xp-bs-cta em{font-family:ui-monospace,Consolas,monospace;font-size:8px;font-style:normal;letter-spacing:.24em;color:rgba(255,255,255,.55)}
.xp-bs-cta button{min-height:48px;padding:0 34px;border:1px solid rgba(255,255,255,.6);background:linear-gradient(100deg,#ff2bd6,#7a5cff 52%,#00e5ff);box-shadow:0 0 0 1px rgba(255,43,214,.25),0 12px 40px rgba(122,92,255,.45);color:#fff;font-size:13px;font-weight:800;letter-spacing:.24em;text-transform:uppercase;cursor:pointer;transition:transform .2s,box-shadow .2s,filter .2s}
.xp-bs-cta button:hover{transform:translateY(-3px);filter:brightness(1.12);box-shadow:0 0 0 1px rgba(0,229,255,.4),0 18px 52px rgba(255,43,214,.55)}
.xp-bs-cta button:active{transform:translateY(0)}
@media (max-width:520px){.xp-bs-cta{margin-top:110px}.xp-bs-grid{height:40%}}`,
  js: ``
},
{
  id: "card-grunge", name: "脏渍照片卡", cat: "cards",
  desc: "胶带、撕边与污渍叠加的 Grunge 照片卡。",
  tags: ["卡片", "脏渍风", "旧纸", "做旧"],
  prompt: "做一张脏渍风照片卡：米灰旧纸背景，卡片略微倾斜，顶部贴一条半透明胶带，照片去饱和并带颗粒感，标题用打字机字体，标题旁有一块红色印章，底部是手写批注。整体像从旧档案里抽出的照片，移动端缩小倾角。",
  html: `<article class="xp-cg"><span class="xp-cg-tape"></span><span class="xp-cg-stamp">ARCHIVE 07</span><figure><img src="assets/img/plugins/gallery-01.jpg" alt="旧档案照片"></figure><h2>雨停之前</h2><p>照片会褪色，记录不会。</p><footer>胶片 / 扫描 / 未修版</footer></article>`,
  css: `body{margin:0;background:#d6d0c2}
.xp-cg{position:relative;width:min(320px,calc(100vw - 64px));margin:8vh auto;padding:18px 18px 20px;background:#f2ede1;box-shadow:0 16px 40px rgba(42,36,26,.28),0 2px 0 rgba(255,255,255,.6) inset;transform:rotate(-2.2deg);font-family:"Courier New","Songti SC",monospace;color:#2b2721}
.xp-cg::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at 16% 18%,rgba(92,74,42,.16),transparent 38%),radial-gradient(circle at 86% 76%,rgba(92,74,42,.12),transparent 34%),radial-gradient(circle at 52% 4%,rgba(255,255,255,.5),transparent 30%);mix-blend-mode:multiply}
.xp-cg-tape{position:absolute;left:50%;top:-13px;width:104px;height:26px;background:rgba(219,205,160,.72);border-left:1px dashed rgba(120,100,60,.35);border-right:1px dashed rgba(120,100,60,.35);transform:translateX(-50%) rotate(1.4deg);box-shadow:0 2px 6px rgba(0,0,0,.08)}
.xp-cg-stamp{position:absolute;right:14px;top:58%;padding:3px 7px;border:2px solid rgba(176,52,38,.65);color:rgba(176,52,38,.8);font-size:8px;letter-spacing:.14em;transform:rotate(-8deg);opacity:.9}
.xp-cg figure{margin:0;padding:9px 9px 26px;background:#fbf8f0;box-shadow:0 4px 14px rgba(43,39,33,.18);transform:rotate(1.4deg)}
.xp-cg img{display:block;width:100%;height:210px;object-fit:cover;filter:grayscale(.75) sepia(.28) contrast(1.12) brightness(.96)}
.xp-cg h2{margin:16px 0 0;font-size:22px;font-weight:400;letter-spacing:.02em}
.xp-cg p{margin:6px 0 0;font-family:Georgia,"Songti SC",serif;font-size:11px;line-height:1.7;color:#5b5347}
.xp-cg footer{margin-top:14px;padding-top:8px;border-top:1px dashed rgba(43,39,33,.3);font-size:8px;letter-spacing:.08em;color:#7a7062}`,
  js: ``
},
{
  id: "btn-steampunk", name: "蒸汽朋克按钮", cat: "buttons",
  desc: "黄铜铆钉、齿轮与压力阀质感的 Steampunk 按钮。",
  tags: ["按钮", "蒸汽朋克", "黄铜", "齿轮"],
  prompt: "做一个蒸汽朋克风格按钮：深褐金属底，中央是带铆钉的黄铜面板，左侧一枚缓慢转动的齿轮，右侧是衬线标题与压力值小字；悬停时面板下压、齿轮加速、辉光变暖。整体像工业时代的机械开关，移动端保持单行。",
  html: `<div class="xp-bst"><button type="button"><span class="xp-bst-gear"></span><span class="xp-bst-label"><b>启动压力阀</b><em>PRESSURE / 07</em></span><span class="xp-bst-arrow">→</span></button><p>黄铜 · 蒸汽 · 机械</p></div>`,
  css: `body{margin:0;background:#1d1710}
.xp-bst{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:radial-gradient(circle at 50% 40%,#382a18,#150f09 72%);font-family:Georgia,"Songti SC",serif}
.xp-bst button{position:relative;display:flex;align-items:center;gap:14px;min-height:64px;padding:12px 22px 12px 16px;border:2px solid #caa25a;border-radius:8px;background:linear-gradient(180deg,#7d5f31,#4a351a 55%,#382612);box-shadow:inset 0 1px 0 rgba(255,235,190,.5),inset 0 -8px 18px rgba(0,0,0,.35),0 14px 32px rgba(0,0,0,.45),0 0 0 4px rgba(202,162,90,.12);color:#f4e3bf;cursor:pointer;transition:transform .16s,box-shadow .16s}
.xp-bst button::before,.xp-bst button::after{content:"";position:absolute;top:7px;bottom:7px;width:6px;background:radial-gradient(circle,#f0d79f 0 2px,#6a4c22 2px 3.6px,transparent 3.6px) 0 0/6px 12px repeat-y;opacity:.85}
.xp-bst button::before{left:5px}
.xp-bst button::after{right:5px}
.xp-bst button:hover{transform:translateY(2px);box-shadow:inset 0 3px 10px rgba(0,0,0,.4),0 8px 20px rgba(0,0,0,.45),0 0 26px rgba(226,166,74,.28),0 0 0 4px rgba(202,162,90,.18)}
.xp-bst button:hover .xp-bst-gear{animation-duration:2.4s}
.xp-bst-gear{position:relative;display:block;width:34px;height:34px;border-radius:50%;background:repeating-conic-gradient(#d8b36a 0 14deg,#7a5a2c 14deg 28deg);box-shadow:inset 0 0 0 6px #4a351a,inset 0 0 0 8px #b98f4a;animation:xp-bst-spin 9s linear infinite}
.xp-bst-gear::after{content:"";position:absolute;inset:12px;border-radius:50%;background:#2b1d0f;box-shadow:inset 0 0 0 2px #caa25a}
.xp-bst-label{display:flex;flex-direction:column;align-items:flex-start;gap:3px}
.xp-bst-label b{font-size:16px;font-weight:400;letter-spacing:.16em}
.xp-bst-label em{font-family:ui-monospace,Consolas,monospace;font-size:7px;font-style:normal;letter-spacing:.24em;color:#b99a63}
.xp-bst-arrow{font-family:ui-monospace,Consolas,monospace;font-size:16px;color:#e2b96f}
.xp-bst>p{margin:0;font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.3em;color:#8a7247}
@keyframes xp-bst-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.xp-bst-gear{animation:none}}`,
  js: ``
},
{
  id: "card-popart", name: "波普爆炸卡", cat: "cards",
  desc: "半调网点、漫画爆炸框与粗描边的 Pop Art 卡片。",
  tags: ["卡片", "波普", "漫画", "半调"],
  prompt: "做一张波普艺术漫画卡：亮黄底铺半调网点，黑色粗边框，中央是红黄放射爆炸形，里面放粗体拟声词；下方是白底对白框和一行小字，右下角有蓝黑色编号。只用红黄蓝黑，像 60 年代漫画封面，移动端缩小爆炸框。",
  html: `<article class="xp-cp"><div class="xp-cp-burst"><span>BAM!</span></div><div class="xp-cp-copy"><h2>新批次已就绪</h2><p>8 个重复，全部通过。</p></div><footer><b>07</b><span>ISSUE / LUMEN</span></footer></article>`,
  css: `body{margin:0;display:grid;place-items:center;min-height:100vh;padding:40px;background:#ffd84d}
.xp-cp{position:relative;width:min(330px,100%);padding:18px;border:5px solid #111;background:#fff9e8;box-shadow:10px 10px 0 #111;font-family:"Arial Black","Helvetica Neue",Arial,"PingFang SC",sans-serif;overflow:hidden}
.xp-cp::before{content:"";position:absolute;inset:0;background:radial-gradient(#111 1.1px,transparent 1.3px) 0 0/13px 13px;opacity:.18;pointer-events:none}
.xp-cp-burst{position:relative;display:grid;place-items:center;height:190px;margin:2px 0 14px;background:#e8352c;clip-path:polygon(50% 0%,61% 20%,82% 12%,78% 33%,98% 40%,80% 54%,92% 74%,68% 71%,64% 94%,48% 76%,30% 92%,28% 68%,6% 70%,18% 50%,2% 38%,24% 32%,20% 10%,40% 22%)}
.xp-cp-burst::after{content:"";position:absolute;inset:16%;background:#ffd84d;clip-path:polygon(50% 0%,61% 20%,82% 12%,78% 33%,98% 40%,80% 54%,92% 74%,68% 71%,64% 94%,48% 76%,30% 92%,28% 68%,6% 70%,18% 50%,2% 38%,24% 32%,20% 10%,40% 22%)}
.xp-cp-burst span{position:relative;z-index:1;font-size:44px;letter-spacing:-.03em;color:#1e4fa3;text-shadow:3px 3px 0 #fff,6px 6px 0 #111;transform:rotate(-7deg)}
.xp-cp-copy{position:relative;padding:12px 14px;border:3px solid #111;background:#fff;transform:rotate(1.2deg)}
.xp-cp-copy::after{content:"";position:absolute;left:28px;bottom:-14px;width:0;height:0;border-left:12px solid transparent;border-right:12px solid transparent;border-top:14px solid #111}
.xp-cp-copy h2{margin:0;font-size:19px;letter-spacing:-.02em;color:#111}
.xp-cp-copy p{margin:5px 0 0;font-family:"Courier New",monospace;font-size:10px;color:#333}
.xp-cp footer{position:relative;display:flex;align-items:center;justify-content:space-between;margin-top:18px}
.xp-cp footer b{font-size:26px;color:#e8352c}
.xp-cp footer span{font-family:ui-monospace,Consolas,monospace;font-size:7px;letter-spacing:.18em;color:#1e4fa3}`,
  js: ``
},
{
  id: "card-psychedelic", name: "迷幻漩涡卡", cat: "cards",
  desc: "同心色环、缓慢旋转与波浪标题的 Psychedelic 卡片。",
  tags: ["卡片", "迷幻", "旋涡", "高饱和"],
  prompt: "做一张迷幻风格卡片：深紫底上有一组缓慢旋转的同心色环，从橙黄到青绿再到紫，环中心压一个圆形标题区；卡片下方是白色波浪排版标题和两行小字。颜色高饱和但文字保持清晰，移动端降低环密度。",
  html: `<article class="xp-cp2"><div class="xp-cp2-swirl"></div><div class="xp-cp2-center"><span>07</span><b>SEE<br>BEYOND</b></div><h2>颜色在转，<br>证据不动。</h2><p>一张卡片，一种眩晕。</p></article>`,
  css: `body{margin:0;display:grid;place-items:center;min-height:100vh;padding:40px;background:#120b1e}
.xp-cp2{position:relative;width:min(340px,100%);padding:18px 18px 22px;border-radius:26px;overflow:hidden;background:#170d28;color:#fff;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;box-shadow:0 30px 70px rgba(0,0,0,.55)}
.xp-cp2::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(23,13,40,0) 46%,rgba(23,13,40,.92) 74%,#170d28 100%);pointer-events:none}
.xp-cp2-swirl{position:relative;height:250px;border-radius:18px;overflow:hidden;background:repeating-radial-gradient(circle at 50% 46%,#ff7a00 0 16px,#ffd23f 16px 32px,#33d6a6 32px 48px,#2b6cff 48px 64px,#a03cff 64px 80px);animation:xp-cp2-spin 28s linear infinite}
.xp-cp2-swirl::before{content:"";position:absolute;inset:0;background:conic-gradient(from 20deg,transparent 0 40%,rgba(255,255,255,.32) 50%,transparent 60% 100%);mix-blend-mode:overlay}
.xp-cp2-center{position:absolute;left:50%;top:143px;z-index:2;display:grid;place-items:center;width:118px;height:118px;border-radius:50%;background:#120b1e;box-shadow:0 0 0 5px rgba(255,255,255,.16),0 0 40px rgba(0,0,0,.6);transform:translate(-50%,-50%);text-align:center}
.xp-cp2-center span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.2em;color:#ffd23f}
.xp-cp2-center b{font-size:17px;line-height:.95;letter-spacing:.02em;background:linear-gradient(90deg,#ffd23f,#33d6a6,#a03cff);-webkit-background-clip:text;background-clip:text;color:transparent}
.xp-cp2 h2{position:relative;z-index:2;margin:18px 0 0;font-size:24px;line-height:1.15;font-weight:700;letter-spacing:-.01em;transform:skewY(-2deg);text-shadow:-2px 0 #ff2bd6,2px 0 #00e5ff}
.xp-cp2 p{position:relative;z-index:2;margin:10px 0 0;font-size:10px;letter-spacing:.04em;color:rgba(255,255,255,.62)}
@keyframes xp-cp2-spin{to{transform:rotate(360deg)}}
@media (prefers-reduced-motion:reduce){.xp-cp2-swirl{animation:none}}
@media (max-width:420px){.xp-cp2-swirl{height:210px}.xp-cp2-center{top:123px;width:100px;height:100px}}`,
  js: ``
},
{
  id: "form-dopamine", name: "多巴胺表单", cat: "forms",
  desc: "高饱和色块、贴纸标签与厚边框的多巴胺报名表单。",
  tags: ["表单", "多巴胺", "高饱和", "贴纸"],
  prompt: "做一个多巴胺风格报名表单：奶油底，厚黑边框与硬阴影，标题用三行粗体；姓名、邮箱、选择三个字段分别配粉、黄、蓝的贴纸标签，输入框是白底圆角厚边框，提交按钮是亮粉色整行按钮并带按压位移。移动端保持单列，颜色不超过四种。",
  html: `<form class="xp-fd"><header><span>JOIN / 07</span><b>先报名，<br>再改变。</b></header><label><i class="is-pink">名字</i><input type="text" placeholder="怎么称呼你"></label><label><i class="is-yellow">邮箱</i><input type="email" placeholder="you@example.org"></label><label><i class="is-blue">想参与</i><select><option>批次验证</option><option>页面设计</option><option>访谈记录</option></select></label><button type="button">提交报名 →</button></form>`,
  css: `body{margin:0;display:grid;place-items:center;min-height:100vh;padding:40px;background:#fff3e0}
.xp-fd{width:min(360px,100%);padding:22px;border:3px solid #141414;border-radius:22px;background:#fffdf8;box-shadow:10px 10px 0 #141414;font-family:"Helvetica Neue",Arial,"PingFang SC",sans-serif;color:#141414}
.xp-fd header{padding-bottom:14px;border-bottom:3px solid #141414}
.xp-fd header span{font-family:ui-monospace,Consolas,monospace;font-size:8px;letter-spacing:.16em;color:#7b7468}
.xp-fd header b{display:block;margin-top:6px;font-size:28px;line-height:1.02;letter-spacing:-.03em}
.xp-fd label{display:block;margin-top:14px}
.xp-fd label i{display:inline-block;margin-bottom:6px;padding:3px 9px;border:2px solid #141414;border-radius:999px;font-size:8px;font-style:normal;font-weight:800;letter-spacing:.08em}
.xp-fd .is-pink{background:#ff4d8d;color:#fff}
.xp-fd .is-yellow{background:#ffd400;color:#141414}
.xp-fd .is-blue{background:#4d7cff;color:#fff}
.xp-fd input,.xp-fd select{width:100%;min-height:44px;padding:0 13px;border:2px solid #141414;border-radius:12px;background:#fff;font-family:inherit;font-size:12px;color:#141414;outline:none;transition:box-shadow .16s,transform .16s}
.xp-fd input:focus,.xp-fd select:focus{box-shadow:4px 4px 0 #141414;transform:translate(-1px,-1px)}
.xp-fd input::placeholder{color:#a39b8e}
.xp-fd button{width:100%;min-height:46px;margin-top:20px;border:3px solid #141414;border-radius:14px;background:#3ddc97;box-shadow:5px 5px 0 #141414;font-family:inherit;font-size:12px;font-weight:800;letter-spacing:.06em;color:#141414;cursor:pointer;transition:transform .14s,box-shadow .14s}
.xp-fd button:hover{transform:translate(-1px,-1px);box-shadow:6px 6px 0 #141414}
.xp-fd button:active{transform:translate(3px,3px);box-shadow:2px 2px 0 #141414}`,
  js: ``
}
);
