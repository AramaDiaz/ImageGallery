import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import Image from "./Image";

const Pictures = ({ name }) => {
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPALSH_KEY}&page=1&per_page=10&query=${name}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setResults(data.results);
        setLoaded(true);
      });
  }, [name]);
  console.log(results);

  return (
    <div className="display">
      {!loaded ? (
        <p>Loading...</p>
      ) : (
        <Box>
          <ImageList variant="masonry" cols={3} gap={8}>
            {results.map((pic) => {
              return <Image key={pic.id} pic={pic} />;
            })}
          </ImageList>
        </Box>
      )}
    </div>
  );
};

export default Pictures;
