document.addEventListener('DOMContentLoaded', () => {
    effectScroll()
    categoriesRwd()
    menuAbout()
    SliderTestimonials()
    modalPortfolio()
    faq()
})


function effectScroll() {
    const observerSections = new IntersectionObserver(observadorElementosSections, {threshold:0.1})

    const sections = document.querySelectorAll('.content-hidden')

    sections.forEach(section => {
        observerSections.observe(section)
    })

    function observadorElementosSections(sections) {
        sections.forEach(section => {
    
          if (section.isIntersecting) {
            showSections(section)
          }
        })
      }


    function showSections(elemento) {
        elemento.target.classList.add('js-content-show')
    }
}

function categoriesRwd() {
    const body = document.body
    const iconMenuRwd = document.querySelector('.header-categories-btn-rwd')
    const categories = document.querySelector('.header-categories-box')

    iconMenuRwd.addEventListener('click', () => {
        categories.classList.toggle('categories-visible-rwd')
        
        if (categories.classList.contains('categories-visible-rwd')) {
            iconMenuRwd.src="/imgs/menu-rwd/menu-rwd-closet.svg"

            removeScroll()
        }
        else {
            iconMenuRwd.src="/imgs/menu-rwd/menu-rwd-open.svg"

            addScroll()
        }
    })

    function removeScroll() {
        body.classList.remove('scroll-visible')
        body.classList.add('scroll-hidden')
    }

    function addScroll() {
        body.classList.remove('scroll-hidden')
        body.classList.add('scroll-visible')
    }
}

function menuAbout() {
    const subtitleTrajetory = document.querySelector('.about-subtitle-trajetory')
    const subtitleExperience = document.querySelector('.about-subtitle-experience')
    const subtitleInnovation = document.querySelector('.about-subtitle-innovation')

    const textTrajetory = document.querySelector('.about-trajetory-text')
    const textExperience = document.querySelector('.about-experience-text')
    const textInnovation = document.querySelector('.about-innovation-text')

    const subtitles = document.querySelectorAll('.about-subtitles')
    const texts = document.querySelectorAll('.about-texts')


    subtitleTrajetory.addEventListener('click', () => {
        removeTextVisible()
        removeSubtitleBackground()

        subtitleTrajetory.classList.add('about-subtitle-background')
        textTrajetory.classList.add('about-text-visible')
    })


    subtitleExperience.addEventListener('click', () => {
        removeTextVisible()
        removeSubtitleBackground()

        subtitleExperience.classList.add('about-subtitle-background')
        textExperience.classList.add('about-text-visible')
    })

    subtitleInnovation.addEventListener('click', () => {
        removeTextVisible()
        removeSubtitleBackground()

        subtitleInnovation.classList.add('about-subtitle-background')
        textInnovation.classList.add('about-text-visible')
    })

    function removeTextVisible() {
        texts.forEach(text => {
            text.classList.remove('about-text-visible')
        })
    }

    function removeSubtitleBackground() {
        subtitles.forEach(subtitle => {
            subtitle.classList.remove('about-subtitle-background')
        })
    }
}

function SliderTestimonials() {
    const arrowLeft = document.querySelector('.testimonials-arrow-left')
    const arrowRight = document.querySelector('.testimonials-arrow-right')
    const testimonials = document.querySelectorAll('.testimonial-item')

    let indexTestimonialVisible = 0
    const lastTestimonial = testimonials.length - 1

    arrowLeft.addEventListener('click', () => {
        if (indexTestimonialVisible == 0) {
            return
        }
        else {
            indexTestimonialVisible--

            removeTestimonialVisible()

            addTestimonialVisible()
        }
    })

    arrowRight.addEventListener('click', () => {
        if (indexTestimonialVisible == lastTestimonial) {
            return
        }
        else {
            indexTestimonialVisible++

            removeTestimonialVisible()

            addTestimonialVisible()
        }
    })


    function removeTestimonialVisible() {
        testimonials.forEach(testimonial => {
            testimonial.classList.remove('testimonial-visible')
        })
    }

    function addTestimonialVisible() {
        testimonials[indexTestimonialVisible].classList.add('testimonial-visible')
    }
}

function modalPortfolio() {
    const firstImage = document.querySelector('.portfolio-img-1')
    const secondImage = document.querySelector('.portfolio-img-2')
    const thirdImage = document.querySelector('.portfolio-img-3')

    const firstModal = document.querySelector('.portfolio-modal-1')
    const secondModal = document.querySelector('.portfolio-modal-2')
    const ThirdModal = document.querySelector('.portfolio-modal-3')

    const btnsCloseModal = document.querySelectorAll('.portfolio-modal-close')

    const modals = document.querySelectorAll('.portfolio-modal')

    firstImage.addEventListener('click', () => {
        removeModalVisible()

        firstModal.classList.add('portfolio-modal-visible')
    })

    secondImage.addEventListener('click', () => {
        removeModalVisible()

        secondModal.classList.add('portfolio-modal-visible')
    })


    thirdImage.addEventListener('click', () => {
        removeModalVisible()

        ThirdModal.classList.add('portfolio-modal-visible')
    })


    btnsCloseModal.forEach(btnCloseModal => {
        btnCloseModal.addEventListener('click', () => {
            const elementParent = btnCloseModal.parentElement

            elementParent.classList.remove('portfolio-modal-visible')
        })
    })

    function removeModalVisible() {
        modals.forEach(modal => {
            modal.classList.remove('portfolio-modal-visible')
        })
    }
}

function faq() {
    const boxes = document.querySelectorAll('.faq-item')
 
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const boxAnswer = box.lastElementChild
            const btnShow = box.firstElementChild.lastElementChild

            boxAnswer.classList.toggle('faq-answer-visible')

            if (boxAnswer.classList.contains('faq-answer-visible')){
                btnShow.src = '/imgs/faq/faq-close.svg'
            }
            else {
                btnShow.src = '/imgs/faq/faq-show.svg'
            }
        })
    })
}