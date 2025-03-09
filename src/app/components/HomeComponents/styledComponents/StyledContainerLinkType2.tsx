import Link from 'next/link'; // Імпортуємо Link з next/link для навігації
import { ReactNode, Fragment, useEffect, useState } from 'react';

// Імпортуємо CSS
import './styles/StyledContainerLinkType2.css';

interface Props {
  children: ReactNode;
  link: string;
  description: string;
}

export default function StyledContainerLinkType2({ children, link, description }: Props) {
//   const [isClient, setIsClient] = useState(false); // Додаємо стан для перевірки, чи компонент змонтовано на клієнті

//   // Використовуємо useEffect для того, щоб перевіряти, чи виконується код на клієнті
//   useEffect(() => {
//     setIsClient(true); // Встановлюємо true, коли компонент змонтовано
//   }, []);

//   if (!isClient) {
//     return null; // Повертаємо null, поки не змонтовано на клієнті
//   }

  return (
    <div className="styled-container-link2">
      <div className="styled-container-link2-header">
        {/* Використовуємо компонент Image з next/image для оптимізації зображень */}
        <img
          loading="lazy"
          src="/assets/elements/star_rounded_yellow.png" // Шлях до зображення має бути відносним до папки public
          alt="Star"
        />
        <div className="styled-container-link2-text">{children}</div>
      </div>
      <div className="styled-container-link2-body">
        <div className="styled-container-link2-body-description">
          {description.split("</br>").map((elem, i) => (
            <Fragment key={i}>
              {elem}
              <br />
            </Fragment>
          ))}
        </div>
        <Link href={link}>
          <button>Дізнатися більше</button> {/* Використовуємо Link для навігації */}
        </Link>
      </div>
    </div>
  );
}
