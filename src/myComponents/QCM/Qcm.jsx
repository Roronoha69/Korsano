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

import Back from "images/icons8-undo-64.png";

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
  const [stringFat, setStringFat] = useState('')
  const [stringCal, setStringCal] = useState('')
  const [objectifKilos, setObjectifKilos] = useState()
  const [objectifTemps, setObjectifTemps] = useState()
  const [objectifVitesse, setObjectifVitesse] = useState()
  const [firstName, setFirstName] = useState('')

  


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

  function temps(params) {
    setNumber(n+1)
    setObjectifTemps(Math.round(objectifKilos/params))
    setObjectifVitesse(params*1000)
    
  }




  const handleSubmit = async(e) => {
    //e.preventdefault();
  

    console.log(bodyfat);


    var stringFat = bodyfat.toString()
    var stringBej = bej.toString()
    var stringPoid = poid.toString()
    var stringCal = calories.toString()
    var stringTime = objectifTemps.toString()
    var stringVitesse = objectifVitesse.toString()
  
    await deleteDoc(doc(db, `${nickname}`, `${stateEmail}`)); 

    await setDoc(doc(db, `${nickname}`, `${stateEmail}`),{ 
      //addDoc(collection(db, `${nickname}`, `${stateEmail}`), {
      stringFat,
      stringCal,
      stringBej,
      stateEmail,
      stringPoid,
      stringTime,
      stringVitesse,
      firstName,
      
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

  
    setCalories(bej+objectifVitesse)


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



<div>

    <div className="test">
    <div className={`back-btn ${n == 1? 'invisible':''}`} onClick={()=> setNumber(n-1)}>
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
        <h1>Let's calcul your calories needs</h1>
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
        <h1>All yours informations are only used to build your program and won't be shared</h1>

      <form action="">
        
      </form>
      <p onClick={()=> handleSubmit() }>
        Continue
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