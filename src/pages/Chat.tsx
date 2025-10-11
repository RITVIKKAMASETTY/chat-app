import React from 'react'
import type App from '../App'
import AppLayout from '../components/layout/AppLayout'
function Chat() {
  return (
    <div>
      chat
    </div>
  )
}
const wrappedchat=AppLayout()(Chat);
export default wrappedchat;