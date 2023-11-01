/*
function solve(city){
    let keys = Object.keys(city);

    for(let key of keys){
        console.log(key, '->', city[key]);
    }
}
solve({
name: "Plovdiv",
area: 389,
population: 1162358,
country: "Bulgaria",
postCode: "4000"
});
*/
//alternative solution:

function solve(city){
    for(let key of Object.keys(city)){
        console.log(key, '->', city[key]);
    }
}
solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
    }); 