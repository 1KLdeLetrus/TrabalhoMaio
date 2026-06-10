const slider = document.querySelectorAll('.imgs-slide-rigth')
const btnR = document.getElementById('btn-carrosel-left')
const btnL = document.getElementById('btn-carrosel-rigth')

let currentSlide = 0;

function hiderSlider() {
    slider.forEach(item => item.classList.remove('on'))
}
function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hiderSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0
    } else{
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hiderSlider()
    if(currentSlide == 0){
        currentSlide = slider.length -1
    } else{
        currentSlide--
    }
    showSlider()
}


btnR.addEventListener('click', nextSlider)
btnL.addEventListener('click', prevSlider)



const msg = document.getElementById('msg-de-compra1')
const msgConfirm = document.getElementById('msg-confirm')
const msgCancel = document.getElementById('msg-cancela')

function abrirMsgCompra(){
    msg.style.display = "flex"  
    msg.style.opacity ="1"
    msg.style.width = "50%"
}
function cancelarCompra(){
    msg.style.opacity = "0"
    msgCancel.style.opacity = "1"
    msgCancel.style.display = "flex"
    setTimeout(function() {
        msgCancel.style.opacity ="0"
        msgCancel.style.display = "none"
    }, 3000);
}
function confirmarCompra(){
    msg.style.opacity = "0"
    msgConfirm.style.opacity = "1"
    msgConfirm.style.display = "flex"
    setTimeout(function() {
        msgConfirm.style.opacity ="0"
        msgConfirm.style.display = "none"
    }, 3000);
}