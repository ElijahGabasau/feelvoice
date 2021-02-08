import { Link } from 'react-router-dom';
import history from '../history';

function GoBackCross(props) {
  if (props.to) {
    return (
      <Link className={`btn-back ${props.className}`} to={ props.to } >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4071 12.0067L23.6948 1.71891C24.0919 1.33543 24.1029 0.702708 23.7194 0.305643C23.336 -0.0914223 22.7032 -0.102432 22.3062 0.281046C22.2979 0.289069 22.2897 0.297268 22.2816 0.305643L11.9937 10.5934L1.70593 0.305584C1.30887 -0.077894 0.676138 -0.0668839 0.29266 0.330181C-0.0814481 0.717524 -0.0814481 1.33157 0.29266 1.71891L10.5805 12.0067L0.29266 22.2945C-0.0975533 22.6848 -0.0975533 23.3175 0.29266 23.7078C0.682931 24.0979 1.31566 24.0979 1.70593 23.7078L11.9937 13.42L22.2815 23.7078C22.6786 24.0912 23.3113 24.0802 23.6948 23.6832C24.0688 23.2958 24.0688 22.6818 23.6948 22.2945L13.4071 12.0067Z" 
          fill="white"
        />
        </svg>
      </Link>
    )
  }

  if (props.depth) {
    return (
      <svg onClick={() => history.go(props.depth)} className={`btn-back ${props.className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4071 12.0067L23.6948 1.71891C24.0919 1.33543 24.1029 0.702708 23.7194 0.305643C23.336 -0.0914223 22.7032 -0.102432 22.3062 0.281046C22.2979 0.289069 22.2897 0.297268 22.2816 0.305643L11.9937 10.5934L1.70593 0.305584C1.30887 -0.077894 0.676138 -0.0668839 0.29266 0.330181C-0.0814481 0.717524 -0.0814481 1.33157 0.29266 1.71891L10.5805 12.0067L0.29266 22.2945C-0.0975533 22.6848 -0.0975533 23.3175 0.29266 23.7078C0.682931 24.0979 1.31566 24.0979 1.70593 23.7078L11.9937 13.42L22.2815 23.7078C22.6786 24.0912 23.3113 24.0802 23.6948 23.6832C24.0688 23.2958 24.0688 22.6818 23.6948 22.2945L13.4071 12.0067Z" 
        fill="white"
      />
      </svg>
    )
  }

  return (
    <svg onClick={history.goBack} className={`btn-back ${props.className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.4071 12.0067L23.6948 1.71891C24.0919 1.33543 24.1029 0.702708 23.7194 0.305643C23.336 -0.0914223 22.7032 -0.102432 22.3062 0.281046C22.2979 0.289069 22.2897 0.297268 22.2816 0.305643L11.9937 10.5934L1.70593 0.305584C1.30887 -0.077894 0.676138 -0.0668839 0.29266 0.330181C-0.0814481 0.717524 -0.0814481 1.33157 0.29266 1.71891L10.5805 12.0067L0.29266 22.2945C-0.0975533 22.6848 -0.0975533 23.3175 0.29266 23.7078C0.682931 24.0979 1.31566 24.0979 1.70593 23.7078L11.9937 13.42L22.2815 23.7078C22.6786 24.0912 23.3113 24.0802 23.6948 23.6832C24.0688 23.2958 24.0688 22.6818 23.6948 22.2945L13.4071 12.0067Z" 
      fill="white"
    />
    </svg>
  )
}

export default GoBackCross;