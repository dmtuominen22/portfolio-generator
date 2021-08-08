const inquirer = require("inquirer");
const { TimeoutError } = require("rxjs");
// const fs = require('fs');
// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name? (Required)",
      validate: nameInput => {
          if (nameInput) {
              return true;
          }
          else {
              console.log('please enter your name!');
              return false;
          }
      }
    },
    {
      type: "input",
      name: "github",
      message: "Enter your Github Username (ARequired)",
      validate: githubInput => {
          if (githubInput) {
              return true;
          }else {
              console.log("please enter your GitHub username!");
              return false;
          }
      }
    },
    {
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter some information about yourself for an "About" section?',
        default: true
      },
    {
      type: "input",
      name: "about",
      message: "Provide some informationa bout yourself:",
      when: ({confirmAbout})=> confirmAbout
    }
  ]);
};

const promptProject = portfolioData => {
   
console.log(`
  =================
  Add a New Project
  =================
  `);
   //if there's no 'projects' array property, crete one
   if(!portfolioData.projects) {
       portfolioData.projects = [];
   }  
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: nameInput => {
          if (nameInput) {
              return true;
       }else {
           console.log('you need to enter a project name!');
       }
      }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descriptionInput => {
            if (descriptionInput {
                return true;
            } else {
                console.log('You need to enter a project description');
                return false;
            }
          }
        },
      {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: linkInput => {
          if (linkInput) {
              return true;
          }else {
              console.log('You need to enter a project GitHub link!');
              return false;
          }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
});
};
 
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
