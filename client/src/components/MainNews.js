import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from './Button';

function MainNews(props) {
  return (
    <section className="main-news u-margin-top-lg">
      <h3 className="heading-3 main-news__heading">Новости Студии</h3>

      <div className="main-news-piece main-news-piece--1">
        <div className="main-news-piece__hero main-news-piece__hero--1 u-noised-container">
          {props.news[props.news.length - 1] && <img className="main-news-piece__img" src={props.news[props.news.length - 1].image[0]} />}
        </div>
        <div className="main-news-piece__content main-news-piece__content--1">
          <h4 className="heading-4 heading-4--dark heading-4--bold">{props.news[props.news.length - 1] && props.news[props.news.length - 1].title}</h4>
          <p className="paragraph paragraph--dark">{props.news[props.news.length - 1] && props.news[props.news.length - 1].text}</p>
          <Link to="/news" className="btn-cta btn-cta--dark">Посмотреть всё</Link>
        </div>
      </div>

      <div className="main-news-piece main-news-piece--2">
        <div className="main-news-piece__hero main-news-piece__hero--2 u-noised-container">
          {props.news[props.news.length - 1] && <img className="main-news-piece__img" src={props.news[props.news.length - 2].image[0]} />}
        </div>
        <div className="main-news-piece__content main-news-piece__content--2">
          <h4 className="heading-4 heading-4--bold">{props.news[props.news.length - 2] && props.news[props.news.length - 2].title}</h4>
          <p className="paragraph paragraph">{props.news[props.news.length - 2] && props.news[props.news.length - 2].text}</p>
          <Link to="/news" className="btn-cta btn-cta--light">Посмотреть всё</Link>
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