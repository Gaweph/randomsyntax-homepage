<script>
  import PostTagsProjects from "./Post-Tags-Projects.svelte";

  export let title = "";
  export let slug = "";
  export let projects = "";
  export let tags = "";

  function getTags() {
    return tags === '' ? [] : tags.split(",")
  }
  function getProjects() {
    return projects === '' ? [] : projects.split(",")
  }
</script>

<style>
  .post-link-container {
    margin: 10px;
    padding: 10px;
    position: relative;
    /* background-color: #ccc; */
    /* width: 50%; */
    /* max-width: 40%; */
    /* display: inline-block; */
  }

  h2 {
    margin: 0px;
  }
  a {
    border: none;
  }
</style>

<div class="post-link-container">
  <h2 class="post-link-title">
    <a rel="prefetch" href={slug}>{title}</a>
  </h2>

  <PostTagsProjects tags={getTags()} projects={getProjects()} />

  <slot />
  
</div>
