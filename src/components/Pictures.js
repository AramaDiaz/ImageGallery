import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Image from "./Image";
import Masonry from 'react-masonry-css';
import LinearProgress from '@mui/material/LinearProgress';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from "@mui/material/CircularProgress";

const Pictures = ({ name }) => {
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPALSH_KEY}&page=1&per_page=12&query=${name}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setResults(data.results);
        setLoaded(true);
        setCounter(0);
      })
      .catch(e => (console.log(e)))
  }, [name]);

  const breakpointColumns = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };

  const countPic = () => {
    setCounter(counter + 1);
    setOpen(true);
  }

  const close = () => {
    if (counter === results.length - 1) {
      setOpen(false);
    }
    return open;
  }

  return (
    <div className="display">
      {!loaded &&
        <LinearProgress />}
      {results.length === 0 && (name !== "") && <div className="no_results">No results matching the search...</div>}
      <Backdrop open={open} transitionDuration={200}
        sx={{ color: '#fff', zIndex: 2 }}>
        <CircularProgress />
      </Backdrop>
      <Box>
        <Masonry
          breakpointCols={breakpointColumns}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {results.map((pic) => {
            return (<Image key={pic.id} pic={pic} count={countPic} open={close} />)
          })}
        </Masonry>
      </Box>
    </div>
  );
};

export default Pictures;
