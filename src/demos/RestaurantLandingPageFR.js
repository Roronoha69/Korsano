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
import MainFeature2 from "components/hero/TwoColumnWithVideoX.js";
import MainFeature3 from "components/hero/TwoColumnWithVideoY.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
// import TabGrid from "components/cards/TabCardGrid.js";
// import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
// import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter2.js";
import FeatureWithSteps from "components/features/TwoColWithSteps.js";

import logo from 'images/logo.png'

import gym from "images/hard.jpg"
import slow from "images/slow.jpg"
import zoro from "images/zoro.jpg"
import eating from "images/dekuEating2.jpg"
import baki from "images/baki.png"

import { useState, useEffect } from "react";

import Pricing from "components/hero/TwoColumnWithVideoX";

// import chefIconImageSrc from "images/chef-icon.svg";
// import celebrationIconImageSrc from "images/celebration-icon.svg";
// import shopIconImageSrc from "images/shop-icon.svg";

import Testimonial from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js'
import "./Home.scss"

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
  

const [social, setSocial ] = useState(false)
const [socialName, setSocialName ] = useState('')

useEffect(() => {

  setTimeout(() => {
    setSocial(true)
    setSocialName('David')
  }, 5000);

  setTimeout(() => {
    setSocial(false)
    
  }, 11000);


  setTimeout(() => {
    setSocial(true)
    setSocialName('Lucas')
  }, 16000);

  setTimeout(() => {
    setSocial(false)
  }, 21000);


  setTimeout(() => {
    setSocial(true)
    setSocialName('JB')
  }, 24000);

  setTimeout(() => {
    setSocial(false)
  }, 30000);

  
              

},[])

  return (
    <div>
    <AnimationRevealPage>
        <Hero
        heading={<>LES<Incline><HighlightedText>SECRETS</HighlightedText></Incline> DE PRISE DE<Incline><HighlightedText>MASSE</HighlightedText></Incline> POUR LES<Incline><HighlightedText>SKINNY</HighlightedText></Incline> </>  }
        
        description="Programme nutritionel pour prise de masse propre et rapide"
        //description="Un nouveau système unique qui permet de générer des plans nutritionels adapté à vos besoin en macronutriments."
        imageSrc={baki}
        //imageSrc="https://cdn.dribbble.com/userupload/2850124/file/original-999c98affe282a81c153721d3d5b872b.jpeg?compress=1&resize=1200x900"

        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Tester Gratuitement"
        watchVideoButtonText="Nos Services"
        primaryButtonUrl='/free-trial'
      />

<MainFeature
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            TU <Incline><HighlightedText>STAGNE</HighlightedText></Incline> MEME EN <Incline><HighlightedText>T'ENTRAINANNT?</HighlightedText></Incline>
            
          </>

        }
        description={
          <Description>
            "Je mange un max mais je prend pas de poid ni de muscles" 
            <br />Je disais tout le temps ca avant jusqu'a ce que le simple fait de modifier mes habitudes alimentaires ai tout changé.
          
            </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Tester Gratuitement"
        //imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageSrc={slow}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <MainFeature
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            <Incline><HighlightedText></HighlightedText></Incline>ARRETE DE <Incline><HighlightedText>GASPILLER</HighlightedText></Incline> TON <Incline><HighlightedText>TEMPS</HighlightedText></Incline>
            
          </>


        }

        description={
          <Description>
           Si ton alimentation est pas carré tu progressera jamais.<br />Donc tu gaspille ton temps, ton energie et meme ton argent pour avoir un phisique plus proche de quelqu'un qui s'entraine pas que celui d'un gars stock.       
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Tester gratuitement"
        //imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageSrc={gym}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

<MainFeature2
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            TU NE <Incline><HighlightedText>PROGRESSERA</HighlightedText></Incline> PAS SANS UN VRAI 
            <Incline><HighlightedText>PROGRAMME</HighlightedText></Incline>
          
          </>

        
        }
        description={
        <Description>La plupart des programmes de prisse de masse sont nul a chier car ils sont intenable sur le long terme
        J'ai construit ce programme pour ceux qui on pas le temps de faire 36 repas/j, ceux qui veulent pas etre fatiguer par la digestion h24, ceux qui veulent des résultats rapide sans dégrader leur vie pro/scolaire.
        
       
      


        </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Tester gratuitement"
        //imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageSrc={eating}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />


      
{/* <MainFeature2
        subheading={<Subheading></Subheading>}
        
        heading={
          <>
            LES SKINNY ON EN REALITE LA MEILLEUR GENETIQUE <Incline><HighlightedText>PROGRESSERA</HighlightedText></Incline> PAS SANS UN VRAI 
            <Incline><HighlightedText>PROGRAMME</HighlightedText></Incline>
          
          </>

        
        }
        description={
        <Description>La plupart des programmes de prisse de masse sont nul a chier car ils sont intenable sur le long terme
        J'ai construit ce programme pour ceux qui on pas le temps de faire 36 repas/j, ceux qui veulent pas etre fatiguer par la digestion h24, ceux qui veulent des résultats rapide sans dégrader leur vie pro/scolaire.
        
        </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonUrl='/free-trial'
        primaryButtonText="Tester gratuitement"
        //imageSrc="https://cdn.dribbble.com/users/3320958/screenshots/15778281/media/08b44583438e4ffd3cce0426e0ca68f1.jpeg?compress=1&resize=1000x750&vertical=top"
        imageSrc={eating}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

       */}
      
      
    


<Testimonial 


  subheading = ""
  heading={<><Incline><HighlightedText>CONSTRUIT</HighlightedText></Incline> UN PHYSIQUE <Incline><HighlightedText>INCROYABLE</HighlightedText></Incline> MEME SUR LE <Incline><HighlightedText>LONG</HighlightedText></Incline> TERME </>}
  description = {<>Ce programme change des vie, suivez le eux et envoyez-moi vos transformations, je mettrais en lumiere les meilleurs</>}
  testimonials = ""
  textOnLeft = "false"
  
  />


<Pricing 
          heading={<> <p id="end"></p>NE LAISSE PLUS<Incline><HighlightedText>PERSONNE </HighlightedText></Incline>TE<Incline><HighlightedText>DEPASSER</HighlightedText></Incline></>}
          description={<>
         Arrete de perdre ton temps. Les gens qui on un vrai plan iront toujours plus vite et tu finira pas etre mis de coté. Tu vas vraiment laissé ca se produire.
        <p id="end"></p>
          </>}
          imageSrc={zoro}
          imageCss={imageCss}
          imageDecoratorBlob={true}
          primaryButtonText="Acheter"
          watchVideoButtonText="Nos Services"
          primaryButtonUrl='https://buy.stripe.com/test_6oE14g9ey2au3vO6op'
      
      />

     

      <Footer />

    </AnimationRevealPage>
     <div className={`social ${social ? '':'invisible'}`}>
     <div className="inside">

     
     <img src={logo} alt='social-img'/>
     <p><b>{socialName}</b> a commandé <b>OFFRE DE LANCEMENT : </b> <b>guide nutritionel complet</b> pour <b>prendre de la masse</b> meme avec un <b>métabolisme rapide</b> </p>
     <span onClick={()=> setSocial(false)}>x</span>
     </div>
    
   </div>
   </div>
  );
}
