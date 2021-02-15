import { useForm } from 'react-hook-form';
import { submitContact } from '../utilities';

import Button from './Button';
import Arrows from '../figures/Arrows';

function CtaForm(props) {
  const { register, handleSubmit, errors } = useForm();

  return(
    <section
      className={`cta-form ${props.className}`}>
      <div className="cta-form__hero">
        <h3 className="cta-form__heading">Записывайтесь на бесплатное пробное занятие</h3>
        <Arrows className="cta-form__arrows" />
      </div>
      <form 
        className="cta-form__form"
        onSubmit={handleSubmit(value => submitContact(value, -1))}
      >
        <input 
          ref={ register({ required: true }) } 
          name="name" 
          type="text"
          className={`cta-form__input ${errors.name? 'cta-form__input--error' : ''}`} 
          placeholder={errors.name? 'Поле "Имя" обязательно' : 'Имя *'} 
        />
        <input 
          ref={ register({ required: true }) } 
          name="email" 
          type="email" 
          className={`cta-form__input ${errors.email? 'cta-form__input--error' : ''}`} 
          placeholder={errors.email? 'Поле "Email" обязательно' : 'Email *'} 
        />
        <input 
          ref={ register({ required: true }) } 
          name="tel" 
          type="tel" 
          className={`cta-form__input ${errors.tel? 'cta-form__input--error' : ''}`} 
          placeholder={errors.tel? 'Поле "Телефон" обязательно' : 'Телефон *'} 
        />
        <input 
          ref={ register } 
          name="text" 
          type="text" 
          placeholder="Ваши пожелания" 
          className={`cta-form__input ${errors.text? 'cta-form__input--error' : ''}`} 
        />

        <Button type="1" className="cta-form__btn" action="submit">Записаться</Button>
      </form>
    </section>
  )
}

export default CtaForm;