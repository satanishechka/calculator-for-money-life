

let money;
let time;

let appData = {
    
    budget:money,
    timeData:time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

let start = document.getElementById('start')
let budgetValue = document.getElementsByClassName('budget-value')[0]
let dayBudgetValue = document.getElementsByClassName('daybudget-value')[0]
let levelValue = document.getElementsByClassName('level-value')[0]
let expensesValue = document.getElementsByClassName('expenses-value')[0]
let optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0]
let incomeValue = document.getElementsByClassName('income-value')[0]
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0]
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0]

let inputs = document.getElementsByClassName('expenses-item');

let expensesItemBtn = document.getElementsByTagName('button')[0]

let expensesItemBtn2 = document.getElementsByTagName('button')[1]

let calculate = document.getElementsByTagName('button')[2]

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item')
console.log(optionalExpensesItem)

let chooseIncome = document.querySelector('.choose-income')
let savings = document.querySelector('#savings')
let choseSum = document.querySelector('.choose-sum')
let choosePercent = document.querySelector('.choose-percent')
let yearValue = document.querySelector('.year-value')
let monthValue = document.querySelector('.month-value')
let dayValue = document.querySelector('.day-value')

expensesItemBtn2.disabled=true;
expensesItemBtn.disabled=true;
calculate.disabled=true;


start.addEventListener('click', function() {

    time = prompt ("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt ("Ваш бюджет на месяц?", "")
 while(isNaN(money)||(money) == "" || (money) ==null) {
    money = +prompt ("Ваш бюджет на месяц?", "")
}
 appData.budget = money;
 appData.timeData = time
 budgetValue.textContent = money.toFixed();
 yearValue.value = new Date(Date.parse(time)).getFullYear();
 monthValue.value = new Date(Date.parse(time)).getMonth() +1;
 dayValue.value = new Date(Date.parse(time)).getDate();
 expensesItemBtn2.disabled=false;
expensesItemBtn.disabled=false;
calculate.disabled=false;

});
expensesItemBtn.addEventListener('click', function() {

    let sum=0;
    for(i=0;i<inputs.length;i++) {
        
        let a = inputs[i].value;
        let b = inputs[++i].value;

   
       if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
   
           console.log ("done");
       
           appData.expenses[a] = b;
           sum += +b;
       } else {
           i=i-1
            console.log ("bad result");
       }
       expensesValue.textContent = sum;
       }
       
});
expensesItemBtn2.addEventListener('click', function(){
    for(i=0;i<optionalExpensesItem.length;i+=1){
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesValue.textContent +=appData.optionalExpenses[i]+' ';
    }


});

calculate.addEventListener('click', function(){
    if(appData.budget!=undefined){
        appData.budget = appData.budget-expensesValue.textContent
        appData.moneyPerDay = (appData.budget/30).toFixed()
        dayBudgetValue.textContent = appData.moneyPerDay
        
        if (appData.moneyPerDay < 100) {
            levelValue.textContent =  "бомж";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "норм";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent =  "вы богач!";
        } else {
            levelValue.textContent =  "error";
        
        };
    }
    else{
        dayBudgetValue.textContent = "error"
    }
    

});
chooseIncome.addEventListener('input', function(){
    let items = chooseIncome.value;
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});
savings.addEventListener('click', function(){
if(appData.savings==true) {
    appData.savings = false;
} else {
    appData.savings = true;
}

});
choseSum.addEventListener('input', function(){
if(appData.savings==true){
   let summ = +choseSum.value;
   let percent = +choosePercent.value;
   appData.monthInCome = summ/100/12*percent;
   appData.yearInCome = summ/100*percent;
   monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
   yearsavingsValue.textContent = appData.yearInCome.toFixed(1);


}
});
choosePercent.addEventListener('input', function(){
    if(appData.savings==true){
       let summ = +choseSum.value;
       let percent = +choosePercent.value;
       appData.monthInCome = summ/100/12*percent;
       appData.yearInCome = summ/100*percent;
       monthsavingsValue.textContent = appData.monthInCome.toFixed(1);
       yearsavingsValue.textContent = appData.yearInCome.toFixed(1);
    
    
    }
    });


