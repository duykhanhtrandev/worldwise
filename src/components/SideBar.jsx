import Logo from "./Logo";
import AppNav from "./AppNav";
import styles from "./SideBar.module.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={styles.footer}>
        <p className={styles.copyrights}>
          &copy; Copyright {new Date().getFullYear()} WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
