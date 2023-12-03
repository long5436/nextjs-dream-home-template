import ContactUs from './components/ContactUs';
import FeaturedProperties from './components/FeaturedProperties';
import FormOurBlog from './components/FormOurBlog';
import MeetTheAgents from './components/MeetTheAgents';
import SearchGallery from './components/SearchGallery';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <Slider />
      <FeaturedProperties />
      <SearchGallery />
      <MeetTheAgents />
      <ContactUs />
      <FormOurBlog />
      <Testimonial />
    </main>
  );
}
