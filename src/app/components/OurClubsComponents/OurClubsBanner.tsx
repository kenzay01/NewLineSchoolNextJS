import HighlightedTextWithDots from "../HomeComponents/styledComponents/HighlightedTextWithDots";
import "./styles/OurClubsBanner.css";
export default function OurClubsBanner() {
  return (
    <div className="our-clubs-banner">
      <div className="our-clubs-banner-left">
        <div className="our-clubs-banner-left-title">
          <HighlightedTextWithDots
            colorText="#ffffff"
            colorBackground="#BFA0BEB2"
            colorDots="#AE88AD"
            widthDots={10}
            widthBorder={4}
          >
            Клуби
          </HighlightedTextWithDots>
          <br /> нашої школи
        </div>
        <div className="our-clubs-banner-left-p">
          Щосуботи ми проводимо тематичні розмовні та граматичні клуби в офісі
          або онлайн для балакучих підлітків, креативної малечі  та дорослих,
          які шукають натхнення і більше мотивації
        </div>
        <div className="our-clubs-banner-left-text">
          <span>Розмовний клуб</span> - це вільна та невимушена атмосфера,
          (навіть зі смаколиками та чашкою чаю або кави) де можна практикувати
          говоріння з іншими учасниками, обмінюючись думками на різні теми, а
          також ділитись досвідом, лексикою, граматичними структурами та
          вимовою. 
        </div>
      </div>
      <div className="our-clubs-banner-right">
        <img loading="lazy"src="/assets/images/OurClubsBanner.png" alt="" />
      </div>
    </div>
  );
}
