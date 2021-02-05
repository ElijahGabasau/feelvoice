import { useState } from 'react';
import { connect } from 'react-redux';
import CreateNews from './CreateNews';

import EditNews from './EditNews';

function DataNews(props) {
  const [ collapsed, setCollapsed ] = useState(true);

  const render = [];

  for(let i = 0; i < props.news.length; i++){
    render.push(
      <EditNews key={`${props.news[i].id}-edit`} data={props.news[i]} />
    )
  }

  return (
    <section className={`data-section ${collapsed? 'u-margin-bottom-sm' : props.className} `}>
      <h2 
        className="heading-2 data-heading"
        onMouseDown={() => setCollapsed(!collapsed)}
      >
        Новости
      </h2>
      <div className={`data-container ${collapsed? 'data-container--collapsed' : ''}`}>
        { render }
        <CreateNews />
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
  return {
    news: Object.values(state.news),
  }
}

export default connect(mapStateToProps)(DataNews);