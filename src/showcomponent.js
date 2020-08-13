import React ,{ Component} from 'react' ;
import { connect } from 'react-redux';
import Comment from './comment';
import EditComponent from './editcomponent' ;
class ShowComment extends Component {
    render() { 
        return ( 
            <div>
                <h1>show comment</h1>
                {this.props.comments.map((comment) =>
                <div key={comment}>
                    {comment.editing ? <EditComponent comment={comment} key={comment.id} /> :
                    <Comment key={comment.id} comment={comment} />}
                </div>
                    ) }
            </div>
         );
    }
}
const mapStateToProps = (state) => {
    return {
        comments :state
    }
} 
export default connect(mapStateToProps)(ShowComment) ;