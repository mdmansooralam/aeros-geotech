//Navbar Background toggle
const header = document.querySelector('header')
window.addEventListener('scroll', ()=>{
if(window.scrollY >= 80){
    header.classList.add('js-toggle')
}else{
    header.classList.remove('js-toggle')
}
})


//Testimonials Slider
new Swiper('.testimonials-slider', {
            slidesPerView: 1,
            loop:true,
            autoplay:{delay:2000},
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
    autoplay:{
        delay:3000,
    },
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

//Core Business Swiper Slider
new Swiper('.core-business-slider', {
    slidesPerView: 1.3,
    loop:true,
    autoplay:{delay:2000},
    
    breakpoints: {
        768: {
            slidesPerView: 2.2,
            spaceBetween: 16
        },
        991: {
            slidesPerView: 4.2,
            spaceBetween: 24
        },
    },
    
    navigation: {
        nextEl: '.core-business-slide-next',
        prevEl: '.core-business-slide-prev',
    },
    spaceBetween:'24',
    // slidesOffsetAfter: -30,
    
});

//Key Point swiper slider
new Swiper('.key-point-slider', {
    slidesPerView: 1,
    loop:true,
    pagination: {
        el:'.key-point-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.key-point-slide-next',
        prevEl: '.key-point-slide-prev',
    },

});

//Software Slider
new Swiper('.software-slider', {
    slidesPerView: 1,
    loop:true,
    pagination: {
        el:'.software-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.software-slide-next',
        prevEl: '.software-slide-prev',
    },

});


//Drone Slider
new Swiper('.drone-slider', {
    slidesPerView: 1,
    loop:true,
    autoplay:{delay:3000},
    pagination: {
        el:'.drone-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.drone-slide-next',
        prevEl: '.drone-slide-prev',
    },

});


//Subscribe For 
document.querySelector('#subscribeForm').addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = e.target.email.value
    alert(`Email Send Successful ${email} `)
    e.target.reset()

})



//counter 

const counterFunction = ()=>{
    const counterNumber = document.querySelectorAll('.counter-number')
    
    const speed = 10;
    counterNumber.forEach(currentEl => {
        const updateNumber = ()=>{
            const targetNumber = parseInt(currentEl.dataset.number)
            const initialNumber = parseInt(currentEl.innerText)
    
            const incrementNumber = Math.trunc(targetNumber / speed)
    
            if(initialNumber < targetNumber){
                currentEl.innerText = initialNumber + incrementNumber
                setTimeout(updateNumber, 100)
            }
    
        }
        updateNumber()
    })

}




const container = document.querySelector('.counter-container')

const observer = new IntersectionObserver(entries => {
    entries.forEach(element => {
        if(element.isIntersecting){
            counterFunction()
        }
    });
})

observer.observe(container)