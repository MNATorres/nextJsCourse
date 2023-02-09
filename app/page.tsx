import { Navigator } from '@/components'
import Link from 'next/link'
import React from 'react'
import { Routes } from './models'

export default function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h2>What do you want to see?</h2>

      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
    </div>
  )
}
