import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.handleAlert("success ", " Converted to Upper Case !");
  };
  const handleDownclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.handleAlert("success ", " Converted to Lower Case !");
  };

  const handleListen = () => {
    if (!text.trim()) {
      alert("Please enter some text first!");
      return;
    }

    let speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US"; // change language from here
    window.speechSynthesis.speak(speech);
    props.handleAlert("warning ", " Speaking Started !");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);

    props.handleAlert("info ", " Copied to Clipboard !");
  };

  const handleClearSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.handleAlert("info ", " Extra Spaces are removed !");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.handleAlert("info ", " Text is cleared !");
  };

  const handleOnchange = (event) => {
    setText(event.target.value);
  };

  let wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div
      style={{
        color: props.mode === "dark" ? "white" : "black",
      }}
      className=" flex flex-col md:px-20 px-4 py-4 h-auto w-full transition-colors duration-500 ease-in-out"
    >
      <div className="w-full  flex flex-col gap-6 mx-auto">
        <label
          htmlFor="mybox"
          className="font-mono text-left text-2xl md:text-4xl "
        >
          Type Your Text or Paste It{" "}
        </label>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "#303030" : "#f1f8fe",
            borderColor: props.mode === "dark" ? "gray" : "#d4eafa",
          }}
          value={text}
          onChange={handleOnchange}
          className="w-full border-[1px]  rounded-xl p-2 min-h-[50px] max-h-[500px] transition-colors duration-500 ease-in-out"
          id="mybox"
          rows={8}
        ></textarea>

        <div className="flex flex-wrap gap-4 mt-2">
          <button
            disabled={text.length === 0}
            onClick={handleUpclick}
            className="px-4 py-2 bg-[#daddd8] text-black rounded-lg hover:bg-green-300 disabled:opacity-70 transition-colors duration-500 ease-in-out"
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleDownclick}
            className="px-4 py-2  bg-[#daddd8] text-black rounded-lg hover:bg-green-300 disabled:opacity-70 transition-colors duration-500 ease-in-out"
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleListen}
            className="px-4 py-2 bg-[#daddd8] text-black rounded-lg hover:bg-green-300 disabled:opacity-70 transition-colors duration-500 ease-in-out"
          >
            Listen
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleCopy}
            className="px-4 py-2 bg-[#daddd8] text-black rounded-lg hover:bg-green-300 disabled:opacity-70 transition-colors duration-500 ease-in-out"
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleClearSpaces}
            className="px-4 py-2 bg-[#daddd8] text-black rounded-lg hover:bg-green-300 disabled:opacity-70 transition-colors duration-500 ease-in-out"
          >
            Clear Spaces
          </button>
          <button
            disabled={text.length === 0}
            onClick={handleClearClick}
            className="px-4 py-2 bg-[#ff4f4f] text-black rounded-lg hover:bg-[#ff0000] disabled:opacity-70 transition-colors duration-500 ease-in-out"
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="w-full mx-auto mt-4 text-left  ">
        <h1 className="italic font-mono text-2xl my-4 md:text-xl ">
          Your Text Summary:
        </h1>
        <p className="mt-2 mx-2">
          {wordCount} words and {text.length} characters
        </p>
        <p className="mb-8 my-2 mx-2">
          {0.008 * wordCount} Minutes to read this text
        </p>
        <h1 className=" italic font-mono text-xl my-4 md:text-2xl ">
          Preview:
        </h1>
        <pre
          style={{
            color: props.mode === "dark" ? "white" : "black",
            backgroundColor: props.mode === "dark" ? "#5a5a5a" : "#d4eafa",
            borderColor: props.mode === "dark" ? "gray" : "#bee4ff",
          }}
          className="w-full border-[1px] rounded-2xl   font-light p-6 text-sm  transition-colors duration-500 ease-in-out overflow-y-auto whitespace-pre-wrap break-words"
        >
          {text.length > 0 ? text : "Nothing to preview!"}
        </pre>
      </div>
    </div>
  );
}
