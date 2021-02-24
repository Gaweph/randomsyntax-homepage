<script>
  import PostTagsProjects from "./Post-Tags-Projects.svelte";
  import Title from "./Title.svelte";

  import { fly } from "svelte/transition";

  export let title = "XX";
  export let tags;
  export let projects;
</script>

<style>
  div {
    margin: 10px;
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<div transition:fly={{ x: -200, duration: 400 }}>
  <Title>{title}</Title>
  <PostTagsProjects {tags} {projects} />
</div>
