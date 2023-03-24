import {Component} from 'react'
import LoginBtn from '../Login'
import LogoutBtn from '../Login/Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {message: 'Please Login', loginBtn: false}

  onBtnClick = () => {
    console.log('This function has been called from child')
    const {loginBtn} = this.state
    if (loginBtn) {
      this.setState({message: 'Please Login', loginBtn: false})
    } else {
      this.setState({message: 'Welcome User', loginBtn: true})
    }
  }

  render() {
    const {message, loginBtn} = this.state
    const LoginBtnEl = <LoginBtn btnClickFunction={this.onBtnClick} />
    const LogoutBtnEl = <LogoutBtn btnClickFunction={this.onBtnClick} />
    // eslint-disable-next-line no-unused-vars
    const ButtonToBeDisplayed = loginBtn ? LogoutBtnEl : LoginBtnEl
    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="content-container">
            <Message>{message}</Message>
            {ButtonToBeDisplayed}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
