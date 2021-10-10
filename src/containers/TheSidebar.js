import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const TheSidebar = () => {
  const [configuration, setConfig] = useState(
    JSON.parse(localStorage.getItem("configuration")) ?? {}
  );
  const dispatch = useDispatch();
  const show = useSelector((state) => state.sidebarShow);

  return <></>;
};

export default React.memo(TheSidebar);
