(function () {
  "use strict";

  var hero = document.querySelector("[data-hero]");
  if (!hero) return;

  var videos = Array.prototype.slice.call(hero.querySelectorAll(".hero-video"));
  var buttons = Array.prototype.slice.call(hero.querySelectorAll("[data-video-index]"));
  var active = 0;
  var transitioning = false;

  function activate(index) {
    if (index === active || transitioning || !videos[index]) return;
    transitioning = true;

    videos[active].classList.remove("is-active");
    buttons[active].classList.remove("is-active");
    active = index;
    videos[active].classList.add("is-active");
    buttons[active].classList.add("is-active");

    if (videos[active].play) {
      videos[active].play().catch(function () { /* noop */ });
    }

    hero.classList.toggle("is-dark", active === 2);

    setTimeout(function () { transitioning = false; }, 1000);
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      activate(Number(button.getAttribute("data-video-index")));
    });
  });

  if (videos[0] && videos[0].play) {
    videos[0].play().catch(function () { /* noop */ });
  }

  var menu = document.querySelector("[data-mobile-menu]");
  var toggle = document.querySelector("[data-menu-toggle]");

  function openMenu() {
    if (!menu) return;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    if (toggle) {
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
    }
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    if (!menu || !menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    if (toggle) {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }
    document.body.style.overflow = "";
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      if (menu && menu.classList.contains("is-open")) closeMenu();
      else openMenu();
    });
  }

  if (menu) {
    var closeButton = menu.querySelector("[data-menu-close]");
    var backdrop = menu.querySelector("[data-menu-backdrop]");
    if (closeButton) closeButton.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);
    Array.prototype.slice.call(menu.querySelectorAll("[data-menu-link]")).forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  var form = document.querySelector("[data-early-form]");
  var status = document.querySelector("[data-form-status]");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var input = form.querySelector("input");
      var email = input ? input.value.trim() : "";
      if (!email) return;
      if (status) status.textContent = "已记录（演示）：更新会发送到 " + email;
      form.reset();
    });
  }
})();
