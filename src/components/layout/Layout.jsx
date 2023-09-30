import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";


function Layout({ children }) {
  return (
    <div
      className={`app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header`}
    >
      <Header />
      <div className="app-main">
        <Sidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
