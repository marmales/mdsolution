import React, {useState} from "react";
import styled from "styled-components";
import me from '../content/me.svg';
import skills from '../content/skills.png';
import {Title} from "./Title";

const NavbarDiv = styled.div `
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: rgba(255,255,255,0.2);
`;
const Separator = styled.div `
    height: 1px;
    margin: 0px 5px;
    background-color: #fff;
`;
function NavbarArea() {
    const titles = { skills: "skills", about: "about" };
    const [{active, current}, toggleListView] = useState({active: false, current: titles.about});

    const skillsComponent = () => <Title onClick={() => toggleListView({active: !active, current: titles.skills})} titleIcon={skills}>What i know</Title>;
    const aboutComponent = () => <Title onClick={() => toggleListView({active: !active, current: titles.about})} titleIcon={me}>About me</Title>;
    if (active) {
        const firstComponent = titles.skills === current ? skillsComponent : aboutComponent;
        const secondComponent = titles.skills !== current ? skillsComponent : aboutComponent;
        return (
            <NavbarDiv>
                {firstComponent()}
                <Separator/>
                {secondComponent()}
            </NavbarDiv>
        );
    }

    return titles.skills === current
        ? skillsComponent()
        : aboutComponent();
}
export default NavbarArea;