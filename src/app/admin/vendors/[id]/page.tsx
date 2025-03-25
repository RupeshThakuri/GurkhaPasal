import { DashboardHeader } from "@/components/admin/Dashboard/dashboard-header"
import { DashboardShell } from "@/components/admin/Dashboard/dashboard-shell"
import { VendorDetail } from "@/components/admin/Vendors/vendors-details"

// This would normally come from a database
const getVendor = (id: string) => {
  return {
    id: id,
    name: "Tech Innovations Inc.",
    contactPerson: "Sarah Johnson",
    email: "sarah@techinnovations.com",
    phone: "(555) 123-4567",
    status: "active" as const,
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
      "Tech Innovations Inc. is a leading supplier of electronic components and accessories. They specialize in high-quality mobile device accessories, computer peripherals, and smart home devices. Established in 2010, they have been a reliable partner for our store, consistently delivering products on time and providing excellent customer service.",
  }
}

export default function VendorDetailPage({ params }: Readonly<{ params: { id: string } }>) {
  const vendor = getVendor(params.id)

  return (
    <DashboardShell>
      <DashboardHeader heading="Vendor Details" text="View and manage vendor information" />
      <VendorDetail vendor={vendor} />
    </DashboardShell>
  )
}

