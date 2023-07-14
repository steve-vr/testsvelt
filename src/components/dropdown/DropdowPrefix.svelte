<script>
    import { onMount } from 'svelte';
    import Configuration from '../../config';

    const conf = Configuration.getConfiguration();

    let options = [
      {prefix:"+57",country:"col"},
      {prefix:"+58",country:"ven"}
    ];

    let selectedPrefix = options[1].prefix;
    let selectedCountry = options[1].country;
    let isDropdownOpen = false;
    
    function toggleDropdown() {
      isDropdownOpen = !isDropdownOpen;
    }
    
    function selectOption(option,option2) {
      selectedPrefix = option;
      selectedCountry = option2
      isDropdownOpen = false;
    }
    
    onMount(() => {
      function handleClickOutside(event) {
        if (!event.target.closest('.dropdown')) {
          isDropdownOpen = false;
        }
      }
      
      document.addEventListener('click', handleClickOutside);
      
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    });
  </script>
  
  <div class="dropdown">
    <button class="slc singup__prefix" on:click={toggleDropdown}>
        <img src="{conf.URL_IMG_GENERIC}/flags/{selectedCountry}.png" alt="{selectedCountry}-country">{selectedPrefix}
    </button>
    {#if isDropdownOpen}
      <div class="dropdown-menu">
          {#each options as option}
                <button class="btn singup__prefix" on:click={() => selectOption(option.prefix, option.country)}>
                    <img src="{conf.URL_IMG_GENERIC}/flags/{option.country}.png" alt="{selectedCountry}-country">
                    {option.prefix}
                  </button>
          {/each}
      </div>
    {/if}
  </div>


  <style>
      .dropdown > *{
          color: #000;
      }
      .btn{
          text-align: left;
          border-radius: 0;
      }
  </style>
  