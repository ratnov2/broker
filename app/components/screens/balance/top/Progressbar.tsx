import { progressBar } from "@/screens/balance/Balance";

const Progressbar = ({ bgcolor, completed }: progressBar) => {
  const containerStyles = {
    height: 16,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50
  };
  
  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: "inherit",
    textAlign: "right"
  };
  
  return (
    <div className={"mt-9"} style={containerStyles}>
      <div style={fillerStyles}></div>
    </div>
  );
};

export default Progressbar;