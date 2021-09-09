const previousEl = document.getElementById('previous')
const nextEl = document.getElementById('next')
const sliderEl = document.getElementById('slider')
let interval = undefined;
let timeout = undefined

previousEl.addEventListener('click', onPreviousClick);
nextEl.addEventListener('click', onNextClick);

autoScroll();

function onPreviousClick() {
    const sliderWidth = sliderEl.offsetWidth; /* retorna largura do elemento*/
    sliderEl.scrollLeft -= sliderWidth;
    handleSliderClick()
}

function onNextClick() {
    const sliderWidth = sliderEl.offsetWidth; /* retorna largura do elemento*/
    sliderEl.scrollLeft += sliderWidth;
    handleSliderClick()
}
function handleSliderClick() {
    clearTimeout(timeout)
    clearInterval(interval)
    interval = undefined
    timeout = setTimeout( () => {
        autoScroll()
    }, 10000)
}
function autoScroll() {
    if(interval) return;

    interval = setInterval( () => {
        const sliderWidth = sliderEl.offsetWidth;
        const numberOfImages = sliderEl.childElementCount;
        const selectedImage = (sliderEl.scrollLeft/sliderWidth) + 1;

        //se for a última imagem -> volta pro 0
        if(selectedImage === numberOfImages) {
            sliderEl.scrollLeft = 0
            return;
        }

        //senao 
        sliderEl.scrollLeft += sliderWidth; // passar para a próxima imagem
    }, 5000)
    
}



