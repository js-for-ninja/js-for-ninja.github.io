function debounce(n,i,e){var o;return function(){var t=this,s=arguments,c=function(){o=null,e||n.apply(t,s)},l=e&&!o;clearTimeout(o),o=setTimeout(c,i),l&&n.apply(t,s)}}$(function(){var n=function(n){$(".timeline-block").each(function(){$(this).offset().top<=$(window).scrollTop()+$(window).height()*n&&$(this).find(".timeline-img").hasClass("is-hidden")&&$(this).find(".timeline-img, .timeline-content").removeClass("is-hidden").addClass("bounce-in")})};n(1),$(window).on("scroll",debounce(function(){n(.75)},100)),$(window).on("resize",debounce(function(){n(1)},100))});