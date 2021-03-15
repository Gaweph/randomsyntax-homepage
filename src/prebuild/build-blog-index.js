// import fs from "fs";
// import path from "path";
import { GetAllPosts } from "./postScrapper.js";
import path from 'path';
import fs from "fs";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var postsDir = __dirname + "/../routes/blog";
var posts = GetAllPosts(postsDir);

// console.log(postsDir);
// console.log(posts);

//json
var jsonFilePath = __dirname + "/../../static/blog.json"
var jsonContents = JSON.stringify(posts);
fs.writeFileSync(jsonFilePath, jsonContents,{encoding:'utf8',flag:'w'})

// blog posts component
var componentFilePath = __dirname + "/../components/Blog-Posts.svelte";
var postsContents = posts.map(x=> `
<PostLink title="${x.title}" slug="${x.slug}" projects="${x.projects}" tags="${x.tags}" />
`).join('');

var componentContents = `
<script>
import PostLink from './Post-Link.svelte';
</script>
${postsContents}
`
fs.writeFileSync(componentFilePath, componentContents,{encoding:'utf8',flag:'w'})

