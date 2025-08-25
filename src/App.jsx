import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Star, Users, Target, Zap, Brain, MessageCircle, ExternalLink, CheckCircle, ArrowRight } from 'lucide-react'
import FormModal from './components/FormModal.jsx'
import './App.css'

// Import assets
import heroBackground from './assets/H1hBQ7Ww5a6A.jpg'
import camilaPhoto from './assets/camila-photo.png'
import synthra_logo from './assets/synthra_logo.png'
import consultingIcon from './assets/OP4D1kmeyOoa.jpg'
import mentoringIcon from './assets/TMB8IAEM0g3I.jpg'
import techBackground from './assets/29Q1UH5czkij.jpg'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [currentForm, setCurrentForm] = useState('')

  const openModal = (formType) => {
    setCurrentForm(formType)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setCurrentForm('')
  }

  const handleWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5551994724351?text=${encodedMessage}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Estratégia, tecnologia
              <br />
              <span className="text-blue-400">e clareza para destravar</span>
              <br />
              seu crescimento.
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-3xl mx-auto">
              Mentorias, consultorias e treinamentos para líderes
              <br />
              e profissionais que querem avançar rápido.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full"
                onClick={() => openModal('analise-gratuita')}
              >
                <Target className="mr-2 h-5 w-5" />
                Agendar Análise Gratuita
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white bg-transparent hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full"
                onClick={() => window.open('https://chat.whatsapp.com/BgRgC0mETusFEDRnx0ZVzR', '_blank')}
              >
                <Users className="mr-2 h-5 w-5" />
                Entrar na Nave Nexialista
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 rotate-90 text-white opacity-70" />
        </div>
      </section>

      {/* Sobre Camila Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6">Sobre Camila</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Sou Camila Goulart, consultora, mentora e fundadora da Synthra.ia.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Há mais de 10 anos conecto tecnologia, processos e pessoas para destravar negócios e impulsionar carreiras.
                </p>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Hoje, ajudo líderes e profissionais que querem crescer com estratégia, visão sistêmica e inteligência emocional.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-600 text-white">10+ anos experiência</Badge>
                  <Badge variant="secondary" className="bg-purple-600 text-white">Fundadora Synthra.ia</Badge>
                  <Badge variant="secondary" className="bg-green-600 text-white">Visão Sistêmica</Badge>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img 
                    src={camilaPhoto} 
                    alt="Camila Goulart" 
                    className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-full p-4">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Serviços</h2>
              <p className="text-xl text-gray-300">Soluções personalizadas para seu crescimento</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Consultoria Estratégica */}
              <Card className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Consultorias Estratégicas</CardTitle>
                  <CardDescription className="text-gray-300">
                    Diagnóstico profundo para identificar gargalos.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => openModal('analise-gratuita')}
                  >
                    Agendar Diagnóstico Gratuito
                  </Button>
                </CardContent>
              </Card>

              {/* Mentoria Destravar Negócio */}
              <Card className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Mentoria para Destravar o Negócio</CardTitle>
                  <CardDescription className="text-gray-300">
                    Para empreendedores, CEOs, diretores. 4 encontros online.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700"
                    onClick={() => openModal('mentoria-negocio')}
                  >
                    Aplicar para Participar
                  </Button>
                </CardContent>
              </Card>

              {/* Mentoria Evolução Profissional */}
              <Card className="bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Mentoria Evolução Profissional</CardTitle>
                  <CardDescription className="text-gray-300">
                    Para profissionais travados na carreira. 5 sessões individuais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => openModal('mentoria-profissional')}
                  >
                    Aplicar para Participar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Ebook Mente Nexialista Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <Brain className="h-12 w-12 text-purple-400 mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">Ebook</h3>
                      <p className="text-purple-300">Lançamento Especial</p>
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">
                    Mente Nexialista
                  </h2>
                  <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                    Descubra como desenvolver uma mentalidade que conecta áreas, ideias e pessoas para resolver problemas complexos de forma inovadora.
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Metodologia exclusiva de pensamento sistêmico</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Exercícios práticos para desenvolver conexões</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                      <span>Cases reais de aplicação do nexialismo</span>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg rounded-full"
                    onClick={() => window.open('https://pay.kiwify.com.br/cCYAeSe', '_blank')}
                  >
                    <Brain className="mr-2 h-5 w-5" />
                    Adquirir Ebook Agora
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl p-8 transform rotate-3 shadow-2xl">
                    <div className="bg-white rounded-lg p-6 transform -rotate-3">
                      <div className="text-center">
                        <Brain className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">MENTE</h3>
                        <h3 className="text-2xl font-bold text-purple-600 mb-4">NEXIALISTA</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p>• Pensamento Sistêmico</p>
                          <p>• Conexões Inovadoras</p>
                          <p>• Resolução Criativa</p>
                          <p>• Visão Holística</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm transform rotate-12">
                    NOVO!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treinamento Nexialista Section */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${techBackground})`
        }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Brain className="h-16 w-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-4xl font-bold mb-6">Treinamento para Mentes Nexialistas</h2>
              <p className="text-xl text-gray-300 mb-8">
                Aprenda a pensar como um Nexialista: conecte áreas, ideias e pessoas para resolver problemas complexos.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg rounded-full"
                onClick={() => openModal('lista-espera')}
              >
                Entrar na Lista de Espera
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comunidade Nave Nexialista */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <MessageCircle className="h-16 w-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Comunidade Nave Nexialista</h2>
            <p className="text-xl text-gray-300 mb-8">
              Um espaço para pessoas inquietas expandirem ideias e conexões sobre Nexialismo, IA e futuro.
            </p>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg rounded-full"
              onClick={() => window.open('https://chat.whatsapp.com/BgRgC0mETusFEDRnx0ZVzR', '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Entrar na Nave
            </Button>
          </div>
        </div>
      </section>

      {/* Validação Synthra */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <img 
                      src={synthra_logo} 
                      alt="Synthra Logo" 
                      className="h-20 w-auto"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-4 text-white">Fundadora da Synthra.ia</h3>
                    <p className="text-gray-300 mb-6">
                      Sou fundadora da Synthra.ia, empresa especializada em automação, inteligência artificial e processos inteligentes.
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                      onClick={() => window.open('https://www.synthraia.com.br', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Conheça a Synthra
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Camila Goulart</h3>
            <p className="text-gray-400 mb-6">Consultoria e Mentoria</p>
            <div className="flex justify-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => handleWhatsApp('Olá, Camila! Gostaria de saber mais sobre seus serviços.')}
              >
                WhatsApp
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => window.open('https://www.synthraia.com.br', '_blank')}
              >
                Synthra.ia
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* Form Modal */}
      <FormModal 
        isOpen={showModal} 
        onClose={closeModal} 
        formType={currentForm} 
      />
    </div>
  )
}

export default App

