import React from 'react';
import { connect } from 'react-redux';

import { searchItem } from "../../redux/actions/itemsActions";

const mapStateToProps = (state) => {
    return {
        name: state.name,
        age: state.age,
        items: state.items,
    };
}

class TestComponent extends React.Component {
    handleSearchItem(item) {
        return this.props.dispatch(searchItem(item));
    }

    render() {

        if (!this.props.items.length) {
            return <button onClick={this.handleSearchItem.bind(this)}>Get items</button>
        }
        return (
            <div>
                {this.props.items}
            </div>
        )
    }
}

TestComponent = connect(mapStateToProps)(TestComponent);

export default TestComponent;