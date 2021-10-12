
<script>
	import { _getRequests, _fetchProfiles, Profiles, _getBlock, SiteData } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'
  import marked from 'marked';

  let previews = _getRequests('Manuscript Feedback: Peer Preview')
  let allslugs = []

  previews.forEach( preview => {
    if(preview.fields['Slug'] && preview.fields['Slug'].length > 0)
      allslugs = [...allslugs, ...preview.fields['Slug']]
    })
    _fetchProfiles(allslugs)

</script>


<svelte:head>
	<!-- <title>{article.title}</title> -->
</svelte:head>


<div class='_section-page _margin-center _divider-top _divider-bottom'>
  <!-- <h2>previeworator Requests</h2> -->
  <div class='_margin-bottom'>
    <Notion loadingMsg='' classes={''} id={_getBlock('peerpreviews-cta')} api={process.env.NOTION_API}/>
  </div>
  <div class='_margin-bottom'>
    <a class='_button __action' href='/request'>Request a Peer Preview</a>
  </div>
  
  {#if previews && previews.length > 0}
    {#each previews as preview}
      <div class="_card _padding">
        <div>{@html marked(preview.fields['Public Request']||'')}</div>
        <div class="_flex">
          <!-- profile info -->
          <div class="_flex _flex-1 _align-vertically">
            {#if $Profiles[preview.fields['Slug']] && $Profiles[preview.fields['Slug']].fields['ProfileImage']}
              <div class="_margin-right "><img style="border-radius: 100%; min-width: 32px; min-height: 32px; background-size: cover;" width="48" height="48" src="{$Profiles[preview.fields['Slug']].fields['ProfileImage'][0].thumbnails.small.url}" alt="{preview.fields['Slug']}"/></div>
            {/if}
            <div class="_flex-1">{preview.fields['Name']}</div>
          </div>

          <!-- CTA -->
          <div>
            <a class="_button __action _margin-none-i" href="{preview.fields['reply_url']}">Respond to Request</a>
          </div>
        </div>
      </div>
    {/each}
  {/if}
      
</div>