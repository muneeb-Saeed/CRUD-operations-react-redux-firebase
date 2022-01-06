import React,{Component} from 'react' 
import { connect } from 'react-redux';
import TutorialDataService from '../services/tutorial.service'

//confirming the submit
class Confirm extends Component{

    submitComfirmed(){
        let data={
            title:this.props.reducer.title,
            description:this.props.reducer.description,
            published:this.props.reducer.published
        }
        TutorialDataService.create(data)
        .then(() => {
                console.log("Created new item successfully!");
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    moveToNew(){
        return(
        this.props.history.push('/add')
        )
    }

    render(){
        console.log(this.props.reducer.title)
        return(
            <div >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <textarea
                    className="form-control"
                    id="title"
                    required
                    value={this.props.reducer.title}
                    name="title"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                    className="form-control"
                    id="description"
                    required
                    value={this.props.reducer.description}
                    name="description"
                />
                </div>
                <div className="d-grid gap-2 d-md-block">
                <h4>Are you sure you want to submit?</h4>
                <button onClick={()=>this.submitComfirmed()} className="btn btn-success">
                Confirm Submit
                </button>
                <button style={{marginLeft:'20px'}} onClick={()=>this.moveToNew()} className="btn btn-success">
                    Add New 
                </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
      reducer: state.reducer
    };
  }
  export default connect(mapStateToProps)(Confirm);