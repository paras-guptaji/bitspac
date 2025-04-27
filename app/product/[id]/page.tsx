import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Leaf, MapPin, Calendar, Truck, ShieldCheck, Star, ChevronRight, User, Clock } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold">FarmDirect</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            For Farmers
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            For Buyers
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About Us
          </Link>
        </nav>
        <div className="ml-4 flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" size="sm">
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Sign Up
            </Button>
          </Link>
        </div>
      </header>
      <main className="flex-1 py-6 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-1 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/marketplace" className="hover:text-gray-900">
              Marketplace
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/marketplace?category=vegetables" className="hover:text-gray-900">
              Vegetables
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900">Organic Tomatoes</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src="/placeholder.svg?height=500&width=500&text=Product"
                  alt="Organic Tomatoes"
                  width={500}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="rounded-md overflow-hidden border cursor-pointer">
                    <Image
                      src={`/placeholder.svg?height=100&width=100&text=Image ${i + 1}`}
                      alt={`Product image ${i + 1}`}
                      width={100}
                      height={100}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-500">Riverside Farm, Karnataka</span>
                </div>
                <h1 className="text-3xl font-bold">Organic Tomatoes</h1>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-500">(24 reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-3xl font-bold">₹80/kg</div>
                <div className="text-sm text-gray-500 line-through">₹120/kg</div>
                <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">33% off</div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-green-600" />
                  <span>Harvested: 2 days ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-green-600" />
                  <span>Delivery: Available within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-green-600" />
                  <span>Quality: Premium Grade</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    -
                  </Button>
                  <span className="w-12 text-center">1 kg</span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    +
                  </Button>
                </div>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">Add to Cart</Button>
              </div>

              <div className="border rounded-lg p-4 bg-green-50">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Direct from Farmer</h3>
                    <p className="text-sm text-gray-500">
                      By purchasing this product, 85% of your payment goes directly to the farmer, compared to the
                      typical 20-30% in traditional supply chains.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" className="mb-12">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Product Details</TabsTrigger>
              <TabsTrigger value="farm">Farm Information</TabsTrigger>
              <TabsTrigger value="journey">Supply Chain</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="p-4 border rounded-lg mt-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">About this product</h3>
                <p>
                  These organic tomatoes are grown using traditional farming methods without the use of synthetic
                  pesticides or fertilizers. They are harvested at peak ripeness to ensure maximum flavor and
                  nutritional value.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium">Specifications</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Variety: Roma</li>
                      <li>Color: Bright Red</li>
                      <li>Size: Medium</li>
                      <li>Taste: Sweet with balanced acidity</li>
                      <li>Shelf life: 7-10 days</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Certifications</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Organic Certified</li>
                      <li>Pesticide-Free</li>
                      <li>Non-GMO</li>
                      <li>Sustainably Farmed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="farm" className="p-4 border rounded-lg mt-2">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <User className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Riverside Farm</h3>
                    <p className="text-sm text-gray-500">Farming since 1998 • Karnataka, India</p>
                  </div>
                </div>
                <p>
                  Riverside Farm is a family-owned organic farm located along the banks of the Kaveri River. For over 25
                  years, the Kumar family has been growing vegetables using traditional methods passed down through
                  generations, combined with modern sustainable farming practices.
                </p>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=800&text=Farm Location"
                    alt="Farm location map"
                    width={800}
                    height={400}
                    className="object-cover"
                  />
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Farming Practices</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Organic composting</li>
                      <li>Crop rotation</li>
                      <li>Natural pest control</li>
                      <li>Water conservation</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Other Products</h4>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li>Organic Cucumbers</li>
                      <li>Bell Peppers</li>
                      <li>Eggplants</li>
                      <li>Green Beans</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium">Contact Farmer</h4>
                    <Button className="w-full mt-2 bg-green-600 hover:bg-green-700">Message Farmer</Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="journey" className="p-4 border rounded-lg mt-2">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Track Your Food's Journey</h3>
                <p>
                  Every step of your food's journey from farm to table is tracked and verified using our blockchain
                  technology. This ensures complete transparency and traceability.
                </p>
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200"></div>
                  <div className="space-y-8 relative">
                    <div className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center z-10">
                        <Leaf className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Harvested at Riverside Farm</h4>
                          <span className="text-sm text-gray-500">• 2 days ago</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Tomatoes were hand-picked at peak ripeness by farmer Rajesh Kumar.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center z-10">
                        <ShieldCheck className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Quality Verification</h4>
                          <span className="text-sm text-gray-500">• 2 days ago</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Produce inspected and certified for quality, size, and organic standards.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-600 flex items-center justify-center z-10">
                        <Truck className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">In Transit to Local Hub</h4>
                          <span className="text-sm text-gray-500">• 1 day ago</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Transported in temperature-controlled vehicle to maintain freshness.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-200 flex items-center justify-center z-10">
                        <MapPin className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 pt-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">Available at Local Hub</h4>
                          <span className="text-sm text-gray-500">• Today</span>
                        </div>
                        <p className="text-sm text-gray-500">
                          Ready for delivery or pickup from our local distribution center.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="p-4 border rounded-lg mt-2">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <Button variant="outline">Write a Review</Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold">4.8</div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="ml-2 text-sm text-gray-500">5 stars (18)</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 text-gray-300" />
                      <span className="ml-2 text-sm text-gray-500">4 stars (4)</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <Star className="h-5 w-5 text-gray-300" />
                      <Star className="h-5 w-5 text-gray-300" />
                      <span className="ml-2 text-sm text-gray-500">3 stars (2)</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="border-b pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center">
                            <User className="h-4 w-4 text-gray-600" />
                          </div>
                          <div>
                            <div className="font-medium">Priya Sharma</div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>2 weeks ago</span>
                        </div>
                      </div>
                      <p className="mt-2 text-sm">
                        These tomatoes are incredibly fresh and flavorful! You can really taste the difference compared
                        to supermarket tomatoes. I love knowing exactly where my food comes from and that I'm supporting
                        local farmers directly.
                      </p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Similar Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border shadow-sm">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=200&width=200&text=Product ${i + 1}`}
                      alt={`Product ${i + 1}`}
                      width={200}
                      height={200}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-green-600" />
                      <span className="text-xs text-gray-500">Riverside Farm</span>
                    </div>
                    <h3 className="font-medium">Organic Bell Peppers</h3>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-medium text-sm">₹95/kg</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-green-600" />
          <p className="text-sm text-gray-500">© 2024 FarmDirect. All rights reserved.</p>
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <Link className="text-sm hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </footer>
    </div>
  )
}
