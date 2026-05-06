import { CodeXml, Send, Coffee, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const services = [
    {
        icon: CodeXml,
        title: "DESENVOLVIMENTO",
        description: "Desenvolvemos sites profissionais que realçam sua marca, serviços e ideias. Presença digital que garante visibilidade e clientes",
        number: "01",
    },
    {
        icon: Coffee,
        title: "CONSULTORIA",
        description: "Não sabe por onde começar? Identificamos as ferramentas certas para automatizar seu negócio e reduzir custos operacionais.",
        number: "02",
    },
    {
        icon: Send,
        title: "PROCESSOS",
        description: "Organizamos o fluxo de trabalho da sua empresa para eliminar gargalos e aumentar a produtividade da sua equipe.",
        number: "03",
    },
];

export default function Servicos() {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <>
            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(28px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .svc-card {
                    opacity: 0;
                    animation: fadeInUp 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards;
                }
                .svc-card:nth-child(1) { animation-delay: 0.10s; }
                .svc-card:nth-child(2) { animation-delay: 0.22s; }
                .svc-card:nth-child(3) { animation-delay: 0.34s; }

                .svc-icon {
                    transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
                .svc-card:hover .svc-icon {
                    transform: scale(1.14) rotate(-8deg);
                }

                .svc-line {
                    width: 0;
                    transition: width 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.05s;
                }
                .svc-card:hover .svc-line { width: 44px; }

                .svc-cta {
                    opacity: 0;
                    transform: translateY(6px);
                    transition: opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s;
                }
                .svc-card:hover .svc-cta {
                    opacity: 1;
                    transform: translateY(0);
                }

                .svc-overlay {
                    opacity: 0;
                    transition: opacity 0.35s ease;
                }
                .svc-card:hover .svc-overlay { opacity: 1; }
            `}</style>

            <section
                id="servicos"
                className="w-full min-h-screen bg-white px-4 md:px-16 py-16 flex flex-col justify-center items-center"
            >
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="font-montserrat font-extrabold text-4xl md:text-5xl text-purple-brand mb-12 text-left tracking-wider leading-tight">
                        SERVIÇOS
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, i) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={i}
                                    className="svc-card relative bg-gray-100 p-8 rounded-3xl flex flex-col items-start text-left overflow-hidden cursor-pointer
                                               transition-all duration-300 ease-out
                                               hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-200/50"
                                    onMouseEnter={() => setHovered(i)}
                                    onMouseLeave={() => setHovered(null)}
                                >
                                    <div className="svc-overlay absolute inset-0 bg-linear-to-br from-purple-50/80 to-transparent rounded-3xl pointer-events-none" />

                                    <span className="absolute bottom-5 right-6 font-montserrat font-extrabold text-[7rem] leading-none text-purple-brand opacity-[0.05] select-none pointer-events-none">
                                        {service.number}
                                    </span>

                                    <div className="svc-icon bg-purple-brand p-4 rounded-2xl text-white mb-6 w-16 h-16 flex items-center justify-center relative z-10">
                                        <Icon size={24} />
                                    </div>

                                    <div className="svc-line h-0.75 bg-purple-brand rounded-full mb-4 relative z-10" />

                                    <h3 className="font-montserrat font-extrabold text-lg text-purple-brand uppercase mb-3 tracking-wider relative z-10">
                                        {service.title}
                                    </h3>

                                    <p className="font-montserrat text-sm text-gray-700 leading-relaxed flex-1 relative z-10">
                                        {service.description}
                                    </p>

                                    <Link href="/faleConosco">
                                        <div className="svc-cta flex items-center gap-2 mt-5 text-purple-brand font-montserrat font-bold text-sm relative z-10">
                                            Saiba mais
                                            <ArrowRight size={15} />
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}