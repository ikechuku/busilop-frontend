import * as React from "react";

export default ({ value }) => {
  return (
    <div style={styles.main}>
      <h3 style={{ color: "#389926" }}>yo-rc.json</h3>
      <pre style={styles.text}>{JSON.stringify(value, 0, 2)}</pre>
    </div>
  );
};

const styles = {
  main: {
    border: "1px solid #ccc",
    backgroundColor: "#000",
    borderRadius: "4px",
    width: "80%",
    marginLeft: "7%",
    marginTop: "20px",
    padding: "10px 20px",
    textAlign: "left",
  },
  text: {
    color: "black",
    fontSize: "18px",
    lineHeight: "30px",
  },
};
