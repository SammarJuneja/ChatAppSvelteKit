<script lang="ts">
  import Header from "../../components/+Header.svelte";
  import OpenChat from "./ui/images/OpenChat.png"
  import { route } from "../../stores/store";
</script>

<div class="min-h-screen bg-app-bg">
    <Header />
    <div>
    <!-- routing needed here -->
        <div on:click={() => { $route.path = "/chat"}} class="flex w-full gap-2 border-b border-login-button p-2 py-3">
            <div class="flex items-center">
                <img src={OpenChat} class="rounded-full" width="45px" alt="Open Chat">
            </div>
            <div class="grid">
                <h2 class="text-white text-lg">Test1</h2>
                <p class="text-gray-400">Hello</p>
            </div>
        </div>
        <div on:click={() => {alert('hi')}} class="flex w-full gap-2 border-b border-login-button p-2 py-3">
            <div class="flex items-center">
                <img src={OpenChat} class="rounded-full" width="45px" alt="Open Chat">
            </div>
            <div class="grid">
                <h2 class="text-white text-lg">Test2</h2>
                <p class="text-gray-400">Hi, How are you</p>
            </div>
        </div>
    </div>
</div>