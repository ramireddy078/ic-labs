import React, { useState, useEffect, useRef } from "react";
import { questions } from "@/data/questions";

const Quiz = ({ moduleIndex, chapterIndex, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingComplete, setRecordingComplete] = useState(false);
  const [transcript, setTranscript] = useState("");

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (showResult) return;

    const timer = setTimeout(() => {
      handleAnswer(transcript);
    }, 30000); // 30 seconds

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000); // Update every second

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [currentQuestion, showResult, transcript]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(transcript);
    }
  }, [timeLeft]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const startRecording = () => {
    setIsRecording(true);
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setTranscript(transcript);
    };

    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setRecordingComplete(true);
    }
  };

  const handleToggleRecording = () => {
    setIsRecording(!isRecording);
    if (!isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  };

  const handleAnswer = (userAnswer) => {
    if (
      userAnswer
        .toLowerCase()
        .includes(questions[currentQuestion].answer.toLowerCase())
    ) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(30);
      setTranscript("");
      setRecordingComplete(false);
    } else {
      setShowResult(true);
      onComplete(score + 1 === questions.length);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-700 w-screen bg-opacity-80 flex justify-center items-center z-50">
      {showResult ? (
        <div>
          {score === questions.length ? (
            <div>
              <h1>You passed the quiz!</h1>
              <p>
                Score: {score} out of {questions.length}
              </p>
            </div>
          ) : (
            <div className="text-center bg-black p-5">
              <h1 className="text-red-500 font-[500] capitalize">
                You failed the quiz. Try again!
              </h1>
              <p className="text-red-500 font-[500] capitalize">
                You got {score} out of {questions.length} questions
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl w-full">
            <div className="flex flex-col gap-3">
              <div className="question">
                {questions[currentQuestion].question}
              </div>
              <div className="flex flex-col justify-start items-start gap-3">
                <div className="timer">Time left: {timeLeft} seconds</div>
                <div>
                  <button
                    onClick={handleToggleRecording}
                    className={`border p-2 rounded-lg ${
                      isRecording ? "border-red-800" : "border-blue-800"
                    }`}
                  >
                    {isRecording ? (
                      <svg
                        className="h-12 w-12 text-white bg-red-800 rounded-full p-1"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="white"
                          d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 256 256"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-white bg-blue-800 rounded-full p-1"
                      >
                        <path
                          fill="currentColor" // Change fill color to the desired color
                          d="M128 176a48.05 48.05 0 0 0 48-48V64a48 48 0 0 0-96 0v64a48.05 48.05 0 0 0 48 48ZM96 64a32 32 0 0 1 64 0v64a32 32 0 0 1-64 0Zm40 143.6V232a8 8 0 0 1-16 0v-24.4A80.11 80.11 0 0 1 48 128a8 8 0 0 1 16 0a64 64 0 0 0 128 0a8 8 0 0 1 16 0a80.11 80.11 0 0 1-72 79.6Z"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <p>{transcript}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
