import React ,{Component} from 'react'



class D3 extends Component{

    constructor(props){
        super(props)
    }

render(){
    console.log('this.props',this.props.data)
    return(
        <div>
            <h1>{this.props.data.length}</h1>
         </div>
    )
}
}

export default D3
