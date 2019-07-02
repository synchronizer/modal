import React from 'react';
import './App.css';

import Modal from './components/Modal/Modal'

class App extends React.Component {
  constructor() {
    super()
    this.state=false
  }
  render(){
    return (
      <div className="App">
        {this.state.modal && <Modal size={this.state.modal.size} close={()=>this.setState({modal:false})} content={this.state.modal.content}/>}
        <img onClick={this.showDefault} className="control" src={require("./default.svg")}/>
        <img onClick={this.showFillvertical} className="control" src={require("./fill-vertical.svg")}/>
        <img onClick={this.showFill} className="control" src={require("./fill.svg")}/>
        <img onClick={this.showScroll} className="control" src={require("./scroll.svg")}/>
      </div>
    );
  }

  showDefault = () => {
    this.setState({
      modal: {
        size: "default",
        content: <img src="https://jing.yandex-team.ru/files/roma-d/Kupit_Umnyi_pult_Yandeksa_chernyi_po_nizkoi_tsene_s_dostavkoi_iz_marketpleisa_Beru_2019-07-02_12-55-23.png"/>
      }
    })
  }

  showFillvertical = () => {
    this.setState({
      modal: {
        size: "fill-vertical",
        content: <img width="1000px" src="https://jing.yandex-team.ru/files/roma-d/beru.ru_product_yandex-umnaia-rozetka-yandexa-chernyi_447723001.png"/>
      }
    })
  }

  showFill = () => {
    this.setState({
      modal: {
        size: "fill",
        content: <img src="https://jing.yandex-team.ru/files/roma-d/Yandeks.Karty__vybiraite_gde_poest_kuda_shodit_chem_zanyatsya_2019-06-28_15-22-21.png"/>
      }
    })
  }

  showScroll = () => {
    this.setState({
      modal: {
        size: "scroll",
        content: <img width="1000px" src="https://jing.yandex-team.ru/files/roma-d/beru.ru_product_yandex-umnaia-rozetka-yandexa-chernyi_447723001.png"/>
      }
    })
  }
}

export default App;
