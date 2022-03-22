"use strict";

$(document).ready(function () {
  $(".to-up-button").fadeOut(0);
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 500) {
      $(".to-up-button").fadeIn(1000);
    } else {
      $(".to-up-button").fadeOut(1000);
    }
  });
  $(".to-up-button").on("click", function () {
    $(Window).scrollTop(0);
  });
  $(".search-icon").on("click", function () {
    $(".search-page").css("display", "block");
  });
  $(".search-page .finish-search-icon").on("click", function () {
    $(".search-page").css("display", "none");
  });
  $(".user-icon").on("click", function () {
    $(".login").css("display", "block");
  });
  $(".login .finish-search-icon").on("click", function () {
    $(".login").css("display", "none");
  });
  $(".responsive-bar").on("click", function () {
    $(".f-links").fadeToggle(1000);
  });
  $(".products .links ul li").on("click", function () {
    $(this).attr("class", "active").siblings().removeClass("active");
    $(".products .content .row .cart").each(function () {
      $($(this)).css("display", "none");
    });
    $($(this).attr("data-info")).css("display", "block");
  });
  $(".slider .arrow2").on("click", function () {
    $(".slider .row").css("transform", " translatex(-33.3%)");
  });
  $(".slider .arrow1").on("click", function () {
    $(".slider .row").css("transform", "translatex(0)");
  });
  $(".contact-page").on("click", function () {
    $(".login").css("display", "block");
  });
  $(".fa-shopping-cart").on("click", function () {
    $(".big-container").css("display", "none");
    $(".car-of-products").css("display", "block");
  });
  $(".fa-home").on("click", function () {
    $(".car-of-products").css("display", "none");
    $(".big-container").css("display", "block");
  });
  var numberofpices = 0;
  var totalofprice = 0;
  $(".btn-danger").one("click", function () {
    var numberofproducts = 1;
    numberofpices += 1;
    $(".number-of-pices").text(numberofproducts);
    $(".content .products").append($("<div ></div>").attr("class", "product").append($("<div></div>").attr("class", "img").append($("<img>").attr("src", $(this).attr("data-cont")))).append($("<div></div").attr("class", "text1").append($(this).siblings().clone()).append($("<div></div>").attr("class", "pices").append($("<Span>-</span>").attr("class", "muns").on("click", function () {
      if (parseInt($(this).next().text()) > 1) {
        numberofproducts -= 1;
        $(this).next().text(numberofproducts);
        totalofprice -= parseInt($(this).parent().prev().prev().text());
        $(".total-price-section .end").text(totalofprice);
        console.log($(this));
      }
    }), $("<Span>1</span>").attr("class", "number-of-pices"), $("<Span>+</span>").attr("class", "plus").on("click", function () {
      numberofproducts += 1;
      $(this).prev().text(numberofproducts);
      totalofprice += parseInt($(this).parent().prev().prev().text());
      $(".total-price-section .end").text(totalofprice);
    }))).append($("<div></div>").attr("class", "delet").append($("<i></i>").attr("class", "fas fa-trash-alt fa-2x").one("click", function () {
      numberofpices -= 1;
      totalofprice -= parseInt($(this).parent().prev().prev().prev().text()) * parseInt($(this).parent().prev().children().eq(1).text());
      $(".total-price-section .end").text(totalofprice);
      $(this).parent().parent().parent().remove();
      $(".number-up-car").text(numberofpices);
    })))));
    $(".number-up-car").text(numberofpices);
    totalofprice += parseInt($(this).prev().prev().text());
    $(".total-price-section .end").text(totalofprice);
  });
});
//# sourceMappingURL=main.dev.js.map
