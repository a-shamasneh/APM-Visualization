import React ,{Component} from 'react'



class D3 extends Component{

    constructor(props){
        super(props)
    }

render(){
    console.log('this.props',this.props.data)
    return(
     <div>
        {
            this.props.data.map((elem,key)=>{
                return(
               <li key={key}>{elem.Name}<p>{elem.Value}</p></li>     
                )
            })
        }
          </div>
    )
}
}

export default D3
