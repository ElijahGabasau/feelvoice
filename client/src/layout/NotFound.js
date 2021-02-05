import Button from '../components/Button';

function NotFound() {
  return(
    <section className="not-found">
      <img className="not-found__image" src={require("../img/notFound.png").default} alt="page not found" />
      <Button type="4" className="not-found__btn"><a className="a" href="/">На главную</a></Button>
    </section>
  )
}

export default NotFound;