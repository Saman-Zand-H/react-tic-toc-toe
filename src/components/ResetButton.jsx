import styled from "styled-components";
import PropType from 'prop-types';

const StyledButton = styled.button`
    padding: 0.5rem 1rem;
    background-color: #f00;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`;

const ResetButton = ({ onReset }) => {
    return (
        <StyledButton onClick={ onReset }>Reset</StyledButton>
    )
};

ResetButton.propTypes = {
    onReset: PropType.func,
}

export default ResetButton