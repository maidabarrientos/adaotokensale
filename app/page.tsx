import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ArrowRight, Coins, Users, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex-1">
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to the Future of{" "}
            <span className="text-primary">Autonomous Digital Assets</span>
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            ADAO is the native utility token of AgentDAO, designed to power a new
            generation of smart, autonomous digital assets.
          </p>
          <div className="space-x-4">
            <Button asChild size="lg">
              <Link href="/sale">
                Join Token Sale <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/tokenomics">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Card>
            <CardHeader>
              <Coins className="h-14 w-14 text-primary" />
              <CardTitle>Fixed Supply</CardTitle>
              <CardDescription>
                1 billion pre-mined tokens with controlled distribution
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-14 w-14 text-primary" />
              <CardTitle>Community Driven</CardTitle>
              <CardDescription>
                Proof-of-Contribution model rewards active participation
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-14 w-14 text-primary" />
              <CardTitle>Hybrid Model</CardTitle>
              <CardDescription>
                Combines blockchain, AI, and decentralized ownership
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  )
}