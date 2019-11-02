import React from 'react';
import styled from 'styled-components';


const Box = styled.div `
    justify-content: space-between;
    margin: ${props => props.boxMargin}px 0px 0px ${props => props.boxMargin}px;
`;
const Image = styled.img `
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 600px;
    height: auto;
    transform: scaleX(-1); 
`;


function Header(props) {
    const {imageSrc} = props;

    return (
        <Box boxMargin={50}>
            {props.children}
            <Image src={imageSrc}/>
        </Box>

    )
}
export default Header;