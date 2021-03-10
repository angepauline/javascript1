var bill;
var tip;
var sum;
function calculator(bill){
    if(bill<50){
        tip=bill*20/100;
    }
    else if("bill>49 $$ bill<201"){
        tip=bill*15/100;
    }
    else if(bill>200){
        tip=bill*10/100;
    }
    return tip
}
console.log(calculator(40));
var bill =[124,48,268]
for(i=0;i<4;i++){
    tip=calculator(bill[i]);
console.log(tip)
}

sum =[calculator(bill[0])+bill[0],calculator(bill[1])+bill[1],calculator(bill[2])+bill[2]]
console.log(sum);







