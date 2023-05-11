export default function Features() {
  return (
    <section id="nosotros">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">INSTRUCTORES</h2>
            <p className="text-xl text-gray-400">Contamos con un cuerpo docente altamente calificado</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <img className="" src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683754882/instructor-4-removebg-preview_me26nl.png" alt=""/>
              <div className="text-left mt-2">
                <h4 className="h4 mb-2">ALEXANDRA IRVINE</h4>
                <p className="text-xl font-bold text-gray-400">Ingles</p>
              </div>
            </div>


            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683755482/instructor-7-removebg-preview_zqiyih.png" alt=""/>
              <div className="text-left mt-2">
                <h4 className="h4 mb-2">JAIME ARCILLA</h4>
                <p className="text-xl font-bold text-gray-400">Matemáticas</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683755517/instructor-3-removebg-preview_eld6m2.png" alt=""/>
              <div className="text-left mt-2">
                <h4 className="h4 mb-2">NICOLAS GARCIA</h4>
                <p className="text-xl font-bold text-gray-400">Química</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683755345/instructor-6-removebg-preview_p72ahj.png" alt=""/>
              <div className="text-left mt-2">
                <h4 className="h4 mb-2">MADISON GRISALES</h4>
                <p className="text-xl font-bold text-gray-400">Biología</p>
              </div>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683755393/instructor-8-removebg-preview_jxnywk.png" alt=""/>
              <div className="text-left mt-2">
                <h4 className="h4 mb-2">MARCOS PANIAGUA</h4>
                <p className="text-xl font-bold text-gray-400">Física</p>
              </div>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <img src="https://res.cloudinary.com/ddonlrenm/image/upload/v1683755410/instructor-5-removebg-preview_plquzf.png" alt=""/>
              <div className="text-left mt-2">
                <h4 className="h4 mb-2">ELIO BEDOYA</h4>
                <p className="text-xl font-bold text-gray-400">Lectura Crítica</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
