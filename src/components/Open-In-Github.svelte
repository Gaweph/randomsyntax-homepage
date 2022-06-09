<script>
    import { faGithub as faGithub } from "@fortawesome/free-brands-svg-icons";
	import Icon from "$components/Icon.svelte";

    export let url = '';

</script>

<style lang="scss">
    $github-color: #191919;
    .btn-github:hover,
    .btn-github:focus {
    color: $github-color;
    }   
    .btn-github {
        float: right;
        position: absolute;
        top: 10px;
        right: 10px;
    }
    a, a:hover, a:focus {
        border: none;
    }
</style>

<a
    href="{url}"
    class="btn-github"
    target="_blank"
    rel="external">
    <Icon class="large" icon={faGithub} />
    <span>Open in Github</span>
</a>