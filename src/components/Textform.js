import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Coverted to Uppercase", "success")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was Clicked" + text)
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Coverted to Lowercase", "success")
    }
    const handleClearClick = ()=>{
        console.log("Lowercase was Clicked" + text)
        let newText = ('')
        setText(newText)
        props.showAlert("Text Cleared", "success")
    }
    const handleOnChange = (event)=>{
        console.log("On Changed")
        setText(event.target.value)
    }
    const handleClearExtraSpaces = (event)=>{
        console.log("Spaces Removed")
        let newText=text.split(/[ ]+/)
        setText(newText.join(' '))
        props.showAlert("Extra space removed", "success")
        
    }
    const handleCopy = (event)=>{
        console.log("Text Copied")
        var newText=document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success")
    }

    const [text, setText] = useState('');
    // setText{"Enter text to update 'text'"} correct way to change the state
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor:props.mode==='dark'?'#5154c5':'white', 
            color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        
        <button disabled={text.length===0} className = "btn btn-primary mx-2 my-2" onClick={handleUpClick}> Convert to UpperCase</button>
        <button disabled={text.length===0} className = "btn btn-primary mx-2 my-2" onClick={handleLoClick}> Convert to LowerCase</button>
        <button disabled={text.length===0} className = "btn btn-primary mx-2 my-2" onClick={handleClearExtraSpaces}> Remove Extra Spaces</button>
        <button disabled={text.length===0} className = "btn btn-primary mx-2 my-2" onClick={handleCopy}> Copy Text</button>
        <button disabled={text.length===0} className = "btn btn-primary mx-2 my-2" onClick={handleClearClick}> Clear Text</button>
    </div>

    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text===""?0:(text.trim().split(" ").length)} words and {text.length} characters </p>disable={text.length===0} 
        <p>{0.08 * (text===""?0:(text.trim().split(" ").length))} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
    )
}
