import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/App.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p className="text-white">© 2023 COMAL. Todos os direitos reservados.</p>
                    </div>
                    <div className="col-md-6 text-end">
                        <p className="text-white">Desenvolvido por [Sua Empresa]</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;