import React from 'react';
import "./information-layout.css"

export default function CardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='information-layout'>{children} </div>
    )
}
