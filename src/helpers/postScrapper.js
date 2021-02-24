import fs from "fs";
import path from "path";
import { TryGetFirstRegexMatch } from "./regexHelper";

export const GetAllPosts = (dir) => {
  var posts = fs
    .readdirSync(dir)
    .filter(function (file) {
      var isDirectory = fs.statSync(path.join(dir + "/" + file)).isDirectory();

      var okFile =
        path.extname(file).toLowerCase() === ".svelte" &&
        file.toLowerCase() !== "index.svelte" &&
        file.toLowerCase() !== "[slug].svelte" &&
        !file.startsWith("_");

      return okFile && !isDirectory;
    })
    .map((x) => {
      var file = x;
      // var isDirectory = fs.statSync(path.join(dir + "/" + file)).isDirectory();
      // if (isDirectory) {
      //   file = file + "/index.svelte";
      // }
      var contents = fs.readFileSync(path.join(dir + "/" + file), "utf8");

      // var titleMetaData = "<!--(?: *)Post-Title:(?: *)(.*)(?: *)-->";
      // var titleTag = "<h1>(?: *)(.*)(?: *)</h1>";

      var title = TryGetFirstRegexMatch(
        contents,
        "const title = ['\"](.*)['\"];"
      );
      var tags = TryGetFirstRegexMatch(contents, "const tags = (.*);");
      var projects = TryGetFirstRegexMatch(contents, "const projects = (.*);");
      var date = TryGetFirstRegexMatch(
        contents,
        "const date = ['\"](.*)['\"];"
      );

      return {
        title: title,
        slug: x.replace(".svelte", ""),
        tags: JSON.parse(tags),
        projects: JSON.parse(projects),
        date: new Date(date),
      };
    });

  return posts;
};
