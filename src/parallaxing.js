/**
 * parallaxing - A jQuery plugin for creating parallax backgrounds.
 * @version v1.0.0
 * @link 
 * @author Bc. Martin Tesař
 * @license The MIT License (MIT)
**/

(function ($) {
    var $window = $(window);

    $.fn.parallaxing = function () {
        //variables only got from data-atributes and main element
        var uniID = 'parallaxing-' + Math.round(new Date().getTime() + (Math.random() * 100));
        var width = this.outerWidth();
        var bleed = "0";
        var img = this.attr('data-parallaxing-img');
        var height = this.outerHeight();
        var speedmarker = 0;
        var attr = this.attr('data-parallaxing-speed');
        var dataBleed = this.attr('data-parallaxing-bleed');
        var scrollTop = $window.scrollTop();
        var $mirror = this;
        var elementOffset = $mirror.offset().top;
        var distance = (elementOffset - scrollTop);
        var speed = '';
        var distanceSpeed = '';
        var distanceLeft = '';
        var parallaxing = '';

        this.attr('data-parallaxing-id', uniID);
        if (typeof attr !== typeof undefined && attr !== false) {
            if ($.isNumeric(attr)) {
                if (attr <= 1 && attr >= 0) {
                    speedmarker = attr;
                }
            }
        }
        if (typeof dataBleed !== typeof undefined && dataBleed !== false) {
            bleed = dataBleed;
        }
        // Main frame css
        this.css({
            'display': 'flex',
            'box-sizing': 'border-box',
            'flex-wrap': 'wrap'
        });
        // distance from top of window
        speed = (distance * -1) * speedmarker;
        distanceSpeed = (distance + speed) * -1;
        distanceLeft = this.position().left;
        //element background window - main magic!            
        parallaxing = '<div class="parallaxing-window" id="' + uniID + '" style="padding:' + bleed + 'px 0px;box-sizing:border-box;margin-top:-' + bleed + 'px;transition:0s all;box-sizing:content-box;overflow:hidden;position:fixed;left:' + distanceLeft + 'px;top:' + distance + 'px;z-index:-100;height:' + height + 'px;width:' + width + 'px"><div style="background:url(' + img + ') center center no-repeat;width:100vw;height:100vh;float:left;position:absolute;top: ' + distanceSpeed + 'px;left:50%;transform:translateX(-50%);background-size:cover;"></div></div>';
        //appending of magic
        return $('body').prepend(parallaxing);
    };

    //data atribute call
    $("[data-parallaxing]").each(function () {
        $(this).parallaxing();
    });

    //on scroll call of function
    $window.on('scroll', function () {
        $.parallaxingFollow();
    });

    //following
    $.parallaxingFollow = function () {
        $(".parallaxing-window").each(function () {
            var scrollTop = $window.scrollTop(),
                    id = $(this).attr('id'),
                    speedmarker = 0,
                    $original = $("[data-parallaxing-id='" + id + "']"),
                    elementOffset = $original.offset().top,
                    distance = (elementOffset - scrollTop),
                    attr = $original.attr('data-parallaxing-speed'),
                    speed = '',
                    distanceSpeed = '';

            $(this).css('top', distance);
            if (typeof attr !== typeof undefined && attr !== false) {
                if ($.isNumeric(attr)) {
                    if (attr <= 1 && attr >= 0) {
                        speedmarker = attr;
                    }
                }
            }
            speed = (distance * -1) * speedmarker;
            distanceSpeed = (distance + speed) * -1;
            $(this).find('div').css('top', distanceSpeed);

        });
    };

    //on resize call of function
    $(window).on('resize', function () {
        $.parallaxingResize();
    });

    //resizing
    $.parallaxingResize = function () {
        $(".parallaxing-window").each(function () {
            var id = $(this).attr('id'),
                    $original = $("[data-parallaxing-id='" + id + "']"),
                    originalWidth = $original.outerWidth(),
                    distanceLeft = $original.position().left,
                    originaHeight = $original.outerHeight();

            $(this).width(originalWidth);
            $(this).height(originaHeight);
            $(this).css('left', distanceLeft + 'px');
        });
    };


    //destroy of all, called
    $.fn.parallaxingDestroy = function () {
        var id = this.attr('data-parallaxing-id');
        this.removeAttr("data-parallaxing-id");
        this.removeAttr('style');
        $('#' + id).remove();
    };

}(jQuery));