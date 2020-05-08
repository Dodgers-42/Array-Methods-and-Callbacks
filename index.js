import { fifaData } from './fifa.js';
// console.log(fifaData);


// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final

function fifaData (HomeTeamNames){
    console.log()
};
fifaData()

(b) Away Team name for 2014 world cup final

function fifaData (AwayTeamNames){
    console.log()
};
fifaData()

(c) Home Team goals for 2014 world cup final
};
function WorldCup (goals){
    console.log(HomeTeam)
};
WorldCup()

(d) Away Team goals for 2014 world cup final

function WorldCup (goals){
    console.log(AwayTeam)
};
WorldCup()

(e) Winner of 2014 world cup final */

function worldcup(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]["Years"] === 2014 && array[i]["Stage"] === 'Final'); {
            // console.log(array[i]["Home Team Name"])
        }
    }    
}
worldcup(fifaData);
/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data1) {
    const arrayFinal = data1.filter((final) => {
    return final.Stage === 'Final';
  });
    return arrayFinal;}
  getFinals(fifaData)


// };
// console.log(getFinals(fifaData))
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

// function getYears(callback,data) {
//    const years = []
//     const finals = callback(data)
//     finals.map(function(game){
//         years.push(game.Year)
//     })
//     return years
// };

// console.log(getYears(getFinals));
function getYears(callback,data) {
    const years = []
     let finals = callback(data)
     for (let i=0; i < finals.length; i++){     
         years.push(finals[i].Year)    
     }
     return years
 };
 
 getYears(getFinals,fifaData);
 
/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(callback,array) {
const winners = []
const finals1 = callback(array)   
console.log(finals1)

for (let i=0; i < finals1.length; i++){
    // if(finals1["Home Team Goals"] === finals1["Away Team Goals"]){
    //     const winners = finals1["Win conditions"](0,finals1["Win conditions"].index);
    // }else
    
     if (finals1[i]["Home Team Goals"] > finals1[i]["Away Team Goals"]){
     
        winners.push(finals1[i]["Home Team Name"]);      
    }else{
        winners.push(finals1[i]["Away Team Name"]);
    }

    
    
};
console.log(winners)
return winners;
}
getWinners(getFinals,fifaData);

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(callback1, callback2,array1,callback3) {

    let winners = callback2(callback3,array1);
    console.log(winners)
    let years = callback1(callback3,array1);
    let allwinners = []
    console.log(years)
    for (let i=0; i < winners.length; i++){
        console.log(`In ${years[i]}, ${winners[i]} won the world cup!`)
    }
    return allwinners;
};

getWinnersByYear(getYears,getWinners,fifaData,getFinals);



/* Task 7: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, initials) {
    let wins = data.reduce((acc, finals1)) =>{
        if(finals1.Stage === "Final"){
            let winnerInitials;
            if(finals1["Home Team Goals"] < finals1["Away Team Goals"]) {
                winnerInitials = finals1["Home Team Name"].substr(0, 3).toUpperCase();

            }else if(finals1["Home Team Goals"] < finals1["Away Team Goals"]) {
                winnerInitials = finals1["Away Team Name"].substr(0, 3).toUpperCase();   
            }else{
                winnerInitials = finals1["win conditions"].substr(0, 3).toUpperCase(); 
            }
            if(winnerInitials === initials){
                return acc + 1;
            }
        }
        return acc;
    },0);
    return wins;

};

console.log(getCountryWins(fifaData, "USA"));

/* Task 8: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let homeTeamGoalsAvg = data.reduce((goals, game, index)=>{
        let gameCounter = index + 1;
        return goals + game["Home Team Goals"] / gamesCounter;
    },0);
    let awayTeamGoalsAvg = data.reduce((goals, game, index)=>{
        let gameCounter = index + 1;
        return goals + game["Away Team Goals"] / gameCounter;
    },0);
    return {
        homeTeamGoalsAvg,
        awayTeamGoalsAvg,
    }
    

};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* STRETCH 1: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* STRETCH 2: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
