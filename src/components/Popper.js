import React from "react";
import User from "./User";
import PopupState, { bindPopover, bindTrigger } from 'material-ui-popup-state';
import { Popover } from "@mui/material";

const PopperElem = ({ pic }) => {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <span className="title"
            {...bindTrigger(popupState)}
          >
            {`${pic.user.name}`}
          </span>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            disablePortal={true}
            modifiers={[
              {
                name: 'flip',
                enabled: true,
                options: {
                  altBoundary: true,
                  rootBoundary: 'document',
                  padding: 8,
                },
              },
              {
                name: 'preventOverflow',
                enabled: false,
                options: {
                  altAxis: false,
                  altBoundary: false,
                  tether: false,
                  rootBoundary: 'document',
                  padding: 8,
                },
              },
              {
                name: 'arrow',
                enabled: true,
                // options: {
                //   element: arrowRef,
                // },
              },
            ]}
          >
            <User user={pic.user} />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default PopperElem;
