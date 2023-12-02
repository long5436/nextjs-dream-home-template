import FeaturedProperties from './components/FeaturedProperties';
import FormOurBlog from './components/FormOurBlog';
import Slider from './components/Slider';
import Testimonial from './components/Testimonial';

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <Slider />
      <FeaturedProperties />
      <FormOurBlog />
      <Testimonial />
    </main>
  );
}
