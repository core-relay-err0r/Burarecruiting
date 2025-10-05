"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function PrivacyPolicyPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. Information We Collect",
          content:
            "We collect information you provide when creating job briefs, including company details, job requirements, and contact information. We also collect payment information processed securely through our payment provider.",
        },
        {
          title: "2. How We Use Your Information",
          content:
            "We use your information to: (a) Process your CV delivery orders, (b) Match candidates to your requirements, (c) Communicate with you about your orders, (d) Improve our AI-powered matching system, (e) Comply with legal obligations.",
        },
        {
          title: "3. Data Sharing",
          content:
            "We do not sell your personal information. We may share data with: (a) Service providers who assist in order fulfillment, (b) Payment processors for transaction processing, (c) Legal authorities when required by law.",
        },
        {
          title: "4. Data Security",
          content:
            "We implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure. We use encryption for sensitive data and regularly update our security protocols.",
        },
        {
          title: "5. Your Rights",
          content:
            "You have the right to: (a) Access your personal data, (b) Request correction of inaccurate data, (c) Request deletion of your data, (d) Opt-out of marketing communications. Contact us at legal@burakornpartners.com to exercise these rights.",
        },
        {
          title: "6. Cookies",
          content:
            "We use essential cookies to operate our platform and analytics cookies to improve our services. You can control cookie preferences through your browser settings.",
        },
        {
          title: "7. Contact Us",
          content:
            "For privacy-related questions, contact us at legal@burakornpartners.com or write to: Burakorn Partners Co., Ltd., Thailand.",
        },
      ],
    },
    ru: {
      title: "Политика конфиденциальности",
      lastUpdated: "Последнее обновление: Январь 2025",
      sections: [
        {
          title: "1. Информация, которую мы собираем",
          content:
            "Мы собираем информацию, которую вы предоставляете при создании описания вакансии, включая данные о компании, требования к должности и контактную информацию. Мы также собираем платежную информацию, которая обрабатывается безопасно через нашего платежного провайдера.",
        },
        {
          title: "2. Как мы используем вашу информацию",
          content:
            "Мы используем вашу информацию для: (а) Обработки заказов на доставку резюме, (б) Подбора кандидатов под ваши требования, (в) Связи с вами по поводу заказов, (г) Улучшения нашей системы подбора на основе ИИ, (д) Соблюдения юридических обязательств.",
        },
        {
          title: "3. Передача данных",
          content:
            "Мы не продаем вашу личную информацию. Мы можем передавать данные: (а) Поставщикам услуг, помогающим в выполнении заказов, (б) Платежным системам для обработки транзакций, (в) Правоохранительным органам по требованию закона.",
        },
        {
          title: "4. Безопасность данных",
          content:
            "Мы применяем стандартные меры безопасности для защиты ваших данных. Однако ни один метод передачи через интернет не является на 100% безопасным. Мы используем шифрование для конфиденциальных данных и регулярно обновляем наши протоколы безопасности.",
        },
        {
          title: "5. Ваши права",
          content:
            "Вы имеете право: (а) Получить доступ к своим личным данным, (б) Запросить исправление неточных данных, (в) Запросить удаление ваших данных, (г) Отказаться от маркетинговых коммуникаций. Свяжитесь с нами по адресу legal@burakornpartners.com для реализации этих прав.",
        },
        {
          title: "6. Файлы cookie",
          content:
            "Мы используем необходимые файлы cookie для работы платформы и аналитические cookie для улучшения наших услуг. Вы можете управлять настройками cookie через настройки браузера.",
        },
        {
          title: "7. Свяжитесь с нами",
          content:
            "По вопросам конфиденциальности свяжитесь с нами по адресу legal@burakornpartners.com или напишите: Burakorn Partners Co., Ltd., Таиланд.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">Burarecruiting</span>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === "en" ? "Back to Home" : "Вернуться на главную"}
          </Button>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
        <p className="text-slate-600 mb-8">{t.lastUpdated}</p>

        <div className="space-y-8">
          {t.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
              <p className="text-slate-700 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
