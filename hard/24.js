const database = ["erick_14", "pam_ls2", "VICTOR_99A"];

function validateUser(username) {
  if (username.length < 4 || username.length > 32) {
    return false;
  }

  if (username.match(/\W|^[0-9]|^_|_$/)) {
    return false;
  }

  if (
    !(
      username.match(/[A-Za-z]/) &&
      username.match(/[0-9]/) &&
      username.match(/_/)
    )
  ) {
    return false;
  }

  const usernameAlreadyExists = database.indexOf(username) !== -1;

  if (usernameAlreadyExists) {
    return false;
  }

  return true;
}
