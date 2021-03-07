'use strict';

const btns = document.querySelectorAll('.btn');

const bindAddOneClick = () => {
    let count = 0;

    return () => {
        count += 1;
        return count;
    };
}

btns.forEach(btn => {
    let textBtn = bindAddOneClick(),
        span = btn.querySelector('span');
    
    btn.addEventListener('click', () => {
        span.textContent = textBtn();
    });
})
