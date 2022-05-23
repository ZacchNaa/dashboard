import { styled } from "@mui/material";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { SidebarItem } from "./models/SidebarItem";

type SubmenuItemProps = {
  item: SidebarItem;
};

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  color: "inherit",
}));

const SubmenuItem: FC<SubmenuItemProps> = ({ item }) => {
  const [hasSubnav, setHasSubnav] = useState(false);
  const toggleSubnav = () => {
    setHasSubnav(!hasSubnav);
  };
  return (
    <>
      <StyledLink to={item.path} onClick={toggleSubnav}>
        <span>
          {item.icon}
          <span>{item.title}</span>
        </span>
        <span>
          {item?.subnav && hasSubnav ? item?.iconOpened : item?.iconClosed}
        </span>
      </StyledLink>
      {item?.subnav?.map((subitem, index) => (
        <StyledLink key={index} to={subitem.path}>
          {subitem.title}
        </StyledLink>
      ))}
    </>
  );
};

export default SubmenuItem;
