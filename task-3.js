function totalBudget(laptopQ, tabletQ, mobileQ) {
    const laptop = 35000;
    const tablet = 15000;
    const mobile = 20000;

    const total = laptop * laptopQ + tablet * tabletQ + mobile * mobileQ;
    return total; 
}   

const total = totalBudget(2, 3, 4);
console.log('Total budget: ', total);