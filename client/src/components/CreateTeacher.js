import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { createTeacher } from '../actions';
import EditImage from './EditImage';

const noImage = require('../img/no-image.svg').default;

function CreateTeacher(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit((value)=> props.createTeacher({ ...value }))} 
      className="data"
    >
      <div className="data__image-box">
        <EditImage 
          key="create-teacher-image"
          image={noImage}
          register={register}
          name="image"
        >
          Изображение
        </EditImage>
        <EditImage 
          key="create-teacher-hover"
          image={noImage}
          register={register}
          name="imageHover"
        >
          Ховер изображения
        </EditImage>
      </div>
      <div className="data__content">
        <div className="paragraph data__item" >
          <label htmlFor={`index`} className="u-bold">Позиция в списке:</label> 
          <input name={`index`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`name`} className="u-bold">Имя:</label> 
          <input name={`name`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`title`} className="u-bold">Подпись:</label> 
          <input name={`title`} className="data__input" type="text" ref={register} />
        </div>
          <div key="create-teacher-textarea-1" className="paragraph data__item" >
            <label htmlFor={`text-1`} className="u-bold">Параграф 1:</label> 
            <textarea name={`text-1`} className="data__input data__textarea" ref={register} />
          </div>

          <div key="create-teacher-textarea-2" className="paragraph data__item" >
            <label htmlFor={`text-2`} className="u-bold">Параграф 2:</label> 
            <textarea name={`text-2`} className="data__input data__textarea" ref={register} />
          </div>
      </div>
      <div className="data__button-bar">
        <button className="data__btn" type="submit">Создать</button>
      </div>
    </form>
  );
}

export default connect(null, { createTeacher })(CreateTeacher);