//src/components/Alert.jsx
import "./Alert.css";

const alertStyles = {
margin: 8,
padding: "12px 16px",
borderRadius: 4,
backgroundColor: "gray",
color: "white",
};

// src/components/Alert.jsx

import "./Alert.css";

const Alert = ({ variant, children }) => {
const classNames = ["alert", variant];

return <p className={classNames.join(" ")}>{children}</p>;
};



