const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>
          © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos
          reservados.
        </p>
        <nav className="footer-nav">
          <ul>
            <li>
              <a href="/terminos">Términos y Condiciones</a>
            </li>
            <li>
              <a href="/privacidad">Política de Privacidad</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
