import React,{useState} from 'react'

export default function Form(props) {

    // handleupclick is a function of button 'conv to uppercase' and to operate that button we use settext which is func of useState
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked"+ text);
        let newText  = text.toUpperCase();
        setText(newText);
        props.showAlert(' Convert to Upper case',"Success");
    }
    // handlelowclick is to settext to convert to lowercase
    const handleLowClick = ()=>{
        console.log("Lowercase was clicked"+ text);
        let newText  = text.toLowerCase();
        setText(newText);
        props.showAlert(" Convert to Lower case","Success");
    }

    const handleclearClick = ()=>{
        console.log("Clear Text was clicked"+ text);
        let newText = " ";
        setText(newText);
        props.showAlert(" Cleared the Text","Success");
    }
    // handleonchange func is to get that text from text box
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    // useState is React Hook that allows you to add state to a functional component.
    const [text, setText] = useState(" ");
    return (
        <>
        <div className='container'>
            <h1>{props.heading} </h1>

            {/* value will get the text to set another text */}
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white'}} id="mybox" rows="8"></textarea>
            </div>
            
            {/* onclick command is used to activate that func to perform the activity */}
            {/* mx-3  is to give margin by x directon and my-3 in y direction */}
            <button className='btn btn-primary mx-3' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-3' onClick={handleclearClick}>Clear Text</button>


        </div>

        <div className='container my-3' >
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} Words and {text.length} Charater</p>
            <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        </div>
        </>
    )
}
