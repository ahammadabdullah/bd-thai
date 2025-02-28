import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <h2 className="text-2xl font-bold text-white">BD Thai Food</h2>
            <p className="mt-4 text-sm">
              Your trusted partner in food & beverage manufacturing, delivering
              quality products globally.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products", "/products"],
                ["Contact", "/contact"],
              ].map(([name, href]) => (
                <li key={name}>
                  <Link href={href} className="hover:text-white">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                123 Business District, Dhaka, Bangladesh
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                +880 123 456 789
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@bdthaifood.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Newsletter</h3>
            <p className="mt-4 text-sm">
              Subscribe to our newsletter for updates and industry insights.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md gap-x-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/10"
                />
                <Button type="submit">Subscribe</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} BD Thai Food & Beverage Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
