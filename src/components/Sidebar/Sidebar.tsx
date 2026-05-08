import { useState } from 'react'
import { Button } from '@/components/ui'
import { cn } from '@/utils'

import styles from './Sidebar.module.scss'

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <aside
      data-testid="sidebar"
      className={cn(styles.root, { [styles.open]: isOpen }, className)}
    >
      <Button data-testid="sidebar-toggle" onClick={toggleSidebar}>
        Toggle sidebar
      </Button>
    </aside>
  )
}
