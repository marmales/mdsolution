import React from 'react';
import styled from 'styled-components';

const BarLine = styled.div `
    display: flex;
    flex-directions: column;
    justify-content: space-between;
`;
const BarTitle = styled.div `

`;
const Bar = styled.div `
    width: 100px;
    overflow: auto;
`;
const BarAmount = styled.div `
    background-color: black;
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