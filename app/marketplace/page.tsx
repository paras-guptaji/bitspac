import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Search, MapPin, Leaf, ShieldCheck, Star, ChevronDown } from "lucide-react"

export default function Marketplace() {
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
      <div className="flex flex-col md:flex-row flex-1">
        <aside className="w-full md:w-64 border-r p-4 md:p-6">
          <div className="sticky top-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-lg font-semibold">Filters</h2>
              <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                <Search className="h-4 w-4 text-gray-500" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Categories</h3>
              <div className="space-y-1">
                {["Vegetables", "Fruits", "Grains", "Dairy", "Spices"].map((category) => (
                  <div key={category} className="flex items-center gap-2">
                    <Checkbox id={`category-${category.toLowerCase()}`} />
                    <Label htmlFor={`category-${category.toLowerCase()}`} className="font-normal">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Price Range</h3>
              <Slider defaultValue={[50]} max={500} step={10} />
              <div className="flex items-center justify-between text-sm">
                <span>₹0</span>
                <span>₹500</span>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Farming Practices</h3>
              <div className="space-y-1">
                {["Organic", "Natural", "Pesticide-free", "Traditional"].map((practice) => (
                  <div key={practice} className="flex items-center gap-2">
                    <Checkbox id={`practice-${practice.toLowerCase()}`} />
                    <Label htmlFor={`practice-${practice.toLowerCase()}`} className="font-normal">
                      {practice}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium">Distance</h3>
              <div className="space-y-1">
                {["Within 10km", "Within 25km", "Within 50km", "Within 100km"].map((distance) => (
                  <div key={distance} className="flex items-center gap-2">
                    <Checkbox id={`distance-${distance.toLowerCase().replace(/\s+/g, "-")}`} />
                    <Label htmlFor={`distance-${distance.toLowerCase().replace(/\s+/g, "-")}`} className="font-normal">
                      {distance}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700">Apply Filters</Button>
          </div>
        </aside>
        <main className="flex-1 p-4 md:p-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-2xl font-bold">Marketplace</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Sort by:</span>
                  <Button variant="outline" size="sm" className="gap-1">
                    Freshness <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">View:</span>
                  <Button variant="outline" size="sm" className="gap-1">
                    Grid <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border shadow-sm">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Product ${i + 1}`}
                      alt={`Product ${i + 1}`}
                      width={300}
                      height={300}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-500">Riverside Farm, Karnataka</span>
                    </div>
                    <h3 className="text-lg font-bold">Organic Tomatoes</h3>
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium">₹80/kg</span>
                      <div className="text-sm text-gray-500">Harvested: 2 days ago</div>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <Star className="h-4 w-4 text-gray-300" />
                      </div>
                      <span className="text-sm text-gray-500">(24)</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center gap-1">
                        <Leaf className="h-4 w-4 text-green-600" />
                        <span className="text-xs">Organic</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ShieldCheck className="h-4 w-4 text-green-600" />
                        <span className="text-xs">Verified</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="sm"
                  className={page === 1 ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {page}
                </Button>
              ))}
            </div>
          </div>
        </main>
      </div>
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
