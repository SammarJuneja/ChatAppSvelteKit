<script lang="ts">
  import Header from "../../lib/components/+Header.svelte";
  import "../../app.css";

  const logo = "https://media.discordapp.net/attachments/916361716965707836/1277165337825251338/OpenChat.png?ex=66cc2c69&is=66cadae9&hm=7e62f9d41dbfb54c7857ee8826c900759630569fb5953adca4762a9480b90712&";
</script>

<div class="min-h-screen bg-app-bg">
    <Header />
    <div>
        <a href="/chat" class="flex w-full gap-2 border-b border-login-button p-2 py-3">
            <div class="flex items-center">
                <img src={logo} class="rounded-full" width="45px" alt="Open Chat">
            </div>
            <div class="grid">
                <h2 class="text-white text-lg">Test1</h2>
                <p class="text-gray-400">Hello</p>
            </div>
        </a>
        <a href="/chat" class="flex w-full gap-2 border-b border-login-button p-2 py-3">
            <div class="flex items-center">
                <img src={logo} class="rounded-full" width="45px" alt="Open Chat">
            </div>
            <div class="grid">
                <h2 class="text-white text-lg">Test2</h2>
                <p class="text-gray-400">Hi, How are you</p>
            </div>
        </a>
    </div>
</div>