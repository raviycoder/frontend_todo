export interface User {
    user: User | PromiseLike<User>
    _id:string
    username:string
    email:string
    password:string
    updated_at:string
    created_at:string
}