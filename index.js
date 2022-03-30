                                                            //ТЕМА №3 (Работа с кнопками и УСЛОВИЯ)
// при нажатие на кнопку PUSH вывести значиние ИНПУТ в отпут
let inText = document.querySelector('.inText'); // получаем инпут с ползуноком
let btnPush = document.querySelector('.btnPush'); // получаем кнопку с классом .btnPush

let online = document.querySelector('.online'); // получаем элемент для отображения состояния ползунка в реальном времени
let output = document.querySelector('.output'); // получаем элемент для итогового вывода состояния инпут

btnPush.onclick = () =>{
    output.innerHTML = inText.value;
}
// при нажатие на кнопку PUSH вывести значиние ПОЛЗУНКА в отпут
inText.oninput = () =>{
    online.innerHTML = inText.value;
}

// Если чекбокс активен, вывести на страницу надпись "Активно". Если нет, вывести "Не активно"
let check1 = document.querySelector('.myCheck'); // получаем чекбокс 
let outputCheck = document.querySelector('.output-for-check'); // поле для вывода текста при нажатом чекбокс
let btnSend = document.querySelector('.send');

btnSend.onclick = () =>{
    
    if(check1.checked){
        outputCheck.innerHTML = 'Активно';
    }
    else{
        outputCheck.innerHTML = 'Не активно';
    }
}
                                                            //ТЕМА №4 (Циклы)

//          Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
//          1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_

let outputCircle = document.querySelector('.for_number'); // поле вывода 
let btnGetNumber = document.querySelector('.get_number'); // кнопка

btnGetNumber.onclick = () =>{
    let str = ''; // создаем пустую строку для помещения в цикле нужного значения
    for( let i = 0; i<= 16; i++){
        str = str + i + '_';

    }
    outputCircle.innerHTML = str;
}


//         Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
//          12_14_16_18_20_22_24_26_28_30_32_34_36_38_

let out2 = document.querySelector('.out-2'); // поле вывода
let b2 = document.querySelector('.b-2'); // кнопка

b2.onclick = () =>{
    let str = ''; // создаем пустую строку для помещения в цикле нужного значения
    
    for( let i = 12; i<= 38; i++){
        if( i % 2 == 1){
            continue;
        }
        str = str + i + '_';

    }
    out2.innerHTML = str;
}

//      Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
//      25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_

let out3 = document.querySelector('.out-3'); // поле вывода
let b3 = document.querySelector('.b-3'); // кнопка

b3.onclick = () =>{
    let str = ''; // создаем пустую строку для помещения в цикле нужного значения
    
    for( let i = 25; i > 6; i--){

        str = str + i + '_';

    }
    out3.innerHTML = str;
}


                                                            //ТЕМА №5 (Циклы в циклах)

//      С помощью вложенных циклов, нарисуйте строку:
//      ***_***_***_

let out4 = document.querySelector('.out-4'); // поле вывода
let b4 = document.querySelector('.b-4'); // кнопка

b4.onclick = () =>{
    let str = '';

    for( let i = 0; i < 3; i++){

        for(k = 0; k<=3; k++){
            str += '*';
        }
        str += '_';
    }
    out4.innerHTML = str;
}

// С помощью вложенных циклов, нарисуйте строку:
    // 1
    // *_*_*_
    // 2
    // *_*_*_
    // 3
    // *_*_*_

    let out7 = document.querySelector('.out-7'); // поле вывода
    let b7 = document.querySelector('.b-7'); // кнопка
    
    b7.onclick = () =>{
        let str = '';
        for( let i = 1; i < 4; i++){
            str += `${i} <br>`
            for(k = 1; k < 4; k++){
                str += '*_';
            }
            str += '<br>';
        }
        out7.innerHTML = str;
    }


    // С помощью вложенных циклов, нарисуйте строку:
    // *_*_*_
    // *_*_*_
    // *_*_*_

let out8 = document.querySelector('.out-8'); // поле вывода
let b8 = document.querySelector('.b-8'); // кнопка

b8.onclick = () =>{
    let str = '';
    for( let i = 0; i < 3; i++){
        for(k = 0; k < 3; k++){
            str += '*_';
        }
        str += '<br>';
    }
    out8.innerHTML = str;
}


    // С помощью вложенных циклов и символов 1 и 0, нарисуйте прямоугольник. Выводите 1 или 0 в зависимости от того четная переменая или нет
    // 101010
    // 101010
    // 101010

let out9 = document.querySelector('.out-9'); // поле вывода
let b9 = document.querySelector('.b-9'); // кнопка

b9.onclick = () =>{

    let str = '';

    for( let i = 0; i < 3; i++){

        for(k = 0; k < 6; k++){
            if( k % 2 == 0){
                str += '1';
            }else{
                str += '0';
            }
        }

        str += '<br>';
    }
    out9.innerHTML = str;
}

                                                            //ТЕМА №6 (Функции)

        // Напишите функцию t1, которая при нажатии кнопки выводит в .out-1 переменную a1.        

let out10 = document.querySelector('.out-10'); // поле вывода
let b10 = document.querySelector('.b-10'); // кнопка

function fOut10 (){
    let a1 = 'Вы успешно справились с заачей!';
    out10.innerHTML  = a1;
}

b10.onclick = fOut10;


        // Изменим задачу 1. Сейчас она только выводит переменную в заранее заданный блок.
        // Давайте сделаем так, чтобы функция, была более гибкой. 
        // Пусть теперь функция t2 возвращает (return) переменную a2.Поскольку функция возвращает переменную, 
        // то имя функции со скобками (вызов функции) можно встраивать в выражения.
        // Обратите внимание, как изменяется вызов функции теперь.

let out11 = document.querySelector('.out-11'); // поле вывода
let b11 = document.querySelector('.b-11'); // кнопка

function fSet11 (){
    let a1 = 'Вы успешно поместили переменную из другой функции!';
    return a1;
}

function fOut11 (){

    out11.innerHTML  = fSet11();
}

b11.onclick = fOut11;
        

        // Наша предыдущая функция, сильно все еще зависима от внешних переменных.
        // Давайте сделаем ее более универсальной.
        // Пусть функция t3 принимает 2 аргумента и возвращает (return) их произведение.
        // Допишите код функции так, чтобы она возвращала произведение двух чисел,
        // переданных ей в качестве аргументов a, b.

let out12 = document.querySelector('.out-12'); // поле вывода
let btn12 = document.querySelector('.b-12'); // кнопка

let a12 = 500;
let b12 = 3050;

function fSet12 (a , b){
    return a * b;
}

function fOut12 (){

    out12.innerHTML  = fSet12(a12 , b12);
}

btn12.onclick = fOut12;


// Задача на проверку

let out013 = document.querySelector('.out-013'); // поле вывода
let btn013 = document.querySelector('.b-013'); // кнопка

btn013.onclick = ()=>{
    let one = +document.querySelector('#one').value;
    let two = +document.querySelector('#two').value;

    if(one < 0 && two<0){
        out013.innerHTML = `(${one}) * (${two}) =`+one * +two ;
    }
    else if(two<0){
        out013.innerHTML = `${one} * (${two}) =`+one * +two ;
    }
    else if(one < 0){
        out013.innerHTML = `(${one}) * ${two} =`+one * +two ;
    }
    else{
        out013.innerHTML = `${one} * ${two} =`+one * +two ;
    }
}




    // Кнопка b-1 запускает функцию t1.Функция должна выводить в .out-1 строку вида
    // 1_2_3_4_5_6_7_8_9_ ... 49_50_
    // Вы выводите все числа от 1 до 50. Три точки мы не выводим!!!!!)

let out13 = document.querySelector('.out-13'); // поле вывода
let btn13 = document.querySelector('.b-13'); // кнопка

btn13.onclick = () =>{
    
    let i = 1;
    let str = '';

    while(i<=50){
    
        str += `${i}_`;

        if(i == 25){
            str += `<br>`
        }

        i++;
    }

    out13.innerHTML = str;
}


    // Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
    // 12_14_16_18_20_22_24_26_28_30_32_34_36_38_

let out14 = document.querySelector('.out-14'); // поле вывода
let btn14 = document.querySelector('.b-14'); // кнопка

btn14.onclick = () =>{
    
    let i = 12;
    let str = '';

    while(i<=38){
        if(i % 2 == 0){
            str += `${i}_`;
        }
        
        i++;
    }

    out14.innerHTML = str;
}


    // Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
    // 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_

let out15 = document.querySelector('.out-15'); // поле вывода
let btn15 = document.querySelector('.b-15'); // кнопка

btn15.onclick = () =>{
    
    let i = 25;
    let str = '';

    while(i>=7){
        str += `${i}_`;
        i--;
    }

    out15.innerHTML = str;
}



// По нажатию на кнопку .b-1 функция присваивает блоку .out-1 ширину 200px, высоту 90px.
// По нажатию на кнопку .b-2 функция f2, которая присваивает блоку .out-2 класс .bg-orange.
// По нажатию кнопки .b-3 запускайте функцию f3, которая удаляет у блока .out-3 класс .bg-orange.

let out16 = document.querySelector('.out-16'); // поле вывода

let btn16 = document.querySelector('.b-16'); // кнопка
let btn17 = document.querySelector('.b-17'); // кнопка
let btn18 = document.querySelector('.b-18'); // кнопка

btn16.onclick = () =>{
    out16.style.width = '60%';
    out16.style.height = '90px';
}

btn17.onclick = () =>{
    out16.classList.add('bg-orange');
}
btn18.onclick = () =>{
    out16.style.width = '90%';
    out16.style.height = '100px';
    out16.classList.remove('bg-orange');
}



//  По нажатию на кнопку BUTTON вывести массив
//  Вывести длину массива
//  Наименьший элемент
//  Наибольший элемент
//  Сумму элементов

let btn19 = document.querySelector('.b-19'); // кнопка

let out19_1 = document.querySelector('.out-19-1'); // вывести массив
let out19_2 = document.querySelector('.out-19-2'); // Вывести длину массива
let out19_3 = document.querySelector('.out-19-3'); // Наименьший элемент
let out19_4 = document.querySelector('.out-19-4'); // Наибольший элемент
let out19_5 = document.querySelector('.out-19-5'); // Сумму элементов

let arr19 = [1, 2, 4, 32, 5, 65, 79, 10, 100 , 102, 0]; // Массив

let maxArr19 = arr19[1];
let minArr19 = arr19[1];
let sumArr19 = 0;

for(let i = 0; i < arr19.length; i++){
    if(maxArr19 < arr19[i]){
        maxArr19 = arr19[i]
    }

    if(minArr19 > arr19[i]){
        minArr19 = arr19[i]
    }

    sumArr19 += arr19[i];
}

btn19.onclick = () =>{        // функция нажатия на кнопку
    out19_1.innerHTML = `[${arr19}]`;
    out19_2.innerHTML = 'Длина массива = ' + arr19.length;
    out19_3.innerHTML = 'Наименьший элемент = ' + minArr19;
    out19_4.innerHTML = 'Наибольший элемнт = ' + maxArr19;
    out19_5.innerHTML = 'Сумма всех элементов = ' + sumArr19;
}


// Есть массив d1, кнопка b-1, input i-1. Напишите функцию f1,
// которая при нажатии читает i-1 и добавляем его в массив.
// После чего выводит массив в .out-1.

// Поскольку мы будем выводить массив d1 неоднократно,
// то давайте вывод массива сделаем отдельной функцией,
// showArr - она подготовлена. Изучите ее - это хороший способ оптимизировать код.

let out20 = document.querySelector('.out-20'); // поле вывода
let in20 = document.querySelector('.in-20');
let btn20 = document.querySelector('.btn-20'); // кнопка push
let btn20_1 = document.querySelector('.btn-20-1'); // кнопка pop
let btn20_2 = document.querySelector('.btn-20-2'); // кнопка shift
let btn20_3 = document.querySelector('.btn-20-3'); // кнопка unshift


let arr20 = [33,'best', 66, 'best']

function showArr (){
    out20.innerText = `[${arr20}]`;
}
btn20.onclick = () =>{
    arr20.push(in20.value);
    showArr();
}
btn20_1.onclick = () =>{
    arr20.pop()
    showArr();
}
btn20_2.onclick = () =>{
    arr20.unshift(in20.value);
    showArr();
}
btn20_3.onclick = () =>{
    arr20.shift()
    showArr();
}