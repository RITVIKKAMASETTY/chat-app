import React from 'react'
import {Helmet} from "react-helmet";
export default function Title({title="chat",description="this is a chat app"}) {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
    </div>
  )
}