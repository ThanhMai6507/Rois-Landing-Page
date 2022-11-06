// open and close sidebar
function openSidebar() {
    document.getElementById("mySidebar").style.display = "block";
    // console.log('Hello')
}

function closeSidebar() {
    document.getElementById("mySidebar").style.display = "none";
}

// slideshow
const sliders = document.querySelector('.mySlides')
const sliderLinks = document.querySelectorAll('.slider-link')

sliderLinks.forEach((slider, index) => {
    console.log(index, slider.offsetWidth)
})
const nodes = document.querySelectorAll('.eleven-icon')

nodes.forEach((node, index) => {
    node.addEventListener('click', function() {
        const sliderCurrent = sliderLinks[index];
        const indexCurrent = index
        nodes.forEach(node=> {
            if ( node.classList.contains('active')) {
                node.classList.remove('active')
            }
        })
        node.classList.add('active')
        sliders.style.transform = 'translate(' + sliderCurrent.offsetLeft*(-1) + 'px)'
       
    })

})
