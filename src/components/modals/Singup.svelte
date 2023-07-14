<script>
  import Configuration from '../../config';
  const conf = Configuration.getConfiguration();

  import DropdowPrefix from '../dropdown/DropdowPrefix.svelte';


</script>

<div class="modal-body">
  <input type="text" class="ipt" placeholder="Nombres y apellidos" autocomplete="off">
  <div class="singup__form--date">
      <p>Fecha de nacimiento</p>
      <div class="singup__date">
          <select class="slc">
              <option value="0" selected disabled>dd</option>
          </select>
          <select class="slc" >
              <option value="0" selected disabled>mm</option>
          </select>
          <select  class="slc" >
              <option value="0" selected disabled>yyyy</option> 
          </select>
      </div>
  </div>
  <input type="email" class="ipt" placeholder="Correo electrónico" autocomplete="off">
  <input type="text" class="ipt" placeholder="Nombre de usuario" autocomplete="off">
  <input type="password" class="ipt" placeholder="Contraseña" autocomplete="off">
  <select class="slc">
      <option value="" selected disabled>Seleccionar moneda</option>
      <option value="">Peso colombiano</option>
      <option value="">Dólar venezuela</option>
  </select>
  <div class="singup__phone">
        <DropdowPrefix></DropdowPrefix>
        <input type="number" class="ipt" min="0" max="999999999" placeholder="Teléfono" autocomplete="off">
  </div>
  <div class="singup__sms">
      <button class="btn validsms">Generar código SMS</button>
      <input type="number" class="ipt" min="0" max="99999" placeholder="Código" autocomplete="off">
  </div>
  <div class="singup__conditions">   
      <input type="checkbox" id="chk_conditions"/>
      <label for="chk_conditions"></label> 
      <div>Para convertirme en cliente, acepto las <b><a class="link" href="#">Políticas de Privacidad</a></b> de {conf.PAGE}.</div>
  </div>
  <div></div>
  <button class="btn singup">Registrar</button>
</div>