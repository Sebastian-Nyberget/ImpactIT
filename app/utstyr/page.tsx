"use client"

import { useState, useEffect } from "react"
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

export default function Utstyr() {
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
            <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-flow-col auto-cols-auto gap-x-4 bg-orange-100">
                  <TabsTrigger value="all">Alt</TabsTrigger>
                  {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category === "Skjerm"
                        ? "Skjerm"
                        : category === "Nettbrett"
                        ? "Nettbrett"
                        : category === "Mobiltelefon"
                        ? "Mobiltelefon"
                        : category === "Headset"
                        ? "Headset"
                        : category === "Kamera"
                        ? "Kamera"
                        : category === "Projektor"
                        ? "Projektor"
                        : category}
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
                          src={item.bilde || "/placeholder.svg"}
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
                        <p className="text-sm text-gray-500">
                          {item.kategori === "Laptop" &&
                            "Kraftig og bærbar dataløsning for profesjonelle på farten."}
                          {item.kategori === "Skjerm" &&
                            "Høykvalitetsskjerm for økt produktivitet og visuell opplevelse."}
                          {item.kategori === "Nettbrett" &&
                            "Allsidig nettbrett for både jobb og underholdning."}
                          {item.kategori === "Projektor" &&
                            "Profesjonell projektor for presentasjoner og medievisning."}
                          {item.kategori === "Kamera" &&
                            "Krystallklar video for virtuelle møter og innholdsskaping."}
                          {item.kategori === "Headset" &&
                            "Førsteklasses lydopplevelse med støyreduksjonsteknologi."}
                          {item.kategori === "Mobiltelefon" &&
                            "Siste smarttelefon med avanserte funksjoner og muligheter."}
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">Lån nå</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 bg-orange-100">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Tilpassede utstyrsløsninger</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ser du ikke det du leter etter? Vi tilbyr skreddersydde utstyrspakker for deg
                    behov. Kontakt teamet vårt for å diskutere dine behov.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="w-full sm:w-auto">Ta kontakt</Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    Se leievilkår
                  </Button>
                </div>
              </div>
              <div className="space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <h3 className="text-xl font-bold">Utleiefordeler</h3>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Fleksible leieperioder (daglig, ukentlig, månedlig)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Gratis levering og oppsett for bestillinger over 5000 NOK</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Teknisk støtte følger med all utleie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Vedlikehold og reparasjoner dekkes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Mulighet for kjøp av utstyr etter leieperioden</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
