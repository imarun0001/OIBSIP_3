const deg=document.getElementById('degree');
const res=document.getElementById('result');
const bttn=document.querySelector('button');
const itype=document.getElementById('temp-type');
const otype=document.getElementById('temp-type1');
// window.addEventListener('load',()=>{
//     deg.value='';
//     res.value='';
// });

bttn.addEventListener('click',(e)=>{
    e.preventDefault();
    convert1();
});
function convert1(){
    var val=parseFloat(deg.value);
    if(itype.value=='Celsius' && otype.value=='Fahrenheit')
    {
        var ctof=val*9/5+32;
        res.value=parseFloat(ctof.toFixed(4)); 
    }
    else if(itype.value=='Celsius' && otype.value=='Kelvin')
    {
        var ctok=val+273.15;
        res.value=parseFloat(ctok.toFixed(4));   
    }
    else if(itype.value=='Fahrenheit' && otype.value=='Celsius')
    {
        var ftoc=(val-32)*(5/9);
        res.value=parseFloat(ftoc.toFixed(4));   
    }
    else if(itype.value=='Fahrenheit' && otype.value=='Kelvin')
    {
        var ftok=((val-32)*(5/9))+273.15;
        res.value=parseFloat(ftok.toFixed(4));   
    }
    else if(itype.value=='Kelvin' && otype.value=='Celsius')
    {
        var ktoc=val-273.15;
        res.value=parseFloat(ktoc.toFixed(4));   
    }
    else if(itype.value=='Kelvin' && otype.value=='Fahrenheit')
    {
        var ktof=((val-273.15)*(9/5))+32;
        res.value=parseFloat(ktof.toFixed(4));   
    }
    else 
    {
        res.value=parseFloat(val.toFixed(4));   
    }
}

