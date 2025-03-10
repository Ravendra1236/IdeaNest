import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b">
      <Link href="/" className="text-2xl font-bold">
        IdeaNest
      </Link>

      <div className="flex items-center gap-4">
        <Link href="/explore" className="hover:text-blue-600">
          Explore
        </Link>
        <Link href="/create" className="hover:text-blue-600">
          Create
        </Link>
        <Link href="/profile" className="hover:text-blue-600">
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
