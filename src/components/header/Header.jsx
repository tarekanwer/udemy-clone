import React from "react";
import classes from "./Header.module.css";
import image from "../../images/udemy.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import styled from "@emotion/styled";
const Menu = styled(MenuIcon)({
  padding: "1rem",
  "&:hover": {
    color: "#5624d0",
  },
});
const Search = styled(SearchIcon)({
  padding: "1rem",
  "&:hover": {
    color: "#5624d0",
  },
});
const Cart = styled(ShoppingCartOutlinedIcon)({
  padding: "1rem",
  "&:hover": {
    color: "#5624d0",
  },
});
const Header = () => {
  return (
    <header className={classes.container}>
      <Menu />
      <div className={classes.logo_container}>
        <img alt="logo" src={image} className={classes.logo} />
      </div>
      <Search />
      <Cart/>
    </header>
  );
};

export default Header;
