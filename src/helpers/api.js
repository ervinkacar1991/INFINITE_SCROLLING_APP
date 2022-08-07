import axios from "axios";

export const getImages = async () => {
  const apiRoot = "https://api.unsplash.com";

  const res = await axios.get(
    `${apiRoot}/photos/random?client_id=wexsiBr53XkO0L7a6P1DiM09VIOdSph-lqqHmvXUpTI&count=10`
  );
  return res.data;
};
