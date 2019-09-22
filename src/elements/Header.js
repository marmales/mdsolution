import React from 'react';
import styled from 'styled-components';


const Box = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${props => props.boxMargin}px;
`;
const Image = styled.div `
    background: url(${props => props.imageSrc}) center no-repeat;
    height: 400px;
    width: 300px;
    margin-left: -${props => props.boxMargin}px;
    margin-bottom: -${props => props.boxMargin}px;
    transform: scaleX(-2) scaleY(2);
`;


function Header(props) {
    const {imageSrc} = props;

    return (
        <Box boxMargin={50}>
            {props.children}
            <Image imageSrc={imageSrc}/>
        </Box>

    )
}
export default Header;