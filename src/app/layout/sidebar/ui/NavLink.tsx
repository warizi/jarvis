/** @jsxImportSource @emotion/react */

import {
  NavLinkType,
  useNavItems,
} from "../model/useNavItems";
import LinkItem from "./LinkItem";
import useIsCurrentLink from "../model/useIsCurrentLink";

const navLinkStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "15px",
  padding: "20px 0 0 0",
  minWidth: "100%",
  height: "100%",
  listStyle: "none",
} as const;

function NavLink() {
  const isCurrentLink = useIsCurrentLink();
  const navLinks = useNavItems();

  return (
    <ul css={navLinkStyles}>
      {navLinks.map((link: NavLinkType) => (
        <li key={link.url}>
          <LinkItem
            icon={link.icon}
            to={link.url}
            title={link.title}
            isCurrent={isCurrentLink(link.url)}
          />
        </li>
      ))}
    </ul>
  );
}

export default NavLink;
