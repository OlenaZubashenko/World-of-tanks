let toggleVideo = function() {
    let youtubeBtn = document.getElementById('youtubeClose');
    let show = document.getElementById('youtube');    
    
    youtubeBtn.classList.toggle('visible');
    show.classList.toggle('show-video');
}

let rates = document.getElementById('rates');
let closeRates = document.getElementById('rates-close');
let additionally = document.getElementsByClassName ('additionally')[0];

additionally.onclick = function () {
    rates.style.display = 'block';
}

closeRates.onclick = function() {
    rates.style.display = 'none';
}





