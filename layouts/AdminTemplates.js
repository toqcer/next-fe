import { Sidebar, Header, Footer } from '@components/molecules';

export default function AdminTemplates({ title, children }) {
  return (
    <div className="flex h-screen relative">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-y-auto h-screen">
        <div className="flex-1 relative ">
          <div className="bg-primary absolute h-screen sm:max-h-[512px] top-0 left-0 right-0 -z-50"></div>
          <section className="px-10">
            <Header title={title} />
            {children}
          </section>
        </div>
        <Footer />
      </main>
    </div>
  );
}
