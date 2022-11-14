import React from 'react'
import './Qcm.scss'
import {useState} from 'react'
import Footer from "components/footers/MiniCenteredFooter2.js";
import Feature from "components/features/TwoColSingleFeatureWithStats3";
import Header from "components/headers/light.js";
import styled from "styled-components";
//import Header from "./header2";
import gratuit from '../../images/korsanoblack.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import tw from "twin.macro";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, doc, addDoc, deleteDoc, setDoc   } from "firebase/firestore";
//import {getAuth} from "firebase/auth";

import { useAuth0 } from '@auth0/auth0-react';


{/* <p>{taille}</p>
<p>{poid}</p>
<p>{age}</p>

<p>{13.707*poid + 4.923*taille - 6.673*age + 77.607}</p>

<p>{nap[actv+work]*(13.707*poid + 4.923*taille - 6.673*age + 77.607)}</p> 
<p>{work}</p>
<p>{mb}</p>
<p>{bej} </p> */}



function Qcm() {


  const { user, isLoading } = useAuth0();
  const [stateEmail, setEmail] = useState('')
  const [nickname, setNickname] = useState('')

  


  const test = () =>{
    if (user) {
 
 setNickname(user.nickname)
 setEmail(user.email)
   console.log(stateEmail);
 }
}


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
  const [veg, setVeg] = useState()
  const [whey, setWhey] = useState()
  const [work, setWork] = useState()
  const [actv, setActv] = useState()
  const [gender, setGender] = useState()
  const [broke, setBroke] = useState()

  const [taille, setTaille] = useState()
  const [age, setAge] = useState()
  const [poid, setPoid] = useState()

  const [tdt,setTdt] =useState()
  const [tdc,setTdc] =useState()
  const [hanche,setHanche] =useState()

  const [mb, setMb] =useState()
  const [bej, setBej] =useState()
  const [bodyfat, setbodyfat] =useState('')
  const [calories, setCalories] =useState('')

  const [fixGoal, setFixGoal] =useState()
  

  const [,] =useState()

  const Exnap = [0, 0, 1.375, 1.4675, 1.56, 1.6, 1.64, 1.73, 1.82]
  const nap = [0, 0, 1.2, 1.287, 1.375, 1.465, 1.55, 1.64, 1.725]

  function hundleStart() {
    setQuizStarted(true)
    setNumber(n+1)
  }


  

  function hundleQuizz(x){
  if (x == 1) {
    setGoal("perte de poid")
    setFixGoal(true)
  }
  if (x == 2) {
    setGoal("prise de masse")
    setFixGoal(false)
  }
 
  if(x == 3){
    setGoal("sèche")
    setFixGoal(true)
  }
  if (x == 4) {
    setGoal2('testo')
  }
  if (x == 5) {
    setGoal2('brain')
  }
  if (x == 6) {
    setGoal2('energie')
  }
  if (x == 7) {
    setVeg(true)
  }
  if (x == 8) {
    setVeg(false)
  }
  if (x == 9) {
    setWhey(true)
  }
  if (x == 10) {
    setWhey(false)
  }
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
  
if (x==31){
  setBroke(true)
}

if (x==32){
  setBroke(false)
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

   
    

    
    test()


  }




  const handleSubmit = async(e) => {
    //e.preventdefault();
  
   console.log('##############');
   console.log(bodyfat);
   console.log('#############');

   var stringFat = bodyfat.toString()
   var stringCal = calories.toString()
   var stringPoid = poid.toString()
   var stringMaintient = bej.toString()
  
    await deleteDoc(doc(db, `${nickname}`, `${stateEmail}`)); 

    await setDoc(doc(db, `${nickname}`, `${stateEmail}`),{ 
      //addDoc(collection(db, `${nickname}`, `${stateEmail}`), {
      stringFat,
      stringCal,
      stateEmail,
      stringPoid,
      stringMaintient,
      completed: false,
    })

    window.location = '/success'
  }


  function handleResult2() {
    setNumber(n+1)
    if (gender == 'femme'){
    setbodyfat(Math.round(((495/((1.29579 - 0.35004*Math.log10(tdt+hanche-tdc)) + 0.22100*Math.log10(taille)))-450)*100)/100)
    //setStringFat(String(Math.round(((495/((1.29579 - 0.35004*Math.log10(tdt+hanche-tdc)) + 0.22100*Math.log10(taille)))-450)*100)/100))
    }
    if (gender == 'homme'){
      
    setbodyfat(Math.round(((495/((1.0324 - 0.19077*Math.log10(tdt-tdc) ) + 0.15456*Math.log10(taille)))-450)*100)/100)
    //setStringFat(String(Math.round(((495/((1.0324 - 0.19077*Math.log10(tdt-tdc) ) + 0.15456*Math.log10(taille)))-450)*100)/100))
    }

    if (fixGoal==true){
      setCalories(bej-200)
      //setStringCal(String(bej-200))
    }

    if (fixGoal==false){
      setCalories(bej+200)
      //setStringCal(String(bej+200))
    }
  


    //window.location
  

  } 


 console.log(calories);



  //  console.log(String(bodyfat));
  //  console.log(bodyfat.toString());
  //  console.log(bodyfat);
  // console.log(stateEmail);
  // console.log(fixGaol2);






  return (
    <div className='free'>
      
<HeaderStyle>
   <Header />
</HeaderStyle>

<div className={`change-back ${n==1}`}>
   <div className="test">


    <div className={`quiz ${quizStart? '':'invisible'}`}>

      
      
      <div className={`questions ${n==1? '':'invisible'}`}>
      <h1>Tes objectifs ?</h1>
      {/* <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button> */}
      <button onClick={()=> hundleQuizz(2)}>Prise de muscle clean.</button>
      
      <button onClick={()=> hundleQuizz(3)}>Prisse de muscle et faire descendre mon taux de graisse</button>
      </div>

      

      <div className={`questions ${n==2? '':'invisible'}`}>
        <h1>Quel est ton budjet courses ?</h1>
      <button onClick={()=> hundleQuizz(31)}>Dépenser le moins possible.</button>
      <button onClick={()=> hundleQuizz(32)}>Budget normal mais optimisé.</button>
      </div>

      <div className={`questions ${n==3? '':'invisible'}`}>
        <h1>Tu es ?</h1>
      <button onClick={()=> hundleQuizz(19)}>Un homme</button>
      <button onClick={()=> hundleQuizz(20)}>Une femme</button>
      </div>


      <div className={`questions ${n==4? '':'invisible'}`}>
       <h1>Quel est ton niveau d'activité physique ?</h1>
      <button onClick={()=> hundleQuizz(15)}>Le néant</button>
      <button onClick={()=> hundleQuizz(16)}>1 à 3 fois par semaine</button>
      <button onClick={()=> hundleQuizz(17)}>3 à 5 fois par semaine</button>
      <button onClick={()=> hundleQuizz(18)}>6+ par semaine</button>
      </div>

      <div className={`questions ${n==5? '':'invisible'}`}>
      <h1>Ton travail est plutot :</h1>
      <button onClick={()=> hundleQuizz(11)}>Physiquement calme</button>
      <button onClick={()=> hundleQuizz(12)}>Un peu actif</button>
      <button onClick={()=> hundleQuizz(13)}>Actif, je marche beaucoup</button>
      <button onClick={()=> hundleQuizz(14)}>Physique ou port de charges</button>
      </div>

      <div className={`questions ${n==6? '':'invisible'}`}>
     
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

      <div className={`questions ${n==7? '':'invisible'}`}>
       <h1>Veux tu que l'on calcul ton % de graisse ?</h1>
      <button onClick={()=> setNumber(n+1)}>Oui</button>
      <button onClick={()=> hundleresult3()}>Non</button>   
      </div>

      <div className={`questions ${n==8? '':'invisible'}`}>
       <h1>Calcul du % de graisse selon la méthode de l'US NAVY.</h1>
      <form action="">
        <input type="number" placeholder='Tour de taille (nombril)' onChange={e => setTdt(e.target.value)}/>
        <input type="number" placeholder='Tour de cou (depuis la base)' onChange={e => setTdc(e.target.value)}/>
        <input className={gender=='homme'?'invisible':''} type="number" placeholder='Tour de hanche' onChange={e => setHanche(e.target.value)}/>
      </form>
      <p onClick={()=> handleResult2() }>
        Suivant
      </p>
      </div>

      <div className={`questions ${n==9? '':'invisible'}`}>
       <h1>Il faut garder cette question pour envoyer les datas</h1>

      <form action="">
        
      </form>
      <p onClick={()=> handleSubmit() }>
        Résultats
      </p>
      </div>

      
</div>


 

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
margin-bottom: 4rem;

`



export default Qcm