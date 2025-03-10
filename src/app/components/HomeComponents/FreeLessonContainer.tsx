"use client";
import "./styles/FreeLessonContainer.css";
import { useEffect, useState } from "react";
import InputFreeLesson from "./styledComponents/InputFreeLesson";
import { emailSendFunc } from "../../funcs/emailSend";
import Toast from "../Toast";

export default function FreeLessonContainer({
  paddingTop = 75,
}: {
  paddingTop?: number;
}) {
  const serviceId = process.env.NEXT_PUBLIC_DERYS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_DERYS_TEMPLATE_LESSONS_ID;
  const publicKey = process.env.NEXT_PUBLIC_DERYS_PUBLIC_KEY;
  const [inputValueName, setInputValueName] = useState<string>("");
  const [inputValuePhoneNumber, setInputValuePhoneNumber] =
    useState<string>("");
  const [inputValueEmail, setInputValueEmail] = useState<string>("");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [errors, setErrors] = useState<{
    name: boolean;
    phone: boolean;
    email: boolean;
  }>({
    name: false,
    phone: false,
    email: false,
  });
  const [isToast, setIsToast] = useState<string>("");


  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      inputValueName.trim() === "" ||
      inputValuePhoneNumber.trim() === "" ||
      inputValueEmail.trim() === "" ||
      inputValuePhoneNumber.length < 17
    ) {
      setErrors({
        name: inputValueName.trim() === "",
        phone: inputValuePhoneNumber.trim() === "" || inputValuePhoneNumber.length < 17,
        email: inputValueEmail.trim() === "",
      });
      return;
    }
    const resultMessage = `📋 Заявка на безкоштовний урок
👤 Ім'я: ${inputValueName}
📞 Телефон: ${inputValuePhoneNumber}
📧 Email: ${inputValueEmail}`;

    const templateParams = {
      user_name: inputValueName,
      message: resultMessage,
    };

    const response = await emailSendFunc(
      templateParams,
      serviceId,
      templateId,
      publicKey
    );

    if (response) {
      setInputValueName("");
      setInputValuePhoneNumber("");
      setInputValueEmail("");
      setIsToast("Форма успішно відправлена!");
    } else {
      setIsToast("Помилка при відправці форми!");
      return;
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
    const updateLayout = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
}
  }, []);

  return (
    <>
      <div
        className="home-free-lessons-container"
        style={{ paddingTop: paddingTop }}
      >
        <div className="home-free-lessons-title">
          NEW LINE SCH{isMobile ? <br /> : ""}OOL
        </div>
        <div className="home-free-lessons-content">
          <div className="spin-arrow">
            <img loading="lazy" src="/assets/elements/spin_arrow.png" alt="" />
          </div>
          <div className="home-free-lessons-text">отримай безкоштовний урок!</div>
          <form
            className="home-free-lessons-form"
            onSubmit={sendEmail}
          >
            <div className="home-free-lessons-form-inputs">
              <InputFreeLesson
                inputValue={inputValueName}
                setInputValue={setInputValueName}
                isMobile={isMobile}
                placeholder="ім'я"
                type="text"
                hasError={errors.name}
                setError={(value) => setErrors({ ...errors, name: value })}
              />
              <InputFreeLesson
                inputValue={inputValuePhoneNumber}
                setInputValue={setInputValuePhoneNumber}
                isMobile={isMobile}
                placeholder="телефон"
                type="tel"
                hasError={errors.phone}
                setError={(value) => setErrors({ ...errors, phone: value })}
              />
              <InputFreeLesson
                inputValue={inputValueEmail}
                setInputValue={setInputValueEmail}
                isMobile={isMobile}
                placeholder="пошта"
                type="email"
                hasError={errors.email}
                setError={(value) => setErrors({ ...errors, email: value })}
              />
            </div>
            <button className="home-free-lessons-form-btn">ВІДПРАВИТИ</button>
          </form>
        </div>
      </div>
      <div style={{ height: 100, backgroundColor: "#ffffff" }}></div>
      {isToast && <Toast message={isToast} onClose={() => { setIsToast("") }} />}
    </>
  );
}
