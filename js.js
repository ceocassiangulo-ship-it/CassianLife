let count = 1
document.getElementById("r1").checked = true

setInterval( function(){
    nextImage()
}, 5000)

function nextImage(){
    count++
    if(count>=4){
        count = 1
    }

    document.getElementById("r"+count).checked = true;
}

const menuBtn = document.querySelector('.resp-menu');
const nav = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    if (nav.classList.contains('hide')) {
        nav.classList.remove('hide');
        nav.classList.add('show');
    } else {
        nav.classList.remove('show');
        nav.classList.add('hide');
    }
});

