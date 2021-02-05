function RoomImage(props) {
  const render = [];

  for (let i = 0; i < props.length; i++) {
    render.push(
      <img 
        className={`room-image__element room-image__element-${props.order + 1}--${i + 1} ${props.selected === i? `room-image__element--selected-${props.order + 1}` : ''}`} 
        src={require(`./studio${props.order + 1}-element${i + 1}.png`).default} 
        alt={`room-${props.order}-element-${i}`} 
        key={`room-${props.order}-element-${i}`} 
      />
    )
  }

  return (
    <div className={`room__image room-image ${props.className ? props.className : ''}`}>
      <img className="room-image__base" src={require(`./studio${props.order + 1}.png`).default} alt='room for ' />

      { render }
    </div>
  )
}


export default RoomImage;