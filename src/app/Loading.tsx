import { ClipLoader } from 'react-spinners';

const LoadingPage = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 flex items-center justify-center z-[9999]">
      <ClipLoader size={50} className="text-white animate-pulse" />
    </div>
  );
};

export default LoadingPage;
