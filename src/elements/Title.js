import styled from "styled-components";


const iconSize = '22px';
export const Title = styled.span `
    font-family: 'Londrina Shadow', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-size: 35px;
    cursor: ${props => props.titleIcon ? 'pointer' : 'default'}; 
    &::before {
        display: inline-block;
        background-image: url(${props => props.titleIcon});
        background-size: ${iconSize} ${iconSize};
        background-position: center top;
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
        width: ${iconSize};
        height: ${iconSize};
        content: "";
        
        margin-right: 8px;
        margin-left: 5px;
    }
    &:hover {
        font-family: 'Londrina Solid', cursive;
    }
`;
