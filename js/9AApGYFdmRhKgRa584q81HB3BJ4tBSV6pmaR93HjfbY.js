var SimplifyHeader=function(){function init(){$(".header-nav").data("blurred",false);setHeaderTransparency();$(window).scroll(function(){setHeaderTransparency()})}function setHeaderTransparency(){var scrollTop=$(window).scrollTop(),header=$(".header-nav"),blurred="blurred";if(scrollTop>50&&header.data(blurred)===false){header.data(blurred,true).animate({backgroundColor:"rgba(51, 51, 51, 0.80)"})}else{if(scrollTop<50&&header.data(blurred)===true){header.data(blurred,false).animate({backgroundColor:"transparent"})}}}return{init:init}}();$(document).ready(function(){SimplifyHeader.init()});