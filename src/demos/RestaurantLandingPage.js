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
import MainFeature2 from "components/hero/TwoColumnWithVideoX.js";
import MainFeature3 from "components/hero/TwoColumnWithVideoY.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";

import Pricing from "components/hero/TwoColumnWithVideo2.js";
// import chefIconImageSrc from "images/chef-icon.svg";
// import celebrationIconImageSrc from "images/celebration-icon.svg";
// import shopIconImageSrc from "images/shop-icon.svg";

import Testimonial from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js'


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
        heading={<><Incline><HighlightedText>DIETS</HighlightedText></Incline> TO BULK UP FAST AS A <Incline><HighlightedText>SKINNY</HighlightedText></Incline>GUY</>  }
        description="Personalized diets to help you stop wastiong your time and get bigger"
        //description="Un nouveau système unique qui permet de générer des plans nutritionels adapté à vos besoin en macronutriments."
        imageSrc="https://cdn.dribbble.com/userupload/2850124/file/original-999c98affe282a81c153721d3d5b872b.jpeg?compress=1&resize=1200x900"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Essai gratuit"
        watchVideoButtonText="Nos Services"
        primaryButtonUrl='free-trial'
      />
      <MainFeature
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            YOUR GYM TIME IS A<Incline><HighlightedText>WASTE</HighlightedText></Incline>OF
             <Incline><HighlightedText>TIME</HighlightedText></Incline>
          </>


        }
        description={
          <Description>
           You won't get bigger without a real bulking diet. <br />Why are you waisting your time at the gym when you're not getting in good shape anyway? 
            
            </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Free-Trial"
        imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

<MainFeature2
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            BECOME<Incline><HighlightedText>STRONG</HighlightedText></Incline>AND <Incline><HighlightedText>SAVAGE</HighlightedText></Incline>
             
          </>


        }
        description={
          <Description> We've builded a diet plan to help you achieve your gym goal faster. All the secret and all the things I wish I knew when I started. 
            <br />Once you've build a physics with the progrma fell free to DM me you transformation. I'll s/o the best ones.
        
            
            </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Free-Trial"
        imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      
<MainFeature3
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            BULKING DIET TO<Incline><HighlightedText>BOOST</HighlightedText></Incline>YOUR<Incline><HighlightedText>TESTOSTERONE</HighlightedText></Incline>
             
          </>


        }
        description={
          <Description> Stop being a looser and shut the mouth of those who underestimate you
            <br />
        
            
            </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Free-Trial"
        imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

<Testimonial 


subheading = ""
  heading = "Testimonials"
  description = ""
  testimonials = ""
  textOnLeft = "false"
  
  />


<Pricing 
          heading={<>BUY<Incline><HighlightedText>NOW</HighlightedText></Incline> AND GET <Incline><HighlightedText>BIGGER</HighlightedText></Incline>FAST</>}
          description={<>50% off with the code "100FIRST" only for the first 100
          <br /> Get your bulking diet and stop wasting your time now
          </>}
          imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15955423/media/ec2fe461084339c3a4d14efae1202847.jpeg?compress=1&resize=1000x750&vertical=top"
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Buy now"
          watchVideoButtonText="Nos Services"
          primaryButtonUrl='404'
      
      />

      <Footer />

    </AnimationRevealPage>
  );
}
