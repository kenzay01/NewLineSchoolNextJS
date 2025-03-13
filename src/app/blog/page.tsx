import "../styles/BlogPage.css"
import FreeLessonContainer from "../components/HomeComponents/FreeLessonContainer";
import BlogBanner from "../components/BlogComponents/BlogBanner";
import BlogContent from "../components/BlogComponents/BlogContent";
export default function BlogPage() {
    return <div className="blog-page">
        <BlogBanner />
        <BlogContent />
        <FreeLessonContainer />
        <div style={{height:50}}></div>
    </div>;
}