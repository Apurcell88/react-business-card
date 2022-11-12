import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBrands } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className="footer-container">
      <FontAwesomeIcon icon="fa-brands fa-twitter" />
      <FontAwesomeIcon icon="fa-brands fa-square-facebook" />
      <FontAwesomeIcon icon="fa-brands fa-square-instagram" />
      <FontAwesomeIcon icon="fa-brands fa-square-github" />
    </footer>
  );
}
 
export default Footer;