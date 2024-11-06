const Footer = (props) => {
    
  return (
    <footer className="bg-purple-500 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        
        {/* Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            {props.obj.renderDatas.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:text-gray-400">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>{props.obj.renderDatas.contact.address}</p>
          <p>{props.obj.renderDatas.contact.phone}</p>
          <p>{props.obj.renderDatas.contact.email}</p>
        </div>
        
        {/* Social Media Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {props.obj.renderDatas.social.map((social, index) => (
              <a key={index} href={social.url} className="text-2xl hover:text-gray-400">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
