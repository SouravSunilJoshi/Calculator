let x = document.querySelector('#len1');
let x2 = document.querySelector('#len2');
let in1 = document.querySelector('.input');
let in2 = document.querySelector('.inputans');
let clear = document.querySelector('.clear');

function calcy(){
    if (x.value === "celsius" && x2.value === "celsius"){
        in2.value = in1.value;
    }
    else if(x.value === "celsius" && x2.value === "fahrenheit"){
        in2.value = ((in1.value*9/5)+32).toFixed(2);
    }
    else if(x.value === "celsius" && x2.value === "kelvin"){
        in2.value = Number(in1.value)+273.15;
    }
    else if (x.value === "fahrenheit" && x2.value === "celsius"){
        in2.value = ((in1.value-32)*5/9).toFixed(2);
    }
    else if(x.value === "fahrenheit" && x2.value === "fahrenheit"){
        in2.value = in1.value;
    }
    else if(x.value === "fahrenheit" && x2.value === "kelvin"){
        in2.value = ((in1.value-32)*5/9+273.15).toFixed(2);
    }
    else if (x.value === "kelvin" && x2.value === "celsius"){
        in2.value = (in1.value-273.15).toFixed(2);
    }
    else if(x.value === "kelvin" && x2.value === "fahrenheita"){
        in2.value = ((in1.value- 273.15)*9/5+32).toFixed(2);
    }
    else if(x.value === "kelvin" && x2.value === "kelvin"){
        in2.value = in1.value;
    }
}

function calcy2(){
    if (x2.value === "celsius" && x.value === "celsius"){
        in1.value = in2.value;
    }
    else if(x2.value === "celsius" && x.value === "fahrenheit"){
        in1.value = ((in2.value*9/5)+32).toFixed(2);
    }
    else if(x2.value === "celsius" && x.value === "kelvin"){
        in1.value = Number(in2.value)+273.15;
    }
    else if (x2.value === "fahrenheit" && x.value === "celsius"){
        in1.value = ((in2.value-32)*5/9).toFixed(2);
    }
    else if(x2.value === "fahrenheit" && x.value === "fahrenheit"){
        in1.value = in2.value;
    }
    else if(x2.value === "fahrenheit" && x.value === "kelvin"){
        in1.value = ((in2.value-32)*5/9+273.15).toFixed(2);
    }
    else if (x2.value === "kelvin" && x.value === "celsius"){
        in1.value = (in2.value-273.15).toFixed(2);
    }
    else if(x2.value === "kelvin" && x.value === "fahrenheit"){
        in1.value = ((in2.value- 273.15)*9/5+32).toFixed(2);
    }
    else if(x2.value === "kelvin" && x.value === "kelvin"){
        in1.value = in2.value;
    }
}



in1.addEventListener('input',calcy);
in2.addEventListener('input',calcy2);
x.addEventListener('click',calcy);
x2.addEventListener('click',calcy);
clear.addEventListener('click',e=>{
    in2.value = "";
    in1.value = "";
});

