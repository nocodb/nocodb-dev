const fs = require('fs')
const path = require('path')

const execSync = require('child_process').execSync;

// extract latest version from package.json
const ncLibPackage = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'packages', 'nc-lib-gui', 'package.json')))

// upgrade nc-lib-gui version in nocodb
ncLibGuiPackage = "nc-lib-gui"
if (process.env.targetEnv === 'DEV') {
    // CHANGE ME
    ncLibGuiPackage += "-dev2"
}
execSync(`cd packages/nocodb && npm install --save --save-exact ${ncLibGuiPackage}@${ncLibPackage.version}`, {});

const nocodbPackageFilePath = path.join(__dirname, '..', 'packages', 'nocodb', 'package.json')
const nocoLibPackage = JSON.parse(fs.readFileSync(nocodbPackageFilePath))
nocoLibPackage.version = process.env.targetVersion;
if (process.env.targetEnv === 'DEV') {
    // CHANGE ME
    nocoLibPackage.name += "-dev2"
}
fs.writeFileSync(nocodbPackageFilePath, JSON.stringify(nocoLibPackage, null, 2));
