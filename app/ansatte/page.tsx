import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Mail, Linkedin, Phone } from "lucide-react"
import { ansatteData } from "@/lib/data";

export default function Ansatte() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Våre ansatte</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  De dedikerte fagfolkene bak ImpactITs suksess. Teamet vårt er forpliktet til å tilby eksepsjonell
                  Utleie av IT-utstyr.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {ansatteData.map((ansatt) => (
                  <CarouselItem key={ansatt.id} className="pl-4 sm:basis-1/2 md:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="flex flex-col items-center p-6">
                        <Image
                          src={ansatt.image || "/globe.svg"}
                          alt={ansatt.name}
                          width={120}
                          height={120}
                          className="rounded-full object-cover mb-4"
                        />
                        <div className="space-y-2 text-center">
                          <h3 className="text-xl font-bold">{ansatt.name}</h3>
                          <p className="text-sm text-gray-500">{ansatt.position}</p>
                        </div>
                        <p className="text-sm text-gray-600 mt-3 text-center line-clamp-4">{ansatt.bio}</p>
                        <div className="flex gap-4 pt-4 mt-auto">
                          <Link href={`mailto:${ansatt.email}`} className="text-gray-500 hover:text-gray-900">
                            <Mail className="h-5 w-5" />
                            <span className="sr-only">Email</span>
                          </Link>
                          <Link href={`tel:${ansatt.phone}`} className="text-gray-500 hover:text-gray-900">
                            <Phone className="h-5 w-5" />
                            <span className="sr-only">Telefon</span>
                          </Link>
                          <Link
                            href={ansatt.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span className="sr-only">LinkedIn</span>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative transform-none" />
                <CarouselNext className="relative transform-none" />
              </div>
            </Carousel>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Bli med</h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Vi er alltid på utkikk etter dyktige individer for å bli med i vårt voksende team. Sjekk ut vår nåværende
                  åpninger.
                </p>
              </div>
              <Button asChild size="lg" className="mt-6">
                <Link href="#">Se åpne stillinger</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
