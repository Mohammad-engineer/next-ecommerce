'use client'

import Link from "next/link";
import React from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";
import Menu from "@mui/material/Menu";
import MobileMenu from "./Menu";
import { Button, MenuItem } from "@mui/material";
import { useRouter } from "next/navigation";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

const Navbar = () => {
  
  const router = useRouter();

  const handleNavigate = (ButtonRoute: string, popupState: any)=>{
    router.push(ButtonRoute)
    popupState.close();
  }

  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">LAMA</div>
        </Link>
        <MobileMenu />
      </div>

      {/* Bigger Screen */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="website-logo" width={24} height={24} />
            <div className="text-2xl tracking-wide">LAMA</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">HomePage</Link>
            <Link href="/product">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/blog">Blog</Link>
            {/* <Link href="/about-us">About</Link>
            <Link href="/contact-us">Contact</Link> */}
            <Link href="/dashboard">dashboard</Link>

            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <React.Fragment>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    pages
                  </Button>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={()=>handleNavigate('./faqs',popupState)}>Faqs</MenuItem>
                    <MenuItem onClick={()=>handleNavigate('./maintenance',popupState)}>Maintenance</MenuItem>
                    <MenuItem onClick={()=>handleNavigate('./coming-soon',popupState)}>coming-soon</MenuItem>
                    <MenuItem onClick={()=>handleNavigate("/about-us",popupState)}>About </MenuItem>
                    <MenuItem onClick={()=>handleNavigate("/contact-us",popupState)}>Contact</MenuItem>
                  </Menu>
                </React.Fragment>
              )}
            </PopupState>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
