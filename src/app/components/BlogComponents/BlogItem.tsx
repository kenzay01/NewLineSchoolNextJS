import "./styles/BlogItem.css";
import { useRouter } from "next/navigation";
export default function BlogItem({ id, title, image }: { id: string; title: string; image: string }) {
    const router = useRouter();
    return <div className="blog-item" onClick={() => router.push(`/blog/${id}`)}>
            <img src={image} alt="Blog item" />
        <div className="blog-item-content">
            <h2>{title}</h2>
        </div>
    </div>
}