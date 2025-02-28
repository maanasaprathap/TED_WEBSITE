import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 mt-0 realtive w-full ">
  <p>© 2024 TEDcMIT | Follow us on  : <span></span> <br />
        <SocialIcon bgColor="transparent"  className='mr-3' url="https://www.instagram.com/tedcmit/" />
        <SocialIcon bgColor="transparent"  className='mr-3' url="https://www.github.com" />
        <SocialIcon bgColor="transparent"  className='mr-3' url="https://www.linkedin.com/company/ted-club-of-mit/" />
      </p>
</footer>

  );
};

export default Footer;
