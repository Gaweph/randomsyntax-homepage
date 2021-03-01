<script>
  import Gallery from "../components/Gallery.svelte";
  import PostTop from "../components/Post-Top.svelte";
  import PostContents from "../components/Post-Contents.svelte";
  import PostSection from "../components/Post-Section.svelte";

  const title = "3D Printer 5 - Prints";
  const date = "2014-08-07 14:35:54";
  const tags = ["hardware"];
  const projects = ["3D-Printer"];
  const photos_cube = [
    "/blog/content/images/3d-printing/cube_a.jpg",
    "/blog/content/images/3d-printing/cube_b.jpg",
    "/blog/content/images/3d-printing/cube_c.jpg"
  ];
  const photos_elephant = [
    "/blog/content/images/3d-printing/elephant_a.jpg",
    "/blog/content/images/3d-printing/elephant_b.jpg"
  ];
  const photos_octopus = [
    "/blog/content/images/3d-printing/octopus_a.jpg",
    "/blog/content/images/3d-printing/octopus_b.jpg",
    "/blog/content/images/3d-printing/octopus_c.jpg"
  ];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  I Haven't had much spare time to post any updates lately. Here are some prints
  that have been done with my printer
  <PostSection title="Calibration Cube.">
    As you can see the auto leveling has now stopped my prints from leaning to
    one side:
    <Gallery images={photos_cube} />
  </PostSection>

  <PostSection title=" Elephant.">
    <Gallery images={photos_elephant} />
  </PostSection>

  <PostSection title="Octopus">
    <Gallery images={photos_octopus} />
  </PostSection>
</PostContents>
