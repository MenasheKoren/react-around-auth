import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import App from './App';

export default function Layout() {
  const { handleLogout, handleSubmitLogin, handleLoginTest } = App;
  return (
    <div className='page'>
      <div className='content'>
        <Header
          handleLogout={handleLogout}
        />
        <Outlet
          handleLoginTest={handleLoginTest}
          handleSubmitLogin={handleSubmitLogin}
        />
        <Footer />
      </div>
    </div>
  );
}
