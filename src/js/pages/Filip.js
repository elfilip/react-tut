/**
 * Created by elfilip on 9.8.17.
 */
import React from "react";

import SubFilip from "./SubFilip"


export default class Filip extends React.Component {
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


    render() {

        const adds = ["Total sale", "mega sale", "ultra sale"];
        var subFilip=adds.map(function (currentValue, index){
            return <SubFilip key={index} add={currentValue}/>;
        });
        return (
            <div>
                <div>{this.state.title}</div>
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
