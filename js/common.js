// JavaScript Document
'use strict';

window.addEventListener('load',function(){
  preventDefault();
},false)

function preventDefault() {
  const links = document.querySelectorAll('a[href="#"]');
  links.forEach(function(element){
    element.addEventListener('click',function(e){
      e.preventDefault();
    },false)
  })
}

// Select
$(".select").on("click", function(){
  $(this).addClass("active");
  $(this).children("ul").fadeIn("fast").scrollTop();

  if($(this).hasClass("active")) {
    $(".select").not(this).removeClass("active");
  }

  let headerOffset = $(this).offset().top;
  $(".header").animate({
    scrollTop : headerOffset - 20
  }, 400);
});

$(".select").children("ul").on("click", ".select__item", function(e){
  let selectValue = $(this).data("value"); // 보이는 ul의 값
  let selectText = $(this).text();
  let selectID = $(this).closest(".select").data("id");

  let selectHref = $(this).data("href");
  let folderName = location.pathname;

  e.stopPropagation();

  $(".select__item").removeClass('selected');
  $(this).addClass('selected');

  $(".select_wrap select option").each(function(){
    if($(this).val() == selectValue) {
      $(this).prop("selected", true);
      $(this).val(selectValue).change();
    }
  });

  $(`.select__value#${selectID}`).text(selectText);

  $(".select").removeClass("active");

  // 폴더명 추가
  if(folderName.indexOf("/")) {
    folderName = folderName.split("/");
    // 상품 설명 선택했을 때 href 이동
    location.href = location.origin + folderName + selectHref;
  } else {
    // 상품 설명 선택했을 때 href 이동
    location.href = location.origin + selectHref;
  }
});

$(document).on("click", function(e) {
  const target = e.target;
  if ($(target).closest(".select").length > 0) {
    return;
  }
  $(".select").removeClass("active");
});
