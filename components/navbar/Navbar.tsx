import Link from "next/link";
import { Leaf } from "lucide-react";
import SearchBar from "../search/SearchBar";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100">
            <Leaf className="h-6 w-6 text-green-700" />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              NatHabit Store
            </h1>

            <p className="text-xs text-slate-500">
              Discover Premium Products
            </p>
          </div>
        </Link>

        <div className="w-full max-w-md">
          <SearchBar />
        </div>

      </div>
    </header>
  );
}