import { Link, useLocation } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, BookOpen } from "lucide-react";

export default function Header() {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-100">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-indigo-600 text-white rounded-lg p-2">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-xl font-semibold text-gray-900">BookPro</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/bookings"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-indigo-600 ${
              location.pathname === "/bookings"
                ? "text-indigo-600"
                : "text-gray-600"
            }`}
          >
            <Calendar className="h-4 w-4" />
            Bookings
          </Link>
          <Link
            to="/available-slots"
            className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
              location.pathname === "/available-slots"
                ? "text-indigo-600"
                : "text-gray-600"
            }`}
          >
            Available Slots
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
