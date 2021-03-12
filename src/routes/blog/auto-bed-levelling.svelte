<script>
  import Gallery from "$components/Gallery.svelte";
  import Callout from "$components/Callout.svelte";
  import Vimeo from "$components/Vimeo.svelte";
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import LinkExternal from "$components/Link-External.svelte";

  const title = "3D Printer 4 - Auto Bed Levelling";
  const date = "2014-06-19 13:43:03";
  const tags = ["hardware"];
  const projects = ["3D-Printer"];
  const photos_auto_leveling = [
    "/content/blog/images/auto-bed-levelling/fsr_a.jpg",
    "/content/blog/images/auto-bed-levelling/fsr_b.jpg",
    "/content/blog/images/auto-bed-levelling/electronics_a.jpg",
    "/content/blog/images/auto-bed-levelling/electronics_b.jpg"
  ];
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  Video of the G29 (Auto level) command.
  <Vimeo id="98630132" />
  This process involves using 3 Force Sense Resistors (FSR's) in order to use
  the actual print head as the z-probe.
  <Callout>
    Code can be found at
    <LinkExternal href="https://github.com/jcrocholl/Marlin/tree/fsr">
      Johan's (jcrocholl) Github branch
    </LinkExternal>
    <br />
  </Callout>
  Here are some images of how the sensors are attached to the printer (under
  the bed):
  <Gallery images={photos_auto_leveling} />
</PostContents>
