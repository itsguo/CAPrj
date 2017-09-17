import React from 'react'
import Item from './items'
class App extends React.Component {
    render() {
        return (
          <div className="container">
              {this.props.data.map((item, index) => {
                    return <Item key={index} data={item} signupHandle={this.props.signupHandle}/>
                })}
         </div> 
        )
    }
}

export default App