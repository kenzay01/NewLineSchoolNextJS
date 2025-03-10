"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AnswersType = {
  [testId: string]: {
    [questionId: number]: string | number;
    userInfo: { name: string; phone: string; email: string };
    userAnswersCount: { correct: number[]; incorrect: number[] };
    startTestTime: number | null;
    endTestTime: number | null;
  };
};

interface TestContextType {
  answers: AnswersType;
  setAnswer: (testId: string, questionId: number, answer: string | number) => void;
  setTestId: (testId: string) => void;
  setUserInfo: (testId: string, userInfo: { name: string; phone: string; email: string }) => void;
  continueTest: (testId: string) => boolean;
  setStartTestTime: (testId: string) => void;
  setEndTestTime: (testId: string) => void;
  testCompleted: (testId: string) => boolean;
  setFinalAnswer: (testId: string, questionId: number, correct: boolean) => void;
}

const TestContext = createContext<TestContextType | undefined>(undefined);

export function TestProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AnswersType>({});

  const setAnswer = (testId: string, questionId: number, answer: string | number) => {
    setAnswers((prev) => ({
      ...prev,
      [testId]: {
        ...prev[testId],
        [questionId]: answer,
      },
    }));
  };

  const setTestId = (testId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [testId]: {
        userInfo: { name: "", phone: "", email: "" },
        userAnswersCount: { correct: [], incorrect: [] },
        startTestTime: null,
        endTestTime: null,
      },
    }));
  };

  const setUserInfo = (testId: string, userInfo: { name: string; phone: string; email: string }) => {
    setAnswers((prev) => ({
      ...prev,
      [testId]: {
        ...prev[testId],
        userInfo,
      },
    }));
  };

  const setStartTestTime = (testId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [testId]: {
        ...prev[testId],
        startTestTime: Date.now(),
      },
    }));
  };

  const setEndTestTime = (testId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [testId]: {
        ...prev[testId],
        endTestTime: Date.now(),
      },
    }));
  };

  const continueTest = (testId: string) => {
    const test = answers[testId];
    if (!test) return false;
    const { userInfo } = test;
    return userInfo && userInfo.name.trim() !== "" && userInfo.phone.trim() !== "" && userInfo.email.trim() !== "";
  };

  const testCompleted = (testId: string) => {
    const test = answers[testId];
    if (!test) return false;
    return test.endTestTime !== null;
  };

  const setFinalAnswer = (testId: string, questionId: number, correct: boolean) => {
    const test = answers[testId];
    if (!test) return;

    setAnswers((prev) => ({
      ...prev,
      [testId]: {
        ...prev[testId],
        userAnswersCount: {
          ...prev[testId].userAnswersCount,
          [correct ? "correct" : "incorrect"]: [...prev[testId].userAnswersCount[correct ? "correct" : "incorrect"], questionId],
        },
      },
    }));
  };

  return (
    <TestContext.Provider
      value={{
        answers,
        setAnswer,
        setTestId,
        setUserInfo,
        continueTest,
        setStartTestTime,
        setEndTestTime,
        testCompleted,
        setFinalAnswer,
      }}
    >
      {children}
    </TestContext.Provider>
  );
}

export function useTest() {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTest must be used within a TestProvider");
  }
  return context;
}
