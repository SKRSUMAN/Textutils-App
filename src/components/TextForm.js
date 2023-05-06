import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>
    {
    
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case" , "Sucess")
    }
    const handleLoClick = () =>
    {
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case" , "Sucess")
    }
    
    const handleClearClick = () =>
    {
        // console.log("Uppercase was clicked " + text);
        let newText = '';
        setText(newText)
        props.showAlert("Converted to Clear Text" , "Sucess")
    }
    const handleCaptalizeClick = () =>
    {
        // console.log("Uppercase was clicked " + text);
        let newText = text.charAt(0).toUpperCase() + text.slice(1);
        setText(newText)
        props.showAlert("Converted to Capatalize Case" , "Sucess")
    }
    const handleSpeakClick = () =>
    {
        // console.log("Uppercase was clicked " + text);
        let msg = new SpeechSynthesisUtterance();
         msg.text = text;
         window.speechSynthesis.speak(msg);
        //  setText(msg)
    }
    const handleOnChange = (event) =>
    {
        // console.log("Onchange");
        setText(event.target.value)
    }


    const[text, setText] = useState('Enter text here')
    // text ="new text"; // Wrong way to change the state
    // setText ="new text"; // Correct way to change the state

    
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'? 'white':'#042743'}}>
      
      <h1>{props.heading} </h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'? 'grey':'white',
  color:props.mode === 'dark'? 'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to upperCase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-1" onClick={handleCaptalizeClick}>Captalize text</button>
<button className="btn btn-primary mx-1" onClick={handleSpeakClick}>Speak text</button>
      </div>
      <div className="container my-2"  style={{color:props.mode === 'dark'? 'white':'#042743'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length}words and {text.length} characetrs </p>
         <p>{0.008 * text.split(" ").length} Minutes read</p>
         <h2>Preview</h2>
         <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
         <p><strong>Devloped By Skr Suman</strong></p>
      </div>

   

    </>
  )
}
