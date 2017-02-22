$(document).ready(function() {
    setHeight();
    quoteFade();
});

$(window).bind("load",function() {
    setHeight();
});

$(window).resize(function() {
   setHeight(); 
});

$(document).scroll(function() {
    quoteFade();
});

function quoteFade() {
    var windowHeight = $(window).height()/5;
    $('.fade-section').each(function() {
        var $fSection = $(this);
        if ($(window).scrollTop() > ($(this).offset().top - windowHeight)) {
            setTimeout(function() {
                $fSection.find('.q1').addClass("quote-visible");
            },1000);
            setTimeout(function() {
                $fSection.find('.q2').addClass("quote-visible");
            },1500);
            setTimeout(function() {
                $fSection.find('.q3').addClass("quote-visible");
            },2000);
            setTimeout(function() {
                $fSection.find('.q4').addClass("quote-visible");
            },2500);
            setTimeout(function() {
                $fSection.find('.q5').addClass("quote-visible");
            },3000);
            setTimeout(function() {
                $fSection.find('.q6').addClass("quote-visible");
            },3500);
        }
    });
}

function setHeight() {
    $('.set-height-outer .set-height,.set-height2').css("height","auto");
    $('.set-height-outer .vertical-inner').css("padding-top","0");
    $('.set-height-outer').each(function() {
        var maxHeight=Math.max.apply(null,$(this).find(".set-height").map(function(){return $(this).outerHeight();}).get());
        var maxHeight2=Math.max.apply(null,$(this).find(".set-height2").map(function(){return $(this).outerHeight();}).get());
        $(this).find('.set-height').each(function(){
        	var $sh = $(this);
        	var heightDifference = (maxHeight - $sh.outerHeight())/2;

        	$sh.css("height",maxHeight);
        	if (heightDifference>2 && $sh.hasClass("vertical-center")) {
        		$sh.find(".vertical-inner").css("padding-top",heightDifference+"px");
        	}
        });
        $(this).find('.set-height2').each(function(){
            var $sh2 = $(this);
            var heightDifference2 = (maxHeight2 - $sh2.outerHeight())/2;

            $sh2.css("height",maxHeight2);
            if (heightDifference2>2 && $sh2.hasClass("vertical-center")) {
                $sh2.find(".vertical-inner").css("padding-top",heightDifference2+"px");
            }
        });
    });
}
