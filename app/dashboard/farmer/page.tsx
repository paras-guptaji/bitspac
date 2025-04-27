import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  BarChart3,
  Package,
  Users,
  TrendingUp,
  Plus,
  Settings,
  Bell,
  LogOut,
  ShoppingCart,
  Truck,
  CheckCircle,
  Clock,
  Calendar,
  Star,
} from "lucide-react"

export default function FarmerDashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Link className="flex items-center justify-center" href="/">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-xl font-bold">FarmDirect</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex-1 grid grid-cols-[240px_1fr] bg-muted/40">
        <aside className="border-r bg-background">
          <nav className="grid items-start px-4 py-4 gap-2">
            <Link href="#" className="flex items-center gap-2 rounded-lg bg-green-50 px-3 py-2 text-green-900">
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-muted"
            >
              <Package className="h-5 w-5" />
              My Products
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-muted"
            >
              <ShoppingCart className="h-5 w-5" />
              Orders
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-muted"
            >
              <Users className="h-5 w-5" />
              Customers
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-muted"
            >
              <TrendingUp className="h-5 w-5" />
              Analytics
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-muted"
            >
              <Settings className="h-5 w-5" />
              Settings
            </Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold">Farmer Dashboard</h1>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" /> Add New Product
              </Button>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">₹24,563</div>
                  <p className="text-xs text-muted-foreground">+18% from last month</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 new today</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Products Listed</CardTitle>
                  <Package className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">8</div>
                  <p className="text-xs text-muted-foreground">3 low in stock</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Customer Reach</CardTitle>
                  <Users className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142</div>
                  <p className="text-xs text-muted-foreground">+28 this week</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="orders">
              <TabsList>
                <TabsTrigger value="orders">Recent Orders</TabsTrigger>
                <TabsTrigger value="products">Top Products</TabsTrigger>
                <TabsTrigger value="insights">Market Insights</TabsTrigger>
              </TabsList>
              <TabsContent value="orders" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Manage your recent orders and track their status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex items-center justify-between border-b pb-4">
                          <div className="flex items-center gap-4">
                            <div
                              className={`p-2 rounded-full ${
                                i % 3 === 0 ? "bg-yellow-100" : i % 3 === 1 ? "bg-green-100" : "bg-blue-100"
                              }`}
                            >
                              {i % 3 === 0 ? (
                                <Clock className={`h-4 w-4 text-yellow-600`} />
                              ) : i % 3 === 1 ? (
                                <CheckCircle className={`h-4 w-4 text-green-600`} />
                              ) : (
                                <Truck className={`h-4 w-4 text-blue-600`} />
                              )}
                            </div>
                            <div>
                              <p className="font-medium">Order #{10045 + i}</p>
                              <p className="text-sm text-gray-500">
                                {i % 3 === 0 ? "Pending confirmation" : i % 3 === 1 ? "Completed" : "Out for delivery"}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{(120 + i * 50).toFixed(2)}</p>
                            <p className="text-sm text-gray-500">Today, 2:30 PM</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      View All Orders
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="products" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Products</CardTitle>
                    <CardDescription>Your best-selling products this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {["Organic Tomatoes", "Fresh Spinach", "Bell Peppers", "Organic Potatoes"].map((product, i) => (
                        <div key={i} className="flex items-center gap-4 border-b pb-4">
                          <div className="h-12 w-12 rounded-md overflow-hidden">
                            <Image
                              src={`/placeholder.svg?height=48&width=48&text=${i + 1}`}
                              alt={product}
                              width={48}
                              height={48}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">{product}</p>
                            <p className="text-sm text-gray-500">{50 - i * 5} kg sold this month</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{(80 + i * 10).toFixed(2)}/kg</p>
                            <p className="text-sm text-green-600">+{18 - i * 2}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      View All Products
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="insights" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Market Insights</CardTitle>
                    <CardDescription>
                      Current trends and pricing information to help you optimize your offerings
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Seasonal Demand</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Tomatoes, cucumbers, and leafy greens are in high demand this season. Consider increasing your
                          inventory of these items.
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Price Trends</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Average prices for organic vegetables have increased by 12% in your region compared to last
                          month. Your current pricing is competitive.
                        </p>
                      </div>
                      <div className="rounded-lg border p-4">
                        <h3 className="font-medium">Customer Preferences</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Customers in your area are showing increased interest in pesticide-free and organic produce.
                          Consider highlighting these aspects in your listings.
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-4 w-full">
                      View Detailed Report
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Harvests</CardTitle>
                  <CardDescription>Plan your listings based on upcoming harvests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { crop: "Tomatoes", date: "May 15, 2024", quantity: "120 kg", status: "On schedule" },
                      { crop: "Cucumbers", date: "May 18, 2024", quantity: "80 kg", status: "On schedule" },
                      { crop: "Bell Peppers", date: "May 25, 2024", quantity: "60 kg", status: "Delayed" },
                      { crop: "Eggplants", date: "June 2, 2024", quantity: "90 kg", status: "On schedule" },
                    ].map((harvest, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="p-2 rounded-full bg-green-100">
                          <Calendar className="h-4 w-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{harvest.crop}</p>
                          <p className="text-sm text-gray-500">{harvest.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{harvest.quantity}</p>
                          <p
                            className={`text-sm ${
                              harvest.status === "On schedule" ? "text-green-600" : "text-yellow-600"
                            }`}
                          >
                            {harvest.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Customer Feedback</CardTitle>
                  <CardDescription>Recent reviews and ratings from your customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="border-b pb-4 last:border-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">Priya Sharma</p>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star
                                key={j}
                                className={`h-4 w-4 ${
                                  j < 5 - (i % 2) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {
                            [
                              "The tomatoes were incredibly fresh and flavorful! Will definitely order again.",
                              "Great quality produce, but delivery was a bit delayed.",
                              "The organic spinach was amazing. So much better than supermarket produce!",
                              "Love supporting local farmers. The vegetables were excellent quality.",
                            ][i]
                          }
                        </p>
                        <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
