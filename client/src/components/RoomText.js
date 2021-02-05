function RoomText(props) {
  return (
    <div className="room__text room-text">
      <h3 className="heading-4 room-text__heading">{ props.data[props.selected].title }</h3>
      <p className="paragraph room-text__text">{ props.data[props.selected].text }</p>
    </div>
  )
}

export default RoomText;