 



let youtubeBtn = document.getElementById('youtubeClose');
let video = document.getElementsByClassName('video__btn')[0];
let show = document.getElementById('youtube');


let rates = document.getElementById('rates');
let closeRates = document.getElementById('rates-close');
let additionally = document.getElementsByClassName ('additionally')[0];

video.onclick = function() {
    youtubeBtn.style.display = 'block',
    show.style.display = 'block';
}

youtubeBtn.onclick = function() {
    youtubeBtn.style.display = 'none',
    show.style.display = 'none';
}


additionally.onclick = function () {
    rates.style.display = 'block';
}

closeRates.onclick = function() {
    rates.style.display = 'none';
}




let showYouTube = ()=>{
    $('#youtube').removeAttr('hidden')
   
};

let youtubeClose = () => {
    $('#youtube').attr('hidden', true);
}
