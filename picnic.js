function picnicBudget(persons){
    if(persons.typeOf != 'number'){
        return 'send number please!'
    }
    const first100PerCost = 5000;
    const second100PerCost = 4000;
    const restPerCost = 3000;
    if(persons <= 100){
        let total = first100PerCost * persons;
        return total
    }
    else if(persons <= 200){
        const first100TotalCost = first100PerCost * 100;
        const restPersons = persons - 100;
        const second100TotalCost = second100PerCost * restPersons;
        let total = first100TotalCost + second100TotalCost;
        return total
    }
    else{
        const first100TotalCost = first100PerCost * 100;
        const second100TotalCost = second100PerCost * 100;
        const restPersons = persons - 200;
        const restPersonsCost = restPerCost * restPersons;
        let total = first100TotalCost + second100TotalCost + restPersonsCost;
        return total
    }
    
}
const totalCost = picnicBudget(201);
console.log(totalCost);