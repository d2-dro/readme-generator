// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "Please enter your GitHub username.",
    "Please enter your email address.",
    "Please enter the name of your project.",
    "Please provide a short description of your project.",
    "What kind of license do you want to use for your project?",
    "What command should be used for installation?",
    "What command should be used to conduct a test?",
    "What is the usage information for this repository?",
    "How are contributions handled for this repository?",
];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: questions[0],
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Enter your GitHub username");
                    return false;
                }
            },

        },
        {
            type: 'input',
            name: 'email',
            message: questions[1],
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Enter your email");
                    return false;
                }
            },
        },
        {
            type: 'input',
			name: 'title',
			message: questions[2],
			validate: (input) => {
				if (input) {
					return true;
				} else {
					console.log("Enter the name of your project");
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'description',
			message: questions[3],
            validate: (input) => {
                if (input) {
                    return true;
                } else {
                    console.log("Enter a description for your project")
                    return false;
                }
            },
		},
		{
			type: 'confirm',
			name: 'confirmDemo',
			message: "Is there a demo video you wish to add to your description?",
			default: false,
		},
		{
			type: 'input',
			name: 'demo',
			message: "Demo video: ",
			when: ({ confirmDemo }) => {
				if (confirmDemo) {
					return true;
				} else {
					return false;
				}
			},
		},
		{
			type: 'list',
			name: 'license',
			message: questions[4],
			choices: ["MIT", "Apache_2.0", "GPLv3", "BSD_3", "None"],
		},
		{
			type: 'input',
			name: 'dependencies',
			message: questions[5],
			validate: (input) => {
				if (input) {
					return true;
				} else {
					console.log("Enter dependencies for project");
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'command',
			message: questions[6],
			validate: (input) => {
				if (input) {
					return true;
				} else {
					console.log("Enter test command");
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'usage',
			message: questions[7],
		},
		{
			type: 'input',
			name: 'contribution',
			message: questions[8],
		},
    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./${fileName}`, data, err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true, 
                message: "README generated"
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(data => {
        return generateMarkdown(data)
    }).then(pageMarkdown => {
        return writeToFile("README.md", pageMarkdown)
    }).catch(err => {
        console.log(err)
    })
}

// Function call to initialize app
init();
