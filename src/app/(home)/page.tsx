import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="logo Image"
        width={50}
        height={50}
      />
      <p className="text-2xl font-semibold tracking-tight ">Video Platform</p>
    </div>
  );
}
