import React from 'react';
import { DiNodejs, DiNodejsSmall, DiPython } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider style={{ marginTop: "2rem", marginBottom: "5rem" }} />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the Web Development world as well as Software Development.</SectionText>

    <List>
      <ListItem>
        <DiNodejsSmall size='4rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            Plain JavaScript
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiNodejs size='4rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with<br />
            Node and Datebases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiPython size='4rem' />
        <ListContainer>
          <ListTitle>Software Development</ListTitle>
          <ListParagraph>
            Experience with<br />
            Python and C/C++
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
  </Section>
);

export default Technologies;
