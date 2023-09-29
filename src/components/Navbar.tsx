import classes from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={classes.navBar}>
      <h2>Navbar</h2>
      <button className={classes.loginButton}>Login</button>
    </div>
  )
}

export default Navbar
