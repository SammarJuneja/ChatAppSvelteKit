<script lang="ts">
  import Header from "../../components/+Header.svelte";


</script>

<div class="min-h-screen bg-app-bg">
    <Header />
    <div>
        <div class="flex gap-2 border-b border-login-button p-2 py-3">
            <div class="flex items-center">
                <!-- <img class="rounded-full ml-2" width="28px" src="" alt=""> -->
                <div class="border ml-2 p-5 w-7 rounded-full"></div>
            </div>
            <div class="grid">
                <h2 class="text-white text-lg">Test1</h2>
                <p class='text-gray-400'>Hello</p>
            </div>
        </div>
        <div class="flex gap-2 border-b border-login-button p-2 py-3">
            <div class="flex items-center">
                <!-- <img class="rounded-full ml-2" width="28px" src="" alt=""> -->
                <div class="border ml-2 p-5 w-7 rounded-full"></div>
            </div>
            <div class="grid">
                <h2 class="text-white text-lg">Test2</h2>
                <p class='text-gray-400'>Hi, How are you</p>
            </div>
        </div>
    </div>
</div>