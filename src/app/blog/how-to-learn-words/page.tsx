import "../BlogPage.css";
import Image from "next/image";

export default function Blog1Page() {
    return (
        <div className="blog-page">
            <div className="blog-container">
                <div className="blog-header-image">
                    <Image 
                        src="/assets/blog/blog1/Picture1.jpg" 
                        alt="Як легко вивчати нові слова англійської"
                        width={600}
                        height={600}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <h1 className="blog-title">Як легко вивчати нові слова англійської — топ 8 технік</h1>
                <div className="blog-intro">
                    <p>Нова лексика здається вам незрозумілим набором літер? Як все розпізнати та запам'ятати?</p>
                    <p>Ось найактуальніші та найефективніші техніки запам'ятовування слів при вивченні іноземної мови в 2025 році:</p>
                </div>

                <div className="blog-section">
                    <h2>1. Візуалізація та асоціації</h2>
                    <div className="blog-image left">
                        <Image 
                            src="/assets/blog/blog1/Picture2.jpg" 
                            alt="Візуалізація та асоціації"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Метод картинок</p>
                        <p>– уявляй слово у вигляді образу. Наприклад, слово <em>"bark"</em> (гавкіт) можна уявити як собаку, що гавкає.</p>
                    </div>
                    <div className="blog-image right">
                        <Image 
                            src="/assets/blog/blog1/Picture3.jpg" 
                            alt="Сторітелінг"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Сторітелінг</p>
                        <p>– придумай коротку історію зі словами, які хочеш запам'ятати.</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>2. Метод Лексичних Сетів</h2>
                    <div className="blog-image left">
                        <Image 
                            src="/assets/blog/blog1/Picture4.png" 
                            alt="Метод Лексичних Сетів"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Тематичне групування</p>
                        <p>– запам'ятовуй слова не хаотично, а групами за темами (наприклад, "їжа" – <em>apple, banana, bread, cheese</em>).</p>
                    </div>
                    <div className="blog-image right">
                        <Image 
                            src="/assets/blog/blog1/Picture5.png" 
                            alt="Групування за коренями"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Групування за коренями</p>
                        <p>– об'єднувати слова за коренями (<em>write – writer – writing</em>), можна використати spider diagram.</p>
                    </div>
                    <div className="blog-image left">
                        <Image 
                            src="/assets/blog/blog1/Picture7.png" 
                            alt="Wordcloud"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Wordcloud</p>
                        <p>– створіть хмару будь-якої форми зі слів, які вивчаєте на різні теми, наприклад - vegetables.</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>3. Техніка Mnemonics (Мнемоніка)</h2>
                    <div className="blog-image right">
                        <Image 
                            src="/assets/blog/blog1/Picture8.png" 
                            alt="Техніка Mnemonics"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Створення асоціацій</p>
                        <p>– створюй смішні або дивні асоціації.</p>
                        <p>Наприклад, слово <em>"abandon"</em> (залишати) можна запам'ятати через "АБАНДон" – уяви, як хтось покинув банку в магазині.</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>4. 💬 Використання контексту (Chunking & Collocations)</h2>
                    <div className="blog-image left">
                        <Image 
                            src="/assets/blog/blog1/Picture9.jpg" 
                            alt="Використання контексту"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Контекстне навчання</p>
                        <p>– запам'ятовуй слова не окремо, а в реченнях або фразах (<em>make a decision</em>, а не просто <em>decision</em>).</p>
                        <p>– читання книг і перегляд фільмів англійською з субтитрами дає природний контекст.</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>5. 🎧 Shadowing (Тіньовий метод)</h2>
                    <div className="blog-image right">
                        <Image 
                            src="/assets/blog/blog1/Picture10.jpg" 
                            alt="Shadowing метод"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Імітація носіїв мови</p>
                        <p>– повторюй слова та фрази за носіями мови, імітуючи їхню вимову, інтонацію та ритм.</p>
                        <p>– допомагає не тільки запам'ятати слова, а й покращити вимову.</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>6. Гейміфікація та інтерактивні методи</h2>
                    <div className="blog-image left">
                        <Image 
                            src="/assets/blog/blog1/Picture11.jpg" 
                            alt="Гейміфікація"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Ігрові методи</p>
                        <p>– квізи, тести, мобільні ігри на лексику (Wordle, Duolingo).</p>
                        <p>– став собі виклики, наприклад: "вивчити 10 нових слів за день і використати їх у розмові".</p>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>7. Техніка "5 Touches" (Правило 5 торкань)</h2>
                    <div className="blog-image right">
                        <Image 
                            src="/assets/blog/blog1/Picture12.jpg" 
                            alt="Техніка 5 Touches"
                            width={400}
                            height={300}
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Система повторень</p>
                        <p>Відразу після вивчення нового слова – повтори його через:</p>
                        <ol>
                            <li>10 хвилин</li>
                            <li>1 годину</li>
                            <li>1 день</li>
                            <li>3 дні</li>
                            <li>1 тиждень</li>
                        </ol>
                    </div>
                </div>

                <div className="blog-section">
                    <h2>8. Метод "Acronyms" (Акроніми)</h2>
                    <div className="technique-item">
                        <p className="technique-title">🔹 Використання абревіатур</p>
                        <p>– акронім це абревіатура, що складається з початкових літер виразу.</p>
                        <p>Доречі, саме слово Acronym це абревіатура до Alphabetically Coded Reminder of Names You Misremember (закодований вираз слів, які ви не можете запам'ятати або неправильно запам'ятовуєте).</p>
                        <p>– ми знаємо такі розповсюджені акроніми, як FOMO (fear of missing out), або LOL (laugh out loud), ASAP (as soon as possible) та інші.</p>
                    </div>
                </div>

                <div className="blog-conclusion">
                    <p>Тож, яку техніку тобі найцікавіше спробувати у своєму навчанні? 😊</p>
                </div>
            </div>
        </div>
    );
} 