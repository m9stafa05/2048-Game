// Load
document.addEventListener('DOMContentLoaded', () => {
    // Identefie
    const scoreDisplay = document.querySelector('#score');
    const resultDisplay = document.querySelector('.result');
    const gridDisplay = document.querySelector('.grid');
    const width = 5;
    let squres = [];
    let score = 0;
    //Call The Playing Board Function
    createBoard();
    //Call Generate a New Number Function
    generate();
    generate();
    //Call moveRight Function
    moveRight();
    // //Call control Function
    // control()
    // ##########################################
    // Create The Playing Board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const squreDiv = document.createElement('div');
            squreDiv.innerHTML = 0;
            gridDisplay.appendChild(squreDiv);
            squres.push(squreDiv);
            // console.log(squres)
        }
    }

    //Generate a New Number
    function generate() {
        const randomNumber = Math.floor(Math.random() * squres.length);
        console.log(randomNumber);
        if (squres[randomNumber].innerHTML == 0) {
            squres[randomNumber].innerHTML = 2;
            // Check For GameOver
            checkForGameOver()
        } else {
            generate();
        }
        addColors()
    }
    // function generate() {
    //     const randomNumber = Math.floor(Math.random() * squres.length);
    //     if (squres[randomNumber].innerHTML == 0) {
    //         squres[randomNumber].innerHTML = 2;
    //     } else {
    //         generate();
    //     }
    //     // استدعاء دالة تحقق انتهاء اللعبة بعد توليد الرقم
    //     checkForGameOver();
    // }
    // Move Right
    function moveRight() {
        for (let i = 0; i < width * width; i++) {
            if (i % width === 0) {
                let totalOne = squres[i].innerHTML;
                let totalTwo = squres[i + 1].innerHTML;
                let totalThree = squres[i + 2].innerHTML;
                let totalFour = squres[i + 3].innerHTML;
                let totalFive = squres[i + 4].innerHTML;
                let row = [
                    parseInt(totalOne),
                    parseInt(totalTwo),
                    parseInt(totalThree),
                    parseInt(totalFour),
                    parseInt(totalFive),
                ];
                // console.log(row)

                filteredRow = row.filter(num => num);
                let missing = width - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = zeros.concat(filteredRow);
                // console.log(newRow)

                squres[i].innerHTML = newRow[0];
                squres[i + 1].innerHTML = newRow[1];
                squres[i + 2].innerHTML = newRow[2];
                squres[i + 3].innerHTML = newRow[3];
                squres[i + 4].innerHTML = newRow[4];
            }
        }
    }

    // Move Lefe
    function moveLeft() {
        for (let i = 0; i < width * width; i++) {
            if (i % width === 0) {
                let totalOne = squres[i].innerHTML;
                let totalTwo = squres[i + 1].innerHTML;
                let totalThree = squres[i + 2].innerHTML;
                let totalFour = squres[i + 3].innerHTML;
                let totalFive = squres[i + 4].innerHTML;
                let row = [
                    parseInt(totalOne),
                    parseInt(totalTwo),
                    parseInt(totalThree),
                    parseInt(totalFour),
                    parseInt(totalFive),
                ];
                // console.log(row)

                filteredRow = row.filter(num => num);
                let missing = width - filteredRow.length;
                let zeros = Array(missing).fill(0);
                let newRow = filteredRow.concat(zeros);
                // console.log(newRow)

                squres[i].innerHTML = newRow[0];
                squres[i + 1].innerHTML = newRow[1];
                squres[i + 2].innerHTML = newRow[2];
                squres[i + 3].innerHTML = newRow[3];
                squres[i + 4].innerHTML = newRow[4];
            }
        }
    }

    // Move Up
    function moveUp() {
        for (let i = 0; i < width; i++) {
            let totalOne = squres[i].innerHTML;
            let totalTwo = squres[i + width].innerHTML;
            let totalThree = squres[i + width * 2].innerHTML;
            let totalFour = squres[i + width * 3].innerHTML;
            let totalFive = squres[i + width * 4].innerHTML;
            let column = [
                parseInt(totalOne),
                parseInt(totalTwo),
                parseInt(totalThree),
                parseInt(totalFour),
                parseInt(totalFive),
            ];
            // console.log(row)

            filteredColumn = column.filter(num => num);
            let missing = width - filteredColumn.length;
            let zeros = Array(missing).fill(0);
            let newColumn = filteredColumn.concat(zeros);
            // console.log(newRow)

            squres[i].innerHTML = newColumn[0];
            squres[i + width].innerHTML = newColumn[1];
            squres[i + width * 2].innerHTML = newColumn[2];
            squres[i + width * 3].innerHTML = newColumn[3];
            squres[i + width * 4].innerHTML = newColumn[4];
        }
    }
    // Move Down
    function moveDown() {
        for (let i = 0; i < width; i++) {
            let totalOne = squres[i].innerHTML;
            let totalTwo = squres[i + width].innerHTML;
            let totalThree = squres[i + width * 2].innerHTML;
            let totalFour = squres[i + width * 3].innerHTML;
            let totalFive = squres[i + width * 4].innerHTML;
            let column = [
                parseInt(totalOne),
                parseInt(totalTwo),
                parseInt(totalThree),
                parseInt(totalFour),
                parseInt(totalFive),
            ];
            // console.log(row)

            filteredColumn = column.filter(num => num);
            let missing = width - filteredColumn.length;
            let zeros = Array(missing).fill(0);
            let newColumn = zeros.concat(filteredColumn);
            // console.log(newRow)

            squres[i].innerHTML = newColumn[0];
            squres[i + width].innerHTML = newColumn[1];
            squres[i + width * 2].innerHTML = newColumn[2];
            squres[i + width * 3].innerHTML = newColumn[3];
            squres[i + width * 4].innerHTML = newColumn[4];
        }
    }
    // Combine 
    function combinColumn() {
        for (let i = 0; i < width * width - 5; i++) {
            if (squres[i].innerHTML === squres[i + width].innerHTML) {
                let combined =
                    parseInt(squres[i].innerHTML) +
                    parseInt(squres[i + width].innerHTML);
                squres[i].innerHTML = combined;
                squres[i + width].innerHTML = 0;
                score += combined;
                scoreDisplay.innerHTML = score;
            }
        }
        checkForWin()
    }

    function combinRow() {
        for (let i = 0; i < width * width - 1; i++) {
            if (squres[i].innerHTML === squres[i + 1].innerHTML) {
                let combined =
                    parseInt(squres[i].innerHTML) + parseInt(squres[i + 1].innerHTML);
                squres[i].innerHTML = combined;
                squres[i + 1].innerHTML = 0;
                score += combined;
                scoreDisplay.innerHTML = score;
            }
        }
        checkForWin()
    }

    //Assign Functions To Keys
    function control(e) {
        if (e.key === 'ArrowLeft') {
            KeyLeft();
        } else if (e.key === 'ArrowRight') {
            KeyRight();
        } else if (e.key === 'ArrowUp') {
            KeyUp();
        } else if (e.key === 'ArrowDown') {
            KeyDown()
        }
    }
    document.addEventListener('keydown', control);

    function KeyLeft() {
        moveLeft();
        combinRow();
        moveLeft();
        generate();
    }

    function KeyRight() {
        moveRight();
        combinRow();
        moveRight();
        generate();
    }

    function KeyUp() {
        moveUp();
        combinColumn();
        moveUp();
        generate();
    }
    function KeyDown() {
        moveDown();
        combinColumn();
        moveDown();
        generate();
    }

    // Check For the Number 2048 In The Squares To win 
    function checkForWin() {
        for (let i = 0; i < squres.length; i++) {
            if (squres[i].innerHTML === 2048) {
                resultDisplay.innerHTML = "You Win "
                document.removeEventListener("KeyDown", control)
                setTimeout(clear, 3000)
            }
        }
    }
    //Check If There Is No More Empty Squers
    function checkForGameOver() {
        let zeros = 0;
        let canMerge = false;

        // Check for empty squares
        for (let i = 0; i < squres.length; i++) { // Note: Make sure 'squres' is defined correctly
            if (squres[i].innerHTML === '0') {
                zeros++;
            }
        }

        // Check if tiles can be merged
        // Check rows
        for (let i = 0; i < width * width; i += width) {
            for (let j = i; j < i + width - 1; j++) {
                if (squres[j].innerHTML === squres[j + 1].innerHTML && squres[j].innerHTML !== '0') {
                    canMerge = true;
                    break;
                }
            }
            if (canMerge) break; // Stop checking rows if a merge is possible
        }

        // Check columns
        if (!canMerge) {
            for (let i = 0; i < width; i++) {
                for (let j = i; j < width * width - width; j += width) {
                    if (squres[j].innerHTML === squres[j + width].innerHTML && squres[j].innerHTML !== '0') {
                        canMerge = true;
                        break;
                    }
                }
                if (canMerge) break; // Stop checking columns if a merge is possible
            }
        }

        // Game over only if no empty squares and no possible merges
        if (zeros === 0 && !canMerge) {
            resultDisplay.innerHTML = "You Lose"; // Display the game over message
            document.removeEventListener('keydown', control); // Stop listening for key presses
            setTimeout(clear, 3000); // Clear or reset the game after 3 seconds
        }
    }

    function clear() {
        clearInterval(myTime)
    }

    // Add Colors
    function addColors() {
        // for (let i = 0; i < squres.length; i++) {
        //     if (squres[i].innerHTML == 0) squres[i].style.backgroundColor = "#a47f5a"
        //     else if (squres[i].innerHTML == 2) squres[i].style.backgroundColor = "#bf8c5a"
        //     else if (squres[i].innerHTML == 4) squres[i].style.backgroundColor = "#d4a378"
        //     else if (squres[i].innerHTML == 8) squres[i].style.backgroundColor = "#e8b68c"
        //     else if (squres[i].innerHTML == 16) squres[i].style.backgroundColor = "#f2c07b"
        //     else if (squres[i].innerHTML == 32) squres[i].style.backgroundColor = "#f59d6d"
        //     else if (squres[i].innerHTML == 64) squres[i].style.backgroundColor = "#f77d5c"
        //     else if (squres[i].innerHTML == 128) squres[i].style.backgroundColor = "#f5c65e"
        //     else if (squres[i].innerHTML == 256) squres[i].style.backgroundColor = "#edc53f"
        //     else if (squres[i].innerHTML == 512) squres[i].style.backgroundColor = "#edc22e"
        //     else if (squres[i].innerHTML == 1024) squres[i].style.backgroundColor = "#ecc400"
        //     else if (squres[i].innerHTML == 2048) squres[i].style.backgroundColor = "#edbb00"
        // }
        const colors = {
            0: "#ffedda",
            2: "#bf8c5a",
            4: "#d4a378",
            8: "#e8b68c",
            16: "#f2c07b",
            32: "#f59d6d",
            64: "#f77d5c",
            128: "#f5c65e",
            256: "#edc53f",
            512: "#edc22e",
            1024: "#ecc400",
            2048: "#edbb00"
        };

        // Update the colors of squares

        for (let i = 0; i < squres.length; i++) {
            const value = squres[i].innerHTML;
            squres[i].style.backgroundColor = colors[value] || "#ccc"; // Default color if value is not in the colors object
        }

    }
    addColors()
    let myTime = setInterval(addColors, 50)
});
