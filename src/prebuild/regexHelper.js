export const TryGetFirstRegexMatch = (str, ...regex) => {
  for (var r of regex) {
    var match = str.match(r);
    if (match) {
      return match[1];
    }
  }

  return "";
};
