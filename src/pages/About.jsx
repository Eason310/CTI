import Layout from "../components/Layout"

function Container({ children }) {
  return <div className="mx-auto max-w-5xl px-4">{children}</div>
}

function Supporter({ src, alt, className = "" }) {
  return (
    <div className="flex h-28 items-center justify-center">
      <img
        src={src}
        alt={alt}
        className={`w-auto object-contain transition ${className}`}
      />
    </div>
  )
}

export default function About() {
  return (
    <Layout>
      <main>
        {/* ABOUT CTI */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-bold tracking-tight">About CTI</h1>

              <div className="mt-4 text-lg font-semibold text-blue-600">
                Est. 2025
              </div>

              <p className="mt-10 text-[17px] leading-8 text-zinc-700">
                The Columbia Technology Insight is Columbia University’s premier
                journal for global emerging technology, business, AI policy, and
                campus innovators. We started in 2026. Rooted in New York City
                and the Columbia ecosystem, we aim to build the next generation’s
                technology journal, defined by unique perspective, valuable
                content, and an independent voice. This journal is run by
                students.
              </p>
            </div>
          </Container>
        </section>

        {/* SUPPORTERS */}
        <section className="bg-white py-24">
          <Container>
            <h2 className="text-center text-4xl font-bold text-blue-600">
              Our Supporters
            </h2>

            <div className="mt-14 grid grid-cols-2 gap-x-12 gap-y-14 md:grid-cols-3">
              <Supporter
                src="/logos/Columbia.png"
                alt="Columbia University"
                className="max-h-[300px]"
              />
              <Supporter
                src="/logos/SEAS.png"
                alt="Columbia Engineering"
                className="max-h-[100px]"
              />
              <Supporter
                src="/logos/CVP.webp"
                alt="CVP"
                className="max-h-[72px]"
              />
              <Supporter
                src="/logos/Soma_Capital.png"
                alt="Soma Capital"
                className="max-h-[56px]"
              />
              <Supporter
                src="/logos/Barnard.webp"
                alt="Barnard College"
                className="max-h-[130px]"
              />
              <Supporter
                src="/logos/Claude.png"
                alt="Claude by Anthropic"
                className="max-h-[300px]"
              />
            </div>
          </Container>
        </section>
      </main>
    </Layout>
  )
}
