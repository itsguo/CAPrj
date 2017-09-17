import { List, InputItem,Button,Toast} from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react'
import './style.css'
class Login extends React.Component {
    constructor(props, context){
      super(props, context);
      this.state={
        username:'',
        password:''
      }
    }
    render() {
         const { getFieldProps } = this.props.form;
        return (
          <div className="Logincontainer">
          <div className="loginicon"></div>  
        <List>
         <InputItem
            {...getFieldProps('number')}
            type="number"
             onChange={this.changeUserNameHandle.bind(this)} 
             value={this.state.username}
             extra={this.state.username.length}
             maxLength={8}
          ><div className="userLogin"
          >&nbsp;&nbsp;&nbsp;&nbsp;学号:</div></InputItem>
         <hr/>
         <InputItem
            {...getFieldProps('password')}
            type="password"
             onChange={this.changePassWordeHandle.bind(this)} 
             value={this.state.password}
          ><div className="passwordLogin" 
          >&nbsp;&nbsp;&nbsp;&nbsp;密码:</div></InputItem>
        </List>

          <Button className="btn" type="primary"  onClick={this.Handlesubmit.bind(this)}>登录</Button>
           <div style={{color:'	CornflowerBlue',fontSize:'25px', marginTop:'30px'}}>忘记密码？</div>
          </div>
        )
    }
   changeUserNameHandle(e) {
        this.setState({
            username: e
        })
    }
   changePassWordeHandle(e) {
        this.setState({
            password: e
        })
    }
     Handlesubmit(){
         const username = this.state.username;
         if(username.length!==8){
           Toast.fail("学号为8位!!!",1)
          return
         }
         const password = this.state.password;
         const loginHandle = this.props.loginHandle
         loginHandle(username,password);
      }
}

export default createForm()(Login);