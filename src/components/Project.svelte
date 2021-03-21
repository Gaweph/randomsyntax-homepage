<script>
  export let project;

  import Icon from "$components/Icon.svelte";
  import { faStar as icon } from "@fortawesome/free-solid-svg-icons";
</script>

<style>
  .project {
    display: inline-block;
    /* border-radius: 25px; */
    border: none;
    padding: 5px;
    text-decoration: none;
    font-size: 16px;
    margin: 2px;
  }
  .project {
    font-size: small;
  }
</style>

<div class="project">
  <Icon {icon} />
  {project}
</div>
