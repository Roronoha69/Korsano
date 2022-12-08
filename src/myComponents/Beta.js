import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from 'styled-components';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
//import Phone from "images/ordi1.png";
import Features from "components/features/ThreeColWithSideImage.js";
//import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Header from "components/headers/light.js";


// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter2.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";

import logo from 'images/logo.png'


import access from "images/EARLYACCESS.png"


import { useState } from "react";



// import chefIconImageSrc from "images/chef-icon.svg";
// import celebrationIconImageSrc from "images/celebration-icon.svg";
// import shopIconImageSrc from "images/shop-icon.svg";

import Testimonial from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js'
import "../demos/Home.scss"

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
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
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  
const HeaderStyle = styled.div`
padding-top: 1rem;
`

const [social, setSocial ] = useState(true)


  return (
    <div>
       <HeaderStyle>
    <Header />
</HeaderStyle>


<MainFeature
        subheading={<Subheading>-75% code : 50FIRST</Subheading>}
        
        heading={
          <>
            OFFRE DE <Incline><HighlightedText>LANCEMENT</HighlightedText></Incline> 
            
          </>

        }
        description={
          <Description>
          La plateforme n'est pas completement terminée mais comme vous l'avez beaucoup demandés elle est ouverte a un tarif avantageux pour un nombre limité de personnes.
          <br />

          
            </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/'
        primaryButtonText="Rejoindre"
        //imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageSrc={access}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      

     
     
 <div className={`social ${social ? '':'invisible'}`}>
        <div className="inside">

        
        <img src={logo} alt='social-img'/>
        <p><b>David</b> a commandé <b>OFFRE DE LANCEMENT : </b> <b>guide nutritionel complet</b> pour <b>prendre de la masse</b> meme avec un <b>métabolisme rapide</b> </p>
        
        <span onClick={()=>setSocial(false)}>x</span>
        </div>
      </div>
 <Footer />
      </div>
  );
}
