import { call } from "./api.service";

export async function login(email, password) {
  return call({
    uri: "login",
    method: "POST",
    body: { email: email, password: password },
  });
}

export async function registro({ nombre, email, password }) {
  return call({
      uri: "usuarios",
      method: "POST",
      body: { nombre, email, password },
  });
}

