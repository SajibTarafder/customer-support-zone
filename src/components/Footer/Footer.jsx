import React from 'react';

const Footer = () => {
  return (
   <footer className="footer mt-7 lg:flex lg:justify-between sm:footer-horizontal bg-neutral text-neutral-content px-36 py-12">
  
    <nav>
    <h4 className="text-xl font-semibold text-white">CS — Ticket System</h4>
    <a className="link link-hover text-xs text-[#4b4a4a]">
      Customer is unable to log in to their account.
      <br />They've tried resetting their password multiple times but still...
      <br /> ever since the 1500s, when an unknown printer
       <br /> took a galley of type and scrambled 
        it to make a type specimen book.
      
    </a>
  </nav>
   <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover text-[#4b4a4a]">Branding</a>
    <a className="link link-hover text-[#4b4a4a]">Design</a>
    <a className="link link-hover text-[#4b4a4a]">Marketing</a>
    <a className="link link-hover text-[#4b4a4a]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover text-[#4b4a4a]">Branding</a>
    <a className="link link-hover text-[#4b4a4a]">Design</a>
    <a className="link link-hover text-[#4b4a4a]">Marketing</a>
    <a className="link link-hover text-[#4b4a4a]">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover text-[#4b4a4a]">About us</a>
    <a className="link link-hover text-[#4b4a4a]">Contact</a>
    <a className="link link-hover text-[#4b4a4a]">Jobs</a>
    <a className="link link-hover text-[#4b4a4a]">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title ">Social Links</h6>
    <a className="link link-hover text-[#4b4a4a]">@CS — Ticket System</a>
    <a className="link link-hover text-[#4b4a4a]">Privacy policy</a>
    <a className="link link-hover text-[#4b4a4a]">Cookie policy</a>
  </nav>
  
</footer>

  );
};

export default Footer;