function Stripes(props) {
  if (props.noTab) {
    return (
      <div className="stripes">
        <div className="stripes__tab-land--desktop-only stripes__tab-land--1"></div>
        <div className="stripes__tab-land--desktop-only stripes__tab-land--2"></div>
        <div className="stripes__desktop stripes__desktop--1"></div>
        <div className="stripes__desktop stripes__desktop--2"></div>
      </div>
    );
  }

  return (
    <div className="stripes">
      <div className="stripes__tab-land stripes__tab-land--1"></div>
      <div className="stripes__tab-land stripes__tab-land--2"></div>
      <div className="stripes__desktop stripes__desktop--1"></div>
      <div className="stripes__desktop stripes__desktop--2"></div>
    </div>
  );
}

export default Stripes;