import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { tada as contentAnimation } from 'react-animations';

import SkillBar from './SkillBar';
import LittleTitle from './styled/LittleTitle';
import SkillTitle from './styled/SkillTitle';
import TitleUnderscore from './styled/TitleUnderscore';
import SkillDescription from './styled/SkillDescription';

import javascript from '../content/javascript.svg';
import microsoft from '../content/microsoft.png';

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
    font-family: 'Source Sans Pro', sans-serif;
    animation: 2s ${keyframes`${contentAnimation}`}
`;
const Icon = styled.img `

    height: 30px;
    width: 30px;
`;
function Frontend() {
    return(
        <DescriptionContainer>
            <SkillDescription>
                I built both small and large scale applications. 
                My deep understanding of the JavaScript combined with UX and 
                design experience leads applications development from start to finish.
            </SkillDescription>
            <SkillBar width={0.85}>Vanilla JavaScript</SkillBar>
            <SkillBar width={0.8}>React.js</SkillBar>
            <SkillBar width={0.65}>Webpack</SkillBar>
            <SkillBar width={0.55}>Less</SkillBar>
            <SkillBar width={0.5}>HTML5/CSS3</SkillBar>
            <SkillBar width={0.3}>WinForms/WPF</SkillBar>
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
                of the design patterns, good code practice I can make your code beautiful again!
            </SkillDescription>
            <SkillBar width={0.9}>.NET</SkillBar>
            <SkillBar width={0.75}>ASP.NET MVC</SkillBar>
            <SkillBar width={0.5}>MS SQL</SkillBar>
            <SkillBar width={0.45}>Node.js</SkillBar>
            <SkillBar width={0.35}>WCF</SkillBar>
        </DescriptionContainer>
        );
}
function Services() {
    var [front, back] = ["front", "backend"];
    const [skillContent, changeSkillContent] = useState(front);
    return(
        <ServicesContainer>
            <LittleTitle>Services</LittleTitle>
            <TitleUnderscore />
            <Icon src={skillContent === front ? javascript : microsoft}/>
            <Skills>
                <Row>
                    <SkillTitle onClick={() => changeSkillContent(front)}>Frontend</SkillTitle>
                    <SkillTitle onClick={() => changeSkillContent(back)}>Backend</SkillTitle>
                </Row>
                {skillContent === front ? <Frontend /> : <Backend />}
            </Skills>
        </ServicesContainer>
    )
}
export default Services;