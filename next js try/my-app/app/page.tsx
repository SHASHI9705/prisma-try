import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-lg w-screen h-screen flex items-center justify-center">
      <div>
        <span className="mb-4">Todo application</span>
        <br />
        <Link className="text-md border border-white rounded font-bold m-2 hover:bg-blue-500/80"  href="/signin">Sign in todo</Link>
        <br />
        <Link className="text-md border border-white rounded font-bold m-2 hover:bg-blue-500/80" href="/signiup">Sign up todo</Link>
      </div>
      
    </div>
  );
}
