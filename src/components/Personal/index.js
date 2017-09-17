import React from 'react'
import { List,Modal,WhiteSpace} from 'antd-mobile';
import './style.css'
const Item = List.Item;
const Brief = Item.Brief;
const prompt = Modal.prompt;
const alert = Modal.alert;
class Person extends React.Component {
    render() {
        return (
           <div className="personcontainer">
      <List>
        <Item
          thumb={<img style={{width:'100px',height:'100px'}} src={require('./../../static/head.png' )} alt="img"/>}
          arrow="empty"
          extra={<img style={{ width: '0.44rem',height: '0.44rem',}} src={require('./../../static/erwei.png')} alt="img"/>}>
          {this.props.userinfo.name}
        <Brief>学号:{this.props.userinfo.username}</Brief></Item>
      </List>
        <WhiteSpace/>
          <WhiteSpace/>
            <WhiteSpace/>
      <List>
        <Item
          thumb={<img style={{ width: '0.46rem',height: '0.46rem'}} src={require('./../../static/mdfpwd.png')} alt="img"/>}
          arrow="empty"
         onClick={() =>prompt(
      '请输入新密码',
      '注意保管好个人密码',
      [
        { text: '取消' },
        { text: '提交', onPress: password =>this.props.PWH(password) },
      ],
      'secure-text',
    )}
        >密码修改
       </Item>
      <Item
          thumb={<img style={{ width: '0.46rem',height: '0.46rem' }} src={require('../../static/exit.png')} alt="img"/>}
          arrow="empty"
          onClick={()=>alert('退出', '确定退出么???', [
      { text: '取消', onPress: () => console.log('cancel') },
      { text: '确定', onPress: () => this.props.EXH() },
    ])}
        >退出
       </Item>
      </List>   
           </div>
        )
    }
}

export default Person