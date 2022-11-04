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


{/* <p>{taille}</p>
<p>{poid}</p>
<p>{age}</p>

<p>{13.707*poid + 4.923*taille - 6.673*age + 77.607}</p>

<p>{nap[actv+work]*(13.707*poid + 4.923*taille - 6.673*age + 77.607)}</p> 
<p>{work}</p>
<p>{mb}</p>
<p>{bej} </p> */}



function Freetrial() {

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
  const [bodyfat, setbodyfat] =useState('/')
  const [fixGaol2, setFixGoal2] =useState()
  const [,] =useState()
  const [,] =useState()
  const [,] =useState()
  const [,] =useState()
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
        setFixGoal2(bej-200)
      }
  
      if (fixGoal==false){
        setFixGoal2(bej+200)
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
         <h1>Quels sont tes objectifs ?</h1>
      {/* <button onClick={()=> hundleQuizz(4)}>Maximiser ma testostérone.</button> */}
      <button onClick={()=> hundleQuizz(5)}>Améliorer ma productivité.</button>
      <button onClick={()=> hundleQuizz(6)}>Mieux dormir et récuperer.</button>
      

      </div>

      <div className={`questions ${n==2? '':'invisible'}`}>
     <h1>Es-tu vegetarien ?</h1>
      <button onClick={()=> hundleQuizz(7)}>Oui</button>
      <button onClick={()=> hundleQuizz(8)}>Non</button>
      </div>

      <div className={`questions ${n==3? '':'invisible'}`}>
      <h1>Tes objectifs estétiques ? ( sèche pas encore disponible )</h1>
      {/* <button onClick={()=> hundleQuizz(1)}>Perdre du poid.</button> */}
      <button onClick={()=> hundleQuizz(2)}>Prise de masse.</button>
      
      {/* <button onClick={()=> hundleQuizz(3)}>Sèche musculaire</button> */}
      </div>

      <div className={`questions ${n==4? '':'invisible'}`}>
        <h1>A quel fréquence te sent-tu fatigué au cour de la journée ?</h1>
      <button onClick={()=> setNumber(n+1)}>Souvent</button>
      <button onClick={()=> setNumber(n+1)}>Parfois</button>
      <button onClick={()=> setNumber(n+1)}>Presque jamais</button>

      </div>

      <div className={`questions ${n==5? '':'invisible'}`}>
        <h1>Quel est ton budjet courses ?</h1>
      <button onClick={()=> hundleQuizz(31)}>Dépenser le moins possible.</button>
      <button onClick={()=> hundleQuizz(32)}>Budget normal mais optimisé.</button>
      </div>

      <div className={`questions ${n==6? '':'invisible'}`}>
        <h1>Tu es ?</h1>
      <button onClick={()=> hundleQuizz(19)}>Un homme</button>
      <button onClick={()=> hundleQuizz(20)}>Une femme</button>
      </div>


      <div className={`questions ${n==7? '':'invisible'}`}>
       <h1>Quel est ton niveau d'activité physique ?</h1>
      <button onClick={()=> hundleQuizz(15)}>Le néant</button>
      <button onClick={()=> hundleQuizz(16)}>1 à 3 fois par semaine</button>
      <button onClick={()=> hundleQuizz(17)}>3 à 5 fois par semaine</button>
      <button onClick={()=> hundleQuizz(18)}>6+ par semaine</button>
      </div>

      <div className={`questions ${n==8? '':'invisible'}`}>
      <h1>Ton travail est plutot :</h1>
      <button onClick={()=> hundleQuizz(11)}>Physiquement calme</button>
      <button onClick={()=> hundleQuizz(12)}>Un peu actif</button>
      <button onClick={()=> hundleQuizz(13)}>Actif, je marche beaucoup</button>
      <button onClick={()=> hundleQuizz(14)}>Physique ou port de charges</button>
      </div>

      <div className={`questions ${n==9? '':'invisible'}`}>
     
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

      <div className={`questions ${n==10? '':'invisible'}`}>
       <h1>Veux tu que l'on calcul ton % de graisse ?</h1>
      <button onClick={()=> setNumber(n+1)}>Oui</button>
      <button onClick={()=> hundleresult3()}>Non</button>   
      </div>

      <div className={`questions ${n==11? '':'invisible'}`}>
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


    <div className={`result ${n==12? '' :'invisible'}`}>    
    <div className="not-lock">
      <div className="not-lock-text">

        <Feature 
        statistics={[
          {
            key: "Besoin en calories pour maintien",
            value: `${bej}cal`
          },
          {
            key: `Besoin pour une ${goal}`,
            value: `${fixGaol2}cal`
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
        <div className='day-menu'>

          


            {/* <div className={fixGaol2 >= 2000 && fixGaol2 < 2100 && goal == "prise de masse"? '':'invisible'}> */}
            <div className={ fixGaol2 <=2000 &&fixGaol2 < 2100 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
           
            <div className="meals">
              <div className="first-half-day">
              <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                
                <p>Shakeur</p>
                <p>1/2 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>20g de flocon d'avoine</p>

                
                {broke ? (
                  <div>
                  <p>25g Beurre de cacahuète</p>               
                <p>30g de datte sechée</p>
                </div>
                  ) : (
                <div>
                 <p>puré d'amandes</p>
                <p> groseilles</p>
                </div>
                  )}

{/*                 
                <p>1 yaourt a la grec</p> */}

                 {/* 
                Option non-éco
               
                */}
                {/* 680  30g prot */}
                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>2 oeufs</p> 
                {/* 200 cal */}
                <p>80g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
             <h3> <Incline><HighlightedText>Colation</HighlightedText></Incline></h3>
                <p>( repartir dans la journée si besoin )</p>
               <p>Une dizaine d'amandes</p>
               <p>Une Banane</p>
               <p>1 Barre de cérélales</p>
                {/* 300 */}
               
                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                
                <p>2 wraps</p>
                {/* 330 cal*/}
                <p>100g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 

                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2100 && fixGaol2 < 2200 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1/2 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>25g Beurre de cacahuète</p>
                <p>20g de flocon d'avoine</p>
                <p>30g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>2 oeufs</p> 
                {/* 200 cal */}
                <p>85g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3>Colation ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>
               <p>Une Banane</p>
               <p>1 Barre de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>2 wraps</p>
                {/* 330 cal*/}
                <p>100g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2200 && fixGaol2 < 2300 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1/2 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>25g Beurre de cacahuète</p>
                <p>20g de flocon d'avoine</p>
                <p>30g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>85g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>
               <p>Une Banane</p>
               <p>1 Barre de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>2 wraps</p>
                {/* 330 cal*/}
                <p>100g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2300 && fixGaol2 < 2400 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>25g Beurre de cacahuète</p>
                <p>20g de flocon d'avoine</p>
                <p>30g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>85g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>              
               <p>50g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>2 wraps</p>
                {/* 330 cal*/}
                <p>100g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2400 && fixGaol2 < 2500 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>25g Beurre de cacahuète</p>
                <p>20g de flocon d'avoine</p>
                <p>30g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>85g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>              
               <p>50g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>100g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2500 && fixGaol2 < 2600 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>25g Beurre de cacahuète</p>
                <p>20g de flocon d'avoine</p>
                <p>30g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>85g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>              
               <p>50g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>130g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2600 && fixGaol2 < 2700 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>300ml de lait</p>
                <p>1 banane</p>
                <p>30g Beurre de cacahuète</p>
                <p>30g de flocon d'avoine</p>
                <p>50g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>85g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>              
               <p>50g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>130g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>50g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2700 && fixGaol2 < 2800 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>350ml de lait</p>
                <p>1 banane</p>
                <p>30g Beurre de cacahuète</p>
                <p>30g de flocon d'avoine</p>
                <p>50g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>95g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>              
               <p>50g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>130g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>75g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2800 && fixGaol2 < 2900 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>350ml de lait</p>
                <p>1 banane</p>
                <p>30g Beurre de cacahuète</p>
                <p>30g de flocon d'avoine</p>
                <p>50g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>95g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p>              
               <p>80g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>130g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>75g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 2900 && fixGaol2 < 3000 && goal ? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>350ml de lait</p>
                <p>1 banane</p>
                <p>30g Beurre de cacahuète</p>
                <p>30g de flocon d'avoine</p>
                <p>50g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>95g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une dizaine d'amandes</p> 
               <p>1 bananes</p>             
               <p>80g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>130g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>75g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 >= 3000 && fixGaol2 < 3000 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>350ml de lait</p>
                <p>1 banane</p>
                <p>30g Beurre de cacahuète</p>
                <p>30g de flocon d'avoine</p>
                <p>50g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>95g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une poigné d'amandes</p> 
               <p>1 bananes</p>             
               <p>80g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>160g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>75g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>


            <div className={fixGaol2 >= 3100 && fixGaol2 < 3200 && goal == "prise de masse"? '':'invisible'}>
            <h1> <Incline><HighlightedText>PLAN NUTRITIONEL</HighlightedText></Incline>  pour {goal} à {fixGaol2} Kcal</h1>
            <div className="meals">
              <div className="first-half-day">
                <h3><Incline><HighlightedText>Matin</HighlightedText></Incline></h3>
                <p>Shakeur</p>

                <p>1 scop de whey</p>
                <p>350ml de lait</p>
                <p>1 banane</p>
                <p>30g Beurre de cacahuète</p>
                <p>30g de flocon d'avoine</p>
                <p>50g de datte sechée</p>                              
                <p>1 yaourt a la grec</p> 

                 {/* 
                Option non-éco
                - puré d'amandes
                - groseilles

                */}
                {/* 680  30g prot */}

                <h3><Incline><HighlightedText>Midi</HighlightedText></Incline></h3>
                <p>Quelques crudités (carrorte, concombre, etc)</p>
                {/* 30 cal */}
                <p>3 oeufs</p> 
                {/* 200 cal */}
                <p>95g (cru) de riz</p>
                {/* 280cal */}
                <p>Sauce tomate ou sauce soja</p>

                {/* 520 cal 18g prot*/}
              </div>

              <div className="second-half-day">
                
               <h3><Incline><HighlightedText>Colation</HighlightedText></Incline> ( repartir dans la journée si besoin )</h3>
               <p>Une poigné d'amandes</p> 
               <p>1 bananes</p>             
               <p>120g de cérélales</p>
                {/* 300 */}
               

                <h3><Incline><HighlightedText>Soir</HighlightedText></Incline></h3>
                <p>3 wraps</p>
                {/* 330 cal*/}
                <p>160g saumon (cuit ou fumé )</p>

                {/* 180cal */}
                 
                <p>tomate et salade a volonté </p>
                <p>Vinegrette et/ou jus citron</p> 
                <p>100g de légumineuse</p>
                <p>75g de Fromage frais </p>
                {/* 100 cal */}
                {/*  660 cal 40g*/}
                

              </div>
            </div>
            </div>

            <div className={fixGaol2 > 3500 || fixGaol2 < 1500 || fixGaol2== NaN? '':'invisible' }>
              <h1>Un probleme est survenu</h1>
            </div>

        </div>
    
       {/*<h2>Analyse de vos besoin</h2>
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

  
    <div className={`text ${n == 12? '' :'invisible'}` }>
    <img src={gratuit} alt="" />
    <div className={`text-card` }>
      <div className="text-card-wrapper">
      <h2> <b>PROGRAMME 30j</b>
      </h2>
    
<b>






      <p> {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}🗸 Rééquilibrage alimentaire</p>
          
      <p> {/* <FontAwesomeIcon icon="fa-solid fa-check" />  */}🗸 Diète adaptée à ton mode de vie, tes préférences et ton objectif</p>

      <p> {/* <FontAwesomeIcon icon="fa-solid fa-check" />  */}🗸 Détail complet des calories et macronutriments</p>
      
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
margin-bottom: 4rem;

`



export default Freetrial