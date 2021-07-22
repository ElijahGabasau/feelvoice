import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { submitContact } from '../utilities';

import Button from '../components/Button';
import GoBackCross from '../components/GoBackCross';
import { modalTransition, modalVariants } from './transitionProp';


function ModalForm() {
  const { register, handleSubmit, errors } = useForm();

  return (
    <motion.div 
      initial="out"
      animate="in"
      exit="out"
      variants={modalVariants}
      transition={modalTransition}
      >
      <div className="modal modal--form">
        <GoBackCross className="modal__figure" />
        <h1 className="modal__heading">Связаться с нами</h1>
        <form className="modal__form"
          onSubmit={handleSubmit(value => submitContact(value))}
        >
          <div className="modal__form-piece modal__form-piece--1">
            <label className="modal__label" htmlFor="name">Имя*</label>
            <input 
              ref={register({required: true})} 
              className="modal__input" 
              type="text" 
              name="name" 
              placeholder={errors.name && 'Поле "Имя" обязательно'} 
            />
          </div>
          <div className="modal__form-piece modal__form-piece--2">
            <label className="modal__label" htmlFor="phone">Телефон*</label>
            <input 
              ref={register({required: true})} 
              className="modal__input" 
              type="tel" 
              name="tel" 
              placeholder={errors.tel && 'Поле "Телефон" обязательно'} 
            />
          </div>
          <div className="modal__form-piece modal__form-piece--3">
            <label className="modal__label" htmlFor="email">Email*</label>
            <input 
              ref={register({required: true})} 
              className="modal__input" 
              type="email" 
              name="email"
              placeholder={errors.email && 'Поле "Email" обязательно'}  
            />
          </div>
          <div className="modal__form-piece modal__form-piece--4">
            <label className="modal__label" htmlFor="text">Желаемое направление</label>
            <input ref={register()} className="modal__input" type="text" name="text" />
          </div>
          <Button type="3" className="btn--dark modal__btn" action="submit">Отправить</Button>
        </form>
      </div>
    </motion.div>
  )
}

export default ModalForm;