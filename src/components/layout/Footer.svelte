


<div class="Footer-sponsors _section-page _margin-center _padding-top-2 _padding-bottom-2">
  <Notion loadingMsg='' classes={'_padding-top-2'} id={_getBlock('footer')} api={process.env.NOTION_API}/>
</div>

<footer class="Footer __antialiased __content-footer _md-pfix">
  <div class="Footer-content _section-page _margin-center _padding-top-2 _padding-bottom-2">

    {@html marked(_footer)}
    <!-- <div class="_divider-top terms">{@html marked(_terms)}</div> -->
  </div>
</footer>







<script>
  import Cytosis from 'cytosis'
  import marked from 'marked'

	import { _content } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'
  // import Notion from '../../../../../../svelte-notion/src/Notion.svelte'

	import { _getBlock } from "@/stores/sitedata"

  // export let segment
  let _footer = _content('_footer') || ''
  let _terms = _content('_terms') || ''


</script>









<style type="text/scss">

:global(#_1cd9cfe3-9e13-4534-9c4a-6274d68f2fe1) {
  width: 200px !important;
}

:global(#_ae9e2f0c-8d81-47ef-93f3-7876d107f437) {
  width: 100px !important;
}

:global(#_ade799d9-4e12-451d-92a4-bf641f2e6f82) {
  width: 148px !important;
}

</style>




