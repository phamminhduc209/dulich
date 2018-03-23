menuLeftOnload();
function menuLeftOnload() {
	var checkMneu = document.getElementById("mobile-menu-toggle").checked;
	if (checkMneu == true) {
	    document.getElementById("mobile-menu-toggle").checked = false;
	    document.getElementById('mainHideMenu').style.display = 'none';
	}
}

function menuLeft() {
	var checkMneu = document.getElementById("mobile-menu-toggle").checked;
	if (checkMneu == false) {
	    document.getElementById('mainHideMenu').style.display = 'block';
	} else {
	    document.getElementById("mobile-menu-toggle").checked = false;
	    document.getElementById('mainHideMenu').style.display = 'none';
	}
}
(function($){
	"use strict";
	// Slide Carousel
	$(document).ready(function () {
	    $(".owl-carousel").each(function (index, el) {
	        var config = $(this).data();
	        config.navText = ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'];
	        config.smartSpeed = "800";
	        if ($(this).hasClass('owl-style2')) {
	            config.animateOut = "fadeOut";
	            config.animateIn = "fadeIn";
	        }
	        if ($(this).hasClass('dotsData')) {
	            config.dotsData = "true";
	        }
	        $(this).owlCarousel(config);
	    });
	});

	$("ul.mobile-left>li>i").click(function () {
		if ($(this).hasClass("fa-plus")) {
		    $(this).removeClass("fa-plus");
		    $(this).addClass("fa-minus");
		} else {
		    $(this).removeClass("fa-minus");
		    $(this).addClass("fa-plus");
		}
		$(this).parent().children(".submenu").slideToggle();
	});
	$("ul.mobile-left li ul li i").click(function () {
		if ($(this).hasClass("fa-plus")) {
		    $(this).removeClass("fa-plus");
		    $(this).addClass("fa-minus");
		} else {
		    $(this).removeClass("fa-minus");
		    $(this).addClass("fa-plus");
		}
		$(this).parent().children("ul").slideToggle();
	});

	$(document).ready(function() {
        $(".connect_fanpage").click(function(){
            $(this).toggleClass("chetchamayne");
            $(".connect_fb_content").slideToggle('500');
        });
    });

    $(window).load(function() {
        $('#slider').nivoSlider();
    });

    // ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 200) {
		  $('#return-to-top').addClass('td-scroll-up-visible');
		} else {
		  $('#return-to-top').removeClass('td-scroll-up-visible');
		}
	});
	$('#return-to-top').click(function() {
		$('body,html').animate({
		  scrollTop : 0
		}, 'slow');
	});

    // $('#datetimepicker1').datetimepicker();

	$(document).ready(function(){
		var date_input=$('input[name="date"]'); //our date input has the name "date"
		var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
		date_input.datepicker({
			format: 'mm/dd/yyyy',
			container: container,
			todayHighlight: true,
			autoclose: true,
		})
	});

	$(document).ready(function(){
        $('.bxslidertour').bxSlider({
        pagerCustom: '#bx-pager-tour',
        auto: true,
        autoControls: true
        });
    });


	$(document).ready(function() {
       $(".imges").click(function(){
         $(this).toggleClass("addformbox");
         $(".form-dv").slideToggle('500');
        });      
  	});

	$(document).ready(function() {
         $(".tile-htl").click(function(){
           $(".content-box-hotline").slideToggle('500');
         });
    });

    hs.graphicsDir = '../lib/highslide/graphics/';
    hs.align = 'center';
    hs.transitions = ['expand', 'crossfade'];
    hs.outlineType = 'rounded-white';
    hs.wrapperClassName = 'controls-in-heading';
    hs.fadeInOut = true;
    hs.dimmingOpacity = 0.3;

    // Add the controlbar
    hs.addSlideshow({
        //slideshowGroup: 'group1',
        interval: 3500,
        repeat: false,
        useControls: true,
        fixedControls: false,
        overlayOptions: {
            opacity: 1,
            position: 'top right',
            hideOnMouseOut: false
        }
    });

    $('.salestour').each(function() {
    	$(this).parent().addClass('sales_tour')
    });

})(jQuery); // End of use strict

$(function(){
	/* Mega Menu */
	$('.mega-menu-title').click(function(){
		if($('.mega-menu-category').is(':visible')){
			$('.mega-menu-category').slideUp();
		} else {
			$('.mega-menu-category').slideDown();
		}
	})
    $('.mega-menu-category .nav > li').hover(function(){
    	$(this).addClass("active");
		$(this).find('.popup').stop(true,true).fadeIn('slow');
    },function(){
        $(this).removeClass("active");
		$(this).find('.popup').stop(true,true).fadeOut('slow');
    })
	$('.mega-menu-category .nav > li.view-more').click(function(e){
		if($('.mega-menu-category .nav > li.more-menu').is(':visible')){
			$('.mega-menu-category .nav > li.more-menu').stop().slideUp();
			$(this).find('a').text('More category');
		} else { 
			$('.mega-menu-category .nav > li.more-menu').stop().slideDown();
			$(this).find('a').text('Close menu');
		}
		e.preventDefault();
	})
});

/* Time Sale */
if (typeof(BackColor)=="undefined")
	BackColor = "white";
if (typeof(ForeColor)=="undefined")
	ForeColor= "black";
if (typeof(DisplayFormat)=="undefined")
	DisplayFormat = "<div class='day box-time-date'><span class='time-num time-day'>%%D%%</span>Days</div><div class='hour box-time-date'><span class='time-num'>%%H%%</span>Hrs</div><div class='min box-time-date'><span class='time-num'>%%M%%</span>Mins</div><div class='sec box-time-date'><span class='time-num'>%%S%%</span>Secs</div>";
if (typeof(CountActive)=="undefined")
	CountActive = true;
if (typeof(FinishMessage)=="undefined")
	FinishMessage = "";
if (typeof(CountStepper)!="number")
	CountStepper = -1;
if (typeof(LeadingZero)=="undefined")
	LeadingZero = true;
CountStepper = Math.ceil(CountStepper);
if (CountStepper == 0)
	CountActive = false;
var SetTimeOutPeriod = (Math.abs(CountStepper)-1)*1000 + 990;
function calcage(secs, num1, num2) {
	s = ((Math.floor(secs/num1)%num2)).toString();
	if (LeadingZero && s.length < 2)
		s = "0" + s;
	return s;
}
//function for slider
function CountBack_slider(secs,iid,j_timer) {
	if (secs < 0) {
		document.getElementById(iid).innerHTML = FinishMessage;
		document.getElementById('caption'+j_timer).style.display = "none";
		document.getElementById('heading'+j_timer).style.display = "none";
		return;
	}
	DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
	DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
	DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
	DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));
	
	var elems = document.getElementsByTagName('*'), i;
	for (i in elems) {
		if((' ' + elems[i].className + ' ').indexOf(' ' + iid + ' ')
				> -1) {
			elems[i].innerHTML = DisplayStr;
		}
	}
	
	$('.'+iid).innerHTML = DisplayStr;
	  if (CountActive)
		setTimeout(function(){CountBack_slider((secs+CountStepper),iid,j_timer)}, SetTimeOutPeriod);
}

//function default
function CountBack(secs,iid,j) {
	if (secs < 0) {
		document.getElementById(iid).innerHTML = FinishMessage;
		document.getElementById('caption'+j).style.display = "none";
		document.getElementById('heading'+j).style.display = "none";
		return;
	}
	DisplayStr = DisplayFormat.replace(/%%D%%/g, calcage(secs,86400,100000));
	DisplayStr = DisplayStr.replace(/%%H%%/g, calcage(secs,3600,24));
	DisplayStr = DisplayStr.replace(/%%M%%/g, calcage(secs,60,60));
	DisplayStr = DisplayStr.replace(/%%S%%/g, calcage(secs,1,60));
	document.getElementById(iid).innerHTML = DisplayStr;
	 if (CountActive)
		setTimeout(function(){CountBack((secs+CountStepper),iid,j)}, SetTimeOutPeriod);
}