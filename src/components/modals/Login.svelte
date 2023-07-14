<script>
  import Configuration from '../../config';
  const conf = Configuration.getConfiguration();
  let password = '';
  let showPassword = false;

  function dataPassword(event) {
    password = event.target.value;
  }

  function togglePasswordHide() {
    showPassword = !showPassword;
  }

  function validateUserLogin(){
    console.log("HOla");
  }
</script>
<div class="modal-body">
  <div class="login__title">Bienvenido a</div>
    <img class="login__logo" src="{conf.URL_IMG}/logo4.png" alt="">
    <div class="login__form">
        <!--div class="login__title">Bienvenido a {conf.PAGE}</div-->
        <div> </div>
        <input type="text" class="ipt" placeholder="Usuario">
        <div class="login__ipt--pass">
            <input type={showPassword ? 'text' : 'password'} value={password} on:input={dataPassword} class="ipt" placeholder="Contraseña">
            <button on:click={togglePasswordHide} class="btn {showPassword ? 'no-eye' : 'eye'}"></button>
        </div>
        <button class="btn singup" on:click={validateUserLogin}>Ingresar</button>
        <div class="link">¿Olvidaste tu contraseña?</div>
    </div>
</div>