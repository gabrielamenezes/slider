const previousEl = document.getElementById('previous')
const nextEl = document.getElementById('next')
const sliderEl = document.getElementById('slider')
let interval = undefined;
let timeout = undefined
let selectedImageIndex = 0

previousEl.addEventListener('click', onPreviousClick);
nextEl.addEventListener('click', onNextClick);

autoScroll();

function onPreviousClick() {
    const sliderWidth = sliderEl.offsetWidth; /* retorna largura do elemento*/
    sliderEl.scrollLeft -= sliderWidth;
    --selectedImageIndex
    handleActiveDot();
    handleSliderClick()
}

function onNextClick() {
    const sliderWidth = sliderEl.offsetWidth; /* retorna largura do elemento*/
    sliderEl.scrollLeft += sliderWidth;
    ++selectedImageIndex
    handleActiveDot();
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

function handleActiveDot() {
    const list = Array.from(document.getElementsByClassName('dot'))
    if(selectedImageIndex < 0) selectedImageIndex = 0;
    if(selectedImageIndex >= list.length) selectedImageIndex = list.length - 1;
    list.forEach(el => el.classList.remove('active'))
    list[selectedImageIndex].classList.add('active')
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
            selectedImageIndex = 0;
            handleActiveDot();
            return;
        }

        //senao 
        sliderEl.scrollLeft += sliderWidth; // passar para a próxima imagem
        ++selectedImageIndex
        handleActiveDot();
    }, 5000)
    
}



