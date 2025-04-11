"use client"; // цей рядок необхідно додати на початку компонента

import "../../styles/TestStartingPage.css";
import { useState, useEffect } from "react";
import InputFreeLessong from "../../components/HomeComponents/styledComponents/InputFreeLesson";
import { useRouter, useParams } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import "../../styles/TestStartingPage.css";
import {
  TESTS,
  TestKeys,
  testTitles,
  test_descriptions,
} from "../../dict/test";
import { Fragment } from "react";
import TestItem from "../../components/TestComponents/TestItem";
import { useTest } from "../../context/TestContext";
import Toast from "../../components/Toast";
import { emailSendFunc } from "../../funcs/emailSend";
import { useSearchParams } from "next/navigation";

// Створюємо функцію для визначення рівня знань залежно від результатів тесту
const getEnglishLevel = (testId: string, correctAnswers: number) => {
  switch (testId) {
    case "test_1": // Англійська для дітей (1-4 класи)
      if (correctAnswers <= 14) {
        return "Starters (Beginner/Початковий) - Pre-A1";
      } else if (correctAnswers <= 29) {
        return "Movers (Elementary) - A1";
      } else {
        return "Flyers (Pre-Intermediate) - A2";
      }
    case "test_2": // Англійська для підлітків (5-9 класи)
      if (correctAnswers <= 9) {
        return "Нижче A1";
      } else if (correctAnswers <= 19) {
        return "A1 (Beginner)";
      } else if (correctAnswers <= 29) {
        return "A2 (Elementary)";
      } else if (correctAnswers <= 35) {
        return "A2+ (Pre-Intermediate)";
      } else {
        return "B1+ (Intermediate)";
      }
    case "test_3": // Англійська для підлітків (10-11 клас)
      if (correctAnswers <= 9) {
        return "Нижче A1";
      } else if (correctAnswers <= 19) {
        return "A1 (Beginner)";
      } else if (correctAnswers <= 29) {
        return "A2 (Pre-Intermediate)";
      } else if (correctAnswers <= 35) {
        return "B1 (Intermediate)";
      } else {
        return "B2 (Upper Intermediate)";
      }
    case "test_4": // Англійська для дорослих (Adults 18+)
      if (correctAnswers <= 14) {
        return "A1 (Beginner)";
      } else if (correctAnswers <= 24) {
        return "A2 (Pre-Intermediate)";
      } else if (correctAnswers <= 34) {
        return "B1 (Intermediate)";
      } else if (correctAnswers <= 44) {
        return "B2 (Upper Intermediate)";
      } else {
        return "C1 (Advanced)";
      }
    default:
      return "Рівень не визначено";
  }
};

export default function TestStartingPage() {
  const serviceDerysId = process.env.NEXT_PUBLIC_DERYS_SERVICE_ID;
  const templateDerysId = process.env.NEXT_PUBLIC_DERYS_TEMPLATE_TEST_ID;
  const publicKeyDerys = process.env.NEXT_PUBLIC_DERYS_PUBLIC_KEY;

  const serviceFletId = process.env.NEXT_PUBLIC_FLET_SERVICE_ID;
  const templateFletId = process.env.NEXT_PUBLIC_FLET_TEMPLATE_TEST_ID;
  const publicKeyFlet = process.env.NEXT_PUBLIC_FLET_PUBLIC_KEY;
  const router = useRouter();
  const params = useParams();
  const testId = params.test_id as string;
  const testTitleStarting: string | undefined = testTitles.find(
    (item) => item.id === testId
  )?.title;
  const testDescription = test_descriptions[testId as TestKeys];
  const [toast, setToast] = useState("");
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });

  const {
    answers,
    setAnswer,
    setTestId,
    setUserInfo,
    continueTest,
    setStartTestTime,
    setEndTestTime,
    testCompleted,
    setFinalAnswer,
  } = useTest();

  const [isRegistrated, setIsRegistrated] = useState(
    !!answers[testId]?.userInfo?.name || false
  );
  const [inputBlocked, setInputBlocked] = useState(
    !!answers[testId]?.userInfo?.name || false
  );
  const [inputValueName, setInputValueName] = useState(
    answers[testId]?.userInfo?.name || ""
  );
  const [inputValuePhoneNumber, setInputValuePhoneNumber] = useState(
    answers[testId]?.userInfo?.phone || ""
  );
  const [inputValueEmail, setInputValueEmail] = useState(
    answers[testId]?.userInfo?.email || ""
  );
  const [checkedAnswers, setCheckedAnswers] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [englishLevel, setEnglishLevel] = useState("");

  const getFinalTime = (start: number | null, end: number | null) => {
    if (!start || !end) return "00:00:00";
    const timeInTicks = end - start;
    const time = timeInTicks / 1000;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }:${seconds < 10 ? "0" + seconds : seconds}`;
  };

  useEffect(() => {
    if (!continueTest(testId)) {
      setTestId(testId);
    }
  }, [testId]);

  const handleClickStart = () => {
    const isNameEmpty = inputValueName.trim() === "";
    const isPhoneEmpty =
      inputValuePhoneNumber.trim() === "" || inputValuePhoneNumber.length < 17;
    const isEmailEmpty = inputValueEmail.trim() === "";

    setErrors({
      name: isNameEmpty,
      phone: isPhoneEmpty,
      email: isEmailEmpty,
    });

    if (isNameEmpty || isPhoneEmpty || isEmailEmpty) {
      return;
    }

    setStartTestTime(testId);
    setInputBlocked(true);
    setUserInfo(testId, {
      name: inputValueName,
      phone: inputValuePhoneNumber,
      email: inputValueEmail,
    });
    setIsRegistrated(true);
  };

  const [isChecking, setIsChecking] = useState(false);

  const handleClickFinish = async () => {
    let noAnswer = false;
    let correctAnswers = 0;
    testContent.forEach((item) => {
      const userAnswer = answers[testId]?.[item.id];
      if (userAnswer === undefined || userAnswer === "") {
        noAnswer = true;
        setAnswer(testId, item.id, "noAnswer");
      }
    });
    const allIsAnswered = testContent.every(
      (item) => answers[testId]?.[item.id] !== "noAnswer"
    );

    if (noAnswer || !allIsAnswered) {
      setToast("Ви не відповіли на всі питання");
      return;
    }
    testContent.forEach((item) => {
      const userAnswer = answers[testId]?.[item.id];
      if (userAnswer !== item.answer) {
        setFinalAnswer(testId, item.id, false);
      } else {
        setFinalAnswer(testId, item.id, true);
        correctAnswers++;
      }
    });
    setEndTestTime(testId);

    const level = getEnglishLevel(testId, correctAnswers);
    setEnglishLevel(level);

    setToast("Лист з результатами тесту відправлено на вашу пошту");
    const endTime = Date.now();

    const correctAnswersEmail = correctAnswers;
    const totalQuestions = TESTS[testId as TestKeys].length;
    const timeTaken = getFinalTime(answers[testId]?.startTestTime, endTime);

    const resultMessage = `
    📋 Тест: ${testTitleStarting?.split("<br />").join(" ")}
    ✅ Правильних відповідей: ${correctAnswersEmail}/${totalQuestions}
    🎓 Рівень знань: ${level}
    ⏳ Час проходження: ${timeTaken}
    `;
    console.log(resultMessage);

    const adminTemplateParams = {
      user_name: inputValueName,
      user_phone: inputValuePhoneNumber,
      user_email: inputValueEmail,
      test_result: resultMessage,
    };

    const isAdminMailSent = await emailSendFunc(
      adminTemplateParams,
      serviceDerysId,
      templateDerysId,
      publicKeyDerys
    );

    if (isAdminMailSent) {
      const userTemplateParams = {
        user_name: inputValueName,
        user_email: inputValueEmail,
        test_result: resultMessage,
      };

      await emailSendFunc(
        userTemplateParams,
        serviceFletId,
        templateFletId,
        publicKeyFlet
      );
    }
  };

  useEffect(() => {
    if (isChecking) {
      setIsChecking(false);
      handleClickFinish();
    }
  }, [answers]);

  const handleClickCheckAnswers = () => {
    setCheckedAnswers(true);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const updateLayout = () => {
        if (window.innerWidth < 768) {
          setIsMobile(true);
        } else {
          setIsMobile(false);
        }
      };
      window.addEventListener("resize", updateLayout);
      updateLayout(); // Викликаємо відразу для встановлення початкового стану
      return () => window.removeEventListener("resize", updateLayout);
    }
  }, []);

  // Обчислення рівня англійської під час завершення тесту
  useEffect(() => {
    if (testCompleted(testId) && answers[testId]?.userAnswersCount?.correct) {
      const correctAnswersCount =
        answers[testId]?.userAnswersCount.correct.length;
      const level = getEnglishLevel(testId, correctAnswersCount);
      setEnglishLevel(level);
    }
  }, [testId, answers, testCompleted]);

  const testContent = TESTS[testId as TestKeys];

  return (
    <div className="test-starting-page">
      <div className="test-starting-page-btn-return-container">
        <button
          className="tests-page-btn-return"
          onClick={() => {
            router.back();
          }}
        >
          <FaArrowLeft className="tests-page-btn-return-icon" /> повернутися
          назад
        </button>
      </div>
      <div className="test-starting-page-test-container">
        <div className="test-starting-page-test-container-header">
          <div className="test-starting-page-test-container-header-title">
            {testTitleStarting?.split("<br />").map((item: string) => (
              <Fragment key={item}>
                {item}
                <br />
              </Fragment>
            ))}
          </div>
          {!testCompleted(testId) ? (
            <div
              className="test-starting-page-test-container-header-description"
              dangerouslySetInnerHTML={{ __html: testDescription }}
            ></div>
          ) : null}
          <div className="test-starting-page-test-container-registation">
            <div className="test-starting-page-test-container-attention">
              {answers[testId]?.startTestTime === null
                ? `Введіть своє ім'я та контакти, щоб отримати результат тесту на
              пошту`
                : testCompleted(testId)
                ? "Тест завершено"
                : "Можете почати тест"}
            </div>
            <div className="test-starting-page-test-container-form-inputs">
              <InputFreeLessong
                inputValue={inputValueName}
                setInputValue={setInputValueName}
                isMobile={isMobile}
                placeholder="ім'я"
                type="text"
                hasError={errors.name}
                setError={(value) => setErrors({ ...errors, name: value })}
                inputBlocked={inputBlocked}
              />
              <InputFreeLessong
                inputValue={inputValuePhoneNumber}
                setInputValue={setInputValuePhoneNumber}
                isMobile={isMobile}
                placeholder="телефон"
                type="tel"
                hasError={errors.phone}
                setError={(value) => setErrors({ ...errors, phone: value })}
                inputBlocked={inputBlocked}
              />
              <InputFreeLessong
                inputValue={inputValueEmail}
                setInputValue={setInputValueEmail}
                isMobile={isMobile}
                placeholder="пошта"
                type="email"
                hasError={errors.email}
                setError={(value) => setErrors({ ...errors, email: value })}
                inputBlocked={inputBlocked}
              />
            </div>
          </div>
          {testCompleted(testId) ? (
            <div className="test-page-finish-container">
              <div className="test-page-finish-container-time">
                Загальний час проходження:{" "}
                {getFinalTime(
                  answers[testId]?.startTestTime,
                  answers[testId]?.endTestTime
                )}
              </div>
              <div className="test-page-finish-container-count-answers">
                <div className="test-page-finish-container-count-answers-correct">
                  Правильних відповідей:{" "}
                  {answers[testId]?.userAnswersCount.correct.length}/
                  {TESTS[testId as TestKeys].length}
                </div>
                <div className="test-page-finish-container-level">
                  Ваш рівень англійської: <strong>{englishLevel}</strong>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        {!checkedAnswers ? (
          !testCompleted(testId) ? (
            isRegistrated && continueTest(testId) ? (
              <div className="test-starting-page-test-list">
                {testContent.map((item, index) => (
                  <TestItem
                    key={index}
                    number={index + 1}
                    id={item.id}
                    question={item.question}
                    image={item.image}
                    options={item.options}
                    answer={item.answer}
                    setAnswer={setAnswer}
                    testId={testId}
                    pickedAnswer={answers[testId]?.[item.id]}
                  />
                ))}
              </div>
            ) : null
          ) : null
        ) : testCompleted(testId) && isRegistrated ? (
          <div className="test-starting-page-test-list">
            {testContent.map((item, index) => (
              <TestItem
                key={index}
                number={index + 1}
                id={item.id}
                question={item.question}
                image={item.image}
                options={item.options}
                answer={item.answer}
                setAnswer={setAnswer}
                testId={testId}
                isCorrect={answers[testId]?.userAnswersCount.correct.includes(
                  item.id
                )}
                pickedAnswer={answers[testId]?.[item.id]}
              />
            ))}
          </div>
        ) : null}
        {!checkedAnswers ? (
          <div className="test-starting-page-test-container-form-btn-container">
            <button
              className="test-starting-page-test-container-form-btn"
              onClick={() => {
                isRegistrated
                  ? testCompleted(testId)
                    ? handleClickCheckAnswers()
                    : handleClickFinish()
                  : handleClickStart();
              }}
            >
              {isRegistrated
                ? testCompleted(testId)
                  ? "Подивитися правильні відповіді"
                  : "Закінчити тест"
                : "Почати тест"}
            </button>
          </div>
        ) : null}
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}
