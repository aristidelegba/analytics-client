import { useState } from "react";

const useGoogleApi = (options) => {
  const [isLoadingGAPI, setIsLoadingGAPI] = useState(window.isLoadingGAPI);

  function checkIsLoading() {
    setTimeout(() => {
      const isLoading = window.isLoadingGAPI;
      if (isLoading) {
        checkIsLoading();
      } else {
        // console.log("isLoadingGAPI :>> ", isLoadingGAPI);
        setIsLoadingGAPI(isLoading);
      }
    }, 1000);
  }

  checkIsLoading();

  return {
    gapi: window.gapi,
    isLoadingGAPI,
  };
};

export default useGoogleApi;
