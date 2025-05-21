import { Outlet } from 'react-router-dom';

const CenteredLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg">
        <Outlet />
      </div>
    </div>
  );
}

export default CenteredLayout;
