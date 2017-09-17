import React from 'react'
import {Popover, NavBar, Icon} from 'antd-mobile';
import './style.css'
const Item = Popover.Item;
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
          visible: false,
          selected: '',
         }
    }
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  }
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  }
    render() {
    let offsetX = -10; // just for pc demo
    if (/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
      offsetX = -26;
    }
        return (
         <div>
      <NavBar 
        onLeftClick={this.props.leftClick}
        mode="dark"
        leftContent={this.props.tag}
        iconName={this.props.iconName}
        rightContent={
          <Popover mask
            overlayClassName="fortest"
            overlayStyle={{ color: 'currentColor' }}
            visible={this.state.visible}
            overlay={[
              (<Item key="4" value="scan" icon={<Icon type={require('./../../static/scan.svg')} size="xs" />} data-seed="logId">扫一扫</Item>),
              (<Item key="5" value="special" icon={<Icon type={require('./../../static/QR_code.svg')} size="xs" />} style={{ whiteSpace: 'nowrap' }}>我的二维码</Item>),
              (<Item key="6" value="button ct" icon={<Icon type={require('./../../static/help.svg')} size="xs" />}>
                <span style={{ marginRight: 5 }}>帮助</span>
              </Item>),
            ]}
            align={{
              overflow: { adjustY: 0, adjustX: 0 },
              offset: [offsetX, 15],
            }}
            onVisibleChange={this.handleVisibleChange}
            onSelect={this.onSelect}
          >
            <div style={{
              height: '100%',
              padding: '0 0.3rem',
              marginRight: '-0.3rem',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          </Popover>
        }
      >
      学号:{this.props.user}
      </NavBar>
    </div>
        )
    }
}

export default Header