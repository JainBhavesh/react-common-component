export const getSentenceFromCamelCase = (message) => {
  let pattern = /[A-Za-z]/g;
  let messages = message.match(pattern);
  let errorMessage = "";
  for (let i = 0; i < messages.length; i++) {
    errorMessage +=
      messages[i] === messages[i].toUpperCase()
        ? " " + messages[i].toLowerCase()
        : messages[i];
  }
  return errorMessage.trim();
};

export const getRegExp = (type) => {
  let regex = null;
  switch (type) {
    case "email":
      regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g;
      break;
    case "number":
      regex = /^[0-9]*$/;
      break;
    case "password":
      regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
      break;
    default:
      break;
  }
  return regex;
};

export const checkValidation = (errors, data) => {
  const finalErrors = {};
  Object.keys(data).forEach((key) => {
    if (data[key] === "" || data[key] === {}) {
      finalErrors[key] = `Please enter ${getSentenceFromCamelCase(key)}.`;
    }
  });
  Object.keys(errors).forEach((key) => {
    if (errors[key] !== "") {
      finalErrors[key] = errors[key];
    }
  });
  return finalErrors;
};
