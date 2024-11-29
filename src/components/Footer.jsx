import footerLogo from "../assets/logo/logo_top_img.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="footer footer-center  p-10">
        <aside>
          <img src={footerLogo} alt="" className="max-w-80" />
        </aside>
      </footer>
      <footer className="container mx-auto justify-around bg-white footer px-40">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="flex justify-center py-10 bg-white">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
