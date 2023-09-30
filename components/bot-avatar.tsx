import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

function BotAvatar() {
  return (
    <Avatar  className=' h-8 w-8 flex flex-row'>
      <AvatarImage className='p-1 ' src="/logo.png"/>
    </Avatar>
  )
}

export default BotAvatar