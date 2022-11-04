import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import styled from 'styled-components';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Phone from "images/ordi1.png";
import Features from "components/features/ThreeColWithSideImage.js";
//import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";

// import chefIconImageSrc from "images/chef-icon.svg";
// import celebrationIconImageSrc from "images/celebration-icon.svg";
// import shopIconImageSrc from "images/shop-icon.svg";

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
  


  return (
    <AnimationRevealPage>
      <Hero
        heading={<>PLAN NUTRITIONNEL<Incline><HighlightedText> PERSONNALISÉ</HighlightedText></Incline></>}
        description="Un nouveau système unique qui permet de générer des plans nutritionels adapté à vos besoin en macronutriments."
        //description="Un nouveau système unique qui permet de générer des plans nutritionels adapté à vos besoin en macronutriments."
        imageSrc="https://cdn.dribbble.com/userupload/2850124/file/original-999c98affe282a81c153721d3d5b872b.jpeg?compress=1&resize=1200x900"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Essai gratuit"
        watchVideoButtonText="Nos Services"
        primaryButtonUrl='free-trial'
      />
      <MainFeature
        subheading={<Subheading>"Mens Sana in Corpore Sano"</Subheading>}
        
        heading={
          <>
            UN NOUVEAU SYSTÈME DE 
            <wbr /> <Incline><HighlightedText>NUTRITION</HighlightedText></Incline>
          </>


        }
        description={
          <Description>
            Tous les macronutriments dont vous avez besoin sont soigneusement calculés par notre algorithme.
            <br />
            <br />
            Notre questionnaire vous construit une diète sur mesure de 30 jours.</Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/tarifs'
        primaryButtonText="Découvrir"
        imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      {/* <Features 
              heading={<>Amazing <HighlightedText>Features</HighlightedText></>}

      /> */}
     
   {/* <FeatureWithSteps
        subheading={<Subheading>ÉTAPES</Subheading>}
        heading={
          <>
            Facile à  <Incline><HighlightedText>utiliser.</HighlightedText></Incline>
          </>
        }
        textOnLeft={false}
        imageSrc='https://cdn.dribbble.com/users/56226/screenshots/14237975/media/fcde347c89614d3bd2a7383041a3ef80.jpg?compress=1&resize=1000x750&vertical=top'
        imageDecoratorBlob={true}
        decoratorBlobCss={tw`xl:w-40 xl:h-40 opacity-15 -translate-x-1/2 left-1/2`}
      /> */}


      <Footer />

    </AnimationRevealPage>
  );
}
