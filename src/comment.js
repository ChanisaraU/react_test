import React , {Component} from 'react' ;
import {connect} from 'react-redux';
class Comment extends Component {
    render() { 
        return ( 
            <div>
                <h2>
                    {this.props.comment.name}
                </h2>
                <p>
                    {this.props.comment.massage}
                </p>
                <button onClick={() => this.props.dispatch({type:'Edit_Comment' , id:this.props.comment.id})}>                           
                    edit
                </button>
                <button onClick={() => this.props.dispatch({type:'Delete_Comment' , id:this.props.comment.id})}>
                    delete
                </button>
            </div>
         );
    }
}
 
export default connect()(Comment) ;