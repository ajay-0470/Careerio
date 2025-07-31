import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  Button,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Feed = () => {
  const [query, setQuery] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Only search if query is not empty and longer than 2 characters
        if (query.trim().length > 2) {
          const response = await axios.get(
            `http://localhost:8080/posts/${encodeURIComponent(query.trim())}`
          );
          setPost(response.data);
        }
      } catch (error) {
        setPost([]);
      }
    };

    const fetchInitialPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/allPosts`);
        setPost(response.data);
      } catch (error) {
        setPost([]);
      }
    };

    if (query.trim().length === 0) {
      fetchInitialPosts();
    } else if (query.trim().length > 2) {
      fetchPosts();
    }
  }, [query]);

  return (
    <Grid container spacing={2} sx={{ margin: "2%" }}>
      <Grid item xs={12} md={12} lg={12}>
        <Button sx={{ margin: "1% 2%" }} variant="outlined">
          <Link to="/">Home</Link>
        </Button>
        <Box>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            placeholder="Search..."
            sx={{ width: "75%", margin: "2% auto" }}
            fullWidth
            onChange={(e) => setQuery(e.target.value)}
          />
        </Box>
      </Grid>
      {post && Array.isArray(post) && post.length > 0 ? (
        post.map((p) => (
          <Grid key={p._id || p.id} item xs={12} md={6} lg={4}>
            <Card sx={{ padding: "3%", overflow: "hidden", width: "84%" }}>
              <Typography
                variant="h5"
                sx={{ fontSize: "2rem", fontWeight: "600" }}
              >
                {p.profile}
              </Typography>
              <Typography
                sx={{ color: "#585858", marginTop: "2%" }}
                variant="body1"
              >
                Description: {p.desc}
              </Typography>
              <br />
              <br />
              <Typography variant="h6">
                Years of Experience: {p.exp} years
              </Typography>
              <Typography gutterBottom variant="body1">
                Skills :
              </Typography>
              {p.techs &&
                Array.isArray(p.techs) &&
                p.techs.map((s) => (
                  <Typography variant="body2" gutterBottom key={s}>
                    {s} .{" "}
                  </Typography>
                ))}
            </Card>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography variant="h6" sx={{ margin: "2%" }}>
            No jobs found.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default Feed;
