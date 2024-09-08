//imeges
import photo from '../assets/img/123.png';
//icons
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variantes
import { fadeIn } from '../variants';
import { Link } from 'react-router-dom';

//

const Banner = () => {
  return (
    <section className="section h-auto w-[100vw] flex items-center flex-col">
      <div className="container mx-auto   ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="h1 text-[50px] text-indigo-600 font-bold leading-none text- lg:text-[90px]"
            >
              GABRIELA <span>DO ESPIRITU SANTO</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <TypeAnimation
                sequence={[
                  'Princesa ',
                  2000,
                  'Hija de Dios',
                  2000,
                  'Mi futura esposa',
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mt-2 max-w-lg mx-auto lg:mx-0"
            >
              Hola princesa no sabia como pedirte que fueras mi novia de una
              manera sencilla y normal.Se los momentos que has pasado y queria
              proponerte si de verdad quieres ser mi novia?
            </motion.p>

            <motion.div
              variants={fadeIn('up', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link className="btn btn-lg flex items-center" to="/contact">
                SI ❤
              </Link>

              <button className="btn btn-lg ">
                <Link to="/" className="text-gradient btn-link">
                  NO💔
                </Link>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-[50%] flex justify-center  "></div>
    </section>
  );
};

export default Banner;
