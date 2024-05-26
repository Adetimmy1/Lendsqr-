import { Aside } from "@/components/aside";
import HeaderProfile  from "@/components/header"

const DashboardLayout = ({children}) => {
  return (
    <main className="w-full h-screen top-[70px] relative">
      <header className="fixed w-full top-0 h-[70px] border z-50  px-8">
        <HeaderProfile  />
      </header>
      <section className="w-full h-full relative flex justify-between">
        <aside className="w-3/12 border overflow-x-hidden fixed left-0 h-full mb-12 pb-20"><Aside/></aside>
        <section className="w-9/12 px-8 bg-slate-50 fixed right-0 h-full">{children}</section>
      </section>
    </main>
  )
}

export default DashboardLayout