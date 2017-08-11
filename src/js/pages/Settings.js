import React from "react";
import {toggleShowID,asyncOp} from "../redux/SettingsAction"
import {connect} from "react-redux"

class Settings extends React.Component {

  toggleIdHandler(){
    this.props.dispatch(toggleShowID())
  }

  showIdIsEnable(){
    if(this.props.show_id === true){
      return (<div>Zapnuto</div>)
    }else{
      return (<div>Vypnuto</div>)
    }
  }

  handleAsync(){
    this.props.dispatch(asyncOp())
  }

  render() {
    console.log("settings");
    return (
        <div>
      <h1>Settings</h1>
          <button onClick={this.handleAsync.bind(this)}>Async Op</button>
          <button onClick={this.toggleIdHandler.bind(this)}>Toggle change show id</button>
            {this.showIdIsEnable()}

        </div>
    );
  }
}

export default connect(function (store) {
    return {
        show_id: store.settingsReducer.showID
    }
})(Settings)
