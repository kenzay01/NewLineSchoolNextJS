import "./styles/AdultsAboutLessons.css";
import ContainerAboutLessons from "../SchoolchildrenComponents/ContainerAboutLessons";
import {motion} from "framer-motion";
export default function AdultsAboutLessons() {
  const bodyCenterElements = [
    <>Формат: <span>Онлайн. Офлайн.</span></>,
    <>Рівні: <span>Starter-Upper Intermediate</span></>,
    <>Студентів у групі: <span>до 10 учнів</span></>,
    <>Студентів у міні групі: <span>до 4 учнів</span></>,
    <>Тривалість курсу: <span>Залежно від обраного рівня</span></>,
    <>Вартість у групі: <span>від ……/60хв</span></>,
    <>Вартість у міні групі: <span>від ……/60хв</span></>,
    <>Індивідуальне заняття: <span>від ……/60хв</span></>,
  ];

  const bodyBottomElements = [
    <>+ Розмовний клуб для дорослих “Inspiration Club”</>
  ];

  return (
    <div className="for-adults-about-lessons-container">
      <motion.div className="for-adults-about-lessons-info-left"
        initial={{ opacity: 0,x: -75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="for-adults-about-lessons-info-left-title-con">
          <div className="for-adults-about-lessons-info-left-title">
            Наш Фокус <br />та Мета
          </div>
          <div className="for-adults-about-lessons-info-left-img">
            <img loading="lazy" src="/assets/elements/star_rounded.png" alt="Star" />
          </div>
        </div>
        <div className="for-adults-about-lessons-info-left-body">
          <div className="for-adults-about-lessons-info-left-body-p">
            Навчити відчувати себе впевненим <br /> та вільним у спілкуванні.
          </div>
          <div className="for-adults-about-lessons-info-left-body-p">
            Кожний наш курс має певну кількість годин. Але якщо наприкінці вибраного вами рівня ви відчули, що потребуєте більше практики, ми надалі будемо працювати з вами і розробляти особливо для вас курс.
          </div>
        </div>
      </motion.div>
      <motion.div className="for-adults-about-lessons-info-right"
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContainerAboutLessons 
          bodyTitle={true} 
          bodyCenterElements={bodyCenterElements} 
          bodyBottomElements={bodyBottomElements} 
          btnHeight={50} 
          btnWidth={200} 
        />
      </motion.div>
    </div>
  );
}
