import './styles/LessonsDescriptionContainer.css'; // Використовуємо CSS Modules
import HighlightedText from './styledComponents/HighlightedText';
import Image from 'next/image'; // Імпортуємо Image з next/image для оптимізації зображень
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';
export default function LessonsDescriptionContainer() {
    const listOfDescriptionText = [
        <><HighlightedText colorBack="#FDECB0">Навчання проходить у процесі спілкування,</HighlightedText> тому говорити англійською ви точно навчитесь</>,
        <><HighlightedText colorBack="#A0BFBD80">Граматику та лексику вивчаємо більш практично</HighlightedText> ніж теоритично і дуууже креативно</>,
        <><HighlightedText colorBack="#AE88AD80">Групові заняття</HighlightedText> (8-10 учнів)</>,
        <><HighlightedText colorBack="#FDECB0">Міні-групи</HighlightedText> (3-4)</>,
        <>Iндивідуальні заняття</>,
        <><HighlightedText colorBack="#AE88AD80">Відстежуємо прогрес</HighlightedText> за допомогою конструктивного фідбеку та тестів</>,
        <><HighlightedText colorBack="#A0BFBD80">Офлайн</HighlightedText> та <HighlightedText colorBack="#A0BFBD80">онлайн</HighlightedText> формати</>,
        <><HighlightedText colorBack="#FDECB0">Креативні домашки,</HighlightedText> які мають сенс</>,
        <><HighlightedText colorBack="#A0BFBD80">Використовуємо ШI</HighlightedText> (штучний інтелект) для персоналізованого навчання та швидкого прогресу!</>,
        <>Використовуємо <HighlightedText colorBack="#AE88AD80">унікальні техніки запам’ятовування</HighlightedText></>,
    ];

    return (
        <div className="home-lessons-description-container">
            <div className="home-lessons-description-title">як проходять {" "}<HighlightedTextWithDots
                        colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
                        colorText="#ffffff"
                        widthDots={8}
                        widthBorder={3}
                      >
                         уроки
                      </HighlightedTextWithDots></div>
            <div className="home-lessons-description-content">
                <div className="home-lessons-description-text-container">
                    {listOfDescriptionText.map((text, index) => (
                        <div key={index} className="home-lessons-description-text-item">
                            <div className="home-lessons-description-number">{index + 1}</div>
                            <div className="home-lessons-description-text">{text}</div>
                        </div>
                    ))}
                </div>
                <div className="home-lessons-description-img">
                    {/* Використовуємо компонент Image для оптимізації зображень */}
                    <Image
                        src="/assets/images/lessonsDescription.jpg" // Шлях до зображення відносно папки public
                        alt="Lessons Description"
                        layout="responsive"
                        width={500} // Встановлюємо ширину
                        height={300} // Встановлюємо висоту
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}

