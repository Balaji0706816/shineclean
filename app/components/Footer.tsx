export default function Footer() {
    return (
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-[#6C63FF]">
              ShineClean
            </h2>
  
            <p className="text-gray-500 mt-5 leading-7">
              Premium residential and commercial cleaning services.
            </p>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Services
            </h3>
  
            <ul className="space-y-3 text-gray-500">
              <li>Home Cleaning</li>
              <li>Office Cleaning</li>
              <li>Kitchen Cleaning</li>
              <li>Deep Cleaning</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Company
            </h3>
  
            <ul className="space-y-3 text-gray-500">
              <li>About</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>
          </div>
  
          <div>
            <h3 className="font-semibold text-lg mb-5">
              Contact
            </h3>
  
            <ul className="space-y-3 text-gray-500">
              <li>Boston, Massachusetts</li>
              <li>support@shineclean.com</li>
              <li>(617) 555-7890</li>
            </ul>
          </div>
        </div>
  
        <div className="text-center text-gray-400 mt-14">
          © 2026 ShineClean. All rights reserved.
        </div>
      </footer>
    );
  }