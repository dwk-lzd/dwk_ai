import {
    supabase
} from './lib/supabaseClient.mjs'

// Backend as service
// 异步，node
// const { error, data } = await supabase.from('todos').insert({
//     title: '从0到1开发一个AI应用',
//     is_complete: false
// })
// console.log(error);

const { data, error } = await supabase.from('todos').select('*')
console.log(data);