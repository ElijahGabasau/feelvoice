import { motion } from 'framer-motion';

function Ticket(props) {
  return (
    <motion.div 
      initial={{opacity: 0, y: "50%"}}
      animate={{opacity: 1, y: "0%"}}
      exit={{opacity: 0,}}
      transition={{
        duration: 0.9
      }}
      className={`ticket ticket--${props.position}`}
      >
      <div className="ticket__title">
        <h2 className="heading-4">{props.title}</h2>
        <h3 className="heading-5 heading-5--dark">{props.amount}</h3>
      </div>
      <p className="ticket__price">{props.price} BYN</p>
      <svg className="ticket__image">
        <use href={props.figure}></use>
      </svg>
      <p className="ticket__about">{props.about}</p>
    </motion.div>
  )
}

export default Ticket;