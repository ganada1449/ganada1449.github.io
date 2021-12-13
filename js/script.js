window.onload = function () {
    AOS.init();
}

$(document).ready(function () {

    $(window).scroll(function () {
        var scY = $(window).scrollTop();

        if (scY >= 350) {
            $('.gotop').addClass('gotop-active');
        } else {
            $('.gotop').removeClass('gotop-active');
        }

    });

    $('.gotop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        });
    });

    $(".header-menu-icon").click(function () {
        if ($(".header-menu").is(":visible")) {
            $(".header-menu").slideUp();
        } else {
            $(".header-menu").slideDown();
        }
    })

    $(".header-close").click(function () {
        if ($(".header-menu").is(":visible")) {
            $(".header-menu").slideUp();
        }
    })

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
            el: '.sw-pub-pg',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });

    var sw_red = new Swiper('.sw-red', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.sw-red-pg',
            clickable: true,
        },

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

    $('.sw-red').mouseenter(function () {
        // sw_red.autoplay.stop();
    })
    $('.sw-red').mouseleave(function () {
        // sw_red.autplay.start();
    })

    var red_tit = [{
            title: 'LG생활건강',
            date: '10. 23 ~ 11. 01',
            work: 'Font : Noto Sans KR',
            ori: 'https://www.lghnh.com:984/index.jsp',
            pro: 'https://ganada1449.github.io/work/lg/index_process.html',
            job: 'https://ganada1449.github.io/work/lg/index.html',
        },
        {
            title: '베스킨라빈스',
            date: '11. 20 ~ 11. 27',
            work: 'Font : Nanum Gothic',
            ori: 'http://www.baskinrobbins.co.kr/',
            pro: 'https://ganada1449.github.io/work/baskinrobbinson/index_process.html',
            job: 'https://ganada1449.github.io/work/baskinrobbinson/index.html',
        },
        {
            title: 'H&M',
            date: '12.08 ~ 12.10',
            work: 'Font : Nanum Gothic, Roboto',
            ori: 'https://www2.hm.com/ko_kr/index.html',
            pro: 'https://ganada1449.github.io/work/hm/index_process.html',
            job: 'https://ganada1449.github.io/work/hm/index.html',
        }

    ]
    var red_txt_tit = $('.red-txt-tit')
    var red_txt_box_date = $('.red-txt-box-date')
    var red_txt_box_work = $('.red-txt-box-work')

    var red_txt_box_ori = $('.ori_link')
    var red_txt_box_pro = $('.pro_link')
    var red_txt_box_job = $('.work_link')


    function changeTxt(_index) {
        var temp = red_tit[_index];
        red_txt_tit.text(temp.title);
        red_txt_box_date.text(temp.date);
        red_txt_box_work.text(temp.work);
        red_txt_box_ori.attr('href', temp.ori)
        red_txt_box_pro.attr('href', temp.pro)
        red_txt_box_job.attr('href', temp.job)
    }

    changeTxt(0)


    var big_red = $('.big-red')
    big_red.eq(3).show();

    sw_red.on('slideChange', function () {
        big_red.hide();
        big_red.eq(sw_red.activeIndex).show();
        changeTxt(sw_red.realIndex)
    });

    // photoshop 성취율
    var photoshop = new ProgressBar.Line(skill_photoshop, {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 1200,
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
        duration: 1200,
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
        duration: 1200,
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
        duration: 1200,
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
        duration: 1200,
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
        duration: 1200,
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

        if (scY > 300) {
            photoshop.animate(0.8);
            illust.animate(0.75);
            html.animate(0.8);
            css.animate(0.75);
            js.animate(0.7);
            jq.animate(0.7);
        }
    });

    $('.mbti_img').waypoint(function (dir) {
        if (dir == "down") {
            $('.mbti_img').addClass('mbti_img_focus');
        } else {
            // $('.mbti_img').removeClass('mbti_img_focus');
        }
    }, {
        offset: '90%'
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

    $('.epi-img-tra').waypoint(function (dir) {
        if (dir == "down") {
            $('.epi-img-tra').addClass('epi-img-tra-active');
        }
    }, {
        offset: '100%'
    });

    $('.epi-img-con').waypoint(function (dir) {
        if (dir == "down") {
            $('.epi-img-con').addClass('epi-img-con-active');
        }
    }, {
        offset: '50%'
    });

    $('.epi-img-exhi').waypoint(function (dir) {
        if (dir == "down") {
            $('.epi-img-exhi').addClass('epi-img-exhi-active');
        }
    }, {
        offset: '100%'
    });

    $(".etc-sample").niceScroll({
        cursorwidth: "20px",
        cursoropacitymax: 0.5,
        boxzoom: true,
    });
});