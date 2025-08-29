"use client"
import axios from "axios"
export default function Signup() {
    return <div className="w-screen h-screen flex justify-center intems-center">
        <div className="border p-2">
            <input type="text" placeholder="username" />
            <br />
            <input type="password" placeholder="password" />
            <br />
            <button onClick={() => {
                axios.post("http://localhost:3000/api/v1/signup")
            }}>Sign up</button>
        </div>
    </div>
}
