

<!-- <Separator /> -->

<div class="Home">

  <div class="_section-page _margin-center">
    <!-- page -->
    <!-- <Notion loadingMsg='' classes={''} id={'0804e9fadab8447dbe78d402d12e646a'} api={process.env.NOTION_API}/> -->

    <!-- test page -->
    <Notion loadingMsg='' classes={''} id={'8896881e7ff54319a8b59bf2c73080cd'} api={process.env.NOTION_API}/>

    <!-- controller table -->
    <Notion loadingMsg='' classes={''} id={'74612f1ea711417a93966963376847b4'} type='table' api={process.env.NOTION_API}/>
  </div>

  

  <!-- https://phagedirectory.notion.site/Copy-of-MRFF-Site-v1-Intro-54534d55bf384c11aa1f1e0a83c11c58 -->

  
  <!-- <div class="_section-page _padding-top-2 _margin-center _margin-bottom-2">
    <div class=" _margin-center">
      <ContentBlock id="intro" name="_body" classes="_section-page _margin-center _divider-top _divider-bottom" />
    </div>
  </div> -->

  <!-- {#if process.browser}
    <div class="_section-page _margin-center">
      <Notion loadingMsg='' classes={''} id={'7bfd7ca39fce47cea724b7beb09ab33f'} api={process.env.NOTION_API}/>
    </div>
  {/if} -->
</div>









<script>

  import marked from 'marked';
	import { _content, _contents } from "@/stores/sitedata"
  // import Notion from '@yawnxyz/svelte-notion'
  import Notion from '../../../../../svelte-notion/src/Notion.svelte'

  import Separator from '../components/Separator.svelte'

  import ContentBlock from '@/components/ContentBlock.svelte'

  let showBetty = false
</script>