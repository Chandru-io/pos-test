export const hasAccess = (obj, path) => {
  return path.split(".").reduce((current, key) => {
    if (current && key in current) {
      return current[key];
    }
    return false;
  }, obj);
};
