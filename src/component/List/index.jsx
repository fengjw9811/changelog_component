import React from 'react'

import Item from '../Item'
import message from '../../constant'

export default function List() {
    return (
        <div>
            {
                message.map((item, index) => <Item message={message[index]} key={index} canHidden={message[index].canHidden}></Item>)
            }
        </div>
    )
}
