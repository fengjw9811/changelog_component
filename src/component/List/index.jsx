import React, { useEffect, useState } from 'react'
import { Switch } from 'antd';
import 'antd/dist/antd.min.css';
import './style.css'

import Item from '../Item'

const List = (props) => {
    const itemRefArr = []
    for (let i = 0; i < props.message.length; i++) {
        itemRefArr.push(React.createRef())
    }
    const message = props.message
    const [wordHidden, setWordHidden] = useState(false)
    const hiddenNumber = props.message.filter(item => item.canHidden === true).length
    const onChange = () => {
        setWordHidden(!wordHidden)
        if (itemRefArr[0].current.style.display === 'none') {
            itemRefArr[0].current.style.display = 'block'
        } else {
            itemRefArr[0].current.style.display = 'none'
        }
    };
    const expandAll = () => {
        itemRefArr.forEach(item => item.current.click())
    }
    useEffect(() => {
        itemRefArr[0].current.style.display = 'none'
    }, [])
    return (
        <div>
            <div style={{ borderTop: '2px solid #dadce0', height: '40px' }}>
                <span style={{ lineHeight: '40px' }}>
                    <Switch defaultChecked={false} onChange={onChange} />
                </span>
                &nbsp;&nbsp;
                <span>Show all etries</span>
                &nbsp;&nbsp;
                <span style={{ display: wordHidden ? 'none' : 'inline', color: '#717479' }}>({hiddenNumber} hidden)</span>
                <span className='expand' style={{ float: 'right', height: '30px', color: '#2f7ac5', cursor: 'pointer', lineHeight: '35px', textAlign: 'center', fontWeight: 'bold' }} onClick={expandAll}>EXPAND ALL</span>
            </div>
            {
                message.map((item, index) => <Item ref={itemRefArr[index]} message={message[index]} key={index} canHidden={message[index].canHidden}></Item>)
            }
        </div>
    )
}
export default List