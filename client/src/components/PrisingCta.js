import Button from './Button';
import RotatingText from './RotatingText';

function PrisingCta() {
  return(
    <section className="prising-cta u-margin-top-lg">
      <h1 className="heading-1 prising-cta__title">Тарифы и абонементы</h1>
      <p className="paragraph prising-cta__text--1">Семья Feelvoice подобрала удобные варианты оплаты для Вас и Ваших друзей. Благодаря нашей программе оплаты, чем занятий Вы покупаете, тем выгоднее стоимость абонемента.</p>
      <p className="paragraph prising-cta__text--2">Вы можете посещать индивидуальные или групповые занятия. В любом случае, Вам точно понравится :)</p>
      <p className="paragraph prising-cta__text--3">* Если Вы хотите ходить вдвоём, то второй человек доплачивает всего 18 рублей за каждое занятие.</p>

      <RotatingText className="prising-cta__figure" />
    
      <Button type="1" className="prising-cta__btn" to="/form" >Записаться</Button>
    </section>
  )
}

export default PrisingCta;