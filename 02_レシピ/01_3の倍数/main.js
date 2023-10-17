const number = 24

if (number % 3 === 0) {
  console.log(number + "!!!!!!")
} else {
  console.log(number)
}
for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!")
  } else {
    console.log(n)
  }
}

const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
genkiFunction(100)

const FizzBuzz = function (number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    }
    if (i % 5 === 0) {
      console.log("Buzz")
    }
    if (i % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}
FizzBuzz(100)

/*
const lovethree = function(number){
    for(x = 1; x <= number; x++){
        if(x)
    }
}
*/
