'use strict'

import chalk from 'chalk';
import boxen from 'boxen';

const userData = {
    labelCard: chalk.white.bold('    Name:'),
    name: chalk.blue("Your Name"),
    jobLabel: chalk.white.bold('    Job:'),
    job: chalk.blue("Your Job"),
    labelGitHub: chalk.white.bold('  GitHub:'),
    github: chalk.green('https://github.com/') + chalk.greenBright('Your Github username'),
    labelLinkedIn: chalk.white.bold('LinkedIn:'),
    linkedin: chalk.green('https://linkedin.com/in/') + chalk.greenBright('Your Linkedin Username'),
    labelWeb: chalk.white.bold('     Web:'),
    portfolio: chalk.green("www.yourportfolio.com"),
}

const output = `\n ${userData.labelCard} ${userData.name} \n ${userData.jobLabel} ${userData.job} \n ${userData.labelGitHub} ${userData.github} \n ${userData.labelLinkedIn} ${userData.linkedin} \n${userData.labelWeb} ${userData.portfolio} \n
            `


// Output Display
console.log(boxen(output, { title: 'Card', titleAlignment: 'left', padding: 1, margin: 1, borderStyle: 'double', borderColor: "cyan", backgroundColor: 'black' }));
