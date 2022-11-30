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


import ImageProtein from "images/icons8-heart-with-pulse-64.png";
import ImageMuscle from "images/icons8-account-64.png";
import ImageCal from "images/icons8-fire-64.png";
import ImageTime from "images/icons8-calendar-642.png";
import ImageScan from "images/icons8-steak-64.png";


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

  const [objectifKilos, setObjectifKilos] = useState()
  const [objectifTemps, setObjectifTemps] = useState()
  const [objectifVitesse, setObjectifVitesse] = useState()
  const [firstName, setFirstName] = useState('')



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
      setMaintient(doc.data().stringBej)
      setObjectifTemps(doc.data().stringTime)
      setObjectifVitesse(doc.data().stringVitesse)
      setFireData(doc.id, " => ", doc.data())
      bugSolved(true)
      personalizedProgram(doc.data().stringCal)
      // setFirstname(doc.data().firstName)
      // setObjectifTemps(doc.data().stringTime)
      // setObjectifVitesse(doc.data().stringVitesse)
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
const [mealPrep1Chiken, setMealPrep1Chiken] = useState('3.5 ounce / 100')
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
const [mealPrep3Cheese, setMealPrep3Cheese] = useState('')



//friday dinner
const [fridayWrap, setFridayWrap] = useState()
const [fridayBeef, setFridayBeef] = useState()
const [fridayCheese, setFridayCheese] = useState()



// Saturday petit déjeuner 
const [saturdayAvoca, setSaturdayAvoca] = useState('1/2')
const [saturdayEggs, setSaturdayEggs] = useState()
const [saturdayToast, setSaturdayToast] = useState()
const [saturdayYaourt, setSaturdayYaourt] = useState()


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

const [mayo, setMayo]  = useState()
const [sundayOil, setSundayOil] = useState()
const [oil, setOil] = useState('1 tbsp of oil')


function personalizedProgram(paramsCal) {
  
  if (paramsCal > 2400 && paramsCal <= 2500) {
        
    // Monday R1
    setMondayChevre('.9 ounce / 25')
    setMoR1('610')
    setMoR1p('35')
    setTuR1('620')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('0.8 ounce / 20')
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('5 ounce / 140')
    setMoR2('730')
    setMoR2p('36')
    setTueR2('730')
    setTueR2p('36')
    setWeR2('730')
    setWeR2p('36')
    setTuR2('730')
    setTuR2p('36')

    //Monday R3
    setShakeurAvoine('1 ounce / 30') 
    setShakeurBDC('1 tbsp / 30')
    setShakeurBanane('1')
    setShakeurChoco('1 sqare')
    setShakeurGlace('2 ounce / 50')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('550')
    setMoR3p('12')
    setTueR3p('560')
    setTueR3p('12')
    setWeR3('550')
    setWeR3p('12')
    setTuR3('560')
    setTuR3p('12')
    setFiR2('550')
    setFiR3p('12')        
    
    
    //Monday R4
    setMondayPesto('1 tbsp / 30')
    setMondayPoid('2.5 ounce / 75')
    setMondayRiz('6 ounce / 170')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('650')
    setMoR4p('39')

    // 2490

    




    //Tuesday R1
    setTuesdayBreakfastBDC('0.8 ounce / 25')

    setTuR1('590')
    setTuR1p('36')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')

    setTuR4('660')
    setTuR4p('39')

    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('4 tbsp')
    setWednesdayHuile('1')
    setWednesdayTofu('3.5 ounce / 100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')



    //Tu R4
    setThursdayChevre('1/2 ounce / 15g')
    setThursdayRiz('6-oucne / 170')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('650')
    setTuR4p('33')


    // setFriday R2
    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2('770')
    setFiR2p('24')


    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('.7 ounce / 20 ')
    setFridayWrap('1')
    
    setFiR4('510')
    setFiR4p('34')


    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('8 ounce')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tsp')

    setSaR2('670')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('100')
    setSaturdayHam('3')
    setSaturdayDark('1 square')
    setSaturdayPb('no need to add')

    setSaR3('555')
    setSaR3p('17')



    // Sa R4
    setSaturdayTofu('3.5 ounce / 100')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/5 ouce / 15g ')

    setSaR4('640')
    setSaR4p('32')


    //Su R1 
    setPankakesButter('no need')
    setPankakesDark('no need')
    setPankakesFarine('4 ounce / 120')
    setPankakesEggs('2')
    setPankakesMapple('1 tbsp')
    setPankakesMilk('10 fl oz / 300')
    setPankakesOats('5 ounce / 150')
    
    setSuR1('650')
    setSuR1p('23')
    setSuR3('650')
    setSuR3p('23')
    
    // Su R2
    setSundayCheese('1/2 ounce / 15')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100g')
    setSuR2('650')
    setSuR2p('34')

    // Su R4
    setSundayRiz('5 ouce / 145g')
    setSundayEggs('2')
    setSundayPeanut('1/2 ounce / 15')
    setSundayVegeteble('max')
    setSuR4('540')
    setSuR4p('27')
    
}  













if (paramsCal > 2500 && paramsCal <= 2600) {
    // Monday R1
    setMondayChevre('.9 ounce / 25') // 
    setMoR1('610')
    setMoR1p('35')
    setTuR1('620')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('.8 ounce / 20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('5 ounce / 140')
    setMoR2('730')
    setMoR2p('34')
    setTueR2('730')
    setTueR2p('34')
    setWeR2('730')
    setWeR2p('34')
    setTuR2('730')
    setTuR2p('34')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g') //+ 50 cal
    setShakeurBDC('1 tbsp / 30')
    setShakeurBanane('1')
    setShakeurChoco('1 sqare')
    setShakeurGlace('2 ounce / 50g')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('550')
    setMoR3p('14')
    setTueR3('560')
    setTueR3p('14')
    setWeR3('550')
    setWeR3p('14')
    setTuR3('560')
    setTuR3p('14')
    setFiR3('550')
    setFiR3p('14')        
    
    
    //Monday R4
    setMondayPesto('1 tbsp / 30')
    setMondayPoid('2.5 ounce / 75')
    setMondayRiz('6 ounce / 170')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('650')
    setMoR4p('39')

// 2540


    //Tuesday R1
    setTuesdayBreakfastBDC('0.8 ounce / 25')

    setTuR1('590')
    setTuR1p('36')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')

    setTuR4('660')
    setTuR4p('39')

    // 2540
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('3.5 ounce / 100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')



    //Tu R4
    setThursdayChevre('1/2 ounce / 15g')
    setThursdayRiz('6-oucne / 170')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('650')
    setTuR4p('33')

//2570

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2('790')
    setFiR2p('24')





    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('1 ounce')
    setFridayWrap('2 small')
    
    setFiR4('620')
    setFiR4p('40')

    // 2570 

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('8 ounce')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tbsp')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('100')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('no need to add')

    setSaR3('605')
    setSaR3p('17')



    // Sa R4
    setSaturdayTofu('3.5 ounce / 100')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2585


    //Su R1 
    setPankakesButter('no need')
    setPankakesDark('1 square / 10')
    setPankakesFarine('4 ounce / 120')
    setPankakesEggs('2')
    setPankakesMapple('1 tbsp')
    setPankakesMilk('10 fl oz / 300')
    setPankakesOats('5 ounce / 150')
    
    setSuR1('700')
    setSuR1p('23')
    setSuR3('700')
    setSuR3p('23')
    
    // Su R2
    setSundayCheese('1/2 ounce / 15')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100g')
    setSuR2('650')
    setSuR2p('34')
    
    // Su R4
    setSundayRiz('5 ouce / 145g')
    setSundayEggs('2')
    setSundayPeanut('1/2 ounce / 15')
    setSundayVegeteble('max')
    setSuR4('540')
    setSuR4p('27')
    // 2590


}  












    if (paramsCal > 2600 && paramsCal <= 2700) {
    // Monday R1
    setMondayChevre('1 ounce / 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('.8 ounce / 20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('6 ounce / 170')
    setMoR2('770')
    setMoR2p('34')
    setTueR2('770')
    setTueR2p('34')
    setWeR2('770')
    setWeR2p('34')
    setTuR2('770')
    setTuR2p('34')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g')
    setShakeurBDC('1 tbsp / 30')
    setShakeurBanane('1')
    setShakeurChoco('1 sqare')
    setShakeurGlace('2 ounce / 50g')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('590')
    setMoR3p('14')
    setTueR3('600')
    setTueR3p('14')
    setWeR3('590')
    setWeR3p('14')
    setTuR3('600')
    setTuR3p('14')
    setFiR3('590')
    setFiR3p('14')        
    
    
    //Monday R4
    setMondayPesto('1 tbsp / 30')
    setMondayPoid('3 ounce / 90')
    setMondayRiz('6 ounce / 170g')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('650')
    setMoR4p('39')

// 2675


    //Tuesday R1
    setTuesdayBreakfastBDC('0.8 ounce / 25')

    setTuR1('590')
    setTuR1p('36')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')

    setTuR4('660')
    setTuR4p('39')

    // 2650
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('3.5 ounce / 100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')

// 2630

    //Tu R4
    setThursdayChevre('1/2 ounce / 15g')
    setThursdayRiz('6-oucne / 170')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('650')
    setTuR4p('33')

//2630

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2p('24')
    setFiR2('790')

    //2630




    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('1 ounce')
    setFridayWrap('2 small')
    
    setFiR4('620')
    setFiR4p('40')

    // 2630

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('3.5 ounce / 100')
    setSaturdayPasta('8 ounce')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('10ml / 1')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('150')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('1/2 tbsp')

    setSaR3('680')
    setSaR3p('17')



    // Sa R4
    setSaturdayTofu('3.5 ounce / 100')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2660


    //Su R1 
    setPankakesButter('no need')
    setPankakesDark('2 square / 20')
    setPankakesFarine('4 ounce / 120')
    setPankakesEggs('2')
    setPankakesMapple('1 tbsp')
    setPankakesMilk('10 fl oz / 300')
    setPankakesOats('5 ounce / 150')
    
    setSuR1('750')
    setSuR1p('23')
    setSuR3('700')
    setSuR3p('23')
    

    // Su R2
    setSundayCheese('1/2 ounce / 15')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100g')
    setSuR2('650')
    setSuR2p('34')
    

    // Su R4
    setSundayRiz('5 ouce / 145g')
    setSundayEggs('2')
    setSundayPeanut('1/2 ounce / 15')
    setSundayVegeteble('max')
    setSuR4('540')
    setSuR4p('27')
    // 2640
}










if (paramsCal > 2700 && paramsCal <= 2800) {
    // Monday R1
    setMondayChevre('1 ounce / 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('.8 ounce / 20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('6 ounce / 170')
    setMoR2('770')
    setMoR2p('34')
    setTueR2('770')
    setTueR2p('34')
    setWeR2('770')
    setWeR2p('34')
    setTuR2('770')
    setTuR2p('34')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g')
    setShakeurBDC('1 big tbsp / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 sqare')
    setShakeurGlace('2 ounce / 50g')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('710')
    setMoR3p('16')
    setTueR3('710')
    setTueR3p('16')
    setWeR3('710')
    setWeR3p('16')
    setTuR3('710')
    setTuR3p('16')
    setFiR3('710')
    setFiR3p('16')        
    
    
    //Monday R4
    setMondayPesto('1 tbsp / 30')
    setMondayPoid('3 ounce / 90')
    setMondayRiz('6 ounce / 170g')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('650')
    setMoR4p('39')

// 2760


    //Tuesday R1
    setTuesdayBreakfastBDC('1 ounce / 30')

    setTuR1('630')
    setTuR1p('37')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')

    setTuR4('660')
    setTuR4p('39')

    // 2770 
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('3.5 ounce / 100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')

// 2750

    //Tu R4
    setThursdayChevre('1/2 ounce / 15g')
    setThursdayRiz('6-oucne / 170')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('650')
    setTuR4p('33')

//2750

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2p('24')
    setFiR2('790')






    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('1 ounce')
    setFridayWrap('2 small')
    
    setFiR4('620')
    setFiR4p('40')

    // 2750

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('8 ounce')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tbsp')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('150')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('1 tbsp / 30')

    setSaR3('750')
    setSaR3p('21')



    // Sa R4
    setSaturdayTofu('3.5 ounce / 100')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2740


     //Su R1 
    setPankakesButter('.3 ounce / 10')
    setPankakesDark('2 square / 20')
    setPankakesFarine('4 ounce / 120')
    setPankakesEggs('2')
    setPankakesMapple('2 tbsp / 20')
    setPankakesMilk('10 fl oz / 300')
    setPankakesOats('5 ounce / 150')
    
    setSuR1('750')
    setSuR1p('25')
    setSuR3('750')
    setSuR3p('24')
    

    // Su R2
    setSundayCheese('1/2 ounce / 15')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100g')
    setSuR2('650')
    setSuR2p('34')
    

    // Su R4
    setSundayRiz('6 ounce / 170')
    setSundayEggs('2')
    setSundayPeanut('.8 ounce / 20')
    setSundayVegeteble('3.5 ounce / 100')
    setSuR4('590')
    setSuR4p('29')


    // 2740
}


if (paramsCal > 2800 && paramsCal <= 2900) {
    // Monday R1
    setMondayChevre('1 ounce / 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('.8 ounce / 20') 
    setMealPrep1Nuts('1 ounce / 10')
    setMealPrep1Quinoa('6 ounce / 170')
    
    setMoR2('890')
    setMoR2p('37')
    setTueR2('890')
    setTueR2p('37')
    setWeR2('890')
    setWeR2p('37')
    setTuR2('890')
    setTuR2p('37')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g')
    setShakeurBDC('1 big tbsp / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 sqare')
    setShakeurGlace('2 ounce / 50g')
    setShakeurLait('7 fl-oz / 200')


    
    setMoR3('710')
    setMoR3p('16')
    setTueR3('710')
    setTueR3p('16')
    setWeR3('710')
    setWeR3p('16')
    setTuR3('710')
    setTuR3p('16')
    setFiR3('710')
    setFiR3p('16') 
    
    
    //Monday R4
    setMondayPesto('1 tbsp / 30')
    setMondayPoid('3 ounce / 90')
    setMondayRiz('6 ounce / 170g')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('650')
    setMoR4p('39')

// 2880


    //Tuesday R1
    setTuesdayBreakfastBDC('1 ounce / 30')

    setTuR1('630')
    setTuR1p('37')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')

    setTuR4('660')
    setTuR4p('39')

    // 2890 
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('3.5 ounce / 100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')

// 2870

    //Tu R4
    setThursdayChevre('1/2 ounce / 15g')
    setThursdayRiz('6-oucne / 170')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('650')
    setTuR4p('33')

//2870

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2p('29')
    setFiR2('910')






    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('1 ounce')
    setFridayWrap('2 small')
    
    setFiR4('620')
    setFiR4p('40')

    // 2870

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('8 ounce')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tbsp')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('1 tbsp / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('3.5 ounce / 100')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2860


     //Su R1 
    setPankakesButter('.3 ounce / 10')
    setPankakesDark('2 square / 20')
    setPankakesFarine('4 ounce / 120')
    setPankakesEggs('2')
    setPankakesMapple('2 tbsp / 20')
    setPankakesMilk('10 fl oz / 300')
    setPankakesOats('5 ounce / 150')
    
    setSuR1('750')
    setSuR1p('25')
    setSuR3('750')
    setSuR3p('24')
    

    // Su R2
    setSundayCheese('1 ounce / 30')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100')
    setSuR2('700')
    setSuR2p('38')
    

    // Su R4
    setSundayRiz('6 ounce / 170')
    setSundayEggs('2')
    setSundayPeanut('1 ounce / 30')
    setSundayVegeteble('3.5 ounce / 100')
    setSuR4('650')
    setSuR4p('31')


    // 2850
}



if (paramsCal > 2900 && paramsCal <= 3000) {
    // Monday R1
    setMondayChevre('1 ounce / 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('.8 ounce / 20') 
    setMealPrep1Nuts('1 ounce / 10')
    setMealPrep1Quinoa('6 ounce / 170')
    
    setMoR2('890')
    setMoR2p('37')
    setTueR2('890')
    setTueR2p('37')
    setWeR2('890')
    setWeR2p('37')
    setTuR2('890')
    setTuR2p('37')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g')
    setShakeurBDC('1 big tbsp / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 sqare')
    setShakeurGlace('2 ounce / 50g')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('710')
    setMoR3p('16')
    setTueR3('710')
    setTueR3p('16')
    setWeR3('710')
    setWeR3p('16')
    setTuR3('710')
    setTuR3p('16')
    setFiR3('710')
    setFiR3p('16')        
    
    
    //Monday R4
    setMondayPesto('1.3 ounce / 40')
    setMondayPoid('3 ounce / 90')
    setMondayRiz('7 ounce / 200g')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('720')
    setMoR4p('39')

// 2950


    //Tuesday R1
    setTuesdayBreakfastBDC('1 ounce / 30')

    setTuR1('630')
    setTuR1p('37')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')
    setMayo('15g of mayonnaise')

    setTuR4('750')
    setTuR4p('40')

    // 2980
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('5.5 ounce / 150')
    setWednesdayWrap('2')
    setWeR4('740')
    setWeR4p('34')
    

// 2960

    //Tu R4
    setThursdayChevre('1 ounce / 30')
    setThursdayRiz('7 oucne / 200')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('740')
    setTuR4p('38')

//2960

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2p('29')
    setFiR2('910')






    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('1 ounce / 30')
    setFridayWrap('2')
    
    setFiR4('710')
    setFiR4p('43')

    // 2960

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('7 ounce / 200')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tbsp')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('1 tbsp / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('5.5 ounce / 150')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('730')
    setSaR4p('35')

// 2950


    //Su R1 
    setPankakesButter('.3 ounce / 10')
    setPankakesDark('2 square / 20')
    setPankakesFarine('4 ounce / 120')
    setPankakesEggs('2')
    setPankakesMapple('2 tbsp / 20')
    setPankakesMilk('10 fl oz / 300')
    setPankakesOats('5 ounce / 150')
    
    setSuR1('750')
    setSuR1p('25')
    setSuR3('750')
    setSuR3p('24')
    

    // Su R2
    setSundayCheese('1 ounce / 30')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100')
    setSuR2('700')
    setSuR2p('38')
    

    // Su R4
    setSundayRiz('7 ounce / 200')
    setSundayEggs('2')
    setSundayPeanut('1 ounce / 30')
    setSundayVegeteble('3.5 ounce / 100')
    setSundayOil('1 tbsp of oil')
    setSuR4('750')
    setSuR4p('33')


    // 2950
}



if (paramsCal > 3000 && paramsCal <= 3100) {
    // Monday R1
    setMondayChevre('1 ounce / 30') 
    setMoR1('710')
    setMoR1p('37')
    setTuR1('710')
    setTuR1p('37')
    setBreakfastWraps('2 medium sized')
    
    // Monday R2
    setMealPrep1Feta('.8 ounce / 20') 
    setMealPrep1Nuts('1 ounce / 10')
    setMealPrep1Quinoa('6 ounce / 170')
    
    setMoR2('890')
    setMoR2p('37')
    setTueR2('890')
    setTueR2p('37')
    setWeR2('890')
    setWeR2p('37')
    setTuR2('890')
    setTuR2p('37')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g')
    setShakeurBDC('1 big tbsp / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 sqare')
    setShakeurGlace('2.5 ounce / 75g')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('740')
    setMoR3p('16')
    setTueR3('740')
    setTueR3p('16')
    setWeR3('740')
    setWeR3p('16')
    setTuR3('740')
    setTuR3p('16')
    setFiR3('740')
    setFiR3p('16')        
    
    
    //Monday R4
    setMondayPesto('1.3 ounce / 40')
    setMondayPoid('3 ounce / 90')
    setMondayRiz('7 ounce / 200g')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('720')
    setMoR4p('39')

// 3050


    //Tuesday R1
    setTuesdayBreakfastBDC('1 ounce / 30')

    setTuR1('710')
    setTuR1p('39')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')
    setMayo('15g of mayonnaise')

    setTuR4('750')
    setTuR4p('40')

    // 3090
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('710')
    setWeR1p('37')

    setFiR1('710')
    setFiR1p('37')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('5.5 ounce / 150')
    setWednesdayWrap('2')
    setWeR4('740')
    setWeR4p('34')
    

// 3080

    //Tu R4
    setThursdayChevre('1 ounce / 30')
    setThursdayRiz('7 oucne / 200')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('740')
    setTuR4p('38')

//3080

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2p('29')
    setFiR2('910')






    //FI R4
    setFridayBeef('3.5 ounce / 100')
    setFridayCheese('1 ounce / 30')
    setFridayWrap('2')
    
    setFiR4('710')
    setFiR4p('43')

    // 3070

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('3')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('690')
    setSaR1p('24')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('7 ounce / 200')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tbsp')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('1 tbsp / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('5.5 ounce / 150')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('730')
    setSaR4p('35')

// 3040


    //Su R1 
    setPankakesButter('.3 ounce / 10')
    setPankakesDark('2 square / 20')
    setPankakesFarine('4.5 ounce / 130')
    setPankakesEggs('2')
    setPankakesMapple('2 tbsp / 20')
    setPankakesMilk('11.5 fl oz / 350')
    setPankakesOats('6 ounce / 170')
    
    
    setSuR1('80')
    setSuR1p('27')
    setSuR3('820')
    setSuR3p('28')
    

    // Su R2
    setSundayCheese('1 ounce / 30')
    setSundayRmeat('3.5 ounce / 100')
    setSundaySweetP('3.5 ounce / 100')
    setSuR2('700')
    setSuR2p('38')
    

    // Su R4
    setSundayRiz('7 ounce / 200')
    setSundayEggs('2')
    setSundayPeanut('1 ounce / 30')
    setSundayVegeteble('3.5 ounce / 100')
    setSundayOil('1 tbsp of oil')
    setSuR4('750')
    setSuR4p('33')


    // 3050
}








if (paramsCal > 3100 && paramsCal <= 3200) {
  
    // Monday R1
    setMondayChevre('1 ounce / 30') 
    setMoR1('710')
    setMoR1p('37')
    setTuR1('710')
    setTuR1p('37')
    setBreakfastWraps('2 medium sized')
    setBreakfastOeufs('4')
    
    // Monday R2
    setMealPrep1Feta('1 ounce / 30') 
    setMealPrep1Nuts('1 ounce / 10')
    setMealPrep1Quinoa('6 ounce / 170')
    setMealPrep1Chiken('4.5 ounce / 125')
    
    setMoR2('960')
    setMoR2p('43')
    setTueR2('960')
    setTueR2p('43')
    setWeR2('960')
    setWeR2p('43')
    setTuR2('960')
    setTuR2p('43')

    //Monday R3
    setShakeurAvoine('1 ounce / 30g')
    setShakeurBDC('1 big tbsp / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 sqare')
    setShakeurGlace('2.5 ounce / 75g')
    setShakeurLait('7 fl-oz / 200')

    setMoR3('740')
    setMoR3p('16')
    setTueR3('740')
    setTueR3p('16')
    setWeR3('740')
    setWeR3p('16')
    setTuR3('740')
    setTuR3p('16')
    setFiR3('740')
    setFiR3p('16')        
    
    
    //Monday R4
    setMondayPesto('1.3 ounce / 40')
    setMondayPoid('3 ounce / 90')
    setMondayRiz('7 ounce / 200g')
    setMondayTofu('3.5 ounce / 100')

    setMoR4('720')
    setMoR4p('39')

// 3050


    //Tuesday R1
    setTuesdayBreakfastBDC('1 ounce / 30')

    setTuR1('710')
    setTuR1p('39')
    // Tuesday R3
    setRedFruits('1-ounce / 30')
    
    // tuesday R4
    setTuesdaySardines('3.5 ounce / 100')
    setTuesdayWrap('2')
    setTuesdayYaourt('3.5 ounce / 100')
    setMayo('15g of mayonnaise')

    setTuR4('750')
    setTuR4p('40')

    // 3090
    

    //We R1
    setWednesdayChevre('0.8 ounce / 20')
    setWednesdayNoix('0.5 once / 10g ')
    setWednesdayPesto('1 tbsp / 28')

    setWeR1('710')
    setWeR1p('37')

    setFiR1('710')
    setFiR1p('37')


    //WE R4
    setWednesdayCreme('2 ounce / 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('5.5 ounce / 150')
    setWednesdayWrap('2')
    setWeR4('740')
    setWeR4p('34')
    

// 3080

    //Tu R4
    setThursdayChevre('1 ounce / 30')
    setThursdayRiz('7 oucne / 200')
    setThursdayLentille('2 ounce / 60')
    setThursdayHuile('1')
    setThursdaySauce('4 tbsp')
    setThursdayFish('3.5 ounce / 100')

    setTuR4('740')
    setTuR4p('38')

//3080

// Fi R2

    setMealPrep3Fish('3.5 ounce / 100')
    setMealPrep3Cheese('.8 ounce / 20')
    setFiR2p('32')
    setFiR2('960')






    //FI R4
    setFridayBeef('4.5 ounce / 125')
    setFridayCheese('1 ounce / 30')
    setFridayWrap('2')
    
    setFiR4('760')
    setFiR4p('46')

    // 3070

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('3')
    setSaturdayYaourt('3.5 ounce / 100')

    setSaR1('690')
    setSaR1p('24')

    //Sa R2
    setSaturdayRmeat('3.5 oz / 100')
    setSaturdayPasta('7 ounce / 200')
    setSaturdayPesto('1 tbsp')
    setSaturdayOil('1 tbsp')

    setSaR2('810')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 square')
    setSaturdayPb('1 tbsp / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('5.5 ounce / 150')
    setSaturdayBeans('2 ounce / 60g')
    setSaturdayCashew('1/2 ounce / 15g ')

    setSaR4('730')
    setSaR4p('35')

// 3040


    //Su R1 
    setPankakesButter('.3 ounce / 10')
    setPankakesDark('2 square / 20')
    setPankakesFarine('4.5 ounce / 130')
    setPankakesEggs('2')
    setPankakesMapple('2 tbsp / 20')
    setPankakesMilk('11.5 fl oz / 350')
    setPankakesOats('6 ounce / 170')
    
    
    setSuR1('80')
    setSuR1p('27')
    setSuR3('820')
    setSuR3p('28')
    

    // Su R2
    setSundayCheese('1 ounce / 30')
    setSundayRmeat('3.5 ounce / 150')
    setSundaySweetP('3.5 ounce / 100')
    setSuR2('820')
    setSuR2p('49')
    

    // Su R4
    setSundayRiz('7 ounce / 200')
    setSundayEggs('2')
    setSundayPeanut('1 ounce / 30')
    setSundayVegeteble('3.5 ounce / 100')
    setSundayOil('1 tbsp of oil')
    setSuR4('750')
    setSuR4p('33')


    // 3050
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
            Your Personalized <HighlightedText>Scan Result</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: ImageCal,
            title: `${maintient} calories `,
            description: "Your daily caloric needs",            
            url: ""
          },
          {
            imageSrc: ImageScan,
            title: `${Math.round(prots)}g`,
            description: "Your daily protein needs. Between 1.5 et 2 times your weight (kg)",
            url: ""
          },
          {
            imageSrc: ImageProtein,
            title: `${bodyfat}%`,
            description: "Your bodyfat estimation (US navy formula)",
            url: ""
          },
          {
            imageSrc: ImageMuscle,
            title: `${calories} calories`,
            description: `Your daily caloric needs to bulk at +${objectifVitesse}cal/day`,
            url: ""
          },
          {
            imageSrc: ImageTime,
            title: `${objectifTemps} weeks`,
            description: `Required time to achieve your bulking goal`,
            url: ""
          },
          
        ]}
        />
      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Bulking at <HighlightedText>{calories} calories</HighlightedText>
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
        content7: `${mealPrep3Cheese}g cheese`,
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
        content3: `${saturdayToast} slice whole wheat bread`,
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
        content5: `${sundayOil}`,
        content6: `some soy sauce`,

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
  