import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { X, Star, ArrowRight } from 'lucide-react'

const FormModal = ({ isOpen, onClose, formType }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({})
  const [urgencyLevel, setUrgencyLevel] = useState(5)

  if (!isOpen) return null

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    setCurrentStep(prev => prev + 1)
  }

  const handleBack = () => {
    setCurrentStep(prev => prev - 1)
  }

  const handleWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/5551994724351?text=${encodedMessage}`, '_blank')
    onClose()
  }

  const handleAsaasRedirect = (url) => {
    window.open(url, '_blank')
    onClose()
  }

  const renderUrgencyScale = () => (
    <div className="space-y-4">
      <Label className="text-white">Em uma escala de 0 a 10, qual sua urgência?</Label>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-400">0</span>
        <input
          type="range"
          min="0"
          max="10"
          value={urgencyLevel}
          onChange={(e) => setUrgencyLevel(e.target.value)}
          className="flex-1 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <span className="text-sm text-gray-400">10</span>
      </div>
      <div className="text-center">
        <span className="text-2xl font-bold text-blue-400">{urgencyLevel}</span>
      </div>
    </div>
  )

  const getFormConfig = () => {
    switch (formType) {
      case 'analise-gratuita':
        return {
          title: 'Análise Gratuita',
          description: 'Vamos identificar os gargalos do seu negócio',
          steps: [
            {
              title: 'Informações Básicas',
              fields: [
                { name: 'nome', label: 'Nome completo', type: 'text', required: true },
                { name: 'email', label: 'E-mail', type: 'email', required: true },
                { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true },
                { name: 'cargo', label: 'Cargo/Área', type: 'text', required: true }
              ]
            },
            {
              title: 'Sobre seus desafios',
              fields: [
                { 
                  name: 'desafio', 
                  label: 'Qual seu maior desafio hoje?', 
                  type: 'select',
                  options: [
                    'Falta de estratégia clara',
                    'Problemas de gestão de equipe',
                    'Dificuldades financeiras',
                    'Falta de processos',
                    'Problemas de tecnologia',
                    'Outro'
                  ]
                },
                { name: 'resultado', label: 'Qual resultado gostaria de alcançar nos próximos 6 meses?', type: 'textarea', required: true }
              ]
            },
            {
              title: 'Urgência',
              fields: [
                { name: 'urgencia', label: 'Urgência', type: 'scale' }
              ]
            }
          ],
          finalMessage: 'Olá, Camila! Acabei de preencher o formulário de análise gratuita e quero agendar minha sessão.'
        }

      case 'mentoria-negocio':
        return {
          title: 'Mentoria para Destravar o Negócio',
          description: 'Para empreendedores, CEOs e diretores',
          steps: [
            {
              title: 'Informações Profissionais',
              fields: [
                { name: 'nome', label: 'Nome completo', type: 'text', required: true },
                { name: 'email', label: 'E-mail corporativo', type: 'email', required: true },
                { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true },
                { name: 'cargo_empresa', label: 'Cargo e empresa', type: 'text', required: true }
              ]
            },
            {
              title: 'Desafios do Negócio',
              fields: [
                { 
                  name: 'desafio', 
                  label: 'Qual seu maior desafio hoje?', 
                  type: 'select',
                  options: [
                    'Crescimento estagnado',
                    'Problemas de liderança',
                    'Falta de estratégia',
                    'Gestão de equipe',
                    'Processos ineficientes',
                    'Outro'
                  ]
                },
                { name: 'impactos', label: 'Quais impactos isso gera no negócio?', type: 'textarea', required: true }
              ]
            },
            {
              title: 'Investimento',
              fields: [
                { 
                  name: 'investimento', 
                  label: 'Está pronto para investir R$ 4.497?', 
                  type: 'radio',
                  options: ['Sim', 'Quero entender mais', 'Não agora']
                }
              ]
            }
          ],
          price: 'R$ 4.497,00',
          asaasUrl: 'https://www.asaas.com/c/2rjfn6wa3madps5c',
          finalMessage: 'Olá, Camila! Acabei de preencher o formulário da Mentoria para Destravar o Negócio e quero agendar minha sessão premium.'
        }

      case 'mentoria-profissional':
        return {
          title: 'Mentoria Evolução Profissional',
          description: 'Para profissionais que querem destravar a carreira',
          steps: [
            {
              title: 'Informações Pessoais',
              fields: [
                { name: 'nome', label: 'Nome completo', type: 'text', required: true },
                { name: 'email', label: 'E-mail', type: 'email', required: true },
                { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true },
                { name: 'cargo_atual', label: 'Cargo atual', type: 'text', required: true }
              ]
            },
            {
              title: 'Sobre sua Carreira',
              fields: [
                { name: 'incomodo', label: 'O que mais te incomoda na carreira hoje?', type: 'textarea', required: true },
                { name: 'tentativas', label: 'O que já tentou sozinho(a) e não funcionou?', type: 'textarea', required: true },
                { name: 'consequencias', label: 'O que aconteceria se nada mudar?', type: 'textarea', required: true }
              ]
            },
            {
              title: 'Urgência e Investimento',
              fields: [
                { name: 'urgencia', label: 'Urgência para mudar', type: 'scale' },
                { 
                  name: 'investimento', 
                  label: 'Está pronto para investir R$ 997?', 
                  type: 'radio',
                  options: ['Sim', 'Quero entender mais', 'Não agora']
                }
              ]
            }
          ],
          price: 'R$ 997,00',
          asaasUrl: 'https://www.asaas.com/c/b9ajv9e5p1113a9u',
          finalMessage: 'Olá, Camila! Acabei de preencher o formulário da Mentoria Evolução Profissional e quero agendar minha mentoria.'
        }

      case 'lista-espera':
        return {
          title: 'Lista de Espera - Treinamento Nexialista',
          description: 'Seja um dos primeiros a participar',
          steps: [
            {
              title: 'Informações Básicas',
              fields: [
                { name: 'nome', label: 'Nome completo', type: 'text', required: true },
                { name: 'email', label: 'E-mail', type: 'email', required: true },
                { name: 'whatsapp', label: 'WhatsApp', type: 'tel', required: true },
                { name: 'motivo', label: 'Por que quer participar da primeira turma?', type: 'textarea', required: true }
              ]
            }
          ],
          finalMessage: 'Olá, Camila! Acabei de me inscrever na lista de espera do Treinamento Nexialista.'
        }

      default:
        return null
    }
  }

  const config = getFormConfig()
  if (!config) return null

  const currentStepData = config.steps[currentStep - 1]
  const isLastStep = currentStep === config.steps.length
  const showInvestmentResult = isLastStep && formData.investimento === 'Sim' && (config.price || config.asaasUrl)

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'tel':
        return (
          <Input
            type={field.type}
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="bg-gray-700 border-gray-600 text-white"
            required={field.required}
          />
        )
      
      case 'textarea':
        return (
          <Textarea
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
            required={field.required}
          />
        )
      
      case 'select':
        return (
          <select
            value={formData[field.name] || ''}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white"
            required={field.required}
          >
            <option value="">Selecione uma opção</option>
            {field.options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        )
      
      case 'radio':
        return (
          <RadioGroup
            value={formData[field.name] || ''}
            onValueChange={(value) => handleInputChange(field.name, value)}
            className="space-y-2"
          >
            {field.options.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`${field.name}-${index}`} />
                <Label htmlFor={`${field.name}-${index}`} className="text-white">{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      
      case 'scale':
        return renderUrgencyScale()
      
      default:
        return null
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="bg-gray-800 border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="absolute right-2 top-2 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-white text-2xl">{config.title}</CardTitle>
          <CardDescription className="text-gray-300">{config.description}</CardDescription>
          
          {/* Progress bar */}
          <div className="flex space-x-2 mt-4">
            {config.steps.map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded ${
                  index + 1 <= currentStep ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Etapa {currentStep} de {config.steps.length}: {currentStepData.title}
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {showInvestmentResult ? (
            <div className="text-center space-y-6">
              <div className="bg-green-900/20 border border-green-500 rounded-lg p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-2">Perfeito!</h3>
                <p className="text-gray-300 mb-4">
                  Você está qualificado para participar da {config.title}
                </p>
                <div className="text-3xl font-bold text-white mb-4">
                  {config.price}
                </div>
                <div className="space-y-3">
                  <Button
                    onClick={() => handleAsaasRedirect(config.asaasUrl)}
                    className="w-full bg-green-600 hover:bg-green-700 text-lg py-3"
                  >
                    Garantir Minha Vaga Agora
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleWhatsApp(config.finalMessage)}
                    className="w-full border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    Falar com Camila no WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <>
              {currentStepData.fields.map((field, index) => (
                <div key={index} className="space-y-2">
                  <Label className="text-white font-medium">{field.label}</Label>
                  {renderField(field)}
                </div>
              ))}
              
              <div className="flex justify-between pt-4">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700"
                  >
                    Voltar
                  </Button>
                )}
                
                <div className="ml-auto">
                  {isLastStep ? (
                    <Button
                      onClick={() => {
                        if (formData.investimento === 'Sim' && config.asaasUrl) {
                          // Mostra resultado do investimento
                          setCurrentStep(prev => prev + 1)
                        } else {
                          handleWhatsApp(config.finalMessage)
                        }
                      }}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Finalizar
                    </Button>
                  ) : (
                    <Button
                      onClick={handleNext}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Próximo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default FormModal

