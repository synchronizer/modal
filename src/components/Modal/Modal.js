import React from 'react';
import './Modal.css';
import '../CustomScroll/custom-scroll.css';
import qs from '../../lib/qs'

class Modal extends React.Component {
  constructor(){
    super()
    this.state={
      close:false,
      hoverClose: false
    }
    this.closeIcon=React.createRef();
    this.window=React.createRef();
    this.wrapper=React.createRef();
  }
  render(){
    document.body.style.overflow = (!this.state.close && "hidden")||"initial";
    return(
      <div
        className={
          "modal custom-scroll dark modal_layout_" +  this.props.layout
          + ((qs('old-animation') && " modal_old-animation")||"")
          + ((this.state.close && " modal_close")||"")
          + ((this.state.hoverClose && " modal_hover-close")||"")
        }
      >
      <div ref={this.closeIcon} className="modal__close"/>
        <div ref={this.wrapper} className="modal__wrapper">
          <div onClick={this.close} className="modal__base" onMouseOver={()=>this.setState({hoverClose:true})} onMouseOut={()=>this.setState({hoverClose:false})}/>
          <div ref={this.window} className="modal__window">
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
    window.addEventListener("resize",this.closeIconPosition)
    this.closeIconPosition()
    if (qs('sbs')) {
      setTimeout(this.close, 2000)
    }
  }

  componentWillUnmount(){
    window.removeEventListener("resize",this.closeIconPosition)
  }

  closeIconPosition = () =>{
    this.closeIcon.current.style.left = this.wrapper.current.offsetLeft + this.wrapper.current.offsetWidth + 12 + "px"
    this.closeIcon.current.style.top = this.window.current.offsetTop + "px"
  }
  close = ()=>{
    this.setState({close:true})
    setTimeout(this.props.close,150)
  }
}


Modal.defaultProps = {
  layout: "auto"
};

export default Modal
