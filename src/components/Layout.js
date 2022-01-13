import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='page'>
      <div className='content'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
