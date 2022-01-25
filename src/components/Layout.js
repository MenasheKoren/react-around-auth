import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ handleLogout, isAuthed, loginEmail }) {
  return (
    <div className="page">
      <div className="content">
        <Header
          handleLogout={handleLogout}
          isAuthed={isAuthed}
          loginEmail={loginEmail}
        />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
