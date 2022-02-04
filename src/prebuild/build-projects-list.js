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

export const BuildProjects = async () => {

    const githubUserName = "Gaweph";
    try {
        const response = await axios.get(`https://api.github.com/users/${githubUserName}/repos`)
        const filtered = response.data.filter(x => x.topics.indexOf('project-tag') != -1);

        const converter = new showdown.Converter();
        // console.log(filtered.length);
        let projects = [];
        for(var i = 0; i < filtered.length; i++) 
        {
            const item = filtered[i];

            const readMeUrl = `https://raw.githubusercontent.com/${githubUserName}/${item.name}/master/README.md`;

            let readme = '';
            try {
                const readMeResponse = await axios.get(readMeUrl);
                // console.log(readMeResponse.data + "");
                const md = readMeResponse.data + "";
                // console.log("MD", md);
                // readMeMarkDown = md;//.toString();
                readme = converter.makeHtml(md);
                // console.log("AAAA", readme, "BBBB");

                // <pre><code class="typescript language-typescript"></code>
                readme = readme.replace(new RegExp('<pre><code( class=".*")?', 'g'), '<Prism language="javascript" code={`')
                // console.log(readme.indexOf('</code></pre>'));
                readme = readme.replace(new RegExp('</code></pre>', 'g'), '`} />')
                // console.log(readme.indexOf('</code></pre>'));
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
</script>

<PostTop title="${item.name}" tags=${item.topics.join(',')} />
<PostContents>
    <PostSection>
${readme}
    </PostSection>
</PostContents>
`;

            var projectFilePath = __dirname + `/../routes/Projects/${item.name}.svelte`;
            fs.writeFileSync(projectFilePath, projectContent,{encoding:'utf8',flag:'w'});

            projects.push({id: item.id, name: item.name, readme: readme});
        }
            
        var indexFileContents = projects.map(x=>x.name).toString();
        var indexFilePath = __dirname + "/../routes/Projects/index.svelte";
        fs.writeFileSync(indexFilePath, indexFileContents,{encoding:'utf8',flag:'w'});
        console.log("Created", indexFilePath);
    }
    catch(ex)
    {
        console.error("Error getting Gaweph Repos");
        console.error(ex);
    }
};