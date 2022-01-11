import React from "react";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PopperElem from "./Popper";

const Image = ({ pic }) => {
  return (
    <ImageListItem>
      <img
        src={`${pic.urls.thumb}?w=248&fit=crop&auto=format`}
        srcSet={`${pic.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={pic.alt_description}
        loading="lazy"
      />
      <ImageListItemBar
        position="bottom"
        title={
          <span className='item_bar'>
            <img src={pic.user.profile_image.small} alt='profile pic' />
            <PopperElem pic={pic} />
          </span>
        }
        subtitle={`#${pic.tags[0].title}
             #${pic.tags[1].title}
             #${pic.tags[2].title}`}
        actionIcon={
          <span>
            <Tooltip title="Likes" placement="top" arrow>
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.54)",
                  cursor: "default",
                }}
              >
                <FavoriteOutlinedIcon />
                {pic.likes}
              </IconButton>
            </Tooltip>
            <IconButton>
              <Tooltip title="Download" placement="top" arrow>
                <Link
                  underline="none"
                  download
                  href={`${pic.links.download}&force=true`}
                >
                  <DownloadForOfflineIcon
                    sx={{
                      color: "rgba(255, 255, 255, 0.54)",
                    }}
                  />
                </Link>
              </Tooltip>
            </IconButton>
          </span>
        }
      />
    </ImageListItem>
  );
};

export default Image;
