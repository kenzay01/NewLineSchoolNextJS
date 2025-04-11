"use client";

import { useState } from "react";
import "./TestItem.css";
import { useTest } from "../../context/TestContext";
export default function TestItem({
  id,
  question,
  image,
  options,
  answer,
  number,
  setAnswer,
  testId,
  pickedAnswer,
  isCorrect,
}: {
  id: number;
  question: string;
  image: string | null;
  options: string[] | null;
  answer: string | number;
  number: number;
  setAnswer: (
    testId: string,
    questionId: number,
    answer: string | number
  ) => void;
  testId: string;
  pickedAnswer: string | number | null;
  isCorrect?: boolean;
}) {
  const { testCompleted } = useTest();
  const [selectedOption, setSelectedOption] = useState<number | null>(
    typeof pickedAnswer === "number" ? pickedAnswer : null
  );
  const [writingAnswer, setWritingAnswer] = useState<string>(
    typeof pickedAnswer === "string" && pickedAnswer !== "noAnswer"
      ? pickedAnswer
      : ""
  );

  const isNoAnswer = pickedAnswer === "noAnswer";
  const isCheckingAnswer = testCompleted(testId);
  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
    setAnswer(testId, id, index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWritingAnswer(e.target.value);
    setAnswer(testId, id, e.target.value.trim().toLowerCase());
  };

  return (
    <div
      className={`test-item-container ${isNoAnswer ? "no-answer" : ""} ${
        testCompleted(testId) ? (isCorrect ? "correct" : "incorrect") : ""
      }`}
    >
      <div className="test-item-score">1 бал</div>
      <div className="test-item-question-container">
        <div>{number}.</div>
        {!image && (
          <div
            dangerouslySetInnerHTML={{ __html: question }}
            className="test-item-question"
          ></div>
        )}
      </div>

      {image && (
        <div className="test-item-img-container">
          <div className="test-item-img">
            <img loading="lazy" src={image} alt="" />
          </div>
        </div>
      )}
      {image && (
        <div
          dangerouslySetInnerHTML={{ __html: question }}
          className="test-item-question-under-image"
        ></div>
      )}
      <div className="test-item-options">
        {typeof answer === "number" && options ? (
          options.map((option, index) => (
            <label key={index} className="test-item-option">
              <input
                type="radio"
                name={`question-${id}`}
                value={index}
                checked={selectedOption === index}
                onChange={() => handleOptionSelect(index)}
              />
              {option}
            </label>
          ))
        ) : (
          <input
            type="text"
            className="test-item-input"
            placeholder="Введіть відповідь..."
            value={writingAnswer}
            onChange={(e) => handleInputChange(e)}
          />
        )}
      </div>
      {isCheckingAnswer && !isCorrect ? (
        <div className="correct-answer">
          Правильна відповідь:{" "}
          <span>
            {typeof answer === "number" ? options && options[answer] : answer}
          </span>
        </div>
      ) : null}
    </div>
  );
}
