import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div>
        <Link to="/" className="font-bold text-xl">VTU Platform</Link>
      </div>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/airtime">Airtime</Link>
            <Link to="/data">Data</Link>
            <Link to="/wallet">Wallet</Link>
            {user.isAdmin && <Link to="/admin">Admin</Link>}
            <button onClick={logout} className="ml-4 text-red-300">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;