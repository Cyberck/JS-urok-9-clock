let sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h')
    hourNumber = document.querySelector('.hours')
    minNumber = document.querySelector('.minutes');
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        sec.style = `transform: rotate(${seconds}deg)`;
        min.style = `transform: rotate(${minutes}deg)`;
        hour.style = `transform: rotate(${hours}deg)`;
        
        hourNumber.innerHTML = time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
        minNumber.innerHTML = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
        
        setTimeout(() => clock(), 1000);
}
clock();

// setTimeout() - eto js funcsiya i on создаёт нам задержку через сколько  секунд нам нужно ято то выполнять

// рекурсия это когда функция вызывает саму себя 

// let i = 0;
// function rek() {
//     console.log(i);
//     if (i <100){
//         i++
//         rek();
//     }
// }

// rek();

let links = document.querySelectorAll('.tabsItem'),
    tabs  = document.querySelectorAll('.tabsContentItem');
    
    for(let i = 0; i < links.length; i++){
        links[i].addEventListener('click', function (event) {
            event.preventDefault();
            for(let x = 0; x < links.length;x++) {
                links[x].classList.remove('active')
                tabs[x].classList.remove('active')
            }
            this.classList.add('active');
            tabs[i].classList.add('active');
        })
    }



let watchBtn = document.querySelector('.stopwatch__btn'),
    watchSeconds = document.querySelector('.stopwatch__seconds'),
    watchMinutes = document.querySelector('.stopwatch__minutes'),
    watchHours = document.querySelector('.stopwatch__hours'),
    watchSpan = document.querySelector('.tabsLink__span');


watchBtn.addEventListener('click', function() {
    if(this.innerHTML === 'start') {
        this.innerHTML = 'stop';
        watchSpan.classList.add('active');
        let i = 0;
       setTimeout(() =>  time(this, i), 1000);
    }else if(this.innerHTML === 'stop') {
        this.innerHTML = 'clear';
        watchSpan.classList.remove('active');
        watchSpan.classList.add('active_clear');
    }else {
        this.innerHTML = 'start';
        watchSpan.classList.remove('active_clear');
        watchHours.innerHTML = 0;
        watchMinutes.innerHTML = 0;
        watchSeconds.innerHTML = 0;
    }
})


function time(el,i) {
    if(el.innerHTML === 'stop') {
        if(i == 59) {
            i = 0
            watchSeconds.innerHTML = i
            if(watchMinutes.innerHTML == 59) {
                watchMinutes.innerHTML = 0;
                watchHours.innerHTML++
            }else {
                watchMinutes.innerHTML++
            }
        }else {
            i++;
            watchSeconds.innerHTML = i;
        }
        setTimeout(() => time(el,i), 1000);
    }
}