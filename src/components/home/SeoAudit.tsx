import { SeoAuditForm } from '../form/SeoAuditForm'

export default function SeoAudit() {
  return (
    <section id="seo-audit" className="text-center">
      <div className="py-16">
        <p className="text-4xl font-medium font-sub text-accent">
          Get your Free SEO Audit in 30 Seconds
        </p>
        <p className="text-sm md:text-base lg:text-lg max-w-[80%] mx-auto mt-6">
          Enter the URL of your homepage or any page you want to see the
          performance of and get a free SEO report in your inbox. It's that
          simple!
        </p>
        <div className="mx-auto flex justify-center mt-8">
          <SeoAuditForm />
        </div>
      </div>
    </section>
  )
}
