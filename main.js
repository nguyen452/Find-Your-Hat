const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
        this._indexOfPathCharacter = [0, 0];
        this._isPlaying = false;
    }

    static moveUp() {

    }
    static moveDown() {

    }
    static moveLeft() {

    }
    static moveDown() {

    }


    // generate field
    static generateField(rows, columns) {
        let field = [];

        //helper function to generate random index for hat
        function hatIndexRandomizer (rows, columns) {
            let row = Math.floor(Math.random() * rows)
            let column = Math.floor(Math.random() * columns)
            //check if row and column are both not 0
            if (!(row === 0 && column === 0)) {
                return [row, column]
            } else {
                return hatIndexRandomizer(rows, columns);
            }
        }
        const hatIndex = hatIndexRandomizer(rows, columns);
        //helper function to randomly choose between hole, fieldCharacter, and pathCharacter
        const randomizer = (rows, columns) =>  {
            if (rows === 0 && columns === 0) {
                return pathCharacter;
            } else if (rows === hatIndex[0] && columns === hatIndex[1]) {
                return hat;
            }else if (Math.floor(Math.random() * 3) === 0) {
                return hole;
            }else {
                return fieldCharacter;
            };
        };

        //create rows and column using nested loops
        for (let i = 0; i < rows; i++) {
            const row = [];
            for (let j = 0;  j < columns; j++) {
                row.push(randomizer(i, j))
            }
            field.push(row)
        }
        return field;
    }
    // turn  the field into strings to manipulate it easier
    print() {
        return this._field.map((row) => {
            return row.join('')
        }).join('\n');
    }
    //method to move the pathCharacter
    movePathCharacter(direction) {
        switch (direction) {
            case 'u':
                this._indexOfPathCharacter[0] -= 1;
                if(this._indexOfPathCharacter[0] < 0) {
                    console.log('you lose, you went out of bounds');
                    this._isPlaying = false;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hole) {
                    console.log('you lose, you fell in a hole');
                    this._isPlaying = false;;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hat) {
                    console.log('you win, you found your hat');
                    this._isPlaying = false;;
                }else {
                    this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] = pathCharacter;
                    console.clear();
                    console.log(this.print());
                }
                break;
            case 'd':
                this._indexOfPathCharacter[0] += 1;
                if(this._indexOfPathCharacter[0] > this._field.length - 1  ) {
                    console.log('you lose, you went out of bounds');
                    this._isPlaying = false;;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hole) {
                    console.log('you lose, you fell in a hole');
                    this._isPlaying = false;;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hat) {
                    console.log('you win, you found your hat');
                    this._isPlaying = false;;
                }else {
                    this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] = pathCharacter;
                    console.clear();
                    console.log(this.print());
                }
                break;
            case 'l':
                this._indexOfPathCharacter[1] -= 1;
                if(this._indexOfPathCharacter[1] < 0) {
                    console.log('you lose, you went out of bounds');
                    this._isPlaying = false;;
                } else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hole) {
                    console.log('you lose, you fell in a hole');
                    this._isPlaying = false;;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hat) {
                    console.log('you win, you found your hat');
                    this._isPlaying = false;;
                } else {
                    this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] = pathCharacter;
                    console.clear();
                    console.log(this.print());
                }
                break;
            case 'r':
                this._indexOfPathCharacter[1] += 1;
                if(this._indexOfPathCharacter[1] > this._field[0].length - 1  ) {
                    console.log('you lose, you went out of bounds');
                    this._isPlaying = false;;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hole) {
                    console.log('you lose, you fell in a hole');
                    this._isPlaying = false;;
                }else if (this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] === hat) {
                    console.log('you win, you found your hat');
                    this._isPlaying = false;;
                }else {
                    this._field[this._indexOfPathCharacter[0]][this._indexOfPathCharacter[1]] = pathCharacter;
                    console.clear();
                    console.log(this.print());
                }
                break;
        }
    };

}


module.exports.Field = Field;
