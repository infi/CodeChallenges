const readline = require("readline")

const rl = readline.createInterface(process.stdin, process.stdout)

rl.question("How many times should I flip the coin? >", answer => {
    if (isNaN(answer)) {
        console.log("Not a number")
        return process.exit(1)
    }
    const amount = parseInt(answer)

    const results = {
        tails: 0,
        heads: 0
    }

    for (let i = 0; i < amount; i++) {
        results[["tails", "heads"][Math.floor(Math.random() * 2)]]++
    }

    console.log(results)
    process.exit(0)
})