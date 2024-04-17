#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const answer: { Sentence: string } = await inquirer.prompt([
  {
    type: "input",
    name: "Sentence",
    message: chalk.yellow.bold("Enter a sentence or word to count words and letters"),
  },
]);

//   The regular expression \s+ matches one or more whitespace characters (spaces, tabs, newlines).
// //   The split(/\s+/) call splits the string wherever there’s one or more whitespace characters.
// The .replace(/ /g, "") call replaces all spaces with an empty string.
console.log(chalk.bold.blue.bgYellow("\t\nANSWER\n\t"));

const words = answer.Sentence.trim().split(/\s+/);
console.log(chalk.bold.yellow(words));
console.log(chalk.bold.blue.bgYellow(`\t\nThe total number of words it contains is: ${words.length}\n\t`));

const letters = answer.Sentence.replace(/ /g, "").split("");
console.log(chalk.bold.yellow(letters));
console.log(chalk.bold.bgYellow.blue(`\t\nThe total number of letters it contains: ${letters.length}\n\t`));
