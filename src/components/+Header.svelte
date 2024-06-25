<script lang="ts">
  import Icon from "../routes/app/ui/Icon.svelte";


</script>

<header class="p-3 bg-black w-full">
    <div class="flex items-center">
        <!-- <img src="" alt="Open Chat"> -->
        <h2 class="text-white text-xl">OpenChat</h2>
        <div class="flex justify-end w-full gap-3 mr-3">
            <span class="bg-app-bg p-1.5 rounded-full">
                <Icon icon="search" size="22px"/>
            </span>
            <span class="bg-app-bg p-1.5 rounded-full">
                <Icon icon="notification" size="22px"/>
            </span>
        </div>
    </div>
</header>