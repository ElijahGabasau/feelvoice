import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';
import figures from '../img/news-figures.svg';

function MainNews(props) {
  return (
    <section className="main-news u-margin-top-lg">
      <h3 className="heading-3 main-news__heading">Новости Студии</h3>

      <div className="main-news-piece main-news-piece--1">
        <div className="main-news-piece__hero main-news-piece__hero--1 u-noised-container">
          <svg className="main-news-piece__figure main-news-piece__figure--1">
            <use href={figures + "#figure-0"} />
          </svg>
        </div>
        <div className="main-news-piece__content main-news-piece__content--1">
          <h4 className="heading-4 heading-4--dark heading-4--bold">{props.news[0] && props.news[0].title}</h4>
          <p className="paragraph paragraph--dark">{props.news[0] && props.news[0].text}</p>
          <Link to="/news#1" className="btn-cta btn-cta--dark">Посмотреть всё</Link>
        </div>
      </div>

      <div className="main-news-piece main-news-piece--2">
        <div className="main-news-piece__hero main-news-piece__hero--2 u-noised-container">
          <svg className="main-news-piece__figure main-news-piece__figure--2">
            <use href={figures + "#figure-1"} />
          </svg>
        </div>
        <div className="main-news-piece__content main-news-piece__content--2">
          <h4 className="heading-4 heading-4--bold">{props.news[1] && props.news[1].title}</h4>
          <p className="paragraph paragraph">{props.news[1] && props.news[1].text}</p>
          <Link to="/news#2" className="btn-cta btn-cta--light">Посмотреть всё</Link>
        </div>
      </div>

      <Button type="2" className="main-news__btn" to="/news">Читать ещё</Button>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    news: Object.values(state.news)
  };
}

export default connect(mapStateToProps)(MainNews);