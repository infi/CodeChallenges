const TARGET = 100

const print = console.log

for (let i = 0; i < TARGET; i++) {
    if (i % 3 === 0 && i % 5 === 0) print("FizzBuzz")
    else if (i % 3 === 0) print("Fizz")
    else if (i % 5 === 0) print("Buzz")
    else print(i)
}