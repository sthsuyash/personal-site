import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    {/* left section of the hero container  */}
    <LeftSection>
      <SectionTitle main center>
        I'm Suyash, <br />
        a Developer
      </SectionTitle>
      <SectionText>
        I'm a Frontend Developer / Software Engineer Undergraduate based in Kathmandu, Nepal, very passionate about Machine Learning and Software Development.<br />
        I became strongly attracted in new Technologies, resulting me to be a part of the huge dev community.
      </SectionText>
      <Button onClick={() => window.location = 'https://github.com/sthsuyash'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;