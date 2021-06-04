import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import TextsmsIcon from "@material-ui/icons/Textsms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Header.css";
import HeaderOptions from "../HeaderOptions/HeaderOptions";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img alt="" src="https://media-exp3.licdn.com/dms/image/C4D0BAQGyOWvr4W0Pow/company-logo_200_200/0/1590003577120?e=1631145600&v=beta&t=drQf_DMsiuTieEsGOdqzOcejn6LL3jYC4Hk45_FXgV8" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home"></HeaderOptions>
        <HeaderOptions
          Icon={SupervisorAccountIcon}
          title="My Network"
        ></HeaderOptions>
        <HeaderOptions Icon={WorkIcon} title="Jobs"></HeaderOptions>
        <HeaderOptions Icon={TextsmsIcon} title="Messaging"></HeaderOptions>
        <HeaderOptions
          Icon={NotificationsIcon}
          title="Notifications"
        ></HeaderOptions>
        <HeaderOptions Icon={AccountCircleIcon} title="Me"></HeaderOptions>
      </div>
    </div>
  );
}

export default Header;
