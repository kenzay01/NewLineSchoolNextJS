
import "./styles/BenefitBox.css";
import Image from 'next/image';
export default function BenefitBox({ title, content, image }: { title: string, content: string[], image: string }) {
    return (
        <div className="home-learning-benefits-box"
        >
            <div className="home-learning-benefits-box-title">{title}</div>
            <div className="home-learning-benefits-box-content">
                {content.map((text, index) => {
                    return <div key={index} className="home-learning-benefits-box-content-container">
                        <div className="home-learning-benefits-box-content-check-mark">
                            <img loading="lazy" src="/assets/elements/checkMark.png" alt="check" />
                        </div>
                        <div className="home-learning-benefits-box-content-text">{text}</div>
                    </div>
                })}
            </div>
            <div className="home-learning-benefits-box-img">
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    layout="responsive"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
