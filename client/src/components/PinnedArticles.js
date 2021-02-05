import { connect } from 'react-redux';

import Article from './Article';

function PinnedArticles(props) {
  const render = [];

  for (let i = 0; i < props.pinned.length; i++) {
    render.push(
      <Article key={`article${i}`}  data={props.pinned[i]} order={i % 2 + 5} />
    )
  }
  
  return (
    <section className="pinned-articles">
      { render }
    </section>
  ) 
}

const mapStateToProps = (state) => {
  return {
    pinned: Object.values(state.pinned)
  }
}

export default connect(mapStateToProps)(PinnedArticles);