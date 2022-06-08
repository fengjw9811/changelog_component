import React, { useState } from 'react'

import './style.css'

export default function Item(props) {
    const [detail, setDetail] = useState()
    const [arrow, setArrow] = useState(true)
    const expand = () => {
        if (detail.maxHeight === '40px') {
            setDetail({
                minHeight: '45px',
                maxHeight: '',
                overflow: ''
            })
        } else {
            setDetail({
                maxHeight: '40px',
                overflow: 'hidden'
            })
        }
        setArrow(!arrow)
    }
    return (
        <div style={{ ...detail, lineHeight: '40px', borderTop: '2px solid #dadce0', borderBottom: '2px solid #dadce0', marginTop: '-2px', cursor: 'pointer' }} onClick={expand}>
            {/* 作者 */}
            <span style={{ paddingTop: '10px', fontWeight: 'bold' }}>{props.message.author}</span>
            <div style={{ display: 'block', position: 'relative', left: '150px' }}>
                {/* 标签 */}
                <span style={{ backgroundColor: '#78c996' }}>{(props.message.label ? (props.message.label + ' ') : '')}</span>&nbsp;&nbsp;
                {/* 动作 */}
                <span>
                    {props.message.action}
                </span>
                {props.message.reviewer ? <button style={{ display: 'inline-block', height: '20px', lineHeight: '14px' }}>{props.message.reviewer}</button> : ''}
            </div>
            <span style={{ float: 'right', display: 'inline-block', marginRight: '20px' }}>
                <span style={{ marginRight: '10px' }}>{props.message.date}</span>
                <span className={arrow ? 'arrow-bottom' : 'arrow-top'}>&lt;</span>
            </span>
        </div>
    )
}
