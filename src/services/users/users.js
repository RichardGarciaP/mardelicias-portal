import {supabase} from "../client";

export const getAllUsers = async () => {
    return await supabase.auth.admin.listUsers();
}

export const updateUser = async (id) => {
      return await supabase.auth.admin.updateUserById(
        '2387987d-997f-49ff-a884-6b0ff80fbfbc',
        { phone:'+593989938827', user_metadata:{first_name: 'Gabriel', last_name: 'Garcia'} }
    )
}
