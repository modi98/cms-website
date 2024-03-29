import React from "react";

function Footer() {
  return (
    <footer className="footer mt-4 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h4>Contáctanos</h4>
            <p>Envíanos un mensaje para más información.</p>
            <ul className="list-unstyled">
              <li><i className="fa fa-map-marker"></i> Dirección: Av. Dr. Paliza 92, El Centenario, 83260 Hermosillo, Sonora</li>
              <li><i className="fa fa-phone"></i> Teléfono: (+52) 662-127-0112 / (+52) 662-127-0112</li>
              <li><i className="fa fa-envelope"></i> Correo electrónico: <a href="mailto:rochoa@grupo8a.com">rochoa@grupo8a.com</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Síguenos</h4>
            <p>Síguenos en nuestras redes sociales para mantenerte informado.</p>
            <ul className="list-unstyled">
              <li><a target="_blank" href="https://www.facebook.com/profile.php?id=100076299096800&mibextid=LQQJ4d"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a target="_blank" href="https://www.instagram.com/lagrandeconstructionc/?igshid=MzRlODBiNWFlZA%3D%3D"><i className="fa fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <span className="text-muted">2023 La Grande, Todos los derechos reservados</span>
      </div>
    </footer>
  );
}

export default Footer;