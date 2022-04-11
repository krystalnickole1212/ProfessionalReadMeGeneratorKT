
// If there is no license, return an empty string
function renderLicenseBadge(license) {}



// If there is no license, return an empty string
function renderLicenseLink(license) {return "[Link]("+ license +")"}



// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function to generate markdown for README
function generateMarkdown(data) {
  return ` ${data.userName} \n
  # ${data.title} \n
  ## ${data.description} \n
  ## ${data.installation} \n
  ## ${data.contribution} \n
   ### [Link](${data.link}) \n
`
+ renderLicenseLink("/github/license/:user/:repo");
}

module.exports = generateMarkdown;
