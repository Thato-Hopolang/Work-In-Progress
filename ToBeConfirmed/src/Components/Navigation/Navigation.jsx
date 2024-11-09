/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from 'react-dom'

const Navigation = () => {
  return (
    <nav className='nav-bar'>
      <Link href="/">Website Logo</Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

export default Navigation

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path : resolvedPath.pathname, end: true })


  return (
    <li className={isActive === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}