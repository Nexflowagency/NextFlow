/* ============================================================
   BETA STUDIO — cinematic scroll engine
   Pure JS + Lenis. No build step.
   ============================================================ */
(function () {
  "use strict";

  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var isTouch = window.matchMedia("(hover: none)").matches;

  /* ---------- Lenis smooth scroll ---------- */
  var lenis = null;
  if (!reduce && typeof Lenis !== "undefined") {
    lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1.25,
      touchMultiplier: 1.6,
      smoothWheel: true
    });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
  }

  function onScrollY() {
    return window.scrollY || window.pageYOffset || 0;
  }

  /* ---------- Header scrolled state ---------- */
  var header = document.querySelector(".header");
  function updateHeader() {
    if (!header) return;
    if (onScrollY() > 30) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  }

  /* ---------- Mobile drawer ---------- */
  var burger = document.querySelector(".burger");
  var drawer = document.querySelector(".drawer");
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    if (burger) burger.classList.remove("open");
    document.body.classList.remove("no-scroll");
    if (lenis) lenis.start();
  }
  if (burger && drawer) {
    burger.addEventListener("click", function () {
      var open = drawer.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.classList.toggle("no-scroll", open);
      if (lenis) { open ? lenis.stop() : lenis.start(); }
    });
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll("[data-reveal]"));
  if (revealEls.length) {
    if (reduce || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
      revealEls.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Lazy-load images marked data-src ---------- */
  var lazyEls = Array.prototype.slice.call(document.querySelectorAll("img[data-src]"));
  if (lazyEls.length) {
    if (!("IntersectionObserver" in window)) {
      lazyEls.forEach(function (img) { var ss = img.getAttribute("data-srcset"); if (ss) img.srcset = ss; img.src = img.getAttribute("data-src"); });
    } else {
      var lio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var img = e.target;
            var ss = img.getAttribute("data-srcset");
            if (ss) { img.srcset = ss; img.removeAttribute("data-srcset"); }
            img.src = img.getAttribute("data-src");
            img.removeAttribute("data-src");
            lio.unobserve(img);
          }
        });
      }, { rootMargin: "300px 0px" });
      lazyEls.forEach(function (img) { lio.observe(img); });
    }
  }

  /* ---------- Parallax / cinematic scrub ---------- */
  var heroMediaImg = document.querySelector(".hero__media video, .hero__media img");
  var heroTitle = document.querySelector(".hero__title");
  var heroSub = document.querySelector(".hero__sub");
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));

  var vh = window.innerHeight;
  function recalcViewport() { vh = window.innerHeight; }

  function frame() {
    var y = onScrollY();

    // Hero: image scales & drifts up, text drifts up + fades (cinematic push).
    // Desktop only — on phone/tablet the video is full-screen cover (static, no parallax).
    if (heroMediaImg) {
      if (window.innerWidth > 1024) {
        var p = Math.min(y / (vh * 0.9), 1);
        var scale = 1.08 + p * 0.14;
        heroMediaImg.style.transform = "scale(" + scale.toFixed(4) + ") translateY(" + (p * 26).toFixed(2) + "px)";
        if (heroTitle) {
          heroTitle.style.transform = "translateY(" + (y * -0.16).toFixed(2) + "px)";
          heroTitle.style.opacity = (1 - p * 0.85).toFixed(3);
        }
        if (heroSub) {
          heroSub.style.transform = "translateY(" + (y * -0.1).toFixed(2) + "px)";
          heroSub.style.opacity = (1 - p * 1.1).toFixed(3);
        }
      } else {
        heroMediaImg.style.transform = "";
        if (heroTitle) { heroTitle.style.transform = ""; heroTitle.style.opacity = ""; }
        if (heroSub) { heroSub.style.transform = ""; heroSub.style.opacity = ""; }
      }
    }

    // Generic parallax on media inside bands as they cross the viewport.
    for (var i = 0; i < parallaxEls.length; i++) {
      var el = parallaxEls[i];
      var rect = el.getBoundingClientRect();
      if (rect.bottom < -200 || rect.top > vh + 200) continue;
      var centerOffset = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1
      var speed = parseFloat(el.getAttribute("data-parallax")) || 8;
      var img = el.querySelector("img");
      if (img) img.style.transform = "scale(1.12) translateY(" + (centerOffset * speed * -1).toFixed(2) + "%)";
    }
  }

  var ticking = false;
  function requestFrame() {
    if (!ticking) { requestAnimationFrame(function () { frame(); ticking = false; }); ticking = true; }
  }

  function onScroll() { updateHeader(); if (!reduce) requestFrame(); }

  if (lenis) {
    lenis.on("scroll", onScroll);
  } else {
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  window.addEventListener("resize", function () { recalcViewport(); requestFrame(); });

  // initial
  updateHeader();
  frame();

  /* ---------- Anchor smooth scroll (for in-page links) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function (e) {
      var id = a.getAttribute("href");
      if (id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -80, duration: 1.1 });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Highlight "today" in hours tables ---------- */
  var todayIdx = new Date().getDay(); // 0 Sun .. 6 Sat
  document.querySelectorAll("[data-day]").forEach(function (row) {
    if (parseInt(row.getAttribute("data-day"), 10) === todayIdx) row.classList.add("today");
  });

  /* ---------- Salon gallery lightbox (interactive) ---------- */
  (function () {
    var figs = Array.prototype.slice.call(document.querySelectorAll(".salon-gallery figure"));
    if (!figs.length) return;
    var items = figs.map(function (f) {
      var img = f.querySelector("img");
      return {
        full: f.getAttribute("data-full") || img.getAttribute("data-src") || img.currentSrc || img.src,
        alt: img.getAttribute("alt") || ""
      };
    });
    var overlay = null, imgEl = null, countEl = null, idx = 0;
    function build() {
      overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.setAttribute("aria-hidden", "true");
      overlay.innerHTML =
        '<button class="lightbox__close" aria-label="Închide">×</button>' +
        '<button class="lightbox__nav lightbox__prev" aria-label="Imaginea anterioară">‹</button>' +
        '<figure class="lightbox__stage"><img alt=""></figure>' +
        '<button class="lightbox__nav lightbox__next" aria-label="Imaginea următoare">›</button>' +
        '<div class="lightbox__count"></div>';
      document.body.appendChild(overlay);
      imgEl = overlay.querySelector("img");
      countEl = overlay.querySelector(".lightbox__count");
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay || e.target.classList.contains("lightbox__close")) close();
      });
      overlay.querySelector(".lightbox__prev").addEventListener("click", function (e) { e.stopPropagation(); show(idx - 1); });
      overlay.querySelector(".lightbox__next").addEventListener("click", function (e) { e.stopPropagation(); show(idx + 1); });
    }
    function show(i) {
      idx = (i + items.length) % items.length;
      imgEl.src = items[idx].full;
      imgEl.alt = items[idx].alt;
      if (countEl) countEl.textContent = (idx + 1) + " / " + items.length;
    }
    function open(i) {
      if (!overlay) build();
      show(i);
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
    }
    function close() {
      if (!overlay) return;
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
    }
    figs.forEach(function (f, i) {
      f.setAttribute("tabindex", "0");
      f.setAttribute("role", "button");
      f.setAttribute("aria-label", "Mărește imaginea");
      f.addEventListener("click", function () { open(i); });
      f.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(i); }
      });
    });
    document.addEventListener("keydown", function (e) {
      if (!overlay || !overlay.classList.contains("open")) return;
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx - 1);
      else if (e.key === "ArrowRight") show(idx + 1);
    });
  })();
})();
