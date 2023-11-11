import fastify from "fastify";
  
import { supabase } from "./supabaseConection";
import { request } from "http";

const app = fastify();


app.get("/user", async () => {

    try {
        const { data: users } = await supabase.from("users").select("*");

        return {"value" : users}
    } catch (error) {
        console.error(error)
        throw error

    }
})



app.post("/user", async (request , response) => {

    try {
        const { name , email } = request.body as users

        const { data : createdUser } = await supabase.from("users").insert([{
            name , 
            email
        }]).select()

        return{
            value: createdUser ? createdUser[0] : null
        }

    } catch (error) {
        console.error(error)
        throw error

    }
})


app.listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(  ()=>{
    console.log('servidor em funcionamento')
})

