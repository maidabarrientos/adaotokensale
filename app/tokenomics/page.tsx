import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TokenomicsPage() {
  return (
    <div className="container py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">ADAO Tokenomics</h1>
          <p className="text-muted-foreground">
            Comprehensive overview of ADAO token distribution and economics
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Token Details</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Ticker</TableCell>
                  <TableCell>ADAO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Total Supply</TableCell>
                  <TableCell>1,000,000,000 ADAO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Initial Price</TableCell>
                  <TableCell>$0.0062</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Blockchain</TableCell>
                  <TableCell>Base Chain and Ethereum</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Token Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead>Allocation</TableHead>
                  <TableHead>Description</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Asset Acquisition</TableCell>
                  <TableCell>30%</TableCell>
                  <TableCell>Digital native assets acquisition and development</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Community Partnerships</TableCell>
                  <TableCell>30%</TableCell>
                  <TableCell>To foster partnerships and growth within the ecosystem</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Treasury</TableCell>
                  <TableCell>18%</TableCell>
                  <TableCell>Reserved for security, incentives, and governance</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Team</TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>Team, advisors, and foundational contributors</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Liquidity Pool</TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>DEX liquidity to maintain market stability</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Impact Program</TableCell>
                  <TableCell>2%</TableCell>
                  <TableCell>Funded initiatives for ecosystem sustainability</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Token Sale Stages</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Stage</TableHead>
                  <TableHead>Allocation</TableHead>
                  <TableHead>Price (USD)</TableHead>
                  <TableHead>Supply</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Seed Sale</TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>$0.0062</TableCell>
                  <TableCell>100M ADAO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Strategic Private Sale</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell>$0.0080</TableCell>
                  <TableCell>50M ADAO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Public Sale on DEX</TableCell>
                  <TableCell>5%</TableCell>
                  <TableCell>$0.0100</TableCell>
                  <TableCell>50M ADAO</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}