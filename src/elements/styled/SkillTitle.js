
import styled from 'styled-components';

export default styled.div `
    border: 2px #949494 solid;
    border-radius: 5px;
    padding: 2px 5px;
    cursor: pointer;
    display: inline-block;
    position: relative;
    font-family: 'Londrina Solid', cursive;
    font-size: 24px;
    opacity: 0.5;
    }
    &:hover {
        opacity: 1;
        box-shadow: 10px -2px #949494;
        transition: all 0.5s ease;
    }
`;