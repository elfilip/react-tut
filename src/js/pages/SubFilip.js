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

    handleState(prop){
        console.log("nastavuje "+prop)
        this.state={
            add:prop
        }
    }

    render() {
        console.log("Props je");
        console.log(this.props)
        return (<div>Prvek: {this.state.add}</div>);
    }
}