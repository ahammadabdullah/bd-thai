import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-background text-foreground">
      <h1 className="text-[10rem] md:text-[12rem] font-extrabold text-primary animate-pulse">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg">
        Oops! The page you are looking for does not exist or has been moved.
        Check the URL or return to the homepage.
      </p>

      <Link href="/" className="">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
}
