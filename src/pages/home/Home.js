import React from "react";

export default function Home() {
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container comal-glass p-4">
                    <div className="row text-center">
                        <div className="d-flex flex-column justify-content-center">
                            <h1 className="text-orange">COMAL Locação de Equipamentos</h1>
                            <p className="text-white">Soluções em locação de máquinas pesadas para dragagem, navegação, rebocadores e balsas.</p>
                            <button className="btn btn-outline-orange btn-lg">Saiba Mais</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="text-center text-orange mb-5">Nossos Serviços</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Locaçãode Equipamentos</h5>
                                    <p className="card-text">Oferecemos uma variedade de máquinas pesadas para diversas necessidades.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Dragagem e Navegação</h5>
                                    <p className="card-text">Serviços especializados em dragagem e navegação.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <h5 className="card-title">Rebocadores e Balsas</h5>
                                    <p className="card-text">Locamos rebocadores e balsas para operações marítimas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-orange">Sobre Nós</h2>
                            <p className="text-white">A COMAL é especializada em locação de equipamentos e máquinas pesadas, oferecendo soluções completas para dragagem, navegação, rebocadores e balsas.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact" className="contact-section">
                <div className="container">
                    <h2 className="text-center text-orange mb-5">Contato</h2>
                    <div className="row">
                        <div className="col-md-6 mx-auto">
                            <form>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Nome" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" rows="3" placeholder="Mensagem"></textarea>
                                </div>
                                <button type="submit" className="btn btn-outline-orange">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}