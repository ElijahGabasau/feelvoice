import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchTeachers, fetchClasses, fetchNews, fetchPinned, fetchTickets, fetchUser, loginUser, logoutUser } from '../actions';

import DataTeachers from '../components/DataTeachers';
import DataClasses from '../components/DataClasses';
import DataNews from '../components/DataNews';
import DataPinned from '../components/DataPinned';
import DataTickets from '../components/DataTickets';
import Footer from '../components/Footer';

function Admin(props) {
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    props.fetchTeachers();
    props.fetchClasses();
    props.fetchNews();
    props.fetchPinned();
    props.fetchTickets();
    props.fetchUser();
  }, []);

  const renderContent = () => {
    switch(props.auth) {
      case null:
        return;
      case false:
        return (
          <form
            className="data-admin"
            onSubmit={handleSubmit(value => props.loginUser(value))}
          >
            <div className="paragraph data__item">
              <label className="data-admin__label" htmlFor="username">Логин</label>
              <input className="data-admin__input" ref={register({required: true})} type="text" name="username" />
            </div>
            <div className="paragraph data__item">
              <label className="data-admin__label" htmlFor="password">Пароль</label>
              <input className="data-admin__input" ref={register({required: true})} type="password" name="password" />
            </div>
            <button className="data__btn" type="submit">Войти</button>
          </form>
        )
      default:
        return [
          <DataTeachers key="adimin-data-1" className="u-margin-bottom-md-2"/>,
          <DataClasses key="adimin-data-2" className="u-margin-bottom-md-2"/>,
          <DataNews key="adimin-data-3" className="u-margin-bottom-md-2"/>,
          <DataPinned key="adimin-data-4" className="u-margin-bottom-md-2"/>,
          <DataTickets key="adimin-data-5" className="u-margin-bottom-md-2"/>,
        ];
    }
  } 
  if(!props.auth){

  }

  return (
    <div >
      <div className="data-header u-margin-top-sm u-margin-bottom-md-2">
        <h1 className="heading-1">Панель администратора</h1>
        {props.auth && <button className="data__btn" type="button" onMouseDown={()=>props.logoutUser()} >Выйти</button>}
      </div>

      { renderContent() }

      <Footer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { fetchTeachers, fetchClasses, fetchNews, fetchPinned, fetchTickets, fetchUser, loginUser, logoutUser })(Admin);