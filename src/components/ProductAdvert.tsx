import {
  Grid,
  Typography,
  Card,
  Link,
  styled,
} from "@mui/material";
import { BsArrowRightShort } from "react-icons/bs";
import Phone from "../assets/iPhone-12.png";


const CardLink = styled(Link)(({ theme }) => ({
  fontSize: ".7rem",
  textDecoration: "underline",
  color: theme.palette.primary.main,
  marginRight: "1.5rem",
}));

const ProductAdvert = () => {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
     columns={16}
    >
      <Grid item xs={6} lg={8}>
          <Typography variant="h5" sx={{ fontSize: "26px", color: "#fff" }}>
            Sell your products on your exclusive APP published on the stores
          </Typography>
          <CardLink variant="body1" sx={{ fontSize: "18px", color: "#fff" }}>
            Show more
          </CardLink>
          <BsArrowRightShort size={25} color="#21B8F9" />
      </Grid>
      <Grid item xs={6} lg={8} sx={{alignItems: "end", alignContent: 'end', textAlign: "right"}}>
        <img src={Phone} alt="globe" />
      </Grid>
    </Grid>
  );
};

export default ProductAdvert;
