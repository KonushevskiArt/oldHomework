'use strict';

const arrColors = ['LightCoral', 'Crimson', 'HotPink', '#FF6347', '#20B2AA'];

const items = document.querySelectorAll('p');

const bindIndex = () => {
    let index = 0;

    return () => {
        if (index === arrColors.length - 1) {
            index = 0;
        } else {
            index += 1;        }

        return index;
    }
}

items.forEach(item => {
    let changeIndex = bindIndex();

    item.addEventListener('click', () => {
        const index = changeIndex();
        const currentColor = arrColors[index];
        item.style.color = currentColor;
    });

});
