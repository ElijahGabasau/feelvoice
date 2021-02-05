import { Link } from 'react-router-dom';
import Button from './Button';
import figures from '../img/news-figures.svg';

function MainNews() {
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
          <h4 className="heading-4 heading-4--dark heading-4--bold">Квартирник Feelvoice</h4>
          <p className="paragraph paragraph--dark">1 октября студия FEELVOICE провела свой второй квартирник!  И вот мы, наконец, можем предоставить вам фотоотчёт, чтобы вы сами могли убедиться, насколько здорово это было!!! Безумно приятно видеть, как шаг за шагом наши ученики идут к своей мечте! Огромное спасибо всем, кто разделил с нами этот день!</p>
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
          <h4 className="heading-4 heading-4--bold">Интенсив Feelvoice</h4>
          <p className="paragraph paragraph">Недавно у нас прошел вокальный интенсив. Огромное спасибо всем за участие! Надеемся, Вы получили для себя ценную и полезную информацию! Мы бесконечно рады видеть многих из Вас в рядах наших учеников! Вместе с музыкой мы сделаем этот мир лучше!<br /><br />P.S. Совсем скоро анонсируем следующий вокальный интенсив!</p>
          <Link to="/news#2" className="btn-cta btn-cta--light">Посмотреть всё</Link>
        </div>
      </div>

      <Button type="2" className="main-news__btn" to="/news">Читать ещё</Button>
    </section>
  )
}

export default MainNews;