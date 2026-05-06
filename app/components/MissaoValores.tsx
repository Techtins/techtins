import Image from "next/image";
import {
    Target,
    Lightbulb,
    BookOpen,
    BarChart2,
    Check,
    Heart,
    Star
} from "lucide-react";

export default function MissaoVisaoValores() {
    const items = [
        {
            title: "Destaque profissional",
            image: "/assets/grupo.jpg",
        },
        {
            title: "Formação de líderes",
            image: "/assets/participacaoEventos.png",
        },
        {
            title: "Desenvolvimento de habilidades",
            image: "/assets/reuniao.jpeg",
        },
    ];

    const valores = [
        { title: "Compromisso com o aprendizado", icon: BookOpen },
        { title: "Inovação e melhoria constante", icon: BarChart2 },
        { title: "Transparência e qualidade nos serviços", icon: Check },
        { title: "Trabalho em equipe e colaboração", icon: Heart },
        { title: "Protagonismo estudantil e espírito empreendedor", icon: Star },
    ];

    return (
        <div className="w-full bg-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto bg-purple-brand rounded-4xl p-8 md:p-12 text-white shadow-xl mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-extrabold tracking-tight">MISSÃO</h3>
                        </div>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                            Desenvolver soluções tecnológicas eficientes, inovadoras e contribuir para a formação dos membros da Techtins.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-white/10 rounded-full">
                                <Lightbulb className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-extrabold tracking-tight">VISÃO</h3>
                        </div>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                            Ser reconhecida como empresa júnior de referência no Tocantins, destacando-se pela excelência nos serviços e formação profissional.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white/5 rounded-2xl p-4 border border-white/10 transition-transform duration-300 hover:scale-[1.02]"
                        >
                            <div className="relative w-full h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden mb-5 shadow-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>
                            <h4 className="font-bold text-lg text-white text-center">
                                {item.title}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-[#331c5e] tracking-tight">
                        VALORES
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                    {valores.map((val, index) => {
                        const Icon = val.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-gray-100 p-6 rounded-3xl border border-gray-200/50 text-center transition-transform duration-300 hover:scale-105 shadow-sm"
                            >
                                <div className="p-4 bg-white rounded-full shadow-sm mb-6">
                                    <Icon className="w-8 h-8 text-[#331c5e]" />
                                </div>
                                <p className="font-bold text-xs sm:text-sm text-[#331c5e] leading-snug">
                                    {val.title}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}