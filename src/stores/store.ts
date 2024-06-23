import { writable } from "svelte/store";

export let route = writable({ path: "/" });
export const apiUrl = "https://chat-api-kappa-tan.vercel.app"