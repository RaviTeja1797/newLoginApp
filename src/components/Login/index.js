import './index.css'

const LoginBtn = props => {
  const {btnClickFunction} = props
  return (
    <button type="button" className="button" onClick={btnClickFunction}>
      Login
    </button>
  )
}

export default LoginBtn
