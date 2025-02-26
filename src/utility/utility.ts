// src/utils/authUtils.ts
export const checkTokenExpiration = (): boolean => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("tokenExpiration");
  
    if (token && expirationTime) {
      const currentTime = new Date().getTime();
      if (currentTime > parseInt(expirationTime)) {
        // Token has expired
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        return true; // Token expired
      }
    }
    return false; // Token is valid or doesn't exist
  };