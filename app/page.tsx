"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Impacto from "./components/Impacto";
import SobreNos from "./components/SobreNos";
import Servicos from "./components/Servicos";
import Portfolio from "./components/Portfolio";

import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px) rotate(-1deg); }
          50%      { transform: translateY(-14px) rotate(1deg); }
        }
        .img-bob { animation: floatBob 5s ease-in-out infinite; }
      `}</style>

      <div className="bg-white text-slate-900 font-sans min-h-screen">
        <main>
          <Navbar variant="light" />

          <section id="home" className="px-6 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto min-h-[70vh] gap-12 mt-8 md:mt-0 relative overflow-hidden">

            <div
              className="absolute inset-0 pointer-events-none opacity-50"
              style={{
                backgroundImage: "radial-gradient(circle, rgba(94,42,132,0.045) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="text-center md:text-left max-w-2xl relative z-10">
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
                SOLUÇÃO <br className="hidden md:block" />
                <span className="text-purple-brand">EXCELÊNCIA</span> <br className="hidden md:block" />
                INOVAÇÃO
              </h1>

              <p className="mt-6 text-gray-700 text-sm md:text-base leading-relaxed text-justify md:text-left max-w-xl mx-auto md:mx-0">
                Desenvolvemos soluções sob medida para transformar seu negócio. Tecnologia de ponta com o preço acessível que você precisa para crescer.
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-6">
                {["Sistemas Web", "Consultoria", "Tecnologia"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="/faleConosco"
                  className="inline-flex px-8 py-3.5 bg-slate-950 text-white font-bold rounded-full shadow-lg hover:bg-purple-brand transition-all duration-300 items-center justify-center gap-2 group text-sm uppercase tracking-wider"
                >
                  Começar agora
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/saibaMais"
                  className="text-xs font-semibold uppercase tracking-widest text-purple-900/70 hover:text-purple-900 transition-colors"
                >
                  Saiba mais
                </Link>
              </div>
            </div>

            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-100 md:h-100 shrink-0 flex items-center justify-center">

              <div
                className="absolute rounded-full opacity-60"
                style={{
                  width: '120%',
                  height: '120%',
                  background: "radial-gradient(circle, rgba(94,42,132,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="relative w-full h-full img-bob z-10">
                <Image
                  src="/assets/laptopCodigo.png"
                  alt="Computador com chaves e código"
                  fill
                  sizes="(max-width: 768px) 260px, 400px"
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </div>
            </div>
          </section>

          <SobreNos />
          <Servicos />
          <Portfolio />
          <Impacto />

        </main>
      </div>
    </>
  );
}