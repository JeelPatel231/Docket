<div class="flex h-screen justify-center items-center">
    <form class="flex flex-col" method="POST">
        <span class="header text-center display-medium">Register</span> 
        
        <TextInput label={'Name'} name={'name'} errorText={form?.details.data.data['name']?.message} />
        <TextInput label={'Email'} name={'email'} errorText={form?.details.data.data['email']?.message} />
        <PasswordInput label={'Password'} name={'password'} errorText={form?.details.data.data['password'].message} />
        <PasswordInput label={'Confirm Password'} name={'passwordConfirm'} errorText={form?.details.data.data['passwordConfirm'].message} />
        <DateInput label={'Date Of Birth'} name={'dob'} errorText={form?.details.data.data['dob']?.message} />
        
        <span class="error-text body-medium text-center">
            {form?.details.data.message ?? ''}
        </span>
        
        <span class="spacer" />
        
        <Button>Register</Button>
        
        <span class="spacer" />

        <span class="body-small text-center">
            Already have an account?
            <a class="underline" href="/login">Login.</a>
        </span>

    </form>
</div>

<script lang="ts">
import Button from "src/lib/components/Button.svelte";
import DateInput from "src/lib/components/DateInput.svelte";
import PasswordInput from "src/lib/components/PasswordInput.svelte";
import TextInput from "src/lib/components/TextInput.svelte";

import type { PBError } from "src/types/PBResponse";

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
form{
    border: 0.125rem solid var(--md-sys-color-outline);
    padding: 2rem;
    border-radius: 2rem;
}
</style>