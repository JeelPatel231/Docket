import type { Handle } from '@sveltejs/kit'
import PocketBase from 'pocketbase';
import { serializeNonPOJO } from './utils/helpers';

export const handle:Handle = async ({ event, resolve }) => {
    event.locals.pb = new PocketBase(import.meta.env.VITE_POCKETBASE_ENDPOINT);
    // load the store data from the request cookie string
    event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
    try {
        // get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
        if(event.locals.pb.authStore.isValid){
            await event.locals.pb.collection('users').authRefresh();
            event.locals.user = serializeNonPOJO(event.locals.pb.authStore.model)
        }
    } catch (_) {
        // clear the auth store on failed refresh
        event.locals.pb.authStore.clear();
    }

    const response = await resolve(event);

    // send back the default 'pb_auth' cookie to the client with the latest store state
    response.headers.set('set-cookie', event.locals.pb.authStore.exportToCookie());

    return response;
}