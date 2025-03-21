import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercse was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("Uppercse was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }


    const handleClearClick = () => {
        // console.log("Uppercse was clicked" + text);
        let newText = "";
        setText(newText)
    }

    const handleCopyClick = () => {
      console.log("I am copy");
      var text = document.getElementById('myBox');
      text.select();
      document.getSelection().removeAllRanges()
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraPaste = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode === 'light'?'#042743':'white'}}>
    <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor: props.mode === 'light'?'white':'#13466e', color: props.mode === 'light'?'#042743':'white'}}
        ></textarea>
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraPaste}>Remove Extra Space</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element) => {return element.length !== 0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}



