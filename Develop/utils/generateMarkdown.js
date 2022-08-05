// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return ""
  } else {
    return `![License](https://img.shields.io/badge/License-${license}-informational.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return "";
  } else {
    return `*[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ''
  } else {
    return `## License
    This project is licensed under the terms of the ${license} license.
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
 
 ## Installation
 To install necessary dependencies run the following command:
   ${data.dependencies}
 ## Usage
 ${data.contribution}
 ${renderLicenseSection(data.license)}
 ## Contributing
 ${data.contribution}
 ## Tests
   ${data.command}
 ## Questions
 Direct questioins about this repository to [${data.github}](https://github.com/${data.github}) or [${data.email}](mailto:${data.email})
 ## Demonstration
 * ${getDemo(data.demo)}
`;
}

function getDemo(demo) {
  if (demo) {
    return `Here is a demonstration video: ${demo}`
  } 

}

module.exports = generateMarkdown;