function bankDetails() {
    var e = document.getElementById("bankIfsc").value;
    11 == e.length ? $.ajax({
        url: "../assets/frontend/layout/inc/bankAjax.php?ifsc=" + e,
        type: "POST",
        data: {
            ifsc: e
        },
        dataType: "json",
        success: function(e) {
            "0" == e[0].bankCity ? (document.getElementById("ifscError").style.display = "inline", $("#bankCity").val(""), $("#bankState").val(""), $("#bankName").val(""), $("#bankBranch").val("")) : (document.getElementById("chequeConfirm").disabled = !1, $("#bankCity").val(e[0].bankCity), $("#bankState").val(e[0].bankState), $("#bankName").val(e[0].bankName), $("#bankBranch").val(e[0].bankBranch))
        }
    }) : ($("#bankCity").val(""), $("#bankState").val(""), $("#bankName").val(""), $("#bankBranch").val(""), document.getElementById("chequeConfirm").disabled = !0)
}

function sms() {
    event.preventDefault();
    var e = (document.getElementById("errorText"), document.getElementById("phoneNumber").value);
    $.ajax({
        type: "POST",
        url: "../assets/frontend/layout/inc/trigger.php?phoneNumber=" + e,
        data: e,
        cache: !1
    }).done(function(e) {
        if (document.getElementById("errorDiv").style.display = "inline", 1 == e) document.getElementById("errorText").innerHTML = "Thank you for contacting bookchor!";
        else if (2 == e) {
            var t = "Message already sent on this number";
            document.getElementById("errorText").innerHTML = t
        } else if (3 == e) {
            var t = "Invalid Mobile Number. Please enter a 10-digit Number.";
            document.getElementById("errorText").innerHTML = t
        } else {
            var t = "Sorry please try again later!";
            document.getElementById("errorText").innerHTML = t
        }
    }).fail(function() {
        alert("FAIL");
        var e = "Sorry, something wrong, Please try again after some time.",
            t = setTimeout(function() {
                document.getElementById("errorText").innerHTML = e, clearTimeout(t)
            }, 1e3)
    })
}

function subscribe() {
    event.preventDefault();
    var e = document.getElementById("subscribe"),
        t = document.getElementById("subscribeConfirm"),
        n = document.getElementById("subscribeEmail").value;
    $.ajax({
        type: "POST",
        url: "../assets/frontend/layout/inc/trigger.php?subscribeEmail=" + n,
        data: n,
        cache: !1
    }).done(function(n) {
        e.style.display = "none", t.style.display = "initial"
    }).fail(function() {})
}

function deleteCart(e, t, n) {
    document.getElementById("cart" + e).style.visibility = "hidden", document.getElementById("cart_items"), document.getElementById("cart_total")
}

function pincodeDetails() {
    var e = document.getElementById("postal_code").value;
    6 == e.length ? $.ajax({
        url: "../webservices/pincode_check.php?type=city_state&pincode=" + e,
        type: "POST",
        data: {
            pincode: e
        },
        dataType: "json",
        success: function(s) {
            var test = JSON.stringify(s);
            var obj = JSON.parse(test);
            var e = obj.pincodeData "0" == e[0].city ? (document.getElementById("pincode-error").style.display = "inline", $("#cityaddress").val(""), $("#stateaddress").val("")) : (document.getElementById("saveAddress").disabled = !1, document.getElementById("pincode-error").style.display = "none", $("#cityaddress").val(e[0].city), $("#stateaddress").val(e[0].state))
        }
    }) : ($("#cityaddress").val(""), $("#stateaddress").val(""), document.getElementById("saveAddress").disabled = !0)
}

function pincodeDetailsSellBook() {
    var e = document.getElementById("editPincode").value;
    6 == e.length ? $.ajax({
        url: "../assets/frontend/layout/inc/pincodeAjax.php?pincode=" + e,
        type: "POST",
        data: {
            pincode: e
        },
        dataType: "json",
        success: function(e) {
            "0" == e[0].city ? ($("#pincodeError").html("<strong>Invalid pincode!!</strong>"), document.getElementById("pincodeError").style.display = "inline", $("#editCity").val(""), $("#editState").val("")) : "DELHI" != e[0].state ? ($("#pincodeError").html("<strong>This service is available only in Delhi!!</strong>"), document.getElementById("pincodeError").style.display = "inline") : (document.getElementById("saveAddress").disabled = !1, $("#pincodeError").html("<strong>Invalid pincode!!</strong>"), document.getElementById("pincodeError").style.display = "none", $("#editCity").val(e[0].city), $("#editState").val(e[0].state))
        }
    }) : ($("#editCity").val(""), $("#editState").val(""), document.getElementById("saveAddress").disabled = !0)
}

function addressFocus(e) {
    document.getElementById("addressMessage").innerHTML = "Edit Address", document.getElementById("editPhone").focus(), document.getElementById("editName").focus(), document.getElementById("editName").style.borderColor = "#F00", document.getElementById("saveAddress").value = e;
    var t = document.getElementById("name" + e).innerHTML,
        n = document.getElementById("address_line1" + e).innerHTML,
        d = document.getElementById("address_line2" + e).innerHTML,
        a = document.getElementById("landmark" + e).innerHTML,
        i = document.getElementById("city" + e).innerHTML,
        l = document.getElementById("state" + e).innerHTML,
        lat = document.getElementById("lat" + e).value,
        lng = document.getElementById("lng" + e).value,
        o = document.getElementById("pincode" + e).innerHTML,
        r = document.getElementById("phone" + e).innerHTML;
    $("#editName").val(t), $("#address_line1").val(n), $("#address_line2").val(d), $("#editLandmark").val(a), $("#cityaddress").val(i), $("#stateaddress").val(l), $("#postal_code").val(o), $("#editPhone").val(r), $("#saveAddress").val(e), changecoord(lat, lng)
}

function cancelAddress() {
    $("#editName").val(""), $("#editAddressLine1").val(""), $("#editAddressLine2").val(""), $("#editLandmark").val(""), $("#editCity").val(""), $("#editState").val(""), $("#editPincode").val(""), $("#editPhone").val(""), document.getElementById("saveAddress").value = "0", document.getElementById("addressMessage").innerHTML = "Add a new address", document.getElementById("pincodeError").style.display = "none", document.getElementById("saveAddress").disabled = !1
}