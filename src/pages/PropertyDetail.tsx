import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import PropertyDetail from "@/components/booking/PropertyDetail";
import BookingForm from "@/components/booking/BookingForm";
import { properties } from "@/data/mockData";
import { BookingFormData } from "@/types/booking";
import { toast } from "sonner";

export default function PropertyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Property Not Found
            </h1>
            <p className="text-gray-600 mb-8">
              The property you're looking for doesn't exist.
            </p>
            <button
              onClick={() => navigate("/")}
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleBookingSubmit = (data: BookingFormData) => {
    console.log("Booking submitted:", {
      property: property.name,
      ...data,
    });

    toast.success("Booking submitted successfully!", {
      description: `Your booking for ${property.name} has been submitted.`,
    });

    // In a real app, you would make an API call here
    // and then potentially redirect to a confirmation page
    setTimeout(() => {
      navigate("/bookings");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Property Details */}
        <div className="mb-8">
          <PropertyDetail property={property} />
        </div>

        {/* Booking Form */}
        <div className="max-w-md mx-auto">
          <BookingForm onSubmit={handleBookingSubmit} />
        </div>
      </div>
    </div>
  );
}
