import { connect } from 'react-redux';
import Article from './Article';

function Articles(props) {
  const render = [];

  for (let i = props.news.length - 1; i >= 0; i--) {
    render.push(
      <Article key={`article${i}`} order={i % 4 + 1} data={props.news[i]} />
    ) 
  }

  return (
    <section className={`articles ${props.className}`}>
      { render }
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    news: Object.values(state.news)
  };
}

export default connect(mapStateToProps)(Articles);