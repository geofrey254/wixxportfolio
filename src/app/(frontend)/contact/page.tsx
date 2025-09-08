import ContactHero from '@/components/contactpage/ContactHero'
import ContactInfo from '@/components/contactpage/ContactInfo'
import ContactForm from '@/components/contactpage/ContactForm'
import ContactCTA from '@/components/contactpage/ContactCTA'

export default function page() {
  return (
    <div>
      {/* Hero Section */}
      <ContactHero />

      {/* Main Content */}
      <div className="py-10 md:py-28 -mt-6 md:-mt-15 bg-white dark:bg-gray-900 dark:border-t dark:border-white rounded-t-4xl relative z-30 overflow-hidden">
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </div>
      <ContactCTA />
    </div>
  )
}
