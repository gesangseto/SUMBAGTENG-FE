import React from "react";

import { CButton, CRow, CCol } from "@coreui/react";
import { Spinner } from "../reusable";

const Button = (props) => {
  const { onClick, isLoading, color, title } = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <CRow className="justify-content-center">
      <CCol md="12">
        {isLoading ? (
          // <CButton
          //   color={color ?? "primary"}
          //   className="px-4"
          //   onClick={() => handleClick()}
          // >
          <Spinner height={20} width={60} />
        ) : (
          // </CButton>
          <CButton
            color={color ?? "primary"}
            className="px-4"
            onClick={() => handleClick()}
          >
            {title}
          </CButton>
        )}
      </CCol>
    </CRow>
  );
};

export default React.memo(Button);
