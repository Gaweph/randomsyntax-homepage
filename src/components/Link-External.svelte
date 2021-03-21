<script>
  import Icon from "$components/Icon.svelte";
  import { faExternalLinkAlt as icon } from "@fortawesome/free-solid-svg-icons";

  export let href;
</script>

<style>
  .icon {
    font-size: small;
  }
</style>

<a {href} target="_blank" rel="external">
  <span>
    <slot>{href}</slot>
    <span class="icon">
      <Icon {icon} />
    </span>
  </span>
</a>
