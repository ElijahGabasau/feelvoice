const noImage = require('../img/no-image.svg').default;

export const fetchTeachersAction = () => {
  return async function(dispatch) {
    const response = await fetch('/api/teachers');
    const responseJSON = await response.json();

    const parsed = [];

    for(let i = 0; i < responseJSON.length; i++){

      parsed.push({
        index: responseJSON[i].index,
        id: responseJSON[i]._id,
        name: responseJSON[i].name,
        title: responseJSON[i].title,
        image: responseJSON[i].image? `/api/resources/${responseJSON[i].image}` : noImage,
        imageHover: responseJSON[i].imageHover? `/api/resources/${responseJSON[i].imageHover}` : noImage,
        text: responseJSON[i].text,
        origins: {
          image: responseJSON[i].image,
          imageHover: responseJSON[i].imageHover,
        }
      });
    }

    dispatch({
      type: 'FETCH_TEACHERS',
      payload: parsed,
    });
  }
}

export const deleteTeacherAction = (id) => {
  return async (dispatch) => {
    const response = await fetch(`/api/teacher/${id}`, {
      method: 'DELETE',
    });
    const responseJSON = await response.json();

    const responseId = responseJSON._id;

    dispatch({
      type: 'DELETE_TEACHER',
      payload: responseId,
    });
  }
}

export const updateTeacherAction = (teacher) => {
  return async (dispatch) => {
    const formData  = new FormData();

    const toDelete = [];

    for(const name in teacher) {
      if (teacher[name] instanceof FileList && teacher[name].length === 0) {
        continue;
      } else if (teacher[name] instanceof FileList && teacher[name].length !== 0) {
        formData.append(name, teacher[name][0]);
        toDelete.push(teacher.origins[name]);
        continue;
      }

      formData.append(name, teacher[name]);
    }

    formData.append('toDelete', toDelete);

    const response = await fetch('/api/teacher', {
      method: 'PUT',
      body: formData || null,
    });
    const responseJSON = await response.json();

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      name: responseJSON.name,
      title: responseJSON.title,
      image: responseJSON.image? `/api/resources/${responseJSON.image}` : noImage,
      imageHover: responseJSON.imageHover? `/api/resources/${responseJSON.imageHover}` : noImage,
      text: responseJSON.text,
      origins: {
        image: responseJSON.image,
        imageHover: responseJSON.imageHover,
      }
    }

    dispatch({
      type: 'UPDATE_TEACHER',
      payload: parsed,
    });
  }
}

export const createTeacherAction = (teacher) => {
  return async (dispatch) => {
    const formData  = new FormData();

    for(const name in teacher) {
      if (teacher[name] instanceof FileList && teacher[name].length === 0) {
        continue;
      } else if (teacher[name] instanceof FileList && teacher[name].length !== 0) {
        formData.append(name, teacher[name][0]);
        continue;
      }

      formData.append(name, teacher[name]);
    }

    const response = await fetch('/api/teacher', {
      method: 'POST',
      body: formData || null,
    });
    const responseJSON = await response.json();

    const parsed = {
      index: responseJSON.index,
      id: responseJSON._id,
      name: responseJSON.name,
      title: responseJSON.title,
      image: responseJSON.image? `/api/resources/${responseJSON.image}` : noImage,
      imageHover: responseJSON.imageHover? `/api/resources/${responseJSON.imageHover}` : noImage,
      text: responseJSON.text,
      origins: {
        image: responseJSON.image,
        imageHover: responseJSON.imageHover,
      }
    }

    dispatch({
      type: 'CREATE_TEACHER',
      payload: parsed,
    });
  }
}