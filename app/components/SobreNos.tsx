import Image from "next/image";
import Link from "next/link";

export default function SobreNos() {
    return (
        <section className="w-full bg-purple-brand px-6 md:px-16 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 text-white">
            <div className="w-full md:w-1/2 flex justify-center items-center">
                <div className="relative w-70 h-40 sm:w-105 sm:h-75 md:w-125 md:h-90">
                    <Image
                        src="/assets/grupoTechtins.jpeg"
                        alt="Foto em grupo dos membros Techtins"
                        fill
                        sizes="(max-width: 768px) 280px, 500px"
                        className="object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                        priority
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 text-center md:text-left flex flex-col justify-center gap-4 md:gap-6">

                <div className="flex items-center justify-center md:justify-start gap-4">
                    <h2 className="font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-wider leading-tight">
                        SOBRE NÓS
                    </h2>
                    <div className="hover:scale-110 transition-all duration-300 animate-pulse">
                        <Image
                            width={40}
                            height={40}
                            src="/assets/logoT.png"
                            alt="Logo T Techtins"
                            className="w-8 h-8 md:w-12 md:h-12 object-contain"
                        />
                    </div>
                </div>

                <p className="font-montserrat text-xs sm:text-sm md:text-base leading-relaxed text-gray-100 max-w-xl mx-auto md:mx-0 opacity-90 text-justify md:text-left">
                    Somos uma Empresa Júnior de Tecnologia vinculada à UNITINS. Desde 2024,
                    formada por estudantes de Sistemas de Informação, desenvolvemos tecnologia de
                    ponta com o preço acessível que o seu negócio precisa para crescer.
                    Nossa missão é: inovação e impacto social através da tecnologia.
                </p>

                <div className="mt-2 md:mt-4">
                    <Link
                        href="/saibaMais"
                        className="inline-block px-8 py-2.5 border-2 border-white text-white font-medium rounded-full transition-all duration-300 hover:bg-white hover:text-purple-brand shadow-lg text-sm md:text-base"
                    >
                        Saiba mais
                    </Link>
                </div>
            </div>

        </section>
    );
}