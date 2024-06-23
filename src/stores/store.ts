import { writable } from "svelte/store";

export let route = writable({ path: "/" });