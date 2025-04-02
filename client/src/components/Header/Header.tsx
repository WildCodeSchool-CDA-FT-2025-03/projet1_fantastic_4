const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navlinks">
        <li>
          <a href="http://localhost:5173/movies">Movies</a>
        </li>
        <li>
          <a href="http://localhost:5173/musics">Musics</a>
        </li>
        <li>
          <a href="http://localhost:5173/games">Games</a>
        </li>
        <li>
          <a href="http://localhost:5173/books">Books</a>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
