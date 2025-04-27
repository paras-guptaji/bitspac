import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Leaf, TrendingUp, ShieldCheck, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Direct from Farm to Table
                </h1>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Empowering farmers with fair prices and connecting consumers with fresh, traceable produce. Cut out
                  the middlemen and support local agriculture.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="/marketplace">
                    <Button className="bg-green-600 hover:bg-green-700">Browse Marketplace</Button>
                  </Link>
                  <Link href="/farmers/register">
                    <Button variant="outline">Register as a Farmer</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Farmers working in fields"
                  width={800}
                  height={500}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How FarmDirect Works</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform creates transparency and eliminates unnecessary middlemen in the agricultural supply
                  chain.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Farmers List Produce</h3>
                  <p className="text-gray-500">
                    Farmers create profiles and list their produce with details on farming practices, harvest dates, and
                    fair prices.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Transparent Pricing</h3>
                  <p className="text-gray-500">
                    See exactly how prices are set and how much goes directly to farmers, with no hidden fees or
                    markups.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 border rounded-lg p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                  <ShieldCheck className="h-6 w-6 text-green-600" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Verified Quality</h3>
                  <p className="text-gray-500">
                    All produce is verified for quality and farming practices, with reviews from previous buyers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Track Your Food's Journey</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our blockchain-based tracking system lets you see exactly where your food comes from, how it was
                  grown, and every step of its journey to your table.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-600" />
                    <span>Farm location and growing conditions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span>Meet the farmers who grew your food</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <span>Verified farming practices and certifications</span>
                  </div>
                </div>
                <Link href="/how-it-works">
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=800"
                  alt="Supply chain tracking visualization"
                  width={800}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse some of our freshest offerings directly from local farmers
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg border shadow-sm">
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=Product ${i}`}
                      alt={`Product ${i}`}
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
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/marketplace">
                <Button variant="outline">View All Products</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Join Our Community</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Whether you're a farmer looking to sell directly or a consumer seeking fresh, traceable produce,
                  FarmDirect connects you to a community that values transparency and fairness.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/farmers/register">
                  <Button className="bg-green-600 hover:bg-green-700">Register as a Farmer</Button>
                </Link>
                <Link href="/signup">
                  <Button variant="outline">Sign Up as a Buyer</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
