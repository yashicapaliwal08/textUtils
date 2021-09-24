import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked", +text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UPPERCASE", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Cleared Text", "success");
  };
  const handleAlternatingClick = () => {
    var newtext = text.toLowerCase().split("");
    for (var i = 0; i < newtext.length; i += 2) {
      newtext[i] = newtext[i].toUpperCase();
    }
    setText(newtext.join(""));
    props.showAlert("Converted to AlTeRnAtInG TeXt", "success");
  };
  const handleCapitalizedClick = () => {
    let newtext = text.toLowerCase().split(" ");
    for (let i = 0; i < newtext.length; i++) {
      newtext[i] = newtext[i][0].toUpperCase() + newtext[i].substr(1);
    }
    setText(newtext.join(" "));
    props.showAlert("Every Word's First Letter Is Capitalized", "success");
  };
  const handlesenClick = () => {
    let newtext = text.toLowerCase().split(".");
    for (let i = 0; i < newtext.length; i++) {
      newtext[i] = newtext[i][0].toUpperCase() + newtext[i].substr(1);
    }
    setText(newtext.join("."));
    props.showAlert("Converted to Sentence form", "success");
  };
  const handleCopyClick = () => {
    var text = document.getElementById("MyBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text Cpoied!!!!", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  var wordCount = (text) => {
    if (text === "") return 0;
    else
      return text[text.length - 1] === " "
        ? text.split(" ").length - 1
        : text.split(" ").length;
  };

  const [text, setText] = useState("");
  //text="New text"// wrong way to change the text
  //   setText("New text");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="MyBox"
            rows="5"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handlesenClick}>
          Sentence case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to UPPERCASE
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleAlternatingClick}
        >
          Convert to AlTeRnAtInG TeXt
        </button>
        <button
          className="btn btn-primary my-2"
          onClick={handleCapitalizedClick}
        >
          Convert to Capitalized case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy Text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {wordCount(text)} words,{text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something to preview here"}</p>
      </div>
    </>
  );
}
