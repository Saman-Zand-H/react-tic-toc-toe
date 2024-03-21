import { useState } from "react";
import PropType from 'prop-types';
import Board from "./Board";
import ResetButton from "./ResetButton";
import styled from "styled-components";
import { calculateWinner } from "../utils/boardHelpers";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
`

const Game = ({ squaresDimension }) => {
    const [squares, setSquares] = useState(
        Array(squaresDimension).fill().map(() => Array(squaresDimension).fill(""))
    );
    const [squaresHistory, setSquaresHistory] = useState([structuredClone(squares)]);

    const resetToStep = ({ step, preserveHistory }) => {
        if (step < 0) return;

        const newSquares = squaresHistory[step];
        setSquares(newSquares);
        
        if (preserveHistory) return setSquaresHistory([...squaresHistory, newSquares]);
        return setSquaresHistory([newSquares]);
    }
    const resetBoard = () => resetToStep({ step: 0, preserveHistory: false });

    const onPlay = ({ row, cell, value }) => {
        if (calculateWinner(squares)) {
            alert("Game has ended.");
            return;
        }

        const newSquares = [...squares];
        newSquares[row][cell] = value;
        setSquares(newSquares);
        setSquaresHistory([...squaresHistory, newSquares]);
        
        if (calculateWinner(newSquares)) {
            alert(`${value} wins!`);
        }
    };

    return (
        <Container>
            {calculateWinner(squares) && <h1>{calculateWinner(squares)} wins!</h1>}
            <Board squares={ squares } onPlay={ onPlay } />
            <ResetButton onReset={ resetBoard } />
        </Container>
    );
}

Game.propTypes = {
    squaresDimension: PropType.number,
};

Game.defaultProps = {
    squaresDimension: 3,
};

export default Game