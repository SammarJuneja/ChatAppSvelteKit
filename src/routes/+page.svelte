<script>
    import { onMount } from "svelte";
    import "../app.css";
    import { io } from "../lib/sockets/socketClient";

    const apiUrl = "http://localhost:4000";
    let username = "helllo";

    // let token = localStorage.getItem("token");

    async function user() {
        const response = await fetch(`${apiUrl}/`, {
            
        });
    }

    onMount(() => {
        io.on("join", () => {
            console.log(`${username} just opened the app`);
        });
    })
</script>

<div class="bg-app-bg min-h-screen grid justify-center items-center">
    <h1 class="text-white text-2xl">Welcome to the Open Chat</h1>
    <div class="mb-40 p-7 rounded-2xl bg-log-tab text-white text-lg mx-auto">
        <a href="/signup" class="bg-signup-button my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Signup</h3>
        </a>
        <a href="/login" class="bg-login-button my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Login</h3>
        </a>
        <a href="/home" class="bg-blue-900 my-2 py-1 flex items-center justify-center w-40 rounded-2xl">
            <h3>Bypass Login</h3>
        </a>
    </div>
</div>