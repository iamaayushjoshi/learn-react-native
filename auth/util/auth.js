import axios from "axios";

const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts";
const API_KEY = "AIzaSyAwMMUT1Gr9sGJ7-BnH-F2Msx00QqMCDmU";

async function authenticate(mode, email, password) {
  const url = `${BASE_URL}:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  const token = response.data.idToken;
  return token;
}

export async function createUser(email, password) {
  return authenticate("signUp", email, password);
}

export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}
