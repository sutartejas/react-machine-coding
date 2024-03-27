import { useState } from "react";


const TicTacToe = () => {
    const [data, setData] = useState(Array(9).fill(''));

    function nextPlayer() {
        return data.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
    }

    const isNextPlayer = nextPlayer();
    const winner = calculateWinner(data)

    const handleSquare = (square) => {
        if (winner) return '';
        const temp = [...data];
        temp[square] = isNextPlayer;
        setData(temp);
    }

    function squareData(square) {
        return <div className="column" onClick={(e) => handleSquare(square)}>
            {data[square]}
        </div>
    }

    return <><span className="winner">{`Winner is -  ${winner}`}</span>
        <div className="box">
            <div className="row">
                {squareData(0)}
                {squareData(1)}
                {squareData(2)}
            </div>
            <div className="row">
                {squareData(3)}
                {squareData(4)}
                {squareData(5)}
            </div>
            <div className="row">
                {squareData(6)}
                {squareData(7)}
                {squareData(8)}
            </div>
        </div>
    </>
}

export default TicTacToe;


const calculateWinner = (result) => {
    const output = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < output.length; i++) {
        const [x, y, z] = output[i];
        if (result[x] && result[x] === result[y] && result[y] === result[z]) {
            return result[x]
        }
    }
    return ''

}