import React from "react";
import classes from "./Header.module.css";
import image from "../../images/udemy.png";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import styled from "@emotion/styled";
const Menu = styled(MenuIcon)({
  padding: "1rem",
  "&:hover": {
    color: "#5624d0",
  },
});
const Search = styled(SearchIcon)({
  margin: "1rem",
  "&:hover": {
    color: "#5624d0",
  },
});
const Cart = styled(ShoppingCartOutlinedIcon)({
  padding: " 0 1.2rem",
  "&:hover": {
    color: "#5624d0",
  },
});
const Header = () => {
  return (
    <header className={classes.container}>
      <div className={classes.Menu}>
        <Menu />
      </div>
      <div className={classes.spacer}></div>
      <div className={classes.logo_container}>
        <img alt="logo" src={image} className={classes.logo} />
      </div>
      <button className={classes.text}>Categories</button>
      <div className={classes.Search}>
        <Search />
      </div>
      <div className={classes.form__div}>
        <form className={classes.search__form}>
          <SearchIcon
            sx={{
              left: 0,
              color: "#b6b8ba",
            }}
          />
          <input
            className={classes.search__text}
            type="text"
            placeholder="Search for anything"
          />
        </form>
      </div>
      <button className={classes.text}>Udemy Business</button>
      <button className={classes.text}>Teach on Udemy</button>
      <Cart />
      <button className={classes.log__in}>Log in</button>
      <button className={classes.sign__up}>Sign up</button>
      <button className={classes.lng}>
        <LanguageIcon/>
      </button>
    </header>
  );
};

export default Header;
