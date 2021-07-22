import { switchTickets } from '../actions';
import { connect } from 'react-redux';

function PrisingHeader(props) {
  return(
    <header className="prising-header u-noised-container">
      <form className="prising-form">
          <div className="prising-form__item" >
            <input id="prising-radio-1" className="prising-form__input" type="radio" name="type" defaultChecked/>
            <svg className="prising-form__radio" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="prising-form__radio--base" x="1" y="0.5" width="19" height="19" stroke="#D73B30"/>
              <rect className="prising-form__radio--active" x="5.5" y="5" width="10" height="10" fill="#EE8D03"/>
            </svg>
            <label className="paragraph" htmlFor="prising-radio-1" onMouseDown={() => { props.switchTickets('all') }}>Всё</label>
          </div>

          <div className="prising-form__item">
            <input id="prising-radio-2" className="prising-form__input" type="radio" name="type" />
            <svg className="prising-form__radio" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="prising-form__radio--base" x="1" y="0.5" width="19" height="19" stroke="#D73B30"/>
              <rect className="prising-form__radio--active" x="5.5" y="5" width="10" height="10" fill="#EE8D03"/>
            </svg>
            <label className="paragraph" htmlFor="prising-radio-2" onMouseDown={() => { props.switchTickets('personal') }}>Индивидуальные</label>
          </div>

          <div className="prising-form__item">
            <input id="prising-radio-3" className="prising-form__input" type="radio" name="type" />
            <svg className="prising-form__radio" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="prising-form__radio--base" x="1" y="0.5" width="19" height="19" stroke="#D73B30"/>
              <rect className="prising-form__radio--active" x="5.5" y="5" width="10" height="10" fill="#EE8D03"/>
            </svg>
            <label className="paragraph" htmlFor="prising-radio-3" onMouseDown={() => { props.switchTickets('group') }}>Групповые</label>
          </div>

          <div className="prising-form__item">
            <input id="prising-radio-4" className="prising-form__input" type="radio" name="type" />
            <svg className="prising-form__radio" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect className="prising-form__radio--base" x="1" y="0.5" width="19" height="19" stroke="#D73B30"/>
              <rect className="prising-form__radio--active" x="5.5" y="5" width="10" height="10" fill="#EE8D03"/>
            </svg>
            <label className="paragraph" htmlFor="prising-radio-4" onMouseDown={() => { props.switchTickets('top') }}>Топ Педагог</label>
          </div>
      </form>
      <svg className="prising-header__figure prising-header__figure--1">
        <use href={require("../img/prising-figures.svg").default + "#figure-1"}></use>
      </svg>
      <svg className="prising-header__figure prising-header__figure--2">
        <use href={require("../img/prising-figures.svg").default + "#figure-2"}></use>
      </svg>
    </header>
  )
}

export default connect(() => { return {} } ,{ switchTickets })(PrisingHeader);