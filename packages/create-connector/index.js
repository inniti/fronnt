#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

function fill(count, character) {
    let str = '';
    for (let i = 0; i < count; i++) {
        str += (character || ' ');
    }
    return str;
}

function printSuccess(projectName) {
    console.log('✅ ' + chalk.green('Successfully generated project: ') + projectName);
    console.log(` _____${fill(projectName.length, '_')}__`);
    console.log(`|  cd ${projectName}  |`);
    console.log(`|  npm install${fill(projectName.length - 8)}  |`);
    console.log(`|  npm run dev${fill(projectName.length - 8)}  |`);
    console.log(`|_____${fill(projectName.length, '_')}__|`);
}

const templates = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
    {
        name: 'project-type',
        type: 'list',
        message: 'What project template would you like to generate?',
        choices: templates
    },
    {
        name: 'project-name',
        type: 'input',
        default: 'my-fronnt-connector',
        message: 'What\'s the project\'s name?',
        validate: function(input) {
            if (/^([A-Za-z\-_\d])+$/.test(input)) {
                return true;
            } else {
                return 'Project name may only include letters, numbers, underscores and hashes.';
            }
        }
    },
    {
        name: 'project-author',
        type: 'input',
        message: 'Who is the project\'s author?'
    }
];

inquirer
    .prompt(QUESTIONS)
    .then(answers => {
        const projectName = answers['project-name'];
        const projectType = answers['project-type'];
        const projectAuthor = answers['project-author'];
        generate({
            type: projectType, name: projectName, author: projectAuthor
        });

        printSuccess(projectName);
    });

function generate(config) {

    const { type, name, author } = config;

    const currentDir = process.cwd();

    const templatePath = path.join(__dirname, 'templates', type);

    if (fs.existsSync(path.join(currentDir, name))) {
        console.log(chalk.red(`The directory ${name} already exists.`));
        process.exit(1);
    }

    fs.mkdirSync(path.join(currentDir, name));

    createDirectoryContents(templatePath, name);

    const packageJsonSrcPath = path.join(currentDir, name, 'package.json.template');
    const packageJsonDestPath = path.join(currentDir, name, 'package.json');
    const packageJsonContent = fs.readFileSync(packageJsonSrcPath, 'utf8');
    const packageJson = JSON.parse(packageJsonContent);
    packageJson.name = name;
    packageJson.author = author || '';
    fs.writeFileSync(packageJsonSrcPath, JSON.stringify(packageJson, null, 2), 'utf8');
    fs.renameSync(packageJsonSrcPath, packageJsonDestPath);

    const envFilePath = path.join(currentDir, name, 'sample.env');
    if (fs.existsSync(envFilePath)) {
        fs.renameSync(envFilePath, path.join(currentDir, name, '.env'));
    }
}


function createDirectoryContents(templatePath, newProjectPath) {
    const filesToCreate = fs.readdirSync(templatePath);
    const currentDir = process.cwd();

    filesToCreate.forEach(file => {
        const origFilePath = `${templatePath}/${file}`;

        const stats = fs.statSync(origFilePath);

        if (stats.isFile()) {
            const contents = fs.readFileSync(origFilePath, 'utf8');

            fs.writeFileSync(path.join(currentDir, newProjectPath, file), contents, 'utf8');
        } else {
            if (stats.isDirectory()) {
                fs.mkdirSync(path.join(currentDir, newProjectPath, file));

                createDirectoryContents(path.join(templatePath, file), path.join(newProjectPath, file));
            }
        }
    });
}
