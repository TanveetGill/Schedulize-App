import React from 'react';
import { connect } from 'react-redux';
import ItemForm from './ItemForm';
import { editItem, removeItem } from '../actions/items';

export class EditItemPage extends React.Component {
  onSubmit = (item) => {
    this.props.editItem(this.props.item.id, item);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.removeItem({ id: this.props.item.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ItemForm
          item={this.props.item}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  item: state.items.find((item) => item.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editItem: (id, item) => dispatch(editItem(id, item)),
  removeItem: (data) => dispatch(removeItem(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditItemPage);
