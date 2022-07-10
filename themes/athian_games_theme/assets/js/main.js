/* -------------------------------------------

Name: 		Quarty
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */

$(function () {
  "use strict";

  // $(document).ready(function() {
  //   $('html').addClass('is-animating');
  //   anime({
  //     targets: '.qrt-preloader .qrt-preloader-content',
  //     opacity: [0, 1],
  //     delay: 200,
  //     duration: 600,
  //     easing: 'linear',
  //     complete: function(anim) {

  //     }
  //   });
  //   anime({
  //     targets: '.qrt-preloader',
  //     opacity: [1, 0],
  //     delay: 2200,
  //     duration: 400,
  //     easing: 'linear',
  //     complete: function(anim) {
  //       $('.qrt-preloader').css('display', 'none');
  //       $('html').removeClass('is-animating');
  //     }
  //   });
  // });

  // var bar = new ProgressBar.Line(preloader, {
  //   strokeWidth: 1.7,
  //   easing: 'easeInOut',
  //   duration: 1400,
  //   delay: 750,
  //   trailWidth: 1.7,
  //   svgStyle: {
  //     width: '100%',
  //     height: '100%'
  //   },
  //   step: (state, bar) => {
  //     bar.setText(Math.round(bar.value() * 100) + ' %');
  //   }
  // });

  // bar.animate(1);

  const cursor = document.querySelector("#cursor");
  const cursorRadius = Math.round(cursor.getBoundingClientRect().width / 1.2);

  const mouse = {
    x: 300,
    y: 300,
  };
  const pos = {
    x: 0,
    y: 0,
  };
  const ratio = 0.07;

  const draw = () => {
    pos.x += (mouse.x - cursorRadius - pos.x) * ratio;
    pos.y += (mouse.y - cursorRadius - pos.y) * ratio;
    cursor.style.transform = "translate3d(" + pos.x + "px ," + pos.y + "px, 0)";
  };

  const update = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  window.addEventListener("mousemove", update, {
    capture: false,
    passive: true,
  });

  function animate() {
    draw();
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);

  const options = {
    containers: ["#qrt-dynamic-content", "#qrt-dynamic-menu"],
    animateHistoryBrowsing: true,
    linkSelector: ".qrt-menu a:not([data-no-swup]), .qrt-anima-link:not([data-no-swup])",
    animationSelector: '[class="qrt-dynamic-content"]',
  };

  const swup = new Swup(options);

  Scrollbar.use(OverscrollPlugin);
  var scrollbar = Scrollbar.init(document.querySelector("#qrt-scroll-content"), {
    damping: 0.17,
    renderByPixel: true,
    continuousScrolling: true,
    plugins: {
      overscroll: {
        effect: "bounce",
        damping: 0.15,
        // maxOverscroll: 80
      },
      mobile: {
        alwaysShowTracks: false,
      },
    },
  });

  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector("#qrt-scroll-info"), {
    damping: 0.17,
    renderByPixel: true,
    continuousScrolling: true,
    plugins: {
      overscroll: {
        effect: "bounce",
        damping: 0.15,
        // maxOverscroll: 80
      },
      mobile: {
        alwaysShowTracks: false,
      },
    },
  });

  // var fixedElem = document.getElementById('fixed');

  // if ($(window).width() > 1401) {
  //   scrollbar.addListener(function(status) {
  //     var offset = status.offset;

  //     fixed.style.top = offset.y + 'px';
  //     fixed.style.left = offset.x + 'px';
  //   });
  // }

  // $(window).resize(function() {
  //   if ($(window).width() > 1400) {
  //     scrollbar.addListener(function(status) {
  //       var offset = status.offset;

  //       fixed.style.top = offset.y + 'px';
  //       fixed.style.left = offset.x + 'px';
  //     });
  //     $(fixedElem).css('position', 'relative')
  //   }
  //   if ($(window).width() < 1400) {
  //     scrollbar.addListener(function(status) {
  //       var offset = status.offset;

  //       fixed.style.top = offset.y + 'px';
  //       fixed.style.left = offset.x + 'px';
  //     });
  //     $(fixedElem).css('position', 'static')
  //   }
  // });

  var swiper = new Swiper(".qrt-main-slider", {
    slidesPerView: 1,
    speed: 800,
    parallax: true,
    mousewheel: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".swiper-main-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".qrt-main-next",
      prevEl: ".qrt-main-prev",
    },
  });

  var swiper = new Swiper(".qrt-main-slider-onepage", {
    slidesPerView: 1,
    speed: 800,
    parallax: true,
    keyboard: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".swiper-main-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".qrt-main-next",
      prevEl: ".qrt-main-prev",
    },
  });

  var swiper = new Swiper(".qrt-testimonials-slider", {
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 20,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: ".swiper-testi-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".qrt-testi-next",
      prevEl: ".qrt-testi-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
    },
  });

  // brands slider
  var swiper = new Swiper(".qrt-brands-slider", {
    slidesPerView: 4,
    speed: 6000,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 0,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
  });

  // latest works slider
  var swiper = new Swiper(".qrt-latest-works-slider", {
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-latest-works-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".qrt-latest-works-next",
      prevEl: ".qrt-latest-works-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
    },
  });

  var swiper = new Swiper(".qrt-pop-post-slider", {
    slidesPerView: 2,
    speed: 800,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pp-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".qrt-pp-next",
      prevEl: ".qrt-pp-prev",
    },
    breakpoints: {
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="diploma"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1000,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1000,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="works"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1000,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $.fancybox.defaults.hash = false;

  // portfolio filter
  // $('.qrt-filter a').on('click', function() {
  //   $('.qrt-filter .qrt-current').removeClass('qrt-current');
  //   $(this).addClass('qrt-current');

  //   var selector = $(this).data('filter');
  //   $('.qrt-masonry-grid').isotope({
  //     filter: selector
  //   });
  //   return false;
  // });

  $(".qrt-masonry-grid").isotope({
    filter: "*",
    itemSelector: ".qrt-masonry-grid-item",
    percentPosition: true,
    masonry: {
      columnWidth: ".qrt-grid-sizer",
    },
  });

  $(".qrt-counter").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          duration: 2000,
          easing: "linear",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });

  if ($(window).width() < 991) {
    $(".qrt-mobile-fix").attr("href", "#.");
  }

  $(".qrt-lock").on("click", function () {
    $(".qrt-map").toggleClass("qrt-active");
    $(".qrt-lock").toggleClass("qrt-active");
    $(".qrt-lock .fas").toggleClass("fa-unlock");
  });

  $(".qrt-menu nav ul li a").on("click", function () {
    if ($(this).hasClass("qrt-mobile-fix")) {
      $(".qrt-menu , .qrt-menu-btn").addClass("qrt-active");
    } else {
      $(".qrt-menu , .qrt-menu-btn").removeClass("qrt-active");
    }
  });

  $(".qrt-info-btn").on("click", function () {
    $(".qrt-info , .qrt-info-btn , .qrt-curtain").toggleClass("qrt-active");
    $(".qrt-menu , .qrt-menu-btn").removeClass("qrt-active");
    $(".qrt-search , .qrt-search-btn").removeClass("qrt-active");
  });

  $(".qrt-info-frame a").on("click", function () {
    $(".qrt-info , .qrt-info-btn , .qrt-curtain").removeClass("qrt-active");
  });

  $(document).on("click", function (e) {
    var el = ".qrt-info , .qrt-info-btn";
    if (jQuery(e.target).closest(el).length) return;
    $(".qrt-info , .qrt-info-btn , .qrt-curtain").removeClass("qrt-active");
  });

  $(".qrt-menu-btn").on("click", function () {
    $(".qrt-menu , .qrt-menu-btn").toggleClass("qrt-active");
    $(".qrt-info , .qrt-info-btn , .qrt-curtain").removeClass("qrt-active");
    $(".qrt-search , .qrt-search-btn").removeClass("qrt-active");
  });

  $(document).on("click", function (e) {
    var el = ".qrt-menu , .qrt-menu-btn";
    if (jQuery(e.target).closest(el).length) return;
    $(".qrt-menu , .qrt-menu-btn").removeClass("qrt-active");
  });

  $(".qrt-search-btn").on("click", function () {
    $(".qrt-search , .qrt-search-btn").toggleClass("qrt-active");
    $(".qrt-menu , .qrt-menu-btn").removeClass("qrt-active");
    $(".qrt-info , .qrt-info-btn , .qrt-curtain").removeClass("qrt-active");
  });

  $(document).on("click", function (e) {
    var el = ".qrt-search , .qrt-search-btn";
    if (jQuery(e.target).closest(el).length) return;
    $(".qrt-search , .qrt-search-btn").removeClass("qrt-active");
  });

  $(".qrt-current-page-title").empty();

  $(".current-menu-item a").clone().prependTo(".qrt-current-page-title");

  anime({
    targets: ".qrt-follower",
    scale: 0,
  });

  $(".qrt-menu nav ul li a").mouseover(function () {
    anime({
      targets: ".qrt-follower",
      scale: 1,
      background: "rgba(222,225,230,1)",
    });
  });
  $(".qrt-menu nav ul li a").mouseout(function () {
    anime({
      targets: ".qrt-follower",
      scale: 0,
      background: "#fff",
    });
  });

  $(".qrt-menu nav ul li ul li a").mouseover(function () {
    anime({
      targets: ".qrt-follower",
      scale: 1,
      background: "#fff",
    });
  });
  $(".qrt-menu nav ul li ul li a").mouseout(function () {
    anime({
      targets: ".qrt-follower",
      scale: 0,
      background: "#fff",
    });
  });

  $(".qrt-cursor-scale , .qrt-btn").mouseover(function () {
    anime({
      targets: ".qrt-follower",
      scale: 1,
    });
  });
  $(".qrt-cursor-scale , .qrt-btn").mouseout(function () {
    anime({
      targets: ".qrt-follower",
      scale: 0,
    });
  });

  $(".qrt-cursor-color").mouseover(function () {
    anime({
      targets: ".qrt-follower",
      background: "rgba(222,225,230,1)",
    });
  });
  $(".qrt-cursor-color").mouseout(function () {
    anime({
      targets: ".qrt-follower",
      background: "#fff",
    });
  });

  $(".qrt-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("qrt-active");
    } else {
      $(this).removeClass("qrt-active");
    }
  });

  if ($("div").is("#map")) {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic3Rvc2NhciIsImEiOiJja2VpbDE4b2UwbDg3MnNwY2d3YzlvcDV5In0.e26tLedpKwxrkOmPkWhQlg";
    var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/stoscar/ckggs77460wxw19ob8q5wldwf",
      center: [-79.3949, 43.643102],
      zoom: 14,
    });

    var marker = new mapboxgl.Marker().setLngLat([-79.3949, 43.643102]).addTo(map);
  }

  function getVideos() {
    let v = document.getElementsByClassName("youtube-player");
    for (let n = 0; n < v.length; n++) {
      let p = document.createElement("div");
      let id = v[n].getAttribute("data-id");

      let placeholder = v[n].hasAttribute("data-thumbnail")
        ? v[n].getAttribute("data-thumbnail")
        : "";

      if (placeholder.length) p.innerHTML = createCustomThumbail(placeholder);
      else p.innerHTML = createThumbail(id);

      v[n].appendChild(p);
      p.addEventListener("click", function () {
        let parent = this.parentNode;
        createIframe(parent, parent.getAttribute("data-id"));
      });
    }
  }

  /**
   * Create custom thumbnail from data-attribute provided url
   * @param {string} url
   * @return {string} The HTML containing the <img> tag
   */
  function createCustomThumbail(url) {
    return (
      '<img class="youtube-thumbnail" id="youtube-thumbnail" src="' +
      url +
      '" alt="Youtube Preview"><div class="youtube-play-btn"></img>'
    );
  }

  /**
   * Get Youtube default max resolution thumbnail
   * @param {string} id The Youtube video id
   * @return {string} The HTML containing the <img> tag
   */
  function createThumbail(id) {
    return (
      '<img class="youtube-thumbnail" id="youtube-thumbnail" src="//i.ytimg.com/vi_webp/' +
      id +
      '/maxresdefault.webp" alt="Youtube Preview"><div class="youtube-play-btn"></img>'
    );
  }

  /**
   * Create and load iframe in Youtube container
   **/
  function createIframe(v, id) {
    let iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + id + "?autoplay=1&mute=1");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("class", "youtube-iframe");
    iframe.setAttribute("allowfullscreen", "true");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; controls"
    );
    v.firstChild.replaceWith(iframe);

    document.getElementById("youtube-thumbnail").remove();
  }

  /** Pause video on modal close **/
  $("#video-modal").on("hidden.bs.modal", function (e) {
    $(this).find("iframe").remove();
  });

  /** Pause video on modal close **/
  $("#video-modal").on("show.bs.modal", function (e) {
    getVideos();
  });

  /**
   * Accordion
   */
  function buildAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
        this.classList.toggle("accordion-active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + 30 + "px";
        }
      });
    }
  }

  function buildModal() {
    // Get the modal
    var modal = document.getElementsByClassName("instructor-modal");
    // Get the button that opens the modal
    var btn = document.getElementsByClassName("instructor-wrapper");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("modal-close");

    var i;
    for (i = 0; i < btn.length; i++) {
      const actualModal = modal[i];
      // When the user clicks on the button, open the modal
      btn[i].onclick = function () {
        actualModal.style.display = "block";
      };
      // When the user clicks on <span> (x), close the modal
      span[i].onclick = function () {
        actualModal.style.display = "none";
      };
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      for (i = 0; i < modal.length; i++) {
        if (event.target == modal[i]) {
          modal[i].style.display = "none";
        }
      }
    };
  }

  // reinit
  document.addEventListener("swup:contentReplaced", function () {
    Scrollbar.use(OverscrollPlugin);

    getVideos();
    buildAccordion();
    buildModal();
    var scrollbar = Scrollbar.init(document.querySelector("#qrt-scroll-content"), {
      damping: 0.17,
      renderByPixel: true,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: "bounce",
          damping: 0.15,
          maxOverscroll: 80,
        },
        mobile: {
          speed: 0.2,
          alwaysShowTracks: false,
        },
      },
    });

    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector("#qrt-scroll-info"), {
      damping: 0.17,
      renderByPixel: true,
      continuousScrolling: true,
      plugins: {
        overscroll: {
          effect: "bounce",
          damping: 0.15,
          maxOverscroll: 80,
        },
        mobile: {
          speed: 0.2,
          alwaysShowTracks: false,
        },
      },
    });

    // var fixedElem = document.getElementById('fixed');

    // if ($(window).width() > 1200) {
    //   scrollbar.addListener(function(status) {
    //     var offset = status.offset;

    //     fixed.style.top = offset.y + 'px';
    //     fixed.style.left = offset.x + 'px';
    //   });
    // }

    // $(window).resize(function() {
    //   if ($(window).width() > 1200) {
    //     scrollbar.addListener(function(status) {
    //       var offset = status.offset;

    //       fixed.style.top = offset.y + 'px';
    //       fixed.style.left = offset.x + 'px';
    //     });
    //     $(fixedElem).css('position', 'relative')
    //   }
    //   if ($(window).width() < 1200) {
    //     scrollbar.addListener(function(status) {
    //       var offset = status.offset;

    //       fixed.style.top = offset.y + 'px';
    //       fixed.style.left = offset.x + 'px';
    //     });
    //     $(fixedElem).css('position', 'static')
    //   }
    // });

    var swiper = new Swiper(".qrt-main-slider", {
      slidesPerView: 1,
      speed: 800,
      parallax: true,
      mousewheel: true,
      mousewheel: {
        releaseOnEdges: true,
      },
      keyboard: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".swiper-main-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".qrt-main-next",
        prevEl: ".qrt-main-prev",
      },
    });

    var swiper = new Swiper(".qrt-main-slider-onepage", {
      slidesPerView: 1,
      speed: 800,
      parallax: true,
      keyboard: true,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".swiper-main-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".qrt-main-next",
        prevEl: ".qrt-main-prev",
      },
    });

    var swiper = new Swiper(".qrt-testimonials-slider", {
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 20,
      autoplay: {
        delay: 6000,
      },
      pagination: {
        el: ".swiper-testi-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".qrt-testi-next",
        prevEl: ".qrt-testi-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
        },
      },
    });

    // brands slider
    var swiper = new Swiper(".qrt-brands-slider", {
      slidesPerView: 4,
      speed: 6000,
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 0,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
    });

    // latest works slider
    var swiper = new Swiper(".qrt-latest-works-slider", {
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-latest-works-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".qrt-latest-works-next",
        prevEl: ".qrt-latest-works-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
        },
      },
    });

    var swiper = new Swiper(".qrt-pop-post-slider", {
      slidesPerView: 2,
      speed: 800,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pp-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".qrt-pp-next",
        prevEl: ".qrt-pp-prev",
      },
      breakpoints: {
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="diploma"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1000,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1000,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="works"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1000,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $.fancybox.defaults.hash = false;

    // portfolio filter
    // $('.qrt-filter a').on('click', function() {
    //   $('.qrt-filter .qrt-current').removeClass('qrt-current');
    //   $(this).addClass('qrt-current');

    //   var selector = $(this).data('filter');
    //   $('.qrt-masonry-grid').isotope({
    //     filter: selector
    //   });
    //   return false;
    // });

    $(".qrt-masonry-grid").isotope({
      filter: "*",
      itemSelector: ".qrt-masonry-grid-item",
      percentPosition: true,
      masonry: {
        columnWidth: ".qrt-grid-sizer",
      },
    });

    $(".qrt-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "linear",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    if ($(window).width() < 991) {
      $(".qrt-mobile-fix").attr("href", "#.");
    }

    $(".qrt-lock").on("click", function () {
      $(".qrt-map").toggleClass("qrt-active");
      $(".qrt-lock").toggleClass("qrt-active");
      $(".qrt-lock .fas").toggleClass("fa-unlock");
    });

    $(".qrt-menu nav ul li a").on("click", function () {
      if ($(this).hasClass("qrt-mobile-fix")) {
        $(".qrt-menu , .qrt-menu-btn").addClass("qrt-active");
      } else {
        $(".qrt-menu , .qrt-menu-btn").removeClass("qrt-active");
      }
    });

    $(".qrt-current-page-title").empty();
    $(".current-menu-item a").clone().prependTo(".qrt-current-page-title");

    anime({
      targets: ".qrt-follower",
      scale: 0,
    });

    $(".qrt-menu nav ul li a").mouseover(function () {
      anime({
        targets: ".qrt-follower",
        scale: 1,
        background: "rgba(222,225,230,1)",
      });
    });
    $(".qrt-menu nav ul li a").mouseout(function () {
      anime({
        targets: ".qrt-follower",
        scale: 0,
        background: "#fff",
      });
    });

    $(".qrt-menu nav ul li ul li a").mouseover(function () {
      anime({
        targets: ".qrt-follower",
        scale: 1,
        background: "#fff",
      });
    });
    $(".qrt-menu nav ul li ul li a").mouseout(function () {
      anime({
        targets: ".qrt-follower",
        scale: 0,
        background: "#fff",
      });
    });

    $(".qrt-cursor-scale").mouseover(function () {
      anime({
        targets: ".qrt-follower",
        scale: 1,
      });
    });
    $(".qrt-cursor-scale").mouseout(function () {
      anime({
        targets: ".qrt-follower",
        scale: 0,
      });
    });

    $(".qrt-cursor-color").mouseover(function () {
      anime({
        targets: ".qrt-follower",
        background: "rgba(222,225,230,1)",
      });
    });
    $(".qrt-cursor-color").mouseout(function () {
      anime({
        targets: ".qrt-follower",
        background: "#fff",
      });
    });

    $(".qrt-input").keyup(function () {
      if ($(this).val()) {
        $(this).addClass("qrt-active");
      } else {
        $(this).removeClass("qrt-active");
      }
    });
    if ($("div").is("#map")) {
      mapboxgl.accessToken =
        "pk.eyJ1Ijoic3Rvc2NhciIsImEiOiJja2VpbDE4b2UwbDg3MnNwY2d3YzlvcDV5In0.e26tLedpKwxrkOmPkWhQlg";
      var map = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/stoscar/ckggs77460wxw19ob8q5wldwf",
        center: [-79.3949, 43.643102],
        zoom: 14,
      });

      var marker = new mapboxgl.Marker().setLngLat([-79.3949, 43.643102]).addTo(map);
    }
  });
});
