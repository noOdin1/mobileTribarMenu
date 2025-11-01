/* mobileTribarMenu - index.js */
import "./style.css";

export function setupMobileMenu() {
  /* */
}

/**
 * mobileNavMenu is a packaged mobile menu creator. It will
 * create the menu items specified, css for the menu, and
 * add event listener. The following are the items needed to
 * make this module work,
 * 1. Object, triBarNav, which contains:
 *   a. text to display
 *   b. link, or href
 * 2. 'id' [menuId] of the menu for the items to attach to.
 * 3. 'id' [iconId] of the icon, where the user will click on.
 **/
let triBarNav = {
  News: "#news",
  Services: "#services",
  Contact: "#contact",
  About: "#about",
};

const menuId = "myLinks";
const iconId = "hamburgerEntry";

const mobileNavMenu = () => {
  function createMenuItems() {
    /* Create the nav menu dynamically */
    let navAnchor = document.getElementById(menuId);
    console.log(navAnchor);
    if (navAnchor == undefined || navAnchor == null || navAnchor == "") {
      throw new Error(`[createMenuItems] Error, ${menuId} does not exists`);
      return;
    }
    Object.keys(triBarNav).forEach((elem) => {
      let tmpNavLink = document.createElement("a");
      tmpNavLink.setAttribute("href", `${triBarNav[elem]}`);
      tmpNavLink.innerHTML = elem;
      navAnchor.appendChild(tmpNavLink);
    });
  }

  function createCSS() {
    /* Dynamically insert css styling */
    let style = document.createElement("style");
    style.type = "text/css"; // set the style type
    let cssRules = `
.topnav {
  overflow: hidden;
  background-color: #333;
  position: relative;
}

.topnav #${menuId} {
  display: none;
}

.topnav a {
  color: white;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  display: block;
}

.topnav a.icon {
  background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.active {
  background-color: #04AA6D;
  color: white;
}
`;
    // Add the CSS rules to the style statement
    style.appendChild(document.createTextNode(cssRules));

    document.head.appendChild(style);
  }

  function addListener() {
    let tmpElem = document.getElementById(iconId);
    if (tmpElem == undefined || tmpElem == null || tmpElem == "") {
      throw new Error(`[addListener] Error, ${iconId} does not exists`);
      return;
    }
    tmpElem.addEventListener("click", () => {
      let link = document.getElementById(menuId);
      if (link == undefined || link == null || link == "") {
        throw new Error(`[addListener] Error, ${menuId} does not exists`);
        return;
      }
      link.style.display = link.style.display == "block" ? "none" : "block";
    });
  }

  function setupMobileMenu() {
    createMenuItems();
    createCSS();
    addListener();
  }

  /* The only access to this module*/
  return { setupMobileMenu };
};

mobileNavMenu().setupMobileMenu();
