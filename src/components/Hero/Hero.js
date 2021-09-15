import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        I'm Bonface Obilo 
        <img src="/images/bonface.jpg" style={{width: "200px", height: "200px", borderRadius: "50%"}}/> 
        <br /><br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this portfolio is to help my potential clients and employers to asses my skills, projects worked on and education background.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.linkedin.com/in/bonface-obilo-53080b74'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;