"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/hooks/use-language"

export default function TermsOfServicePage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: January 2025",
      sections: [
        {
          title: "1. Service Description",
          content:
            "Burarecruiting is an AI-powered platform operated by Burakorn Partners Co., Ltd. We provide express CV delivery services, delivering a shortlist of 5 pre-screened candidates within 24-48 hours for $1,800 USD per search. We are a technology platform, not a licensed recruitment agency.",
        },
        {
          title: "2. Service Limitations",
          content:
            "Our service includes: (a) Sourcing candidates from 7 major platforms, (b) AI and expert HR pre-screening, (c) Delivery of 5 candidate CVs. Our service does NOT include: (a) Ongoing support after delivery, (b) Background screening or verification, (c) Re-pressing or replacement guarantees, (d) Interview coordination or hiring assistance.",
        },
        {
          title: "3. Payment Terms",
          content:
            "Payment of $1,800 USD is required upfront before we begin sourcing. All payments are processed securely through our payment provider. Prices are subject to change with notice. Refunds are not provided once sourcing has begun.",
        },
        {
          title: "4. Delivery Timeline",
          content:
            "We aim to deliver your shortlist within 24-48 hours of receiving your complete job brief and payment. Delivery times may vary based on job complexity and market conditions. Delays beyond our control do not constitute grounds for refund.",
        },
        {
          title: "5. Client Responsibilities",
          content:
            "You agree to: (a) Provide accurate and complete job requirements, (b) Respond to clarification requests promptly, (c) Use candidate information responsibly and in compliance with applicable laws, (d) Not share or resell candidate information to third parties.",
        },
        {
          title: "6. Intellectual Property",
          content:
            "All platform content, including our AI matching algorithms, remains the property of Burakorn Partners Co., Ltd. Candidate CVs are provided for your internal hiring purposes only.",
        },
        {
          title: "7. Limitation of Liability",
          content:
            "We provide candidates 'as-is' without warranties. We are not liable for: (a) Candidate performance or suitability, (b) Hiring decisions or outcomes, (c) Indirect or consequential damages. Our total liability is limited to the amount paid for the service.",
        },
        {
          title: "8. Governing Law",
          content:
            "These terms are governed by the laws of Thailand. Any disputes shall be resolved in Thai courts. By using our service, you agree to these terms.",
        },
        {
          title: "9. Contact",
          content:
            "For questions about these terms, contact legal@burakornpartners.com or write to: Burakorn Partners Co., Ltd., Thailand.",
        },
      ],
    },
    ru: {
      title: "Условия использования",
      lastUpdated: "Последнее обновление: Январь 2025",
      sections: [
        {
          title: "1. Описание услуги",
          content:
            "Burarecruiting - это платформа на основе ИИ, управляемая Burakorn Partners Co., Ltd. Мы предоставляем услуги экспресс-доставки резюме, доставляя список из 5 предварительно отобранных кандидатов в течение 24-48 часов за $1,800 USD за поиск. Мы являемся технологической платформой, а не лицензированным рекрутинговым агентством.",
        },
        {
          title: "2. Ограничения услуги",
          content:
            "Наша услуга включает: (а) Поиск кандидатов на 7 крупных платформах, (б) Предварительный отбор с помощью ИИ и экспертов HR, (в) Доставку резюме 5 кандидатов. Наша услуга НЕ включает: (а) Постоянную поддержку после доставки, (б) Проверку биографии или верификацию, (в) Гарантии замены, (г) Координацию собеседований или помощь в найме.",
        },
        {
          title: "3. Условия оплаты",
          content:
            "Оплата в размере $1,800 USD требуется авансом до начала поиска. Все платежи обрабатываются безопасно через нашего платежного провайдера. Цены могут изменяться с уведомлением. Возврат средств не предоставляется после начала поиска.",
        },
        {
          title: "4. Сроки доставки",
          content:
            "Мы стремимся доставить ваш список в течение 24-48 часов после получения полного описания вакансии и оплаты. Сроки доставки могут варьироваться в зависимости от сложности вакансии и рыночных условий. Задержки вне нашего контроля не являются основанием для возврата средств.",
        },
        {
          title: "5. Обязанности клиента",
          content:
            "Вы соглашаетесь: (а) Предоставлять точные и полные требования к вакансии, (б) Оперативно отвечать на запросы уточнений, (в) Использовать информацию о кандидатах ответственно и в соответствии с применимым законодательством, (г) Не передавать и не перепродавать информацию о кандидатах третьим лицам.",
        },
        {
          title: "6. Интеллектуальная собственность",
          content:
            "Весь контент платформы, включая наши алгоритмы подбора на основе ИИ, остается собственностью Burakorn Partners Co., Ltd. Резюме кандидатов предоставляются только для ваших внутренних целей найма.",
        },
        {
          title: "7. Ограничение ответственности",
          content:
            "Мы предоставляем кандидатов 'как есть' без гарантий. Мы не несем ответственности за: (а) Производительность или пригодность кандидатов, (б) Решения о найме или результаты, (в) Косвенные или последующие убытки. Наша общая ответственность ограничена суммой, уплаченной за услугу.",
        },
        {
          title: "8. Применимое право",
          content:
            "Эти условия регулируются законодательством Таиланда. Любые споры разрешаются в судах Таиланда. Используя нашу услугу, вы соглашаетесь с этими условиями.",
        },
        {
          title: "9. Контакты",
          content:
            "По вопросам об этих условиях обращайтесь по адресу legal@burakornpartners.com или пишите: Burakorn Partners Co., Ltd., Таиланд.",
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
