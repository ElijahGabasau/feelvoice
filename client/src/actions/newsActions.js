export const fetchNewsAction = () => {
  return async function(dispatch) {
    const response = await fetch('/api/news');
    const responseJSON = await response.json();

    const parsed = [];

    for(let i = 0; i < responseJSON.length; i++){
      const image = [];

      for(let j = 0; j < responseJSON[i].image.length; j++){
        image.push(`/api/resources/${responseJSON[i].image[j]}`);
      }

      parsed.push({
        index: responseJSON[i].index,
        id: responseJSON[i]._id,
        title: responseJSON[i].title,
        image: image,
        text: responseJSON[i].text,
        origins: {
          image: responseJSON[i].image
        }
      });
    }

    dispatch({
      type: 'FETCH_NEWS',
      payload: parsed,
    });
  }
}

export const deleteNewsAction = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/news/${id}`, {
      method: 'DELETE',
    });
    const responseJSON = await response.json();

    const responseId = responseJSON._id;

    dispatch({
      type: 'DELETE_NEWS',
      payload: responseId,
    });
  }
}

export const updateNewsAction = (subject) => {
  return async function(dispatch) {
    const formData  = new FormData();
    const toDelete = [];

    for(const name in subject) {
      if (subject[name] instanceof FileList && subject[name].length === 0) {
        continue;
      } else if (subject[name] instanceof FileList && subject[name].length !== 0) {
        formData.append('image', subject[name][0]);
        
        const key = name.split('-');
        toDelete.push(subject.origins[key[1]]);
        continue;
      }

      formData.append(name, subject[name]);
    }

    formData.append('toDelete', toDelete);

    const response = await fetch('/api/news', {
      method: 'PUT',
      body: formData || null,
    });
    const responseJSON = await response.json();

    const responseImage = [];

    for(let j = 0; j < responseJSON.image.length; j++){
      responseImage.push(`/api/resources/${responseJSON.image[j]}`);
    }

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      title: responseJSON.title,
      image: responseImage,
      text: responseJSON.text,
      origins: {
        image: responseJSON.image
      }
    }

    dispatch({
      type: 'UPDATE_NEWS',
      payload: parsed,
    });
  }
}

export const createNewsAction = (subject) => {
  return async function(dispatch) {
    const formData  = new FormData();

    for(const name in subject) {
      if (subject[name] instanceof FileList && subject[name].length === 0) {
        continue;
      } else if (subject[name] instanceof FileList && subject[name].length !== 0) {
        formData.append('image', subject[name][0]);
        
        continue;
      }

      formData.append(name, subject[name]);
    }

    const response = await fetch('/api/news', {
      method: 'POST',
      body: formData || null,
    });
    const responseJSON = await response.json();

    const responseImage = [];

    for(let j = 0; j < responseJSON.image.length; j++){
      responseImage.push(`/api/resources/${responseJSON.image[j]}`);
    }

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      title: responseJSON.title,
      image: responseImage,
      text: responseJSON.text,
      origins: {
        image: responseJSON.image
      }
    }

    dispatch({
      type: 'CREATE_NEWS',
      payload: parsed,
    });
  }
}