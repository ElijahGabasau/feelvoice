function EditImage(props) {
  if(!Array.isArray(props.image)){
    return(
      <div>
        <figure className="u-flex-column " >
          <label className="paragraph u-bold">{props.children}:</label>
          <img className="data__image" src={props.image} alt="admin visualisation" />
        </figure>
        <input name={props.name} className="data__input data__input" type="file" ref={props.register}/>
      </div>
    )
  }

  const image = [];

  for(let i = 0; i < props.image.length; i++){
    image.push(
      <div key={`${props.id}-${i}-news-image`}>
        <figure className="u-flex-column " >
          <label className="paragraph u-bold">{props.children} {i + 1}:</label>
          <img className="data__image" src={props.image[i]} alt="visualisation" />
        </figure>
        <input name={`${props.name}-${i}`} className="data__input data__input--file" type="file" ref={props.register}/>
      </div>
    );
  }

  return image;
}

export default EditImage;