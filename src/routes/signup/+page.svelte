<script lang="ts">
    import "../../app.css";

    let username = "";
    let email: string = "";
    let password: string = "";

    async function signup() {

    }
</script>

<div class="bg-app-bg min-h-screen grid items-center justify-center">
    <div>
    <div class="grid items-center justify-center p-5 bg-log-tab rounded-md">
        <input bind:value={username} type="text" class="rounded-md my-2 p-2 outline-none bg-login-button hover:border hover:border-slate-200" placeholder="Username">
        <input bind:value={email} type="text" class="rounded-md my-2 p-2 outline-none bg-login-button hover:border hover:border-slate-200" placeholder="Email">
        <input bind:value={password} type="text" class="rounded-md my-2 p-2 outline-none bg-login-button hover:border hover:border-slate-200" placeholder="Password">
    </div>
    <div class="mt-10 grid items-center justify-center">
        <button on:click={signup} class="p-2 text-center text-white rounded-md bg-login-button hover:bg-signup-button">
            Signup
        </button>
        <a href="/login" class="mt-2 text-white text-sm hover:text-blue-200">
            Already have an account? Login
        </a>
    </div>
</div>
</div>