/**
 * Created by elfilip on 9.8.17.
 */
import React from "react";

import SubFilip from "./SubFilip"
import Datatable from "./Datatable"
import {addLoad, addAdd, addRemove} from "../redux/AddsAction"
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
        this.refs.x1.handleFilter(event.target.value);
    }

    handleNewAddInput(event) {
        console.log('handleNewAddInput')
        this.setState({addNewInput: event.target.value})
    }

    handleSubmit() {
        console.log('handleSubmit' + this.state.addNewInput)
        this.props.dispatch(addAdd(this.state.addNewInput))
    }

    deleteAdd(id) {
        this.props.dispatch(addRemove(id));
        console.log("Mazu zaznam. " + id);
    }

    render() {
        const reduxAdds = this.props.adds.map((add, index) => <SubFilip show_id={this.props.show_id} key={add.id}
                                                                        add={add.text} id_comp={add.id}
                                                                        deleteAdd={this.deleteAdd.bind(this)}/>);

        return (
            <div>
                <div>{this.state.title}</div>

                <input onChange={this.handleNewAddInput.bind(this)}/>
                <button onClick={this.handleSubmit.bind(this)} value="Submit">Přidej</button>

                <input onKeyDown={this.handleState.bind(this)}/>
                {reduxAdds}
                <Datatable cols={["id", "title", "body","userId"]}/>
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


