import HomeMainBanner from "./components/HomeComponents/HomeBanner";
import ForUsImportant from "./components/HomeComponents/ForUsImportant";
import ContainerStudyingLinksType2 from "./components/HomeComponents/ContainerStudyingLinksType2";
import LessonsDescriptionContainer from "./components/HomeComponents/LessonsDescriptionContainer";
import FreeLessonContainer from "./components/HomeComponents/FreeLessonContainer";
import LearningBenefitsContainer from "./components/HomeComponents/LearningBenefitsContainer";
import TestContainer from "./components/HomeComponents/TestContainer";
import ReviewsContainer from "./components/HomeComponents/ReviewsContainer";
import "./styles/Home.css"; 

export default function Home() {
  return (
    <div className="home-container">
      <HomeMainBanner />
      <ForUsImportant />
      <ContainerStudyingLinksType2 />
      <LessonsDescriptionContainer />
      <FreeLessonContainer />
      <LearningBenefitsContainer/>
      <TestContainer backImg="/assets/background/backForTest.png" />
      <ReviewsContainer />
      <FreeLessonContainer />
    </div>
  );
}
