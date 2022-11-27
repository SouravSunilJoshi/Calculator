let val = document.querySelector('.input2');
let per = document.getElementById('percentage');
let value = document.getElementById('value');
let ans = "";
const button2 = document.querySelector('.ans');

function valueper(){
    value.innerHTML = per.value+"%";
    ans = (val.value*(per.value/100));
    button2.innerHTML = Number(ans).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
}


per.addEventListener('input',valueper);
val.addEventListener('input',valueper);