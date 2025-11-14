import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Search, Filter, Eye, DollarSign, Clock, User, Calendar } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Transactions = () => {
  const { user, isAdmin } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [isNewTransactionOpen, setIsNewTransactionOpen] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    description: '',
    amount: '',
    buyerEmail: '',
    sellerEmail: '',
  });

  const mockTransactions = [
    { 
      id: 'ESC-001', 
      title: 'Website Development', 
      description: 'Full stack web application',
      amount: 5000, 
      status: 'active', 
      buyer: 'John Doe',
      buyerEmail: 'john@example.com',
      seller: 'Jane Smith',
      sellerEmail: 'jane@example.com',
      created: '2024-01-15',
      progress: 60
    },
    { 
      id: 'ESC-002', 
      title: 'Logo Design', 
      description: 'Brand identity and logo',
      amount: 500, 
      status: 'completed', 
      buyer: 'Jane Smith',
      buyerEmail: 'jane@example.com',
      seller: 'Bob Wilson',
      sellerEmail: 'bob@example.com',
      created: '2024-01-10',
      progress: 100
    },
    { 
      id: 'ESC-003', 
      title: 'Car Purchase', 
      description: '2020 Toyota Camry',
      amount: 25000, 
      status: 'pending', 
      buyer: 'Mike Johnson',
      buyerEmail: 'mike@example.com',
      seller: 'Sarah Davis',
      sellerEmail: 'sarah@example.com',
      created: '2024-01-20',
      progress: 0
    },
    { 
      id: 'ESC-004', 
      title: 'Freelance Consulting', 
      description: 'Business strategy consultation',
      amount: 3000, 
      status: 'active', 
      buyer: 'Tech Corp',
      buyerEmail: 'tech@example.com',
      seller: user?.name || 'Current User',
      sellerEmail: user?.email || '',
      created: '2024-01-18',
      progress: 40
    },
    { 
      id: 'ESC-005', 
      title: 'Real Estate Commission', 
      description: 'Property sale escrow',
      amount: 15000, 
      status: 'disputed', 
      buyer: 'Property Buyer',
      buyerEmail: 'buyer@example.com',
      seller: 'Real Estate Agent',
      sellerEmail: 'agent@example.com',
      created: '2024-01-12',
      progress: 75
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-success text-white';
      case 'active': return 'bg-primary text-white';
      case 'pending': return 'bg-warning text-white';
      case 'disputed': return 'bg-destructive text-white';
      default: return 'bg-muted';
    }
  };

  const filteredTransactions = mockTransactions.filter(transaction => {
    const matchesSearch = transaction.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.buyer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || transaction.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleCreateTransaction = () => {
    if (!newTransaction.title || !newTransaction.amount || !newTransaction.buyerEmail) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Transaction Created",
      description: `Escrow ${newTransaction.title} has been created successfully`,
    });

    setIsNewTransactionOpen(false);
    setNewTransaction({
      title: '',
      description: '',
      amount: '',
      buyerEmail: '',
      sellerEmail: '',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Transactions</h1>
            <p className="text-muted-foreground">Manage and track all escrow transactions</p>
          </div>
          
          <Dialog open={isNewTransactionOpen} onOpenChange={setIsNewTransactionOpen}>
            <DialogTrigger asChild>
              <Button variant="hero" className="gap-2">
                <Plus className="h-4 w-4" />
                New Transaction
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Escrow</DialogTitle>
                <DialogDescription>
                  Set up a new escrow transaction. All parties will be notified.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Transaction Title *</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Website Development"
                    value={newTransaction.title}
                    onChange={(e) => setNewTransaction({ ...newTransaction, title: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Brief description of the transaction"
                    value={newTransaction.description}
                    onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (USD) *</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="5000"
                    value={newTransaction.amount}
                    onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="buyer">Buyer Email *</Label>
                  <Input
                    id="buyer"
                    type="email"
                    placeholder="buyer@example.com"
                    value={newTransaction.buyerEmail}
                    onChange={(e) => setNewTransaction({ ...newTransaction, buyerEmail: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="seller">Seller Email</Label>
                  <Input
                    id="seller"
                    type="email"
                    placeholder="seller@example.com"
                    value={newTransaction.sellerEmail}
                    onChange={(e) => setNewTransaction({ ...newTransaction, sellerEmail: e.target.value })}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsNewTransactionOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateTransaction}>Create Escrow</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="disputed">Disputed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          {filteredTransactions.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground">No transactions found</p>
              </CardContent>
            </Card>
          ) : (
            filteredTransactions.map((transaction) => (
              <Card key={transaction.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-1">{transaction.title}</h3>
                          <p className="text-sm text-muted-foreground">{transaction.description}</p>
                        </div>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-muted-foreground" />
                          <span className="font-semibold">${transaction.amount.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4 text-muted-foreground" />
                          <span>{transaction.buyer}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{new Date(transaction.created).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {transaction.status === 'active' && (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>Progress</span>
                            <span>{transaction.progress}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{ width: `${transaction.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        View Details
                      </Button>
                      {isAdmin() && (
                        <Button variant="default" size="sm">
                          Manage
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
