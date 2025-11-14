import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import { Plus, DollarSign, Clock, CheckCircle, AlertCircle, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const mockTransactions = [
    { id: 'ESC-001', title: 'Website Development', amount: 5000, status: 'active', buyer: 'John Doe', created: '2024-01-15' },
    { id: 'ESC-002', title: 'Logo Design', amount: 500, status: 'completed', buyer: 'Jane Smith', created: '2024-01-10' },
    { id: 'ESC-003', title: 'Car Purchase', amount: 25000, status: 'pending', buyer: 'Mike Johnson', created: '2024-01-20' },
  ];

  const adminStats = {
    totalUsers: 1250,
    totalTransactions: 3847,
    totalVolume: 4250000,
    activeDisputes: 12,
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-white';
      case 'active': return 'bg-primary text-white';
      case 'pending': return 'bg-warning text-white';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              {isAdmin() ? 'Admin Dashboard' : 'Dashboard'}
            </h1>
            <p className="text-muted-foreground">
              Welcome back, {user?.name}!
            </p>
          </div>
          <Link to="/transactions">
            <Button variant="hero" className="gap-2">
              <Plus className="h-4 w-4" />
              New Escrow
            </Button>
          </Link>
        </div>

        {isAdmin() ? (
          // Admin View
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+12% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.totalTransactions.toLocaleString()}</div>
                  <p className="text-xs text-muted-foreground">+8% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Transaction Volume</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(adminStats.totalVolume / 1000000).toFixed(1)}M</div>
                  <p className="text-xs text-muted-foreground">+15% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Disputes</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{adminStats.activeDisputes}</div>
                  <p className="text-xs text-muted-foreground">Requires attention</p>
                </CardContent>
              </Card>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="users">Users</TabsTrigger>
                <TabsTrigger value="disputes">Disputes</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent System Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">System metrics and activity overview...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="users" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">User list and management tools...</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="disputes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Disputes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Dispute resolution interface...</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          // User View
          <>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Transactions</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$30,500</div>
                  <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Escrows</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Currently in progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Completed</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Successfully completed</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1</div>
                  <p className="text-xs text-muted-foreground">Awaiting approval</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold">{transaction.title}</h3>
                          <Badge className={getStatusColor(transaction.status)}>
                            {transaction.status}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>ID: {transaction.id}</span>
                          <span>•</span>
                          <span>Buyer: {transaction.buyer}</span>
                          <span>•</span>
                          <span>{new Date(transaction.created).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold">${transaction.amount.toLocaleString()}</div>
                        <Button variant="outline" size="sm" className="mt-2">View</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <Link to="/transactions">
                    <Button variant="outline">View All Transactions</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;