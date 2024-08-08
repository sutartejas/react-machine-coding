import { useState } from "react";

const isAttackedByBishop = (selectedSquare, square) => {

    const [selectedCol, selectedRow] = selectedSquare;
    const [col, row] = square;
    console.log(selectedCol - col, selectedRow - row)

    return Math.abs(selectedCol - col) === Math.abs(selectedRow - row)

}
const ChessBoard = () => {
    const [selectedSquare, setSelectedSquare] = useState([]);

    const handleMouseHover = (col, row) => {
        setSelectedSquare([col, row])
    }

    const handleMouseLeave = () => {
        setSelectedSquare(null)
    }

    return <div className="chessboard">
        {[...Array(8).keys()].map(row => {
            return <div className="row" key={row}>
                {[...Array(8).keys()].map(col => {
                    const isLightBlue = selectedSquare && selectedSquare[0] === col && selectedSquare[1] === row;
                    const isDarkBlue = selectedSquare && isAttackedByBishop(selectedSquare, [col, row]);

                    let squareColorClass = '';
                    if (isLightBlue) {
                        squareColorClass = 'light-blue';
                    } else if (isDarkBlue) {
                        squareColorClass = 'dark-blue';
                    }

                    let squareColor = 'white'

                    if ((row + col) % 2 === 0) squareColor = 'black'


                    return <div
                        className={`square ${squareColor} ${squareColorClass}`}
                        key={`${col}-${row}`}
                        onMouseEnter={() => handleMouseHover(col, row)}
                        onMouseLeave={handleMouseLeave}
                    >
                    </div>
                })}
            </div>
        })}
    </div>
}

export default ChessBoard;