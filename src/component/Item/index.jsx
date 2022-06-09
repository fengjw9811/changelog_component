import React, { forwardRef, useState } from 'react'

import './style.css'

const Item = forwardRef((props, ref) => {
    const [detail, setDetail] = useState({
        maxHeight: '40px',
        overflow: 'hidden'
    })
    const [arrow, setArrow] = useState(true)
    const [block, setBlock] = useState('inline-block')
    const expandSelf = () => {
        if (detail.maxHeight === '40px') {
            setDetail({
                minHeight: '45px',
                maxHeight: '',
                overflow: ''
            })
            setBlock('block')
        } else {
            setDetail({
                maxHeight: '40px',
                overflow: 'hidden'
            })
            setBlock('inline-block')
        }
        setArrow(!arrow)
    }
    return (
        <div style={{ ...detail, lineHeight: '40px', borderTop: '2px solid #dadce0', borderBottom: '2px solid #dadce0', marginTop: '-2px', cursor: 'pointer' }} onClick={expandSelf} ref={ref}>
            {/* 作者 */}
            <span style={{ paddingTop: '10px', fontWeight: 'bold' }}>{props.message.author}</span>
            <span style={{ position: 'relative', float: 'right' }}>
                <span style={{ marginRight: '10px' }}>{props.message.date}</span>
                <span className={arrow ? 'arrow-bottom' : 'arrow-top'} style={{ marginRight: '10px' }}>&lt;</span>
            </span>
            {/* 标签 */}
            <span style={{ backgroundColor: '#78c996', position: 'relative', left: '150px' }}>{(props.message.label ? (props.message.label + ' ') : '')}</span>&nbsp;&nbsp;
            <div style={{ display: block, position: 'relative', left: '150px' }}>
                {/* 动作 */}
                {
                    props.message.action instanceof Array ? (block === 'inline-block' ? <span>{props.message.action.join(' ').substring(0, 90) + '...'}</span> : (
                        <ul>
                            {props.message.action.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    )) : <span>{props.message.action}</span>
                }
                {props.message.reviewer ? (
                    <a href={props.message.reviewer.website} style={{ color: '#5e6368', border: '1px solid #dadce0', borderRadius: '10px', display: 'inline-block', height: '20px', lineHeight: '14px' }}>{props.message.reviewer.name} </a>
                ) : ''}
            </div>
        </div>
    )
})
export default Item