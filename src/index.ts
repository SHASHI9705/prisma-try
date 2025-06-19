import { PrismaClient } from "@prisma/client";
import express from "express";
const client = new PrismaClient();

const app = express();

app.get("/users", async (req,res) => {
    const users = await client.user.findMany();
    res.json({
        users
    })
})

app.get("/todos/:id", async (req,res) => {
    const id = req.params.id;
    const users = await client.user.findFirst({
        where: {
            id: Number(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({
        users
    })
})





async function getUser() {
    
    const user = await client.user.findFirst({
        where: {
            id: 2
        },
        include: {
            todos: true
        }
    })


}

getUser();


app.listen(3000)