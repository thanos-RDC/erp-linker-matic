
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ServiceCard } from "@/components/services/ServiceCard";
import { mockServices } from "@/lib/mock-data";
import { Service } from "@/lib/types";
import { Plus, Search } from "lucide-react";

export default function Services() {
  const [filteredServices, setFilteredServices] = useState<Service[]>(mockServices);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    filterServices(query, typeFilter, statusFilter);
  };

  const handleTypeFilter = (type: string) => {
    setTypeFilter(type);
    filterServices(searchQuery, type, statusFilter);
  };

  const handleStatusFilter = (status: string) => {
    setStatusFilter(status);
    filterServices(searchQuery, typeFilter, status);
  };

  const filterServices = (query: string, type: string, status: string) => {
    let filtered = mockServices;

    if (query) {
      filtered = filtered.filter(service => 
        service.name.toLowerCase().includes(query.toLowerCase()) ||
        service.description.toLowerCase().includes(query.toLowerCase())
      );
    }

    if (type !== "all") {
      filtered = filtered.filter(service => service.type === type);
    }

    if (status !== "all") {
      filtered = filtered.filter(service => service.status === status);
    }

    setFilteredServices(filtered);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Services</h2>
          <p className="text-muted-foreground">Manage connected services and integrations</p>
        </div>
        <Button className="sm:self-end">
          <Plus className="mr-2 h-4 w-4" />
          Add Service
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search services..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        <Select value={typeFilter} onValueChange={handleTypeFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="erp">ERP System</SelectItem>
            <SelectItem value="payment">Payment Gateway</SelectItem>
            <SelectItem value="marketplace">Marketplace</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={handleStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
            <SelectItem value="error">Error</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.length > 0 ? (
          filteredServices.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center p-8 border rounded-lg">
            <p className="text-muted-foreground">No services found matching your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
