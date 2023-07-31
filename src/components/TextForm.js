import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("")
    // text = "new text"; // Wrong way to change the state
    // setText("new text"); // Correct way to change the state

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }

    const handleCapitalized = () => {
        let word = text.split(" ")
        for (let i = 0; i < word.length; i++) {
            word[i] = word[i][0].toUpperCase() + word[i].substring(1)
        }
        setText(word.join(" "));
    }

    const handleAlternating = () => {
        let newText = ""
        for (let i = 0; i < text.length; i++) {
            if (text[i] === text[i].toUpperCase()) {
                newText += text[i].toLowerCase()
            } else {
                newText += text[i].toUpperCase()
            }
        }
        setText(newText)
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleClearClick = () => {
        setText("")
    }

    return (
        <div>
            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2> {props.heading} </h2>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'light' ? 'black' : 'white' }} placeholder='Enter text here' id="myBox" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} >Conver To Uppercase</button>
                <button className="btn btn-primary" onClick={handleloClick} >Conver To Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleCapitalized} >Conver To Capitalized</button>
                <button className="btn btn-primary" onClick={handleAlternating} >Conver To Alternating</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy To Clipboard</button>
                <button className="btn btn-primary" onClick={handleClearClick} >Clear Text</button>
            </div>

            <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} Characters.</p>
                <p> {(text.split(" ").length * 0.008)} Minutes read </p>
                <h2>Priview</h2>
                <p> {text.length > 0 ? text : "Enter something in the textbox above to preview it here"} </p>
            </div>
        </div>
    )
}