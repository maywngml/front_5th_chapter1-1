export function login(username: string) {
  localStorage.setItem(
    "user",
    JSON.stringify({ username, email: "", bio: "" }),
  );
}

export function logout() {
  localStorage.removeItem("user");
}
