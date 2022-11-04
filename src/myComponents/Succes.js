import React from "react";
import { useState, useEffect } from "react";
import Stripe from 'stripe';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import './Success.scss'

import styled from 'styled-components';
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";






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
  


  const [backendData, SetData] = useState()
  const { user, isLoading } = useAuth0();
  const [stateEmail, setEmail] = useState('mbodje.justin@gmail.com')
  
 const test = () =>{
     if (!isLoading && user) {
  const { email } = user;
  setEmail(email)
    console.log(email);
  }
 }
 
 // Changement post a get a fait bug
 
   useEffect(()=>{
 //   fetch("/stripe").then(
 //     response => response.json()
 //   ).then(
 //     data => {
 //       SetData(data)
 //     }
 //   )
 
 let timer1 = setTimeout(() => test(), 2000);
 
   })
 
 
   const fetchData = async() =>{
       fetch("/user").then(
     response => response.json()
   ).then(
     data => {
       SetData(data)
     }
   )
   }
 
 
 const sendBack = async(event) => {
   
   
     const response = await axios.post('https://serveur-korsano.herokuapp.com/stripe',
     {
       userEmail: `${stateEmail}`,
      //userEmail: `mbodje.justin@gmail.com`,
     });
 
     
     console.log(response.data);
     if (response.data = true){
        SetData(`${stateEmail} fait parti des clients`)
     }
    
 }



 const [calories, setCalories] = useState('2830')
 const [prots, setProts] = useState('120')
 const [bodyfat, setBodyfat] = useState('9.78')



  return (
    <AnimationRevealPage>

<div className={calories? '' : 'invisible'}>
      <Hero
        heading={<>Your <Incline><HighlightedText>Results</HighlightedText></Incline></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Retake the test"
        watchVideoButtonText="Meet The Chefs"
      />
     </div>

     <div className={calories? 'invisible' : ''}>
      <Hero
        heading={<>Take <Incline><HighlightedText>The Test</HighlightedText></Incline></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Take the test"
        watchVideoButtonText="Meet The Chefs"
      />
     </div>
     <div className={calories? '': 'invisible'}>
     <Features
        heading={
          <>
            Analyse <HighlightedText>Macronutriments.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: shopIconImageSrc,
            title: `${calories} calories `,
            description: "Vos besoins caloriques quotidient",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: `${prots}g`,
            description: "Vos besoin quotidient en proteines",
            url: "https://timerse.com"
          },
          {
            imageSrc: celebrationIconImageSrc,
            title: `${bodyfat}%`,
            description: "Notre estimation de votre bodyfat (formule US navy)",
            url: "https://reddit.com"
          },
          {
            imageSrc: shopIconImageSrc,
            title: "230+ Locations",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com"
          },
         
        ]}
        />
      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>menu.</HighlightedText>
          </>
        }

        
  tabs ={ {
    Monday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    tuesday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    wednesday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    thursday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    friday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    saturday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    sunday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",


        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "500g Test ",
        content2: "500g Test ",
        content3: "500g Test ",
        content4: "500g Test ",
        content5: "500g Test ",

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ]

  }}
      />
       </div>
      <Footer />
    </AnimationRevealPage>
  );
}

//  <div>
//         <h1>Success page</h1>
      

//         <button onClick={sendBack}>
//           Send Backend
//         </button>
// <br /> 
//         <button onClick={sendBack}>
//           get data
//         </button>

//         <p>{backendData} </p>

        
//       </div>




// const Success = () => {


//   };
  
//   export default Success;
  