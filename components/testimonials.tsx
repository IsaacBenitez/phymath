import React from 'react'

export default function Testimonials() {

  return (
    <section id="servicios">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Servicios</h2>
            <p className="text-xl text-gray-400">"Invertir en conocimientos produce siempre los mejores beneficios". Benjamin Franklin.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" data-aos="fade-up">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683759434/comunicacion-linea_pthfsr.jpg" alt=""/>
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <h4 className="h4 mt-5">PREICFES</h4>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Préparate de manera interactiva con metodología didáctica e innovadora para la prueba ICFES Saber 11.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex items-center">
                <cite className="text-gray-200 not-italic">$50000/m</cite>
                <form className="ml-10" action="https://checkout.wompi.co/p/" method="GET">

                  <input type="hidden" name="public-key" value="pub_test_r4FxBGiKNxZPvSvQCXra6ehgei0wKhW2" />
                  <input type="hidden" name="currency" value="COP" />
                  <input type="hidden" name="amount-in-cents" value="5000000" />
                  <input type="hidden" name="reference" value="3b4393bafed398ba9" />

                  <input type="hidden" name="signature:integrity" value="187e7d36f4ad1a2e55efea2c97fe44670b1a7f39a1128abd693f0acb2971011e"/>
                  <input type="hidden" name="redirect-url" value="http://localhost:3000/" />
                  <input type="hidden" name="tax-in-cents:vat" value="0" />
                  <input type="hidden" name="tax-in-cents:consumption" value="0" />
                  <input type="hidden" name="customer-data:email" value="benitezisaac421@gmail.com" />
                  <input type="hidden" name="customer-data:full-name" value="Isaac Benitez" />
                  <input type="hidden" name="customer-data:phone-number" value="3991111111" />
                  <input type="hidden" name="customer-data:legal-id" value="1214742757" />
                  <input type="hidden" name="customer-data:legal-id-type" value="CC" />
                  <input type="hidden" name="shipping-address:address-line-1" value="DIRECCION_DE_ENVIO" />
                  <input type="hidden" name="shipping-address:country" value="CO" />
                  <input type="hidden" name="shipping-address:phone-number" value="3012884485" />
                  <input type="hidden" name="shipping-address:city" value="CIUDAD_DE_ENVIO" />
                  <input type="hidden" name="shipping-address:region" value="REGION_DE_ENVIO" />
                  <button className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out bg-transparent border border-purple-600 hover:bg-purple-600 py-2 px-4 rounded-md">MATRICULARME</button>
                </form>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" data-aos="fade-up" data-aos-delay="200">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683760336/retrato-muchacha-atractiva-linda-joven-estudiante-aislada-pared-blanca_ztc4ic.jpg" alt=""/>
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <h4 className="h4 mt-5">PREUNIVERSITARIO</h4>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Vive la experiencia universitaria con orientación vocacional, preparación para los exámenes de admisión y cursos introductorios.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex items-center">
                <cite className="text-gray-200 not-italic">$80000/m</cite>
                <form className="ml-10" action="https://checkout.wompi.co/p/" method="GET">

                  <input type="hidden" name="public-key" value="pub_test_r4FxBGiKNxZPvSvQCXra6ehgei0wKhW2" />
                  <input type="hidden" name="currency" value="COP" />
                  <input type="hidden" name="amount-in-cents" value="8000000" />
                  <input type="hidden" name="reference" value="3b4393bafed398ba6" />

                  <input type="hidden" name="signature:integrity" value="2348aa41882618768367589f2acdf12e647819062cdd2231ed911c46e0112e8c"/>
                  <input type="hidden" name="redirect-url" value="http://localhost:3000/" />
                  <input type="hidden" name="tax-in-cents:vat" value="0" />
                  <input type="hidden" name="tax-in-cents:consumption" value="0" />
                  <input type="hidden" name="customer-data:email" value="benitezisaac421@gmail.com" />
                  <input type="hidden" name="customer-data:full-name" value="Isaac Benitez" />
                  <input type="hidden" name="customer-data:phone-number" value="3991111111" />
                  <input type="hidden" name="customer-data:legal-id" value="1214742757" />
                  <input type="hidden" name="customer-data:legal-id-type" value="CC" />
                  <input type="hidden" name="shipping-address:address-line-1" value="DIRECCION_DE_ENVIO" />
                  <input type="hidden" name="shipping-address:country" value="CO" />
                  <input type="hidden" name="shipping-address:phone-number" value="3012884485" />
                  <input type="hidden" name="shipping-address:city" value="CIUDAD_DE_ENVIO" />
                  <input type="hidden" name="shipping-address:region" value="REGION_DE_ENVIO" />
                  <button className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out bg-transparent border border-purple-600 hover:bg-purple-600 py-2 px-4 rounded-md">MATRICULARME</button>
                </form>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900" data-aos="fade-up" data-aos-delay="200">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683763211/nino-jugando-rompecabezas_zvmpwl.jpg" alt=""/>
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <h4 className="h4 mt-5">DESAROLLO DEL PENSAMIENTO LÓGICO, CRÍTICO Y DEDUCTIVO</h4>
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Potencializa tus habilidades desarrollando un pensamiento académico integral.</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700 flex items-center">
                <cite className="text-gray-200 not-italic">$40000/m</cite>
                <form className="ml-10" action="https://checkout.wompi.co/p/" method="GET">

                  <input type="hidden" name="public-key" value="pub_test_r4FxBGiKNxZPvSvQCXra6ehgei0wKhW2" />
                  <input type="hidden" name="currency" value="COP" />
                  <input type="hidden" name="amount-in-cents" value="4000000" />
                  <input type="hidden" name="reference" value="3b4393bafed398ba5" />

                  <input type="hidden" name="signature:integrity" value="016b3c4e3741303be2021709588d1de453c459a2b2afe810f17d543ddaae1334"/>
                  <input type="hidden" name="redirect-url" value="http://localhost:3000/" />
                  <input type="hidden" name="tax-in-cents:vat" value="0" />
                  <input type="hidden" name="tax-in-cents:consumption" value="0" />
                  <input type="hidden" name="customer-data:email" value="benitezisaac421@gmail.com" />
                  <input type="hidden" name="customer-data:full-name" value="Isaac Benitez" />
                  <input type="hidden" name="customer-data:phone-number" value="3991111111" />
                  <input type="hidden" name="customer-data:legal-id" value="1214742757" />
                  <input type="hidden" name="customer-data:legal-id-type" value="CC" />
                  <input type="hidden" name="shipping-address:address-line-1" value="DIRECCION_DE_ENVIO" />
                  <input type="hidden" name="shipping-address:country" value="CO" />
                  <input type="hidden" name="shipping-address:phone-number" value="3012884485" />
                  <input type="hidden" name="shipping-address:city" value="CIUDAD_DE_ENVIO" />
                  <input type="hidden" name="shipping-address:region" value="REGION_DE_ENVIO" />
                  <button className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out bg-transparent border border-purple-600 hover:bg-purple-600 py-2 px-4 rounded-md">MATRICULARME</button>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
