import './App.css';
import Home from './components/Home';
import Header from './components/layout/Header';
import introBanner from "./assets/intro-banner.png";
import { useEffect, useState } from 'react';

function App() {
  const [bannerShown, setBannerShown] = useState(false);

  useEffect(() => {
    const getBanner = sessionStorage.getItem("bannerShown");

    // show only if not already shown
    if (!getBanner) {
      setBannerShown(true);
      sessionStorage.setItem("bannerShown", "true");
    }
  }, []); // ✅ run only once on mount

  // close banner function
  const closeBanner = () => {
    setBannerShown(false);
    sessionStorage.setItem("bannerShown", "closed"); // mark as closed
  };

  return (
    <>
      <div className="container relative">
        {/* banner overlay */}
        {bannerShown && (
          <div className="fixed bg-slate-400 bg-opacity-80 w-full h-full flex justify-center items-center top-0 left-0 z-50">
            <div className="banner relative h-80 w-80">
              <img
                src={introBanner}
                alt="Intro Banner"
                className="banner-image object-contain h-full w-full rounded"
              />
              {/* close button */}
              <button
                className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded hover:bg-gray-200"
                onClick={closeBanner}
              >
                Close
              </button>
            </div>
          </div>
        )}

        <Header />
        <Home />
      </div>
    </>
  );
}

export default App;
