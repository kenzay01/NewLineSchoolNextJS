import { ReactNode, Fragment } from 'react';
import { useRouter } from 'next/navigation'; // Імпортуємо useRouter замість Link

import './styles/StyledContainerLinkType2.css';

interface Props {
  children: ReactNode;
  link: string;
  description: string;
}

export default function StyledContainerLinkType2({ children, link, description }: Props) {
  const router = useRouter(); 
  
  const handleNavigate = () => {
    router.push(link);
  };

  return (
    <div className="styled-container-link2">
      <div className="styled-container-link2-header">
        <img
          loading="lazy"
          src="/assets/elements/star_rounded_yellow.png" 
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
        <button onClick={handleNavigate}>Дізнатися більше</button> {/* Використовуємо onClick для навігації */}
      </div>
    </div>
  );
}