

//  var grade = prompt("оцeнка сeрвиса");

//  if ( grade >= 5 && grade <=10 ) {
//      alert("Спасибо за высокую оцeнку!");
//  } else if (grade < 5){
//      alert("Мы работаем над улучшением сервиса!");
// } else {
//      alert("error");
//  }
   
// console.log(grade);



var arr = [10, 20, 30, 50, 235, 3000];
console.log(arr.filter(num => ['1','2','5'].includes(num.toString()[0])));



for(var i = 20; i >= 0; i--) {

        console.log(i);
}




var colors = prompt("выберите цвет");
console.log(colors);


switch (colors) {
    case 'красный':
        alert('стоп!');
        break;
     case 'желтый':
            alert('приготовтесь!');
            break;
            case 'зеленый':
                alert('старт');
                break;
                default:
                    alert('error')    
}














