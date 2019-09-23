import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';

import SkillBar from './SkillBar';
import LittleTitle from './styled/LittleTitle';
import SkillTitle from './styled/SkillTitle';
import TitleUnderscore from './styled/TitleUnderscore';
import SkillDescription from './styled/SkillDescription';


const ServicesContainer = styled.div `
    width: 40vw;
`;
const Skills = styled.div `

`;
const Row = styled.div `
    display: flex;

    width: 100%;
    justify-content: space-evenly;
    align-items: stretch;
`;
const DescriptionContainer = styled.div `
    animation: 1s ${keyframes`${bounce}`}
`;

function Frontend() {
    return(
        <DescriptionContainer>
            <SkillDescription>
                I built both small and large scale applications. 
                My deep understanding of the JavaScript combined with UX and 
                design experience leads applications development from start to finish.
            </SkillDescription>
            <SkillBar width={0.75}>Vanilla JavaScript</SkillBar>
            <SkillBar width={1}>React.js</SkillBar>
            <SkillBar width={0.2}>HTML5</SkillBar>
        </DescriptionContainer>
    );
}
function Backend() {
    return (
        <DescriptionContainer>
            <SkillDescription>
                Years of the experience of developing and maintaining .NET applications gave me solid
                understanding of the .NET environment and how to write scalable applications. 
                I am not scared to dive into complex projects and with extensive knowledge 
                of the design patterns and good code practice I can make your code beautiful again!
            </SkillDescription>
            <SkillBar width={1}>.NET</SkillBar>
            <SkillBar width={0.5}>GIT</SkillBar>
        </DescriptionContainer>
        );
}
function Services() {
    var [front, back] = [<Frontend />, <Backend />];
    const [skillContent, changeSkillContent] = useState(front);
    return(
        <ServicesContainer>
            <LittleTitle>Services</LittleTitle>
            <TitleUnderscore />
            <Skills>
                <Row>
                    <SkillTitle onClick={() => changeSkillContent(front)}>Frontend</SkillTitle>
                    <SkillTitle onClick={() => changeSkillContent(back)}>Backend</SkillTitle>
                </Row>
                {skillContent}
            </Skills>
        </ServicesContainer>
    )
}
export default Services;