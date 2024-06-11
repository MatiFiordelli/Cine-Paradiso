import React, { useState } from 'react'
import Poster from './Poster'

export default function LeftContent() {
    const [posterTopPx] = useState('110')

    return (
        <aside 
            className="d-none d-sm-block m-0 p-0 position-sticky col-4 col-lg-3"
            style={{
                top: `${posterTopPx}px`,
                height: '100%',
            }}
        >
            <Poster posterTopPx={posterTopPx} />
        </aside>
    )
}
