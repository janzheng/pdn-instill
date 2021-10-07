




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
  import ContentBlock from '@/components/ContentBlock.svelte'

  // export let segment
  let _footer = _content('_footer') || ''
  let _terms = _content('_terms') || ''

</script>









<style type="text/scss">



</style>




