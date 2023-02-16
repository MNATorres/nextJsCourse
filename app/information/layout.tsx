import React from 'react';
import cardLayoutStyles from "./information-layout.module.scss";

export default function CardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className={cardLayoutStyles.informationLayout}>{children} </div>
    )
}
