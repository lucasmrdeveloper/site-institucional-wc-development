document.addEventListener('DOMContentLoaded', () => {
    efeitoScroll()
    categoriasRwd()
    menuSobre()
    sliderDepoimentos()
    modalPortfolio()
    faq()
})


function efeitoScroll() {
    const observerSections = new IntersectionObserver(observadorElementosSections, {threshold:0.1})
    const sections = document.querySelectorAll('.conteudo-escondido')

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
        elemento.target.classList.add('js-conteudo-mostrar')
    }
}

function categoriasRwd() {
    const body = document.body
    const iconeMenuRwd = document.querySelector('.header-categorias-btn-rwd')
    const categorias = document.querySelector('.header-categorias-box')


    iconeMenuRwd.addEventListener('click', () => {
        categorias.classList.toggle('categorias-visivel-rwd')
        
        if (categorias.classList.contains('categorias-visivel-rwd')) {
            iconeMenuRwd.src="imgs/menu-rwd/menu-rwd-fechar.svg"

            removerScroll()
        }
        else {
            iconeMenuRwd.src="imgs/menu-rwd/menu-rwd-abrir.svg"

            adicionarScroll()
        }
    })


    function removerScroll() {
        body.classList.remove('scroll-visivel')
        body.classList.add('scroll-escondido')
    }

    function adicionarScroll() {
        body.classList.remove('scroll-escondido')
        body.classList.add('scroll-visivel')
    }
}

function menuSobre() {
    const subtituloTrajetoria = document.querySelector('.sobre-subtitulo-trajetoria')
    const subtituloExperiencia = document.querySelector('.sobre-subtitulo-experiencia')
    const subtituloInovacao = document.querySelector('.sobre-subtitulo-inovacao')

    const textoTrajetoria = document.querySelector('.sobre-trajetoria-texto')
    const textoExperiencia = document.querySelector('.sobre-experiencia-texto')
    const textoInovacao = document.querySelector('.sobre-inovacao-texto')

    const subtitulos = document.querySelectorAll('.sobre-subtitulos')
    const textos = document.querySelectorAll('.sobre-textos')


    subtituloTrajetoria.addEventListener('click', () => {
        removerTextoVisivel()
        removerFundoSubtitulo()

        subtituloTrajetoria.classList.add('sobre-subtitulo-fundo')
        textoTrajetoria.classList.add('sobre-texto-visivel')
    })

    subtituloExperiencia.addEventListener('click', () => {
        removerTextoVisivel()
        removerFundoSubtitulo()

        subtituloExperiencia.classList.add('sobre-subtitulo-fundo')
        textoExperiencia.classList.add('sobre-texto-visivel')
    })

    subtituloInovacao.addEventListener('click', () => {
        removerTextoVisivel()
        removerFundoSubtitulo()

        subtituloInovacao.classList.add('sobre-subtitulo-fundo')
        textoInovacao.classList.add('sobre-texto-visivel')
    })


    function removerTextoVisivel() {
        textos.forEach(texto => {
            texto.classList.remove('sobre-texto-visivel')
        })
    }

    function removerFundoSubtitulo() {
        subtitulos.forEach(subtitulo => {
            subtitulo.classList.remove('sobre-subtitulo-fundo')
        })
    }
}

function sliderDepoimentos() {
    const setaEsquerda = document.querySelector('.depoimentos-seta-esquerda')
    const setaDireita = document.querySelector('.depoimentos-seta-direita')
    const depoimentos = document.querySelectorAll('.depoimento-item')

    let indexDepoimentoVisivel = 0
    const ultimoDepoimento = depoimentos.length - 1


    setaEsquerda.addEventListener('click', () => {
        if (indexDepoimentoVisivel == 0) {
            return
        }
        else {
            indexDepoimentoVisivel--

            removerDepoimentoVisivel()
            adicionarDepoimentoVisivel()
        }
    })

    setaDireita.addEventListener('click', () => {
        if (indexDepoimentoVisivel == ultimoDepoimento) {
            return
        }
        else {
            indexDepoimentoVisivel++

            removerDepoimentoVisivel()
            adicionarDepoimentoVisivel()
        }
    })


    function removerDepoimentoVisivel() {
        depoimentos.forEach(depoimento => {
            depoimento.classList.remove('depoimento-visivel')
        })
    }

    function adicionarDepoimentoVisivel() {
        depoimentos[indexDepoimentoVisivel].classList.add('depoimento-visivel')
    }
}

function modalPortfolio() {
    const primeiraImagem = document.querySelector('.portfolio-img-1')
    const segundaImagem = document.querySelector('.portfolio-img-2')
    const terceiraImagem = document.querySelector('.portfolio-img-3')

    const primeiroModal = document.querySelector('.portfolio-modal-1')
    const segundoModal = document.querySelector('.portfolio-modal-2')
    const terceiroModal = document.querySelector('.portfolio-modal-3')

    const btnsFecharModal = document.querySelectorAll('.portfolio-modal-fechar')
    const modais = document.querySelectorAll('.portfolio-modal')


    primeiraImagem.addEventListener('click', () => {
        removerModalVisivel()

        primeiroModal.classList.add('portfolio-modal-visivel')
    })

    segundaImagem.addEventListener('click', () => {
        removerModalVisivel()

        segundoModal.classList.add('portfolio-modal-visivel')
    })

    terceiraImagem.addEventListener('click', () => {
        removerModalVisivel()

        terceiroModal.classList.add('portfolio-modal-visivel')
    })


    btnsFecharModal.forEach(btnFecharModal => {
        btnFecharModal.addEventListener('click', () => {
            const elementoPai = btnFecharModal.parentElement

            elementoPai.classList.remove('portfolio-modal-visivel')
        })
    })


    function removerModalVisivel() {
        modais.forEach(modal => {
            modal.classList.remove('portfolio-modal-visivel')
        })
    }
}

function faq() {
    const boxes = document.querySelectorAll('.faq-item')
 
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const boxResposta = box.lastElementChild
            const btnMostrar = box.firstElementChild.lastElementChild

            boxResposta.classList.toggle('faq-resposta-visivel')

            if (boxResposta.classList.contains('faq-resposta-visivel')){
                btnMostrar.src = 'imgs/faq/faq-fechar.svg'
            }
            else {
                btnMostrar.src = 'imgs/faq/faq-mostrar.svg'
            }
        })
    })
}