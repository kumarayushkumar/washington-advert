import PageHero from '@/components/PageHero'

export default function RefundPolicy() {
  return (
    <section>
      <div className="text-center text-whiteout bg-whiteout">
        <PageHero heading="No Refund Policy" />
      </div>
      <div className="px-10 md:px-16 py-10 sm:py-12 md:py-16 font-medium flex flex-col gap-3 md:gap-4">
        <p>
          Washington Advert considers enhancing the value of the client's
          business through our cutting-edge services, and therefore we intend to
          provide superior quality services to the clients. We follow a
          crystal-clear simplified working approach to achieve the desired
          quality benchmark and an exceptional client experience.
        </p>
        <p>
          At Washington Advert, we work for clients' requirements with a
          result-driven strategy while separating them into achievable
          milestones to attain the expected goal. We keep evaluating the efforts
          and researching the performance for effective results while
          eliminating any cause for project or contract reversals,
          cancellations, or conflicts.
        </p>
        <p>
          We have to put an incredible amount of time and effort into every
          project to attain every milestone. That's why a refund is
          inconceivable for our services. Hence, we will refund no payment once
          the respective client agrees to move ahead with our services and we
          proceed into the project's development stage.
        </p>
        <p>
          If a project reaches an unexpected situation due to us, we begin with
          rework and honestly put our best efforts and skills into rectifying
          it, as we believe in maintaining wholesome and healthy business
          relationships. In case a project gets removed on mutual agreement of
          both parties, we terminate its further development, and the client can
          regain the project's control.
        </p>
      </div>
    </section>
  )
}
