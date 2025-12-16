
const chalk = require('chalk');


const WildColleagues = [
    { name: 'Victor', color: chalk.red },
    { name: 'Camélia', color: chalk.blue },
    { name: 'Karim', color: chalk.green },
    { name: 'Stacy', color: chalk.magenta }
];


colleagues.forEach(colleague => {
    console.log(colleague.color(colleague.name));
});