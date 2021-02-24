<script>
  import { onMount } from "svelte";
  import Prism from "./PrismJS.svelte";

  export let url;
  export let language;
  let code;
  onMount(async function() {
    let response = await fetch(url);
    let text = await response.text();
    code = text;
  });
</script>

<Prism {language} {code} />
