import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  constructor(){
    super()

    this.state={
      close:false
    }
  }
  render(){
    document.body.style.overflow = (!this.state.close && "hidden")||"initial";
    return(
      <div
        className={
          "modal modal_size_" +  this.props.size
          + ((this.state.close && " modal_close")||"")}
      >
      <div onClick={this.close} className="modal__base">
        <div className="modal__close"/>
      </div>

        <div className="modal__wrapper">
          <div className="modal__window">
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount(){
    window.addEventListener("keydown",(e)=>{
      console.log(e.key);
      if(e.key==="Escape"){this.close()}
    })
  }


  close = ()=>{
    this.setState({close:true})
    setTimeout(this.props.close,250)
  }
}


Modal.defaultProps = {
  size: "default"
};

export default Modal
