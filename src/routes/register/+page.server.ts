import { redirect, type Actions } from "@sveltejs/kit";
import { serializeNonPOJO } from "src/utils/helpers";

export const actions: Actions = {
    default: async ({locals, request}) => {

        const formData = await request.formData();
        const data = Object.fromEntries([...formData]);

        try {
            await locals.pb.collection('users').create(data)
        } catch (err) {
            err = serializeNonPOJO(err)
            console.log(err)
            return {
                error : true,
                details : err
            }
        }

        throw redirect(303,'/login')
    }
};