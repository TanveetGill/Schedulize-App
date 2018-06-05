import React from 'react';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import selectItems from '../selectors/items';

export const List = (props) => (
  <div>
    {
      props.items.length === 0 ? (
        <p>No items</p>
      ) : (
          props.items.map((item) => {
            return <ListItem key={item.id} {...item} />;
          })
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    items: selectItems(state.items, state.filters)
  };
};

export default connect(mapStateToProps)(List);
