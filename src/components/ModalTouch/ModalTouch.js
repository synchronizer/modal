import React from 'react';
import './ModalTouch.css';

class ModalTouch extends React.Component{
  constructor() {
    super()
    this.state={
      close:false
    }
  }
  render(){
    document.body.style.overflow = (!this.state.close && "hidden")||"initial";
    console.log('modaltouch');
    return(
      <div
        className={
          "modaltouch modaltouch_position_" +  this.props.position
          + ((this.state.close && " modaltouch_close")||"")
        }
      >
        <div className="modaltouch__wrapper">
        <div className="modaltouch__base" onClick={this.close}/>
        <div className="modaltouch__window">
          <div className="modaltouch__close"/>
          <div className="modal__content">{this.props.content}</div>
        </div>
        </div>
      </div>
    )
  }

  close = ()=>{
    this.setState({close:true})
      setTimeout(this.props.close,300)
    }
}
ModalTouch.defaultProps = {
  position: "center"
};
export default ModalTouch
