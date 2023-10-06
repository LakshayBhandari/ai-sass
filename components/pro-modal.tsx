"use client"
import React from 'react'
import { Dialog, DialogHeader,DialogContent,DialogTitle,DialogDescription, DialogFooter  } from './ui/dialog'
import { useProModal } from '@/hooks/user-pro-modal'
import { Badge } from './ui/badge';
import { } from '@radix-ui/react-dialog';
import { MessageSquare,Music,ImageIcon,VideoIcon,Code, Check, Zap } from 'lucide-react';
import { Card } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';


function ProModal() {

  const proModal=useProModal();

  const tools = [
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: 'Music Generation',
      icon: Music,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
  ];

  return (

    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
     <DialogContent>
      <DialogHeader>
        <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
          <div className='flex items-center gap-x-2 font-bold py-1'>
          Upgrade to Genius
           <Badge variant="premium" className=' uppercase text-sm py-1'>
             pro 
           </Badge>
           </div>
        </DialogTitle>
        <DialogDescription className=' text-center pt-2 space-y-2 text-zinc-900 font-medium'>
          {tools.map((tool)=><>
            <Card key={tool.label} className=' p-3 flex items-center justify-between border-black/5'>
              <div className=' flex items-center gap-x-4'>
                <div className={cn(" p-2 w-fit rounded-md",tool.bgColor)}>
                  <tool.icon className={cn("w6 h-6",tool.color)} />
                </div>
                <div className=' font-semibold text-sm'>
                  {tool.label}
                </div>

              </div>
              <Check className=' text-primary w-5 h-5'/>
            </Card>
          </>)}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button size="lg" variant="premium" className=' w-full'>
        Upgrade <Zap className=' w-4 h-4 fill-white'/>
        </Button>
        
      </DialogFooter>
     </DialogContent>
    </Dialog>
  )
}

export default ProModal