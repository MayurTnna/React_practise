import React, { useState } from "react";

function TextForm(props) {
  const[text,newText]=useState("Enter some text here.... ")
  const toLowerText=()=>{
    let lText=text.toLowerCase();
    newText(lText)
  }
  const  toUpperText=()=>{
    console.log("uppercase was clicked" +text)
    // newText("New text is updated!!!!!")
    let upText=text.toUpperCase();
    newText(upText)
  }
  const clearText=()=>{
    let cTtex=""
    newText(cTtex)
  }
  const handleOnChange=(event)=>{
    console.log("on change")
    newText(event.target.value)
  }
  const copyTtext=()=>{
    console.log("I am copying text, please select text yaaar!")
    var cText=document.getElementById("myBox")
    cText.select();
    Navigator.clipboard.writeText(text.value);
  }
  return (
    <>
    <div className="mb=3" style={{color: props.mode==='dark'?'white':'#042743'}}  >
      <h1 align="center">{props.heading}</h1>
      <textarea
        name="form-label"
        value={text}
        className="form-control"
        id="myBox"
        rows="8"
        style={{backgroundColor: props.mode==='dark' ?'grey':'white', color: props.mode==='dark'?'white':'#042743'}}
        onChange={handleOnChange} 
      ></textarea>
      <button className="btn btn-primary my-3" disabled={text.length===0} onClick={toUpperText}>Convert to uppercase</button>
      <button className="btn btn-primary mx-4 my-3" disabled={text.length===0} onClick={toLowerText}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2 py-1.5 px-5 my-3" disabled={text.length===0} onClick={clearText}>clear</button>
      <button className="btn btn-primary mx-2 py-1.5 px-5 my-3" disabled={text.length===0} onClick={copyTtext}>copy</button>
      
      {/* <h1>{text}</h1> */}
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 style={{color: props.mode==='dark'?'white':'#042743'}}>Your text summmary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
    </div>
    </>
  );
}
export default TextForm;
