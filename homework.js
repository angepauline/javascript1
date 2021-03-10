var amount;
var balance;
var newbalance;

function comparing(balance,amount){
if(amount>balance){
    console.log('please try again'); 
}
if(amount<500){
    console.log('please try again');

}
else if(amount%500!=0){
    console.log('please try again');   
}
else if(amount<balance){
   
    newbalance=balance-amount;
}
return newbalance;
}
console.log(comparing(20000,1900))
