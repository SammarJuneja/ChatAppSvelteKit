<script lang="ts">
    import "../app.css"
    import { route } from "../stores/store"
    import Greet from "./logging/Greet.svelte";
    import Login from "./logging/Login.svelte";
    import SignUp from "./logging/SignUp.svelte";
    import Home from "./app/Home.svelte"
   import Chat from "./app/Chat.svelte";
</script>

{#if $route.path == "/"}
<Greet />
{:else if $route.path == "/login"}
<Login />
{:else if $route.path == "/signup"}
<SignUp />
{:else if $route.path == "/home"}
<Home />
{:else if $route.path = "/chat"}
<Chat />
{/if}