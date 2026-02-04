
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import imgLogo from "../assets/shop-icon.png";
import { BsCart4 } from "react-icons/bs";

export default function NavbarComp() {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img src={imgLogo} className="mr-3 h-6 sm:h-9" alt="Shop Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Platzi Fake Store</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <BsCart4 className="me-2 text-4xl mt-1 text-white"/>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://down-id.img.susercontent.com/file/id-11134207-7r98v-lq9tbebii9za17" rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
    </Navbar>
  );
}
