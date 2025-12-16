import chalk from 'chalk';


const WildColleagues = [
    { name: 'Victor', color: chalk.red },
    { name: 'Camélia', color: chalk.blue },
    { name: 'Karim', color: chalk.green },
    { name: 'Stacy', color: chalk.magenta }
];


WildColleagues.forEach(wildColleague => {
    console.log(wildColleague.color(wildColleague.name));
});