import Image from 'next/image'
import Sidebar from '../components/SideBar.client' 
import Logo from 'theTypes/components/Logo.client'
import { Content } from 'next/font/google'
import MainContent from '../components/MainContent.client'
import Bottombar from '../components/Bottombar.client'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Logo></Logo>
      <MainContent></MainContent>
      <Sidebar></Sidebar>
      <Bottombar></Bottombar>
    </main>
  )
}
