// function to generate markdown for README

function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Image](#image)
* [License](#license)
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
Why did you build this project?, ${data.Usage}
# Image 
![Screenshot_20221118_021453](https://user-images.githubusercontent.com/112784768/202812093-8dc93acc-a69e-411f-a2d2-0dc7f1b82219.png)
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)
# Questions
If you have any questions about the repo, open an issue or contact ${data.Username} directly at : ${data.Email}.
`
}

module.exports = generateMarkdown;
