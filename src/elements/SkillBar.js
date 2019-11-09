import React from 'react';
import styled from 'styled-components';

const BarLine = styled.div `
    margin: 10px 20%;
    display: flex;
    flex-directions: column;
    justify-content: space-between;

    @media (max-width: 800px){
        margin: 10px 5%;
    }
`;
const BarTitle = styled.div `

`;
const Bar = styled.div `
    background-color: #fbfbfb;
    box-shadow: 4px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    width: 125px;
    overflow: auto;
`;
const BarAmount = styled.div `
    background-color: #ababab;
    border-radius: 1px;
    height: 100%;
    width: ${props => props.width}%;
`;
function SkillBar(props) {
    return(
        <BarLine>
            <BarTitle>{props.children}</BarTitle>
            <Bar><BarAmount width={props.width * 100} /></Bar>
        </BarLine>
    );
}
export default SkillBar;