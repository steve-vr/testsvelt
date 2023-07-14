<script>
    import Configuration from '../config';
    import { createEventDispatcher } from 'svelte';
      
    const conf = Configuration.getConfiguration();

    let isToggleOn = false;

    const dispatch = createEventDispatcher();

    function openLogin() {
        dispatch('exportOpenLogin');
    }
    function openSingup() {
        dispatch('exportOpenSingup');
    }

    function toggleMenuBar() {
        isToggleOn = !isToggleOn;
    }
</script>


<header class="header">
    <button class="btn header__menu" on:click={toggleMenuBar} class:is-open={isToggleOn}><span></span></button>
    <img class="header__logo" src="{conf.URL_IMG}/logo4.png" alt="">
    <div></div>
    <button class="btn login" on:click={openLogin}>Acceso</button>
    <button class="btn singup" on:click={openSingup}>Registro</button>
     <!-- Aqui agegaria los campos Pendientes que faltan agregar en caso ya este logueado -->
</header>