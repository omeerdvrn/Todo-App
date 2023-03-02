function NavBar(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand">Todo App</a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>
              Tasks <span className="badge">{props.taskCount}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
