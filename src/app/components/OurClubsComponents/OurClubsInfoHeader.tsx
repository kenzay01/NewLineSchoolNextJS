import "./styles/OurClubsInfoHeader.css";
import {motion} from "framer-motion";
export default function OurClubsInfoHeader() {
    const clubsInfoBodyText=[
        'Розмовний клуб для підлітків  “Lets talk about it”',
        'Розмовний арт-крафт клуб “Англійська майстерня Cut and Talk” для дітей 1-4 класів',
        "Розмовний клуб для дорослих “Inspiration Time”",
        "Граматичний клуб для підлітків"
    ];
    return <div className="clubs-info-header-container">
        <motion.div className="clubs-info-header-title"
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
        ><span>Ми пропонуємо розмовні клуби <br /> різних напрямків.</span> Обирайте найкращий для себе</motion.div>
        <motion.div className="clubs-info-header-body"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="clubs-info-header-body-title">Долучитись можуть і наші студенти і інші <br /> охочі практикувати мову</div>
            <div className="clubs-info-header-body-subtitle">Для наших студентів розмовні клуби безкоштовні!</div>
            <div className="clubs-info-header-body-info">
                <div className="clubs-info-header-body-info-item">Тривалість <span>90 хв</span></div>
                <div className="clubs-info-header-body-info-item">Вартість <span>330 грн</span></div>
            </div>
            <div className="clubs-info-header-body-text">
                {clubsInfoBodyText.map((text, index) => (
                    <div key={index} className="clubs-info-header-body-text-item">
                        <div className="clubs-info-header-body-text-item-img">
                            <img loading="lazy"src="/assets/elements/star_rounded.png" alt="" />
                        </div>
                        <div className="clubs-info-header-body-text-item-text">{text}</div>
                    </div>
                ))}
            </div>
        </motion.div>
    </div>
}