import React from "react";

export default function Home() {
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container comal-glass p-4">
                    <div className="row text-center">
                        <div className="d-flex flex-column align-items-center justify-content-center mr-3">
                            <h1 className="d-none">COMAL Locação de Equipamentos</h1>
                            <h3 className="text-orange">COMAL</h3>
                            <h3 className="text-orange">Locação de Equipamentos</h3>
                            <p className="text-white">Soluções em locação de máquinas pesadas para dragagem, navegação, rebocadores e balsas.</p>
                            <button className="btn btn-outline-orange text-white w-50">Saiba Mais</button>
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" className="services-section">
                <div className="container">
                    <h2 className="text-center text-orange mb-5">A Solução Inteligente para Seu Projeto!</h2>

                    <p>Você precisa de equipamentos robustos e confiáveis para sua obra, mas quer evitar altos custos e preocupações com manutenção? A locação de máquinas pesadas é a escolha certa para você!</p>

                    <p>Na Comal, oferecemos um portfólio completo de máquinas para aluguel, garantindo eficiência, economia e flexibilidade para qualquer tipo de projeto.</p>

                    <p>Por que alugar em vez de comprar?</p>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">✅ Menos custos, mais lucro – Pague apenas pelo tempo de uso, sem se preocupar com altos investimentos iniciais.</li>
                        <li class="list-group-item">✅ Equipamentos sempre modernos – Tenha acesso às melhores máquinas do mercado sem se preocupar com depreciação.</li>
                        <li class="list-group-item">✅ Manutenção garantida – Nossa equipe especializada cuida de tudo, para que você foque na sua obra.</li>
                        <li class="list-group-item">✅ Flexibilidade para cada projeto – Escolha a máquina ideal para cada fase da construção, sem precisar imobilizar capital.</li>
                        <li class="list-group-item">✅ Sem preocupação com armazenamento – Alugue quando precisar, sem custos extras com espaço e logística.</li>
                    </ul>
                    
                    
                    
                    
                    

                    Conheça nossa frota:
                    🚜 Escavadeiras CAT 320 – Potência e precisão para escavações profundas.
                    🛤️ Moto Niveladoras CAT – Nivelamento perfeito para qualquer tipo de terreno.
                    🛞 Rolos Compactadores CAT – Compactação eficiente para pavimentação.
                    ⛏️ Retroescavadeiras CAT – Versatilidade para escavação e carregamento.

                    🔹 Pronto para otimizar sua obra? 🔹
                    Entre em contato agora e solicite um orçamento sem compromisso!

                    📞 (XX) XXXX-XXXX | 📧 contato@comal.com.br | 📍 Atendemos em toda a região!

                    🚀 Comal – A força que sua obra precisa!
                </div>
            </section>

            <section id="locacao" className="services-section">
                <div className="container">
                    <h2 className="text-center text-orange mb-5">Nossos Equipamentos</h2>
                    <ul>
                        <li>🚜 <b>CAT 320</b> – Escavação eficiente e robusta.</li>
                        <li>🛤️ <b>Moto Niveladora CAT</b> – Nivelamento preciso para estradas.</li>
                        <li>🛞 <b>Rolo Compactador CAT</b> – Compactação ideal para pavimentação.</li>
                        <li>⛏️ <b>Retroescavadeira CAT</b> – Versatilidade para diversos tipos de obra.</li>
                    </ul>
                </div>
            </section>

            <section id="about" className="about-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-orange">Sobre Nós</h2>
                            <p>A Comal atua há mais de 10 anos no setor de locação de máquinas pesadas, fornecendo equipamentos de alta qualidade para construção civil e infraestrutura.</p>
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