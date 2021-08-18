import { ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

function Container({ children }: ContainerProps) {
  return <main>{children}</main>
}

export default Container
