import React from 'react'

const Explained = () => {

     const Description = `Produktif adalah harapan semua orang setiap hari dalam melakukan aktivitas, tetapi sebagian orang belum tahu cara agar produktif. Bahkan sebagian orang hanya terhitung sibuk tetapi bukan produktif. Kamu tidak perlu bingung bagaimana solusinya , karena kami akan membantu mu untuk lebih produktif dengan fitur yang kami sediakan disini.`

     return (
          <>
               <div className="explained" style={textCenter}>
                    <h1 data-aos="fade-up"> How do you keep your day productive? </h1>
                    <p data-aos="fade-up" className="description">{Description}</p>
               </div>
               <div data-aos="fade-up" className="Featured">
                    <Feature title="Learn Timer" subtitle="Menyusun target yang akan dicapai kedepannya. Menyusun target yang akan dicapai kedepannya. Menyusun target yang akan dicapai kedepannya." />
                    <Feature title="Create To Do List" subtitle="Menyusun target yang akan dicapai kedepannya. Menyusun target yang akan dicapai kedepannya. Menyusun target yang akan dicapai kedepannya." />
                    <Feature title="Progress Test" subtitle="Menyusun target yang akan dicapai kedepannya. Menyusun target yang akan dicapai kedepannya. Menyusun target yang akan dicapai kedepannya." />
               </div>
          </>
     )
}

const Feature = (props) => {
     return (
          <div className="feature">
               <h2>{props.title}</h2>
               <p>{props.subtitle}</p>
          </div>
     )
}

const textCenter = {
     textAlign: 'center',
}

export default Explained;