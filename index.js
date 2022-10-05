// Problem 1
function evenOdd(arr) {
     let evenArry = []
     let oddArry = []

     for (let i = 0; i < arr.length; i++) {
          if (arr[i] % 2) {
               oddArry.push(arr[i])
          } else {
               evenArry.push(arr[i])
          }
     }

     console.log(oddArry)
     console.log(evenArry)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 55]

//evenOdd(arr)

//probelm 2

let primeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let newArry = []
function primeFinder(primeArray) {
     for (let i = 0; i < primeArray.length; i++) {
          checkPrime(primeArray[i])
     }
}
function checkPrime(number) {
     if (number <= 1) {
          return false;
     } else {
          for (let i = 2; i < number; i++) {
               if (number % i == 0) {
                    return false;
               }
          }
          newArry.push(number)
     }
}
primeFinder(primeArray)
// console.log(newArry)

//Problem 3 ( medium )

var letter = 'a'

function vowelChecker(letter) {
     let vowels = "a e i o u"
     if (vowels.includes(letter)) {
          console.log("This is a vowel")
     } else {
          console.log("This is not a vowel")
     }
}

//vowelChecker(letter)

//Problem 4( medium  2 )

let string1 = "So dark the con of man"
let string2 = "Madonna of the Rocks"

function anagram(str1, str2) {
     let x = str1.split(" ").join("").toLowerCase().split('').sort().toString()
     let y = str2.split(" ").join("").toLowerCase().split('').sort().toString()
     if (x === y) {
          console.log(true)
     } else {
          console.log(false)
     }
}

//anagram(string1, string2)


//Problem 5 (medium 3)

function gdc_two_numbers(x, y) {
     if ((typeof x !== 'number') || (typeof y !== 'number'))
          return false;
     x = Math.abs(x);
     y = Math.abs(y);
     while (y) {
          var t = y;
          y = x % y;
          x = t;
     }
     console.log(x);
}

//gdc_two_numbers(336,360)

// Problem 6 (medium 4)
class Car{

     constructor(make, model, year, milage, color){
          this.make = make
          this.model = model
          this.year = year 
          this.milage = milage
          this.color = color
     }

     driveTowork(){
          let oldMilage = this.milage
          this.milage = this.milage - 33
          return(`old ${oldMilage} | new millage ${this.milage}`)
     }

     driveAroundTheWorld() {
          let oldMilage = this.milage
          this.milage = this.milage - 24000
          return(`old ${oldMilage} | new millage ${this.milage}`)
     }

     runErrands(){
          let oldMilage = this.milage
          this.milage = this.milage - 30
          return(`old ${oldMilage} | new millage ${this.milage}`)
     }
}
let fordF150 = new Car('F150', 'Raptor', '2020', 5000, 'black')                                                                  

// console.log(fordF150.milage)
// console.log(fordF150.driveTowork())
// console.log(fordF150.driveAroundTheWorld())
// console.log(fordF150.runErrands())

//Problem 7 (hard)

let str = "{something}"
let endBrackets = ["]", "}", ")"]

function typeofbrackets(str){
     if (str[0] === "{" && str[str.length-1] === "}") {
          console.log('true')
     } else if(str[0] === "[" && str[str.length-1] === "]") {
          console.log('true')
     } else if(str[0] === "(" && str[str.length-1] === ")"){
          console.log('true')
     } else {
          console.log(false)
     }
}

typeofbrackets(str)






