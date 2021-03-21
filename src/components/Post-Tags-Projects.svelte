<script>
  import Project from "./Project.svelte";
  import Tag from "./Tag.svelte";
  export let tags = [];
  export let projects = [];
</script>

<style>
  a,
  a:hover,
  a:focus {
    border: none;
  }
</style>

<div>
  {#each projects as project}
    <a rel="prefetch" href="/blog/projects/{project}/">
      <Project {project} />
    </a>
  {/each}
  {#if tags.length > 0 && projects.length > 0}
    <!-- <br /> -->
  {/if}
  {#each tags as tag}
    <a rel="prefetch" href="/blog/tags/{tag}/">
      <Tag {tag} />
    </a>
  {/each}
</div>
