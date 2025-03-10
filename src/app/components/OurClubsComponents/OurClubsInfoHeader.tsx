import "./styles/OurClubsInfoHeader.css";
export default function OurClubsInfoHeader() {
    const clubsInfoBodyText=[
        'Розмовний клуб для підлітків  “Lets talk about it”',
        'Розмовний арт-крафт клуб “Англійська майстерня Cut and Talk” для дітей 1-4 класів',
        "Розмовний клуб для дорослих “Inspiration Time”",
        "Граматичний клуб для підлітків"
    ];
    return <div className="clubs-info-header-container">
        <div className="clubs-info-header-title"><span>Ми пропонуємо розмовні клуби <br /> різних напрямків.</span> Обирайте <br /> найкращий для себе</div>
        <div className="clubs-info-header-body">
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
        </div>
    </div>
}