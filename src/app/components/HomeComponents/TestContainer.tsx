"use client";

// Import necessary libraries
import { useState, useEffect, JSX } from 'react';
import { useRouter } from 'next/navigation';
import HighlightedTextWithDots from './styledComponents/HighlightedTextWithDots';
import HighlightedText from './styledComponents/HighlightedText';
import ColumnLevel from './styledComponents/ColumnLevel';

// CSS imports can stay as they are
import './styles/TestContainer.css';

export default function TestContainer({ backImg, footer, backIsImg = true }: {
    backImg: string;
    footer?: JSX.Element;
    backIsImg?: boolean;
  }) {
  const router = useRouter();  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [layoutForMainBanner, setLayoutForMainBanner] = useState('desktop');

  const columnLevelData = [
    {
      level: "A1",
      text: (
        <>
          <div className="column-level-container-active-box-text-title">
            Це початковий рівень англійської, на якому учень:
          </div>
          <div className="column-level-container-active-box-text-p">
          - коротко розповідає про себе; <br />
            - підтримує розмови про погоду, роботу, сім’ю; <br />
            - відповідає на елементарні питання про себе та світ навколо;
            <br />
            - розуміє на слух прості речення; <br />
            - використовує базову граматику.
          </div>
          <div className="column-level-container-active-box-text-footer">
            <div className="column-level-container-active-box-text-footer-elem p1">
              Приблизний словниковий запас: 1500 слів.
            </div>
            <div className="column-level-container-active-box-text-footer-elem">
              Орієнтовна кількість годин: 100 годин
            </div>
            {/* <div className="column-level-container-active-box-text-footer-elem">
              Щоб освоїти рівень англійської мови А1, потрібно навчитися
              правильно читати, закріпити на практиці найпопулярніші слова та
              фрази, вивчити базові граматичні конструкції та правила.
            </div> */}
          </div>
        </>
      ),
    },
    {
      level: "A2",
      text: (
        <>
          <div className="column-level-container-active-box-text-title">
            Якщо у вас знання англійської на рівні A2, то ви можете:
          </div>
          <div className="column-level-container-active-box-text-p">
          - читати та розуміти прості тексти; <br />
            - використовувати основні часи та модальні дієслова; <br />
            - говорити про здоров’я, їжу, хобі, свята, тварин.
          </div>
          <div className="column-level-container-active-box-text-footer">
            <div className="column-level-container-active-box-text-footer-elem p1">
              Приблизний словниковий запас: 2000–2500 слів.
            </div>
            <div className="column-level-container-active-box-text-footer-elem">
              Орієнтовна кількість годин: 160 годин
            </div>
            {/* <div className="column-level-container-active-box-text-footer-elem">
              На цьому рівні учні вже коротко обговорюють різні теми, а також
              правильно вимовляють деякі фрази. Використовуючи словник, вони
              можуть писати короткі тексти, наприклад записки. Також на цьому
              етапі можна починати самостійно освоювати наступні рівні знання
              англійської мови, раніше — не рекомендовано.
            </div> */}
          </div>
        </>
      ),
    },
    {
      level: "B1",
      text: (
        <>
          <div className="column-level-container-active-box-text-title">
            Маючи середній рівень англійської мови, ви можете:
          </div>
          <div className="column-level-container-active-box-text-p">
            - читати новини, тексти про подорожі, культуру, основні офіційні
            документи; <br />
            - писати розповіді, особисті листи; <br />
            - використовувати на практиці більш складну граматику; <br />
            - поверхово обговорювати комплексні теми.
          </div>
          <div className="column-level-container-active-box-text-footer">
            <div className="column-level-container-active-box-text-footer-elem p1">
              Приблизний словниковий запас: 2000–3000 слів.
            </div>
            <div className="column-level-container-active-box-text-footer-elem">
              Орієнтовна кількість годин: 350–400 годин
            </div>
            {/* <div className="column-level-container-active-box-text-footer-elem">
              На цьому рівні учні розмовляють на різноманітні теми, розуміють
              головну думку в складних текстах, добре читають і пишуть. Також із
              такими знаннями мови стає комфортно підтримувати стандартні
              розмови під час подорожей.
            </div> */}
          </div>
        </>
      ),
    },
    {
      level: "B2",
      text: (
        <>
          <div className="column-level-container-active-box-text-title">
            Середній рівень володіння англійською мовою дає змогу:
          </div>
          <div className="column-level-container-active-box-text-p">
            - швидко говорити й писати на різні теми, спрощуючи проблемні моменти;
            <br />
            - практично без проблем сприймати стандартну англомовну мову на слух;
            <br />
            - використовувати всі часи дієслів.
          </div>
          <div className="column-level-container-active-box-text-footer">
            <div className="column-level-container-active-box-text-footer-elem p1">
              Приблизний словниковий запас: 3000–4000 слів.
            </div>
            <div className="column-level-container-active-box-text-footer-elem">
              Орієнтовна кількість годин: 500–600 годин
            </div>
            {/* <div className="column-level-container-active-box-text-footer-elem">
              На цьому етапі вивчення англійської ви вже можете вести повноцінну
              бесіду й писати тексти, наводячи аргументи та використовуючи
              складну лексику. Також ви можете читати художні книги, дивитися
              фільми та серіали зі словником або без — усе залежить від
              складності теми та особливостей вимови акторів.
            </div> */}
          </div>
        </>
      ),
    },
    {
      level: "C1",
      text: (
        <>
          <div className="column-level-container-active-box-text-title"></div>
          <div className="column-level-container-active-box-text-p">Додати текст</div>
          <div className="column-level-container-active-box-text-footer">
            <div className="column-level-container-active-box-text-footer-elem p1"></div>
            <div className="column-level-container-active-box-text-footer-elem"></div>
            {/* <div className="column-level-container-active-box-text-footer-elem"></div> */}
          </div>
        </>
      ),
    },
    {
      level: "C2",
      text: (
        <>
          <div className="column-level-container-active-box-text-title"></div>
          <div className="column-level-container-active-box-text-p">Додати текст</div>
          <div className="column-level-container-active-box-text-footer">
            <div className="column-level-container-active-box-text-footer-elem p1"></div>
            <div className="column-level-container-active-box-text-footer-elem"></div>
            {/* <div className="column-level-container-active-box-text-footer-elem"></div> */}
          </div>
        </>
      ),
    },
  ];

  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);

  // Update windowWidth state when window is resized
  useEffect(() => {
    if (typeof window !== "undefined") {
    const handleResize = () => {
      setWindowWidth(window.innerWidth); // Update state with the new window width
    };

    window.addEventListener('resize', handleResize); // Add event listener on mount
    return () => window.removeEventListener('resize', handleResize); // Clean up on unmount
}
  }, []); 

  useEffect(() => {
    if (typeof window !== "undefined") {
    if (windowWidth < 768) {
      setLayoutForMainBanner('mobile');
    } else {
      setLayoutForMainBanner('desktop');
    }
}
  }, [windowWidth]); 

  const textP = layoutForMainBanner === 'desktop' ? (
    <div className="home-test-container-left-p">
      Пройди наш{' '}
      <HighlightedTextWithDots
        colorText="#ffffff"
        colorBackground="#767676B2"
        colorDots="#484848"
        widthDots={5}
        widthBorder={2}
        rightSide={false}
      >
        безкоштовний тест на рівень
      </HighlightedTextWithDots>{' '}
      <HighlightedTextWithDots
        colorText="#ffffff"
        colorBackground="#767676B2"
        colorDots="#484848"
        widthDots={5}
        widthBorder={2}
        leftSide={false}
      >
        англійської мови
      </HighlightedTextWithDots>{' '}
      та дізнайся <br />
      який курс буде кращим рішенням для тебе
    </div>
  ) : (
    <div className="home-test-container-left-p">
      Пройди наш{' '}
      <HighlightedText colorBack="#AE88AD">безкоштовний тест на</HighlightedText>{' '}
      <HighlightedText colorBack="#AE88AD">рівень англійської мови</HighlightedText>{' '}
      та дізнайся який курс буде кращим рішенням для тебе
    </div>
  );
  const buttonWithfunc = (
    <button className="home-test-container-left-btn" onClick={()=>{
        router.push('/testPage');
    }}>
      пройти тест
    </button>
  );

  return (
    <div
      className="home-test-container-with-footer"
      style={{ backgroundImage: footer ? `url(${backImg})` : 'none' }}
    >
      <div
        className="home-test-container"
        style={{
          backgroundImage:
            backIsImg === false
              ? 'none'
              : layoutForMainBanner === 'desktop'
              ? `url(${backImg})`
              : `url('/assets/background/backForTestMobile.png')`,  // Updated path for Next.js static assets
        }}
      >
        <div className="home-test-container-left">
          <div className="home-test-container-left-title">
            не знаєш який <HighlightedTextWithDots
                                    colorBackground="#FCE69699"
            colorDots="#FCE696"
                                    colorText="#414040"
                                    widthDots={8}
                                    widthBorder={3}
                                  >
                                     курс тобі
                                  </HighlightedTextWithDots> потрібен?
          </div>
          {textP}
          {layoutForMainBanner === 'desktop' ? buttonWithfunc : null}
        </div>

        <div className="home-test-container-right">
          <div className="home-test-container-right-title">
            натискай на свій рівень та дивись корисну інформацію про нього
          </div>
          <div className="home-test-container-right-diagram-container">
            {columnLevelData.map((item, index) => (
              <ColumnLevel
                key={index}
                title={item.level}
                height={(index + 1) * 42 * (index + 1 === 1 ? 1.3 : 1)}
                active={activeIndex === index}
                onClick={() =>
                  setActiveIndex(index === activeIndex ? null : index)
                }
                index={index}
                text={item.text}
              />
            ))}
          </div>
        </div>
        {layoutForMainBanner === 'mobile' ? buttonWithfunc : null}
      </div>
      {footer ? <div style={{ marginTop: 40 }}>{footer}</div> : null}
    </div>
  );
}
