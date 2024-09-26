import React from 'react'

export default function About(props) {

    // const [mystyle, setMyStyle] = useState({

    //     color:'black',
    //     backgroundColor:'white'

    // })

    let mystyle={
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode=== 'dark'?'#5154c5':'white'
    }
    // rgb (36 74 104)
    // const [btnText, setBtnText]=useState("Enable Dark Mode")

    // const toggleStyle =()=>{
    //     if(mystyle.color === 'black'){
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText("Enable Light Mode")
      
    //     }
    //     else{
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }
        
  return (
    <div className='container' >
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
            </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free To Use</strong>
                </button>
                </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                TextUtils is free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitble for writing text with word/character limit.
            </div>
            </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser Comapatible</strong>
                </button>
                </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
                This word counter software works in any web browsers such as chrome, Firefox etc. It suits to count characters in books, documnents, essays etc.  
            </div>
            </div>
            </div>
            </div>
        {/* <div className='container my-3'>
            <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btnText}</button>

        </div> */}

    </div>
  )
}
