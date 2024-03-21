import PropType from 'prop-types'
import styled from 'styled-components';

const StyledTd = styled.td`
    border: 1px solid white;
    padding: 0;
    width: 5rem;
    height: 5rem;
    text-align: center;
    font-size: 3rem;
    font-weight: bold;
`;

const Square = ({ value, id, onSquareClick }) => {
    return (
        <StyledTd id={id} onClick={onSquareClick}>
            <span>{ value }</span>
        </StyledTd>
    )
}

Square.propTypes = {
    value: PropType.string,
    id: PropType.string,
    onSquareClick: PropType.func,
};

export default Square;