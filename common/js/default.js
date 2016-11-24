(function (window, document, $, undefined) {

    var app = {
        WINDOW_HEIGHT: $(window).height(),
        WINDOW_WIDTH: $(window).width(),
        isMobile: false,
        isTouch: false,
        isTablet: false,
        resizeTimeoutID: null,
        $body: $("body"),
        isMouseDown: false,
        slider: null,


        detectDevice: function () {
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                    app.isMobile = true;
                }
            })(navigator.userAgent || navigator.vendor || window.opera);
            if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
                app.isTouch = true;
                app.$body.addClass("touch");
            } else {
                app.$body.addClass("no-touch");
            }

            app.isTablet = (!app.isMobile && app.isTouch);
        },
        resizeListener: function () {
            if (!app.isTouch) {
                $(window).resize(function () {
                    clearTimeout(app.resizeTimeoutID);
                    app.resizeTimeoutID = setTimeout(app._windowResize, 500);
                });
            } else {
                window.addEventListener('orientationchange', function () {
                    app._windowResize();
                });
            }
        },
        _windowResize: function () {
            app.WINDOW_HEIGHT = $(window).height();
            app.WINDOW_WIDTH = $(window).width();

        },
        initAppScroll: function () {
            // mobile-apps-detial-container
            console.log(app.isMobile);
            $('.mobile-serv-hover a').click(function () {
                $('html,body').animate({
                        scrollTop: $(".mad-container").offset().top - (app.isMobile ? -10 : 50)
                    },

                    'slow');
                //console.log("mobile-apps-detial-container")
            })
        },
        smoothScroll: function () {
            $('.car-services li a[href^="#"]').click(function () {
                var target = $(this.hash);
                if (target.length == 0) target = $('a[name="' + this.hash.substr(1) + '"]');
                if (target.length == 0) target = $('html');
                $('html, body').animate({scrollTop: target.offset().top - 130}, 500);
                return false;
            });
        },
        matchHeight: function () {
            $('.matchHeight').matchHeight();
        },
        bxSlider: function () {
            var isArabic = $('body').hasClass('lang-ar');
            var swiperStatus = $('.swiper-container').length;
            console.log(swiperStatus);
            if (swiperStatus) {
                var swiper = new Swiper('.swiper-container', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 3,
                    spaceBetween: 20,
                    breakpoints: {
                        991: {
                            slidesPerView: 2
                        },

                        767: {
                            slidesPerView: 1.5,
                            spaceBetween: 0,
                            nextButton: false,
                            prevButton: false,
                            spaceBetween: 15
                        }
                    }
                });
            }
        },
        initDatePicker: function () {
            $("#datepicker").datepicker();
        },
        accordion: function () {
            $(".accordion").accordion({
                header: "h4",
                active: false,
                collapsible: true
            });
        },
        chat: function () {
            $(".overlay-questions .btn2").click(function(){
                $(".online-chat").hide();
                $(".chat-start").fadeIn();
            });
        },
        init: function () {
            app.detectDevice();
            app.resizeListener();
            app._windowResize();
            app.initAppScroll();
            app.smoothScroll();
            //app.matchHeight();
            app.bxSlider();
            //app.initDatePicker();
            app.accordion();
            app.chat();
        }
    };

    window.app = app;
})
(window, document, jQuery);

$(function () {
    $(".mobile-app-wrapper > ul > li").click(function(){
        var divToToggle = $( $(this).find("a").attr('href') );
        $(".mob-ser-detail:visible").not(divToToggle).slideUp("slow");
        divToToggle.slideToggle("slow");
    });

    $('.mobile-app-wrapper > ul > li').click(function(){
        return false;
    })

});

function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

$(document).scroll(function () {
    var y = $(document).scrollTop(),
        header = $(".second-main-nav");
    if (y >= 250) {
        header.css({position: "fixed", "top": "0", "left": "0"});
    } else {
        header.css("position", "static");
    }
});

var timeOut;
function scrollToTop() {
    if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
        window.scrollBy(0,-50);
        timeOut=setTimeout('scrollToTop()',10);
    }
    else clearTimeout(timeOut);
}

function DropDown(el) {
    this.dd = el;
    this.initEvents();
}
DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.dd.on('click', function(event){
            $(this).toggleClass('active');
            event.stopPropagation();
        });
    }
}

$(function() {

    var dd = new DropDown( $('#dd') );

    $(document).click(function() {
        // all dropdowns
        $('.wrapper-dropdown-5').removeClass('active');
    });

});

$(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        spaceBetween: 0,
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 20
            }
        }
    });

});

$(document).ready(function () {
    $("#siteSearch").click(function(event){
        var FAQVal = $.trim($("#faqFieldId").val());
        if ( FAQVal == '' || FAQVal == "How do I?" ){
            alert("Please use questions or keywords to search");
            //event.preventDefault();
            return false;
        }else{
            //alert('not');
            $("#askForm").submit();
        }
    });

    app.init();

});