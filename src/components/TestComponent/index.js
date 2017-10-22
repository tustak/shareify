import React from 'react';
import { connect } from 'react-redux';

import { Button } from 'react-bootstrap';

import { searchItem } from "../../redux/actions/itemsActions";

const mapStateToProps = (state) => {
    return {
        items: state.items,
    };
}

class TestComponent extends React.Component {
    handleSearchItem(item) {
        return this.props.dispatch(searchItem("bike", 3));
    }

    render() {
        const { items } = this.props;

        if (!items.list.data) {
            return <Button bsSize="large" onClick={this.handleSearchItem.bind(this)}>Get items</Button>
        }

        const itemList = items.list.data.map(i => <li key={i.id}>{i.item}</li>);

        return (
            <div>
                <ul>
                    {itemList}
                </ul>
            </div>
        )
    }
}

TestComponent = connect(mapStateToProps)(TestComponent);

export default TestComponent;