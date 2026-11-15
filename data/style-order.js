(function () {
  var priority = [
    "form-brutalist", "toggle-neubrutal", "panel-cyberpunk", "toggle-acid", "loader-glitch",
    "card-vaporwave", "card-synthwave", "social-memphis", "gallery-grunge", "nav-maximalism",
    "form-zine", "pagination-oldweb", "table-terminal", "card-risograph", "stats-solarpunk",
    "gauge-steampunk", "nav-deconstructivism", "toast-popart", "card-vhs", "loader-psychedelic",
    "toast-dopamine", "form-artdeco", "nav-constructivism", "form-darkacademia", "toast-y2k",
    "card-bauhaus", "form-swiss", "form-wabisabi", "btn-artnouveau", "card-neumorphism",
    "form-glassmorphism", "card-retrofuturism", "btn-frutigeraero", "nav-editorial", "form-organic",
    "social-glitch", "btn-synthwave", "card-grunge", "btn-steampunk", "card-popart", "card-psychedelic", "form-dopamine",
    "page-bauhaus", "page-constructivism", "page-wabi-sabi", "page-art-nouveau", "page-retro-futurism",
    "page-frutiger-aero", "page-organic", "page-neubrutalism", "page-glassmorphism",
    "btn-bauhaus", "card-constructivism", "card-wabi-sabi", "card-art-nouveau",
    "hero-retro-futurism", "panel-frutiger-aero", "card-organic", "btn-neubrutalism", "card-glassmorphism",
    "mx-header-brutal", "mx-header-terminal", "mx-header-editorial", "mx-header-y2k",
    "mx-about-swiss", "mx-about-zine", "mx-about-solar", "mx-about-deco",
    "mx-steps-riso", "mx-steps-web", "mx-steps-max", "mx-steps-decon",
    "mx-logos-brutal", "mx-logos-minimal", "mx-logos-neon", "mx-logos-paper",
    "mx-int-swiss", "mx-int-terminal", "mx-int-y2k", "mx-int-memphis",
    "mx-contact-neubrutal", "mx-contact-neumorph", "mx-contact-web", "mx-contact-acid",
    "mx-blog-editorial", "mx-blog-zine", "mx-blog-vhs", "mx-blog-academia",
    "mx-compare-swiss", "mx-compare-brutal", "mx-compare-cyber", "mx-compare-paper",
    "page-acid", "page-glitch", "page-synthwave", "page-grunge", "page-maximalism",
    "page-punk-zine", "page-old-web", "page-risograph", "page-solarpunk", "page-steampunk",
    "page-deconstructivism", "page-pop-art", "page-vhs", "page-psychedelic", "page-dopamine", "page-y2k",
    "swiss-pricing", "retro-newsletter", "paper-testimonial", "vaporwave-hero", "isometric-features",
    "luxury-product", "deco-event", "memphis-card", "jp-minimal-product",
    "clay-toggle", "cyber-login", "input-states",
    "tooltip-playground", "morph-loader", "bento-dashboard"
  ];
  var all = (window.PLUGINS || []).slice();
  var byId = {};
  all.forEach(function (plugin) { byId[plugin.id] = plugin; });
  var first = [];
  priority.forEach(function (id) { if (byId[id]) first.push(byId[id]); });
  var rest = all.filter(function (plugin) { return priority.indexOf(plugin.id) === -1; });
  window.PLUGINS = first.concat(rest);
})();
