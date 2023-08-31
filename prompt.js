const prompt = require('prompt-sync')({sigint: true});
const { Field } = require('./main.js');

const welcomeMessage = prompt('Welcome to Find Your Hat? would you like to play? enter yes or no ? ')
    if (welcomeMessage.toLowerCase() === 'yes') {
        console.clear()
        const playingField = new Field(Field.generateField(10, 10));
        playingField._isPlaying = true;
        console.log(playingField.print());
        while(playingField._isPlaying) {
            const usersDirectionInput = prompt('which direction would you like to move left= "l", right= "r", up= "u", down ="d" ?')
            playingField.movePathCharacter(usersDirectionInput.toLowerCase());
        }
    }
