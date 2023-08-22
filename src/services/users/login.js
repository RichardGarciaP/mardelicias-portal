import {supabase} from "../client";

async function signInWithEmail({email, password}) {
    return await supabase.auth.signInWithPassword({email, password});
}


async function signOut() {
    return await supabase.auth.signOut();
}
