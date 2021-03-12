<script context="module">
  export async function preload({ params, query }) {
    var url =
      "https://gist.githubusercontent.com/Gaweph/63d48a9c43e1b256ca8c8a9a7717fed7/raw/37e5276e3cbe53162a49b27706df5142ac92fff6/conky-config";
    let response = await this.fetch(url);
    let text = await response.text();
    let gistContents = text;
    return { gistContents };
  }
</script>

<script>
  import Gallery from "$components/Gallery.svelte";
  import Prism from "$components/PrismJS.svelte";
  import PostTop from "$components/Post-Top.svelte";
  import PostContents from "$components/Post-Contents.svelte";
  import PostSection from "$components/Post-Section.svelte";
  import Callout from "$components/Callout.svelte";
  import LinkExternal from "$components/Link-External.svelte";

  const title = "Conky Config";
  const tags = ["config", "conky"];
  const projects = [];
  const date = "2014-05-05 14:44:08";

  export let gistContents = "XXX";
</script>

<PostTop {title} {tags} {projects} />
<PostContents>
  <PostSection>

    <p>
      I have had a couple of queries regarding my conky config that can be seen
      on my new arch desktop screenshot:
    </p>

    <Gallery images={['/content/blog/images/conky-config/Conky_Config.png']} />

    <p>
      In order to recreate this config you will need the
      <LinkExternal href="https://aur.archlinux.org/packages/conky-colors/">
        Conky-Colors
      </LinkExternal>
      ,
      <LinkExternal href="https://aur.archlinux.org/packages/conky-nvidia/">
        conky-nvidia
      </LinkExternal>
      and
      <LinkExternal href="https://www.archlinux.org/packages/?name=lm_sensors">
        lm_sensors
      </LinkExternal>
      packages
    </p>
    Here is the conky config file (feel free to copy as needed):
    <Prism language="Bash" code={gistContents} />
    <p>
      <strong>wlp4s0</strong>
      and
      <strong>enp3s0f0</strong>
      are the network device IDS, so you will need to substitute your own. If
      you would like to modify the icons then they can be found in the
      <LinkExternal
        href="https://github.com/helmuthdu/conky_colors/tree/master/fonts/conkycolors">
        conky-colors TTF files
      </LinkExternal>
      on helmuthdu's github repository
    </p>
    <Callout title="PLEASE NOTE:">
      I'm sure there's a better way of getting the CPU temps. Please let me know
      if this is the case. I'm not sure that the Ethernet if else statements are
      working correctly.
    </Callout>

    <Callout title="FURTHER READING:">
      There is some
      <LinkExternal
        href="http://helmuthdu.deviantart.com/art/CONKY-COLORS-244793180">
        Lovely conky-colors deviant-art by helmuthdu
      </LinkExternal>
      . Further information on this project cna be found at
      <LinkExternal href="https://github.com/helmuthdu/conky_colors">
        helmuthdu's github conky-colors repository
      </LinkExternal>

    </Callout>
  </PostSection>
</PostContents>
