

const Footer = () => {
  return (
    <footer>
        <div className="top-footer">
          <div className="company">
            <h1>Company Name</h1>
            <p>Your Company Description</p>
            <button className="operational-satus"></button>
            <div className="company-socials">
                <a href=""><img src="" alt="Instagram" /></a>
                <a href=""><img src="" alt="LinkedIn" /></a>
                <a href=""><img src="" alt="YouTube" /></a>
                <a href=""><img src="" alt="TikTok" /></a>
                <a href=""><img src="" alt="Facebok" /></a>
            </div>
          </div>

          <div className="links-groups">
            <ul>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </ul>

            <ul>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </ul>

            <ul>
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/contact">Contact</CustomLink>
            </ul>
          </div>
        </div>
        
        <div className="bottom-footer">
          <p>�� 2022 Company Name. All rights reserved.</p>
          <div className="bottom-footer-link-group">
            <ul>
              <CustomLink to="/terms">Terms & Conditions</CustomLink>
              <CustomLink to="/privacy">Privacy Policy</CustomLink>
              <CustomLink to="/privacy">Privacy Policy</CustomLink>
            </ul>
          </div>
        </div>
    </footer>
  )
}

export default Footer

/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom"


function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}