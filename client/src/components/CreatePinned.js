import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';

import { createPinned } from '../actions';
import EditImage from './EditImage';

const noImage = require('../img/no-image.svg').default;

function CreatePinned(props) {
  const { register, handleSubmit } = useForm();

  const render = [];

  for(let i = 0; i < 6; i++) {
    render.push(
      <EditImage 
        key={`create-news-image-${i}`}
        image={ noImage }
        register={ register }
        name={`image-${i}`}
      >
        Изображение {i + 1}
      </EditImage>
    )
  }

  return (
    <form onSubmit={ handleSubmit((value)=> props.createPinned({ ...value }))} 
      className="data"
    >
      <div className="data__image-box">

        { render }

      </div>
      <div className="data__content">
        <div className="paragraph data__item" >
          <label htmlFor={`index`} className="u-bold">Позиция в списке:</label> 
          <input name={`index`} className="data__input" type="text" ref={register} />
        </div>
        <div className="paragraph data__item" >
          <label htmlFor={`title`} className="u-bold">Подпись:</label> 
          <input name={`title`} className="data__input" type="text" ref={register} />
        </div>
          <div key="create-news-textarea" className="paragraph data__item" >
            <label htmlFor={`text`} className="u-bold">Параграф:</label> 
            <textarea name={`text`} className="data__input data__textarea" ref={register} />
          </div>
      </div>
      <div className="data__button-bar">
        <button className="data__btn" type="submit">Создать</button>
      </div>
    </form>
  );
}

export default connect(null, { createPinned })(CreatePinned);