import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ id, description, time, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{time} - {createdAt}</p>
  </div>
);

export default ListItem;
