
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Shield, Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Service = {
  id: string;
  name: string;
  type: string;
};

type Role = {
  id: string;
  name: string;
};

type Permission = {
  serviceId: string;
  roleId: string;
  view: boolean;
  edit: boolean;
};

export default function UserPermissions() {
  const [services] = useState<Service[]>([
    { id: "s1", name: "ERP System", type: "erp" },
    { id: "s2", name: "Payment Gateway", type: "payment" },
    { id: "s3", name: "Shopify", type: "marketplace" },
    { id: "s4", name: "Inventory System", type: "erp" },
    { id: "s5", name: "Amazon Marketplace", type: "marketplace" },
  ]);

  const [roles] = useState<Role[]>([
    { id: "r1", name: "Admin" },
    { id: "r2", name: "Editor" },
    { id: "r3", name: "Viewer" },
  ]);

  const [permissions, setPermissions] = useState<Permission[]>([
    { serviceId: "s1", roleId: "r1", view: true, edit: true },
    { serviceId: "s1", roleId: "r2", view: true, edit: true },
    { serviceId: "s1", roleId: "r3", view: true, edit: false },
    { serviceId: "s2", roleId: "r1", view: true, edit: true },
    { serviceId: "s2", roleId: "r2", view: true, edit: false },
    { serviceId: "s2", roleId: "r3", view: false, edit: false },
    { serviceId: "s3", roleId: "r1", view: true, edit: true },
    { serviceId: "s3", roleId: "r2", view: true, edit: true },
    { serviceId: "s3", roleId: "r3", view: true, edit: false },
    { serviceId: "s4", roleId: "r1", view: true, edit: true },
    { serviceId: "s4", roleId: "r2", view: true, edit: false },
    { serviceId: "s4", roleId: "r3", view: false, edit: false },
    { serviceId: "s5", roleId: "r1", view: true, edit: true },
    { serviceId: "s5", roleId: "r2", view: true, edit: false },
    { serviceId: "s5", roleId: "r3", view: false, edit: false },
  ]);

  const updatePermission = (serviceId: string, roleId: string, field: 'view' | 'edit', value: boolean) => {
    setPermissions(permissions.map(permission => {
      if (permission.serviceId === serviceId && permission.roleId === roleId) {
        return {
          ...permission,
          [field]: value
        };
      }
      return permission;
    }));
  };

  const getPermission = (serviceId: string, roleId: string): Permission | undefined => {
    return permissions.find(p => p.serviceId === serviceId && p.roleId === roleId);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Service Permissions</h2>
          <p className="text-muted-foreground">Manage access rights to services for different roles</p>
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search services..."
              className="pl-8 w-[200px]"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Role
          </Button>
        </div>
      </div>

      <Tabs defaultValue="matrix" className="space-y-4">
        <TabsList>
          <TabsTrigger value="matrix">Permission Matrix</TabsTrigger>
          <TabsTrigger value="roles">By Role</TabsTrigger>
          <TabsTrigger value="services">By Service</TabsTrigger>
        </TabsList>
        
        <TabsContent value="matrix" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Permission Matrix
              </CardTitle>
              <CardDescription>
                Configure view and edit permissions for each role and service combination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[180px]">Service</TableHead>
                      {roles.map(role => (
                        <TableHead key={role.id} colSpan={2} className="text-center">
                          {role.name}
                        </TableHead>
                      ))}
                    </TableRow>
                    <TableRow>
                      <TableHead></TableHead>
                      {roles.map(role => (
                        <React.Fragment key={`header-${role.id}`}>
                          <TableHead className="text-center w-[80px]">View</TableHead>
                          <TableHead className="text-center w-[80px]">Edit</TableHead>
                        </React.Fragment>
                      ))}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map(service => (
                      <TableRow key={service.id}>
                        <TableCell className="font-medium">
                          {service.name}
                          <div className="text-xs text-muted-foreground">{service.type}</div>
                        </TableCell>
                        {roles.map(role => {
                          const permission = getPermission(service.id, role.id);
                          return (
                            <React.Fragment key={`${service.id}-${role.id}`}>
                              <TableCell className="text-center">
                                <div className="flex justify-center">
                                  <Switch 
                                    checked={permission?.view || false}
                                    onCheckedChange={(checked) => 
                                      updatePermission(service.id, role.id, 'view', checked)
                                    }
                                  />
                                </div>
                              </TableCell>
                              <TableCell className="text-center">
                                <div className="flex justify-center">
                                  <Switch 
                                    checked={permission?.edit || false}
                                    onCheckedChange={(checked) => 
                                      updatePermission(service.id, role.id, 'edit', checked)
                                    }
                                  />
                                </div>
                              </TableCell>
                            </React.Fragment>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="roles">
          <Card>
            <CardHeader>
              <CardTitle>Role-Based Permissions</CardTitle>
              <CardDescription>
                Manage permissions grouped by role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {roles.map(role => (
                  <Card key={role.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{role.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {services.map(service => {
                          const permission = getPermission(service.id, role.id);
                          return (
                            <div key={`${role.id}-${service.id}`} className="flex items-center justify-between py-1">
                              <div>{service.name}</div>
                              <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">View</span>
                                  <Switch 
                                    checked={permission?.view || false}
                                    onCheckedChange={(checked) => 
                                      updatePermission(service.id, role.id, 'view', checked)
                                    }
                                  />
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">Edit</span>
                                  <Switch 
                                    checked={permission?.edit || false}
                                    onCheckedChange={(checked) => 
                                      updatePermission(service.id, role.id, 'edit', checked)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="services">
          <Card>
            <CardHeader>
              <CardTitle>Service-Based Permissions</CardTitle>
              <CardDescription>
                Manage permissions grouped by service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map(service => (
                  <Card key={service.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                      <CardDescription>{service.type}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {roles.map(role => {
                          const permission = getPermission(service.id, role.id);
                          return (
                            <div key={`${service.id}-${role.id}`} className="flex items-center justify-between py-1 border-b last:border-0">
                              <div>{role.name}</div>
                              <div className="flex gap-2">
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">View</span>
                                  <Switch 
                                    checked={permission?.view || false}
                                    onCheckedChange={(checked) => 
                                      updatePermission(service.id, role.id, 'view', checked)
                                    }
                                  />
                                </div>
                                <div className="flex items-center gap-1">
                                  <span className="text-xs">Edit</span>
                                  <Switch 
                                    checked={permission?.edit || false}
                                    onCheckedChange={(checked) => 
                                      updatePermission(service.id, role.id, 'edit', checked)
                                    }
                                  />
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
