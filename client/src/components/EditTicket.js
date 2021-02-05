import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updateTicket, deleteTicket } from '../actions';

function EditTicket(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit((value)=> props.updateTicket({
        ...value,
        id: props.data.id,
      })) } 
      className="data"
    >
      <div className="data__image-box">
      
      </div>
      <div className="data__content">
        <div className="paragraph data__item" >
          <label htmlFor={`index`} className="u-bold">Позиция в списке:</label> 
          <input name={`index`} className="data__input" type="text" ref={register} defaultValue={props.data.index}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`type`} className="u-bold">Тип:</label> 
          <input name={`type`} className="data__input" type="text" ref={register} defaultValue={props.data.type}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`title`} className="u-bold">Название:</label> 
          <input name={`title`} className="data__input" type="text" ref={register} defaultValue={props.data.title}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`amount`} className="u-bold">Количество:</label> 
          <input name={`amount`} className="data__input" type="text" ref={register} defaultValue={props.data.amount}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`price`} className="u-bold">Цена:</label> 
          <input name={`price`} className="data__input" type="text" ref={register} defaultValue={props.data.price}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`about`} className="u-bold">Подробнее:</label> 
          <input name={`about`} className="data__input" type="text" ref={register} defaultValue={props.data.about}/>
        </div>
      </div>
      <div className="data__button-bar">
        <button className="data__btn" type="submit">Обновить</button>
        <button className="data__btn" type="button" onMouseDown={() => props.deleteTicket(props.data.id)}>Удалить</button>
      </div>
    </form>
  );
}

export default connect(null, { updateTicket, deleteTicket })(EditTicket);