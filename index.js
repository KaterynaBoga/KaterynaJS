//Задача 1
var str = "     5";           
var num = +str;
var num = Number(str);
console.log(typeof num);

//Задача 2
var a = 20, b = 11;
var c = a+(++b*3-6)/3;
console.log(c);

//Задача 3
var arrayLength = +prompt('Укажите длину массива');
var minNumber = +prompt('Укажите первое случайное число');
var maxNumber = +prompt('Укажите второе случайное число');
var arr = [];

createArray(arrayLength, minNumber, maxNumber, arr);
function createArray(arrayLength, minNumber, maxNumber, _arr){
  for (var i = 0; i < arrayLength; i++) {
    _arr[i] = Math.random() * maxNumber + minNumber;
    console.log(_arr[i]);
  }     
}
console.log(arr);

//Задача 4
var experience = document.getElementById('experience');
var coefficient = 0;
var pension = 0;

experience.addEventListener('blur', function() { 		
    var pattern = /\d+/;
    var str = this.value;
    var num = str.match(pattern);
    
    if(pattern.test(str)) {  	           
      if(num[0] > 30) {
        coefficient = 0.8;
      }
      if(num[0] > 20 && num[0] <= 30) {
        coefficient = 0.6;
      }
      if(num[0] <= 20) {
        coefficient = 0.4;
      }
      var pension = 4000 * coefficient;
      console.log(pension);
    }	else {
      console.log('Введите числовое значение');
      this.value = '';
    }
      
});

//Задача 5
var arrayWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var today = new Date().getDay();

switch (today) {
  case 1: 
  case 2:
  case 3:
  case 4:
  case 5:
  console.log('Трудовые будни ' + arrayWeek[today]);
  break;
  case 6:
  case 0:
  console.log('Выходной ' + arrayWeek[today]);
}

//Задача 6
function User(name, university) {
    this.name = name;
    this.university = university;
 }            
 User.prototype.sleepDuration = 8;  
 
 User.prototype.present = function() {
   console.log("My name is " + this.name);
   console.log("I am a student of the " + this.university);
 }
 User.prototype.sleepAtHome = function(){
   console.log("I will sleep " + this.sleepDuration + " hours");
 }
 function Student(name, university) {
   this.name = name;
   this.university = university;
 }
 
 Student.prototype = new User();
 var student = new Student('Vasya', 'DonGTU');
student.present();
 
try {
   Student.prototype.sleepInClass = function(){
   console.log("I will sleep 3 hours in the class");
 }

} catch (err) {
  console.log(err)
}
