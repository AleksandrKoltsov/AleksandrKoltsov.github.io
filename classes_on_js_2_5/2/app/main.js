class ExtendedDate extends Date {
    checkIntercalary() {
        let year = this.getFullYear();
        if (((year % 4) == 0) || ((year % 100) != 0) && ((year % 400) == 0)) {
            return 'Этот год высокосный';
        } else {
            return 'Этот год не высокосный';
        }
    }

    checkDate() {
        let n = Date.parse(Date());
        let t = Date.parse(this);
            if (n > t) {
                return 'Прошедшая дата';
            } else {
                return 'Будущая дата';
            }
    }

    getTextDate() {
        
        let monthArr = ['Января','Февраля','Марта','Апреля','Мая','Июня','Июля','Августа','Сентября','Октября','Ноября','Декабря'];
        
        let dateArr = [
            'Первое', 'Второе',
            'Третье', 'Четвертое',
            'Пятое', 'Шестое',
            'Седьмое', 'Восьмое',
            'Девятое', 'Десятое',
            'Одинадцатое', 'Двенадцатое',
            'Тринадцатое', 'Четырнадцатое',
            'Пятнадцатое', 'Шестнадцатое',
            'Семнадцатое', 'Восемнадцатое',
            'Девятнадцатое', 'Двацотое',
            'Двадцать первое', 'Двадцать второе',
            'Двадцать третье', 'Двадцать четвертое',
            'Двадцать пятое', 'Двадцать шестое',
            'Двадцать седьмое', 'Двадцать восьмое',
            'Двадцать девятое', 'Тридцатое',
            'Тридцать первое'
        ];
        return `${dateArr[this.getDate()-1]} ${monthArr[this.getMonth()]}`;
    }

    nextDay() {
        this.setDate(this.getDate() + 1);
        return new Date(this).toLocaleDateString();
    }
}

const container = document.querySelector('.container');

document.querySelector('.date-input').addEventListener('input', (ev) => {
if(ev.target.value != ''){
    let d = new ExtendedDate(ev.target.value);
    container.innerHTML = `<ul>
    <li>checkIntercalary() //${d.checkIntercalary()}</li>
    <li>checkDate() //${d.checkDate()}</li>
    <li>getTextDate() //${d.getTextDate()}</li>
    <li>nextDay() //${d.nextDay()}</li>
</ul>`
}
    
});