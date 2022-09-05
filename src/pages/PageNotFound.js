import React from "react";
import {useMediaQuery} from 'react-responsive';

function PageNotFound() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });
  const isTablet = useMediaQuery({query: '(min-width: 750px)'});
  const isMobile = useMediaQuery({query: '(max-width: 500px)'});
  return (
    <div style={styles.container}>
      <h1 style={isDesktopOrLaptop ? styles.h1DesktopOrLaptop : (isTablet ? styles.h1Tablet : (isMobile ? styles.h1Mobile : null))}>404 Page Not Found</h1>
    </div>
  );
}

export default PageNotFound;

const styles = {
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  h1DesktopOrLaptop: {
    fontSize: "60px",
  },
  h1Tablet: {
    fontSize: "45px",
  },
  h1Mobile: {
    fontSize: "30px",
  },
};
