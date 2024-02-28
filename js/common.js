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