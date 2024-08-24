<script lang="ts">
  import "../../app.css";

  let email: string = "";
  let password: string = "";

  async function login() {

  }
</script>

<div class="bg-app-bg min-h-screen grid items-center justify-center">
  <div>
    <div class="bg-log-tab grid items-center justify-center p-10 rounded-lg w-60">
      <input bind:value={email} class="bg-login-button rounded-lg text-white outline-none p-3 hover:border-2 hover:border-slate-400 hover:transition-all" placeholder="Email" type="text" required />
      <input bind:value={password} class="bg-login-button rounded-lg text-white outline-none p-3 hover:border-2 hover:border-slate-400 hover:transition-all mt-5" placeholder="Password" type="password" required />
    </div>
    <div class="grid mt-10 justify-center">
      <button class="p-2 w-40 bg-login-button text-white rounded-lg hover:bg-signup-button">
        Login
      </button>
      <button on:click={login} class="text-sm text-white hover:text-blue-200">
        Forgot password?
      </button>
    </div>
  </div>
</div>
