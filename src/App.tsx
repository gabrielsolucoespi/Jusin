import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight, 
  Play, 
  MessageSquare, 
  Star,
  ShieldCheck,
  TrendingUp,
  CreditCard,
  Lock,
  FileText,
  Headphones
} from 'lucide-react';

// --- Components ---

const Badge = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold uppercase tracking-wider ${className}`}>
    {children}
  </div>
);

const SectionHeading = ({ badge, title, subtitle, centered = true }: { badge?: string, title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
    {badge && <Badge className="mb-4">{badge}</Badge>}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 leading-tight">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
  key?: React.Key;
}

const TestimonialCard = ({ name, role, content, rating = 5 }: TestimonialCardProps) => (
  <div className="glass-card p-8 flex flex-col hover:border-brand/50 transition-colors duration-300 w-[300px] md:w-[450px] min-h-[350px] md:min-h-[450px] whitespace-normal shrink-0">
    <div className="flex gap-1 mb-6">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-brand text-brand" />
      ))}
    </div>
    <div className="flex-grow flex items-center">
      <p className="text-gray-300 italic mb-8 text-base md:text-lg leading-relaxed">"{content}"</p>
    </div>
    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
      <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center font-bold text-brand text-lg shrink-0">
        {name.charAt(0)}
      </div>
      <div className="min-w-0">
        <h4 className="font-bold text-base truncate">{name}</h4>
        <p className="text-gray-500 text-xs truncate">{role}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-brand transition-colors"
      >
        <span className="font-semibold md:text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pb-6 text-gray-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const WhatsAppAnimation = () => {
  return (
    <div className="w-full max-w-sm mx-auto bg-[#0b141a] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <div className="bg-[#202c33] p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden">
          <img src="https://i.imgur.com/m7MGFCp.png" alt="JusIn Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
        </div>
        <div>
          <p className="font-bold text-sm">JusIn Cálculos para precatórios</p>
          <p className="text-[10px] text-brand">Online</p>
        </div>
      </div>
      
      <div className="p-4 space-y-4 h-[400px] overflow-y-auto bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat">
        <div className="flex justify-end">
          <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none max-w-[80%] shadow-sm">
            <div className="flex items-center gap-2 bg-[#025144] p-2 rounded border border-white/5">
              <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                <FileText className="w-4 h-4 text-white" />
              </div>
              <div className="text-xs">
                <p className="font-semibold truncate">Precatório_TJSP_2024.pdf</p>
                <p className="text-[10px] opacity-60">1.2 MB</p>
              </div>
            </div>
            <p className="text-[10px] text-right mt-1 opacity-60">14:15</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="bg-[#202c33] p-3 rounded-lg rounded-tl-none max-w-[90%] shadow-sm">
            <p className="text-xs font-bold text-brand mb-2">✅ Cálculo Concluído!</p>
            <div className="space-y-1 text-[11px]">
              <div className="flex justify-between border-b border-white/5 pb-1 gap-4">
                <span className="text-gray-400">Principal:</span>
                <span className="font-mono">R$ 125.430,22</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1 gap-4">
                <span className="text-gray-400">Juros:</span>
                <span className="font-mono">R$ 42.110,15</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1 gap-4">
                <span className="text-gray-400">Total Atualizado:</span>
                <span className="font-mono text-brand font-bold">R$ 167.540,37</span>
              </div>
            </div>
            <p className="text-[10px] text-right mt-2 opacity-60">14:16</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/80 backdrop-blur-md border-b border-white/5 pt-5">
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-center">
          <div className="flex items-center">
            <img src="https://i.imgur.com/m7MGFCp.png" alt="JusIn Logo" className="h-16 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
        </div>
      </nav>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand/10 blur-[120px] rounded-full -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div>
              <Badge className="mb-6">
                <CheckCircle2 className="w-3 h-3" /> Mais de 1270 originadores já usaram
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                Cálculos atualizados de precatórios do TJSP em minutos, <br />
                <span className="text-brand">sem input manual.</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                Uma solução para intermediários/originadores que precisam precificar créditos com precisão, agilidade e menos risco operacional.
              </p>

              {/* Video Mockup */}
              <div className="relative max-w-4xl mx-auto mb-16 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand to-brand-dark rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative glass-card overflow-hidden aspect-video flex items-center justify-center bg-black">
                  <img 
                    src="https://picsum.photos/seed/platform/1200/675" 
                    alt="Platform Preview" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                    referrerPolicy="no-referrer"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center shadow-2xl shadow-brand/50 cursor-pointer hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <div className="text-center">
                      <p className="font-bold text-xl">Seu vídeo já começou</p>
                      <p className="text-brand text-sm font-semibold">Clique para ouvir</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6">
                <button className="btn-primary text-base md:text-lg px-8 md:px-12">
                  Quero assinar <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-dark bg-gray-800 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 font-medium">+1270 usuários já usaram</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading 
                  badge="O QUE VOCÊ ENCONTRARÁ NA MÁQUINA"
                  title="Tecnologia de ponta para precificação de ativos judiciais"
                  subtitle="O JusIn Cálculos para precatórios automatiza a leitura de PDFs e cálculos complexos do TJSP, eliminando erros manuais e acelerando sua originação."
                  centered={false}
                />

                <div className="space-y-6 mt-12">
                  <div className="flex gap-6 p-6 glass-card hover:border-brand/50 transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                      <TrendingUp className="w-7 h-7 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Cálculos Atualizados</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Aplicação automática de índices, juros e correções vigentes. Precisão absoluta para sua proposta comercial.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 glass-card hover:border-brand/50 transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                      <MessageSquare className="w-7 h-7 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Envio do Arquivo PDF no WhatsApp</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Envie o arquivo e receba o resultado diretamente no seu celular. Agilidade total para quem está em campo.</p>
                    </div>
                  </div>

                  <div className="flex gap-6 p-6 glass-card hover:border-brand/50 transition-colors group">
                    <div className="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                      <ShieldCheck className="w-7 h-7 text-brand" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Redução de Risco</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">Minimize erros operacionais que podem custar caro na hora de fechar a compra de um crédito.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-brand/10 blur-[100px] rounded-full -z-10" />
                <WhatsAppAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 mb-12">
            <SectionHeading 
              badge="DEPOIMENTOS"
              title="Veja Como Profissionais Como Você Triplicaram Resultados"
              subtitle="Resultados reais de quem aplicou o método e transformou sua atuação no mercado de precatórios."
            />
          </div>

          {/* Marquee (Simplified CSS Animation) */}
          <div className="relative flex overflow-hidden py-4">
            <div className="animate-marquee flex gap-8">
              {[
                { name: "Dr. Ribeiro Lima", role: "Advogado", content: "A ferramenta me mostrou caminhos estratégicos para precificar créditos que realmente funcionam. Excelente!" },
                { name: "Dra. Barbara Azevedo", role: "Originadora de Créditos", content: "Estou muito satisfeita, consegui originar 10 precatórios novos em um mês com a agilidade da plataforma." },
                { name: "Dra. Aline Lima", role: "Advogada", content: "Estou começando no mercado de ativos judiciais e essa ferramenta me deu a segurança que eu não tinha para calcular com precisão." },
                { name: "Dr. Marcos Silva", role: "Investidor", content: "Otimizei meu tempo em 80% na análise de carteiras do TJSP. Indispensável." },
                { name: "Dra. Juliana Costa", role: "Consultora Jurídica", content: "Precisão absoluta nos cálculos. O WhatsApp facilita demais o dia a dia." },
                { name: "Dr. Ricardo Santos", role: "Originador", content: "Finalmente uma solução que entende a complexidade dos precatórios estaduais." }
              ].concat([
                { name: "Dr. Ribeiro Lima", role: "Advogado", content: "A ferramenta me mostrou caminhos estratégicos para precificar créditos que realmente funcionam. Excelente!" },
                { name: "Dra. Barbara Azevedo", role: "Originadora de Créditos", content: "Estou muito satisfeita, consegui originar 10 precatórios novos em um mês com a agilidade da plataforma." },
                { name: "Dra. Aline Lima", role: "Advogada", content: "Estou começando no mercado de ativos judiciais e essa ferramenta me deu a segurança que eu não tinha para calcular com precisão." },
                { name: "Dr. Marcos Silva", role: "Investidor", content: "Otimizei meu tempo em 80% na análise de carteiras do TJSP. Indispensável." },
                { name: "Dra. Juliana Costa", role: "Consultora Jurídica", content: "Precisão absoluta nos cálculos. O WhatsApp facilita demais o dia a dia." },
                { name: "Dr. Ricardo Santos", role: "Originador", content: "Finalmente uma solução que entende a complexidade dos precatórios estaduais." }
              ]).map((t, i) => (
                <TestimonialCard 
                  key={i} 
                  name={t.name}
                  role={t.role}
                  content={t.content}
                />
              ))}
            </div>
            
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-dark to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-dark to-transparent z-10" />
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Badge className="mb-6">🔥 Oferta Exclusiva do Mês</Badge>
            <h2 className="text-4xl md:text-6xl font-black mb-8">Assine nosso plano promocional.</h2>
            <p className="text-gray-400 text-xl mb-12">Nós estruturamos, atualizamos e devolvemos pronto para precificação.</p>

            <div className="glass-card p-12 border-brand/30 relative">
              <div className="mb-12">
                <p className="text-brand font-bold uppercase tracking-widest text-sm mb-2">25 consultas mensais.</p>
                <div className="flex flex-col items-center">
                  <p className="text-6xl md:text-7xl font-black text-brand mb-2">R$ 49,90</p>
                </div>
              </div>

              <button className="btn-primary w-full text-lg md:text-xl mb-6">
                Quero assinar <ArrowRight className="w-6 h-6" />
              </button>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 opacity-50 grayscale">
                  <CreditCard className="w-6 h-6" />
                  <span className="font-bold">PIX | Cartão de Crédito</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Lock className="w-3 h-3" /> Compra 100% Segura e Garantida
                </div>
              </div>
            </div>

            <div className="mt-12 glass-card p-8 flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
              <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-10 h-10 text-brand" />
              </div>
              <div className="text-left">
                <h4 className="font-bold text-xl mb-1">Garantia de 7 dias</h4>
                <p className="text-gray-400 text-sm">Se você sentir que não gostou da ferramenta, nos devolvemos 100% do seu dinheiro. Sem ressentimentos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4">
            <SectionHeading 
              title="FAQ - Perguntas Frequentes"
            />
            <div className="glass-card p-8">
              <FAQItem 
                question="O que é o JusIn Cálculos para precatórios?"
                answer="É uma plataforma de automação para intermediários e originadores de ativos judiciais, focada em extração de dados de PDFs e cálculos de precatórios do TJSP."
              />
              <FAQItem 
                question="Para quem o JusIn Cálculos para precatórios é indicado?"
                answer="Para profissionais que atuam na compra e venda de créditos judiciais (originadores, intermediários e investidores) que precisam de agilidade e precisão na precificação."
              />
              <FAQItem 
                question="Como funciona a leitura do PDF?"
                answer="Basta enviar o arquivo do precatório pelo WhatsApp ou plataforma. Nossa IA identifica os campos essenciais, aplica os índices de correção e devolve o cálculo pronto."
              />
              <FAQItem 
                question="Os cálculos são atualizados?"
                answer="Sim, a plataforma utiliza os índices oficiais do TJSP, juros moratórios e correções vigentes, garantindo que sua proposta esteja sempre correta."
              />
              <FAQItem 
                question="A plataforma é segura?"
                answer="Sim, utilizamos criptografia de ponta a ponta e não armazenamos dados sensíveis dos processos além do necessário para a geração do cálculo solicitado."
              />
              <FAQItem 
                question="A plataforma tem atualização de teses?"
                answer="Sim, nossa equipe jurídica e de marketing atualiza constantemente o acervo com novas teses e otimizações de campanhas conforme as mudanças do mercado."
              />
            </div>
          </div>
        </section>

        {/* Contact WhatsApp Section */}
        <section id="contato" className="py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <SectionHeading 
              badge="SUPORTE"
              title="Fale com um Especialista"
              subtitle="Nossa equipe está pronta para tirar todas as suas dúvidas e ajudar você a escalar sua originação."
            />
            
            <div className="glass-card p-12 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-brand/10 flex items-center justify-center mb-8">
                <Headphones className="w-10 h-10 text-brand" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Atendimento Personalizado</h3>
              <p className="text-gray-400 mb-10 max-w-md">Clique no botão abaixo para iniciar uma conversa direta com nosso time de suporte via WhatsApp.</p>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary text-xl px-12 py-5 w-full md:w-auto flex items-center justify-center gap-3 shadow-xl shadow-brand/40"
              >
                <MessageSquare className="w-6 h-6" /> Fale conosco
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <img src="https://i.imgur.com/m7MGFCp.png" alt="JusIn Logo" className="h-20 w-auto object-contain" referrerPolicy="no-referrer" />
          </div>
          
          <p className="text-gray-500 text-sm mb-8">
            Copyright 2026 – Todos direitos reservados. <br />
            <a href="https://www.gabrielsolucoes.com.br" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand transition-colors">Gabriel Soluções</a>
          </p>

          <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-500 mb-12">
            <a href="#" className="hover:text-brand transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-brand transition-colors">Políticas de Privacidade</a>
          </div>

          <div className="max-w-4xl mx-auto text-[10px] text-gray-600 leading-relaxed uppercase tracking-tighter">
            A MNX Solutions valoriza a sua privacidade e segue rigorosamente as diretrizes da Lei Geral de Proteção de Dados (LGPD), garantindo a segurança e a transparência no tratamento de suas informações. Este site utiliza cookies e tecnologias similares para aprimorar sua experiência de navegação, conforme descrito em nossa Política de Privacidade. Ao continuar navegando, você concorda com estes termos. Caso não concorde, basta encerrar a navegação nesta página.
            <br /><br />
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados. Resultados obtidos de acordo com o desempenho de cada um, e inúmeros fatores individuais podem influenciar nisso, como a facilidade de aprendizagem, forma de aplicar, etc.
            <br /><br />
            Disclaimer: Este site não faz parte do site do Facebook ou Facebook Inc. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </div>
        </div>
      </footer>
    </div>
  );
}
