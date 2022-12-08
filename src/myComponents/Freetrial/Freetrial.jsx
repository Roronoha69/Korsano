import React from 'react'
import './Freetrial.scss'
import {useState} from 'react'
import Footer from "components/footers/MiniCenteredFooter.js";
import Feature from "components/features/TwoColSingleFeatureWithStats3";
import Header from "components/headers/light.js";
import styled from "styled-components";
//import Header from "./header2";
import gratuit from '../../images/korsanoblack.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import tw from "twin.macro";

import TabGrid from "components/cards/TabCardGrid.js";
import Features from "components/features/ThreeColSimple.js";
import shopIconImageSrc from "images/shop-icon.svg";
import chefIconImageSrc from "images/chef-icon.svg";

import ImageProtein from "images/icons8-heart-with-pulse-64.png";
import ImageMuscle from "images/icons8-account-64.png";
import ImageCal from "images/icons8-fire-64.png";
import ImageTime from "images/icons8-calendar-642.png";
import ImageScan from "images/icons8-steak-64.png";

import Back from "images/icons8-undo-64.png";

import newLogo from "images/logo.png"


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
//import {getAuth} from "firebase/auth";

import { useAuth0 } from '@auth0/auth0-react';
import Testimonial from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview.js'


{/* <p>{taille}</p>
<p>{poid}</p>
<p>{age}</p>

<p>{13.707*poid + 4.923*taille - 6.673*age + 77.607}</p>

<p>{nap[actv+work]*(13.707*poid + 4.923*taille - 6.673*age + 77.607)}</p> 
<p>{work}</p>
<p>{mb}</p>
<p>{bej} </p> */}



function Freetrial() {


  const { user, isLoading } = useAuth0();
  const [stateEmail, setEmail] = useState('')
  const [nickname, setNickname] = useState('')
  const [stringFat, setStringFat] = useState('')
  const [stringCal, setStringCal] = useState('')
  const [objectifKilos, setObjectifKilos] = useState()
  const [objectifTemps, setObjectifTemps] = useState()
  const [objectifVitesse, setObjectifVitesse] = useState()
  const [firstName, setFirstName] = useState('')


  const [calories, setCalories] = useState()
  const [prots, setProts] = useState(120)


//   const test = () =>{
//   if (user) {
  
//     setNickname(user.nickname)
//     setEmail(user.email)
//   }
// }


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
      //const auth = getAuth(app);
      




  const Incline = styled.div`
  --tw-translate-x: 0;
    --tw-translate-y: 0;
    --tw-rotate: 0;
    --tw-skew-x: -12deg;
    --tw-skew-y: 0;
    --tw-scale-x: 1;
    --tw-scale-y: 1;
    transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    margin-right: 20px;
  `;

  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  const [n, setNumber] = useState(1)
  const [quizStart, setQuizStarted] = useState(true);
  
  const [goal, setGoal] = useState()
  const [goal2, setGoal2] = useState()
  const [work, setWork] = useState()
  const [actv, setActv] = useState()
  const [gender, setGender] = useState()
  const [taille, setTaille] = useState()
  const [age, setAge] = useState()
  const [poid, setPoid] = useState()
  const [tdt,setTdt] =useState()
  const [tdc,setTdc] =useState()
  const [hanche,setHanche] =useState()

  const [mb, setMb] =useState()
  const [bej, setBej] =useState()
  const [bodyfat, setbodyfat] =useState('/')
  const [fixGaol2, setFixGoal2] =useState()
  const [,] =useState('')
  const [,] =useState()
  const [,] =useState()
  const [,] =useState()
  const [fixGoal, setFixGoal] =useState()

// Breakfast
const [eggs, setEggs] =useState('3')
const [toast, setToast] = useState('')
const [goat, setGoat] = useState('')
const [butter, setButter] =useState('')


//Lunch
const [olive, setOlive] = useState('')
const [ tortilla, setTortilla ] = useState('2')
const [ beef, setBeef ] = useState('')
const [ cheddar, setCheddar ] = useState('')
const [ pesto, setPesto ] = useState('')
const [ redB, setRedB ] = useState('')

// Snack
const [ milk, setMilk ] = useState()
const [ pb, setPb ] = useState()
const [ darkC, setDarkC ] = useState()
const [ iceCream, setIceCream ] = useState()
const [ banana, setBanana ] = useState()
const [ redFruits, setRedFruits ] = useState('1 ounce / 30')
const [oats, setOats] = useState('')

//Dinner
const [ pasta, setPasta ] = useState()
const [ soy, setSoy ] = useState()
const [ peanut, setPeanut ] = useState()
const [ vegetalSauce, setVegetalSauce ] = useState()
const [beans, setBeans] = useState()

const [trialR1, setR1] = useState('')
const [trialR1p, setR1p] = useState('')

const [trialR2, setR2] = useState('')
const [trialR2p, setR2p] = useState('')

const [trialR3, setR3] = useState('')
const [trialR3p, setR3p] = useState('')

const [trialR4, setR4] = useState('')
const [trialR4p, setR4p] = useState('')


function TrialProgram (paramsCal) {
    
  if (paramsCal > 2400 && paramsCal <= 2500) {
        
    setToast('2')
    setGoat('1 ounce / 30')
    setButter('.3 ounce / 10g')
    setR1('570')
    setR1p('32')


    setOlive('1 Tbsp')
    setBeef('3.5 ounce / 100')
    setCheddar('1 ounce / 30')
    setPesto('1 ounce / 30')
    setRedB('2 ounce / 50')
    
    setR2('760')
    setR2p('40')

    setMilk('8.5 fl oz / 250')
    setPb('1 ounce / 30g')
    setDarkC('1 squarre / 10')
    setIceCream('2 ounce / 50')
    setBanana('1')
    setOats('')

    setR3('590')
    setR3p('27')

    setPasta('6 ounce / 170')
    setSoy('4 ounce / 100')
    setPeanut('.7 ounce / 20')
    setVegetalSauce('3.5 fl oz / 100')
    
    
    setR4('620')
    setR4p('24')
}


  if (paramsCal > 2500 && paramsCal <= 2600) {
        
        setToast('2')
        setGoat('1 ounce / 30')
        setButter('.3 ounce / 10g')
        setR1('570')
        setR1p('32')


        setOlive('1 Tbsp')
        setBeef('3.5 ounce / 100')
        setCheddar('1 ounce / 30')
        setPesto('1 ounce / 30')
        setRedB('2 ounce / 50')
        
        setR2('760')
        setR2p('640')

        setMilk('8.5 fl oz / 250')
        setPb('1 ounce / 30g')
        setDarkC('2 squarre / 20')
        setIceCream('2 ounce / 50')
        setBanana('1')
        setOats('')

        setR3('640')
        setR3p('27')

        setPasta('6 ounce / 170')
        setSoy('4 ounce / 125')
        setPeanut('1 ounce / 30')
        setVegetalSauce('3.5 fl oz / 100')

        setR4('670')
        setR4p('27')

        //2640
    }



  if (paramsCal > 2600 && paramsCal <= 2700) {
        
    setToast('2')
    setGoat('1 ounce / 30')
    setButter('.6 ounce / 20')

    setR1('620')
    setR1p('33')


    setOlive('1 Tbsp')
    setBeef('3.5 ounce / 100')
    setCheddar('1 ounce / 30')
    setPesto('1 ounce / 30')
    setRedB('2 ounce / 50')
    
    setR2('760')
    setR2p('40')

    setMilk('8.5 fl oz / 250')
    setPb('1 ounce / 30g')
    setDarkC('2 squarre / 20')
    setIceCream('2 ounce / 50')
    setBanana('1')
    setOats('.7 ounce / 20')

    setR3('700')
    setR3p('15')

    setPasta('6 ounce / 170')
    setSoy('4 ounce / 125')
    setPeanut('1 ounce / 30')
    setVegetalSauce('3.5 fl oz / 100')

    setR4('680')
    setR4p('27')


    //2760
}

if (paramsCal > 2700 && paramsCal <= 2800) {
        
  setToast('2')
  setGoat('1 ounce / 30')
  setButter('.6 ounce / 20')

  setR1('620')
  setR1p('33')


  setOlive('1 Tbsp')
  setBeef('3.5 ounce / 100')
  setCheddar('1.3 ounce / 40')
  setPesto('1 ounce / 30')
  setRedB('2 ounce / 50')
  
  setR2('790')
  setR2p('43')

  setMilk('8.5 fl oz / 250')
  setPb('1 ounce / 30g')
  setDarkC('2 squarre / 20')
  setIceCream('2 ounce / 50')
  setBanana('')
  setOats('.7 ounce / 20')

  setR3('700')
  setR3p('15')

  setPasta('6 ounce / 170')
  setSoy('4 ounce / 125')
  setPeanut('1 ounce / 30')
  setVegetalSauce('3.5 fl oz / 100')

  setR4('680')
  setR4p('27')


  //2770
}


if (paramsCal > 2800 && paramsCal <= 2900) {
        
  setToast('2')
  setGoat('1 ounce / 30')
  setButter('.6 ounce / 20')

  setR1('620')
  setR1p('33')


  setOlive('1 Tbsp')
  setBeef('3.5 ounce / 100')
  setCheddar('1.3 ounce / 40')
  setPesto('1 ounce / 30')
  setRedB('2 ounce / 50')
  
  setR2('790')
  setR2p('43')

  setMilk('8.5 fl oz / 250')
  setPb('1 ounce / 30g')
  setDarkC('2 squarre / 20')
  setIceCream('2 ounce / 50')
  setBanana('2')
  setOats('.7 ounce / 20')

  setR3('760')
  setR3p('15')

  setPasta('6 ounce / 170')
  setSoy('4 ounce / 125')
  setPeanut('1 ounce / 30')
  setVegetalSauce('3.5 fl oz / 100')

  setR4('680')
  setR4p('27')


  //2850
}


if (paramsCal > 2900 && paramsCal <= 3000) {
        
  setToast('2')
  setGoat('1 ounce / 30')
  setButter('.6 ounce / 20')

  setR1('620')
  setR1p('33')


  setOlive('1 Tbsp')
  setBeef('3.5 ounce / 100')
  setCheddar('1.3 ounce / 40')
  setPesto('1.3 ounce / 30')
  setRedB('3 ounce / 90')
  
  setR2('820')
  setR2p('40')

  setMilk('8.5 fl oz / 250')
  setPb('1 ounce / 30g')
  setDarkC('2 squarre / 20')
  setIceCream('2 ounce / 50')
  setBanana('2')
  setOats('1 ounce / 30')

  setR3('800')
  setR3p('16')

  setPasta('6 ounce / 170')
  setSoy('4 ounce / 125')
  setPeanut('1 ounce / 30')
  setVegetalSauce('3.5 fl oz / 100')

  setR4('720')
  setR4p('27')


  //2950
}


if (paramsCal > 3000 && paramsCal <= 3100) {
  
  

  setToast('2')
  setGoat('1 ounce / 30')
  setButter('.6 ounce / 20')

  setR1('620')
  setR1p('33')


  setOlive('1 Tbsp')
  setBeef('4.5 ounce / 125')
  setCheddar('1.3 ounce / 40')
  setPesto('1.3 ounce / 40')
  setRedB('3 ounce / 90')
  
  setR2('860')
  setR2p('50')

  setMilk('8.5 fl oz / 250')
  setPb('1 ounce / 30g')
  setDarkC('2 squarre / 20')
  setIceCream('2 ounce / 50')
  setBanana('2')
  setOats('1.2 ounce / 40')

  setR3('830')
  setR3p('19')

  setPasta('8 ounce / 230')
  setSoy('4 ounce / 125')
  setPeanut('1 ounce / 30')
  setVegetalSauce('3.5 fl oz / 100')

  setR4('750')
  setR4p('32')


  //3060
}


if (paramsCal > 3100 && paramsCal <= 3200) {
    setEggs('4')  
  setToast('3')
  setGoat('1 ounce / 30')
  setButter('.6 ounce / 20')

  setR1('790')
  setR1p('42')


  setOlive('1 Tbsp')
  setBeef('4.5 ounce / 125')
  setCheddar('1.3 ounce / 40')
  setPesto('1.3 ounce / 40')
  setRedB('3 ounce / 90')
  
  setR2('860')
  setR2p('50')

  setMilk('8.5 fl oz / 250')
  setPb('1 ounce / 30g')
  setDarkC('2 squarre / 20')
  setIceCream('2 ounce / 50')
  setBanana('2')
  setOats('1.2 ounce / 40')

  setR3('830')
  setR3p('19')

  setPasta('8 ounce / 230')
  setSoy('4 ounce / 125')
  setPeanut('1 ounce / 30')
  setVegetalSauce('3.5 fl oz / 100')

  setR4('750')
  setR4p('32')


  //3060
}




}


  const Exnap = [0, 0, 1.375, 1.4675, 1.56, 1.6, 1.64, 1.73, 1.82]
  const nap = [0, 0, 1.2, 1.287, 1.375, 1.465, 1.55, 1.64, 1.725]

  function hundleStart() {
    setQuizStarted(true)
    setNumber(n+1)
  }


  

  function hundleQuizz(x){
  

  
  if (x == 11) {
    setWork(1)
  }
  if (x == 12) {
    setWork(2)
  }
  if (x == 13) {
    setWork(3)
  }
  if (x == 14) {
    setWork(4)
  }
  if (x == 15) {
    setActv(1)
  }
  if (x == 16) {
    setActv(2)
  }
  if (x == 17) {
    setActv(3)
  }
  if (x == 18) {
    setActv(4)
  }
  if (x == 19) {
    setGender('homme')
  }
  if (x == 20) {
    setGender('femme')
  }
  



  setNumber(n+1)
  }


  function hundleresult3() {
    
   
      setNumber(n+2)
      if (fixGoal==true){
        setCalories(bej-200)
      }
  
      if (fixGoal==false){
        setCalories(bej+200)
      }

    
  }


  function handleResult() {
    setNumber(n+1)

    if (gender == 'femme'){
      setMb(Math.round  ((9.740*poid + 172.9*taille - 4.7373*age + 667.051)/10)  *10)

      setBej(Math.round((nap[actv+work]*(9.740*poid + 1.729*taille - 4.7373*age + 667.051))/10)*10-100)
    }
    if (gender == 'homme'){
      setMb(Math.round((13.707*poid + 4.923*taille - 6.673*age + 77.607)/10)*10)
      setBej(Math.round((nap[actv+work]*(13.707*poid + 4.923*taille - 6.673*age + 77.607))/10)*10)

    }   
    
    setProts(poid*1.7)
    

  }

  function handleResult2(params) {
    setNumber(n+1)
    if (gender == 'femme'){
    setbodyfat(Math.round(((495/((1.29579 - 0.35004*Math.log10(tdt+hanche-tdc)) + 0.22100*Math.log10(taille)))-450)*100)/100)
    }
    if (gender == 'homme'){
    setbodyfat(Math.round(((495/((1.0324 - 0.19077*Math.log10(tdt-tdc) ) + 0.15456*Math.log10(taille)))-450)*100)/100)
    }
    if (params == 'X'){
      setbodyfat('X')
      }

    setCalories(bej+objectifVitesse)
    

      handleSubmit()

      TrialProgram(bej+objectifVitesse)
      setTimeout(() => {
        setNumber(11)
      }, 5100);
  } 



  function temps(params) {
    setNumber(n+1)
    setObjectifTemps(Math.round(objectifKilos/params))
    console.log(params);
    setObjectifVitesse(params*1000)
    
  }

  const handleSubmit = async(e) => {
    //e.preventdefault();
  

    console.log('########');
    console.log(stateEmail);
    console.log('########');
    
    await addDoc(collection(db, `emails`, 'bddEmailEng', 'BddEmailEnglish'), {
      stateEmail,
      firstName
    })
  }



// margin logo
// reduire la back btn


  return (
    <div className='free'>
      
<HeaderStyle>
    <Header />
</HeaderStyle>




<div>



  {/* <div className={`test ${n < 10? '':'invisible'}`}> */}
  <div className={`test ${n < 11? '':'invisible'}`}>
  
  <div className={`back-btn ${n == 1 || n ==10? 'invisible':''}`} onClick={()=> setNumber(n-1)}>
  <img src={Back} alt="" />
  </div>

    <div className={`quiz ${quizStart? '':'invisible'}`}>

      <div className={`questions ${n==1? '':'invisible'}`}>
        <h1>Are you?</h1>
      <button onClick={()=> hundleQuizz(19)}>Men</button>
      <button onClick={()=> hundleQuizz(20)}>Women</button>
      </div>

      <div className={`questions ${n==2? '':'invisible'}`}>
      <h1>How far do you you want to bulk? ( in kg )</h1>
      {/* <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button> 
        
      */}
      <form action="">
  <input type="number" placeholder='Kg' max="10" min="1"onChange={e => setObjectifKilos(e.target.value)}/>
    
        </form>
          <p onClick={() => setNumber(n+1)}>
              Next
            </p>
      
      {/* <button onClick={()=> hundleQuizz(3)}>Sèche musculaire</button> */}
      </div>

      <div className={`questions ${n==3? '':'invisible'}`}>
      <h1>How fast do you want to go? </h1>
      <button onClick={()=> temps(0.3)}>+300 cal/day</button>
      <button onClick={()=> temps(0.4)}>+400 cal/day</button>
      <button onClick={()=> temps(0.5)}>+500 cal/day</button>

      
      </div>
      
      <div className={`questions ${n==4? '':'invisible'}`}>
      <h1>What is your first name? </h1>
      {/* <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button> */}
      <input type="text" placeholder='Jojo' onChange={e => setFirstName(e.target.value)}/>
      <p onClick={() => setNumber(n+1)}>
              Next
            </p>
      
      
      {/* <button onClick={()=> hundleQuizz(3)}>Sèche musculaire</button> */}
      </div>
      


    


      <div className={`questions ${n==5? '':'invisible'}`}>
        <h1>How much do you train per week ?</h1>
      <button onClick={()=> hundleQuizz(15)}>1</button>
      <button onClick={()=> hundleQuizz(16)}>2 to 3</button>
      <button onClick={()=> hundleQuizz(17)}>4 to 5</button>
      <button onClick={()=> hundleQuizz(18)}>6 & more</button>
      </div>

      <div className={`questions ${n==6? '':'invisible'}`}>
      <h1>How intense is your work?</h1>
      <button onClick={()=> hundleQuizz(11)}>Sitting most of the time</button>
      <button onClick={()=> hundleQuizz(12)}>Slightly active</button>
      <button onClick={()=> hundleQuizz(13)}>Lot of walking ( 12k step & more )</button>
      <button onClick={()=> hundleQuizz(14)}>Heavy liftings or intense works</button>
      </div>

      <div className={`questions ${n==7? '':'invisible'}`}>
        <h1>Let's calcul your calories needs {firstName}</h1>
            <form action="">
              <input type="number" placeholder='Height (cm)' onChange={e => setTaille(e.target.value)}/>
              <input type="number" placeholder='Weight (kg)' onChange={e => setPoid(e.target.value)}/>
              <input type="number" placeholder='Age (year)' onChange={e => setAge(e.target.value)}/>
            </form>
            <p onClick={()=> handleResult() }>
              Next
            </p>
      </div>

      <div className={`questions ${n==8? '':'invisible'}`}>
      <h1>Enter your email</h1>
      <input type="text" placeholder='exemple@gmail.com' onChange={e => setEmail(e.target.value)}/>
      <p onClick={()=> setNumber(n+1) }>
              Next
        </p>

      </div>

      

      <div className={`questions ${n==9? '':'invisible'}`}>
        <h1>Bodyfat estimation (US NAVY method).</h1>
      <form action="">
        <input type="number" placeholder="Waist size cm (leave empty if you don't know)" onChange={e => setTdt(e.target.value)}/>
        <input type="number" placeholder="Neck size cm (leave empty if you don't know)" onChange={e => setTdc(e.target.value)}/>
        <input className={gender=='homme'?'invisible':''} type="number" placeholder='Tour de hanche' onChange={e => setHanche(e.target.value)}/>
      </form>
      <div className='black-btn'>
      
      </div>
      
      <p onClick={()=> handleResult2() }>
        Résults
      </p>
      </div>


      <div  className={n==10? '' : 'invisible' }>
      
      
      <div className="all-effect">
        {/* <h1>NO TIME TO WASTE</h1> */}
        <img src={newLogo} alt="" />
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

      


</div>
</div>


{/* <div className={n == 9? '':'invisible'}>
<Testimonial 
  heading=''
  description=''

/>
</div> */}

<div className={n==11? '':'invisible'}>
<Features
        heading={
          <>
            Your personalized <HighlightedText>Scan Results</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: ImageCal,
            title: `${bej} calories `,
            description: "Your daily caloric needs",
            url: ""
          },
          {
            imageSrc: ImageScan,
            //title: `${Math.round(prots)}g`,
            title: `between ${Math.round(poid)*1.5}g & ${Math.round(poid)*2}g`,
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
            title: calories,
            description: `Your daily caloric needs to bulk at +${objectifVitesse}cal/day`,
            url: ""
          },
          {
            imageSrc: ImageTime,
            title: `${objectifTemps} weeks`,
            description: `Required time to take ${objectifKilos}kg of lean muscle`,
            url: ""
          },        
        ]}
        />
      

      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Bulking at <Incline></Incline><HighlightedText>{calories} calories</HighlightedText><Incline/>
          </>
        }

        
  tabs ={ {
    Trial: [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Scrambled eggs",
        content: `${eggs} Oeufs`,
        content2: `2 slices of bread with butter`,
        content3: "Tomato",
        content4: `${goat}g goat cheese`,
        content5: "",

        price: `${trialR1} cal`,
        price2: `${trialR1p}g protein`,
        rating: "Breakfast",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Quesadillas",
        
        content1: "Spinach",
        content2: `${olive}ml olive oil`,
        content3: `${tortilla} tortilla`,
        content4: `${beef}g beef`,
        content5: `${cheddar}g cheddar`,
        content6: `${pesto}g pesto`,
        content7: `${redB}g red beans `,

        price: `${trialR2} cal`,
        price2: `${trialR2p}g protein`,
        rating: "Lunch",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Shaker",
        content: `${milk}ml milk`,
        content2: `${pb}g peanut butter`,
        content3: `${darkC}g dark chocolate`,
        content4: `${iceCream}g ice cream `,
        content5: `${banana} banana`,
        content6: `${redFruits}g red fruits`,

        price: `${trialR3} cal`,
        price2: `${trialR3p}g protein`,
        rating: "Snack",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Pasta with sauce",
        content: `${pasta}g raw pasta`,
        content2: "1 carrot ",
        content3: `${soy}g tofu`,
        content4: `${peanut}g cashew`,
        content5: `${vegetalSauce}g vegetal cream`,
        

        price: `${trialR4} cal`,
        price2: `${trialR4p}g protein`,
        rating: "Dinner",
        reviews: "Breakfast",
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      },
      
    ],
    'Bonus': [
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "La video",
        content: "La description",
        

        price: "Exemples",
        price2: "Blabla",
        rating: "Ta mere",
        
        url: "https://www.youtube.com/embed/_GuOjXYl5ew"
      }
      
    ],
    

  }}
      />

</div>


  </div>
<div className="footer-fix">
    <Footer /> 
    </div>
</div>
  )

}
const HeaderStyle = styled.div`
padding-top: 1rem;
`

export default Freetrial