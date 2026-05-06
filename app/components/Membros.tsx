"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Users, MapPin } from "lucide-react";

export interface DiretoriaItem {
    id: number;
    nome: string;
    cargo: string;
    setor: "Presidência" | "Secretaria Executiva" | "Conselho Fiscal" | "Projetos" | "Financeiro" | "Marketing" | "Capacitações";
    foto: string | null;
    responsabilidades: string;
    departamentoSecundario?: "Projetos" | "Financeiro" | "Marketing" | "Capacitações" | "Geral" | "Secretaria Executiva";
}

export interface Membro {
    id: number;
    nome: string;
    cargo: string;
    departamento: "Projetos" | "Financeiro" | "Marketing" | "Capacitações";
    foto: string | null;
    responsabilidades: string;
}

// dados
export const diretoria: DiretoriaItem[] = [
    {
        id: 1,
        nome: "Guilherme Barbosa",
        cargo: "Presidente",
        setor: "Presidência",
        foto: null,
        responsabilidades: "Liderança estratégica, representação institucional e tomada de decisões.",
        departamentoSecundario: "Geral",
    },
    {
        id: 2,
        nome: "Davi Suassuna",
        cargo: "Vice-Presidente",
        setor: "Presidência",
        foto: null,
        responsabilidades: "Apoio à presidência, coordenação interna e substituição nas ausências.",
        departamentoSecundario: "Geral",
    },
    {
        id: 3,
        nome: "Leticia Espindola",
        cargo: "Secretária Executiva",
        setor: "Secretaria Executiva",
        foto: null,
        responsabilidades: "Gestão documental, atas, comunicados e agenda institucional.",
    },
    {
        id: 4,
        nome: "Matheus Nardi",
        cargo: "Diretor de Projetos",
        setor: "Projetos",
        foto: null,
        responsabilidades: "Gestão do portfólio de projetos e metodologias ágeis.",
        departamentoSecundario: "Projetos",
    },
    {
        id: 5,
        nome: "Camila Brito",
        cargo: "Diretora Financeiro",
        setor: "Financeiro",
        foto: null,
        responsabilidades: "Gestão orçamentária e planejamento financeiro.",
        departamentoSecundario: "Financeiro",
    },
    {
        id: 6,
        nome: "Juliana Paz",
        cargo: "Diretora de Marketing",
        setor: "Marketing",
        foto: null,
        responsabilidades: "Estratégia de marca e comunicação institucional.",
        departamentoSecundario: "Marketing",
    },
    {
        id: 7,
        nome: "Maria Gabriela",
        cargo: "Diretora de Capacitações",
        setor: "Capacitações",
        foto: null,
        responsabilidades: "Desenvolvimento de talentos e trilhas de aprendizado.",
        departamentoSecundario: "Capacitações",
    },
    {
        id: 8,
        nome: "João Bosco",
        cargo: "Conselheiro Fiscal",
        setor: "Conselho Fiscal",
        foto: null,
        responsabilidades: "Fiscalização das contas, conformidade financeira e auditoria interna.",
    },
];

export const membros: Membro[] = [
    // --- Marketing ---
    { id: 201, nome: "Enzo Santos", cargo: "Analista de Marketing", departamento: "Marketing", foto: null, responsabilidades: "Criação de campanhas e análise de métricas." },
    { id: 202, nome: "Leonardo Mota", cargo: "Analista de Marketing", departamento: "Marketing", foto: null, responsabilidades: "Pesquisa de mercado e posicionamento." },
    { id: 203, nome: "Júlia Medeiros", cargo: "Analista de Marketing", departamento: "Marketing", foto: null, responsabilidades: "Gestão de conteúdo e redes sociais." },
    // --- Desenvolvimento (Projetos) ---
    { id: 301, nome: "Emannuel Beckman", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento de sistemas." },
    { id: 302, nome: "Leandro Tavares", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Implementação de features." },
    { id: 303, nome: "Victor Dias", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento frontend." },
    { id: 304, nome: "Gustavo Oliveira", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento backend." },
    { id: 305, nome: "Lucas Gabriel", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Otimização de performance." },
    { id: 306, nome: "Gabriel Reis", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Testes automatizados." },
    { id: 307, nome: "Alêkson Souza", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Modelagem de dados." },
    { id: 308, nome: "Júlio Cesar", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Lógica de programação." },
    { id: 309, nome: "Matheus Gama", cargo: "Desenvolvedor", departamento: "Projetos", foto: null, responsabilidades: "Desenvolvimento Full Stack." },
    // --- Financeiro ---
    { id: 401, nome: "Danilo Belém", cargo: "Desenvolvedor e Financeiro", departamento: "Financeiro", foto: null, responsabilidades: "Automação de processos financeiros." },
];

function getInitials(nome: string) {
    const parts = nome.trim().split(" ");
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

const DEPT_COLORS: Record<string, { from: string; to: string; accent: string }> = {
    Projetos: { from: "#7c3aed", to: "#5b21b6", accent: "#c4b5fd" },
    Financeiro: { from: "#6d28d9", to: "#4338ca", accent: "#a5b4fc" },
    Marketing: { from: "#9333ea", to: "#7c3aed", accent: "#e879f9" },
    Capacitações: { from: "#5b21b6", to: "#4f46e5", accent: "#818cf8" },
};

const SETOR_STYLE: Record<string, { from: string; to: string; badge: string }> = {
    "Presidência": { from: "#d97706", to: "#b45309", badge: "rgba(251,191,36,0.15)" },
    "Secretaria Executiva": { from: "#059669", to: "#047857", badge: "rgba(52,211,153,0.15)" },
    "Conselho Fiscal": { from: "#db2777", to: "#be185d", badge: "rgba(244,114,182,0.15)" },
    "Projetos": { from: "#7c3aed", to: "#5b21b6", badge: "rgba(124,58,237,0.15)" },
    "Financeiro": { from: "#6d28d9", to: "#4338ca", badge: "rgba(109,40,217,0.15)" },
    "Marketing": { from: "#9333ea", to: "#7c3aed", badge: "rgba(147,51,234,0.15)" },
    "Capacitações": { from: "#5b21b6", to: "#4f46e5", badge: "rgba(91,33,182,0.15)" },
};


function Avatar({ foto, nome, gradientFrom, gradientTo, size = "md" }: any) {
    const dim = { sm: 40, md: 56, lg: 64, xl: 80 }[size as "sm" | "md" | "lg" | "xl"];
    const fs = { sm: 11, md: 13, lg: 15, xl: 18 }[size as "sm" | "md" | "lg" | "xl"];

    return (
        <div className="rounded-full shrink-0 overflow-hidden flex items-center justify-center shadow-lg relative"
            style={{ width: dim, height: dim, background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`, boxShadow: `0 4px 20px ${gradientFrom}33` }}>
            {foto ? <Image src={foto} alt={nome} fill className="object-cover" sizes={`${dim}px`} /> :
                <span className="font-montserrat font-bold text-white select-none" style={{ fontSize: fs }}>{getInitials(nome)}</span>}
        </div>
    );
}

function NetworkOverlay({ leader, deptMembers, onClose }: { leader: DiretoriaItem; deptMembers: Membro[]; onClose: () => void }) {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const isGeneral = leader.departamentoSecundario === "Geral";
    const colors = !isGeneral && leader.departamentoSecundario ? DEPT_COLORS[leader.departamentoSecundario] : { from: "#d97706", to: "#b45309", accent: "#fbbf24" };
    const cx = 50, cy = 50;
    const radius = deptMembers.length <= 6 ? 32 : deptMembers.length <= 10 ? 36 : 40;

    const positions = deptMembers.map((_, i) => {
        const angle = (i / Math.max(deptMembers.length, 1)) * 2 * Math.PI - Math.PI / 2;
        return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
    });

    return (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/98 backdrop-blur-md">
            <button onClick={onClose} className="absolute top-5 right-5 w-10 h-10 rounded-full border border-gray-800 bg-gray-900/40 text-gray-400 flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all"><X size={17} /></button>
            <div className="text-center mb-8">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1 text-gray-500">Rede de Conexões</p>
                <h3 className="font-extrabold text-2xl md:text-3xl text-white uppercase tracking-tight">{isGeneral ? "Visão Geral da Empresa" : leader.departamentoSecundario}</h3>
                <p className="text-sm mt-1 text-gray-400">{leader.nome} · <span className="text-purple-400">{leader.cargo}</span></p>
            </div>
            <div className="relative w-full max-w-lg md:max-w-2xl" style={{ aspectRatio: "1/1", maxHeight: "65vh" }}>
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    {positions.map((pos, i) => (
                        <line key={i} x1={cx} y1={cy} x2={pos.x} y2={pos.y} stroke={hoveredId === deptMembers[i].id ? colors.accent : colors.from} strokeWidth={hoveredId === deptMembers[i].id ? 0.4 : 0.15} opacity={hoveredId === deptMembers[i].id ? 0.9 : 0.3} style={{ transition: "all 0.2s" }} />
                    ))}
                </svg>
                <div className="absolute -translate-x-1/2 -translate-y-1/2 z-10" style={{ left: `${cx}%`, top: `${cy}%` }}>
                    <Avatar foto={leader.foto} nome={leader.nome} gradientFrom={SETOR_STYLE[leader.setor].from} gradientTo={SETOR_STYLE[leader.setor].to} size="xl" />
                </div>
                {deptMembers.map((m, i) => (
                    <div key={m.id} className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer flex flex-col items-center" style={{ left: `${positions[i].x}%`, top: `${positions[i].y}%` }} onMouseEnter={() => setHoveredId(m.id)} onMouseLeave={() => setHoveredId(null)}>
                        {hoveredId === m.id && (
                            <div className="absolute bottom-full mb-3 z-30 rounded-xl px-3 py-2 bg-gray-900/95 border border-gray-800 shadow-2xl">
                                <p className="font-bold text-white text-[11px] whitespace-nowrap">{m.nome}</p>
                                <p className="text-[9px] whitespace-nowrap" style={{ color: DEPT_COLORS[m.departamento].accent }}>{m.cargo}</p>
                            </div>
                        )}
                        <Avatar foto={m.foto} nome={m.nome} gradientFrom={hoveredId === m.id ? DEPT_COLORS[m.departamento].from : "rgba(255,255,255,0.08)"} gradientTo={hoveredId === m.id ? DEPT_COLORS[m.departamento].to : "rgba(255,255,255,0.03)"} size="sm" />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default function Membros() {
    const [overlay, setOverlay] = useState<DiretoriaItem | null>(null);
    const diretoriaRow = useScrollRow();
    const membrosRow = useScrollRow();

    const networkMembers = overlay?.departamentoSecundario === "Geral"
        ? membros
        : membros.filter((m) => m.departamento === overlay?.departamentoSecundario);

    return (
        <div className="min-h-screen bg-black text-white px-6 md:px-16 py-16 md:py-20 font-montserrat overflow-x-hidden">
            <div className="max-w-7xl mx-auto space-y-20">
                <section>
                    <SectionHeading label="Diretoria" onPrev={() => diretoriaRow.scroll("left", diretoria.length)} onNext={() => diretoriaRow.scroll("right", diretoria.length)} />
                    <div ref={diretoriaRow.ref} className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
                        {diretoria.map((item) => (
                            <DiretoriaCard key={item.id} item={item} onClick={() => setOverlay(item)} />
                        ))}
                    </div>
                </section>

                <section>
                    <SectionHeading label="Time de membros" onPrev={() => membrosRow.scroll("left", membros.length)} onNext={() => membrosRow.scroll("right", membros.length)} />
                    <div ref={membrosRow.ref} className="flex gap-6 overflow-x-auto pb-8 no-scrollbar">
                        {membros.map((m) => (
                            <MembroCard key={m.id} membro={m} />
                        ))}
                    </div>
                </section>
            </div>
            {overlay && overlay.departamentoSecundario && (
                <NetworkOverlay leader={overlay} deptMembers={networkMembers} onClose={() => setOverlay(null)} />
            )}
        </div>
    );
}


function SectionHeading({ label, onPrev, onNext }: any) {
    return (
        <div className="flex items-end justify-between mb-8">
            <div>
                <h2 className="font-extrabold text-3xl md:text-5xl tracking-tight uppercase text-white leading-none">{label}</h2>
                <div className="mt-3 h-1 w-12 rounded-full bg-yellow-400" />
            </div>
            <div className="flex gap-3">
                <button onClick={onPrev} className="p-2.5 rounded-full border border-gray-800 bg-gray-900/40 text-gray-400 hover:bg-gray-800 hover:text-white transition-all"><ChevronLeft size={20} /></button>
                <button onClick={onNext} className="p-2.5 rounded-full border border-gray-800 bg-gray-900/40 text-gray-400 hover:bg-gray-800 hover:text-white transition-all"><ChevronRight size={20} /></button>
            </div>
        </div>
    );
}

function DiretoriaCard({ item, onClick }: { item: DiretoriaItem; onClick: () => void }) {
    const ss = SETOR_STYLE[item.setor];
    const hasNet = !!item.departamentoSecundario;
    return (
        <div onClick={hasNet ? onClick : undefined} className={`flex-none w-52 md:w-64 rounded-3xl p-6 border border-gray-800 bg-gray-900/30 backdrop-blur-sm transition-all duration-300 ${hasNet ? "cursor-pointer hover:bg-gray-900/60 hover:-translate-y-1 hover:border-gray-700/80" : ""}`}>
            <Avatar foto={item.foto} nome={item.nome} gradientFrom={ss.from} gradientTo={ss.to} size="lg" />
            <div className="mt-4">
                <span className="text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md mb-2 inline-block border border-transparent" style={{ background: ss.badge, color: ss.from }}>{item.setor}</span>
                <h4 className="font-bold text-white text-base leading-tight mt-1">{item.nome}</h4>
                <p className="text-xs text-gray-400 mt-0.5">{item.cargo}</p>
            </div>
            <p className="mt-4 text-[11px] text-gray-500 leading-relaxed line-clamp-3">{item.responsabilidades}</p>
            {hasNet && (
                <div className="mt-5 pt-4 border-t border-gray-800/60 flex items-center gap-2 text-purple-400">
                    <Users size={14} /><span className="text-[10px] font-bold tracking-wider uppercase">Explorar Rede</span>
                </div>
            )}
        </div>
    );
}

function MembroCard({ membro }: { membro: Membro }) {
    const c = DEPT_COLORS[membro.departamento];
    return (
        <div className="flex-none w-48 md:w-56 rounded-3xl p-6 border border-gray-800 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/60 hover:border-gray-700/80 transition-all duration-300">
            <Avatar foto={membro.foto} nome={membro.nome} gradientFrom={c.from} gradientTo={c.to} size="md" />
            <span className="text-[9px] font-bold uppercase tracking-wider mt-5 block" style={{ color: c.accent }}>{membro.departamento}</span>
            <h4 className="font-bold text-white text-sm mt-1">{membro.nome}</h4>
            <p className="text-xs text-gray-400 mt-0.5">{membro.cargo}</p>
            <p className="mt-4 text-[10px] text-gray-500 leading-relaxed line-clamp-2">{membro.responsabilidades}</p>
        </div>
    );
}

function useScrollRowScroll() {
    const ref = useRef<HTMLDivElement>(null);
    const scroll = useCallback((dir: "left" | "right", total: number) => {
        if (!ref.current) return;
        const w = 250;
        ref.current.scrollBy({ left: dir === "right" ? w : -w, behavior: "smooth" });
    }, []);
    return { ref, scroll };
}

function useScrollRow() {
    const ref = useRef<HTMLDivElement>(null);
    const scroll = useCallback((dir: "left" | "right", total: number) => {
        if (!ref.current) return;
        const w = 250;
        ref.current.scrollBy({ left: dir === "right" ? w : -w, behavior: "smooth" });
    }, []);
    return { ref, scroll };
}