import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { createClass } from '../actions';
import EditImage from './EditImage';

const noImage = require('../img/no-image.svg').default;

function CreateClass(props) {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={ handleSubmit((value)=> props.createClass({ ...value }))} 
      className="data"
    >
      <div className="data__image-box">
        <EditImage 
          key="create-class-image"
          image={ noImage }
          register={ register }
          name="image"
        >
          Изображение
        </EditImage>
        <EditImage 
          key="create-class-thumbnail"
          image={ noImage }
          register={ register }
          name="thumbnail"
        >
          Иконка
        </EditImage>
        <EditImage 
          key="create-class-thumnail-hover"
          image={ noImage }
          register={ register }
          name="thumbnailHover"
        >
          Ховер иконки
        </EditImage>
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
          <div key="create-class-textarea-1" className="paragraph data__item" >
            <label htmlFor={`text-1`} className="u-bold">Параграф 1:</label> 
            <textarea name={`text-1`} className="data__input data__textarea" ref={register} />
          </div>

          <div key="create-class-textarea-2" className="paragraph data__item" >
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

export default connect(null, { createClass })(CreateClass);