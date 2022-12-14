import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Trang chủ</p>
          <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <DashboardIcon className="icon" />
            <span>Bảng chính</span>
          </li>
          </Link>
          <p className="title">Danh sách</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Người dùng</span>
            </li>
          </Link>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Khách sạn</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Phòng</span>
            </li>
          </Link>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Vận chuyển</span>
          </li>
          <p className="title">Thông số</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Trạng thái</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Thông báo</span>
          </li>
          <p className="title">Dịch vụ</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>Hệ thống sức khỏe</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Bản ghi</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Cài đặt</span>
          </li>
          <p className="title">Người dùng</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Hồ sơ</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
