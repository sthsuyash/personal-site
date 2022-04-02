import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';
// import Image from 'next/image'
// import Suyash from '../../../assets/images/logo_sub.png'


// header container
const Header = () => (
  <Container>
    {/* div for adding link text and image */}
    <Div1>
      {/* link points self */}
      <Link href="/">
        <a style={{ display: "flex", alignitems: "center", color: "#5EE6EB", marginBottom: "10px" }}>
          <DiCssdeck size="3rem" /> <Span>Suyash</Span> {/* image and text*/}
          {/* <Img
            src={Suyash}
            alt="Suyash logo"
            width="150px"
            height="150px"
          /> */}
        </a>
      </Link>
    </Div1>

    {/* second div for links to navigate in site */}
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>

    {/* Adding social media link sections */}
    <Div3>
      <SocialIcons href="https://github.com/sthsuyash">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/sthsuyash/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://facebook.com/suyashstha">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/sthsuyash">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>

  </Container>
);

export default Header;