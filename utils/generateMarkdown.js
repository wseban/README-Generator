// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return {
      badge: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      link: 'https://opensource.org/licenses/MIT'
  }
  }
  if (license === 'Mozilla'){
    return {
    badge: '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)',
      link: 'https://opensource.org/licenses/MPL-2.0'
    }
  }
  if (license === 'Apache'){
    return {
      badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      link: 'https://opensource.org/licenses/Apache-2.0'
    }
  }
  if(license === "IBM"){
    return {
      badge: '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)',
      link: 'https://opensource.org/licenses/IPL-1.0'
    }
  }else {
    return{
    badge: '',
    link: ''
    }
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
/*function renderLicenseLink(license) {
  let licenseLink;
  if (license === 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  }
  if (license === 'Mozilla'){
    licenseLink = 'https://opensource.org/licenses/MPL-2.0'
  }
  if (license === 'Apache'){
    licenseLink = 'https://opensource.org/licenses/Apache-2.0'
  }
  if(license === "IBM"){
    licenseLink = 'https://opensource.org/licenses/IPL-1.0'
  }else {
    licenseLink = ''
  }
  return licenseLink;
}*/
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
/*function renderLicenseSection(license) {}*/

// TODO: Create a function to generate markdown for README
/*function generateMarkdown(data) {
  return `# ${data.title}*/

// `;
// }

module.exports = renderLicenseBadge;
