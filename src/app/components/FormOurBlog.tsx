import FormOurBlogItem from './FormOurBlogItem';
import SectionWrapper from './SectionWrapper';

const blogs = [
  {
    name: 'Building gains into housing stocks and how to trade the sector',
    image: '/images/blog-1.jpg',
  },
  {
    name: '92% of millennial homebuyers say inflation has impacted their plans',
    image: '/images/blog-2.jpg',
  },
  {
    name: 'We are hiring ‘moderately,’ says Compass CEO',
    image: '/images/blog-3.jpg',
  },
];

export type Blog = (typeof blogs)[0];

function FormOurBlog() {
  return (
    <SectionWrapper
      title="Form our blog"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed
          tristique metus proin id lorem odio"
      className="bg-gray-500/5"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 pt-4">
        {blogs.map((item, index) => (
          <FormOurBlogItem data={item} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default FormOurBlog;
