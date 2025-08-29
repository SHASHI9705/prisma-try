"use client"
import axios from "axios"
export default function Signin() {
    return <div className="w-screen flex justify-center intems-center">
        <div className="border p-2">
            <input type="text" placeholder="username" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signin", {

                })
            }}>Sign in</button>
        </div>
    </div>
}

