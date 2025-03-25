import { DashboardHeader } from "@/components/admin/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/admin/Dashboard/dashboard-shell"
import { VendorDetail } from "@/components/admin/Vendors/vendors-details"

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

const getVendor = (id: string): Vendor => {
  return {
    id: id,
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
}

// For Next.js App Router
export default function VendorDetailPage({
  params,
}: Readonly<{
  params: { id: string }
}>) {
  const vendor = getVendor(params.id);

  return (
    <DashboardShell>
      <DashboardHeader heading="Vendor Details" text="View and manage vendor information" />
      <VendorDetail vendor={vendor} />
    </DashboardShell>
  );
}