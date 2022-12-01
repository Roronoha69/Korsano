import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/hero/TwoColumnWithVideo2.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import Footer from "components/footers/MiniCenteredFooter";
import FAQ from "components/faqs/SingleCol.js";
import tw from "twin.macro";
import styled from 'styled-components';

import Hero from "components/hero/BackgroundAsImage.js";





const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Incline = styled.div`
--tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: -12deg;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
`;
const imageCss = tw`rounded-4xl`;


export default () => {
  


  return (
    
    <AnimationRevealPage>

      <Hero />
      <Pricing 
          heading={<>PRENNEZ UNE LONGUEUR <Incline><HighlightedText>D'AVANCE</HighlightedText></Incline></>}
          description="Remplis notre questionnaire nutrition qui nous permettra de fixer tes objectifs pour que nous puissions réaliser ton plan nutritionnel détaillé."
          imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15955423/media/ec2fe461084339c3a4d14efae1202847.jpeg?compress=1&resize=1000x750&vertical=top"
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Acheter"
          watchVideoButtonText="Nos Services"
          primaryButtonUrl='404'
      
      />
      {/* <Testimonial
        heading="Our Paying Customers"
      /> */}
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
