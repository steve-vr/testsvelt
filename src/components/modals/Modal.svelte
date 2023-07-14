<script>
    export let openModal = false;
    export let closeModal;
    export let classTypeModal;
    //export let modalType = 'login';
</script>
  
{#if openModal}
  <div class="modal {classTypeModal}" class:show={openModal}>
    <div class="modal-dialog centered">
      <div>
      </div>
      <div class="modal-content">
          <div class="modal-header">
              <div></div>
              {#if classTypeModal === 'singup'}
                <div>Regístrate aquí</div>
              {/if}
              <button class="btn close"  on:click={closeModal}></button>
          </div>
          <slot></slot> <!-- > Contenido del modal --> 
      </div>
    </div>
  </div>
{/if}