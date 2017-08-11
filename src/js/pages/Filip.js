/**
 * Created by elfilip on 9.8.17.
 */
import React from "react";

import SubFilip from "./SubFilip"
import {addLoad,addAdd,addRemove} from "../redux/AddsAction"
import  {connect}  from "react-redux"

class Filip extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Vítejte",
        };
    }

    componentWillMount() {
      //  this.props.dispatch(addLoad());
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

    handleSubmit(){
        console.log('handleSubmit'+ this.state.addNewInput)
        this.props.dispatch(addAdd(this.state.addNewInput))
    }

    deleteAdd(id){
        this.props.dispatch(addRemove(id));
        console.log("Mazu zaznam. "+id);
    }
    render() {

        console.log("store adds");
        console.log(this.props.adds);
        const adds = ["Total sale", "mega sale", "ultra sale"];
        const subFilip = adds.map(function (currentValue, index) {
            return <SubFilip key={index} add={currentValue} id_comp="10"/>;
        });

        const reduxAdds= this.props.adds.map((add,index) => <SubFilip show_id={this.props.show_id} key={add.id} add={add.text} id_comp={add.id} deleteAdd={this.deleteAdd.bind(this)}/>);

        return (
            <div>
                <div>{this.state.title}</div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.handleNewAddInput.bind(this)}/>
                    <button type="submit" value="Submit">Přidej</button>
                </form>
                <input onKeyDown={this.handleState.bind(this)}/>
                {reduxAdds}
            </div>
        );

    }
}

export default connect(function (store) {
    return {
        adds: store.addsReducer.adds,
        show_id: store.settingsReducer.showID
    }
})(Filip)


