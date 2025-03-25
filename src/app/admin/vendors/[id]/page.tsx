import { DashboardHeader } from "@/components/admin/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/admin/Dashboard/dashboard-shell"
import { VendorDetail } from "@/components/admin/Vendors/vendors-details"
import { notFound } from "next/navigation"

interface Vendor {
  id: string;
  name: string;
  contactPerson: string;
  email: string;
  phone: string;
  status: "active" | "inactive";
  productsCount: number;
  dateAdded: string;
  logo: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  website: string;
  description: string;
}

const getVendor = (id: string): Vendor | null => {
  const vendors: Vendor[] = [
    {
      id: "1",
      name: "Tech Innovations Inc.",
      contactPerson: "Sarah Johnson",
      email: "sarah@techinnovations.com",
      phone: "(555) 123-4567",
      status: "active",
      productsCount: 24,
      dateAdded: "2023-01-15",
      logo: "/placeholder.svg?height=40&width=40",
      address: "123 Tech Boulevard",
      city: "San Francisco",
      state: "CA",
      zipCode: "94105",
      country: "United States",
      website: "https://techinnovations.example.com",
      description:
        "Tech Innovations Inc. is a leading supplier of electronic components and accessories...",
    }
  ];

  return vendors.find((vendor) => vendor.id === id) || null;
};

interface VendorDetailPageProps {
  params: { id: string };
}

export default function VendorDetailPage({ params }: VendorDetailPageProps) {
  if (!params?.id) return notFound();

  const vendor = getVendor(params.id);
  if (!vendor) return notFound();

  return (
    <DashboardShell>
      <DashboardHeader heading="Vendor Details" text="View and manage vendor information" />
      <VendorDetail vendor={vendor} />
    </DashboardShell>
  );
}
