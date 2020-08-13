import React ,{ Component} from 'react' ;
import {connect} from 'react-redux';
class EditComponent extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const newname = this.getName.value ; //ป้อนชื่อ
        const newmassage = this.getMassage.value //ข้อความ ;
        //สร้าง data ที่form ส่งมาที่นี่
        const data = { 
            newname,
            newmassage,

        }
        this.props.dispatch({
            type : 'Update',
            id : this.props.comment.id,
            data : data
        })
        console.log(data)
    }
    render() { 
        return ( 
            <div>
                <h1>update</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input required type="text" placeholder="แก้ไขชื่อ" ref={(input)=>this.getName = input} defaultValue={this.props.comment.name}></input><br>
                    </br>
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMassage = input} defaultValue={this.props.comment.massage}>
                    
                    </textarea><br></br>
                    <button>
                        update
                    </button>
                </form>
            </div>
         );
    }
}
 
export default connect()(EditComponent);