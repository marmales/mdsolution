import styled from "styled-components";


const iconSize = '22px';
export const Title = styled.span `
    font-family: 'Londrina Solid', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-size: 35px;
    cursor: ${props => props.titleIcon ? 'pointer' : 'default'}; 
    &:hover {
        font-family: 'Londrina Shadow', cursive;
    }
`;
