

<!-- <Separator /> -->
<div class="Home _divider-top _divider-bottom">

  <div class="_section-page _margin-center">
    <Notion loadingMsg='' classes={''} id={_getBlock('intro-v1')} api={process.env.NOTION_API}/>
  </div>

  




  <Blog></Blog>
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
	import { _content, _contents, NotionData, _getBlock } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

  import Blog from '../components/Blog.svelte'
  // import Notion from '../../../../../svelte-notion/src/Notion.svelte'

	import { _getPost } from "@/stores/sitedata"

  export let collectionData

  $: if(collectionData) {
    console.log('collection data results:::', collectionData)
  }
</script>


<style type="text/scss" global>

  figure#_02976238-6978-4602-8957-b8aed0999c71 {
    width: 105px !important;
  }

  figure#_5af4491b-9df6-49a4-9a78-24077bba0dda {
    width: 350px !important
  }
  

  figure#_7c933c95-52b6-44bd-a01e-12b9c1c66aa7 {
    width: 350px !important
  }
  
</style>