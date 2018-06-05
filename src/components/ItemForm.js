import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ItemForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.item ? props.item.description : '',
      note: props.item ? props.item.note : '',
      time: props.item ? (props.item.time / 100).toString() : '',
      createdAt: props.item ? moment(props.item.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  ontimeChange = (e) => {
    const time = e.target.value;

    if (!time || time.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ time }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.time) {
      this.setState(() => ({ error: 'Please provide description and time.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        time: parseFloat(this.state.time, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              autoFocus
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
          </div>
          <div className="form-group">
            <label>Time Required</label>
            <input
              className="form-control"
              type="text"
              placeholder="Time"
              value={this.state.time}
              onChange={this.ontimeChange}
            />
          </div>
          <div className="form-group">
            <label>Date</label>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div className="form-group">
            <label>Note</label>
            <textarea
              className="form-control"
              placeholder="Add a note for your item (optional)"
              value={this.state.note}
              onChange={this.onNoteChange}
            >
            </textarea>
          </div>
            <button className="btn btn-secondary">Add Item</button>

        </form>
      </div>
    )
  }
}
