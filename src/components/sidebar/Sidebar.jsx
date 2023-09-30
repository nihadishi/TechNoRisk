
import { NavLink, } from "react-router-dom";

function Sidebar() {

  return (
    <div className="app-sidebar sidebar-shadow" style={{ overflowY: "scroll" }}>
      <div className="app-header__logo">
        <div className="logo-src"></div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            <li className="app-sidebar__heading"></li>
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products-category"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Products Category
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/departments"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Departments
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/positions"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Positions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/employees"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Employees
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "mm-active" : ""
                }
              >
                Products Transactions
              </NavLink>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
