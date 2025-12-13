import React from 'react';

const Footer = () => {
  return (
   <footer className="footer mt-7 lg:flex lg:justify-between sm:footer-horizontal bg-neutral text-neutral-content px-40 py-12">
  
    <nav>
    <h4 className="footer-title text-xl">CS — Ticket System</h4>
    <a className="link link-hover text-xs text-[#4b4a4a]">
      Lorem Ipsum is simply dummy text of the 
      <br />printing and typesetting industry. 
     <br /> Lorem Ipsum has been the industry's standard dummy text 
      <br />ever since the 1500s, when an unknown printer 
      <br />took a galley of type and scrambled 
     <br /> it to make a type specimen book.
      
    </a>
  </nav>
   <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover">@CS — Ticket System</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>

  );
};

export default Footer;