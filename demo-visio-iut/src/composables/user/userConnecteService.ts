import type { User } from "@/model/User.model";
import { ref } from "vue";

const userConnecte = ref<User>({ id: -1, username: '', password: ''});

export function useUserConnecteService() {
    return {
        userConnecte
    };
}