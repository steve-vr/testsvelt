<script>
  import { onMount } from 'svelte';
  import Configuration from './config';

  import Header from './components/Header.svelte';
  import Modal from './components/modals/Modal.svelte';

  import Login from './components/modals/Login.svelte';
  import Singup from './components/modals/Singup.svelte';


  const conf = Configuration.getConfiguration();


  let isOpenModal = false;
  let typeModal;

  function openModal(modal) {
    isOpenModal = true;
    document.body.classList.add('modal-open');  
    typeModal = modal;//lgin-Singup-etc
  }

  function closeModal() {
    isOpenModal = false;
    document.body.classList.remove('modal-open');
  }


</script>
<!-- El Header tiene 2 modalse -->
<Header 
  on:exportOpenLogin={() =>openModal('login')}
  on:exportOpenSingup={() =>openModal('singup')}
/>





<Modal openModal={isOpenModal} closeModal={closeModal} classTypeModal={typeModal}>
  <!-- Contenido del modal de inicio de sesión -->
 {#if typeModal === 'login'}
    <Login /> <!-- Parametros: url de imagen y nombre de la pagina   -->
  {:else if typeModal === 'singup'}
    <Singup />
  {/if}
  

</Modal>

<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
<p>1</p>
