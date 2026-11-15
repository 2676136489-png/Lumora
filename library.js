(function () {
  "use strict";

  var plugins = window.PLUGINS || [];
  var byId = {};
  plugins.forEach(function (plugin) { byId[plugin.id] = plugin; });

  var CATS = [
    { id: "sections", name: "页面区块", group: "page" },
    { id: "media", name: "媒体", group: "page" },
    { id: "header", name: "页头", group: "page" },
    { id: "about", name: "关于", group: "page" },
    { id: "steps", name: "使用方式", group: "page" },
    { id: "logos", name: "标志墙", group: "page" },
    { id: "integrations", name: "集成", group: "page" },
    { id: "contact", name: "联系", group: "page" },
    { id: "blog", name: "博客", group: "page" },
    { id: "comparison", name: "对比", group: "page" },
    { id: "styles", name: "风格页面", group: "style" },
    { id: "buttons", name: "按钮", group: "ui" },
    { id: "cards", name: "卡片", group: "ui" },
    { id: "forms", name: "表单", group: "ui" },
    { id: "feedback", name: "反馈", group: "ui" },
    { id: "nav", name: "导航", group: "ui" },
    { id: "motion", name: "动效", group: "ui" },
    { id: "data", name: "数据", group: "ui" },
    { id: "choices", name: "选择控件", group: "ui" },
    { id: "pagination", name: "导航扩展", group: "ui" },
    { id: "social", name: "社交", group: "ui" },
    { id: "notifications", name: "通知", group: "ui" }
  ];
  var GROUPS = [
    { id: "all", name: "全部" },
    { id: "page", name: "页面区块" },
    { id: "ui", name: "界面控件" },
    { id: "style", name: "风格页面" }
  ];
  var LABEL = {};
  var CAT_GROUP = {};
  CATS.forEach(function (cat) {
    LABEL[cat.id] = cat.name;
    CAT_GROUP[cat.id] = cat.group;
  });

  var ICON_COPY = '<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="7" y="7" width="9" height="9" rx="2"/><path d="M13 7V5.5A2.5 2.5 0 0 0 10.5 3h-5A2.5 2.5 0 0 0 3 5.5v5A2.5 2.5 0 0 0 5.5 13H7"/></svg>';
  var ICON_PROMPT = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M3 5.5h14M3 10.5h9M3 15.5h5"/><path d="M14 12l3 3-3 3"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4 8-9"/></svg>';

  var BASE_CSS = `:root{
  --bg:#f6f8fb;
  --surface:#ffffff;
  --surface-soft:rgba(255,255,255,.66);
  --ink:#15202b;
  --muted:#607080;
  --line:rgba(38,52,69,.14);
  --accent:#0f8b8d;
  --accent-2:#ffb000;
  --accent-3:#da4167;
  --deep:#17324d;
  --radius:10px;
  --shadow:0 24px 60px rgba(39,55,77,.16);
}
*{box-sizing:border-box}
[hidden]{display:none!important}
html{scroll-behavior:smooth}
html,body{margin:0;min-height:100%}
body{font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;color:var(--ink);background:var(--bg);line-height:1.6;-webkit-font-smoothing:antialiased}
img{display:block;max-width:100%}
a{color:inherit;text-decoration:none}
button,input,select,textarea{font:inherit;color:inherit}
h1,h2,h3,p,figure,blockquote{margin:0}
::selection{background:rgba(15,139,141,.2)}`;

  var grid = document.querySelector("[data-grid]");
  var chipsBox = document.querySelector("[data-chips]");
  var groupsBox = document.querySelector("[data-groups]");
  var fieldSearch = document.querySelector("[data-search-field]");
  var topSearch = document.querySelector("[data-search]") || fieldSearch;
  var countEl = document.querySelector("[data-count]");
  var emptyEl = document.querySelector("[data-empty]");
  var resetEl = document.querySelector("[data-reset]");
  var sheet = document.querySelector("[data-sheet]");
  var sheetFrame = document.querySelector("[data-sheet-frame]");
  var sheetCat = document.querySelector("[data-sheet-cat]");
  var sheetTitle = document.querySelector("[data-sheet-title]");
  var sheetDesc = document.querySelector("[data-sheet-desc]");
  var sheetTags = document.querySelector("[data-sheet-tags]");
  var codeEl = document.querySelector("[data-code]");
  var promptEl = document.querySelector("[data-prompt]");
  var sheetTabs = Array.prototype.slice.call(document.querySelectorAll("[data-sheet-tab]"));
  var sheetCopySource = document.querySelector('[data-copy-sheet="source"]');
  var sheetCopyPrompt = document.querySelector('[data-copy-sheet="prompt"]');
  var toastEl = document.querySelector("[data-toast]");

  var filtered = [];
  var state = { group: "all", cat: "all", q: "" };
  var cards = [];
  var currentId = null;
  var toastTimer = null;

  function pad(value) { return ("00" + value).slice(-3); }

  function indent(text, spaces) {
    var padding = new Array(spaces + 1).join(" ");
    return text.split("\n").map(function (line) {
      return line ? padding + line : "";
    }).join("\n");
  }

  function frameDoc(plugin) {
    return '<!doctype html><html lang="zh-CN"><head><meta charset="utf-8">' +
      '<meta name="viewport" content="width=device-width, initial-scale=1">' +
      '<style>' + BASE_CSS + '\n' + plugin.css + '</style></head><body>' +
      plugin.html +
      (plugin.js ? '<scr' + 'ipt>' + plugin.js + '</scr' + 'ipt>' : "") +
      '</body></html>';
  }

  function sourceDoc(plugin) {
    var parts = [];
    parts.push("<!doctype html>");
    parts.push('<html lang="zh-CN">');
    parts.push("<head>");
    parts.push('  <meta charset="utf-8">');
    parts.push('  <meta name="viewport" content="width=device-width, initial-scale=1">');
    parts.push("  <title>" + plugin.name + " · Wiki Plugin</title>");
    parts.push("  <style>");
    parts.push("    /* ===== 基础设计令牌（可替换为你站点的变量） ===== */");
    parts.push(indent(BASE_CSS.trim(), 4));
    parts.push("");
    parts.push("    /* ===== " + plugin.name + " ===== */");
    parts.push(indent(plugin.css.trim(), 4));
    parts.push("  </style>");
    parts.push("</head>");
    parts.push("<body>");
    parts.push(indent(plugin.html.trim(), 2));
    if (plugin.js) {
      parts.push("  <scr" + "ipt>");
      parts.push(indent(plugin.js.trim(), 4));
      parts.push("  </scr" + "ipt>");
    }
    parts.push("</body>");
    parts.push("</html>");
    return parts.join("\n");
  }

  function groupCount(group) {
    return plugins.filter(function (plugin) {
      return group === "all" || CAT_GROUP[plugin.cat] === group;
    }).length;
  }

  function buildGroups() {
    groupsBox.innerHTML = GROUPS.map(function (group) {
      return '<button type="button" class="group' + (group.id === state.group ? " is-active" : "") +
        '" data-group="' + group.id + '">' + group.name + '<em>' + groupCount(group.id) + '</em></button>';
    }).join("");
  }

  function buildChips() {
    var list = CATS.filter(function (cat) {
      return state.group === "all" || cat.group === state.group;
    });
    var html = '<button type="button" class="chip' + (state.cat === "all" ? " is-active" : "") +
      '" data-cat="all">全部<em>' + groupCount(state.group) + '</em></button>';
    html += list.map(function (cat) {
      var count = plugins.filter(function (plugin) { return plugin.cat === cat.id; }).length;
      return '<button type="button" class="chip' + (cat.id === state.cat ? " is-active" : "") +
        '" data-cat="' + cat.id + '">' + cat.name + '<em>' + count + '</em></button>';
    }).join("");
    chipsBox.innerHTML = html;
  }

  function cardHTML(plugin, index) {
    return '<article class="pcard" data-card="' + plugin.id + '">' +
      '<div class="pcard-stage" role="button" tabindex="0" data-open="' + plugin.id + '" aria-label="预览 ' + plugin.name + '">' +
        '<div class="pcard-chrome"><i></i><i></i><i></i><em>预览 · ' + LABEL[plugin.cat] + '</em></div>' +
        '<div class="pcard-frame" data-frame-id="' + plugin.id + '"><iframe title="' + plugin.name + ' 预览" loading="lazy" tabindex="-1"></iframe></div>' +
        '<span class="pcard-open">查看大图 ↗</span>' +
      '</div>' +
      '<div class="pcard-body">' +
        '<div class="pcard-meta"><span class="pcard-cat">' + LABEL[plugin.cat] + '</span><span class="pcard-index">' + pad(index + 1) + '</span></div>' +
        '<h3>' + plugin.name + '</h3>' +
        '<p>' + plugin.desc + '</p>' +
        '<div class="pcard-actions">' +
          '<button class="pcard-btn is-solid" type="button" data-copy-source="' + plugin.id + '">' + ICON_COPY + '复制源码</button>' +
          '<button class="pcard-btn is-line" type="button" data-copy-prompt="' + plugin.id + '">' + ICON_PROMPT + '复制提示词</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  var lazy = null;
  var resizeObserver = null;

  function createObservers() {
    if (lazy) lazy.disconnect();
    if (resizeObserver) resizeObserver.disconnect();

    lazy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        loadFrame(entry.target);
        fit(entry.target);
        lazy.unobserve(entry.target);
      });
    }, { rootMargin: "520px 0px" });

    resizeObserver = new ResizeObserver(function (entries) {
      entries.forEach(function (entry) { fit(entry.target); });
    });
  }

  function loadFrame(frame) {
    var iframe = frame.querySelector("iframe");
    var plugin = byId[frame.getAttribute("data-frame-id")];
    if (!iframe || !plugin || iframe.getAttribute("srcdoc")) return;
    iframe.srcdoc = frameDoc(plugin);
  }

  function fit(frame) {
    if (!frame) return;
    var width = frame.clientWidth;
    if (!width) return;
    var iframe = frame.querySelector("iframe");
    if (iframe) iframe.style.transform = "scale(" + (width / 1000) + ")";
  }

  function fitAll() {
    cards.forEach(function (card) {
      if (!card.hidden) fit(card.querySelector(".pcard-frame"));
    });
    if (sheet.classList.contains("is-open")) fit(sheetFrame);
  }

  function renderList() {
    createObservers();
    grid.innerHTML = filtered.map(function (plugin) {
      return cardHTML(plugin, plugins.indexOf(plugin));
    }).join("");
    cards = Array.prototype.slice.call(grid.querySelectorAll(".pcard"));
    cards.forEach(function (card) {
      var frame = card.querySelector(".pcard-frame");
      if (!frame) return;
      lazy.observe(frame);
      resizeObserver.observe(frame);
    });
    if (countEl) countEl.textContent = filtered.length;
    emptyEl.hidden = filtered.length > 0;
    grid.hidden = filtered.length === 0;
    requestAnimationFrame(fitAll);
  }

  function applyFilter() {
    filtered = plugins.filter(function (plugin) {
      var haystack = (plugin.name + " " + plugin.desc + " " + plugin.id + " " +
        LABEL[plugin.cat] + " " + plugin.tags.join(" ")).toLowerCase();
      var inGroup = state.group === "all" || CAT_GROUP[plugin.cat] === state.group;
      return inGroup && (state.cat === "all" || plugin.cat === state.cat) &&
        (!state.q || haystack.indexOf(state.q) > -1);
    });
    renderList();
  }

  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("is-show"); }, 1900);
  }

  function fallbackCopy(text, done) {
    var area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.top = "-1000px";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); done(); } catch (error) { /* noop */ }
    document.body.removeChild(area);
  }

  function copyText(text, button, message) {
    function done() {
      toast(message);
      if (!button) return;
      button.dataset.original = button.innerHTML;
      button.innerHTML = ICON_CHECK + "已复制";
      button.classList.add("is-done");
      clearTimeout(button._copyTimer);
      button._copyTimer = setTimeout(function () {
        button.innerHTML = button.dataset.original;
        button.classList.remove("is-done");
      }, 1600);
    }
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(function () {
        fallbackCopy(text, done);
      });
    } else {
      fallbackCopy(text, done);
    }
  }

  function setSheetTab(name) {
    sheetTabs.forEach(function (tab) {
      tab.classList.toggle("is-active", tab.getAttribute("data-sheet-tab") === name);
    });
    codeEl.hidden = name !== "source";
    promptEl.hidden = name !== "prompt";
  }

  function openSheet(id) {
    var plugin = byId[id];
    if (!plugin) return;
    currentId = id;
    sheetCat.textContent = LABEL[plugin.cat];
    sheetTitle.textContent = plugin.name;
    sheetDesc.textContent = plugin.desc;
    var cnTags = plugin.tags.filter(function (tag) { return /[\u4e00-\u9fa5]/.test(tag); });
    sheetTags.textContent = "分类：" + LABEL[plugin.cat] + (cnTags.length ? "　关键词：" + cnTags.join(" · ") : "");
    codeEl.textContent = sourceDoc(plugin);
    promptEl.textContent = plugin.prompt;
    setSheetTab("source");
    sheetFrame.innerHTML = "";
    var iframe = document.createElement("iframe");
    iframe.title = plugin.name + " · 大图预览";
    sheetFrame.appendChild(iframe);
    iframe.srcdoc = frameDoc(plugin);
    sheetCopySource.innerHTML = ICON_COPY + "复制源码";
    sheetCopyPrompt.innerHTML = ICON_PROMPT + "复制提示词";
    sheet.classList.add("is-open");
    sheet.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
    requestAnimationFrame(function () { fit(sheetFrame); });
    if (history.replaceState) history.replaceState(null, "", "#" + plugin.id);
  }

  function closeSheet() {
    sheet.classList.remove("is-open");
    sheet.setAttribute("aria-hidden", "true");
    sheetFrame.innerHTML = "";
    document.body.classList.remove("is-locked");
    currentId = null;
    if (history.replaceState) history.replaceState(null, "", location.pathname);
  }

  groupsBox.addEventListener("click", function (event) {
    var group = event.target.closest("[data-group]");
    if (!group) return;
    state.group = group.getAttribute("data-group");
    state.cat = "all";
    buildGroups();
    buildChips();
    applyFilter();
  });

  chipsBox.addEventListener("click", function (event) {
    var chip = event.target.closest("[data-cat]");
    if (!chip) return;
    state.cat = chip.getAttribute("data-cat");
    Array.prototype.slice.call(chipsBox.querySelectorAll(".chip")).forEach(function (item) {
      item.classList.toggle("is-active", item === chip);
    });
    applyFilter();
  });

  grid.addEventListener("click", function (event) {
    var sourceButton = event.target.closest("[data-copy-source]");
    if (sourceButton) {
      var sourcePlugin = byId[sourceButton.getAttribute("data-copy-source")];
      if (sourcePlugin) copyText(sourceDoc(sourcePlugin), sourceButton, "源码已复制");
      return;
    }
    var promptButton = event.target.closest("[data-copy-prompt]");
    if (promptButton) {
      var promptPlugin = byId[promptButton.getAttribute("data-copy-prompt")];
      if (promptPlugin) copyText(promptPlugin.prompt, promptButton, "提示词已复制");
      return;
    }
    var stage = event.target.closest("[data-open]");
    if (stage) openSheet(stage.getAttribute("data-open"));
  });

  grid.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;
    var stage = event.target.closest("[data-open]");
    if (!stage) return;
    event.preventDefault();
    openSheet(stage.getAttribute("data-open"));
  });

  function syncSearch(value) {
    state.q = value.trim().toLowerCase();
    if (topSearch.value !== value) topSearch.value = value;
    if (fieldSearch.value !== value) fieldSearch.value = value;
    applyFilter();
  }

  if (topSearch) topSearch.addEventListener("input", function () { syncSearch(topSearch.value); });
  if (fieldSearch) fieldSearch.addEventListener("input", function () { syncSearch(fieldSearch.value); });

  resetEl.addEventListener("click", function () {
    state.group = "all";
    state.cat = "all";
    syncSearch("");
    buildGroups();
    buildChips();
    applyFilter();
  });

  sheetTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      setSheetTab(tab.getAttribute("data-sheet-tab"));
    });
  });

  sheet.addEventListener("click", function (event) {
    if (event.target.closest("[data-sheet-close]")) {
      closeSheet();
      return;
    }
    var copyButton = event.target.closest("[data-copy-sheet]");
    if (copyButton && currentId) {
      var plugin = byId[currentId];
      var kind = copyButton.getAttribute("data-copy-sheet");
      if (kind === "source") copyText(sourceDoc(plugin), copyButton, "源码已复制");
      else copyText(plugin.prompt, copyButton, "提示词已复制");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      if (sheet.classList.contains("is-open")) {
        closeSheet();
        return;
      }
      if (state.q) syncSearch("");
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      if (!topSearch) return;
      event.preventDefault();
      topSearch.focus();
      topSearch.select();
      return;
    }
    if (event.key === "/" && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      if (!topSearch) return;
      event.preventDefault();
      topSearch.focus();
      topSearch.select();
    }
  });

  var themeToggle = document.querySelector("[data-theme-toggle]");
  if (themeToggle) {
    try {
      var savedTheme = localStorage.getItem("wiki-plugin-theme");
      if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
    } catch (error) { /* noop */ }

    themeToggle.addEventListener("click", function () {
      var dark = document.documentElement.getAttribute("data-theme") === "dark";
      var next = dark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("wiki-plugin-theme", next); } catch (error) { /* noop */ }
      syncThemeButton();
    });
  }

  function syncThemeButton() {
    if (!themeToggle) return;
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    themeToggle.textContent = dark ? "◑" : "◐";
    themeToggle.setAttribute("aria-label", dark ? "切换到明亮主题" : "切换到深色主题");
  }

  window.addEventListener("resize", function () {
    requestAnimationFrame(fitAll);
  });

  Array.prototype.slice.call(document.querySelectorAll("[data-total]")).forEach(function (node) {
    node.textContent = plugins.length;
  });
  Array.prototype.slice.call(document.querySelectorAll("[data-cat-total]")).forEach(function (node) {
    node.textContent = CATS.length;
  });

  buildGroups();
  buildChips();
  applyFilter();
  syncThemeButton();

  var hashId = location.hash.replace("#", "");
  if (hashId && byId[hashId]) {
    setTimeout(function () { openSheet(hashId); }, 140);
  }

  window.addEventListener("hashchange", function () {
    var id = location.hash.replace("#", "");
    if (id && byId[id]) openSheet(id);
  });
})();
