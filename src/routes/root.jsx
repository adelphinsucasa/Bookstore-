import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Root() {
  return (
    <>
      <div id="topbar">
        <h1>Bookstore CMS</h1>
        <Navbar />
        <button type="button">imagen</button>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
