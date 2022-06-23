//Today weather forecast in kelvin
const kelvin = 293

//conversion from kelvin to celsius
const celsius = kelvin - 273

//conversion from celsius to fahrenheit
let fahrenheit = celsius*(9/5) +32

//Rounding down the farenheit value
fahrenheit = Math.floor(fahrenheit)

//Using th Newton Scale just for fun
let newton= Math.floor(celsius *(33/100))


console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)


console.log(`The temperature is ${newton} degrees on the Newton scale.`)
