import React, { ReactNode } from 'react'
import Navbar from '../components/custom/Navbar'
import Sidebar from '../components/custom/Sidebar'

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <main className="min-h-screen p-4 bg-linear-to-br from-background via-[#0f2f2f] to-[#000000]">
      <Navbar />

      <div className="flex w-full">
        <div className="flex flex-col">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  )
}

export default BaseLayout