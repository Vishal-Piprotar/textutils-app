import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log('UpperCase Was Clicked'+text);
        // uppercase
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("UpperCase Converted", "success");
    }

    const handleLowClick = () => {
        // lowercase
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("LowerCase Converted", "success");

    }

    const handleClearClick = () => {
        //clear text
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text", "success");

    }
    const handleCapital = () => {
        //Capital text
        const newText = text
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        setText(newText);
        props.showAlert("Captalize Text", "success");

    }

    const handleCopy = () => {
        //Copy text
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Coppied Text", "success");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space was removed ", "success");

    }

    const handleOnChange = (event) => {
        // console.log('On Change');
        setText(event.target.value);
    }

    return (
        <>
            <div className="container">
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        color: props.mode === 'light' ? 'black' : 'white',
                        backgroundColor: props.mode === 'light' ? 'white' : '#495057'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleUpClick}>Convert To UpperCase</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleLowClick}>Convert To LowerCase</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleCopy}>Copy text</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary mx-1 mt-2" onClick={handleCapital}>Capitalize</button>


            </div>
            <div className="container my-3">
                <h2>Your Text Summary</h2>
                {/* <p>{text.split(" ").length} words and {text.length} character</p> */}
                <p>{text.split(/\s+/).filter(word => word !== '').length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>

                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter the Text to preview content"}</p>
            </div>


        </>
    )
}
