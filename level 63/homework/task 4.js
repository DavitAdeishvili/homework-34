// Temperature Conversion Write a function `convert_temperature` to convert temperatures between Celsius and Fahrenheit. It should have two parameters: temperature and scale (either "C" for Celsius or "F" for Fahrenheit), with "C" as the default scale.

function convert_temperature (temperature, scale = "C"){
    // lets say 1C == 2F
    if (scale == F){
        console.log(temperature / 2 + "C")
    }
    else{
        console.log(temperature * 2 + "F")
    }
}

convert_temperature (2, 'F')
convert_temperature (100)