import "../BlogPage.css";
import Image from "next/image";

export default function Blog2Page() {
    return (
        <div className="blog-page">
            <div className="blog-container">
                <div className="blog-header-image">
                    <Image 
                        src="/assets/blog/blog2/Picture1.jpg" 
                        alt="Як перестати боятися говорити англійською"
                        width={1200}
                        height={600}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h1 className="blog-title">Як перестати боятися говорити англійською: поради 2025 року</h1>
                <div className="blog-intro">
                    <p>Мовний бар'єр — це психологічна чи практична перешкода, яка заважає людині вільно спілкуватися іноземною мовою, навіть якщо вона має достатній рівень знань.</p>
                    <p>Людина ніби знає слова, граматику і навіть може зрозуміти співрозмовника, але сказати щось у відповідь — складно. Знайомо? 😉</p>
                    <p>Мовний бар'єр — не про знання, а про впевненість.</p>
                </div>

                <div className="blog-section">
                    <h2>Причини виникнення мовного бар'єру</h2>
                    <div className="blog-image left">
                        <Image 
                            src="/assets/blog/blog2/Picture2.png" 
                            alt="Причини мовного бар'єру"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Страх зробити помилку</p>
                        <p>«А що як я скажу щось не так, і всі сміятимуться?..»</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Сором'язливість або невпевненість у собі</p>
                        <p>Часто це проблема інтровертів або тих, хто боїться оцінювання.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Низький словниковий запас</p>
                        <p>Людина просто не знає, як сказати те, що хоче.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Переклад "у голові" з рідної мови</p>
                        <p>Замість вільного говоріння — внутрішній Google Translate 🧠💭</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Негативний досвід у минулому</p>
                        <p>Наприклад, у школі вчитель насварив за помилку — і ця ситуація "застрягла".</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>Як подолати мовний бар'єр: техніки, лайфхаки, вправи</h2>
                    <div className="blog-image right">
                        <Image 
                            src="/assets/blog/blog2/Picture3.png" 
                            alt="Техніки подолання бар'єру"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">1. 🗣️ Говорити щодня — навіть з самим собою</p>
                        <p>Встанови правило: 5–10 хвилин говорити англійською на будь-яку тему — вголос або на диктофон.</p>
                        <p>Записуй себе, слухай, фіксуй прогрес.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">2. 🎭 Техніка рольових ігор (Role-play)</p>
                        <p>З другом або викладачем розігруйте сцени: замовлення в кафе, інтерв'ю, подорож.</p>
                        <p>Це весело і дуже ефективно!</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">3. 🎧 Метод Shadowing — повторюй за носієм</p>
                        <p>Слухай короткий діалог або монолог і повторюй одразу за диктором.</p>
                        <p>Не перекладай! Просто копіюй інтонацію, ритм і вимову.</p>
                        <p>Це тренує м'язи мовлення та зменшує страх перед говорінням.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">4. 💬 Почни з фраз, а не окремих слів (Chunking)</p>
                        <p>Замість того, щоб вивчати слово "decision", вчи одразу фразу: "make a decision".</p>
                        <p>Це полегшує автоматичне говоріння — без обдумування граматики.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">5. 🧠 Мнемоніка для впевненості</p>
                        <p>Вигадуй кумедні образи або історії для слів, які важко запам'ятати.</p>
                        <p>Наприклад: "embarrassed" — уяви Емілі, яка впала на траву і покрилася висипкою (grass + rash) → embar-rash-ed.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">6. 🤝 Говори з реальними людьми (або штучним інтелектом 😏)</p>
                        <p>Платформи для мовного обміну: Tandem, HelloTalk, Speaky.</p>
                        <p>Використовуй ChatGPT чи інші AI-боти для розмовної практики англійською на різні теми.</p>
                        <p>Це безпечно, безоцінково і без стресу.</p>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">7. 🧘‍♀️ Попрацюй над емоційною складовою</p>
                        <p>Постав собі запитання: Чому я боюся говорити?</p>
                        <p>Попрацюй з цим страхом. Можеш навіть написати 3–5 фраз, які скажеш, якщо раптом розгубишся:</p>
                        <ul>
                            <li>"Sorry, can you repeat that?"</li>
                            <li>"Give me a moment to think."</li>
                            <li>"I'm learning English, so I might make mistakes."</li>
                        </ul>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>Маленькі перемоги = велике зростання</h2>
                    <div className="technique-item">
                        <p>Не став собі за мету «говорити ідеально». Краще — говорити живо, емоційно, чесно, навіть з помилками. Спілкування — це не іспит, а міст між людьми 🌉</p>
                        <p>Пам'ятай:</p>
                        <ul>
                            <li>💬 Ти не повинен бути ідеальним, щоб бути зрозумілим.</li>
                            <li>🧩 Мова — це навичка, яку здобувають через практику, а не просто знання.</li>
                        </ul>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>Підсумок</h2>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Що заважає</p>
                        <ul>
                            <li>Страх зробити помилку</li>
                            <li>Сором'язливість</li>
                            <li>Мало лексики</li>
                            <li>Брак практики</li>
                            <li>Переклад у голові</li>
                        </ul>
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Як допомогти</p>
                        <ul>
                            <li>Говорити з друзями або ботами</li>
                            <li>Записувати голос і слухати</li>
                            <li>Вчити фрази, не окремі слова</li>
                            <li>Щоденні міні-діалоги, shadowing</li>
                            <li>Думати англійською, chunking</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 