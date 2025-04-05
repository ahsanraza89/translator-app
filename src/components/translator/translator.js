"use client"
import axios from 'axios';
import React, { useState } from 'react';

export default function Translator() {
    let [text , setText] = useState("");
    let [isArabic , setIsArabic ] = useState(false);
    let [translatedState , setTranslatedState ]  = useState("")
 
    const toggleHandler = async ()=>{

        const response = await axios.post('/api/translate/' , {
            text : text ,
            to : isArabic ? "en" : "ar"
        })
        console.log(response.data);
        setTranslatedState(response.data.text)
        
        setIsArabic(!isArabic)
    }
  return (
    <div className='container mt-5'>
      <div className='mb-3'>
      <textarea 
      className='form-control'
       rows="4"
      value={text}
      onChange={(e)=> setText(e.target.value)} 

      placeholder='Type your text here'/>

</div>
      <button className='btn btn-primary mb-3' onClick={toggleHandler }>Translate to {isArabic ? "English" : "Arabic"}</button>

      
        {
          translatedState &&( 
            <div className="alert alert-success">
          <h3>Translated State:</h3>
          <p>{translatedState}</p>
          </div>)
        }

    </div>
  )
}

// Class	Use for
// alert-success	✅ Success messages (like "Translation complete!")
// alert-danger	❌ Error messages (like "Something went wrong")
// alert-warning	⚠️ Warnings (like "Input is empty")
// alert-info	ℹ️ Informational messages