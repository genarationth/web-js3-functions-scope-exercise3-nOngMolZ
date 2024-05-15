// Exercise #3.1
const calculateTotalCost = (totalAmount) => {
    const transactionFee = 3;
    const interestRate = 0.001;
    const interest = totalAmount * interestRate;
    const totalCost = totalAmount + transactionFee + interest;
    return totalCost;
}

const totalAmount = 1000;
console.log(calculateTotalCost(totalAmount));

// Exercise #3.2 Part 1
const greetFriends = (name1, name2, name3) => {
    console.log(`Welcome ${name1}, ${name2}, ${name3}`);
}

greetFriends('Mon', 'Ai', 'Namfah');

// Exercise #3.2 Part 2
const calculateAge = (birthYear) => {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    return age;
}

console.log(calculateAge(1993), `year old.`);

// Exercise #3.2 Part 3
const greetFriendsWithAge = (name1, birthYear1, name2, birthYear2, name3, birthYear3) => {
    const age1 = calculateAge(birthYear1);
    const age2 = calculateAge(birthYear2);
    const age3 = calculateAge(birthYear3);

    console.log(`Welcome ${name1}, you are ${age1} year old.`);
    console.log(`Welcome ${name2}, you are ${age2} year old.`);
    console.log(`Welcome ${name3}, you are ${age3} year old.`);
}

greetFriendsWithAge('Mon', 1993, 'Ai', 2000, 'Namfah', 2000);
