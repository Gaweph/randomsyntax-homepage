<script>
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import PostSection from "../components/Post-Section.svelte";
  import LinkExternal from "../components/Link-External.svelte";
  import Link from "../components/Link.svelte";
  import P5Canvas from "../components/P5Canvas.svelte";
  import FullScreen from "../components/Full-Screen.svelte";

  const title = "Marching Squares Linear Interpolation";
  const date = "2019-07-25";
  const tags = ["p5"];
  const projects = [];

  import marchingCubes from "./marching-cubes.js";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  <PostSection>
    This is an improvement over the
    <Link href="marching-squares">original marching squares demo</Link>
    . It includes Linear interpolation which produces a smoother mroe fluid
    movement
    <FullScreen>
      <P5Canvas id="marchingCubes" sketch={marchingCubes} />
    </FullScreen>
    <br />
    <LinkExternal
      href="https://github.com/Gaweph/p5-live-examples/tree/master/Random/MarchingCubes">
      Source
    </LinkExternal>
  </PostSection>

</PostContents>
