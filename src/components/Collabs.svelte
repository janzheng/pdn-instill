
<script>
	import { _getCollabs, _fetchProfiles, Profiles } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

  let collabs = _getCollabs()

  collabs.forEach( collab => {
    _fetchProfiles(collab.fields['Slug'])
  })

</script>


<svelte:head>
	<!-- <title>{article.title}</title> -->
</svelte:head>


{#if collabs && collabs.length > 0}
  <div class='_section-page _margin-center _divider-top _divider-bottom'>
    <h2>Collaborator Requests</h2>

    {#each collabs as collab}
      <div class="_card _padding">
        <div><p>{collab.fields['Public Request']}</p></div>
        <div class="_flex">
          <!-- profile info -->
          <div class="_flex _flex-1 _align-vertically">
            {#if $Profiles[collab.fields['Slug']] && $Profiles[collab.fields['Slug']].fields['ProfileImage']}
              <div class="_margin-right "><img style="border-radius: 100%; min-width: 32px; min-height: 32px; background-size: cover;" width="32" height="32" src="{$Profiles[collab.fields['Slug']].fields['ProfileImage'][0].thumbnails.small.url}" alt="{collab.fields['Slug']}"/></div>
            {/if}
            <div class="_flex-1">{collab.fields['Name']}</div>
          </div>

          <!-- CTA -->
          <div>
            <a class="_button __action _margin-none-i" href="{collab.fields['reply_url']}">Respond to Request</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
{/if}
