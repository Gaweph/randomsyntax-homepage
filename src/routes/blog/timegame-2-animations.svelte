<script>
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import Callout from "$components/Callout.svelte";
  import Vimeo from "$components/Vimeo.svelte";
  import Link from "$components/Link.svelte";

  const title = "Time Game 2 - Character Animation";
  const date = "2016-10-15 21:12:00";
  const tags = ["software", "unity3d"];
  const projects = ["Time Travel Game"];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  Animations have been added to the player and ghost players
  <Vimeo id="187484099" />

  <Callout title="Explanation Coming Soon">
    I will outline how this was done (Specifically the ghost images) in a future
    post.
  </Callout>

  <Callout title="Update">
    A more in depth explanation of this can be found on the
    <Link href="/blog/unity3d-animation-from-transform">
      Mecanim Animation From Transform
    </Link>
    post
  </Callout>
</PostContents>
