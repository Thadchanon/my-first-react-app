import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.menu}>
        <h2>Navbar</h2>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>

        <button className={classes.loginButton}>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
