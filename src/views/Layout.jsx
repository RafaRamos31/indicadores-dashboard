import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { IndicadoresNavBar } from "../components/navbars/IndicadoresNavBar";
import useTitle from "../hooks/useTitle";

export const Layout = ({pagina, breadcrumbs, children, home=false, footer=true}) => {
  useTitle(pagina);

  return (
    <>
      <div className="grid-container">
        <div className='px-0 nav-column'>
          {
            <IndicadoresNavBar />
          }
        </div>
        <div className='px-0 content-column'>
          <Header breadcrumbs={breadcrumbs}/>
          <main className={home ? '' : "content"}>
            {children}
          </main>
          {
            footer &&
            <Footer className='footer'/>
          }
        </div>
      </div>
    </>
  );
}
