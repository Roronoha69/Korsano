import React from 'react'
import './Freetrial.scss'
import {useState} from 'react'
import Footer from "components/footers/MiniCenteredFooter2.js";
import Feature from "components/features/TwoColSingleFeatureWithStats3";
import Header from "components/headers/light2.js";
import styled from "styled-components";
//import Header from "./header2";
import gratuit from '../../images/korsanoPremium.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'


{/* <p>{taille}</p>
<p>{poid}</p>
<p>{age}</p>

<p>{13.707*poid + 4.923*taille - 6.673*age + 77.607}</p>

<p>{nap[actv+work]*(13.707*poid + 4.923*taille - 6.673*age + 77.607)}</p> 
<p>{work}</p>
<p>{mb}</p>
<p>{bej} </p> */}



function Freetrial() {

  const [n, setNumber] = useState(1)
  const [quizStart, setQuizStarted] = useState(true);
  
  const [goal, setGoal] = useState()
  const [goal2, setGoal2] = useState()
  const [veg, setVeg] = useState()
  const [whey, setWhey] = useState()
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


  const [,] =useState()

  const nap = [0, 0, 1.375, 1.4675, 1.56, 1.6, 1.64, 1.73, 1.82]

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
  




  setNumber(n+1)
  }


  function hundleresult3() {
    
   
      setNumber(n+2)
      if (fixGoal==true){
        setFixGoal2(bej-200)
      }
  
      if (fixGoal==false){
        setFixGoal2(bej+200)
      }

 
    
  }


  function handleResult() {
    setNumber(n+1)

    if (gender == 'femme'){
      setMb(Math.round((9.740*poid + 172.9*taille - 4.7373*age + 667.051)/10)*10)

      setBej(Math.round((nap[actv+work]*(9.740*poid + 1.729*taille - 4.7373*age + 667.051))/10)*10-100)
    }
    if (gender == 'homme'){
      setMb(Math.round((13.707*poid + 4.923*taille - 6.673*age + 77.607)/10)*10)
      setBej(Math.round((nap[actv+work]*(13.707*poid + 4.923*taille - 6.673*age + 77.607))/10)*10)
    }    
  }

  function handleResult2() {
    setNumber(n+1)
    if (gender == 'femme'){
    setbodyfat(Math.round(((495/((1.29579 - 0.35004*Math.log10(tdt+hanche-tdc)) + 0.22100*Math.log10(taille)))-450)*100)/100)
    }
    if (gender == 'homme'){
    setbodyfat(Math.round(((495/((1.0324 - 0.19077*Math.log10(tdt-tdc) ) + 0.15456*Math.log10(taille)))-450)*100)/100)
    }

    if (fixGoal==true){
      setFixGoal2(bej-200)
    }

    if (fixGoal==false){
      setFixGoal2(bej+200)
    }
    
  } 
 



  console.log(bodyfat);
  return (
    <div className='free'>
      
<HeaderStyle>
   <Header />
</HeaderStyle>

<div className={`change-back ${n==1}`}>
   <div className="test">


    <div className={`quiz ${quizStart? '':'invisible'}`}>

      <div className={`questions ${n==1? '':'invisible'}`}>
      <h1>Quels sont tes objectifs estétiques ?</h1>
      <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button>
      <button onClick={()=> hundleQuizz(2)}>Prise de masse.</button>
      
      <button onClick={()=> hundleQuizz(3)}>Sèche musculaire</button>

      </div>

      <div className={`questions ${n==2? '':'invisible'}`}>
      <h1>As-tu d'autres objectifs ?</h1>
      <button onClick={()=> hundleQuizz(4)}>Maximiser ma testostérone.</button>
      <button onClick={()=> hundleQuizz(5)}>Améliorer les capacité du cerveau.</button>
      <button onClick={()=> hundleQuizz(6)}>Mieux dormir et récuperer.</button>
      </div>

      <div className={`questions ${n==3? '':'invisible'}`}>
      <h1>Es-tu vegetarien ? ?</h1>
      <button onClick={()=> hundleQuizz(7)}>Oui</button>
      <button onClick={()=> hundleQuizz(8)}>Non</button>
      </div>

      <div className={`questions ${n==4? '':'invisible'}`}>
      <h1>Consome tu de la whey ?</h1>
      <button onClick={()=> hundleQuizz(9)}>Oui</button>
      <button onClick={()=> hundleQuizz(10)}>Non</button>
      </div>

      <div className={`questions ${n==5? '':'invisible'}`}>
      <h1>As-tu des coup de fatigue dans la journée ?</h1>
      <button onClick={()=> setNumber(n+1)}>Tout les jours.</button>
      <button onClick={()=> setNumber(n+1)}>Souvent.</button>
      <button onClick={()=> setNumber(n+1)}>Rarement.</button>
      </div>

      <div className={`questions ${n==6? '':'invisible'}`}>
      <h1>Quel est ton budject courses ?</h1>
      <button onClick={()=> hundleQuizz(31)}>Dépenser le moins possible.</button>
      <button onClick={()=> hundleQuizz(32)}>Budget normal mais optimisé</button>
      </div>



      <div className={`questions ${n==7? '':'invisible'}`}>
      <h1>Ton travail est plutot :</h1>
      <button onClick={()=> hundleQuizz(11)}>Sédentaire</button>
      <button onClick={()=> hundleQuizz(12)}>Un peu actif</button>
      <button onClick={()=> hundleQuizz(13)}>Actif, je marche beaucoup</button>
      <button onClick={()=> hundleQuizz(14)}>Physique et/ou port de charges</button>
      </div>

      <div className={`questions ${n==8? '':'invisible'}`}>
      <h1>Quel est ton niveau d'activité physique</h1>
      <button onClick={()=> hundleQuizz(15)}>Le néant</button>
      <button onClick={()=> hundleQuizz(16)}>1 à 3 fois par semaine</button>
      <button onClick={()=> hundleQuizz(17)}>3 à 5 fois par semaine</button>
      <button onClick={()=> hundleQuizz(18)}>6+ par semaine</button>
      </div>

      <div className={`questions ${n==9? '':'invisible'}`}>
      <h1>tu es ?</h1>
      <button onClick={()=> hundleQuizz(19)}>Un homme.</button>
      <button onClick={()=> hundleQuizz(20)}>Une femme.</button>
      </div>

      <div className={`questions ${n==10? '':'invisible'}`}>
      <h1>On vas calculer tes besoin en calories :</h1>
      <form action="">
        <input type="number" placeholder='Taille (cm)' onChange={e => setTaille(e.target.value)}/>
        <input type="number" placeholder='Poid (kg)' onChange={e => setPoid(e.target.value)}/>
        <input type="number" placeholder='Age (années)' onChange={e => setAge(e.target.value)}/>
      </form>
      <p onClick={()=> handleResult() }>
        Suivant
      </p>
      </div>

      <div className={`questions ${n==11? '':'invisible'}`}>
      <h1>Veux tu que l'on calculte ton % de graisse ?</h1>
      <button onClick={()=> setNumber(n+1)}>Oui.</button>
      <button onClick={()=> hundleresult3()}>Non.</button>     
      </div>

      <div className={`questions ${n==12? '':'invisible'}`}>
      <h1>Calcul du % de graisse selon la méthode de l'US NAVY.</h1>
      <form action="">
        <input type="number" placeholder='Tour de taille (nombril)' onChange={e => setTdt(e.target.value)}/>
        <input type="number" placeholder='Tout de cou (depuis la base)' onChange={e => setTdc(e.target.value)}/>
        <input className={gender=='homme'?'invisible':''} type="number" placeholder='Hanche' onChange={e => setHanche(e.target.value)}/>
      </form>
      <p onClick={()=> handleResult2() }>
        Résultats
      </p>
      </div>
</div>


    <div className={`result ${n==13? '' :'invisible'}`}>    
    <div className="not-lock">
      <div className="not-lock-text">

        <Feature 
        statistics={[
          {
            key: "Besoin en calories pour maintien",
            value: `${bej} cal/j`
          },
          {
            key: `Besoin pour une ${goal}`,
            value: `${fixGaol2} cal/j`
          },
          {
            key: "Besoin en Protéine selon tes objectifs",
            value: `${Math.round((bej/7.5)/4)}g`
          },
          {
            key: "Taux de graisse (Formule de l'US NAVY)",
            value: `${bodyfat}%`
          }      
        ]}

        />
      {/* <h1>Vos resultats :</h1>
      <h2>Analyse de vos besoin</h2>
      <p>Métabolisme basal : {mb} cal/j</p>
      <p>Vos besoins journaliers : {bej} cal/j</p>

      { fixGoal == false? (<p>Vos besoins journaliers pour votre {goal} : {bej+200} cal/j <span>(+200)</span></p>) : (<p></p>) }
      { fixGoal == true? (<p>Vos besoins journaliers pour votre {goal} : {bej-200} cal/j <span>(-200)</span></p>) : (<p></p>) }
      

      <h2>Analyse de votre corps</h2>
       <p>Votre taux de masse grasse est d'environ {bodyfat
        
      // (495/((1.0324 - 0.19077*Math.log10(89-46) ) + 0.15456*Math.log10(193)))-450
} </p> */}



      </div>
    </div>
    <div className='wrap-all-the-text'>

  
    <div className={`text ${n == 13? '' :'invisible'}` }>
    <img src={gratuit} alt="" />
    <div className={`text-card` }>
      <div className="text-card-wrapper">
      <h2> <b>INCLU</b>
      </h2>
    
<b>
      <p> {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}🗸 2 semaines de plan nutritionnel sur mesure et détaillés </p>
          
      <p> {/* <FontAwesomeIcon icon="fa-solid fa-check" />  */}🗸 Des conseils spéciaux pour ta progression</p>

      <p> {/* <FontAwesomeIcon icon="fa-solid fa-check" />  */}🗸 Des listes de courses adaptées à ton programme</p>
      
      </b>
     <a href='/404' >
      <b>Obtenir</b>
     </a>
</div>
    </div>
    </div>
    
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
padding-bottom: 1rem;

`



export default Freetrial