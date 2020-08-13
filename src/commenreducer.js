const commentReducer = (state = [] , action) => {
    switch(action.type){
        case 'ADD_COMMENT' :  //รับค่า action จาก this.props.dispatch 
            return state.concat([action.data]) ;
        case 'Delete_Comment'  : //รับค่า action จาก this.props.dispatch 
            return state.filter((comment) => comment.id !== action.id) ;
        case 'Edit_Comment'  :   //รับค่า action จาก this.props.dispatch  
            return state.map((comment) => comment.id === action.id ? {...comment,editing : !comment.editing} : comment) ;
        case 'Update' : //รับค่า action จาก this.props.dispatch 
            return state.map((comment) => {
                if(comment.id === action.id){
                    return {
                        ...comment, //เพิ่มข้อมูลลงใน comment
                        name: action.data.newname,
                        massage:action.data.newmassage,
                        editing: !comment.editing
                    }
                }
                else return comment ; })
        default :
            return state ;    //retrunไปที่ store เพราะมันเรียกใช้
    }
}
export default commentReducer ;