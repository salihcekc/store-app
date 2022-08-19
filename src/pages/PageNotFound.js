import React from "react";

function PageNotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>404 Page Not Found</h1>
    </div>
  );
}

export default PageNotFound;

const styles = {
  container: {
    height: "83.1vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: "40px",
  },
};
