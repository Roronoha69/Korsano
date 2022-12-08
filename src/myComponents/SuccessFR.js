import React from "react";
import { useState, useEffect } from "react";
import Stripe from 'stripe';
import { useAuth0 } from '@auth0/auth0-react';
import axios from "axios";
import './Success.scss';

import styled from 'styled-components';
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideoConnection.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";

import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
import Footer from "components/footers/MiniCenteredFooter2.js";

import Header from "components/headers/light.js";


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
  
  const HeaderStyle = styled.div`
  padding-top: 1.5rem;
  `



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

  const [plan, setPlan] = useState(false)

  const [coco, setCoco] = useState(false)


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
      setProts(doc.data().stringPoid)
      setMaintient(doc.data().stringBej)
      setObjectifTemps(doc.data().stringTime)
      setObjectifVitesse(doc.data().stringVitesse)
      setFireData(doc.id, " => ", doc.data())
      bugSolved(true)
      personalizedProgram(doc.data().stringCal)
      setFirstName(doc.data().firstName)

      

    });
      
    }
    
        useEffect(() => {
            console.log(user);
                    
            if (user && !isLoading) {
                          //setUserEmail(user.email)
                          //setNickname(user.nickname)
                          console.log('here');
                          console.log(user.email);
                          console.log(user.nickname);
              
                      
                        getData()
                      
                      setTimeout(() => {
                        setPlan(true)
                      }, 5000);
              
                      
            }

            

            setTimeout(() => {
              setCoco(true)
            }, 5800);
            
                        
          
        },[user])
        
    
    
    
  


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
const [mealPrep1Chiken, setMealPrep1Chiken] = useState('100')
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
const [oil, setOil] = useState('1 cs dhuile')


function personalizedProgram(paramsCal) {
  
  if (paramsCal > 2400 && paramsCal <= 2500) {
        
    // Monday R1
    setMondayChevre(' 25')
    setMoR1('610')
    setMoR1p('35')
    setTuR1('620')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta(' 20')
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa(' 140')
    setMoR2('730')
    setMoR2p('36')
    setTueR2('730')
    setTueR2p('36')
    setWeR2('730')
    setWeR2p('36')
    setTuR2('730')
    setTuR2p('36')

    //Monday R3
    setShakeurAvoine(' 30') 
    setShakeurBDC('30')
    setShakeurBanane('1')
    setShakeurChoco('1 carreaux')
    setShakeurGlace(' 50')
    setShakeurLait('200')

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
    setMondayPesto('1 cs / 30')
    setMondayPoid('75')
    setMondayRiz(' 170')
    setMondayTofu('100')

    setMoR4('650')
    setMoR4p('39')

    // 2490

    




    //Tuesday R1
    setTuesdayBreakfastBDC('25')

    setTuR1('590')
    setTuR1p('36')
    // Tuesday R3
    setRedFruits(' 30')
    
    // tuesday R4
    setTuesdaySardines(' 100')
    setTuesdayWrap('2')
    setTuesdayYaourt(' 100')

    setTuR4('660')
    setTuR4p('39')

    

    //We R1
    setWednesdayChevre(' 20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('4 cs')
    setWednesdayHuile('1')
    setWednesdayTofu('100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')



    //Tu R4
    setThursdayChevre(' 15g')
    setThursdayRiz('170')
    setThursdayLentille(' 60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('650')
    setTuR4p('33')


    // setFriday R2
    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2('770')
    setFiR2p('24')


    //FI R4
    setFridayBeef('100')
    setFridayCheese('20')
    setFridayWrap('1')
    
    setFiR4('510')
    setFiR4p('34')


    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta('170')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 tsp')

    setSaR2('670')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('100')
    setSaturdayHam('3')
    setSaturdayDark('1 carreaux')
    setSaturdayPb('non nécessaire')

    setSaR3('555')
    setSaR3p('17')



    // Sa R4
    setSaturdayTofu('100')
    setSaturdayBeans(' 60g')
    setSaturdayCashew(' 15g ')

    setSaR4('640')
    setSaR4p('32')


    //Su R1 
    setPankakesButter('non nécessaire')
    setPankakesDark('non nécessaire')
    setPankakesFarine(' 120')
    setPankakesEggs('2')
    setPankakesMapple('1 cs')
    setPankakesMilk('300')
    setPankakesOats(' 150')
    
    setSuR1('650')
    setSuR1p('23')
    setSuR3('650')
    setSuR3p('23')
    
    // Su R2
    setSundayCheese('15')
    setSundayRmeat('100')
    setSundaySweetP('100g')
    setSuR2('650')
    setSuR2p('34')

    // Su R4
    setSundayRiz(' 145g')
    setSundayEggs('2')
    setSundayPeanut(' 15')
    setSundayVegeteble('max')
    setSuR4('540')
    setSuR4p('27')
    
}  













if (paramsCal > 2500 && paramsCal <= 2600) {
    // Monday R1
    setMondayChevre('25') // 
    setMoR1('610')
    setMoR1p('35')
    setTuR1('620')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa(' 140')
    setMoR2('730')
    setMoR2p('34')
    setTueR2('730')
    setTueR2p('34')
    setWeR2('730')
    setWeR2p('34')
    setTuR2('730')
    setTuR2p('34')

    //Monday R3
    setShakeurAvoine(' 30g') //+ 50 cal
    setShakeurBDC('1 cs / 30')
    setShakeurBanane('1')
    setShakeurChoco('1 carreaux')
    setShakeurGlace(' 50g')
    setShakeurLait('200')

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
    setMondayPesto('1 cs / 30')
    setMondayPoid('75')
    setMondayRiz(' 170')
    setMondayTofu('100')

    setMoR4('650')
    setMoR4p('39')

// 2540


    //Tuesday R1
    setTuesdayBreakfastBDC('25')

    setTuR1('590')
    setTuR1p('36')
    // Tuesday R3
    setRedFruits(' 30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')

    setTuR4('660')
    setTuR4p('39')

    // 2540
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme(' 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')



    //Tu R4
    setThursdayChevre('15g')
    setThursdayRiz('170')
    setThursdayLentille(' 60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('650')
    setTuR4p('33')

//2570

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2('790')
    setFiR2p('24')





    //FI R4
    setFridayBeef('100')
    setFridayCheese(' ')
    setFridayWrap('2 petits')
    
    setFiR4('620')
    setFiR4p('40')

    // 2570 

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta('170 ')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 cs')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('100')
    setSaturdayHam('3')
    setSaturdayDark('2 carreauxx')
    setSaturdayPb('non nécessaire')

    setSaR3('605')
    setSaR3p('17')



    // Sa R4
    setSaturdayTofu('100')
    setSaturdayBeans(' 60g')
    setSaturdayCashew(' 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2585


    //Su R1 
    setPankakesButter('non nécessaire')
    setPankakesDark('1 carreaux / 10')
    setPankakesFarine(' 120')
    setPankakesEggs('2')
    setPankakesMapple('1 cs')
    setPankakesMilk('300')
    setPankakesOats(' 150')
    
    setSuR1('700')
    setSuR1p('23')
    setSuR3('700')
    setSuR3p('23')
    
    // Su R2
    setSundayCheese(' 15')
    setSundayRmeat('100')
    setSundaySweetP('100g')
    setSuR2('650')
    setSuR2p('34')
    
    // Su R4
    setSundayRiz(' 145g')
    setSundayEggs('2')
    setSundayPeanut(' 15')
    setSundayVegeteble('max')
    setSuR4('540')
    setSuR4p('27')
    // 2590


}  












    if (paramsCal > 2600 && paramsCal <= 2700) {
    // Monday R1
    setMondayChevre(' 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa(' 170')
    setMoR2('770')
    setMoR2p('34')
    setTueR2('770')
    setTueR2p('34')
    setWeR2('770')
    setWeR2p('34')
    setTuR2('770')
    setTuR2p('34')

    //Monday R3
    setShakeurAvoine(' 30g')
    setShakeurBDC('1 cs / 30')
    setShakeurBanane('1')
    setShakeurChoco('1 carreaux')
    setShakeurGlace(' 50g')
    setShakeurLait('200')

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
    setMondayPesto('1 cs / 30')
    setMondayPoid(' 90')
    setMondayRiz(' 170g')
    setMondayTofu('100')

    setMoR4('650')
    setMoR4p('39')

// 2675


    //Tuesday R1
    setTuesdayBreakfastBDC('25')

    setTuR1('590')
    setTuR1p('36')
    // Tuesday R3
    setRedFruits(' 30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')

    setTuR4('660')
    setTuR4p('39')

    // 2650
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme(' 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')

// 2630

    //Tu R4
    setThursdayChevre('15g')
    setThursdayRiz('170')
    setThursdayLentille(' 60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('650')
    setTuR4p('33')

//2630

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2p('24')
    setFiR2('790')

    //2630




    //FI R4
    setFridayBeef('100')
    setFridayCheese(' ')
    setFridayWrap('2 petits')
    
    setFiR4('620')
    setFiR4p('40')

    // 2630

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta(' ')
    setSaturdayPesto('1 cs')
    setSaturdayOil('10ml / 1')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('150')
    setSaturdayHam('3')
    setSaturdayDark('2 carreaux')
    setSaturdayPb('1/2 cs')

    setSaR3('680')
    setSaR3p('17')



    // Sa R4
    setSaturdayTofu('100')
    setSaturdayBeans(' 60g')
    setSaturdayCashew(' 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2660


    //Su R1 
    setPankakesButter('non nécessaire')
    setPankakesDark('2 carreaux / 20')
    setPankakesFarine(' 120')
    setPankakesEggs('2')
    setPankakesMapple('1 cs')
    setPankakesMilk('300')
    setPankakesOats(' 150')
    
    setSuR1('750')
    setSuR1p('23')
    setSuR3('700')
    setSuR3p('23')
    

    // Su R2
    setSundayCheese(' 15')
    setSundayRmeat('100')
    setSundaySweetP('100g')
    setSuR2('650')
    setSuR2p('34')
    

    // Su R4
    setSundayRiz(' 145g')
    setSundayEggs('2')
    setSundayPeanut(' 15')
    setSundayVegeteble('max')
    setSuR4('540')
    setSuR4p('27')
    // 2640
}










if (paramsCal > 2700 && paramsCal <= 2800) {
    // Monday R1
    setMondayChevre(' 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa(' 170')
    setMoR2('770')
    setMoR2p('34')
    setTueR2('770')
    setTueR2p('34')
    setWeR2('770')
    setWeR2p('34')
    setTuR2('770')
    setTuR2p('34')

    //Monday R3
    setShakeurAvoine(' 30g')
    setShakeurBDC('1 grosse cs / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 carreaux')
    setShakeurGlace(' 50g')
    setShakeurLait('200')

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
    setMondayPesto('1 cs / 30')
    setMondayPoid(' 90')
    setMondayRiz(' 170g')
    setMondayTofu('100')

    setMoR4('650')
    setMoR4p('39')

// 2760


    //Tuesday R1
    setTuesdayBreakfastBDC(' 30')

    setTuR1('630')
    setTuR1p('37')
    // Tuesday R3
    setRedFruits(' 30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')

    setTuR4('660')
    setTuR4p('39')

    // 2770 
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme(' 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')

// 2750

    //Tu R4
    setThursdayChevre('15g')
    setThursdayRiz('170')
    setThursdayLentille(' 60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('650')
    setTuR4p('33')

//2750

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2p('24')
    setFiR2('790')






    //FI R4
    setFridayBeef('100')
    setFridayCheese(' ')
    setFridayWrap('2 petits')
    
    setFiR4('620')
    setFiR4p('40')

    // 2750

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta(' ')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 cs')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('1')
    setSaturdayMilk('150')
    setSaturdayHam('3')
    setSaturdayDark('2 carreaux')
    setSaturdayPb('1 cs / 30')

    setSaR3('750')
    setSaR3p('21')



    // Sa R4
    setSaturdayTofu('100')
    setSaturdayBeans(' 60g')
    setSaturdayCashew(' 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2740


     //Su R1 
    setPankakesButter('10')
    setPankakesDark('2 carreaux / 20')
    setPankakesFarine(' 120')
    setPankakesEggs('2')
    setPankakesMapple('2 cs / 20')
    setPankakesMilk('300')
    setPankakesOats(' 150')
    
    setSuR1('750')
    setSuR1p('25')
    setSuR3('750')
    setSuR3p('24')
    

    // Su R2
    setSundayCheese(' 15')
    setSundayRmeat('100')
    setSundaySweetP('100g')
    setSuR2('650')
    setSuR2p('34')
    

    // Su R4
    setSundayRiz(' 170')
    setSundayEggs('2')
    setSundayPeanut('. 20')
    setSundayVegeteble('100')
    setSuR4('590')
    setSuR4p('29')


    // 2740
}


if (paramsCal > 2800 && paramsCal <= 2900) {
    // Monday R1
    setMondayChevre(' 30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('20') 
    setMealPrep1Nuts(' 10')
    setMealPrep1Quinoa(' 170')
    
    setMoR2('890')
    setMoR2p('37')
    setTueR2('890')
    setTueR2p('37')
    setWeR2('890')
    setWeR2p('37')
    setTuR2('890')
    setTuR2p('37')

    //Monday R3
    setShakeurAvoine(' 30g')
    setShakeurBDC('1 grosse cs / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 carreaux')
    setShakeurGlace(' 50g')
    setShakeurLait('200')


    
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
    setMondayPesto('1 cs / 30')
    setMondayPoid(' 90')
    setMondayRiz(' 170g')
    setMondayTofu('100')

    setMoR4('650')
    setMoR4p('39')

// 2880


    //Tuesday R1
    setTuesdayBreakfastBDC(' 30')

    setTuR1('630')
    setTuR1p('37')
    // Tuesday R3
    setRedFruits(' 30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')

    setTuR4('660')
    setTuR4p('39')

    // 2890 
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme(' 60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('100')
    setWednesdayWrap('2')
    setWeR4('640')
    setWeR4p('28')

// 2870

    //Tu R4
    setThursdayChevre('15g')
    setThursdayRiz('170')
    setThursdayLentille(' 60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('650')
    setTuR4p('33')

//2870

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2p('29')
    setFiR2('910')






    //FI R4
    setFridayBeef('100')
    setFridayCheese(' ')
    setFridayWrap('2 petits')
    
    setFiR4('620')
    setFiR4p('40')

    // 2870

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta(' ')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 cs')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 carreaux')
    setSaturdayPb('1 cs / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('100')
    setSaturdayBeans(' 60g')
    setSaturdayCashew(' 15g ')

    setSaR4('640')
    setSaR4p('32')

// 2860


     //Su R1 
    setPankakesButter('10')
    setPankakesDark('2 carreaux / 20')
    setPankakesFarine(' 120')
    setPankakesEggs('2')
    setPankakesMapple('2 cs / 20')
    setPankakesMilk('300')
    setPankakesOats(' 150')
    
    setSuR1('750')
    setSuR1p('25')
    setSuR3('750')
    setSuR3p('24')
    

    // Su R2
    setSundayCheese('30')
    setSundayRmeat('100')
    setSundaySweetP('100')
    setSuR2('700')
    setSuR2p('38')
    

    // Su R4
    setSundayRiz(' 170')
    setSundayEggs('2')
    setSundayPeanut('30')
    setSundayVegeteble('100')
    setSuR4('650')
    setSuR4p('31')


    // 2850
}



if (paramsCal > 2900 && paramsCal <= 3000) {
    // Monday R1
    setMondayChevre('30') 
    setMoR1('630')
    setMoR1p('35')
    setTuR1('630')
    setTuR1p('35')
    
    // Monday R2
    setMealPrep1Feta('20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('170')
    
    setMoR2('890')
    setMoR2p('37')
    setTueR2('890')
    setTueR2p('37')
    setWeR2('890')
    setWeR2p('37')
    setTuR2('890')
    setTuR2p('37')

    //Monday R3
    setShakeurAvoine('30g')
    setShakeurBDC('1 grosse cs / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 carreaux')
    setShakeurGlace(' 50g')
    setShakeurLait('200')

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
    setMondayPesto('40')
    setMondayPoid('90')
    setMondayRiz('200g')
    setMondayTofu('100')

    setMoR4('720')
    setMoR4p('39')

// 2950


    //Tuesday R1
    setTuesdayBreakfastBDC('30')

    setTuR1('630')
    setTuR1p('37')
    // Tuesday R3
    setRedFruits('30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')
    setMayo('15g de mayonnaise')

    setTuR4('750')
    setTuR4p('40')

    // 2980
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('630')
    setWeR1p('35')

    setFiR1('630')
    setFiR1p('35')


    //WE R4
    setWednesdayCreme('60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('150')
    setWednesdayWrap('2')
    setWeR4('740')
    setWeR4p('34')
    

// 2960

    //Tu R4
    setThursdayChevre('30')
    setThursdayRiz('200')
    setThursdayLentille(' 60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('740')
    setTuR4p('38')

//2960

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2p('29')
    setFiR2('910')






    //FI R4
    setFridayBeef('100')
    setFridayCheese('30')
    setFridayWrap('2')
    
    setFiR4('710')
    setFiR4p('43')

    // 2960

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('2')
    setSaturdayYaourt('100')

    setSaR1('620')
    setSaR1p('21')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta('200')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 cs')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 carreaux')
    setSaturdayPb('1 cs / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('150')
    setSaturdayBeans('60g')
    setSaturdayCashew('15g ')

    setSaR4('730')
    setSaR4p('35')

// 2950


    //Su R1 
    setPankakesButter('10')
    setPankakesDark('2 carreaux / 20')
    setPankakesFarine('120')
    setPankakesEggs('2')
    setPankakesMapple('2 cs / 20')
    setPankakesMilk('300')
    setPankakesOats(' 150')
    
    setSuR1('750')
    setSuR1p('25')
    setSuR3('750')
    setSuR3p('24')
    

    // Su R2
    setSundayCheese('30')
    setSundayRmeat('100')
    setSundaySweetP('100')
    setSuR2('700')
    setSuR2p('38')
    

    // Su R4
    setSundayRiz(' 200')
    setSundayEggs('2')
    setSundayPeanut(' 30')
    setSundayVegeteble('100')
    setSundayOil("1 cs d'huile")
    setSuR4('750')
    setSuR4p('33')


    // 2950
}



if (paramsCal > 3000 && paramsCal <= 3100) {
    // Monday R1
    setMondayChevre(' 30') 
    setMoR1('710')
    setMoR1p('37')
    setTuR1('710')
    setTuR1p('37')
    setBreakfastWraps('2')
    
    // Monday R2
    setMealPrep1Feta('20') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('170')
    
    setMoR2('890')
    setMoR2p('37')
    setTueR2('890')
    setTueR2p('37')
    setWeR2('890')
    setWeR2p('37')
    setTuR2('890')
    setTuR2p('37')

    //Monday R3
    setShakeurAvoine(' 30g')
    setShakeurBDC('1 grosse cs / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 carreaux')
    setShakeurGlace('75g')
    setShakeurLait('200')

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
    setMondayPesto('40')
    setMondayPoid('90')
    setMondayRiz('200')
    setMondayTofu('100')

    setMoR4('720')
    setMoR4p('39')

// 3050


    //Tuesday R1
    setTuesdayBreakfastBDC('30')

    setTuR1('710')
    setTuR1p('39')
    // Tuesday R3
    setRedFruits('30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')
    setMayo('15g de mayonnaise')

    setTuR4('750')
    setTuR4p('40')

    // 3090
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('710')
    setWeR1p('37')

    setFiR1('710')
    setFiR1p('37')


    //WE R4
    setWednesdayCreme('60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('150')
    setWednesdayWrap('2')
    setWeR4('740')
    setWeR4p('34')
    

// 3080

    //Tu R4
    setThursdayChevre('30')
    setThursdayRiz('200')
    setThursdayLentille('60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('740')
    setTuR4p('38')

//3080

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2p('29')
    setFiR2('910')






    //FI R4
    setFridayBeef('100')
    setFridayCheese(' 30')
    setFridayWrap('2')
    
    setFiR4('710')
    setFiR4p('43')

    // 3070

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('3')
    setSaturdayYaourt('100')

    setSaR1('690')
    setSaR1p('24')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta('200')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 cs')

    setSaR2('720')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 carreaux')
    setSaturdayPb('1 cs / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('150')
    setSaturdayBeans('60g')
    setSaturdayCashew('15g ')

    setSaR4('730')
    setSaR4p('35')

// 3040


    //Su R1 
    setPankakesButter('10')
    setPankakesDark('2 carreaux / 20')
    setPankakesFarine('4. 130')
    setPankakesEggs('2')
    setPankakesMapple('2 cs / 20')
    setPankakesMilk('350')
    setPankakesOats(' 170')
    
    
    setSuR1('80')
    setSuR1p('27')
    setSuR3('820')
    setSuR3p('28')
    

    // Su R2
    setSundayCheese('30')
    setSundayRmeat('100')
    setSundaySweetP('100')
    setSuR2('700')
    setSuR2p('38')
    

    // Su R4
    setSundayRiz(' 200')
    setSundayEggs('2')
    setSundayPeanut(' 30')
    setSundayVegeteble('100')
    setSundayOil("1 cs d'huile")
    setSuR4('750')
    setSuR4p('33')


    // 3050
}








if (paramsCal > 3100 && paramsCal <= 3200) {
  
    // Monday R1
    setMondayChevre(' 30') 
    setMoR1('710')
    setMoR1p('37')
    setTuR1('710')
    setTuR1p('37')
    setBreakfastWraps('2')
    setBreakfastOeufs('4')
    
    // Monday R2
    setMealPrep1Feta('30') 
    setMealPrep1Nuts('10')
    setMealPrep1Quinoa('170')
    setMealPrep1Chiken('125')
    
    setMoR2('960')
    setMoR2p('43')
    setTueR2('960')
    setTueR2p('43')
    setWeR2('960')
    setWeR2p('43')
    setTuR2('960')
    setTuR2p('43')

    //Monday R3
    setShakeurAvoine('30g')
    setShakeurBDC('1 grosse cs / 30')
    setShakeurBanane('2')
    setShakeurChoco('2 carreaux')
    setShakeurGlace('75g')
    setShakeurLait('200')

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
    setMondayPesto('40')
    setMondayPoid('90')
    setMondayRiz('200g')
    setMondayTofu('100')

    setMoR4('720')
    setMoR4p('39')

// 3050


    //Tuesday R1
    setTuesdayBreakfastBDC('30')

    setTuR1('710')
    setTuR1p('39')
    // Tuesday R3
    setRedFruits('30')
    
    // tuesday R4
    setTuesdaySardines('100')
    setTuesdayWrap('2')
    setTuesdayYaourt('100')
    setMayo('15g de mayonnaise')

    setTuR4('750')
    setTuR4p('40')

    // 3090
    

    //We R1
    setWednesdayChevre('20')
    setWednesdayNoix(' 10g ')
    setWednesdayPesto('1 cs / 28')

    setWeR1('710')
    setWeR1p('37')

    setFiR1('710')
    setFiR1p('37')


    //WE R4
    setWednesdayCreme('60') // 
    setWednesdayHuile('1')
    setWednesdayTofu('150')
    setWednesdayWrap('2')
    setWeR4('740')
    setWeR4p('34')
    

// 3080

    //Tu R4
    setThursdayChevre('30')
    setThursdayRiz('200')
    setThursdayLentille('60')
    setThursdayHuile('1')
    setThursdaySauce('4 cs')
    setThursdayFish('100')

    setTuR4('740')
    setTuR4p('38')

//3080

// Fi R2

    setMealPrep3Fish('100')
    setMealPrep3Cheese('20')
    setFiR2p('32')
    setFiR2('960')






    //FI R4
    setFridayBeef('125')
    setFridayCheese('30')
    setFridayWrap('2')
    
    setFiR4('760')
    setFiR4p('46')

    // 3070

    
    //Sa R1
    setSaturdayEggs('2')
    setSaturdayToast('3')
    setSaturdayYaourt('100')

    setSaR1('690')
    setSaR1p('24')

    //Sa R2
    setSaturdayRmeat('100')
    setSaturdayPasta('200')
    setSaturdayPesto('1 cs')
    setSaturdayOil('1 cs')

    setSaR2('810')
    setSaR2p('34')


    // sa R3
    setSaturdaySnackEggs('2')
    setSaturdayMilk('200')
    setSaturdayHam('3')
    setSaturdayDark('2 carreaux')
    setSaturdayPb('1 cs / 30')

    setSaR3('870')
    setSaR3p('34')



    // Sa R4
    setSaturdayTofu('150')
    setSaturdayBeans('60g')
    setSaturdayCashew('15g ')

    setSaR4('730')
    setSaR4p('35')

// 3040


    //Su R1 
    setPankakesButter('10')
    setPankakesDark('2 carreaux / 20')
    setPankakesFarine('4. 130')
    setPankakesEggs('2')
    setPankakesMapple('2 cs / 20')
    setPankakesMilk('350')
    setPankakesOats(' 170')
    
    
    setSuR1('80')
    setSuR1p('27')
    setSuR3('820')
    setSuR3p('28')
    

    // Su R2
    setSundayCheese('30')
    setSundayRmeat('150')
    setSundaySweetP('100')
    setSuR2('820')
    setSuR2p('49')
    

    // Su R4
    setSundayRiz('200')
    setSundayEggs('2')
    setSundayPeanut('30')
    setSundayVegeteble('100')
    setSundayOil("1 cs d'huile")
    setSuR4('750')
    setSuR4p('33')


    // 3050
}

  

}


  return (


    <div> 
     <HeaderStyle>
    <Header />
</HeaderStyle>


      <div  className={plan || coco? 'invisible' : '' }>
      
      
      <div className="all-effect">
        <div className="body">

          {/* <button onClick={()=> getData()} >
          Acces data
        </button> */}

  <div id="wrapper">
  <div id="mouse"></div>
  <div className="loader">
  

  </div>
  <div className="loading-bar">
    <div className="progress-bar"></div>
  </div>
  <div className="status">
    <div className="state"></div>
    <div className="percentage"></div>
  </div>
</div>
</div>
</div>
        
        
      </div>


           <div className={!user && coco? '':'invisible'}>

        <Hero
        heading={<>TU DOIS TE <Incline><HighlightedText>CONNECTER</HighlightedText></Incline></>}
        description="Utile la meme adresse mail que celle utilisé lors du paiement stripe"
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Connexion"
        watchVideoButtonText="Meet The Chefs"
        
          
       
      />

          </div> 

      <div className={bug && plan?'' : 'invisible' }>
    <AnimationRevealPage>
        
<div className={calories? '' : 'invisible'}>
      <Hero
        heading={<>Tes résultats  <Incline><HighlightedText>Personalisé</HighlightedText></Incline></>}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Refaire le test"
        watchVideoButtonText="Meet The Chefs"
      />
    </div>

    <div className={calories? 'invisible' : ''}>
      <Hero
        heading={<>Faire le <Incline><HighlightedText>Test</HighlightedText></Incline></>}
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
            Tes résultats <HighlightedText>Personalisé</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: ImageCal,
            title: `${maintient} calories `,
            description: "Besoin calorique quotidient",          
            url: ""
          },
          {
            imageSrc: ImageScan,
            title: `Entre ${Math.round(prots)*1.5}g & ${Math.round(prots)*2}g`,
            description: "Tes besoin quotidient en proteine. Entre 1.5 et 2* le poid de corps",
            url: ""
          },
          {
            imageSrc: ImageProtein,
            title: `${bodyfat}%`,
            description: "Estimation de ton bodyfat (formule US Navy)",
            url: ""
          },
          {
            imageSrc: ImageMuscle,
            title: `${calories} calories`,
            description: `Tes besoin calorique pour une prise de masse à +${objectifVitesse}cal/j`,
            url: ""
          },
          {
            imageSrc: ImageTime,
            title: `${objectifTemps} semaines`,
            description: `Le temps requis pour ton objectif de prise de masse`,
            url: ""
          },
          
        ]}
        />
      
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Prise de masse à <HighlightedText>{calories} calories</HighlightedText>
          </>
        }

        
  tabs ={ {
    Monday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Wrap",
        content: `${breakfastOeufs} Oeufs`,
        content2: `${breakfastWrap} Tortillas`,
        content3: `${mondayChevre} Fromage`,
        content4: `${mondayBreakfastOil}cs d'huile`,
        content5: `Un peu de salade`,
        

        price: `${moR1} cal`,
        price2: `${moR1p}g de protéines`,
        rating: "Petit-Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avoca`,
        content2: `${mealPrep1Chiken}g poulet`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}cs d'huile`,
        content5: `${mealPrep1Nuts}g noix`,
        content6: `${mealPrep1Quinoa}g quinoa ou riz`,

        price: `${moR2} cal`,
        price2: `${moR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Snack",
        content: `${shakeurLait}ml lait`,
        content2: `${shakeurBanane} bananes`,
        content3: `${shakeurAvoine}g d'avoine`,
        content4: `${shakeurBDC}g beurre de cacahuète`,
        content5: `${shakeurGlace}g de glace`,
        content6: `${shakeurChoco}g chocolat noir`,

        price: `${moR3} cal`,
        price2: `${moR3p}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Riz Cantonnais rapide",
        content: `${mondayRiz}g riz`,
        content2: `${mondayEggs} Oeufs`, 
        content3: `${mondayTofu}g Tofu`,
        content4: `${mondayPoid}g petit poids`,
        content5: `${mondayPesto}g pesto`,

        price: `${moR4} cal`,
        price2: `${moR4p}g de protéines`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    tuesday: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Wrap",
        content: `${breakfastOeufs} Oeufs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${tuesdayBreakfastBDC}g beurre de cacahuète`,
       

        price: `${tueR1} cal`,
        price2: `${tueR1p}g de protéines`,
        rating: "Petit Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avoca`,
        content2: `${mealPrep1Chiken}g poulet`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}cs d'huile`,
        content5: `${mealPrep1Nuts}g noix`,
        content6: `${mealPrep1Quinoa}g quinoa ou riz`,

        price: `${tueR2} cal`,
        price2: `${tueR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Snack",
        content: `${shakeurLait}ml lait`,
        content2: `${shakeurBanane} bananes`,
        content3: `${shakeurAvoine}g d'avoine`,
        content4: `${shakeurBDC}g beurre de cacahuète`,
        content5: `${shakeurGlace}g de glace`,
        content7: `${redFruits}g fruits rouges`,
        content6: `${shakeurChoco}g chocolat noir`,

        price: `${tueR3} cal`,
        price2: `${tueR3p}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "fish wrap",
        content: `${tuesdayWrap} tortillas`,
        content2: `${tuesdaySardine}g sardines`,
        content3: `${tuesdayYaourt}g yaourt grec`,
        content4: `Quelques cornichons`,
        content5: 'Du jus de citron',
        

        price: `${tueR4} cal`,
        price2: `${tueR4p}g de protéines`,
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
        content: `${breakfastOeufs} Oeufs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${wednesdayChevre}g fromage`,
        content4: `${wednesdayNoix}g noix`,
        content5: `${wednesdayPesto}g pesto`,

        price: `${weR1} cal`,
        price2: `${weR1p}g de protéines`,
        rating: "Petit-Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avoca`,
        content2: `${mealPrep1Chiken}g poulet`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}cs d'huile`,
        content5: `${mealPrep1Nuts}g noix`,
        content6: `${mealPrep1Quinoa}g quinoa ou riz`,

        price: `${weR2} cal`,
        price2: `${weR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${shakeurLait}ml lait`,
        content2: `${shakeurBanane} bananes`,
        content3: `${shakeurAvoine}g d'avoine`,
        content4: `${shakeurBDC}g beurre de cacahuète`,
        content5: `${shakeurGlace}g de glace`,
        content6: `${shakeurChoco}g chocolat noir`,

        price: `${weR3} cal`,
        price2: `${weR3p}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Healthy Tacos",
        content: `${wednesdayWrap} tortillas`,
        content2: `${wednesdayTofu}g tofu`,
        content3: `${wednesdayHuile}cs d'huile`,
        content4: `${wednesdayCreme}g crème fraiche ou végétal`,
        content5: `1 Tomate`,
        content6: 'Environ 1/2 oignon',

        price: `${weR4} cal`,
        price2: `${weR4p}g de protéines`,
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
        content: `${breakfastOeufs} Oeufs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${mondayChevre} Fromage`,
        content4: `${mondayBreakfastOil}cs d'huile`,
        content5: `Un peu de salade`,
        

        price: `${tuR1} cal`,
        price2: `${tuR1p}g de protéines`,
        rating: "Petit-Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avoca`,
        content2: `${mealPrep1Chiken}g poulet`,
        content3: `${mealPrep1Feta}g feta`,
        content4: `${mealPrep1Huile}cs d'huile`,
        content5: `${mealPrep1Nuts}g noix`,
        content6: `${mealPrep1Quinoa}g quinoa ou riz`,

        price: `${tuR2} cal`,
        price2: `${tuR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${shakeurLait}ml lait`,
        content2: `${shakeurBanane} bananes`,
        content3: `${shakeurAvoine}g d'avoine`,
        content4: `${shakeurBDC}g beurre de cacahuète`,
        content5: `${shakeurGlace}g de glace`,
        content6: `${shakeurChoco}g chocolat noir`,
        content7: `${redFruits}g fruits rouges`,

        price: `${tuR3} cal`,
        price2: `${tuR3}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Fish & rice",
        content: `spinach`,
        content2: `${thurdayChevre}g fromage de chèvre`,
        content3: `${thurdayHuile}cs d'huile`,
        content4: `${thurdayRiz}g riz`,
        content5: `${thurdayFish}g salmon or sardines`,
        content6: `${thurdayLentille}g lentilles`,
        content7: `${thurdaySauce}g crème fraiche ou végétal`,

        price: `${tuR4} cal`,
        price2: `${tuR4p}g de protéines`,
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
        content: `${breakfastOeufs} Oeufs`,
        content2: `${breakfastWrap} tortilla`,
        content3: `${wednesdayChevre}g fromage`,
        content4: `${wednesdayNoix}g noix`,
        content5: `${wednesdayPesto}g pesto`,

        price: `${fiR1} cal`,
        price2: `${fiR1p}g de protéines`,
        rating: "Petit-Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Meal prep",
        content: `${mealPrep1Avoca}g avoca`,
        content2: `${mealPrep3Fish}g surimi ou sardines`,
        content3: `${mealPrep1Feta}g feta`,
        content7: `${mealPrep3Cheese}g fromage`,
        content4: `${mealPrep1Huile}cs d'huile`,
        content5: `${mealPrep1Nuts}g noix`,
        content6: `${mealPrep1Quinoa}g quinoa ou riz`,

        price: `${fiR2} cal`,
        price2: `${fiR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${shakeurLait}ml lait`,
        content2: `${shakeurBanane} bananes`,
        content3: `${shakeurAvoine}g d'avoine`,
        content4: `${shakeurBDC}g beurre de cacahuète`,
        content5: `${shakeurGlace}g de glace`,
        content6: `${shakeurChoco}g chocolat noir`,

        price: `${fiR3} cal`,
        price2: `${fiR3p}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Tacos",
        content: `${fridayWrap} tortilla`,
        content2: `${fridayBeef}g viande rouge`,
        content3: `${fridayCheese}g fromage`,
        content4: `1 tomate`,
        content5: 'Environ 1/2 oignon',
        

        price: `${fiR4} cal`,
        price2: `${fiR4p}g de protéines`,
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
        content: `${saturdayAvoca}g avoca`,
        content2: `${saturdayEggs} Oeufs`,
        content3: `${saturdayToast} tranches de pain complet`,
        content4: `${saturdayYaourt}g yaourt grec`,
        

        price: `${saR1} cal`,
        price2: `${saR1p}g de protéines`,
        rating: "Petit-Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Pesto pasta",
        content: `spinach`,
        content2: `${saturdayOil}cs d'huile`,
        content3: `${saturdayPasta}g pates`,
        content4: `${saturdayRmeat}g viande rouge`,
        content5: `${saturdayPesto}g pesto`,

        price: `${saR2} cal`,
        price2: `${saR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "French toast",
        content: `${saturdayHam} tranches de pain ou pain burger`,
        content2: `${saturdaySnackEggs} Oeufs`,
        content3: `${saturdayMilk}ml lait`,
        content4: `${saturdayPb}g beurre de cacahuète`,
        content5: `Des fruits rouges`,
        content6: `${saturdayDark}g chocolat noir`,

        price: `${saR3} cal`,
        price2: `${saR3p}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Creamy pasta",
        content: `${saturdayPasta}g pates`,
        content2: `${saturdayTofu}g tofu`,
        content3: `${saturdayBeans}g poid chiches`,
        content4: `${saturdayCashew}g cajou ou beurre de cajou`,
        content5: "100 ml Water",
        content6: 'Du jus de citron',

        price: `${saR4} cal`,
        price2: `${saR4p}g de protéines`,
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
        content: `${pankakesOats}g d'avoine`,
        content2: `${pankakesFarine}g farine`,
        content3: `${pankakesMilk}ml lait`,
        content4: `${pankakesEggs} Oeufs`,
        content5: `${pankakesDark}g chocolat noir`,

        price: `${suR1} cal`,
        price2: `${suR1p}g de protéines`,
        rating: "Petit-Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Burger",
        content: `1 burger buns`,
        content2: `${sundayRmeat}g viande rouge`,
        content3: `${sundayCheese}g fromage`,
        content4: `10g mayonnaise`,
        content5: `Salade, tomate, oignon`,
        content6: `${sundaySweetP}g patates douces`,


        price: `${suR2} cal`,
        price2: `${suR2p}g de protéines`,
        rating: "Déjeuner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Pankakes",
        content: `${pankakesOats}g d'avoine`,
        content2: `${pankakesFarine}g farines`,
        content3: `${pankakesMilk}ml lait`,
        content4: `${pankakesEggs} Oeufs`,
        content5: `${pankakesDark}g chocolat noir`,
        content6: `${pankakesButter}g de beurre`,
        content6: `${pankakesMapple}ml de sirop d'érable`,

        price: `${suR3} cal`,
        price2: `${suR3p}g de protéines`,
        rating: "Collation",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Fried rice",
        content: `${sundayEggs} Oeufs`,
        content2: `${sundayRiz}g riz`,
        content3: `${sundayVegeteble}g légumes verts`,
        content4: `${sundayPeanut}g cacahuète`,
        content5: `${sundayOil}`,
        content6: `Un peu de sauce soja`,

        price: `${suR4} cal`,
        price2: `${suR4p}g de protéines`,
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
  