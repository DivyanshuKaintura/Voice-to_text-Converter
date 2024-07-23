import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import { useState } from "react";
import Header from './components/Header';

function App() {

  const [textToCopy, setTextToCopy] = useState();
  const [isCopied, setCopied] = useClipboard(textToCopy, {
    successDuration: 1000
  });

  //subscribe to thapa technical for more awesome videos

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  // const { resetTranscript } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <div className="container">
      <Header />
      <div className="main-content" onClick={() => setTextToCopy(transcript)}>
        {transcript}
      </div>

      <div className="btn-style">

        <button onClick={setCopied}>
          {isCopied ? 'Copied!' : 'Copy to clipboard'}
        </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        <button onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
}

export default App;
