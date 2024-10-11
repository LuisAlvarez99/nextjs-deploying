import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/favicon.ico" alt="logo" width={200} height={200} />
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </main>
  );
}
