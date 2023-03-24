import './index.css'

const Message = Props => {
  const {children} = Props
  return <h1 className="main-heading">{children}</h1>
}

export default Message
