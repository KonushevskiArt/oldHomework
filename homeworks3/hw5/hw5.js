'use strict';

// 5. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

// ES5 и ES6

// ES5
/* var User = function(options) {
    this.name = options.name;
    this.surname = options.surname;
};

User.prototype.getFullName = function() {
    console.log(this.name + ' ' + this.surname);
};

var Student = function(options) {
    User.apply(this, arguments);
    this.year = options.year;
};

Student.prototype = Object.create(User.prototype);
Student.prototype.constructor = Student;

Student.prototype.getCourse = function() {

    var mapCourse = {
        1: '1st',
        2: '2nd',
        3: '3rd',
        4: '4th',
        5: '5th'
    };

    var course = new Date().getFullYear() - this.year;

    if (course > 5) {
        console.log('already graduated from university');    
    } else if (course < 1) {
        console.log('have not entered the university yet');  
    } else {
        console.log('study in the '+ mapCourse[course] +' year');
    }
};

var vaso = new Student({name: 'Vaso', surname: 'Vasov', year: 2018});
var andru = new User({name: 'Andru', surname: 'Ivanov'});*/

//ES 6
class User  {
    constructor(options) {
        this.name = options.name;
        this.surname = options.surname;
    }

    getFullName() {
        console.log(`${this.name} ${this.surname}`);
    }
}


class Student extends User {
    constructor(options) {
        super(options);
        this.year = options.year;
    }

    getCourse() {
    
        const mapCourse = {
            1: '1st',
            2: '2nd',
            3: '3rd',
            4: '4th',
            5: '5th'
        };
    
        const course = new Date().getFullYear() - this.year;
    
        if (course > 5) {
            console.log('already graduated from university');    
        } else if (course < 1) {
            console.log('have not entered the university yet');  
        } else {
            console.log(`study in the ${mapCourse[course]} year`);
        }
    }
}

const vaso = new Student({name: 'Vaso', surname: 'Vasov', year: 2018});
const andru = new User({name: 'Andru', surname: 'Ivanov'});


console.log(vaso);
console.log(vaso.getCourse());
console.log(vaso.getFullName());

console.log(andru);
console.log(andru.getFullName());
