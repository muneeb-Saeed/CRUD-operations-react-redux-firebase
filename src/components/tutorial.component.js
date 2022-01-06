import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import { connect } from 'react-redux';
import { UpdateTutorial } from './functions/UpdateTutorial'
import { DeleteTutorial } from './functions/DeleteTutorial'

 class Tutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updatePublished = this.updatePublished.bind(this);

    this.state = {
      currentTutorial: {
        key: null,
        title: "",
        description: "",
        published: false,
      },
      message: "",
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { tutorial } = nextProps;
    if (prevState.currentTutorial.key !== tutorial.key) {
      return {
        currentTutorial: tutorial,
        message: ""
      };
    }

    return prevState.currentTutorial;
  }

  componentDidMount() {
    this.setState({
      currentTutorial: this.props.tutorial,
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          title: title,
        },
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        description: description,
      },
    }));
  }

  updatePublished(status) {
    TutorialDataService.update(this.state.currentTutorial.key, {
      published: status,
    })
      .then(() => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            published: status,
          },
          message: "The status was updated successfully!",
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;
    return (
      <div>
        <h4>Tutorial</h4>
        {currentTutorial ? (
          <div className="edit-form">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTutorial.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTutorial.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTutorial.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTutorial.published ? (
              <button
                className="badge badge-primary btn btn-dark mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary btn btn-primary mr-2"
                onClick={() => this.updatePublished(true)}
                style={{marginLeft:'10px'}}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger btn btn-primary mr-2"
              onClick={()=>DeleteTutorial(this.state.currentTutorial.key,
                this.props.refreshList())}
              style={{marginLeft:'10px'}}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success btn btn-primary"
              onClick={()=>UpdateTutorial(this.state.currentTutorial.title,
                this.state.currentTutorial.description,
                this.state.currentTutorial.key)
                .then(res=>{
                this.setState({message:'The tutorial was updated successfully!'})
                 })
              }
              style={{marginLeft:'10px'}}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
 function mapStateToProps (state) {
  return {
    reducer: state.reducer
  };
}
export default connect(mapStateToProps)(Tutorial);