/**
 * Created by elfilip on 14.8.17.
 */
import React from "react";
import  {connect}  from "react-redux"


class Datatable extends React.Component {
    constructor() {
        super();
        this.state = {
            filter: "",
            sort: null,
            cols: new Object()
        };
    }

    componentWillMount() {
        var newCols=new Object();
        this.setState({
            cols: this.props.cols.forEach((col)=> {
                newCols[col]=true;
            })
            })
        this.setState({cols:newCols})

    }

    handleFilter(event) {
        this.setState({filter: event.target.value});
    }

    handleSort(col, event) {
        this.setState({sort: col})
    }

    handleCheckbox(event){
        var c={...this.state.cols};
        c[event.target.value]=event.target.checked;
        this.setState({cols: c});
    }

    createColShow() {
        return this.props.cols.map(col => {
            return ( <div><input type="checkbox" defaultChecked={true} onChange={this.handleCheckbox.bind(this)} value={col}/>{col}</div>)
        })
    }

    getVisibleCols(){
        return this.props.cols.filter(col => {return this.state.cols[col] === true});
    }

    render() {
        var sortedposts = this.props.posts;
        if (this.state.sort !== null) {
            sortedposts = sortedposts.sort((a, b) => {
                var x = a[this.state.sort];
                var y = b[this.state.sort];

                return x.toString().localeCompare(y.toString());
            })
        }
        var data = sortedposts.filter((post) => {
            if (post.title.indexOf(this.state.filter) !== -1) {
                return true
            } else if (post.body.indexOf(this.state.filter) !== -1) {
                return true
            }
            else if (post.id.toString().indexOf(this.state.filter) !== -1) {
                return true;
            } else {
                return false
            }
        }).map((post, index) => {
            return <tr>{ this.getVisibleCols().map(col => {
                return <td>{post[col]}</td>
            })}</tr>
        });
        const header = this.getVisibleCols().map((col, index) => {
            return (<th>
                <button onClick={this.handleSort.bind(this, col)}>{col}</button>
            </th>);
        })
        return <div>
            {this.createColShow()}
            <input onChange={this.handleFilter.bind(this)}></input>
            <table>
                <thead>
                <tr>{header}</tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>
        </div>
    }

}

export default connect(function (store) {
    return {
        posts: store.restReducer.posts,
        status: store.restReducer.status,
        error: store.restReducer.error
    }
})(Datatable)