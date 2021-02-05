import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { updateTeacher, deleteTeacher } from '../actions';

import EditImage from './EditImage';

function EditTeacher(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit((value)=> props.updateTeacher({
        ...value, 
        id: props.data.id, 
        origins: props.data.origins
      })
      )} 
      className="data"
    >
      <div className="data__image-box">
        <EditImage 
          key={`${props.data.id}-image-component`}
          image={props.data.image}
          register={register}
          name="image"
        >
          Изображение
        </EditImage>
        <EditImage 
          key={`${props.data.id}-hover-component`}
          image={props.data.imageHover}
          register={register}
          name="imageHover"
        >
          Ховер изображения
        </EditImage>
      </div>
      <div className="data__content">
        <div className="paragraph data__item" >
          <label htmlFor={`index`} className="u-bold">Позиция в списке:</label> 
          <input name={`index`} className="data__input" type="text" ref={register} defaultValue={props.data.index}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`name`} className="u-bold">Имя:</label> 
          <input name={`name`} className="data__input" type="text" ref={register} defaultValue={props.data.name}/>
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`title`} className="u-bold">Название:</label> 
          <input name={`title`} className="data__input" type="text" ref={register} defaultValue={props.data.title}/>
        </div>
          <div key={`${props.data.id}-textarea-1`} className="paragraph data__item" >
            <label htmlFor={`text-1`} className="u-bold">Параграф 1:</label> 
            <textarea name={`text-1`} className="data__input data__textarea" ref={register} defaultValue={props.data.text[0]}/>
          </div>

          <div key={`${props.data.id}-textarea-2`} className="paragraph data__item" >
            <label htmlFor={`text-2`} className="u-bold">Параграф 2:</label> 
            <textarea name={`text-2`} className="data__input data__textarea" ref={register} defaultValue={props.data.text[1]}/>
          </div>
      </div>
      <div className="data__button-bar">
        <button className="data__btn" type="submit">Обновить</button>
        <button className="data__btn" type="button" onMouseDown={() => props.deleteTeacher(props.data.id)}>Удалить</button>
      </div>
    </form>
  );
}

export default connect(null, { updateTeacher, deleteTeacher })(EditTeacher);