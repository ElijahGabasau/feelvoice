import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { createTicket } from '../actions';

function CreateTicket(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit((value)=> props.createTicket({ ...value }))} 
      className="data"
    >
      <div className="data__image-box">

      </div>
      <div className="data__content">
        <div className="paragraph data__item" >
          <label htmlFor={`index`} className="u-bold">Позиция в списке:</label> 
          <input name={`index`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`type`} className="u-bold">Тип:</label> 
          <input name={`type`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`title`} className="u-bold">Название:</label> 
          <input name={`title`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`amount`} className="u-bold">Количество:</label> 
          <input name={`amount`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`price`} className="u-bold">Цена:</label> 
          <input name={`price`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`about`} className="u-bold">Подробнее:</label> 
          <input name={`about`} className="data__input" type="text" ref={register} />
        </div>
      </div>
      <div className="data__button-bar">
        <button className="data__btn" type="submit">Создать</button>
      </div>
    </form>
  );
}

export default connect(null, { createTicket })(CreateTicket);