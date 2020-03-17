const inquirer = require('inquirer')

function getCharacterClass() {
    inquirer.prompt({
            name: 'class',
            type: 'rawlist',
            message: 'Choose which side you will fight for.',
            choices: ['Dark', 'Light']
        })
        .then(
            answer => {
                let characterClass = answer.class;
                console.log(`You picked the ${characterClass} side`)
            }
        )
};

getCharacterClass();