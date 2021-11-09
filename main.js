const company= [
    {name: "Company One", category: "Finance", start: 1988, end: 2009},
    {name: "Company Two", category: "Retali", start: 1988, end: 2003},
    {name: "Company Three", category: "Auto", start: 1981, end: 2003},
    {name: "Company Four", category: "Technology", start: 1981, end: 2013},
    {name: "Company Five", category: "Finance", start: 1981, end: 2003},
    {name: "Company Six", category: "Technology", start: 1981, end: 2009},
    {name: "Company Seven", category: "Auto", start: 1983, end: 2003},
    {name: "Company Eight", category: "Finance", start: 1981, end: 2001},
    {name: "Company Nine", category: "Retali", start: 1981, end: 2003}]

const ages = [33,12,20,16,5,5,7,45,44,78,12,24,26,21]

// const numOfCategory = company.filter(category1=> category1.category === 'Auto');

// console.log(numOfCategory);

let ageSum = ages.reduce((Total, age) => Total+age, 0);

console.log(ageSum);