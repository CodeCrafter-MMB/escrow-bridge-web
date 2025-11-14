import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Loader2 } from 'lucide-react';
import Navigation from '@/components/Navigation';

const Auth = () => {
  const navigate = useNavigate();
  const { login, register, isLoading } = useAuth();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ email: '', password: '', name: '', confirmPassword: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!validateEmail(loginForm.email)) {
      setErrors({ email: 'Please enter a valid email' });
      return;
    }

    if (loginForm.password.length < 6) {
      setErrors({ password: 'Password must be at least 6 characters' });
      return;
    }

    try {
      await login(loginForm.email, loginForm.password);
      navigate('/dashboard');
    } catch (error) {
      // Error handled in context
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (!registerForm.name.trim()) {
      setErrors({ name: 'Name is required' });
      return;
    }

    if (!validateEmail(registerForm.email)) {
      setErrors({ email: 'Please enter a valid email' });
      return;
    }

    if (registerForm.password.length < 6) {
      setErrors({ password: 'Password must be at least 6 characters' });
      return;
    }

    if (registerForm.password !== registerForm.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    try {
      await register(registerForm.email, registerForm.password, registerForm.name);
      navigate('/dashboard');
    } catch (error) {
      // Error handled in context
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome to SecureEscrow</h1>
            <p className="text-muted-foreground">Login or create an account to get started</p>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <Card>
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Enter your credentials to access your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">Email</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="john@example.com"
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                        required
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="login-password">Password</Label>
                      <Input
                        id="login-password"
                        type="password"
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                        required
                      />
                      {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Logging in...
                        </>
                      ) : (
                        'Login'
                      )}
                    </Button>

                    <div className="text-sm text-muted-foreground text-center">
                      Demo: admin@escrow.com / admin123
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="register">
              <Card>
                <CardHeader>
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>Fill in your details to create a new account</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">Full Name</Label>
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="John Doe"
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                        required
                      />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-email">Email</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="john@example.com"
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                        required
                      />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-password">Password</Label>
                      <Input
                        id="register-password"
                        type="password"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                        required
                      />
                      {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="register-confirm">Confirm Password</Label>
                      <Input
                        id="register-confirm"
                        type="password"
                        value={registerForm.confirmPassword}
                        onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                        required
                      />
                      {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating account...
                        </>
                      ) : (
                        'Create Account'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Auth;
