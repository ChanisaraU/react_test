import React ,{ Component} from 'react' ;
import {connect} from 'react-redux';
class CommentFrom extends Component {
    handleSubmit = (e) => {
        e.preventDefault(); //เพื่อไม่ให้ browser reload หรือ refresh
        const name = this.getName.value ; //ป้อนชื่อ
        const massage = this.getMassage.value //ข้อความ ;
        //สร้าง data ที่form ส่งมาที่นี่
        const data = { id : new Date(),
            name,
            massage,
            editing:false
        }
        this.props.dispatch({
            type : 'ADD_COMMENT',
            data //เอาข้อมูลจาก ดาต้าส่งไปที่ commentfrom
        });
        this.getName.value = "";
        this.getMassage.value = "";
        console.log(data) ;
    }
    render() { 
        return ( 
            <div>
                <h1>add Comment</h1>
                <form onSubmit = {this.handleSubmit}>
                    <input required type="text" placeholder="ป้อนชื่อ" ref={(input)=>this.getName = input}></input><br>
                    </br>
                    <textarea required rows="5" cols="28" placeholder="ข้อความ" ref={(input)=>this.getMassage = input}>
                    
                    </textarea><br></br>
                    <button>
                        Comment 
                    </button>
                     {/* กดปุ่มเสร้จจะ retrun ไปที่ commentReducer */}
                </form>
            </div>
         );
    }
}
 
export default connect()(CommentFrom);

