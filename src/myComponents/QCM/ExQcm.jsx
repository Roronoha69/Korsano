import React from 'react'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {getAuth} from "firebase/auth";
import {useState, useEffect} from 'react'
import './Qcm.scss'
import gratuit from '../../images/korsanoblack.png'
import styled from "styled-components";
import Footer from "components/footers/MiniCenteredFooter2.js";
import Feature from "components/features/TwoColSingleFeatureWithStats3";
import Header from "components/headers/light.js";
import tw from "twin.macro";



function QcmEx() {

  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;

  const [n, setNumber] = useState(1)
  const [quizStart, setQuizStarted] = useState(true);
  


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
  const auth = getAuth(app);
  
  const [title, setTitle] = React.useState("Salut")

const handleSubmit = async(e) => {
  //e.preventdefault();

  await addDoc(collection(db, "datassss"), {
    title,
    completed: false,
  })
}

  return (
    <div>
        <div className="test">

Test
  
</div>

    </div>
  )
}

export default QcmEx




