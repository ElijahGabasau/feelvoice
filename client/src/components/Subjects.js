import React from 'react';
import { connect } from 'react-redux';

import Subject from './Subject';

function Subjects (props) {
  const filterUniq = () => {
    const subjects = [];
    const flags = {};

    for (let i = 0; i < props.data.length; i++) {
      if (flags[props.data[i].type] || !props.data[i].type) {
        console.log('this works')
        continue;
      }

      flags[props.data[i].type] = true;
      subjects.push(props.data[i]);
    }

    return subjects;
  };

  const renderSubjets = () => {
    const uniq = filterUniq();
    
    const render = [];
    for (let i = 0; i < uniq.length; i++) {
      render.push(
        <Subject 
          id={uniq[i].type}
          key={`class${i}`}
          position={i + 1}
          image={uniq[i].image}
          title={uniq[i].title}
          text={uniq[i].text}
        />
      );
    }

    return render;
  }
  
  return(
    <section className="subjects u-margin-top-md">

      {renderSubjets()}

    </section>
  )
}

const mapStateToProps = (state) => {
  return { 
    data: Object.values(state.classes)
  };
}

export default connect(mapStateToProps)(Subjects);