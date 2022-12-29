import { redirect, type Actions } from "@sveltejs/kit";
import { serializeNonPOJO } from "src/utils/helpers";

interface LoginFormData {
    email:string,
    password: string,
}

export const actions: Actions = {
    default: async ({locals, request}) => {

        const formData = await request.formData();
        const data = Object.fromEntries([...formData]) as unknown as LoginFormData;

        try {
            await locals.pb.collection('users').authWithPassword(data.email, data.password)
            locals.user = serializeNonPOJO(locals.pb.authStore.model)
        } catch (err) {
            err = serializeNonPOJO(err)
            console.log(err)
            return {
                error : true,
                details : serializeNonPOJO(err)
            }
        }

        throw redirect(303,'/')
    }
};