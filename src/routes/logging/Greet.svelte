<script>
    import { route } from "../../stores/store";
</script>

<div class="bg-app-bg min-h-screen grid justify-center items-center">
    <h1 class="text-white text-2xl">Welcome to the Open Chat</h1>
    <div class="mb-40 p-7 rounded-2xl bg-log-tab text-white text-lg mx-auto">
        <button on:click={() => { $route.path = "/signup"}} class="bg-signup-button my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Signup</h3>
        </button>
        <button on:click={() => { $route.path = "/login"}} class="bg-login-button my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Login</h3>
        </button>
        <button on:click={() => { $route.path = "/home"}} class="bg-blue-900 my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Bypass Login</h3>
        </button>
    </div>
</div>