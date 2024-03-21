import { useState } from 'react';
import Square from './Square';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTable = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    cursor: pointer;
`;

const Board = ({ squares, onPlay }) => {
    const [xIsNext, setXIsNext] = useState(true);

    const onSquareClick = e => {
        const { id } = e.target;
        const [row, cell] = id.split("-");

        if (squares[row][cell]) return;

        onPlay({
            row: parseInt(row),
            cell: parseInt(cell),
            value: xIsNext ? "X" : "O",
        });
        setXIsNext(!xIsNext);
    };

    return (
        <StyledTable>
            <tbody>
                {squares.map(
                    (row, rowId) => {
                        return (
                            <tr key={rowId.toString()}>
                                {row.map((cell, cellId) => {
                                    const squareId = `${rowId}-${cellId}`
                                    return <Square value={cell} key={cellId.toString()} id={squareId} onSquareClick={onSquareClick}  />
                                })}
                            </tr>
                        )
                    }
                )}
            </tbody>
        </StyledTable>
    )
};

Board.propTypes = {
    squares: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOf(["X", "O", ""])),
    ),
    onPlay: PropTypes.func,
};

export default Board;