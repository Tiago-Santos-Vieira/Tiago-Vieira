import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { ArrowRight, Code2, LineChart, MonitorSmartphone, Terminal, Zap, ChevronRight, Menu, X } from 'lucide-react';

const CodeBackground = () => {
  const codeSnippet = `
const optimizeConversion = async (user: User) => {
  const intent = await analyzeBehavior(user.session);
  if (intent.score > 0.8) {
    triggerHighValueFlow({
      target: 'premium_consultation',
      urgency: true,
      personalization: intent.traits
    });
  }
  return calculateROI(user);
};

// Inicializar rastreamento
const tracker = new DataMatrix({
  resolution: '8k',
  mode: 'hyper-conversion',
  theme: 'dark-matter'
});

tracker.observe(document.body);
  `.repeat(10);

  return (
    <div className="code-bg" aria-hidden="true">
      {codeSnippet}
    </div>
  );
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple selection:text-black">
      <motion.div style={{ opacity, y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
        <CodeBackground />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple to-blue origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight flex items-center gap-2">
            <img src="https://i.postimg.cc/1RKywHD8/logo.png" alt="Tiago Vieira" className="h-5 md:h-7 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
            <a href="#about" className="hover:text-purple transition-colors">Sobre mim</a>
            <a href="#services" className="hover:text-purple transition-colors">Serviços</a>
            <a href="#work" className="hover:text-purple transition-colors">Trabalhos</a>
          </div>
          <div className="hidden md:block">
            <a href="https://wa.me/5573981579948?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20meu%20projeto!" target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all hover:border-purple/50 inline-flex items-center justify-center">
              Vamos Conversar
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 -mr-2 text-white/70 hover:text-white active:scale-95 transition-transform"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 border-b border-white/5 overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-5 text-base font-medium text-white/80">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple transition-colors flex items-center justify-between">Sobre mim <ArrowRight size={16} className="opacity-50" /></a>
                <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple transition-colors flex items-center justify-between">Serviços <ArrowRight size={16} className="opacity-50" /></a>
                <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-purple transition-colors flex items-center justify-between">Trabalhos <ArrowRight size={16} className="opacity-50" /></a>
                <a href="https://wa.me/5573981579948?text=Ol%C3%A1%2C%20gostaria%20de%20conversar%20sobre%20meu%20projeto!" target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="mt-4 px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/10 rounded-full text-center transition-all hover:border-purple/50 text-white font-semibold flex items-center justify-center gap-2">
                  Vamos Conversar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 mask-image-b"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="max-w-4xl"
          >
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple/10 border border-purple/20 text-purple text-xs font-mono mb-8">
              <span className="w-2 h-2 rounded-full bg-purple animate-pulse"></span>
              🟢 APENAS 2 VAGAS PARA PROJETOS ESTE MÊS
            </motion.div>
            
            <motion.h1 variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
              O seu site atual está <br />
              <span className="text-gradient">espantando os seus clientes mais ricos.</span>
            </motion.h1>
            
            <motion.p variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }} className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed font-light">
              Enquanto você usa templates prontos e lentos, seu concorrente fecha contratos. Eu construo a infraestrutura digital de alta performance que transforma o seu tráfego em vendas reais.
            </motion.p>
            
            <motion.div variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } } }} className="flex flex-col sm:flex-row items-center gap-4">
              <a href="https://wa.me/5573981579948?text=Ol%C3%A1%2C%20gostaria%20de%20escalar%20meu%20neg%C3%B3cio!" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-purple text-white font-semibold rounded-full hover:bg-purple/90 transition-all glow-purple flex items-center justify-center gap-2">
                Quero Parar de Perder Vendas <ArrowRight size={18} />
              </a>
              <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                Ver Casos de Sucesso
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/2">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">O Fim do 'Site Bonitinho'</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Sou um "engenheiro de conversão". Não entrego apenas templates prontos, mas sim código puro para carregamento em milissegundos e estratégias que tornam o seu site o ativo mais lucrativo da sua empresa.
              </p>
              <a href="https://wa.me/5573981579948?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho!" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple font-medium hover:text-white transition-colors">
                Fale comigo no WhatsApp <ArrowRight size={16} />
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple/20 to-transparent z-10 mix-blend-overlay"></div>
                <img src="https://i.postimg.cc/Y946c0kP/Fotografia-retrato-ultra-202603231449.jpg" alt="Tiago Vieira" className="w-full h-full object-cover transition-all duration-700" referrerPolicy="no-referrer" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 relative border-t border-white/5 bg-black-light/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-16 md:mb-24"
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">O Arsenal</h2>
            <p className="text-white/50 max-w-xl">Um conjunto abrangente de serviços digitais projetados para elevar sua marca e maximizar as taxas de conversão.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.1, staggerChildren: 0.15, delayChildren: 0.3, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-black border border-white/5 hover:border-purple/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-6xl font-bold group-hover:text-purple transition-colors">01</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple/10 transition-colors">
                <MonitorSmartphone className="text-white/70 group-hover:text-purple transition-colors" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Branding e Identidade Visual</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Sua marca não pode parecer barata. Criamos uma identidade magnética que eleva o seu nível no mercado e justifica você cobrar muito mais caro pelo seu serviço.
              </p>
              <ul className="space-y-2 mb-8">
                {['Estratégia de Marca', 'Sistemas de Logo e Identidade', 'Tipografia Premium', 'Diretrizes de Marca'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-2 text-xs font-mono text-white/40"
                  >
                    <ChevronRight size={12} className="text-purple" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.2, staggerChildren: 0.15, delayChildren: 0.4, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-black border border-white/5 hover:border-blue/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-6xl font-bold group-hover:text-blue transition-colors">02</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue/10 transition-colors">
                <Code2 className="text-white/70 group-hover:text-blue transition-colors" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Landing Pages de Alta Performance</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Um site lento rasga o seu dinheiro de anúncios no Google e no Instagram. Desenvolvo Landing Pages do absoluto zero para carregar na velocidade da luz e blindar o seu tráfego.
              </p>
              <ul className="space-y-2 mb-8">
                {['Otimização de Taxa de Conversão', 'Carregamento em Milissegundos', 'Arquitetura Responsiva', 'Pronto para Testes A/B'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-2 text-xs font-mono text-white/40"
                  >
                    <ChevronRight size={12} className="text-blue" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.0, delay: 0.3, staggerChildren: 0.15, delayChildren: 0.5, ease: [0.22, 1, 0.36, 1] } }
              }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-black border border-white/5 hover:border-purple/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-6xl font-bold group-hover:text-purple transition-colors">03</div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple/10 transition-colors">
                <LineChart className="text-white/70 group-hover:text-purple transition-colors" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">Tráfego Focado em ROI</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Chega de curtidas que não pagam boletos. Injetamos tráfego de compradores altamente qualificados direto na sua nova página, otimizando cada centavo do seu orçamento.
              </p>
              <ul className="space-y-2 mb-8">
                {['Meta e Google Ads', 'Ecossistemas de Retargeting', 'Escala Baseada em Dados', 'Modelagem de Atribuição'].map((item, i) => (
                  <motion.li 
                    key={i} 
                    variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                    className="flex items-center gap-2 text-xs font-mono text-white/40"
                  >
                    <ChevronRight size={12} className="text-purple" /> {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Showcase */}
      <section id="work" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Trabalhos em Destaque</h2>
              <p className="text-white/50 max-w-xl">Execução pixel-perfect encontra princípios estratégicos de conversão.</p>
            </div>
            <a href="#work" className="flex items-center gap-2 text-sm font-medium text-purple hover:text-purple/80 transition-colors">
              Ver Todos os Projetos <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project 1 - Advocacia */}
            <motion.a 
              href="https://www.natanalmeidaadvocacia.com.br"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black-lighter border border-white/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                {/* Mockup Container */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0, y: 40 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-full max-w-md aspect-[16/10] bg-[#1a1a1a] rounded-t-xl border-t-4 border-x-4 border-[#333] shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700"
                  >
                    <div className="absolute top-0 w-full h-4 bg-[#222] flex items-center px-2 gap-1.5 border-b border-[#333]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <img src="https://i.postimg.cc/PJ0h66yx/Captura-de-tela-2026-03-23-163034.png" alt="Project Mockup Advocacia" className="w-full h-full object-cover object-top mt-4 opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Escritório de Advocacia</h3>
                  <p className="text-white/50 text-sm">Posicionamento e Captação de Clientes</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-purple group-hover:text-purple transition-colors">
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
            </motion.a>

            {/* Project 4 - Personal Trainer */}
            <motion.a 
              href="https://gustavocarvalhotrainer.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer block lg:mt-24"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-black-lighter border border-white/5 mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                {/* Mockup Container */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0, y: 40 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="relative w-[200px] h-[400px] bg-[#1a1a1a] rounded-[2rem] border-4 border-[#333] shadow-2xl overflow-hidden group-hover:scale-105 transition-transform duration-700"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#333] rounded-b-xl z-20"></div>
                    <img src="https://i.postimg.cc/xCC29rFF/Captura-de-tela-2026-03-23-163113.png" alt="Mobile Mockup Personal Trainer" className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Personal Trainer Elite</h3>
                  <p className="text-white/50 text-sm">Plataforma de Consultoria Online</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue group-hover:text-blue transition-colors">
                  <ArrowRight size={16} className="-rotate-45" />
                </div>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple/5"></div>
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-purple/20 rounded-full blur-[100px] pointer-events-none"
        ></motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto relative z-10 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Pronto para dominar o seu mercado?</h2>
          <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
            Enquanto você adia a criação de uma estrutura profissional, outro concorrente está fechando o cliente que deveria ser seu. Vamos desenhar a sua máquina de vendas hoje.
          </p>
          <a href="https://wa.me/5573981579948?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20parceria!" target="_blank" rel="noopener noreferrer" className="w-fit px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all text-lg flex items-center justify-center gap-2 mx-auto">
            <Zap size={20} className="text-purple" /> Aplicar para Consultoria Estratégica
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="font-display font-bold text-lg tracking-tight flex items-center gap-2">
            <img src="https://i.postimg.cc/1RKywHD8/logo.png" alt="Tiago Vieira" className="h-8 md:h-10 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          <div className="text-sm text-white/40 font-mono">
            &copy; {new Date().getFullYear()} Tiago Vieira. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
