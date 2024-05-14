import { ContactUsForm } from '@/components/form/ContactForm'

export function ContactUs() {
  const list = [
    {
      title: 'Expert',
      description: 'Team members'
    },
    {
      title: 'divider'
    },
    {
      title: 'Results-Driven',
      description: 'Approach'
    },
    {
      title: 'divider'
    },
    {
      title: 'Streamlined',
      description: 'Execution'
    }
  ]
  return (
    <section className="" id="contact-us">
      <div className="contact-us-hero h-96">
        <div className="lg:px-52 xl:px-64 py-44 text-whiteout font-highlight font-bold container">
          <p className="text-[2.5rem]">Give Us a Shout</p>
          <p className="text-xl mt-4">It's never too late</p>
        </div>
      </div>
      <div className="py-6 lg:py-14 px-6 md:px-16 lg:px-10 xl:px-40 contact-us-form-wrapper grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="col-span-1 py-12 text-white">
          <p className="uppercase text-xl">TAKE THE SILK ROAD TO</p>
          <p className="text-6xl md:mt-8 font-sub font-semibold">
            Digitizing Your Business Growth
          </p>
          <div className="flex mt-20 justify-between">
            {list.map((item, index) => (
              <div key={index}>
                {item.title === 'divider' ? (
                  <span
                    key={index}
                    className="border-[0.5px] border-slate-200/80"></span>
                ) : (
                  <div key={index} className="flex flex-col gap-[0.125rem]">
                    <p className="">{item.title}</p>
                    <p className="text-lg font-semibold">{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white py-12 px-12 md:max-w-[80%] mx-auto lg:w-full">
            <p className="font-highlight text-xl">
              Let's grow your Brand Online
            </p>
            <p className="mt-2 lg:mt-3 text-3xl font-semibold">
              Start a conversation with us
            </p>
            <div className="bg-white flex items-center ">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
