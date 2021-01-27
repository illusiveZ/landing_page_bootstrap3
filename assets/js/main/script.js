/* --------------------------------------------
 MAIN FUNCTION
-------------------------------------------- */
$(document).ready(
  (function () {
    /* --------------------------------------------------------
      Animation upon page reveal
      ----------------------------------------------------------- */
    $(function ($) {
      "use strict";
      $(".animated").appear(function () {
        const elem = $(this);
        const animation = elem.data("animation");
        if (!elem.hasClass("visible")) {
          const animationDelay = elem.data("animation-delay");
          if (animationDelay) {
            setTimeout(function () {
              elem.addClass(animation + " visible");
            }, animationDelay);
          } else {
            elem.addClass(animation + " visible");
          }
        }
      });
    });

    /* ---------------------------------------------------------
      Closes the collapse menu on mobile view, except dropdown
      ---------------------------------------------------------- */
    $(function () {
      "use strict";
      $(".navbar-collapse ul li a:not(.dropdown-toggle)").on(
        "click",
        function (event) {
          $(".navbar-toggle:visible").click();
        }
      );
    });

    /* --------------------------------------------
      Sticky Settings
      -------------------------------------------- */
    $(function () {
      "use strict";
      if ($(".navbar-sticky").length > 0) {
        $(".navbar-sticky").sticky({ topSpacing: 0 });
        $(".navbar-sticky").css("z-index", "100");
        $(".navbar-sticky").addClass("bg-light");
        $(".navbar-sticky").addClass("top-nav-collapse");
      }
    });

    /* --------------------------------------------------------
	 ANIMATED SCROLL PAGE WITH ACTIVE MENU - BOOTSTRAP SROLLSPY
	----------------------------------------------------------- */
    $(function () {
      "use strict";
      $(
        ".navbar-op ul li a, .navbar-op a.navbar-brand, .intro-direction a, a.go-to-top"
      ).on("click", function (event) {
        event.preventDefault();
        var hash = this.hash;

        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          900,
          function () {
            window.location.hash = hash;
          }
        );
      });
    });

    /* --------------------------------------------------------
       Navbar Fixed To Top of Page On Scroll 
      ----------------------------------------------------------- */
    $(function () {
      "use strict";
      if ($(".navbar-standart").length > 0) {
        $(".navbar-cscheme").addClass("top-nav-collapse");
      } else {
        $(window).scroll(function () {
          if ($(".navbar").offset().top > 10) {
            $(".navbar-cscheme").addClass("top-nav-collapse");
          } else {
            $(".navbar-cscheme").removeClass("top-nav-collapse");
          }
        });
      }
    });

    /* --------------------------------------------------------
       Go To Top
      ----------------------------------------------------------- */
    $(function () {
      "use strict";
      if ($("a.go-to-top").length > 0) {
        $("a.go-to-top").fadeOut();
        $(window).scroll(function () {
          if ($(".navbar").offset().top > 1200) {
            $("a.go-to-top").fadeIn();
          } else {
            $("a.go-to-top").fadeOut();
          }
        });
      }
    });

    /* --------------------------------------------------------
      Bootstrap Toggle Tooltip
      ----------------------------------------------------------- */
    $(function () {
      "use strict";
      $('[data-toggle="tooltip"]').tooltip();
    });

    /* --------------------------------------------------------
       Count To Settings 
      ----------------------------------------------------------- */
    $(function () {
      "use strict";
      $(".mid-banner-number").appear(function () {
        const dataperc = $(this).attr("data-perc");
        $(this).each(function () {
          $(this).find(".mid-banneror").delay(6000).countTo({
            from: 10,
            to: dataperc,
            speed: 3000,
            refreshInterval: 50,
          });
        });
      });
    });

    /* --------------------------------------------------------
       Testimonail Owl Carousel 
      ----------------------------------------------------------- */
    $(function () {
      "use strict";

      const owlSectionThreeItem = $("#owlSectionThreeItem");
      owlSectionThreeItem.owlCarousel({
        autoPlay: 5000,
        items: 3,
        itemsDesktop: [1000, 3],
        itemsDesktopSmall: [900, 3],
        itemsTablet: [600, 1],
        itemsMobile: false,
      });
    });

    /* --------------------------------------------------------
       Store Owl Carousel
      -----------------------------------------------------------  */
    $(function () {
      "use strict";
      const owlShop = $("#owlShop");

      owlShop.owlCarousel({
        slideSpeed: 1000,
        autoPlay: true,
        pagination: false,
        items: 4,
      });

      $(".shop-control-next").on("click", function () {
        owlShop.trigger("owl.next");
      });
      $(".shop-control-prev").on("click", function () {
        owlShop.trigger("owl.prev");
      });
    });

    /* --------------------------------------------------------
      Page Loader Settings
      ----------------------------------------------------------- */
    $(function () {
      "use strict";
      $("body").imagesLoaded(function () {
        $("#pageloader").delay(800).fadeOut("slow");
      });
    });
  })(jQuery)
);

$(window).load(function () {
  /* --------------------------------------------------------
       Masonry Grid Settings
      ----------------------------------------------------------- */
  $(function () {
    "use strict";

    const $portfolioMasonryOne = $(".portfolio-masonry-one").isotope({
      itemSelector: ".portfolio-masonry-one-item",
      masonry: {
        columnWidth: 180,
        gutter: 10,
      },
    });

    const $portfolioMasonryOneFullwidth = $(
      ".portfolio-masonry-one-fullwidth"
    ).isotope({
      itemSelector: ".portfolio-masonry-one-item",
      masonry: {
        columnWidth: 180,
        gutter: 10,
      },
    });

    const $portfolioMasonryTwo = $(".portfolio-masonry-two").isotope({
      itemSelector: ".portfolio-masonry-two-item",
      masonry: {
        columnWidth: 250,
        gutter: 10,
      },
    });

    const $portfolioMasonryTwoFullwidth = $(
      ".portfolio-masonry-two-fullwidth"
    ).isotope({
      itemSelector: ".portfolio-masonry-two-item",
      masonry: {
        columnWidth: 250,
        gutter: 10,
      },
    });

    const $portfolio = $(".portfolio").isotope({
      itemSelector: ".portfolio-item",
      masonry: {
        rowHeight: 280,
      },
    });

    $("ul.filters li a").on("click", function () {
      const filterValue = $(this).attr("data-filter");
      $portfolioMasonryOne.isotope({ filter: filterValue });
      $portfolioMasonryOneFullwidth.isotope({ filter: filterValue });
      $portfolioMasonryTwo.isotope({ filter: filterValue });
      $portfolioMasonryTwoFullwidth.isotope({ filter: filterValue });
      $portfolio.isotope({ filter: filterValue });
    });

    $("ul.filters li a").on("click", function () {
      $("ul.filters li a").removeClass("active");
      $(this).addClass("active");
    });
  });
});
