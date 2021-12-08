window.onload = function () {
    AOS.init();
}

$(document).ready(function () {

    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {
        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }
            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });

    new Swiper('.sw-pub', {
        slidesPerView: 1,
        spaceBetween: 400,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    });


    var sw_red = new Swiper('.sw-red', {
        slidesPerView: 3,
        // slidesPerGroup: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,

        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
    });

    var red_tit = [{
            title: 'LG생활건강',
            date: '10. 23 ~ 11. 01',
            work: 'Font : Noto Sans KR',
        },
        {
            title: '베스킨라빈스',
            date: '11. 20 ~ 11. 27',
            work: 'Font : Noto Sans KR',
        },
        {
            title: 'H&M',
            date: '10. 23 ~ 11. 01',
            work: 'Font : Noto Sans KR',
        }

    ]
    var red_txt_tit = $('.red-txt-tit')
    var red_txt_box_date = $('.red-txt-box-date')
    var red_txt_box_work = $('.red-txt-box-work')

    function changeTxt(_index) {
        var temp = red_tit[_index];
        red_txt_tit.text(temp.title);
        red_txt_box_date.text(temp.date);
        red_txt_box_work.text(temp.work);
    }

    changeTxt(0)


    var big_red = $('.big-red')
    big_red.eq(3).show();

    sw_red.on('slideChange', function () {
        big_red.hide();
        big_red.eq(sw_red.realIndex).show();

        changeTxt(sw_red.realIndex)

    });

    // photoshop 성취율
    var photoshop = new ProgressBar.Line(skill_photoshop, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffc279',
        trailColor: '#ececec',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        }
    });
    var illust = new ProgressBar.Line(skill_illust, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffc279',
        trailColor: '#ececec',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        }
    });
    var html = new ProgressBar.Line(skill_html, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffc279',
        trailColor: '#ececec',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        }
    });
    var css = new ProgressBar.Line(skill_css, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffc279',
        trailColor: '#ececec',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        }
    });
    var js = new ProgressBar.Line(skill_js, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffc279',
        trailColor: '#ececec',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        }
    });
    var jq = new ProgressBar.Line(skill_jq, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        color: '#ffc279',
        trailColor: '#ececec',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%'
        }
    });

    $(window).scroll(function () {
        // 스크롤바의 위치 값
        var scY = $(window).scrollTop();
        // console.log(scY)

        if (scY > 800) {
            photoshop.animate(1.0);
            illust.animate(1.0);
            html.animate(1.0);
            css.animate(1.0);
            js.animate(1.0);
            jq.animate(1.0);
        }
    });


    $('.mbti_img').waypoint(function (dir) {
        if (dir == "down") {
            $('.mbti_img').addClass('mbti_img_focus');
        } else {
            // $('.mbti_img').removeClass('mbti_img_focus');
        }
    }, {
        offset: '70%'
    });


    $('.slogan-name').waypoint(function (dir) {
        if (dir == "down") {
            $('.slogan-name').addClass('slogan-name-active');
        } else {
            // $('.mbti_img').removeClass('mbti_img_focus');
        }
    }, {
        offset: '70%'
    });



});