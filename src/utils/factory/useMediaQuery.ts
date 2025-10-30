import { ref, onMounted, onUnmounted } from "vue";

export function useMediaQuery(query: string) {
    const matches = ref(false);
    const media = window.matchMedia(query);

    const update = () => (matches.value = media.matches);
    const handler = (e: MediaQueryListEvent) => update();

    onMounted(() => {
        update();
        media.addEventListener("change", handler);
    });
    onUnmounted(() => media.removeEventListener("change", handler));

    return matches;
}
