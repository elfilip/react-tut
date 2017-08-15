import React from "react";
import {toggleShowID, asyncOp} from "../redux/SettingsAction"
import {loadPosts} from "../redux/RestAction"
import {connect} from "react-redux"
import {browserHistory} from 'react-router';

class Settings extends React.Component {

    toggleIdHandler() {
        this.props.dispatch(toggleShowID())
    }

    showIdIsEnable() {
        if (this.props.show_id === true) {
            return (<div>Zapnuto</div>)
        } else {
            return (<div>Vypnuto</div>)
        }
    }

    handleAsync() {
        this.props.dispatch(asyncOp())
        browserHistory.push('/settings');
    }

    handlePostLoad() {
        this.props.dispatch(loadPosts())
    }

    render() {
        console.log("settings");
        return (
            <div>
                <h1>Settings</h1>
                <button onClick={this.handleAsync.bind(this)}>Async Op</button>
                <button onClick={this.toggleIdHandler.bind(this)}>Toggle change show id</button>
                {this.showIdIsEnable()}
                <button onClick={this.handlePostLoad.bind(this)}>Load posts</button>

            </div>
        );
    }
}

export default connect(function (store) {
    return {
        show_id: store.settingsReducer.showID
    }
})(Settings)
