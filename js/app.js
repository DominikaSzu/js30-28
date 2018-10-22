const video = document.querySelector('.flex');
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');

speed.addEventListener('mousemove', function(e) {
    const y = e.pageY - this.offsetTop;
    const percent = (y * 100) / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent) + '%';
    
    bar.style.height = height;

});