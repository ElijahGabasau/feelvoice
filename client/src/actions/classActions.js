const noImage = require('../img/no-image.svg').default;

export const fetchClassesAction = () => {
  return async function(dispatch) {
    const response = await fetch('/api/classes');
    const responseJSON = await response.json();

    const parsed = [];

    for(let i = 0; i < responseJSON.length; i++){
      parsed.push({
        index: responseJSON[i].index,
        id: responseJSON[i]._id,
        type: responseJSON[i].type,
        title: responseJSON[i].title,
        image: responseJSON[i].image? `/api/resources/${responseJSON[i].image}` : noImage,
        thumbnail: responseJSON[i].thumbnail? `/api/resources/${responseJSON[i].thumbnail}` : noImage,
        thumbnailHover: responseJSON[i].thumbnailHover? `/api/resources/${responseJSON[i].thumbnailHover}` : noImage,
        text: responseJSON[i].text,
        origins: {
          image: responseJSON[i].image,
          thumbnail: responseJSON[i].thumbnail,
          thumbnailHover: responseJSON[i].thumbnailHover,
        }
      });
    }

    dispatch({
      type: 'FETCH_CLASSES',
      payload: parsed,
    });
  }
}

export const deleteClassAction = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/class/${id}`, {
      method: 'DELETE',
    });

    const responseJSON = await response.json();
    const responseId = responseJSON._id;

    dispatch({
      type: 'DELETE_CLASS',
      payload: responseId,
    });
  }
}

export const updateClassAction = (subject) => {
  return async function(dispatch) {
    const formData  = new FormData();
    const toDelete = [];

    for(const name in subject) {
      if (subject[name] instanceof FileList && subject[name].length === 0) {
        continue;
      } else if (subject[name] instanceof FileList && subject[name].length !== 0) {
        formData.append(name, subject[name][0]);
        toDelete.push(subject.origins[name]);
        continue;
      }

      formData.append(name, subject[name]);
    }

    formData.append('toDelete', toDelete);

    const response = await fetch('/api/class', {
      method: 'PUT',
      body: formData || null,
    });
    const responseJSON = await response.json();

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      type: responseJSON.type,
      title: responseJSON.title,
      image: responseJSON.image? `/api/resources/${responseJSON.image}` : noImage,
      thumbnail: responseJSON.thumbnail? `/api/resources/${responseJSON.thumbnail}` : noImage,
      thumbnailHover: responseJSON.thumbnailHover? `/api/resources/${responseJSON.thumbnailHover}` : noImage,
      text: responseJSON.text,
      origins: {
        image: responseJSON.image,
        thumbnail: responseJSON.thumbnail,
        thumbnailHover: responseJSON.thumbnailHover,
      }
    }

    dispatch({
      type: 'UPDATE_CLASS',
      payload: parsed,
    });
  }
}

export const createClassAction = (subject) => {
  return async function(dispatch) {
    const formData  = new FormData();

    for(const name in subject) {
      if (subject[name] instanceof FileList && subject[name].length === 0) {
        continue;
      } else if (subject[name] instanceof FileList && subject[name].length !== 0) {
        formData.append(name, subject[name][0]);
        continue;
      }

      formData.append(name, subject[name]);
    }

    const response = await fetch('/api/class', {
      method: 'POST',
      body: formData || null,
    });
    const responseJSON = await response.json();

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      type: responseJSON.type,
      title: responseJSON.title,
      image: responseJSON.image? `/api/resources/${responseJSON.image}` : noImage,
      thumbnail: responseJSON.thumbnail? `/api/resources/${responseJSON.thumbnail}` : noImage,
      thumbnailHover: responseJSON.thumbnailHover? `/api/resources/${responseJSON.thumbnailHover}` : noImage,
      text: responseJSON.text,
      origins: {
        image: responseJSON.image,
        thumbnail: responseJSON.thumbnail,
        thumbnailHover: responseJSON.thumbnailHover,
      }
    }

    dispatch({
      type: 'CREATE_CLASS',
      payload: parsed,
    });
  }
}