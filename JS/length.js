let x = document.querySelector('#len1');
let x2 = document.querySelector('#len2');
let in1 = document.querySelector('.input');
let in2 = document.querySelector('.inputans');
let clear = document.querySelector('.clear');

function calcy(){
    if (x.value === "metre" && x2.value === "metre"){
        in2.value = in1.value;
    }
    else if(x.value === "metre" && x2.value === "mile"){
        in2.value = (in1.value/1609).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
    else if(x.value === "metre" && x2.value === "kilometre"){
        in2.value = (Number(in1.value)/1000).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');;
    }

    else if (x.value === "mile" && x2.value === "metre"){
        in2.value = (in1.value*1609).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
    else if(x.value === "mile" && x2.value === "mile"){
        in2.value = in1.value;
    }
    else if(x.value === "mile" && x2.value === "kilometre"){
        in2.value = (Number(in1.value* 1.609)).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');;
    }

    else if (x.value === "kilometre" && x2.value === "metre"){
        in2.value = (in1.value*1000).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
    else if(x.value === "kilometre" && x2.value === "mile"){
        in2.value = (Number(in1.value/1.609)).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');;
    }
    else if(x.value === "kilometre" && x2.value === "kilometre"){
        in2.value = in1.value;
    }

}

function calcy2(){
        if (x2.value === "metre" && x.value === "metre"){
        in1.value = in2.value;
    }
    else if(x2.value === "metre" && x.value === "mile"){
        in1.value = (in2.value/1609).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
    else if(x2.value === "metre" && x.value === "kilometre"){
        in1.value = (Number(in2.value)/1000).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');;
    }

    else if (x2.value === "mile" && x.value === "metre"){
        in1.value = (in2.value*1609).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
    else if(x2.value === "mile" && x.value === "mile"){
        in1.value = in2.value;
    }
    else if(x2.value === "mile" && x.value === "kilometre"){
        in1.value = (Number(in2.value* 1.609)).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');;
    }

    else if (x2.value === "kilometre" && x.value === "metre"){
        in1.value = (in2.value*1000).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
    }
    else if(x2.value === "kilometre" && x.value === "mile"){
        in1.value = (Number(in2.value/1.609)).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');;
    }
    else if(x2.value === "kilometre" && x.value === "kilometre"){
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















































// Array.from(buttons).forEach((button)=>{
//     button.addEventListener('click',e=>{
//         if (e.target.innerHTML == "C"){
//             ans = "";
//             input.value = ans;
//             inputans.value = ans;
//         }
//         else if(e.target.innerHTML == "<-"){
//             ans = ans.substring(0,ans-1);
//             input.value = ans;
//         }
//         else if(e.target.innerHTML == "="){
//             if (opt1.value ==="metre"&&opt2.value === "metre"){
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="metre"&&opt2.value === "mile"){
//                 ans = ans/1609;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="metre"&&opt2.value === "kilometre"){
//                 ans = ans/1000;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="metre"&&opt2.value === "centimeter"){
//                 ans = ans*1000;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="kilometre"&&opt2.value === "metre"){
//                 ans = ans*1000;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="kilometre"&&opt2.value === "mile"){
//                 ans = ans/1.609;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="kilometre"&&opt2.value === "kilometre"){
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="kilometre"&&opt2.value === "centimeter"){
//                 ans = ans*100000;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="mile"&&opt2.value === "metre"){
//                 ans = ans*1609;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="mile"&&opt2.value === "mile"){
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="mile"&&opt2.value === "kilometre"){
//                 ans = ans * 1.609;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="mile"&&opt2.value === "centimeter"){
//                 ans = ans*160900;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="centimeter"&&opt2.value === "metre"){
//                 ans = ans/100;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="centimeter"&&opt2.value === "mile"){
//                 ans = ans / 160900;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="centimeter"&&opt2.value === "kilometre"){
//                 ans = ans / 100000;
//                 inputans.value = ans.toFixed(4);
//             }
//             else if (opt1.value ==="centimeter"&&opt2.value === "centimeter"){
//                 inputans.value = ans.toFixed(4);
//             }
//         }
//         else{
//             ans = ans + e.target.innerHTML;
//             input.value = ans;
//         }
//     });
// });