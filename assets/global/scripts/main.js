function loadsearchBooks(t, e, o, c) {
    $("#loadsearchbtn").remove(), $("#booksearchlist").append('<center id="bookloading"><div><img src="/images/loader.gif"  alt="loading" width="15%"  /></div></center>'), $.post("../../bc-pages/main/content/search-products-book.php", {
        search: t,
        starting_id: e,
        bc: o,
        Lzg4bEc1SURqeDVYOEw3cUJGMkRKQT09: c
    }, function(t) {
        $("#bookloading").remove(), $("#booksearchlist").append(t)
    })
}

function scrollbottom() {
    var t = document.getElementById("contactchat");
    t.scrollTop = t.scrollHeight
}

function go_back_function() {
    $(".search-btn").hasClass("show-search-icon") ? ($(".search-btn").removeClass("show-search-icon"), $(".search-box").fadeOut(0), $(".site-header-ak").css("display", "inline-block"), $(".search-btn").css("display", "inline-block")) : document.referrer === window.location.href ? history.go(-2) : -1 !== document.referrer.indexOf(window.location.host) ? history.go(-1) : window.location.href = "https://www.bookchor.com"
}
$("#chatenter").on("click", function(t) {
    var e = document.getElementById("chatinput").value;
    e && (document.getElementById("chatinput").value = "", $.post("/assets/frontend/layout/ajax/send_chat.php", {
        chatmsg: e,
        customer_id: customer_id
    }, function(t) {
        $("#contactchat").append(t);
        var e = document.getElementById("contactchat");
        e.scrollTop = e.scrollHeight
    }))
}), $("#chatinput").on("keyup", function(t) {
    if (13 == t.keyCode) {
        var e = document.getElementById("chatinput").value;
        e && (document.getElementById("chatinput").value = "", $.post("/assets/frontend/layout/ajax/send_chat.php", {
            chatmsg: e,
            customer_id: customer_id
        }, function(t) {
            $("#contactchat").append(t);
            var e = document.getElementById("contactchat");
            e.scrollTop = e.scrollHeight
        }))
    }
}), $(".btnmodal").on("click", function(t) {
    var e = $(this).attr("n");
    document.getElementById("jobtitle").options[e].selected = "selected"
}), window.onload = function() {
    scrollbottom()
}, $(".next-slide-carousel").click(function() {
    var t = $(".item").length,
        e = $("div.active").index();
    e == t - 1 ? e = 0 : e++, $("#myCarousel").carousel(e);
    var o = $(".item:eq(" + e + ")").attr("bc-addr");
    document.getElementById("address_input").value = o
}), $(".select-box-condition").on("change", function(t) {
    document.getElementById("search-box-btn").value && $("form#search-form").submit()
});

function addcart(t) {
    $("body").append('<div id="cartloader" style="position:fixed;top:0;left:0;right:0;z-index:100000;"><img src="/images/recentloader.gif" class="loaderimg" alt="loading" width="100%"/></div>'), $.post("/assets/frontend/layout/ajax/addtocart.php", {
        product_id: t
    }, function(t) {
        $("#cartloader").remove();
        var a = Number(document.getElementById("totalcartitem").innerHTML);
        document.getElementById("totalcartitem").innerHTML = a + 1, navigator.vibrate(300)
    })
}

function addwishlist(t, a) {
    0 == a ? ($("body").append('<div id="cartloader" style="position:fixed;top:0;left:0;right:0;z-index:100000;"><img src="/images/recentloader.gif" class="loaderimg" alt="loading" width="100%"/></div>'), $.post("/assets/frontend/layout/ajax/addtowishlist.php", {
        product_id: t,
        add: 1
    }, function(a) {
        $("#cartloader").remove(), navigator.vibrate(300), $("#addtowishlisttest" + t).effect("shake", {
            direction: "up"
        }), $("#addtowishlisttest" + t).toggleClass("fa-heart-o fa-heart")
    })) : ($("body").append('<div id="cartloader" style="position:fixed;top:0;left:0;right:0;z-index:100000;"><img src="/images/recentloader.gif" class="loaderimg" alt="loading" width="100%"/></div>'), $.post("/assets/frontend/layout/ajax/addtowishlist.php", {
        product_id: t,
        add: 0
    }, function(a) {
        $("#cartloader").remove(), navigator.vibrate(300), $("#addtowishlisttest" + t).effect("shake", {
            direction: "up"
        }), $("#addtowishlisttest" + t).toggleClass("fa-heart fa-heart-o")
    }))
}