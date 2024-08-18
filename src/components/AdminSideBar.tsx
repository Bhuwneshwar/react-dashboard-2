import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { AiFillFile } from "react-icons/ai";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const [showModel, setShowModel] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  //resize handler
  const resizeHandler = () => {
    if (window.innerWidth < 1100) {
      setPhoneActive(true);
    } else {
      setPhoneActive(false);
    }
  };
  // register listeners on mounted
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburgur" onClick={() => setShowModel(true)}>
          <HiMenuAlt4 />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModel ? "0" : "-20rem",
                zIndex: 999,
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>RebyB Dashboard</h2>
        <div>
          <h5>Dashboard</h5>
          <ul>
            <Li
              Icon={RiDashboardFill}
              location={location}
              text="Dashboard"
              url="/admin/dashboard"
            />
            <Li
              Icon={RiShoppingBag3Fill}
              location={location}
              text="Product"
              url="/admin/product"
            />
            <Li
              Icon={IoIosPeople}
              location={location}
              text="Customer"
              url="/admin/customer"
            />
            <Li
              Icon={AiFillFile}
              location={location}
              text="Transaction"
              url="/admin/transaction"
            />
          </ul>
        </div>
        {/* charts */}
        <div>
          <h5>Charts</h5>
          <ul>
            <Li
              Icon={FaChartBar}
              location={location}
              text="Bar"
              url="/admin/chart/bar"
            />
            <Li
              Icon={FaChartPie}
              location={location}
              text="Pie"
              url="/admin/chart/pie"
            />
            <Li
              Icon={FaChartLine}
              location={location}
              text="Line"
              url="/admin/chart/line"
            />
          </ul>
        </div>
        {/* Apps */}
        <div>
          <h5>Apps</h5>
          <ul>
            <Li
              Icon={FaStopwatch}
              location={location}
              text="Stopwatch"
              url="/admin/apps/stopwatch"
            />
            <Li
              Icon={RiCoupon3Fill}
              location={location}
              text="Coupon"
              url="/admin/apps/coupon"
            />
            <Li
              Icon={FaGamepad}
              location={location}
              text="Toss"
              url="/admin/apps/toss"
            />
          </ul>
          {phoneActive && (
            <button id="close-sidebar" onClick={() => setShowModel(false)}>
              Close
            </button>
          )}
        </div>
      </aside>
    </>
  );
};

interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}

const Li = ({ Icon, location, text, url }: LiProps) => {
  return (
    <li
      style={{
        backgroundColor: location.pathname.includes(url)
          ? "rgba(0,115,255,0.1)"
          : "white",
      }}
    >
      <Link
        style={{
          color: location.pathname.includes(url) ? "rgba(0,115,255)" : "black",
        }}
        to={url}
      >
        <Icon />
        {text}
      </Link>
    </li>
  );
};

export default AdminSideBar;
