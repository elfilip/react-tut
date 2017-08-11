/**
 * Created by elfilip on 9.8.17.
 */
import React from "react";

import SubFilip from "./SubFilip"
import {addLoad,addAdd} from "../redux/AddsAction"
import  {connect}  from "react-redux"

class Filip extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Vítejte",
        };
    }

    handleState(event) {
        console.log('aaa ' + event.target.value);
        if (event.key != 'Enter')
            return;
        this.setState({title: event.target.value});
        this.refs.x1.handleState(event.target.value);
    }

    handleNewAddInput(event) {
        console.log('handleNewAddInput')
        this.setState({addNewInput: event.target.value})
    }

    handleSubmit(event){
        console.log('handleSubmit')
        this.props.dispatch(addAdd(this.state.addNewInput))
    }
    render() {
        this.props.dispatch(addLoad());
        console.log("store adds");
        console.log(this.props.adds);
        const adds = ["Total sale", "mega sale", "ultra sale"];
        var subFilip = adds.map(function (currentValue, index) {
            return <SubFilip key={index} add={currentValue}/>;
        });
        return (
            <div>
                <div>{this.state.title}</div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.handleNewAddInput.bind(this)}/>
                    <button type="submit" value="Submit">Přidej</button>
                </form>
                {this.props.adds}
                <SubFilip ref="x1" add="Buy now !!!"/>
                <SubFilip add="Sell immediately !"/>
                <SubFilip add="Do nothing."/>
                <input onKeyDown={this.handleState.bind(this)}/>
                <div>
                    {subFilip}
                </div>
            </div>
        );

    }
}

export default connect(function (store) {
    return {
        adds: store.addsReducer.adds
    }
})(Filip)


