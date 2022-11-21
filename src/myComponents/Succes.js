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
      personalizedProgram(doc.data().stringCal)
      
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
const [mondayChevre, setMondayChevre] = useState('')
const [mondayBreakfastOil, setMondayBreakfastOil] = useState('1')


//Meal prep
const [mealPrep1Quinoa, setMealPrep1Quinoa] = useState()
const [mealPrep1Chiken, setMealPrep1Chiken] = useState()
const [mealPrep1Feta, setMealPrep1Feta] = useState()
const [mealPrep1Huile, setMealPrep1Huile] = useState('1')
const [mealPrep1Avoca, setMealPrep1Avoca] = useState('1/2')
const [mealPrep1Nuts, setMealPrep1Nuts] = useState()

// colation Shakeur
const [shakeurLait, setShakeurLait] = useState()
const [shakeurBanane, setShakeurBanane] = useState('1')
const [shakeurBDC, setShakeurBDC] = useState()
const [shakeurGlace, setShakeurGlace] = useState()
const [shakeurAvoine, setShakeurAvoine] = useState()
const [shakeurChoco, setShakeurChoco] = useState()

//monday Dinner
const [mondayTofu, setMondayTofu] = useState()
const [mondayRiz, setMondayRiz] = useState()
const [mondayPoid, setMondayPoid] = useState()
const [mondayEggs, setMondayEggs] = useState('1')
const [mondayPesto, setMondayPesto] = useState()



//Tuesday breakfast
const [tuesdayBreakfastBDC, setTuesdayBreakfastBDC] = useState('')

//Collation 2 
const [redFruits, setRedFruits] = useState()

const [tuesdayWrap, setTuesdayWrap] = useState()
const [tuesdaySardine, setTuesdaySardines] = useState('')
const [tuesdayYaourt, setTuesdayYaourt] = useState('')


//Mercredi Dej
const [wednesdayChevre, setWednesdayChevre] = useState('')
const [wednesdayPesto, setWednesdayPesto] = useState('')
const [wednesdayNoix, setWednesdayNoix] = useState('')


//Mercredi dinner
const [wednesdayWrap, setWednesdayWrap] = useState('')
const [wednesdayTofu, setWednesdayTofu] = useState('')
const [wednesdayHuile, setWednesdayHuile] = useState('') 
const [wednesdayCreme, setWednesdayCreme] = useState('') 

//Thurday brekfast
// BFST IDEM LUNDI


//Thursday diner 

const [thurdayHuile, setThursdayHuile] = useState('') 
const [thurdayChevre, setThursdayChevre] = useState()
const [thurdayRiz, setThursdayRiz] = useState()
const [thurdayFish, setThursdayFish] = useState()
const [thurdayLentille, setThursdayLentille] = useState(40)
const [thurdaySauce, setThursdaySauce] = useState()  


//Friday  
// IDEM MARDI



// Friday  meal prep
const [mealPrep3Fish, setMealPrep3Fish] = useState('') 



//friday dinner
const [fridayWrap, setFridayWrap] = useState()
const [fridayBeef, setFridayBeef] = useState()
const [fridayCheese, setFridayCheese] = useState()



// Saturday petit déjeuner 
const [saturdayAvoca, setSatudayAvoca] = useState('1/2')
const [saturdayEggs, setSatudayEggs] = useState()
const [saturdayToast, setSatudayToast] = useState()
const [saturdayYaourt, setSatudayYaourt] = useState()


// lunch
const [saturdayOil, setSaturdayOil] = useState()
const [saturdayRmeat, setSaturdayRmeat] = useState()
// pasta idem 
const [saturdayPesto, setSaturdayPesto] = useState()


// collation

const [saturdaySnackEggs, setSaturdaySnackEggs] = useState()
const [saturdayMilk, setSaturdayMilk] = useState()
const [saturdayHam, setSaturdayHam] = useState()
const [saturdayDark, setSaturdayDark] = useState()
const [saturdayPb, setSaturdayPb] = useState()




//Saturday evening

const [saturdayPasta, setSaturdayPasta] = useState() 
const [saturdayTofu, setSaturdayTofu] = useState() 
const [saturdayBeans, setSaturdayBeans] = useState() 
const [saturdayCashew, setSaturdayCashew] = useState()




//Sunday

//Breakfast
const[pankakesEggs, setPankakesEggs] = useState()
const[pankakesOats, setPankakesOats] = useState()
const[pankakesFarine, setPankakesFarine] = useState()
const[pankakesMilk, setPankakesMilk] = useState()
const[pankakesDark, setPankakesDark] = useState()
const[pankakesButter, setPankakesButter] = useState()
const[pankakesMapple, setPankakesMapple] = useState()
const [pankakesButterFondu, setPankakesButterFoundu] = useState()

// lunch
const [sundayRmeat, setSundayRmeat] = useState()
const [sundayBurger, setSundayBurger] = useState()
const [sundaySweetP, setSundaySweetP] = useState()
const [sundayCheese, setSundayCheese] = useState()


// Snack

// BF/2

//Dinner

const [sundayEggs, setSundayEggs] = useState()
const [sundayRiz, setSundayRiz] = useState()
const [sundayVegeteble, setSundayVegeteble] = useState()
const [sundayPeanut, setSundayPeanut] = useState()
//const [sunday, setSunday] = useState()

const [moR1, setMoR1] = useState()
const [ moR2, setMoR2] = useState()
const [ moR3, setMoR3] = useState()
const [ moR4, setMoR4] = useState()

const [moR1p, setMoR1p] = useState()
const [ moR2p, setMoR2p] = useState()
const [ moR3p, setMoR3p] = useState()
const [ moR4p, setMoR4p] = useState()

const [ tueR1, setTueR1] = useState()
const [ tueR2, setTueR2] = useState()
const [ tueR3, setTueR3] = useState()
const [ tueR4, setTueR4] = useState()

const [ tueR1p, setTueR1p] = useState()
const [ tueR2p, setTueR2p] = useState()
const [ tueR3p, setTueR3p] = useState()
const [ tueR4p, setTueR4p] = useState()


const [ weR1, setWeR1] = useState()
const [ weR2, setWeR2] = useState()
const [ weR3, setWeR3] = useState()
const [ weR4, setWeR4] = useState()

const [ weR1p, setWeR1p] = useState()
const [ weR2p, setWeR2p] = useState()
const [ weR3p, setWeR3p] = useState()
const [ weR4p, setWeR4p] = useState()


const [ tuR1, setTuR1] = useState()
const [ tuR2, setTuR2] = useState()
const [ tuR3, setTuR3] = useState()
const [ tuR4, setTuR4] = useState()


const [ tuR1p, setTuR1p] = useState()
const [ tuR2p, setTuR2p] = useState()
const [ tuR3p, setTuR3p] = useState()
const [ tuR4p, setTuR4p] = useState()

const [ fiR1, setFiR1] = useState()
const [ fiR2, setFiR2] = useState()
const [ fiR3, setFiR3] = useState()
const [ fiR4, setFiR4] = useState()

const [ fiR1p, setFiR1p] = useState()
const [ fiR2p, setFiR2p] = useState()
const [ fiR3p, setFiR3p] = useState()
const [ fiR4p, setFiR4p] = useState()

const [ saR1, setSaR1] = useState()
const [ saR2, setSaR2] = useState()
const [ saR3, setSaR3] = useState()
const [ saR4, setSaR4] = useState()


const [ saR1p, setSaR1p] = useState()
const [ saR2p, setSaR2p] = useState()
const [ saR3p, setSaR3p] = useState()
const [ saR4p, setSaR4p] = useState()

const [ suR1, setSuR1] = useState()
const [ suR2, setSuR2] = useState()
const [ suR3, setSuR3] = useState()
const [ suR4, setSuR4] = useState()


const [ suR1p, setSuR1p] = useState()
const [ suR2p, setSuR2p] = useState()
const [ suR3p, setSuR3p] = useState()
const [ suR4p, setSuR4p] = useState()


function personalizedProgram(paramsCal) {
  
  if (paramsCal > 2400 && paramsCal <= 2500) {
    setBreakfastOeufs()

  }
  

}


  return (


    <div> 

      <div  className={bug? 'invisible' : '' }>
        Y'a un soucis avec les state donc je dois prendre les data en 2 temps, met un loader et une question en dessous
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
        title: "Wrap",
        content: `${breakfastOeufs} Eggs`,
        content2: `${breakfastWrap} Wrap`,
        content3: `${mondayChevre} cheese`,
        content4: `${mondayBreakfastOil}tbsp of oil`,
        content5: `some salad`,
        

        price: `${moR1} cal`,
        price2: `${moR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avocado`,
        content2: `${mealPrep1Chiken}g chicken`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}tbsp of oil`,
        content5: `${mealPrep1Nuts}g nuts`,
        content6: `${mealPrep1Quinoa}g quinoa or rice`,

        price: `${moR2} cal`,
        price2: `${moR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Snack",
        content: `${shakeurLait}ml milk`,
        content2: `${shakeurBanane} banana(s)`,
        content3: `${shakeurAvoine}g oats`,
        content4: `${shakeurBDC}g peanuts butter`,
        content5: `${shakeurGlace}g ice cream`,
        content6: `${shakeurChoco}g dark chocolate`,

        price: `${moR3} cal`,
        price2: `${moR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Cantonese rice",
        content: `${mondayRiz}g rice`,
        content2: `${mondayEggs} eggs`, 
        content3: `${mondayTofu}g Tofu`,
        content4: `${mondayPoid}g green beans`,
        content5: `${mondayPesto}g pesto`,

        price: `${moR4} cal`,
        price2: `${moR4p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    tuesday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Wrap",
        content: `${breakfastOeufs} eggs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${tuesdayBreakfastBDC}`,
        content4: "500g Test ",
        content5: "500g Test ",

        price: `${tueR1} cal`,
        price2: `${tueR1p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avocado`,
        content2: `${mealPrep1Chiken}g chicken`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}tbsp of oil`,
        content5: `${mealPrep1Nuts}g nuts`,
        content6: `${mealPrep1Quinoa}g quinoa or rice`,

        price: `${tueR2} cal`,
        price2: `${tueR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Snack",
        content: `${shakeurLait}ml milk`,
        content2: `${shakeurBanane} banana(s)`,
        content3: `${shakeurAvoine}g oats`,
        content4: `${shakeurBDC}g peanuts butter`,
        content5: `${shakeurGlace}g ice cream`,
        content7: `${redFruits}g red fruits`,
        content6: `${shakeurChoco}g dark chocolate`,

        price: `${tueR3} cal`,
        price2: `${tueR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "fish wrap",
        content: `${tuesdayWrap} tortillas`,
        content2: `${tuesdaySardine}g sardines`,
        content3: `${tuesdayYaourt}g greek yogurt`,
        content4: `some pikles, lemon juice`,
        

        price: `${tueR4} cal`,
        price2: `${tueR4p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    wednesday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: `${breakfastOeufs} eggs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${wednesdayChevre}g cheese`,
        content4: `${wednesdayNoix}g nuts`,
        content5: `${wednesdayPesto}g pesto`,

        price: `${weR1} cal`,
        price2: `${weR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avocado`,
        content2: `${mealPrep1Chiken}g chicken`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}tbsp of oil`,
        content5: `${mealPrep1Nuts}g nuts`,
        content6: `${mealPrep1Quinoa}g quinoa or rice`,

        price: `${weR2} cal`,
        price2: `${weR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${shakeurLait}ml milk`,
        content2: `${shakeurBanane} banana(s)`,
        content3: `${shakeurAvoine}g oats`,
        content4: `${shakeurBDC}g peanuts butter`,
        content5: `${shakeurGlace}g ice cream`,
        content6: `${shakeurChoco}g dark chocolate`,

        price: `${weR3} cal`,
        price2: `${weR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Healthy Tacos",
        content: `${wednesdayWrap} tortillas`,
        content2: `${wednesdayTofu}g tofu`,
        content3: `${wednesdayHuile}tbsp of oil`,
        content4: `${wednesdayCreme}g vegetal cream`,
        content5: `some tomato and onion`,

        price: `${weR4} cal`,
        price2: `${weR4p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    thursday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Wrap",
        content: `${breakfastOeufs} eggs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${mondayChevre} cheese`,
        content4: `${mondayBreakfastOil}tbsp of oil`,
        content5: `some salad`,
        

        price: `${tuR1} cal`,
        price2: `${tuR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avocado`,
        content2: `${mealPrep1Chiken}g chicken`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}tbsp of oil`,
        content5: `${mealPrep1Nuts}g nuts`,
        content6: `${mealPrep1Quinoa}g quinoa or rice`,

        price: `${tuR2} cal`,
        price2: `${tuR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${shakeurLait}ml milk`,
        content2: `${shakeurBanane} banana(s)`,
        content3: `${shakeurAvoine}g oats`,
        content4: `${shakeurBDC}g peanuts butter`,
        content5: `${shakeurGlace}g ice cream`,
        content6: `${shakeurChoco}g dark chocolate`,
        content7: `${redFruits}g red fruits`,

        price: `${tuR3} cal`,
        price2: `${tuR3}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Fish & rice",
        content: `spinach`,
        content2: `${thurdayChevre}g goat cheese`,
        content3: `${thurdayHuile}tbsp of oil`,
        content4: `${thurdayRiz}g rice`,
        content5: `${thurdayFish}g salmon or sardines`,
        content6: `${thurdayLentille}g lentils`,
        content7: `${thurdaySauce}g vegetal cream`,

        price: `${tuR4} cal`,
        price2: `${tuR4p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    friday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Wrap",
        content: `${breakfastOeufs} eggs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${wednesdayChevre}g cheese`,
        content4: `${wednesdayNoix}g nuts`,
        content5: `${wednesdayPesto}g pesto`,

        price: `${fiR1} cal`,
        price2: `${fiR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avocado`,
        content2: `${mealPrep3Fish}g surimi`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}tbsp of oil`,
        content5: `${mealPrep1Nuts}g nuts`,
        content6: `${mealPrep1Quinoa}g quinoa or rice`,

        price: `${fiR2} cal`,
        price2: `${fiR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${shakeurLait}ml milk`,
        content2: `${shakeurBanane} banana(s)`,
        content3: `${shakeurAvoine}g oats`,
        content4: `${shakeurBDC}g peanuts butter`,
        content5: `${shakeurGlace}g ice cream`,
        content6: `${shakeurChoco}g dark chocolate`,

        price: `${fiR3} cal`,
        price2: `${fiR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Tacos",
        content: `${fridayWrap} tortilla`,
        content2: `${fridayBeef}g ground beef`,
        content3: `${fridayCheese}g cheese`,
        content4: `tomato, onion`,
        

        price: `${fiR4} cal`,
        price2: `${fiR4p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    saturday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Eggs & avocado toast",
        content: `${saturdayAvoca} avocado`,
        content2: `${saturdayEggs} eggs`,
        content3: `${saturdayHam} slice whole wheat bread`,
        content4: `${saturdayYaourt}g of greek yogurt`,
        

        price: `${saR1} cal`,
        price2: `${saR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Pesto pasta",
        content: `spinach`,
        content2: `${saturdayOil}tbsp of oil`,
        content3: `${saturdayPasta}g pasta`,
        content4: `${saturdayRmeat}g ground beef`,
        content5: `${saturdayPesto}g pesto`,

        price: `${saR2} cal`,
        price2: `${saR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "French toast",
        content: `${saturdayHam} slice of bread`,
        content2: `${saturdaySnackEggs} eggs`,
        content3: `${saturdayMilk}ml milk`,
        content4: `${saturdayPb} peanut butter`,
        content5: `some red fruits`,
        content6: `${saturdayDark}g dark chocolate`,

        price: `${saR3} cal`,
        price2: `${saR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Creamy pasta",
        content: `${saturdayPasta}g pasta`,
        content2: `${saturdayTofu}g tofu`,
        content3: `${saturdayBeans}g chickpea`,
        content4: `${saturdayCashew}g cashew ou cashew butter`,
        content5: "xx ml Water",
        content6: 'lemon juice',

        price: `${saR4} cal`,
        price2: `${saR4p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    sunday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Pankakes",
        content: `${pankakesOats}g oats`,
        content2: `${pankakesFarine}g flour`,
        content3: `${pankakesMilk}ml milk`,
        content4: `${pankakesEggs} eggs`,
        content5: `${pankakesDark}g dark chocolate`,

        price: `${suR1} cal`,
        price2: `${suR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Burger",
        content: `1 burger buns`,
        content2: `${sundayRmeat}g red meat`,
        content3: `${sundayCheese}g cheese`,
        content4: `10g mayonnaise`,
        content5: `tomato, onion, salad`,
        content6: `${sundaySweetP}g sweet potatoes`,


        price: `${suR2} cal`,
        price2: `${suR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Pankakes",
        content: `${pankakesOats}g oats`,
        content2: `${pankakesFarine}g flour`,
        content3: `${pankakesMilk}ml milk`,
        content4: `${pankakesEggs} eggs`,
        content5: `${pankakesDark}g dark chocolate`,

        price: `${suR3} cal`,
        price2: `${suR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Fried rice",
        content: `${sundayEggs} eggs`,
        content2: `${sundayRiz}g rice`,
        content3: `${sundayVegeteble}g veggies`,
        content4: `${sundayPeanut}g peanut`,
        content5: `some soy sauce`,

        price: `${suR4} cal`,
        price2: `${suR4p}g protein`,
        rating: "Dinner",
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


// const Success = () => {


//   };
  
//   export default Success;
  