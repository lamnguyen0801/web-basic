var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1.3,
    initialSlide: 2,
    loop: true,
    coverflowEffect: {
        rotate: 2,
        stretch: 0,
        depth: 60,
        modifier: 8,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
    },

    breakpoints: {
        376: {
            slidesPerView: 1.3,
            coverflowEffect: {
                rotate: 3,
                stretch: 0,
                depth: 50,
                modifier: 8,
                slideShadows: true,
            },
        },
        426: {
            slidesPerView: 1.5,
            coverflowEffect: {
                rotate: 3,
                stretch: 0,
                depth: 50,
                modifier: 10,
                slideShadows: true,
            },
        },
        576: {
            slidesPerView: 1.5,
            coverflowEffect: {
                rotate: 3,
                stretch: 1,
                depth: 50,
                modifier: 12,
                slideShadows: true,
            },
        },
        768: {
            slidesPerView: 1.8,
            coverflowEffect: {
                rotate: 0,
                stretch: 3,
                depth: 50,
                modifier: 16,
                slideShadows: true,
            },
        },
        992: {
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 10,
                depth: 50,
                modifier: 18,
                slideShadows: true,
            },
        },
        1200: {
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 10,
                depth: 50,
                modifier: 20,
                slideShadows: true,
            },
        }
    },
});