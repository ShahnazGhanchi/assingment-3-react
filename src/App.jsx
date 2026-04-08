import Header from './Component/Header'; 
import Hero from './Component/Hero';
import Course from './Component/Course';
import FeatureSection from './Component/FeatureSection'; 
import Testimonial from './Component/Testimonial';
import Newsletter from './Component/NewsLetter';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Course/>
      <FeatureSection/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
