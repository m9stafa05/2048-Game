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
            animateTile(randomNumber); // Animate new tile
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
                animateTile(i); // Animate merged tile
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
                animateTile(i); // Animate merged tile
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
            clearInterval(myTime)
            // setTimeout(clear, 3000); // Clear or reset the game after 3 seconds
        }
    }

    function clear() {
        clearInterval(myTime)
    }

    // Update colors function to use new palette and support up to 8192
    function addColors() {
        const colors = {
            0: "#fff5f5", // Very light red (almost white-pink)
            2: "#ffe3e3", // Light blush
            4: "#ffc9c9", // Soft pink
            8: "#ffa8a8", // Light coral
            16: "#ff8787", // Salmon pink
            32: "#ff6b6b", // Medium red
            64: "#fa5252", // Strong red
            128: "#f03e3e", // Bold red
            256: "#e03131", // Deeper red
            512: "#c92a2a", // Deep crimson
            1024: "#a51111", // Dark red
            2048: "#800000", // Maroon
            4096: "#660000", // Very dark red
            8192: "#4d0000"  // Almost black red
        };

        for (let i = 0; i < squres.length; i++) {
            const value = squres[i].innerHTML;
            squres[i].style.backgroundColor = colors[value] || "#ccc";
            // Use white text for dark backgrounds, dark text for light backgrounds
            if (parseInt(value) >= 64) {
                squres[i].style.color = "#fff";
            } else {
                squres[i].style.color = "#232946";
            }
        }
    }
    addColors()
    let myTime = setInterval(addColors, 50)

    // Responsive nav toggle
    const navToggle = document.querySelector('.nav__toggle');
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            document.querySelector('.nav__links').classList.toggle('active');
        });
    }

    // Arrow button controls (robust for mobile/small screens)
    const upBtn = document.querySelector('.arrow-btn.up');
    const downBtn = document.querySelector('.arrow-btn.down');
    const leftBtn = document.querySelector('.arrow-btn.left');
    const rightBtn = document.querySelector('.arrow-btn.right');
    if (upBtn && downBtn && leftBtn && rightBtn) {
        upBtn.addEventListener('click', function () {
            KeyUp();
            upBtn.blur();
        });
        downBtn.addEventListener('click', function () {
            KeyDown();
            downBtn.blur();
        });
        leftBtn.addEventListener('click', function () {
            KeyLeft();
            leftBtn.blur();
        });
        rightBtn.addEventListener('click', function () {
            KeyRight();
            rightBtn.blur();
        });

        // Optional: allow keyboard Enter/Space on focused button
        [upBtn, downBtn, leftBtn, rightBtn].forEach(btn => {
            btn.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    btn.click();
                }
            });
        });
    }

    // Add loading animation on page load
    const loader = document.createElement('div');
    loader.className = 'loader-overlay';
    loader.innerHTML = '<div class="loader"></div>';
    document.body.appendChild(loader);
    setTimeout(() => {
        loader.classList.add('hide');
        setTimeout(() => loader.remove(), 600);
    }, 900);

    // Animate tile when created or merged
    function animateTile(index) {
        const tile = squres[index];
        if (!tile) return;
        tile.classList.remove('tile-animate');
        void tile.offsetWidth; // trigger reflow
        tile.classList.add('tile-animate');
    }
});
leftBtn.blur();

rightBtn.addEventListener('click', function () {
    KeyRight();
    rightBtn.blur();
});

// Optional: allow keyboard Enter/Space on focused button
[upBtn, downBtn, leftBtn, rightBtn].forEach(btn => {
    btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            btn.click();
        }
    });
});


// Add loading animation on page load
const loader = document.createElement('div');
loader.className = 'loader-overlay';
loader.innerHTML = '<div class="loader"></div>';
document.body.appendChild(loader);
setTimeout(() => {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 600);
}, 900);

// Animate tile when created or merged
function animateTile(index) {
    const tile = squres[index];
    if (!tile) return;
    tile.classList.remove('tile-animate');
    void tile.offsetWidth; // trigger reflow
    tile.classList.add('tile-animate');
}
