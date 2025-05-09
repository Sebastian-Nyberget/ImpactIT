import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Laptop,
  Monitor,
  Tablet,
  Headphones,
  Camera,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { checkRole } from "@/lib/server/utils";

export default async function Home() {
  const isAdmin = await checkRole("admin");
  return (
    <div className="flex flex-col min-h-screen">
      <Header isAdmin={isAdmin} />
      <main className="flex-1">
        <section className="w-full md:h-[900px] py-12 md:py-24 lg:py-32 xl:py-48 bg-orange-100">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Profesjonell IT Utstyr Utlån Service
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Få tilgang til den nyeste teknologien uten forpliktelse. Lei
                    bærbare datamaskiner, skjermer, nettbrett og mer for
                    bedriften din behov.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="/utstyr">
                      Finn utstyr <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/ansatte">Ansatte</Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/main.png"
                width={550}
                height={550}
                alt="IT Equipment"
                className="rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                  Hvorfor velge oss?
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ImpactIT Fordeler
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Vi tilbyr fleksible leieløsninger for alt ditt IT-utstyr behov
                  med ekspertstøtte og den nyeste teknologien.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3">
                  <Laptop className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Nyeste Teknologien</h3>
                <p className="text-center text-gray-500">
                  Tilgang til de nyeste modellene og banebrytende utstyr
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 bg-orange-200 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Fleksible vilkår</h3>
                <p className="text-center text-gray-600">
                  Daglig, ukentlig eller månedlig leiealternativer for å passe
                  dine behov
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-gray-100 p-3">
                  <Headphones className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Ekspert Support</h3>
                <p className="text-center text-gray-500">
                  Teknisk assistanse og vedlikehold følger med hver utleie
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-orange-100">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Utstyr Kategorier
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl">
                  Se gjennom vårt brede utvalg av høykvalitets IT-utstyr
                  tilgjengelig til leie
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 md:grid-cols-3 lg:grid-cols-6">
              <Link
                href="/utstyr?category=Laptop"
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <Laptop className="h-8 w-8" />
                <span className="text-sm font-medium">Laptop</span>
              </Link>
              <Link
                href="/utstyr?category=Skjerm"
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <Monitor className="h-8 w-8" />
                <span className="text-sm font-medium">Skjermer</span>
              </Link>
              <Link
                href="/utstyr?category=Nettbrett"
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <Tablet className="h-8 w-8" />
                <span className="text-sm font-medium">Nettbrett</span>
              </Link>
              <Link
                href="/utstyr?category=Projektor"
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <div className="h-8 w-8 flex items-center justify-center">
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
                  >
                    <path d="M5 7 3 5"></path>
                    <path d="M9 5 5 9"></path>
                    <path d="m13 5-8 8"></path>
                    <path d="m17 5-12 12"></path>
                    <path d="M21 5 5 21"></path>
                    <path d="M21 9 9 21"></path>
                    <path d="m21 13-4 4"></path>
                    <path d="m21 17-2 2"></path>
                  </svg>
                </div>
                <span className="text-sm font-medium">Projektor</span>
              </Link>
              <Link
                href="/utstyr?category=Kamera"
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <Camera className="h-8 w-8" />
                <span className="text-sm font-medium">Kamera</span>
              </Link>
              <Link
                href="/utstyr?category=Headset"
                className="flex flex-col items-center space-y-2 rounded-lg border bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <Headphones className="h-8 w-8" />
                <span className="text-sm font-medium">Headsets</span>
              </Link>
            </div>
            <div className="flex justify-center">
              <Button asChild size="lg">
                <Link href="/utstyr">Se alt av utstyr</Link>
              </Button>
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="w-full py-12 md:py-24 lg:py-32 bg-white border-t"
        >
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Kontakt Oss
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Har du spørsmål om våre utstyrsutleietjenester? Kom i
                    kontakt med teamet vårt.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <span className="text-gray-500">+47 123 45 678</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                    <span className="text-gray-500">support@impact-it.no</span>
                  </div>
                  <div className="flex items-center gap-2">
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
                      className="h-5 w-5"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-500">
                      Teknologiveien 22, 2815 Oslo, Norge
                    </span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-orange-100 p-6 shadow-sm">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="first-name"
                        className="text-sm font-medium leading-none"
                      >
                        Fornavn
                      </label>
                      <input
                        id="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Skriv inn..."
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="last-name"
                        className="text-sm font-medium leading-none"
                      >
                        Etternavn
                      </label>
                      <input
                        id="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Skriv inn..."
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Email..."
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none"
                    >
                      Melding
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Skriv inn din melding..."
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send inn
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
