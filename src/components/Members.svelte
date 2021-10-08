
<script>
	import { _getMembers, _fetchProfiles, Profiles } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

  let items = _getMembers('Member')
  let allslugs = []

  items.sort((a,b)=>a.fields['Name'] < b.fields['Name'] ? -1 : 1)
  items.forEach( item => {
    if(item.fields['Slug'] && item.fields['Slug'].length > 0)
      allslugs = [...allslugs, ...item.fields['Slug']]
  })
  _fetchProfiles(allslugs)


  $: console.log('items:', items, allslugs)
  $: console.log('Profiles', $Profiles)
</script>


{#if items && items.length > 0}
  <div class=''>
    <h2>Members</h2>

    <div class="_card _padding">
      {#each items as item}
        <div class="_margin-bottom">
          <div class="_flex _flex-1 _align-vertically">
            {#if $Profiles[item.fields['Slug']] && $Profiles[item.fields['Slug']].fields['ProfileImage']}
              <div class="_margin-right "><img style="border-radius: 100%; min-width: 32px; min-height: 32px; background-size: cover;" width="48" height="48" src="{$Profiles[item.fields['Slug']].fields['ProfileImage'][0].thumbnails.large.url}" alt="{item.fields['Slug']}"/></div>
            {:else}
              <div class="_margin-right "><img style="border-radius: 100%; min-width: 32px; min-height: 32px; background-size: cover;" width="48" height="48" src="https://dl.airtable.com/.attachmentThumbnails/5f73211953262a41d993a9cd077a4ec9/370c6e95" alt="{item.fields['Slug']}"/></div>
            {/if}
            <div class="_flex-1">{item.fields['Name']}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

