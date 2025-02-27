'use client'
import {Button} from "@/components/ui/button"
import {Card, CardContent} from "@/components/ui/card"
import {ChevronRight} from "lucide-react"
import Image from "next/image"
import {useState} from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const products = [
    {
        id: 1,
        name: "School Super App",
        description: "Empower Education with Web3",
        featuredImage: "/kbtc-superapp.png?height=300&width=500",
        features: [
            "Student-Parent Communication",
            "Point Wallet Integration",
            "Mini Apps Support",
            "Secure Profiles",
            "Blockchain-Backed Transactions w/ Stellar",
        ],
        screenshots: [
            "/kbtc-superapp.png?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
    {
        id: 2,
        name: "Drunk Duck",
        description:
            "A playful social app blending entertainment with decentralized functionality and community-driven experiences.",
        featuredImage: "/drunk-duck-superapp.png?height=300&width=500",
        features: [
            "Social Engagement",
            "Marketplace",
            "User Identity & Custom Avatars",
            "NFT Integration",
            "Point Wallet",
        ],
        screenshots: [
            "/drunk-duck-superapp.png?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
    {
        id: 3,
        name: "Invoice Discounting",
        featuredImage: "/short-term-asset-management.png?height=300&width=500",
        description: "A web3 solution that enables businesses to trade invoices and access liquidity more quickly.",
        features: [
            "Invoice Management",
            "Discounting & Factoring",
            "Point Wallet",
            "Invoice on Blockchain"
        ],
        screenshots: [
            "/short-term-asset-management.png?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
    {
        id: 4,
        name: "ShopperDoo",
        description: "A digital marketplace connecting sellers with buyers, offering seamless transactions and web3 perks.",
        featuredImage: "/placeholder.svg?height=300&width=500",
        features: [
            "Marketplace ",
            "Group Buy",
            "Point Wallet",
            "Professional Badges"
        ],
        screenshots: [
            "/placeholder.svg?height=300&width=500",
        ],
        video: "/placeholder.mp4",
    },
]

export default function ProductDetail({params}: { params: { id: string } }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


    const product = products.find((p) => p.id === Number.parseInt(params.id)) || products[0]

    return (

            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400">
                                    {product.name}
                                </h1>
                                <p className="max-w-[600px] text-gray-400 md:text-xl">{product.description}</p>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button
                                        size="lg"
                                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0"
                                    >
                                        Get Started
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                                    >
                                        Watch Demo
                                    </Button>
                                </div>
                            </div>
                            <div className="relative group">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                <Image
                                    src={product.featuredImage}
                                    width={550}
                                    height={550}
                                    alt={product.name}
                                    className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Key Features
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.features.map((feature, index) => (
                                <Card
                                    key={index}
                                    className="bg-black/50 border-gray-800 backdrop-blur-sm group hover:border-purple-500/50 transition-all duration-300"
                                >
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <div
                                                className="rounded-full bg-purple-500/10 p-3 w-12 h-12 flex items-center justify-center">
                                                <ChevronRight className="h-6 w-6 text-purple-400"/>
                                            </div>
                                            <p className="text-white group-hover:text-purple-400 transition-colors">{feature}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Screenshots Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Product Screenshots
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {product.screenshots.map((screenshot, index) => (
                                <div key={index} className="relative group">
                                    <div
                                        className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                                    <Image
                                        src={screenshot || "/placeholder.svg"}
                                        width={500}
                                        height={300}
                                        alt={`${product.name} screenshot ${index + 1}`}
                                        className="relative rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Demo Section */}
                <section
                    className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-gray-900 border-t border-gray-800">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                            Product Demo
                        </h2>
                        <div
                            className="relative aspect-video rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm overflow-hidden">
                            <div className="relative">
                                <HeroVideoDialog
                                    className="block dark:hidden"
                                    animationStyle="from-center"
                                    videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                                    thumbnailAlt="Hero Video"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    )
}

