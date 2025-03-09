import "./styles/LearningBenefitsContainer.css";
import BenefitBox from './styledComponents/BenefitBox';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';

export default function LearningBenefitsContainer() {
    const benefits = [
        {
            title: "атмосфера",
            contentText: [
                "Неймовірно мотивуюча та дружня",
                "Маленькі групи",
                "Регулярні зходи та спілкування"
            ],
            image: "/assets/images/benefitsBoxImages/box1.png"
        },
        {
            title: "сертифіковані викладачі",
            contentText: ["Celta teachers", "TKT teachers", "Досвід роботи з учнями різного віку та рівня"],
            image: "/assets/images/benefitsBoxImages/box2.png"
        },
        {
            title: "Зручність та Гнучкість",
            contentText: [
                "Можливість вибору формату навчання: онлайн або офлайн",
                "Онлайн заняття проводяться на платформі Zoom",
                "Офлайн заняття проводяться у нашому затишному офісі в місті Бориспіль",
                "Можливість поєднувати заняття в класі з онлайн уроками"
            ],
            image: "/assets/images/benefitsBoxImages/box3.png"
        },
        {
            title: "Додаткові сервіси",
            contentText: [
                "Безкоштовне онлайн тестування на визначення рівня",
                "Розмовні клуби для малих та дорослих",
                "Доступ до онлайн-платформи з інтерактивними матеріалами, домашніми завданнями та тестами"
            ],
            image: "/assets/images/benefitsBoxImages/box4.png"
        }
    ];

    return (
        <div className="home-learning-benefits-container">
            <div className="home-learning-benefits-title">
                <HighlightedTextWithDots colorText="#ffffff" colorBackground="#A0BFBDB2" colorDots="#A0BFBD" widthBorder={3} widthDots={10}>
                    переваги
                </HighlightedTextWithDots>
                навчання в нашій школі
            </div>
            <div className="home-learning-benefits-boxes-container">
                {benefits.map((benefit, index) => {
                    return <BenefitBox key={index} title={benefit.title} content={benefit.contentText} image={benefit.image} />
                })}
            </div>
        </div>
    );
}
