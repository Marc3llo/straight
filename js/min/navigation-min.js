$(document).ready(function(){var e=$("#site-navigation"),i=$(".menu"),n=$("a.menu-toggle");$(n).on("click",function(n){n.preventDefault(),i.slideToggle(function(){e.hasClass(".hidden")?i.removeAttr("style"):i.addClass("hidden")})}),$(".page_item_has_children").mouseenter(function(){var e=$(this).position();$(this).children("ul.children").css("left",e.left)}),$(".page_item_has_children .page_item_has_children").mouseenter(function(){var e=$(this).position(),i=$(this).width();console.log(e),$(this).children("ul.children").css("left",e.left+i)}),$(".nav .nav-link").click(function(){$(".nav .nav-link").each(function(){$(this).removeClass("active-nav-item")}),$(this).addClass("active-nav-item"),$(".nav .more").removeClass("active-nav-item")})});