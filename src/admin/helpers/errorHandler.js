export const generateStdError = errorObj => {
    const errorResponseObject = errorObj.response.data;
    
    if (errorResponseObject.message) {
      console.log(errorResponseObject);
      switch (errorResponseObject.message) {
        case "The given data was invalid.":
          throw new Error("Ошибка валидации");
        default:
          console.error(errorResponseObject);
          throw new Error(errorResponseObject.message);
      }
    }
  
    if (errorResponseObject.error) {
      console.log(errorResponseObject);
      
      switch (errorResponseObject.error) {
        case "token_not_provided":
          throw new Error("Токен авторизации не предоставлен");
  
        case "token_expired":
          throw new Error("Токен авторизации просрочен");
        default:
          console.error(errorResponseObject);
          throw new Error(errorResponseObject.error);
      }
    }
  };