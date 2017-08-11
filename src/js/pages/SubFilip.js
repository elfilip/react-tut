/**
 * Created by elfilip on 9.8.17.
 */
import React from "react";


export default class SubFilip extends React.Component {

    constructor(props) {
        super()
        this.state = {
            add: props.add
        };
    }

    handleState(event){
        console.log("handleState")
        console.log(this.props)
        this.props.deleteAdd(this.props.id_comp);
    }

    showId(){
        if(this.props.show_id === true){
            return this.props.id_comp;
        }else{
            return "";
        }
    }



    render() {
        return (<div>Prvek:{this.showId()} {this.state.add}<button id="aaa" onClick={ this.handleState.bind(this)}>Smaž</button></div>);
        //return (<div>Prvek: {this.state.add}</div>);
    }
}