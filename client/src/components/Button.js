import ButtonTertiary from './buttons/ButtonTertiary';
import ButtonPrimary from './buttons/ButtonPrimary';
import ButtonSecondary from './buttons/ButtonSecondary';
import ButtonErr from './buttons/ButtonErr';

function Button(props) {
  switch (props.type) {
    case '1':
      return <ButtonPrimary className={props.className} to={props.to} action={props.action} children={props.children} />
    case '2':
      return <ButtonSecondary className={props.className} to={props.to} action={props.action} children={props.children} />
    case '3':
      return <ButtonTertiary className={props.className} to={props.to} action={props.action} children={props.children} />
    case '4':
      return <ButtonErr className={props.className} to={props.to} action={props.action} children={props.children} />
    default:
      return <ButtonPrimary className={props.className} to={props.to} action={props.action} children={props.children} />
  }
}

export default Button;