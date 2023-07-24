import React from 'react';
import loaderImg from '../../assets/ghost.gif';
// import loaderImg from '../../assets/spinner.gif';
// import loaderImg from '../../assets/greenSpinner.gif';
// import loaderImg from '../../assets/blueSpinner.gif';

const LoadingScreen = ({
  loaderSrc,
  displayProperty,
  backgroundColor,
  userLoaderStyles,
  userLoadingTextStyles,
}) => {
  const loaderStyles = {
    height: '100px',
    width: '100px',
    ...userLoaderStyles,
  };
  const loadingTextStyles = {
    color: 'white',
    fontSize: '16px',
    fontWeight: '400',
    ...userLoadingTextStyles,
  };

  return (
    <span
      style={{
        display: displayProperty || 'none',
        position: 'fixed',
        zIndex: '99999',
        left: '0',
        top: '0',
        right: '0',
        margin: '0 auto',
        background: backgroundColor || 'rgba(222, 226, 230, 0.1)',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={loaderSrc || loaderImg}
          alt=""
          height={loaderStyles?.height}
          width={loaderStyles?.width}
        />
        <p style={loadingTextStyles}>Loading...</p>
      </div>
    </span>
  );
};

export default LoadingScreen;
