"use client"
import axios from 'axios';
import React, { useState } from 'react';

export default function Translator() {
  let [text, setText] = useState("");
  let [isArabic, setIsArabic] = useState(false);
  let [translatedState, setTranslatedState] = useState("");
  let [showTranslated, setShowTranslated] = useState(false);

  const toggleHandler = async () => {

    const response = await axios.post('/api/translate/', {
      text: text,
      to: isArabic ? "en" : "ar"
    })
    console.log(response.data);
    setTranslatedState(response.data.text)
    setShowTranslated(!showTranslated);
    setIsArabic(!isArabic)
  }
  return (
    <div className='container mt-5'>
      

        <div className='mb-4' >
          <button className= {`btn me-3 ${!showTranslated ? 'btn-primary' :  'btn-outline-primary'}`} 
          onClick={() => { setShowTranslated(false) }}>Original </button>
          <button className= {`btn ${showTranslated ? 'btn-primary' :  'btn-outline-primary'}`} 
          onClick={() => { setShowTranslated(true) }}>Translated</button>
        </div>

       { !showTranslated ? ( <textarea
          className='form-control mb-3'
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}

          placeholder='Type your text here' />

    ) :(
      <div className="alert alert-success ">

        <p >{translatedState}</p>
      </div>)
}

      <button className='btn btn-primary mb-3' onClick={toggleHandler}>
        Translate to {isArabic ? "English" : "Arabic"}</button>
    </div>

  )
}

// Class	Use for
// alert-success	✅ Success messages (like "Translation complete!")
// alert-danger	❌ Error messages (like "Something went wrong")
// alert-warning	⚠️ Warnings (like "Input is empty")
// alert-info	ℹ️ Informational messages