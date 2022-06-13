// import { GetAllPosts } from "./postScrapper.js";
import path from 'path';
import fs from "fs";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// import require from "require";
import axios from "axios";
// var request = require('request');
import showdown from 'showdown';

let replaceAll = function(str, find, replace)
{
    return str.replace(new RegExp(find, 'g'), replace);
};

let ensureDirectoryExistence = function (filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};
export const BuildProjects = async () => {

    const githubUserName = "Gaweph";
    const projectTag = 'project-tag';
    try {
        const response = await axios.get(`https://api.github.com/users/${githubUserName}/repos`)
        const projects = response.data.filter(x => x.topics.indexOf(projectTag) != -1);

        console.log("projects", projects);
        const converter = new showdown.Converter();
        
        for(var i = 0; i < projects.length; i++) 
        {
            const item = projects[i];
            const readMeUrl = `https://raw.githubusercontent.com/${githubUserName}/${item.name}/master/README.md`;

            let readme = '';
            try {
                const readMeResponse = await axios.get(readMeUrl);
                const md = readMeResponse.data + "";
                readme = converter.makeHtml(md);

                readme = replaceAll(readme, "&gt;", ">");
                readme = replaceAll(readme, "&lt;", "<");
                readme = replaceAll(readme, '<pre><code( class=".*")?>', '<Prism language="csharp" code={`')
                readme = replaceAll(readme, '</code></pre>', '`} />')
            }
            catch(ex) {
                // couldn't get readme
                console.error(ex);
            }
            
            // const description = item.description
            const projectContent = `
<script>
    import PostTop from "$components/Post-Top.svelte";
    import PostContents from "$components/Post-Contents.svelte";
    import Prism from "$components/PrismJS.svelte";
    import PostSection from "$components/Post-Section.svelte";
    import OpenInGithub from "$components/Open-In-Github.svelte";

    const title = "${item.name}";
    const tags = ${JSON.stringify(item.topics.filter(x => x != projectTag))};
    const projects = [];
    
    const date = '${new Date(item.created_at)}'

</script>

<!-- <PostTop {title} {tags} {projects} />-->

<PostContents>
    <OpenInGithub url='${item.html_url}' />
    <PostSection>
${readme}
    </PostSection>
</PostContents>
`;

            var projectFilePath = __dirname + `/../routes/projects/${item.name}.svelte`;
            ensureDirectoryExistence(projectFilePath);
            fs.writeFileSync(projectFilePath, projectContent,{encoding:'utf8',flag:'w'});

            console.log("Created", projectFilePath);
        }
            
        var projectTitles = projects.map(x=>
`
<PostLink title="${x.name}" slug="/projects/${x.name}" tags="${x.topics.filter(x => x != projectTag).join(',')}">
${x.description}
</PostLink>
`);
const indexFileContents = `
<script>
    import PostLink from '$components/Post-Link.svelte';
    import OpenInGithub from "$components/Open-In-Github.svelte";
</script>

${projectTitles.join('')}
`;
        var indexFilePath = __dirname + "/../routes/projects/index.svelte";
        fs.writeFileSync(indexFilePath, indexFileContents,{encoding:'utf8',flag:'w'});
        console.log("Created", indexFilePath);
    }
    catch(ex)
    {
        console.error("Error getting Gaweph Repos");
        console.error(ex);
    }
};
