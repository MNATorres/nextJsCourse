import React from 'react'

interface Props {
    children: React.ReactNode
}


export default async function DashboardLayout({children}: Props) {
  return (
    <div style={{color: 'blue', background: "orange", padding: '50px', fontSize: '50px'}}>{children}</div>
  )
}
