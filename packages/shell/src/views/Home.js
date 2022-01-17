import React from 'react'
import { mount } from 'home_content/module';
import Application from '../components/Application';

export default function Home() {
  return (
    <div>
      <Application mount={mount} />
    </div>
  )
}
