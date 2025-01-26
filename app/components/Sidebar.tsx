'use client'
import Link from 'next/link';
import React from 'react';


const Sidebar = () => {
    return(
      <div className="left-sidebar">
        <Link href="/">
          <button type="button" className="sidebar-home" id="sidebar-home" />
        </Link>
        <Link href="/map">
          <button type="button" className="sidebar-map" id="sidebar-map" />
        </Link>
        <Link href="/upload">
          <button type="button" className="sidebar-upload" id="sidebar-upload" />
        </Link>
      </div>
    );
};

export default Sidebar;