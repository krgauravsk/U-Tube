import React, { useEffect, useState } from 'react'
import { Box, Typography } from "@mui/material";
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from "../utils/fetchFromAPI";

import {
  Videos
} from "./";

// const selectedCategory = 'New';


const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  
  return (
    
    <Box p={2} minHeight="95vh">

      {/* this is your Searchs Result from Feed.js comp */}
      <Typography variant="h4" fontWeight={900} color="white" mb={3} ml={{ sm: "100px" }}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>

      {/* showing your-searched-related-videos  */}
      <Box display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>

    </Box>
  )
}

export default SearchFeed
