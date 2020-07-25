const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const correctEmail = (text: string) =>
  emailRegexp.test(text.toLowerCase())
    ? { isValid: true }
    : { isValid: false, message: "Not a valid email" };

export { correctEmail };
