export function setQueryParamWithHistory(key, value) {
  if ("URLSearchParams" in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.set("full-screen", "1");
    history.pushState(
      null,
      "",
      window.location.pathname + "?" + searchParams.toString()
    );
  }
}

export function deleteQueryParam(key) {
  if ("URLSearchParams" in window) {
    var searchParams = new URLSearchParams(window.location.search);
    searchParams.delete(key);
    history.pushState(
      null,
      "",
      window.location.pathname + "?" + searchParams.toString()
    );
  }
}

export function getQueryParam(key) {
  if ("URLSearchParams" in window) {
    var searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(key);
  }
  return "";
}
