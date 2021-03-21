<script>
  export let tag;
  import Icon from "$components/Icon.svelte";
  import { faTag as icon } from "@fortawesome/free-solid-svg-icons";
</script>

<style>
  .tag {
    /* border-radius: 25px; */
    border: none;
    padding: 5px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 2px;
  }
  .tag {
    font-size: small;
  }
</style>

<div class="tag">
  <Icon {icon} />
  {tag}
</div>
