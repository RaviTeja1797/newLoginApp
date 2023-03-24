import './index.css'

const LogoutBtn = props => {
  const {btnClickFunction} = props
  return (
    <button type="button" className="button" onClick={btnClickFunction}>
      Logout
    </button>
  )
}

export default LogoutBtn
