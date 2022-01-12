import React from "react";
import User from "./User";
import PopupState, { bindHover, bindPopper } from 'material-ui-popup-state';
import Popper from "@mui/material/Popper";

const PopperElem = ({ pic }) => {
  return (
    <PopupState variant="popper" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <span className="title"
            {...bindHover(popupState)}
          >
            {`${pic.user.name}`}
          </span>
          <Popper
            {...bindPopper(popupState)}
            disablePortal={true}
          >
            <User user={pic.user} />
          </Popper>
        </div>
      )}
    </PopupState>
  );
}

export default PopperElem;
