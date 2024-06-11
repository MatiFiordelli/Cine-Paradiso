import React from 'react'
import BackDropSlider from './BackDropSlider'
import DragIndicator from './DragIndicator'
import Summarybar from './SummaryBar'

export default function TopContent() {    

    return (
        <section
            className="d-flex ms-auto me-0 vw-100 position-relative "
            style={{
                height: '84vh',
            }}
        >
            <BackDropSlider />
            <DragIndicator />
            <Summarybar />            
        </section>
    )
}
