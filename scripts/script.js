const mario = window.document.getElementById('person')
const pipe = window.document.getElementById('obstaculo')
const grama = window.document.getElementById('grama')
const nuvens = window.document.getElementById('nuvem')
const planta = window.document.getElementById('planta')
const arvore = window.document.getElementById('arvore')

const jump = ()=>{
        mario.classList.add('pular')

        setTimeout(()=>{
            mario.classList.remove('pular')
        }, 500)
}
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if(pipePosition <= 220 && pipePosition > 0 && marioPosition < 180 ){
        pipe.style.animation = 'none'
        pipe.style.left = '220px'
        mario.src = "../jogo/imagens/gameover.webp"
        arvore.style.display = 'none'
        planta.style.display = 'none'
        grama.style.display = 'none'
        nuvens.style.display = 'none'
        clearInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)