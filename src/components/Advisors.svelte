
<script>
	import { _getMembers, _fetchProfiles, Profiles } from "@/stores/sitedata"
  import Notion from '@yawnxyz/svelte-notion'

  let advisors = _getMembers('Advisor')
  let allslugs = []

  advisors.sort((a,b)=>a.fields['Name'] < b.fields['Name'] ? -1 : 1)
  advisors.forEach( advisor => {
    if(advisor.fields['Slug'] && advisor.fields['Slug'].length > 0)
      allslugs = [...allslugs, ...advisor.fields['Slug']]
  })
  _fetchProfiles(allslugs)

  // $: console.log('advisors:', advisors, allslugs)
  // $: console.log('Profiles', $Profiles)

</script>


{#if advisors && advisors.length > 0}
  <div class=' '>
    <h2>Advisors</h2>

    <div class="_card _padding">
      {#each advisors as advisor}
        <div class="_margin-bottom-2">
          <div class="_flex _flex-1 _align-vertically">
            {#if $Profiles[advisor.fields['Slug']] && $Profiles[advisor.fields['Slug']].fields['ProfileImage']}
              <div class="_margin-right "><img style="border-radius: 100%; min-width: 32px; min-height: 32px; background-size: cover;" width="64" height="64" src="{$Profiles[advisor.fields['Slug']].fields['ProfileImage'][0].thumbnails.large.url}" alt="{advisor.fields['Slug']}"/></div>
            {:else}
              <div class="_margin-right "><img style="border-radius: 100%; min-width: 32px; min-height: 32px; background-size: cover;" width="64" height="64" src="https://dl.airtable.com/.attachmentThumbnails/5f73211953262a41d993a9cd077a4ec9/370c6e95" alt="{advisor.fields['Slug']}"/></div>
            {/if}
            <div class="_flex-1">{advisor.fields['Name']}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>
{/if}

