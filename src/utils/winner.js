
function checkWinner(board, size) {
    // check for rows;
    for(let i=0; i<size; i++) {
        let symbol = board[i][0];
        if(symbol) {
            let winner = true;
            for(let j=0; j<size; j++) {
                if(symbol != board[i][j]) {
                    winner = false;
                    break;
                }
            }
            if(winner) {
                return symbol;
            }
        }
    }

    // check for column;
    for(let i=0; i<size; i++) {
        let symbol = board[i][0];
        if(symbol) {
            let winner = true;
            for(let j=0; j<size; j++) {
                if(symbol != board[j][i]) {
                    winner = false;
                    break;
                }
            }
            if(winner) {
                return symbol;
            }
        }
    }

    // check for left diagonal
    let leftDiagonal = board[0][0];
    if(leftDiagonal) {
        let winner = true;
        for(let i=1; i<size; i++) {
            if(leftDiagonal != board[i][i]) {
                winner = false;
                break;
            }
        }

        if(winner) {
            return leftDiagonal;
        }
    }

    let rightDiagonal = board[0][size-1];

    if(rightDiagonal) {
        let winner = true;
        for(let i=1; i<size; i++) {
            if(rightDiagonal != board[i][size-1-i]) {
                winner = false;
                break;
            }
        }
        
        if(winner) {
            return rightDiagonal;
        }
    }

    // check all fill 
    for(let i=0; i<size; i++) {
        for(let j=0; j<size; j++) {
            if(board[i][j] == null) {
                return; 
            }
        }
    }

    return "draw";

}



export default checkWinner;