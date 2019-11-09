import React from 'react';
import styled from 'styled-components';


const Box = styled.div `
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
const Children = styled.div `
    @media (max-width: 800px){
        transform: rotate(-90deg) translate(-20%, -200%);
    }
`


function Header(props) {
    const {imageSrc} = props;

    return (
        <Box boxMargin={50}>
            <Children>{props.children}</Children>
            <Image src={imageSrc}/>
        </Box>

    )
}
export default Header;