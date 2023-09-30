import { useUser } from '@clerk/nextjs'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import React from 'react'

function UserAvatar() {
    const {user} = useUser();
  return (
    <Avatar className=' h-8 w-8'>
       <AvatarImage className='h-8' src={user?.profileImageUrl}/>
       <AvatarFallback>
        {user?.firstName?.charAt(0)}
        {user?.lastName?.charAt(0)}
       </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar