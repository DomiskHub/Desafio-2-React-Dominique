const regexName = (name) => {
  const rgx = /^[a-zA-Z\s]*$/;

  if (rgx.test(name)) {
    return true;
  }

  return false;
};

const regexEmail = (email) => {
  const rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (rgx.test(email)) {
    return true;
  }

  return false;
};

const register = (name, email) => {
  const request = {
    url: "sampleurl.com/api/subscription",
    method: "POST",
    data: { name, email },
  };

  console.log(request);
};

export { regexName, regexEmail, register };
