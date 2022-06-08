import { Switch } from 'antd';
import React from 'react'
import 'antd/dist/antd.min.css';
import './style.css'

export default function Header(props) {
    const onChange = (checked) => {
        console.log(props.a);
    };
    return (
        <div style={{ borderTop: '2px solid #dadce0', height: '40px' }}>
            <span style={{ lineHeight: '40px' }}>
                <Switch defaultChecked onChange={onChange} />
            </span>
            &nbsp;&nbsp;
            <span>Show all etries</span>
            &nbsp;&nbsp;
            <span style={{ color: '#717479' }}>(1 hidden)</span>
            <span className='expand' style={{ float: 'right', height: '30px', color: '#2f7ac5', cursor: 'pointer', lineHeight: '35px', textAlign: 'center', fontWeight: 'bold' }}>EXPAND ALL</span>
        </div>
    )
}
