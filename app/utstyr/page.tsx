"use client"

import { useState, useEffect, Suspense } from "react"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { equipmentData } from "@/lib/data";

// Get unique categories for tabs
const categories = [...new Set(equipmentData.map((item) => item.kategori))]

function UtstyrContent() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [activeTab, setActiveTab] = useState(categoryParam || "all")
  const [filteredEquipment, setFilteredEquipment] = useState(equipmentData)

  // Filter equipment when tab changes
  useEffect(() => {
    if (activeTab === "all") {
      setFilteredEquipment(equipmentData)
    } else {
      setFilteredEquipment(equipmentData.filter((item) => item.kategori === activeTab))
    }
  }, [activeTab])

  // Set initial tab based on URL parameter
  useEffect(() => {
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveTab(categoryParam)
    }
  }, [categoryParam])

  return (
    <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid grid-flow-col auto-cols-auto gap-x-4 bg-orange-100">
          <TabsTrigger value="all">Alt</TabsTrigger>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value={activeTab} className="mt-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEquipment.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={item.bilde || "/globe.svg"}
                  alt={item.modell}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{item.modell}</CardTitle>
                  <Badge variant="outline" className="bg-orange-100">{item.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">{item.kategori}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Lån nå</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default function Utstyr() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vårt Utstyr</h1>
                <p className="max-w-[700px] text-gray-800 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Se gjennom vårt brede utvalg av høykvalitets IT-utstyr tilgjengelig for utleie. Fra bærbare datamaskiner til projektorer,
                  vi har alt du trenger.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <Suspense fallback={<div>Loading...</div>}>
              <UtstyrContent />
            </Suspense>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
