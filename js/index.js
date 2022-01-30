function slider() {
    var swiper = new Swiper('.feedback .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: '.feedback .swiper-button-next',
            prevEl: '.feedback .swiper-button-prev',
        },
        pagination: {
            el: '.feedback .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                centeredSlides: false,
            },
            992: {
                slidesPerView: 5,
                centeredSlides: true,
            },
        }
    })
}

$(document).ready(function() {
    slider()

    $(".process__item-btn-show").click(function() {
        $(".process__item").removeClass("process__item--active")
        $(this).parents(".process__item").addClass("process__item--active")
        $(".process__item-hidden").slideUp()
        $(this).parent(".process__item-btn").siblings(".process__item-hidden").slideDown()
    })

    $(".process__item-btn-hidden").click(function() {
        $(".process__item").removeClass("process__item--active")
        $(".process__item-hidden").slideUp()
    })

    $(".process__item-show").click(function() {
        console.log(true)
        if ($(this).parents(".process__item").hasClass("process__item--active")) {
            $(this).parents(".process__item").removeClass("process__item--active")
            $(".process__item-hidden").slideUp()

        } else {
            $(this).parents(".process__item").addClass("process__item--active")
            $(this).siblings(".process__item-hidden").slideDown()
        }
    })

    $(".qa__item-btn").click(function() {
        if ($(this).parents(".qa__item").hasClass("qa__item--active")) {
            $(".qa__item").removeClass("qa__item--active")
        } else {
            $(".qa__item").removeClass("qa__item--active")
            $(this).parents(".qa__item").addClass("qa__item--active")
        }
    })

    $(".qa__item-show").click(function() {
        if ($(this).parents(".qa__item").hasClass("qa__item--active")) {
            $(".qa__item").removeClass("qa__item--active")
        } else {
            $(".qa__item").removeClass("qa__item--active")
            $(this).parents(".qa__item").addClass("qa__item--active")
        }
    })
})