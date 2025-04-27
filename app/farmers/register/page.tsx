import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Leaf, Upload } from "lucide-react"

export default function FarmerRegistration() {
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
      </header>
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Farmer Community
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect directly with consumers, set fair prices, and get the value you deserve for your hard work.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <span className="font-bold text-green-600">1</span>
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold">Register Your Farm</h3>
                    <p className="text-sm text-gray-500">
                      Create your profile with details about your farm and farming practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <span className="font-bold text-green-600">2</span>
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold">List Your Products</h3>
                    <p className="text-sm text-gray-500">
                      Add your produce with details, photos, and set your own fair prices.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <span className="font-bold text-green-600">3</span>
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold">Receive Orders</h3>
                    <p className="text-sm text-gray-500">Get notified when customers place orders for your products.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <span className="font-bold text-green-600">4</span>
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold">Deliver & Get Paid</h3>
                    <p className="text-sm text-gray-500">
                      Fulfill orders and receive payments directly to your account.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-green-50 p-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-green-100 p-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-medium">Why Join FarmDirect?</h3>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Get up to 80% of the final selling price (vs. 20-30% in traditional chains)</li>
                      <li>• Set your own prices based on your costs and fair profit margins</li>
                      <li>• Build direct relationships with your customers</li>
                      <li>• Reduce food waste by harvesting based on actual demand</li>
                      <li>• Free to join with simple, transparent fees on sales</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold">Register Your Farm</h2>
                  <p className="text-sm text-gray-500">Fill out the form below to start your journey with FarmDirect</p>
                </div>
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="farm-name">Farm Name</Label>
                    <Input id="farm-name" placeholder="Enter your farm name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="farmer-name">Your Name</Label>
                    <Input id="farmer-name" placeholder="Enter your full name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="location">Farm Location</Label>
                    <Input id="location" placeholder="Enter your farm address" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">About Your Farm</Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us about your farm, your story, and your farming practices"
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>What do you grow?</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Vegetables", "Fruits", "Grains", "Dairy", "Spices", "Other"].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <Checkbox id={`item-${item.toLowerCase()}`} />
                          <Label htmlFor={`item-${item.toLowerCase()}`} className="font-normal">
                            {item}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Farming Practices</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["Organic", "Natural", "Traditional", "Pesticide-free", "Sustainable", "Other"].map(
                        (practice) => (
                          <div key={practice} className="flex items-center space-x-2">
                            <Checkbox id={`practice-${practice.toLowerCase()}`} />
                            <Label htmlFor={`practice-${practice.toLowerCase()}`} className="font-normal">
                              {practice}
                            </Label>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="farm-photos">Farm Photos</Label>
                    <div className="flex items-center justify-center w-full">
                      <label
                        htmlFor="farm-photos"
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                      >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-gray-500" />
                          <p className="mb-2 text-sm text-gray-500">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                        </div>
                        <input id="farm-photos" type="file" className="hidden" multiple />
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm font-normal">
                      I agree to the{" "}
                      <Link href="#" className="text-green-600 hover:underline">
                        terms and conditions
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-green-600 hover:underline">
                        privacy policy
                      </Link>
                    </Label>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Register as a Farmer</Button>
                </div>
              </div>
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
