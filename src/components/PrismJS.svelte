<script>
  import { onMount } from "svelte";

  export let language;
  export let code;
  export let header;

  export let inline = false;

  onMount(() => {
    let script = document.createElement("script");
    script.src = "//cdnjs.cloudflare.com/ajax/libs/prism/1.5.1/prism.js";
    document.head.append(script);
    script.onload = function() {
      let langJS = false;
      let lang_script;
      let lang_module;

      // This switch statement, evaluates what language is being used, if one of a key language is being used, it will
      // load the proper Prisim support tool, like Python requires "prism-python.js" to modify the raw code so that
      // Prisim can render it properly.
      switch (language.toLowerCase()) {
        case "json":
          lang_module = "https://prismjs.com/components/prism-json.min.js";
          langJS = true;
          break;
        case "sql":
          lang_module = "https://prismjs.com/components/prism-sql.min.js";
          langJS = true;
          break;
        case "bash":
          lang_module = "https://prismjs.com/components/prism-bash.min.js";
          langJS = true;
          break;
        case "powershell":
          lang_module =
            "https://prismjs.com/components/prism-powershell.min.js";
          langJS = true;
          break;
        case "csharp":
          lang_module = "https://prismjs.com/components/prism-csharp.min.js";
          langJS = true;
          break;
      }

      if (langJS == true) {
        lang_script = document.createElement("script");
        lang_script.src = lang_module;
        lang_script.async = true;
        document.head.append(lang_script);

        lang_script.onload = () => {
          Prism.highlightAll();
        };
      } else {
        Prism.highlightAll();
      }
    };
  });

  import Icon from "$components/Icon.svelte";
  import { faCode as icon } from "@fortawesome/free-solid-svg-icons";
</script>

<style>
  pre {
    /* max-height: 400px; */
    overflow: auto;
  }

  h4 {
    margin-bottom: 0px;
  }
</style>

{#if inline}
    <code class="language-{language}">{code}</code>
{:else}
  <div>
    {#if header}
      <h4>
        <Icon {icon} />
        {header}
      </h4>
    {/if}

  
    <pre>
      <code class="language-{language}">{code}</code>
    </pre>  
  </div>
{/if}
