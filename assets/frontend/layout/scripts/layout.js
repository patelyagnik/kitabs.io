var Layout = function() {
    var e = !1,
        a = !1,
        t = !1,
        o = !1,
        i = !1,
        n = [],
        s = function() {
            for (var e in n) {
                n[e].call()
            }
        };
    var r = function() {
        var e = $(".color-panel");
        $(".icon-color", e).click(function() {
            $(".color-mode").show(), $(".icon-color-close").show()
        }), $(".icon-color-close", e).click(function() {
            $(".color-mode").hide(), $(".icon-color-close").hide()
        }), $("li", e).click(function() {
            var a, t = $(this).attr("data-style");
            a = t, $("#style-color").attr("href", "../../assets/frontend/layout/css/themes/" + a + ".css"), $(".corporate .site-logo img").attr("src", "../../assets/frontend/layout/img/logos/logo-corp-" + a + ".png"), $(".ecommerce .site-logo img").attr("src", "../../assets/frontend/layout/img/logos/logo-shop-" + a + ".png"), $(".inline li", e).removeClass("current"), $(this).addClass("current")
        })
    };
    return {
        init: function() {
            var n, l;
            r(), "rtl" === $("body").css("direction") && (e = !0), a = !!navigator.userAgent.match(/MSIE 8.0/), t = !!navigator.userAgent.match(/MSIE 9.0/), o = !!navigator.userAgent.match(/MSIE 10.0/), i = !!navigator.userAgent.match(/MSIE 11.0/), o && jQuery("html").addClass("ie10"), i && jQuery("html").addClass("ie11"), a ? $(window).resize(function() {
                l != document.documentElement.clientHeight && (n && clearTimeout(n), n = setTimeout(function() {
                    s()
                }, 50), l = document.documentElement.clientHeight)
            }) : $(window).resize(function() {
                n && clearTimeout(n), n = setTimeout(function() {
                    s()
                }, 50)
            }), (a || t) && jQuery("input[placeholder]:not(.placeholder-no-fix), textarea[placeholder]:not(.placeholder-no-fix)").each(function() {
                var e = jQuery(this);
                "" == e.val() && "" != e.attr("placeholder") && e.addClass("placeholder").val(e.attr("placeholder")), e.focus(function() {
                    e.val() == e.attr("placeholder") && e.val("")
                }), e.blur(function() {
                    "" != e.val() && e.val() != e.attr("placeholder") || e.val(e.attr("placeholder"))
                })
            }), $(".search-btn").click(function() {
                if ($(".search-btn").hasClass("show-search-icon")) $(window).width() > 767 ? $(".search-box").fadeOut(300) : ($(".search-box").fadeOut(200), $(".site-header-ak").css("display", "inline-block"), $(".search-box").css("width", "auto"), $(".search-btn").css("display", "inline-block")), $(".search-btn").removeClass("show-search-icon");
                else {
                    if ($(window).width() > 767) $(".search-box").fadeIn(300);
                    else {
                        var e = $(window).width();
                        e = 90 * e / 100, $(".search-btn").css("display", "none"), $(".site-header-ak").css("display", "none"), $(".search-box").css("width", e), $(".search-box").fadeIn(200)
                    }
                    $(".search-btn").addClass("show-search-icon")
                }
            }), 0 != $(".search-btn").size() && ($(".search-box, .search-btn").on("click", function(e) {
                e.stopPropagation()
            }), $("body").on("click", function() {
                $(".search-btn").hasClass("show-search-icon") && ($(".search-btn").removeClass("show-search-icon"), $(".search-box").fadeOut(0), $(".site-header-ak").css("display", "inline-block"), $(".search-btn").css("display", "inline-block"))
            })), jQuery.fancybox && (jQuery(".fancybox-fast-view").fancybox(), jQuery(".fancybox-button").size() > 0 && (jQuery(".fancybox-button").fancybox({
                groupAttr: "data-rel",
                prevEffect: "none",
                nextEffect: "none",
                closeBtn: !0,
                helpers: {
                    title: {
                        type: "inside"
                    }
                }
            }), $(".fancybox-video").fancybox({
                type: "iframe"
            }))), $(".header .navbar-toggle span:nth-child(2)").addClass("short-icon-bar"), $(".header .navbar-toggle span:nth-child(4)").addClass("short-icon-bar"), $(".sidebar .dropdown > a").click(function(e) {
                $(this).next().hasClass("dropdown-menu") && (e.preventDefault(), 0 == $(this).hasClass("collapsed") ? ($(this).addClass("collapsed"), $(this).siblings(".dropdown-menu").slideDown(300)) : ($(this).removeClass("collapsed"), $(this).siblings(".dropdown-menu").slideUp(300)))
            }), jQuery("body").on("shown.bs.collapse", ".accordion.scrollable", function(e) {
                Layout.scrollTo($(e.target), -100)
            }), $(".header .navbar-toggle").click(function() {
                $(".header .navbar-collapse").hasClass("open") ? $(".header .navbar-collapse").slideDown(300).removeClass("open") : $(".header .navbar-collapse").slideDown(300).addClass("open")
            }), $(".scroller").each(function() {
                var a;
                a = $(this).attr("data-height") ? $(this).attr("data-height") : $(this).css("height"), $(this).slimScroll({
                    allowPageScroll: !0,
                    size: "7px",
                    color: $(this).attr("data-handle-color") ? $(this).attr("data-handle-color") : "#bbb",
                    railColor: $(this).attr("data-rail-color") ? $(this).attr("data-rail-color") : "#eaeaea",
                    position: e ? "left" : "right",
                    height: a,
                    alwaysVisible: "1" == $(this).attr("data-always-visible"),
                    railVisible: "1" == $(this).attr("data-rail-visible"),
                    disableFadeOut: !0
                })
            }), $(".header-navigation .dropdown").on("hover", function() {
                $(this).children(".header-navigation-content-ext").show() && $(".header-navigation-content-ext").height() >= $(".header-navigation-description").height() && $(".header-navigation-description").css("height", $(".header-navigation-content-ext").height() + 22)
            }), $(".mobi-toggler").on("click", function(e) {
                e.preventDefault(), $(".header").toggleClass("menuOpened"), $(".header").find(".header-navigation").toggle(300)
            })
        },
        initUniform: function(e) {
            e ? jQuery(e).each(function() {
                0 == $(this).parents(".checker").size() && ($(this).show(), $(this).uniform())
            }) : function() {
                if (jQuery().uniform) {
                    var e = $("input[type=checkbox]:not(.toggle), input[type=radio]:not(.toggle, .star)");
                    e.size() > 0 && e.each(function() {
                        0 == $(this).parents(".checker").size() && ($(this).show(), $(this).uniform())
                    })
                }
            }()
        },
        initTwitter: function() {
            var e, a, t, o, i, n;
            e = document, a = "script", t = "twitter-wjs", i = e.getElementsByTagName(a)[0], n = /^http:/.test(e.location) ? "http" : "https", e.getElementById(t) || ((o = e.createElement(a)).id = t, o.src = n + "://platform.twitter.com/widgets.js", i.parentNode.insertBefore(o, i))
        },
        initTouchspin: function() {
            $(".product-quantity .form-control").TouchSpin({
                buttondown_class: "btn quantity-down",
                buttonup_class: "btn quantity-up"
            }), $(".quantity-down").html("<i class='fa fa-angle-down'></i>"), $(".quantity-up").html("<i class='fa fa-angle-up'></i>"), $(".product-quantity-mob .form-control").TouchSpin({
                buttondown_class: "btn quantity-down-mob",
                buttonup_class: "btn quantity-up-mob"
            }), $(".quantity-down-mob").html("<i class='fa fa-minus'></i>"), $(".quantity-up-mob").html("<i class='fa fa-plus'></i>")
        },
        initFixHeaderWithPreHeader: function() {
            jQuery(window).scroll(function() {
                jQuery(window).scrollTop() > 37 ? jQuery("body").addClass("page-header-fixed") : jQuery("body").removeClass("page-header-fixed")
            })
        },
        initNavScrolling: function() {
            function e() {
                jQuery(window).scrollTop() > 60 ? jQuery(".header").addClass("reduce-header") : jQuery(".header").removeClass("reduce-header")
            }
            e(), jQuery(window).scroll(function() {
                e()
            })
        },
        initOWL: function() {
            $(".owl-carousel6-brands").owlCarousel({
                pagination: !1,
                navigation: !0,
                items: 6,
                addClassActive: !0,
                itemsCustom: [
                    [0, 1],
                    [320, 1],
                    [480, 2],
                    [700, 3],
                    [975, 5],
                    [1200, 6],
                    [1400, 6],
                    [1600, 6]
                ]
            }), $(".owl-carousel5").owlCarousel({
                pagination: !1,
                navigation: !0,
                items: 5,
                addClassActive: !0,
                itemsCustom: [
                    [0, 3],
                    [320, 3],
                    [480, 3],
                    [660, 3],
                    [700, 4],
                    [768, 4],
                    [992, 4],
                    [1024, 4],
                    [1200, 5],
                    [1400, 5],
                    [1600, 5]
                ]
            }), $(".owl-carousel4").owlCarousel({
                pagination: !1,
                navigation: !0,
                items: 4,
                addClassActive: !0
            }), $(".owl-carousel3").owlCarousel({
                pagination: !1,
                navigation: !0,
                items: 3,
                addClassActive: !0,
                itemsCustom: [
                    [0, 1],
                    [320, 1],
                    [480, 2],
                    [700, 3],
                    [768, 2],
                    [1024, 3],
                    [1200, 3],
                    [1400, 3],
                    [1600, 3]
                ]
            }), $(".owl-carousel2").owlCarousel({
                pagination: !1,
                navigation: !0,
                items: 2,
                addClassActive: !0,
                itemsCustom: [
                    [0, 1],
                    [320, 1],
                    [480, 2],
                    [700, 3],
                    [975, 2],
                    [1200, 2],
                    [1400, 2],
                    [1600, 2]
                ]
            })
        },
        initImageZoom: function() {
            $(".product-main-image").zoom({
                url: $(".product-main-image img").attr("data-BigImgSrc")
            })
        },
        initSliderRange: function() {
            $("#slider-range").slider({
                range: !0,
                min: 0,
                max: 500,
                values: [50, 250],
                slide: function(e, a) {
                    $("#amount").val("$" + a.values[0] + " - $" + a.values[1])
                }
            }), $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1))
        },
        scrollTo: function(e, a) {
            var t = e && e.size() > 0 ? e.offset().top : 0;
            e && ($("body").hasClass("page-header-fixed") && (t -= $(".header").height()), t += a || -1 * e.height()), jQuery("html,body").animate({
                scrollTop: t
            }, "slow")
        },
        addResponsiveHandler: function(e) {
            n.push(e)
        },
        scrollTop: function() {
            App.scrollTo()
        },
        gridOption1: function() {
            $(function() {
                $(".grid-v1").mixitup()
            })
        }
    }
}();