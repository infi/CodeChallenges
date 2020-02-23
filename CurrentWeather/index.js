// This uses the OpenWeather API like the Website does.

const fetch = require("make-fetch-happen")

const constructSearchUrl = city => {
    return `https://openweathermap.org/data/2.5/find?callback=a&q=${city}&sort=population&cnt=1&appid=b6907d289e10d714a6e88b30761fae22`
}

const KtoC = kelvin => {
    return kelvin - 273.15
}

const KtoF = kelvin => {
    return KtoC(kelvin) * 9 / 5 + 32
}


/**
 * Remove JSONP
 * @param {String} input Input
 * @param {String} callback Name of callback
 */
const deJSONP = (input, callback) => {
    const ending = input.substr(callback.length + 1)
    const b = ending.split("")
    b.splice(ending.length - 1, 1)
    return b.join("")
}

const CITY = process.argv[2]

/**
 * Proceed with doing weather 
 * @param {Object} body Body
 */
const proceed = body => {
    const temp = body.list[0].main.temp
    console.log("The temperature in", CITY, "is", Math.round(KtoF(temp)), "°F or", Math.round(KtoC(temp)), "°C.")
}

if (CITY) {
    fetch(constructSearchUrl(CITY)).then(r => {
        r.text().then(rawbody => {
            // remove JSONP padding and parse
            const body = JSON.parse(deJSONP(rawbody, "a"))
            if (body.count < 1) {
                console.log("City not found. Try a bigger one in your area?")
            } else {
                proceed(body)
            }
        })
    })
} else return console.log("Needs an argument")