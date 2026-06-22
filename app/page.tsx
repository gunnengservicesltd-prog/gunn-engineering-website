import Image from "next/image";

export default function Home() {
  const functionalSafetyItems = [
    "IEC 61508 / IEC 61511",
    "Hazard and Risk Assessments (HAZOP, LOPA, FTA)",
    "Safety Requirements Specifications (SRS) development",
    "Safety Integrity Level (SIL) assessments and verification",
    "Safety Instrumented System (SIS) design and implementation",
    "Independent safety audits and validation",
  ];

  const sectors = [
    "Oil & Gas (Onshore and Offshore)",
    "Chemical",
    "Petrochemical",
    "Pharmaceutical",
    "Energy",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-950">
      {/* Contact Bar */}
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
          <div className="flex items-center gap-4">
            <Image src="/ges-logo.png" alt="GES logo" width={140} height={70} />
            <div>
              <h1 className="text-lg font-bold">Gunn Engineering Services Ltd</h1>
              <p className="text-xs text-slate-600">
                Control & Instrumentation • Functional Safety Design & Engineering
              </p>
            </div>
          </div>

          <div className="text-right text-sm">
            <a
              href="mailto:gunnengservicesltd@gmail.com"
              className="font-semibold text-blue-700 hover:underline"
            >
              gunnengservicesltd@gmail.com
            </a>
            <p className="mt-1 text-xs text-slate-600">
              <a
                href="https://www.linkedin.com/in/anth-gunn-7b439251"
                className="text-blue-700 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="border-b bg-[#1a3a52] text-white">
        <div className="mx-auto flex max-w-7xl items-center gap-12 px-8 py-3 text-sm font-medium">
          <a href="#home" className="hover:text-blue-300">Home</a>
          <a href="#about" className="hover:text-blue-300">About GES</a>
          <a href="#services" className="hover:text-blue-300">Services</a>
          <a href="#sectors" className="hover:text-blue-300">Sectors</a>
          <a href="#functional-safety" className="hover:text-blue-300">Functional Safety</a>
          <a href="#contact" className="hover:text-blue-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-slate-50 via-white to-blue-50 py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="max-w-4xl">
            <h2 className="text-6xl font-extrabold leading-tight text-slate-950">
              Control & Instrumentation and Functional Safety Engineering Specialists
            </h2>
            <p className="mt-6 text-xl font-semibold text-blue-700">
              Practical, standards-led engineering support for safety-critical industries.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-700">
              Gunn Engineering Services Ltd provides Control & Instrumentation and Functional Safety 
              Design & Engineering support across oil & gas, chemical, petrochemical, pharmaceutical and 
              energy sectors. With over 20 years' experience, we support projects from FEED through to 
              construction and commissioning.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#services"
                className="rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white shadow hover:bg-blue-800"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="rounded-lg border-2 border-blue-700 px-8 py-4 font-semibold text-blue-700 hover:bg-blue-50"
              >
                Contact GES
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Stats */}
      <section className="border-y bg-[#1a3a52] text-white py-12">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold">20+</p>
              <p className="mt-2 text-sm">Years' Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold">5</p>
              <p className="mt-2 text-sm">Core Sectors</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold">FEED</p>
              <p className="mt-2 text-sm">to Commissioning</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">TÜV</p>
              <p className="mt-2 text-sm">Rheinland Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome/About Section */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-4xl font-bold text-slate-950">
            Welcome to Gunn Engineering Services
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            GES provides practical engineering support for regulated and safety-critical industries, 
            helping clients achieve compliance, reduce risk and deliver reliable operational systems.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">Control & Instrumentation</h2>
              <p className="mt-6 text-slate-700 leading-8">
                With over 20 years' working experience across oil & gas, chemical, petrochemical,
                pharmaceutical and energy sectors, GES provides project support from FEED through to construction and commissioning.
              </p>
              <div className="mt-8 space-y-3 text-slate-700">
                <p>• Conceptual Design</p>
                <p>• Tendering</p>
                <p>• FEED Design Workpacks</p>
                <p>• Detailed Design Workpacks</p>
                <p>• Construction Workpacks</p>
                <p>• Construction and Commissioning Support</p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-10 shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">Functional Safety Design & Engineering</h2>
              <p className="mt-3 text-sm uppercase tracking-wider text-blue-700 font-semibold">
                Protecting People, Assets and the Environment
              </p>
              <p className="mt-6 text-slate-700 leading-8">
                At Gunn Engineering Services, we specialise in Functional Safety Design and Engineering
                that ensures systems meet international safety standards and perform reliably under real-world conditions.
                Our expertise helps clients achieve compliance, reduce risk and safeguard people, processes and equipment
                without compromising productivity or innovation.
              </p>
              <div className="mt-8 space-y-3 text-slate-700">
                <p>• IEC 61508 / IEC 61511</p>
                <p>• Hazard and Risk Assessments (HAZOP, LOPA, FTA)</p>
                <p>• Safety Requirements Specifications (SRS) development</p>
                <p>• Safety Integrity Level (SIL) assessments and verification</p>
                <p>• Safety Instrumented System (SIS) design and implementation</p>
                <p>• Independent safety audits, assessments, validation and Verification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section id="sectors" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-4xl font-bold text-slate-950">Industry Sectors</h2>
          <div className="mt-8 flex flex-wrap gap-4">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-slate-300 bg-slate-100 px-6 py-3 font-medium text-slate-800"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Functional Safety Lifecycle Section */}
      <section id="functional-safety" className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-4xl font-bold text-slate-950">
            Functional Safety Design & Engineering Lifecycle
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Our comprehensive approach to functional safety ensures compliance, reliability and operational excellence.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {functionalSafetyItems.map((item, idx) => (
              <div key={idx} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-semibold text-slate-950">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <h2 className="text-4xl font-bold text-slate-950">Why Choose Gunn Engineering Services</h2>
          <ul className="mt-8 max-w-3xl space-y-4 text-lg text-slate-700">
            <li className="flex gap-4">
              <span className="font-bold text-blue-700">✔</span>
              <span>Certified Functional Safety Engineers (TÜV Rheinland)</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-700">✔</span>
              <span>Cross-industry experience across oil & gas, manufacturing, automotive, process and energy</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-700">✔</span>
              <span>End-to-end lifecycle support from early concept to decommissioning</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-700">✔</span>
              <span>Practical, compliant and cost-effective solutions</span>
            </li>
            <li className="flex gap-4">
              <span className="font-bold text-blue-700">✔</span>
              <span>Partnership approach — we integrate seamlessly with your team and tools</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-blue-50 to-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <h2 className="text-5xl font-bold text-slate-950">
            Engineering Safety. Enabling Innovation.
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-slate-700">
            With the right safety architecture, clients do not have to choose between reliability and performance.
          </p>
          <a
            href="mailto:gunnengservicesltd@gmail.com"
            className="mt-8 inline-block rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
          >
            Email GES
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-y bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold">Get in touch</h2>
              <p className="mt-6 text-slate-700">
                Email:{" "}
                <a className="font-semibold text-blue-700 hover:underline" href="mailto:gunnengservicesltd@gmail.com">
                  gunnengservicesltd@gmail.com
                </a>
              </p>
              <p className="mt-4 text-slate-700">
                LinkedIn:{" "}
                <a
                  className="font-semibold text-blue-700 hover:underline"
                  href="https://www.linkedin.com/in/anth-gunn-7b439251"
                >
                  anth-gunn-7b439251
                </a>
              </p>
              <p className="mt-4 text-slate-700">
                Website: <span className="font-semibold">www.gunnengineeringservices.co.uk</span>
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold">Request a call</h2>
              <p className="mt-6 text-slate-700">
                Provide your details and a brief summary, and we will reply by email to arrange a call.
              </p>
              <a
                href="mailto:gunnengservicesltd@gmail.com"
                className="mt-8 inline-block rounded-lg bg-blue-700 px-8 py-4 font-semibold text-white hover:bg-blue-800"
              >
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a52] text-white">
        <div className="mx-auto max-w-7xl px-8 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <Image src="/ges-logo.png" alt="GES logo" width={140} height={70} />
              <p className="mt-4 text-sm text-slate-300">
                Delivering practical, standards-led safety and control engineering
                solutions that keep people, assets and operations safe.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Services</h3>
              <p className="mt-4 text-sm text-slate-300">Control & Instrumentation</p>
              <p className="text-sm text-slate-300">Functional Safety Engineering</p>
              <p className="text-sm text-slate-300">Project Lifecycle Support</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Sectors</h3>
              <p className="mt-4 text-sm text-slate-300">Oil & Gas</p>
              <p className="text-sm text-slate-300">Chemical & Petrochemical</p>
              <p className="text-sm text-slate-300">Pharmaceutical & Energy</p>
            </div>

            <div>
              <h3 className="font-bold text-lg">Accreditations</h3>
              <p className="mt-4 text-sm text-slate-300">TÜV Rheinland Accredited</p>
              <p className="text-sm text-slate-300">IEC 61508 / IEC 61511</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 px-8 py-5 text-center text-sm text-slate-400">
          © 2026 Gunn Engineering Services Ltd. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

