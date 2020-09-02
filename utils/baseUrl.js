const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://aller-genie.herokuapp.com"
    : "http://localhost:3000";
export default baseUrl;