/* eslint-disable no-useless-escape */
import React from 'react';
import styled from 'styled-components';
import LittleTitle from './styled/LittleTitle';
import TitleUnderscore from './styled/TitleUnderscore';
import LinkedinIcon from './../content/linkedin.svg';
import StackoverflowIcon from './../content/stackoverflow.png';

const AboutMeContainer = styled.div `
    width: 40vw;
    font-family: 'Source Sans Pro', sans-serif;
`;
const ContentContainer = styled.div `
    margin: 20px 0px;

    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const View = styled.div `
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Description = styled.span `
    margin: 15px;
`;
const List = styled.div `
    list-style: none;
    margin: 25px;
`;
const ListItem = styled.div `
    display: flex;
    flex-direction: row;

`;
const Before = styled.div `
    white-space: nowrap;
    width: 20%;
`;
const Tilde = styled.div `
    &::before {
        content: "~";
    }
`;
const ListContent = styled.div `
    flex: 1;
    margin: 0px 5px;
    a {
        color: #49494a;
        text-decoration: none;
    }
`;
const ContactRow = styled.div `
    display: flex;
    align-items: left;
    flex-direction: row;
`;
const Linkedin = styled.a.attrs({
    href: 'https://www.linkedin.com/in/marmales/'
})`
    width: 30px;
    height: 30px;
    margin: 5px;
    content: url('${LinkedinIcon}')
`
const Stackoverflow = styled.a.attrs({
    href: 'https://stackoverflow.com/users/7516160/marcin-maleszewski'
})`
    width: 30px;
    height: 30px;
    margin: 5px;
    content: url('${StackoverflowIcon}')
`
function ListLine (props) { return <ListItem><Before>{props.before}</Before><Tilde/><ListContent>{props.children}</ListContent></ListItem>; }

function AboutMe(props) {
    return (
        <AboutMeContainer>
            <ContactRow><Linkedin /><Stackoverflow /></ContactRow>
            <LittleTitle>About me</LittleTitle>
            <TitleUnderscore />
            <ContentContainer>
            <View>
                <Description>
                    {`Hey! My name is Marcin Maleszewski and I'm Software Engineer specialized in web development.
                    During many years of my experience I created .NET applications for start-ups and enterprises.
                    I delivered apllications with CI/CD pattern, TDD approach, with git version control system, automated integration tests, end to end tests ... and much more!`}
                </Description>
                <List>
                    <ListLine before={"13\' - 17\'"}>graduated college as IT System Engineer in <a href="http://www.sggw.pl/en/">SGGW</a></ListLine>
                    <ListLine before={"17\'"}>built thermal images processing applications for <a href="https://www.autothermal.eu/">Authothermal</a></ListLine>
                    <ListLine before={"18\' - 19\'"}>get to know with banking systems with <a href="https://www.accenture.com/">Accenture</a></ListLine>
                </List>
            </View>
            </ContentContainer>
        </AboutMeContainer>
    );
}
export default AboutMe;