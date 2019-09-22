import React, {useState} from 'react';
import styled, {keyframes} from 'styled-components';
import { bounce } from 'react-animations';

import SkillBar from './SkillBar';
import LittleTitle from './styled/LittleTitle';
import TitleUnderscore from './styled/TitleUnderscore';
import SkillDescription from './styled/SkillDescription';


const ServicesContainer = styled.div `
    width: 40vw;
`;
const Skills = styled.div `

`;
const SkillTitle = styled.h3 `
    cursor: pointer;
    display: inline-block;
    position: relative;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        bottom: 0;
        height: 1px;
        width: 0;
        transition: width 0s ease, background .5s ease;
    }
    &::after {
        content: '';
        display: block;
        right: 0;
        bottom: 0;
        height: 1px;
        width: 0;
        background: #49494a;
        transition: width .5s ease;
    }
    &:hover::before {
        width: 100%;
        background: #49494a;
        transition: width .5s ease;
    }
    &:hover::after {
        width: 100%;
        background: transparent;
        transition: all 0s ease;
    }
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
    const [skillContent, changeSkillContent] = useState(<Frontend />)
    return(
        <ServicesContainer>
            <LittleTitle>Services</LittleTitle>
            <TitleUnderscore />
            <Skills>
                <Row>
                    <SkillTitle>Frontend</SkillTitle>
                    <SkillTitle>Backend</SkillTitle>
                </Row>
                {skillContent}
            </Skills>
        </ServicesContainer>
    )
}
export default Services;