let ans = "";
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.inputstr');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',e =>{
        if (e.target.innerHTML == "="){
            ans = eval(ans);
            display.value = ans.toFixed(4).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
        }
        else if(e.target.innerHTML == "C"){
            ans = "";
            display.value = ans;
        }
        else if(e.target.innerHTML == "AC"){
            let rekensom  = document.querySelector('.inputstr').value;
           ans = document.querySelector('.inputstr').value=rekensom.substring(0,rekensom.length -1);
        }
        else{
        ans = ans + e.target.innerHTML;
        display.value = ans;
        }
    });
});