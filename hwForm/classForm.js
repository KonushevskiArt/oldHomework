console.log('lalala');
class Form {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.birthday = this.form.querySelector('#birthday');
        this.age = this.form.querySelector('#age');
        this.items = this.form.querySelectorAll('input, select');
        this.submit = this.form.querySelector('.button');
        this.privacy = this.form.querySelector('#privacy');

        this.objValidateonErrors = {};

        this.regExps = {
            text:  /^[A-Za-z][a-zA-Z0-9_-]*$/,
            tel: /^[\d|+][0-9]{7,15}$/,
            email: /^[\w]{3,}@[a-z]{3,}\.[a-z]{2,}$/,
            number: /^[0-9]$/,
        };
    }
    addError(elem, errorsContainer, messageError) {
        errorsContainer.textContent = messageError;
        elem.classList.add('error');
        this.objValidateonErrors[elem.name] = messageError;
    }

    removeError(elem, errorsContainer) {
        errorsContainer.textContent = '';
        elem.classList.remove('error');
        delete this.objValidateonErrors[elem.name];
    }
          
    addVisualizationError (elem, errorsContainer, messageError) {
        this.addError(elem, errorsContainer, messageError);
        const onFocus = function () {
            this.removeError(elem, errorsContainer);
            elem.removeEventListener('focus', onFocus);
        }.bind(this);
        
        elem.addEventListener('focus', onFocus);
    }

    inputValidators(elem, errorsContainer) {
        if (elem.type === 'text') {
            if (!(this.regExps.text.test(elem.value)) && elem.value !== '') {
                this.addVisualizationError(elem, errorsContainer, 'only alphabetic(english) and numeric values are allowed as well as _ and - no spaces');
            } else if ((elem.value.length < 3 &&
                        elem.value.length != 0) ||
                        elem.value.length > 30) {
                this.addVisualizationError(elem, errorsContainer, 'minimum value length 3 characters, maximum 30');
            }
            
            return;
        }
        if (elem.type === 'email') {
            if (!(this.regExps.email.test(elem.value)) && elem.value !== '') {
                this.addVisualizationError(elem, errorsContainer, 'enter a valid email');
            }
            return;
        }
        if (elem.type === 'tel') {
            if (!(this.regExps.tel.test(elem.value)) && elem.value !== '') {
                this.addVisualizationError(elem, errorsContainer, 'enter correct phone number');
            }
            return;
        }
        if (elem.type === 'number') {
            if (!(this.regExps.number.test(elem.value)) && elem.value !== '') {
                this.addVisualizationError(elem, errorsContainer, 'enter the correct number');
            }
            return;
        }
    }

    hangValidationOnElements() {
        this.items.forEach(elem => {
            const span = this.form.querySelector(`.error-${elem.id}`);
        
            elem.addEventListener('blur', () => {
                this.inputValidators(elem, span);
            });
        });
    }

    hangValidationOnSubmmit() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
        
            this.items.forEach(elem => {
                const span = this.form.querySelector(`.error-${elem.id}`);
        
                if (elem.value === "") {
                    this.addVisualizationError(elem, span, 'This field must be filled');
                } else if (Object.keys(this.objValidateonErrors).length < 1) {
                    
                } 
            });
            if (Object.keys(this.objValidateonErrors).length < 1) {
                const formValues = this.createFormObj();
                
                console.log(formValues);
            }
        });
    }
    createFormObj() {
        const formObj = {};
        this.items.forEach((item) => {
            formObj[item.id] = item.value;
        });
        return formObj;
    }
    
    checkAge() {
        this.birthday.addEventListener('change', () => {
            const innerBirthday = new Date(this.birthday.value);
            const fullYear = innerBirthday.getFullYear();
            const nowYear = new Date().getFullYear();
            this.age.value = nowYear - fullYear;
        });
    }
    
    checkPrivacyPolicy() {
        this.privacy.addEventListener('change', () => {
            if (this.privacy.checked == true) {
                this.submit.disabled = false;
            } else {
                this.submit.disabled = true;
            }
        });
    }
    init() {
        this.hangValidationOnElements();
        this.hangValidationOnSubmmit();
        this.checkAge();
        this.checkPrivacyPolicy();
    }
}