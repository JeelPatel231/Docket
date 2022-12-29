<div class="flex h-screen justify-center items-center">
    <form class="flex flex-col" method="POST">
        <span class="header display-medium text-center">Login</span>
        
        <TextInput label={'Email'} name={'email'} errorText={form?.details.data.data['email']?.message} />

        <PasswordInput label={'Password'} name={'password'} errorText={form?.details.data.data['password']?.message} />

        <span class="error-text body-medium text-center">
            {form?.details.data.message ?? ''}
        </span>
        
        <span class="spacer" />

        <Button>Login</Button>
        
        <span class="body-small text-center">
            No account?
            <a class="underline" href="/register">Register.</a>
        </span>

    </form>
</div>

<script lang="ts">
import type { PBError } from "src/types/PBResponse";

import Button from "src/lib/components/Button.svelte";
import PasswordInput from "src/lib/components/PasswordInput.svelte";
import TextInput from "src/lib/components/TextInput.svelte";

export let form:PBError;
</script>

<style>
.spacer{
    display: block;
    height: 1rem;
}
.header{
    margin-bottom: 2rem;
}
</style>