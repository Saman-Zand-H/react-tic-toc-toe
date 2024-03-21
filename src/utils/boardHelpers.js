const calculateWinnerHorizontal = squares => {
    let firstCell;

    for (let row = 0; row < squares.length; row++) {
        for (let col = 0; col < squares.length; col++) {
            if (!squares[row][col]) break;

            if (!firstCell) firstCell = squares[row][col];

            if (firstCell !== squares[row][col]) break;

            if (col === squares.length - 1 && firstCell === squares[row][col]) {
                return firstCell;
            } 
        }
        firstCell = null;
    }
};

const calculateWinnerVertical = squares => {
    let firstCell;

    for (let col = 0; col < squares.length; col++) {
        for (let row = 0; row < squares.length; row++) {
            if (!squares[row][col]) break;

            if (!firstCell) firstCell = squares[row][col];

            if (firstCell !== squares[row][col]) break;

            if (row === squares.length - 1 && firstCell === squares[row][col]) {
                return firstCell;
            }
        }
        firstCell = null;
    }
};

const calculateWinnerDiagonal = squares => {
    let firstCell;

    for (let i = 0; i < squares.length; i++) {
        if (!squares[i][i]) break;

        if (!firstCell) firstCell = squares[i][i];

        if (firstCell !== squares[i][i]) break;

        if (i === squares.length - 1 && firstCell === squares[i][i]) {
            return firstCell;
        }
    }
}

export const calculateWinner = sqaures => {
    return calculateWinnerHorizontal(sqaures) 
            || calculateWinnerVertical(sqaures) 
            || calculateWinnerDiagonal(sqaures);
}
