<script lang="ts">
  import Icon from "../../ui/Icon.svelte";

  const logo = "https://media.discordapp.net/attachments/916361716965707836/1277165337825251338/OpenChat.png?ex=66cc2c69&is=66cadae9&hm=7e62f9d41dbfb54c7857ee8826c900759630569fb5953adca4762a9480b90712&";
</script>

<header class="p-3 bg-black w-full">
    <div class="flex items-center">
        <img src={logo} width="45px" alt="Open Chat">
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