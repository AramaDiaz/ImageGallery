import React, { useState } from "react";
import Link from "@mui/material/Link";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import PopperElem from "./Popper";
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";

const Image = ({ pic, count, open }) => {
  const [picLoaded, setPicLoaded] = useState(false);

  const loading = () => {
    setPicLoaded(true);
    count();
    open();
  }

  const handleError = (e) => {
    // setPicLoaded(true);
    e.target.style.display = 'none';
    count();
    open();

  }

  return (

    <ImageListItem>
      <img
        src={`${pic.urls.thumb}?w=248&fit=crop&auto=format`}
        srcSet={`${pic.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={pic.alt_description}
        loading="lazy"
        onLoad={loading}
        onError={handleError}
      />
      {picLoaded &&
        <ImageListItemBar
          className="item_bar"
          position="bottom"
          title={
            <span className='title_name'>
              <img src={pic.user.profile_image.small} alt='profile pic' />
              <PopperElem pic={pic} />
            </span>
          }
          subtitle={
            <span className="tags">{`#${pic.tags[0].title}
             #${pic.tags[1].title}
             #${pic.tags[2].title}`}
            </span>
          }
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
        />}
      {/* : <Box className="spinner-box" sx={{ display: 'flex' }}>
          <CircularProgress className='spinner' />
        </Box>
        } */}
    </ImageListItem>

  );
};

export default Image;
