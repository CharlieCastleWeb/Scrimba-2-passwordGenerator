

let valueSpan     = document.getElementsByClassName("value");
let resultFeet    = document.getElementById("result-feet");
let resultMeters  = document.getElementById("result-meters");
let resultGallons = document.getElementById("result-gallons");
let resultLiters  = document.getElementById("result-liters");
let resultPounds  = document.getElementById("result-pounds");
let resultKilos   = document.getElementById("result-kilos");

function convert(value) {
    let num = parseFloat(value);

    for(let i=0; i<valueSpan.length; i++) {
        valueSpan[i].innerText = value;
    }

    resultFeet.innerText    = numberWithCommas((value*3.28084).toFixed(3));
    resultMeters.innerText  = numberWithCommas((value*0.3048).toFixed(3));
    resultGallons.innerText = numberWithCommas((value*0.2641722).toFixed(3));
    resultLiters.innerText  = numberWithCommas((value*3.785411784).toFixed(3));
    resultPounds.innerText  = numberWithCommas((value*2.20462).toFixed(3));
    resultKilos.innerText   = numberWithCommas((value*0.453592).toFixed(3));
    
    

    //console.log(valueSpan[0]);
}

function numberWithCommas(num) {
    var parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}
