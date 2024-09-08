import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Whatsapp from '../assets/icon/whatsapp-svgrepo-com.svg';

const Contact = () => {
  return (
    <section className="section h-[100%] mb-10">
      <div className="container mx-auto ">
        <h2 classname="border-l-2">
          Bueno dijiste que si por que programe para que el No .no funcionara
          <p>dejame decirte que tomaste la decision correcta</p>
          <p>
            Quiero que sepas que senti mas en estos dias  que llevo conociendote que
            en 2 anos con una persona.te quiero mucho princesa yo quiero seamos
            una pareja estable que los problemas que tengamos los sepamos
            resolver y si te eligo a ti como mi pareja elijo a gabriela por
            que se que tiene un corazon enorme que necesita amor yo no soy
            perfecto tengo muchos errores y de seguro voy a necesitar de tu apoyo
            para corregirlo y crecer juntos yo estoy empezando de 0 como tu aqui
            en estados unidos y me encantaria que crecieramos juntos de la mano de dios
            si el barco se hunde yo salto contigo eres una hermosa persona que
            yo aprecio mucho y aunque me da miedo volverme a enamorar lo voy a
            intentar contigo me encanta tus defectos me encantan tus cicatrices
            y no las fisicas si no las que te han marcado para seguir adelante
            espero que esto sea el comienzo de algo eterno y siempre me hables
            con la verdad asi duela bienvenida a la puerta de mi corazon ❤
          </p>
          <h1>ya sabes lo que tienes que hacer</h1>
          <h2>apreta el whasapp</h2>
        </h2>
        <div className="relative h-[1.8rem]">
          <a
            className="absolute bottom-0 right-3 lg:right-14 animate-pulse"
            href="https://wa.me/17209937227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-10" src={Whatsapp} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
