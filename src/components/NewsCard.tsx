import React, { useEffect, useState } from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from 'axios';
import { styled } from '@mui/material';
import TextTruncate from './TextTruncate/TextTruncate';


const baseUrl = "http://api.mediastack.com/v1";
const access_key = "4593411b3bdb6355deb8861ae23609f3";
const lan = "en";
const imageUrl =
  "https://images.unsplash.com/photo-1638913971251-832d29947de6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500"; 

//   TEXT DESCRIPTIONS
const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "11px",
  fontWeight: "700",
    lineHeight: "13px",
    lineClamp: 2,
    textOverflow: "ellipsis", overflow: "hidden",
  textTransform: "uppercase",
  color: theme.palette.primary.main,
}));
const CardText = styled(Box)(({ theme }) => ({
  fontSize: "15px",
  fontWeight: "bold",
    lineHeight: "20px",
  padding: ".5rem 0px",
  color: theme.customProps.color,
}));
const CardSubtext = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "300",
  lineHeight: "12px",
  textDecoration: "underline",
  color: theme.customProps.color,
}));

const NewsCard = () => {

    const [news, setNews] = useState([])

  
    useEffect(() => {
      const fetchData = async () => {
        const response = await axios(
          `${baseUrl}/news?access_key=${access_key}&sources=${lan}`
        );
        const data = response.data;
        console.log(data);
      };
        fetchData();
    }, []);

  return (
    <Card elevation={0} sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={imageUrl}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <CardTitle>Live From Space</CardTitle>
          <CardText>
            <TextTruncate text="Lorem ipsum dolor sit amet consectetur. sit amet consectetur" />
          </CardText>
          <CardSubtext>Mac Miller</CardSubtext>
        </CardContent>
      </Box>
    </Card>
  );
}

export default NewsCard