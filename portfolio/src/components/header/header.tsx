import { headerLinks } from "../../shared/enums";
import { HeaderLinkI } from "../../shared/shared-models";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-logo">Prabhat Portfolio</div>
      <div className="header-links">
        {headerLinks.map((link: HeaderLinkI) => (
          <span className="page-link">{link.label}</span>
        ))}
        <span>Light/Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
