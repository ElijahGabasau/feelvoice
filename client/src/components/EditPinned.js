import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { updatePinned, deletePinned } from '../actions';

import EditImage from './EditImage';

function EditPinned(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit((value)=> props.updatePinned({
        ...value,
        id: props.data.id,
        origins: props.data.origins.image
      }))} 
      className="data"
    >
      <div className="data__image-box">
        {props.data.image && 
          <EditImage 
            key={`${props.data.id}-thumbnail-component`}
            id={props.data.id}
            image={props.data.image}
            register={register}
            name="image"
          >
            Изображение
          </EditImage>
        }
      </div>
      <div className="data__content">
        <div className="paragraph data__item" >
          <label htmlFor={`index`} className="u-bold">Позиция в списке:</label> 
          <input name={`index`} className="data__input" type="text" ref={register} defaultValue={props.data.index}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`title`} className="u-bold">Название:</label> 
          <input name={`title`} className="data__input" type="text" ref={register} defaultValue={props.data.title}/>
        </div>
        <div key={`${props.data.id}-textarea`} className="paragraph data__item" >
          <label htmlFor={`text`} className="u-bold">Параграф:</label> 
          <textarea name={`text`} className="data__input data__textarea" ref={register} defaultValue={props.data.text}/>
        </div>
      </div>
      <div className="data__button-bar">
        <button className="data__btn" type="submit">Обновить</button>
        <button className="data__btn" type="button" onMouseDown={() => props.deletePinned(props.data.id)}>Удалить</button>
      </div>
    </form>
  );
}

export default connect(null, { updatePinned, deletePinned })(EditPinned);