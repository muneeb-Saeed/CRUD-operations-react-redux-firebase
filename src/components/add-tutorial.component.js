import React, { Component } from "react";
import { addData } from "./actions/userActions";
import { connect } from "react-redux";

//adding new record

class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      title: "",
      description: "",
      published: false,

      submitted: false,
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  //Dispatcher
  saveTutorial() {
    this.props.dispatch(
      addData(this.state.title, this.state.description, false, true)
    );
    this.setState({ submitted: true });
    this.props.history.push("/confirm");
  }

  newTutorial() {
    this.setState({
      title: "",
      description: "",
      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={this.state.title}
              onChange={this.onChangeTitle}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"
            />
          </div>

          <button
            style={{ marginTop: 20 }}
            onClick={() => this.saveTutorial()}
            className="btn btn-success"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}
export default connect(mapStateToProps)(AddTutorial);
