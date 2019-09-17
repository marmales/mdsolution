import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const View = styled.div `
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    max-width: 600px;
    height: 400px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    font-family: 'Roboto', sans-serif;
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
`;
function ListLine (props) { return <ListItem><Before>{props.before}</Before><Tilde/><ListContent>{props.children}</ListContent></ListItem>; }
export default function Content() {
    return (
        <Container>
            <View>
                <Description>
                    {`Hey! My name is Marcin Maleszewski and I'm Software Enginner specialized in web development.
                    During many years of my experience I created .NET applications for start-ups and enterprises.
                    Even though most of my work are back-end applications I know a lot of web stuff too. `}
                </Description>
                <List>
                    <ListLine before={"94\' - now"}>located command center in Warsaw</ListLine>
                    <ListLine before={"13\' - 17\'"}>graduated college as IT System Engineer (<a href="http://www.sggw.pl/en/">SGGW</a>)</ListLine>
                    <ListLine before={"17\'"}>build appliations for thermal images processing (<a href="">Authothermal</a>)</ListLine>
                    <ListLine before={"18\' - 19\'"}>get to know with banking systems and even developed some cool stuff! (<a href="">Accenture</a>)</ListLine>
                </List>
            </View>
        </Container>
    );
}