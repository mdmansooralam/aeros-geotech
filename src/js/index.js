
//Testimonials Slider
new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            loop:true,

            breakpoints: {
                768: {
                slidesPerView: 2,
                spaceBetween: 16
                },
                991: {
                slidesPerView: 3,
                spaceBetween: 24
                },
            },

            navigation: {
                nextEl: '.slide-next',
                prevEl: '.slide-prev',
            },
            spaceBetween:'24'

});


//Facts Slider
new Swiper('.facts-slider', {
    slidesPerView: 1,
    loop:true,
    pagination: {
        el:'.fact-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.fact-slide-next',
        prevEl: '.fact-slide-prev',
    },

});


//Blog Swiper Slider
new Swiper('.blog-slider', {
            slidesPerView: 1.3,
            loop:true,

            breakpoints: {
                768: {
                slidesPerView: 2.3,
                spaceBetween: 16
                },
                991: {
                slidesPerView: 4.3,
                spaceBetween: 24
                },
            },

            navigation: {
                nextEl: '.blog-slide-next',
                prevEl: '.blog-slide-prev',
            },
            spaceBetween:'24',
            // slidesOffsetAfter: -30,

        });



//Subscribe For 
document.querySelector('#subscribeForm').addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    alert(`Email Send Successful ${email} `)
    e.target.reset()

})