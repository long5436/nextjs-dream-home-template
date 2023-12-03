import FooterCard from '~/app/components/layouts/Footer/FooterCard';
import FooterContact from './FooterContact';
import FooterNavigation from './FooterNavigation';

function Footer() {
  return (
    <footer className="bg-footer text-white ">
      <div className="container pb-20 2xl:max-w-[1140px] mx-auto py-5 grid grid-cols-1 lg:grid-cols-2 gap-14">
        <FooterCard />
        <FooterCard />
      </div>

      <FooterContact />
      <FooterNavigation />

      <div className="container 2xl:max-w-[1140px] mx-auto text-center py-7">
        <p>
          <span className="opacity-50">
            Copyright © 2023. Designed & Developed by
          </span>{' '}
          <a href="#">Themesflat</a>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
