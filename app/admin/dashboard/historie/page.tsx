import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Search,
  Filter,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { utlånData } from "@/lib/data";

export default function Utlån() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Utlån Historie</h1>
          <p className="text-gray-500">
            Se og administrer alle leieavtaler for utstyr.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Eksporter
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Leieavtaler</CardTitle>
          <CardDescription>
            En total av {utlånData.length} funnet leieavtaler.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Søk utlån..."
                className="pl-8"
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alt</SelectItem>
                  <SelectItem value="aktive">Aktive</SelectItem>
                  <SelectItem value="returnerte">Returnerte</SelectItem>
                  <SelectItem value="forfalt">Forfalt</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="newest">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Nyeste Først</SelectItem>
                  <SelectItem value="oldest">Eldste Først</SelectItem>
                  <SelectItem value="amount-high">
                    Kostnad (Høy til Lav)
                  </SelectItem>
                  <SelectItem value="amount-low">
                    Kostnad (Lav til Høy)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utlån ID</TableHead>
                  <TableHead>Bruker</TableHead>
                  <TableHead>Utstyr</TableHead>
                  <TableHead>Start Dato</TableHead>
                  <TableHead>Slutt Dato</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Kostnad</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {utlånData.map((rental) => (
                  <TableRow key={rental.id}>
                    <TableCell className="font-medium">{rental.id}</TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{rental.user.name}</div>
                        <div className="text-sm text-gray-500">
                          {rental.user.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{rental.equipment}</TableCell>
                    <TableCell>{rental.startDate}</TableCell>
                    <TableCell>{rental.endDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          rental.status === "Aktive"
                            ? "default"
                            : rental.status === "Returnerte"
                            ? "outline"
                            : "destructive"
                        }
                      >
                        {rental.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      {rental.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
              Viser <strong>1</strong> til <strong>8</strong> av{" "}
              <strong>8</strong> resultater
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                <ChevronLeft className="h-4 w-4 mr-1" />
                Tidligere
              </Button>
              <Button variant="outline" size="sm" disabled>
                Neste
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
