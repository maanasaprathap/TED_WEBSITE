import { SocialIcon } from 'react-social-icons'

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4 mt-6 fixed bottom-0 w-full">
  <p>© 2024 TEDcMIT | Follow us on  : <span></span> 
        <SocialIcon bgColor="transparent"  className='mr-3' url="https://www.instagram.com" />
        <SocialIcon bgColor="transparent"  className='mr-3' url="https://www.github.com" />
        <SocialIcon bgColor="transparent"  className='mr-3' url="https://www.linkedin.com" />
      </p>
</footer>

  );
};

export default Footer;
