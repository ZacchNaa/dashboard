import { Grid } from '@mui/material'
import React from 'react'
import NewsCard from './NewsCard'

const AllNewsList = () => {
  return (
    <Grid container columns={16} spacing={2}>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
      <Grid item lg={8}>
        <NewsCard />
      </Grid>
    </Grid>
  );
}

export default AllNewsList