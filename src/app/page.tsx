import Banner from './components/Banner';
import ContactUs from './components/ContactUs';
import FeaturedProperties from './components/FeaturedProperties';
import FormOurBlog from './components/FormOurBlog';
import MeetTheAgents from './components/MeetTheAgents';
import PropertiesForRent from './components/PropertiesForRent';
import PropertiesForSale from './components/PropertiesForSale';
import SearchGallery from './components/SearchGallery';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <main>
      <Banner />
      <Slider />
      <FeaturedProperties />
      <SearchGallery />
      <PropertiesForSale />
      <PropertiesForRent />
      <MeetTheAgents />
      <ContactUs />
      <FormOurBlog />
      <Testimonial />
    </main>
  );
}
