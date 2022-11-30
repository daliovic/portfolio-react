import React from 'react'
import './About.css'
import './Contact.css'
import { AnimatePresence, AnimateSharedLayout, LayoutGroup, motion } from 'framer-motion'
//import icon
import { FaGithub } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import qr from '../../../assets/graphics/Whatsapp QR.png'
type infoType = {
  [key: string]: any
}
import myPhoto from '../../../assets/graphics/Me Dark Background square.jpg'
import { PopupButton } from 'react-calendly'
const info: any = [
  ['WhatsApp', '+216 53 458 430', FaWhatsapp, 'https://wa.me/21653458430'],
  ['LinkedIn', 'MedAliBT', FaLinkedin, 'https://www.linkedin.com/in/medalibt/'],
  ['Email', 'med.ali.benthaier@gmail.com', FaEnvelope, 'mailto:med.ali.benthaier@gmail.com'],
  ['GitHub', 'daliovic', FaGithub, 'github.com/daliovic'],
]

export default function Contact() {
  // const [divState, setDivState] = React.useState(false)
  // const [inState, setInState] = React.useState(false)
  const divVariants = {
    hidden: {
      // y: -30,
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0,
      },
    },
    shown: {
      // y: 0,
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0.1,
      },
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0,
      },
    },
  }
  const iconVariants = {
    initial: {
      width: '50px',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0,
      },
    },
    expanded: {
      width: '150px',
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
        delay: 0,
      },
    },
  }
  return (
    <div id='contact' className='section-wrapper contact'>
      <div className='section about d-flex flex-column align-items-center'>
        <h4>Contact</h4>
        <div className='d-flex col-12 justify-content-around flex-column flex-lg-row'>
          {info.map((key: any) => (
            <a key={key[0]} href={`${key[3]}`}>
              <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                  {/* {console.log(key[2])} */}
                  <div className='icon-container'>{key[2]()}</div>
                  {/* <div className=''>{key[0]}</div> */}
                </div>
                <div className='d-flex'>
                  <p className=''>{key[1]}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center pt-5 text-center px-3'>
          <div>
            <p>{`Feel free to schedule a meeting if you are interested in hiring me :)`}</p>
          </div>
          <PopupButton
            url='https://calendly.com/medalibenthaier/interview'
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById('root') as HTMLElement}
            text='Click here to schedule!'
          />
        </div>
      </div>
    </div>
  )
}
// <div className='col-12'>
//   {/* <AnimateSharedLayout>
//     <motion.ul layout>
//       <motion.li layout>
//         <motion.div
//           layout
//           className='test-card1'
//           onClick={() => {
//             setDivState(!divState)
//           }}>
//           *
//         </motion.div>
//       </motion.li>
//       <motion.li>
//         <AnimatePresence initial={false}>
//           {divState && (
//             <motion.div layout
//               variants={divVariants}
//               initial='hidden'
//               animate='shown'
//               exit='exit'
//               className='test-card2'></motion.div>
//           )}
//         </AnimatePresence>
//       </motion.li>
//     </motion.ul>
//   </AnimateSharedLayout> */}
//   <div className='d-flex row icons '>
//     <AnimatePresence initial={false}>
//       <motion.div
//         key='linkedin'
//         // layout
//         variants={iconVariants}
//         initial='initial'
//         animate={!inState ? 'initial' : 'expanded'}
//         // whileHover='expanded'
//         className='icon-container'
//         onMouseEnter={() => {
//           setInState(!inState)
//         }}>
//         {/* <LayoutGroup key="linkedinC"> */}
//         <FaLinkedin size={20} />
//         {inState && (
//           <motion.div
//             animate={{ opacity: 1 }}
//             initial={{ opacity: 0 }}
//             exit={{ opacity: 0 }}
//             transition={{ delay: 0.2 }}>
//             LinkedIn
//           </motion.div>
//         )}
//         {/* </LayoutGroup> */}
//       </motion.div>
//       <motion.div
//         key='Github'
//         // layout
//         // variants={iconVariants}
//         // initial='initial'
//         // // whileHover='expanded'
//         // animate='initial'
//         variants={{}}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className='icon-container'
//         onMouseEnter={() => {
//           setInState(!inState)
//         }}></motion.div>
//     </AnimatePresence>
//   </div>
// </div>
