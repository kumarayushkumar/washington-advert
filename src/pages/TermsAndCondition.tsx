import PageHero from '@/components/PageHero'

export default function TermsAndCondition() {
  const sections = [
    {
      title: 'The Contract',
      content: (
        <>
          <p>
            Washington Advert and the clients will consider a liberated
            contractor relationship. This business association can't be
            classified as a joint venture, partnership, or all the rest by
            either party. Washington Advert and the client will agree upon the
            services' beginning date after finalizing the services and top
            solutions provided by the company. Charges will be applicable
            according to the concluded date. The respective client can not
            withdraw or fully transfer the service commitments to another
            service provider company without any notice in advance of at least
            one month. Washington Advert Pvt Ltd. reserves the right to deal
            with third-party service providers for some professional
            responsibilities.
          </p>
        </>
      )
    },
    {
      title: 'Payment',
      content: (
        <>
          <p>
            The clients obtaining any monthly service package from Washington
            Advert have to pay the total chargeable payment before the work
            begins. Washington Advert reserves the right to deliver the
            versatility to the clients in terms of payment. Clients are
            answerable for paying at least half of the charged amount before the
            beginning of the work-the remaining payment is to be delivered
            within 7 days of the first settlement. If clients do not deliver an
            applicable monthly payment when it is due, Washington Advert can
            discontinue the services directly. The company will not be liable
            for disseminating prior notice in this case.
          </p>
        </>
      )
    },
    {
      title: ' Liability ',
      content: (
        <>
          <p>
            Washington Advert will not be held accountable for any indirect or
            noteworthy failures due to delays in liable and unavoidable services
            under natural or exceptional causes. The clients will uphold, cover,
            and maintain Washington Advert harmless from and against any
            affirmations, liabilities, losses, and fees related to the services
            provided by Washington Advert to the respective clients under this
            agreement. Washington Advert is not accountable for the declarations
            made by third parties associated with any faulty advertising claims,
            liability claims for services or products sold by the client,
            copyright or trademark infringement cases, patent-related claims,
            lawsuits due to disorder or malfunction of the client's services, or
            for any content raised by you for publication by Washington Advert.
          </p>
          <p>
            The characteristics of digital media information or content given by
            the respective clients of Washington Advert for publication will
            ultimately be available to the public. Washington Advert will not be
            liable for screening the material and any failures or damages of
            goodwill profit or business acquisition due to that published
            content.
          </p>
          <p>
            Washington Advert reserves the right to rectify, add or remove any
            matter of the above terms and conditions at any time. The meaningful
            modifications in the terms and conditions will be notified to the
            clients.
          </p>
        </>
      )
    }
  ]

  return (
    <section>
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="Privacy Policy" />
      </div>
      <div className="px-10 md:px-16 py-10 sm:py-12 md:py-16 font-medium">
        <p>
          Washington Advert is earmarked to deal with its clients
          professionally. By getting in touch with us and availing of our
          top-notch services, the clients will be accepting the following terms
          and conditions:
        </p>
        {sections.map((section, index) => (
          <div className="mt-8" key={index}>
            <p className="text-2xl md:text-3xl font-medium md:font-semibold py-2">
              {section.title}
            </p>
            {section.content}
          </div>
        ))}
      </div>
    </section>
  )
}
