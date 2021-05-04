function formValidation(formSelector) {
    const form = document.querySelector(formSelector),
      birthday = form.querySelector('#birthday'),
      age = form.querySelector('#age'),
      items = form.querySelectorAll('input, select'),
      submit = form.querySelector('.button'),
      privacy = form.querySelector('#privacy');

    const regExpText = /^[A-Za-z][a-zA-Z0-9_-]*$/,
        regExpTel = /^[\d|+][0-9]{7,15}$/,
        regExpEmail = /^[\w]{3,}@[a-z]{3,}\.[a-z]{2,}$/,
        regExpNumber = /^[0-9]$/;

    const objValidateonErrors = {};

    const addError = (elem, errorsContainer, messageError) => {
        errorsContainer.textContent = messageError;
        elem.classList.add('error');
        objValidateonErrors[elem.name] = messageError;
    };
    const removeError = (elem, errorsContainer) => {
        errorsContainer.textContent = '';
        elem.classList.remove('error');
        delete objValidateonErrors[elem.name];
    };
        
    const addVisualizationError = (elem, errorsContainer, messageError) => {
        addError(elem, errorsContainer, messageError);
        elem.addEventListener('focus', function onFocus() {
            removeError(elem, errorsContainer);
            elem.removeEventListener('focus', onFocus);
        });
    };

    const inputValidators = (elem, errorsContainer) => {
        if (elem.type === 'text') {
            if (!(regExpText.test(elem.value)) && elem.value !== '') {
                addVisualizationError(elem, errorsContainer, 'only alphabetic(english) and numeric values are allowed as well as _ and - no spaces');
            } else if ((elem.value.length < 3 &&
                        elem.value.length != 0) ||
                        elem.value.length > 30) {
                addVisualizationError(elem, errorsContainer, 'minimum value length 3 characters, maximum 30');
            }
            
            return;
        }
        if (elem.type === 'email') {
            if (!(regExpEmail.test(elem.value)) && elem.value !== '') {
                addVisualizationError(elem, errorsContainer, 'enter a valid email');
            }
            return;
        }
        if (elem.type === 'tel') {
            if (!(regExpTel.test(elem.value)) && elem.value !== '') {
                addVisualizationError(elem, errorsContainer, 'enter correct phone number');
            }
            return;
        }
        if (elem.type === 'number') {
            if (!(regExpNumber.test(elem.value)) && elem.value !== '') {
                addVisualizationError(elem, errorsContainer, 'enter the correct number');
            }
            return;
        }
    };

    const hangValidationOnElements = () => {
        items.forEach(elem => {
            const span = form.querySelector(`.error-${elem.id}`);
        
            elem.addEventListener('blur', () => {
                inputValidators(elem, span);
            });
        });
    };

    const hangValidationOnSubmmit = () => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            items.forEach(elem => {
                const span = form.querySelector(`.error-${elem.id}`);
        
                if (elem.value === "") {
                    addVisualizationError(elem, span, 'This field must be filled');
                } else if (Object.keys(objValidateonErrors).length < 1) {
                    
                } 
            });
            if (Object.keys(objValidateonErrors).length < 1) {
                const formValues = createFormObj();
                
                console.log(formValues);
            }
        });
    };

    const createFormObj = () => {
        const formObj = {};
        items.forEach((item) => {
            formObj[item.id] = item.value;
        });
        return formObj;
    };

    const checkAge = () => {
        birthday.addEventListener('change', () => {
            const innerBirthday = new Date(birthday.value);
            const fullYear = innerBirthday.getFullYear();
            const nowYear = new Date().getFullYear();
            age.value = nowYear - fullYear;
        });
    };
    

    const checkPrivacyPolicy = () => {
        privacy.addEventListener('change', () => {
            if (privacy.checked == true) {
                submit.disabled = false;
            } else {
                submit.disabled = true;
            }
        });
    };
    
    const init = () => {
        hangValidationOnElements();
        hangValidationOnSubmmit();
        checkAge();
        checkPrivacyPolicy();
    };

    init();
}