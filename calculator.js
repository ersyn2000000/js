/*const operator = prompt('Выберите действие  (  +, -, * or / ): ');


const number1 = parseInt(prompt('Введите первое число: '));
const number2 = parseInt(prompt('Введите второе число: '));

let result;



if (operator == '+') {
    result = number1 + number2;
}

else if (operator == '-') {
    result = number1 - number2;
}

else {
    result= number1/number2;
}

console.log(alert(result));*/

while(true){
    let action = prompt('Выберите действие"+,-,/":' )
    if (action=='exit'){
        alert('Закончено')
        break
    } else if(action=='+'){
        const number1=parseInt(prompt('Введите первое число'))
        const number2=parseInt(prompt('Введите второе число '))
        result=number1+number2
        alert(`${number1}+${number2} =${result} `)
    } else if(action=='-'){
        const number1=parseInt(prompt('Введите первое число'))
        const number2=parseInt(prompt('Введите второе число'))
        result=number1-number2
        alert(`${number1}-${number2} =${result} `)
    } else if(action=='/'){
        const number1=parseInt(prompt('Введите первое число'))
        const number2=parseInt(prompt('Введите второе число'))
        result=number1/number2
        alert(`${number1}/${number2} =${result} `)
    }
}

/*else if (operator == '-') {
    result = number1 - number2;
}*/

/*else {
    result= number1/number2;
}*/





