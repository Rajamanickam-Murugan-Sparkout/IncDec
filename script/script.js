let decrement = document.querySelector('.decrement');
let increment = document.querySelector('.increment');
let counter = document.querySelector('.counter');


let count = 0;

decrement.addEventListener('click', ()=>{
    count--;
    counter.innerHTML = count;
    setColor();
})

increment.addEventListener('click', ()=>{
    count++;
    counter.innerHTML = count;
    setColor();
})

function setColor(){
    if (count > 0) {
        counter.classList.add("positive")
    }else if (count < 0) {
        counter.classList.add("negative")
    }else{
        counter.classList.remove("positive");
        counter.classList.remove("negative");
    }
}