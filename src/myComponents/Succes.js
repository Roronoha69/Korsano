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

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";



//import {getAuth} from "firebase/auth";






export default () => {
  const { user, isLoading } = useAuth0();
  const [stateEmail, setEmail] = useState()
  const [fireData, setFireData] = useState([])
  const [userEmail, setUserEmail] = useState()
  const [bug, bugSolved ] = useState(false)



  
 const [maintient, setMaintient] = useState('')
 const [calories, setCalories] = useState('')
 const [prots, setProts] = useState('')
 //const [poid, setPoid ] = useState()
 const [bodyfat, setBodyfat] = useState('')
 const [nickname, setNickname] = useState('')
 const [bulk, setBulk] = useState('')



  const firebaseConfig = {
    apiKey: "AIzaSyDWBUWEzSwjAmPZwESF12aIXjwEYLDfThA",
    authDomain: "korsano-3681c.firebaseapp.com",
    projectId: "korsano-3681c",
    storageBucket: "korsano-3681c.appspot.com",
    messagingSenderId: "687740193997",
    appId: "1:687740193997:web:a3466695cc62f8ec6ded84",
    measurementId: "G-H4EZDX94ZQ"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


 

    // let timeout
    //     if (!isLoading && user) {
    // const { email } = user;
    // setEmail(email)
    //  console.log(email);
    //}

    
    const getData = async () => {
      
    const querySnapshot = await getDocs(collection(db, `${user.nickname}`));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      setCalories(doc.data().stringCal)
      setBodyfat(doc.data().stringFat)
      setProts(doc.data().stringPoid * 1.7)
      setMaintient(doc.data().stringMaintient)
      setFireData(doc.id, " => ", doc.data())
      bugSolved(true)
      if (maintient < calories) {
        setBulk(true)
      }

      if (maintient > calories) {
        setBulk(false)
      }
      
    });
      
   
     }
    
        useEffect(() => {

            console.log(user);
                    
            if (user && !isLoading) {
              setUserEmail(user.email)
                          setNickname(user.nickname)
                          console.log('here');
                          console.log(user.email);
                          console.log(user.nickname);
                      
            }
                        
                  


       
  

        
          
        }, [])
        
    
    
    
  


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
  
 
  
 
 // Changement post a get a fait bug
 
 
 
  //  const fetchData = async() =>{
  //      fetch("/user").then(
  //    response => response.json()
  //  ).then(
  //    data => {
  //      SetData(data)
  //    }
  //  )
  //  console.log(user.email);
  //  }
 
 
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


// Breakfast 
const [breakfastOeufs, setBreakfastOeufs] = useState('3')
const [breakfastWrap, setBreakfastWraps] = useState('1')
const [mondayChevre, setMondayChevre] = useState()

//Meal prep1
const [mealPrep1Quinoa, setMealPrep1Quinoa] = useState()
const [mealPrep1Chiken, setMealPrep1Chiken] = useState()
const [mealPrep1Feta, setMealPrep1Feta] = useState()
const [mealPrep1Huile, setMealPrep1Huile] = useState()
const [mealPrep1Avoca, setMealPrep1Avoca] = useState('1/2')

// colation Shakeur
const [shakeurLait, setShakeurLait] = useState()
const [shakeurBanane, setShakeurBanane] = useState('1')
const [shakeurBDC, setShakeurBDC] = useState()
const [shakeurGlace, setShakeurGlace] = useState()
const [shakeurChoco, setShakeurChoco] = useState()

//monday Dinner
const [mondayTofu, setMondayTofu] = useState('')
const [mondayRiz, setMondayRiz] = useState('')
const [mondayPoid, setMondayPoid] = useState('')

//Sauce a mettre


//Tuesday breakfast
const [tuesdayBreakfastBDC, setTuesdayBreakfastBDC] = useState('')


// Dinner 
const [tuesdayWrap, setTuesdayWrap] = useState('2')
const [tuesdaySardine, setTuesdaySardines] = useState('')
const [tuesdayYaourt, setTuesdayYaourt] = useState('')


//Mercredi Dej
const [wednesdayChevre, setWednesdayChevre] = useState('')
const [wednesdayPesto, setWednesdayPesto] = useState('')

//Meal prep 2
const [mealPrep2cashew, setMealPrep2Cashew] = useState('')
//const [mealPrep2, setMealPrep2] = useState('')

//Mercredi dinner
const [wednesdayWrap, setWednesdayWrap] = useState('')
const [wednesdayTofu, setWednesdayTofu] = useState('')
const [wednesdayHuile, setWednesdayHuile] = useState('') 
const [wednesdayCreme, setWednesdayCreme] = useState('') 

//Thurday brekfast
const [thurdayAvoca, setThursdayAvoca] = useState('')


//Thursday diner 

// TBD 
const [thurday, setThursday] = useState('') 



//Friday  BF 
//BreakfastOeufs Etc 
// Monday chevre

// Friday  meal prep
const [mealPrep3Smoked, setMealPrep3Smoked] = useState('') 
const [mealPrep3, setMealPrep3] = useState('') 


//friday 

// TBD
const [friday, setFriday] = useState('') 


// WEEK END TBD


// Saturday déjeuner 



//Saturday 








  return (


    <div> 

      <div  className={bug? 'invisible' : '' }>
        Your private information will not 
        <button onClick={()=> getData()} >
          Acces data
        </button>
      </div>
      <div className={bug? '' : 'invisible' }>
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
            title: `${Math.round(prots)}g`,
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
            title: "3000",
            description: "Tes besoin en calories pour prisse de masse",
            url: "https://google.com"
          },
          {
            imageSrc: chefIconImageSrc,
            title: "6 semaine",
            description: "Le temps qu'il faut pour prendre 2kg de muscle sec",
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
        content: ``,
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
    </div>
    </div>
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
  