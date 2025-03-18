
import "./styles/BenefitBox.css";
import Image from 'next/image';
import {motion} from 'framer-motion';
export default function BenefitBox({ title, content, image }: { title: string, content: string[], image: string }) {
    return (
        <motion.div className="home-learning-benefits-box"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        
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
        </motion.div>
    );
}
