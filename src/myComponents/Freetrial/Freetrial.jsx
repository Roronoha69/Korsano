import React from 'react'
import './Freetrial.scss'
import {useState} from 'react'
import Footer from "components/footers/MiniCenteredFooter2.js";
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
  const [,] =useState()
  const [,] =useState()
  const [,] =useState()
  const [,] =useState()
  const [fixGoal, setFixGoal] =useState()


// Breakfast
  const [eggs,setEgges] =useState(3)
  const [goat, setGoat] = useState(30)






//Lunch
const [olive, setOlive] = useState()
const [ tortilla, setTortilla ] = useState()
const [ beef, setBeef ] = useState()
const [ cheddar, setCheddar ] = useState()
const [ pesto, setPesto ] = useState()
const [ red, setRed ] = useState()

// Snack
const [ milk, setMilk ] = useState()
const [ pb, setPb ] = useState()
const [ darkC, setDarkC ] = useState()
const [ iceCream, seticeCream ] = useState()
const [ banana, setBanana ] = useState()
const [ redFruits, setRedFruits ] = useState()

//Dinner
const [ pasta, setPasta ] = useState()
const [ soy, setSoy ] = useState()
const [ peanut, setPeanut ] = useState()
const [ vegetalSauce, setVegetalSauce ] = useState()
const [beans, setBeans] = useState()
const [ , set ] = useState()



function TrialProgram (paramsCal) {
    
  if (paramsCal > 2400 && paramsCal <= 2500) {

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

  function handleResult2() {
    setNumber(n+1)
    if (gender == 'femme'){
    setbodyfat(Math.round(((495/((1.29579 - 0.35004*Math.log10(tdt+hanche-tdc)) + 0.22100*Math.log10(taille)))-450)*100)/100)
    }
    if (gender == 'homme'){
    setbodyfat(Math.round(((495/((1.0324 - 0.19077*Math.log10(tdt-tdc) ) + 0.15456*Math.log10(taille)))-450)*100)/100)
    }

    setCalories(bej+objectifVitesse)
    

      handleSubmit()

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

console.log(calories);


  return (
    <div className='free'>
      
<HeaderStyle>
   <Header />
</HeaderStyle>

<div>
  {/* <div className={`test ${n < 10? '':'invisible'}`}> */}
  <div className={`test ${n < 10? '':'invisible'}`}>


    <div className={`quiz ${quizStart? '':'invisible'}`}>

     <div className={`questions ${n==1? '':'invisible'}`}>
        <h1>Tu es ?</h1>
      <button onClick={()=> hundleQuizz(19)}>Un homme</button>
      <button onClick={()=> hundleQuizz(20)}>Une femme</button>
      </div>

      <div className={`questions ${n==2? '':'invisible'}`}>
      <h1>Combien de kilos veux-tu prendre ?</h1>
      {/* <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button> 
        
      */}
      <form action="">
 <input type="number" placeholder='Kg' max="8" min="1"onChange={e => setObjectifKilos(e.target.value)}/>
    
        </form>
          <p onClick={() => setNumber(n+1)}>
              Suivant
            </p>
      
      {/* <button onClick={()=> hundleQuizz(3)}>Sèche musculaire</button> */}
      </div>

      <div className={`questions ${n==3? '':'invisible'}`}>
      <h1>As quel vitesse tu veux faire ta prisse de masse ? (modifiable) </h1>
      <button onClick={()=> temps(0.3)}>+300 cal/j</button>
      <button onClick={()=> temps(0.4)}>+400 cal/j</button>
      <button onClick={()=> temps(0.5)}>+500 cal/j</button>

      
      </div>
      
      <div className={`questions ${n==4? '':'invisible'}`}>
      <h1>What is your first name? </h1>
      {/* <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button> */}
      <input type="text" placeholder='Jojo' onChange={e => setFirstName(e.target.value)}/>
      <p onClick={() => setNumber(n+1)}>
              Suivant
            </p>
      
      
      {/* <button onClick={()=> hundleQuizz(3)}>Sèche musculaire</button> */}
      </div>
      


    


      <div className={`questions ${n==5? '':'invisible'}`}>
        <h1>Quel est ton niveau d'activité physique ?</h1>
      <button onClick={()=> hundleQuizz(15)}>Le néant</button>
      <button onClick={()=> hundleQuizz(16)}>1 à 3 fois par semaine</button>
      <button onClick={()=> hundleQuizz(17)}>3 à 5 fois par semaine</button>
      <button onClick={()=> hundleQuizz(18)}>6+ par semaine</button>
      </div>

      <div className={`questions ${n==6? '':'invisible'}`}>
      <h1>Ton travail est plutot :</h1>
      <button onClick={()=> hundleQuizz(11)}>Physiquement calme</button>
      <button onClick={()=> hundleQuizz(12)}>Un peu actif</button>
      <button onClick={()=> hundleQuizz(13)}>Actif, je marche beaucoup</button>
      <button onClick={()=> hundleQuizz(14)}>Physique ou port de charges</button>
      </div>

      <div className={`questions ${n==7? '':'invisible'}`}>
        <h1>On vas calculer tes besoins en calories :</h1>
            <form action="">
              <input type="number" placeholder='Taille (cm)' onChange={e => setTaille(e.target.value)}/>
              <input type="number" placeholder='Poid (kg)' onChange={e => setPoid(e.target.value)}/>
              <input type="number" placeholder='Age (années)' onChange={e => setAge(e.target.value)}/>
            </form>
            <p onClick={()=> handleResult() }>
              Suivant
            </p>
      </div>

      <div className={`questions ${n==8? '':'invisible'}`}>
      <h1>Enter your email</h1>
      <input type="text" placeholder='exemple@gmail.com' onChange={e => setEmail(e.target.value)}/>
      <p onClick={()=> setNumber(n+1) }>
              Suivant
        </p>

      </div>

      

      <div className={`questions ${n==9? '':'invisible'}`}>
        <h1>Calcul du % de graisse selon la méthode de l'US NAVY.</h1>
      <form action="">
        <input type="number" placeholder='Tour de taille (nombril)' onChange={e => setTdt(e.target.value)}/>
        <input type="number" placeholder='Tour de cou (depuis la base)' onChange={e => setTdc(e.target.value)}/>
        <input className={gender=='homme'?'invisible':''} type="number" placeholder='Tour de hanche' onChange={e => setHanche(e.target.value)}/>
      </form>
      <p onClick={()=> handleResult2() }>
        Résultats
      </p>
      </div>

      


</div>
</div>


{/* <div className={n == 9? '':'invisible'}>
<Testimonial 
  heading=''
  description=''

/>
</div> */}

<div className={n==1? '':'invisible'}>
<Features
        heading={
          <>
            Analyse <HighlightedText>Macronutriments.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: ImageCal,
            title: `${bej} calories `,
            description: "Vos besoins caloriques quotidient",
            url: "https://google.com"
          },
          {
            imageSrc: ImageScan,
            //title: `${Math.round(prots)}g`,
            title: `entre ${Math.round(poid)*1.5}g et ${Math.round(poid)*2}g`,
            description: "Vos besoin quotidient en proteines ( entre 1.5 et 2 x le poid de corps ) ",
            url: "https://timerse.com"
          },
          {
            imageSrc: ImageProtein,
            title: `${bodyfat}%`,
            description: "Notre estimation de votre bodyfat (formule US navy)",
            url: "https://reddit.com"
          },
          {
            imageSrc: ImageMuscle,
            title: calories,
            description: "Tes besoin en calories pour prisse de masse",
            url: "https://google.com"
          },
          {
            imageSrc: ImageTime,
            title: `${objectifTemps} semaines`,
            description: `Le temps qu'il faut pour prendre ${objectifKilos}kg de muscle sec`,
            url: "https://timerse.com"
          },        
        ]}
        />
      

      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Bulking at <Incline></Incline><HighlightedText>{calories} calories.</HighlightedText><Incline/>
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

        price: "710 cal",
        price2: "87g protein",
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
        content7: `${red}g red beans `,

        price: "710 cal",
        price2: "87g protein",
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

        price: "710 cal",
        price2: "87g protein",
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
        

        price: "710 cal",
        price2: "87g protein",
        rating: "Snack",
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
        

        price: "710 cal",
        price2: "87g protein",
        rating: "Breakfast",
        reviews: "Breakfast",
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