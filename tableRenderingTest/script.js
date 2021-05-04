const renderTable = () => {
    const btn = document.querySelector('.btn'),
    inputArrLength = document.querySelector('#arr-length'),
    inputSmallChunkLength = document.querySelector('#smal-chunk'),
    inputBigChunkLength = document.querySelector('#big-chunk'),
    inputEndTime = document.querySelector('#end-time'),
    container = document.querySelector('.table-tbody'),
    wrapError = document.querySelector('.wrap'),
    textError = document.createElement('p');

    const createArray = (count) => {
        const arr = [];
        for (let i = 0; i < count; i++) {
            arr.push(`item ${i}`);
        }
        return arr;
    }

    const validInputValue = (arr, countBigChank, countSmalChank) => {
        if (arr.length <= countBigChank ||
            arr.length % countBigChank != 0 ||
            countBigChank < countSmalChank ||
            countBigChank % countSmalChank != 0) {
                textError.textContent = 'Invalid chunk value specified';
                textError.classList.add('error');
                wrapError.appendChild(textError);
            return false;
        } else {
            return true;
        }
    }

    const renderingDataArrInParts = (arr, container, tegWrap, tegElem, countBigChank, countSmalChank) => {
        const timeStart = Date.now();
        let timeFinish = false;
        
        if (!validInputValue(arr, countBigChank, countSmalChank)) {
            return;
        }

        let stoppingPointOfChank = 0;
        for (let i = 0; i < arr.length; i += countBigChank) {
            const lastChunk = arr.length - countBigChank;
            if (i === lastChunk) {
                timeFinish = true;
            }
            
            stoppingPointOfChank += countBigChank;
            const chankOfArr = arr.slice(i, stoppingPointOfChank);

            const wrap = document.createElement(tegWrap);
            container.appendChild(wrap);

            setTimeout(() => {
                let stoppingPointOfSmallChank = i + countSmalChank;
                for (let j = 0; j < chankOfArr.length; j += countSmalChank) {
                    const lastSmallChunk = chankOfArr.length - countSmalChank;
                    if (timeFinish && j === lastSmallChunk) {
                        timeFinish = 'last';
                    }
                
                    stoppingPointOfSmallChank += countSmalChank;
                    const smalChankOfArr = arr.slice(i, stoppingPointOfSmallChank);
                    smalChankOfArr.reduce((prom, item, i, arr) => {
                        prom.then(() => {
                            const elem = document.createElement(tegElem);
                            elem.textContent = item;
                            wrap.appendChild(elem);
            
                            if (timeFinish === 'last' && i === arr.length - 1) {
                                timeFinish = Date.now();
                                inputEndTime.value = (`${timeFinish - timeStart} ms`);
                            }
                        })
                        return prom;
                    }, Promise.resolve());
                }
            }, 5);
        }
    }
    const renderingInit = () => {
        container.innerHTML = '';
        inputEndTime.value = '';
        textError.remove();
        const arr = createArray(Number(inputArrLength.value) || 100);
        const bigChunk = Number(inputBigChunkLength.value) || 10;
        const smallChunk = Number(inputSmallChunkLength.value) || 5;
        
        renderingDataArrInParts(arr, container, 'tr', 'td', bigChunk, smallChunk);
    }

    btn.addEventListener('click', () => {
        renderingInit();
    })

    const dopValidateOnInputs = () => {
        document.querySelectorAll('input').forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/g, '');
            })
        }) 
    }
    dopValidateOnInputs();
}
renderTable();