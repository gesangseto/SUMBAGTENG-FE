import React, { useEffect } from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { useHistory, Route } from "react-router-dom";
import { useLocation } from "react-router";

const TheHeaderDropdown = () => {
  let location = useLocation();
  const history = useHistory();
  const path_location = location.pathname.split("/");
  const pathParent = path_location[1];
  const pathChild = path_location[2];
  const pathOperation = path_location[3];

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (!token) {
      handleClickLogout();
    } else {
      handlePermission();
    }
  }, [location]);

  const handlePermission = () => {
    let menu_role = JSON.parse(localStorage.getItem("menu_role"));
    let can_access = false;
    if (pathParent != "dashboard") {
      for (let menu of menu_role) {
        if (menu.route == `/${pathParent}`) {
          for (let child of menu._children) {
            if (child.to == `/${pathParent}/${pathChild}`) {
              if (pathOperation) {
                if (pathOperation == "create") {
                  can_access = child.flag_create ? true : false;
                } else if (pathOperation == "read") {
                  can_access = child.flag_read ? true : false;
                } else if (pathOperation == "update") {
                  can_access = child.flag_update ? true : false;
                }
              } else {
                can_access = true;
              }
            }
          }
        }

        if (menu.to == `/${pathParent}`) {
          can_access = true;
        }
      }
      if (!can_access) {
        history.replace("/404");
      }
    }
  };

  const handleClickLogout = () => {
    localStorage.clear();
    history.push("/empty");
    history.replace("/login");
  };
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={() => handleClickLogout()}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default TheHeaderDropdown;
