import Wrapper from '~/components/Wrapper';
import FooterCard from '~/components/layouts/Footer/FooterCard';
import FooterContact from './FooterContact';
import FooterNavigation from './FooterNavigation';

function Footer() {
  return (
    <footer className="bg-footer text-white pt-20">
      <Wrapper noPaddingY>
        <div className="py-5 grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-8">
          <FooterCard />
          <FooterCard />
        </div>

        <FooterContact />
        <FooterNavigation />

        <div className="text-center py-7">
          <p>
            <span className="opacity-50">
              Copyright © 2023. Designed & Developed by
            </span>{' '}
            <a href="#">Themesflat</a>.
          </p>
        </div>
      </Wrapper>
    </footer>
  );
}

export default Footer;
