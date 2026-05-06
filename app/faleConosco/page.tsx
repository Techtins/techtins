"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Mail, X, MapPin, Menu } from "lucide-react";

export default function FaleConosco() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        servico: "",
        mensagem: ""
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="w-full min-h-screen bg-[#331c5e] text-white flex flex-col items-center px-6 md:px-16 py-8">

            <nav className="w-full max-w-7xl mx-auto flex items-center justify-between py-6 px-6 md:px-0 mb-12 relative z-50">

                {/* Logo */}
                <div className="relative w-32 md:w-40 h-auto">
                    <Link href="/">
                        <Image
                            width={160}
                            height={40}
                            src="/assets/logoHorizontalBranca.png"
                            alt="Logo Techtins"
                            className="w-full h-auto"
                        />
                    </Link>
                </div>

                {/* Botão de Menu para telas menores (Mobile) */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white p-2 focus:outline-none transition-transform duration-300 hover:text-yellow-400"
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Menu Desktop (Visível em telas médias ou maiores) */}
                <div className="hidden md:flex items-center gap-8 text-white font-medium">
                    <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
                    <a href="#sobre" className="hover:text-yellow-400 transition-colors">Sobre nós</a>
                    <a
                        href="#fale-conosco"
                        className="px-6 py-2 border-2 border-white rounded-full hover:bg-white hover:text-[#331c5e] transition-all duration-300"
                    >
                        Fale Conosco
                    </a>
                </div>

                {isMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-[#331c5e] md:hidden flex flex-col items-center py-6 space-y-4 shadow-lg border-t border-purple-brand z-40">
                        <a
                            href="/"
                            className="text-white hover:text-yellow-400 transition-colors w-full text-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </a>
                        <a
                            href="/saibaMais"
                            className="text-white hover:text-yellow-400 transition-colors w-full text-center py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sobre nós
                        </a>
                        <a
                            href="/faleConosco"
                            className="px-6 py-2 border-2 border-white rounded-full text-white hover:bg-white hover:text-[#331c5e] transition-all duration-300 text-center w-3/4"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Fale Conosco
                        </a>
                    </div>
                )}
            </nav>

            <div className="w-full max-w-6xl bg-white text-slate-800 rounded-3xl p-8 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-start justify-center gap-6">
                    <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
                        SOLUÇÕES <br />
                        <span className="text-yellow-500 bg-black px-2 py-1 rounded-lg">INOVADORAS</span> E <br />
                        CRIATIVAS
                    </h2>
                    <div className="relative w-full max-w-105 h-87.5">
                        <Image
                            src="/assets/techtinsLaptop.png"
                            alt="Soluções Inovadoras"
                            fill
                            sizes="(max-width: 768px) 300px, 420px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                <form
                    action="https://formspree.io/f/xojregop"
                    method="POST"
                    className="flex flex-col gap-5"
                >
                    <h3 className="text-2xl font-extrabold text-[#331c5e] mb-2">Entre em Contato</h3>

                    <input
                        type="hidden"
                        name="_subject"
                        value={`Novo contato: ${formData.nome} - ${formData.servico}`}
                    />

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-600">Nome</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Seu nome"
                            value={formData.nome}
                            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-gray-50"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-600">E-mail</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Seu e-mail"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-gray-50"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-600">Telefone</label>
                        <input
                            type="tel"
                            name="telefone"
                            placeholder="Seu telefone/WhatsApp"
                            value={formData.telefone}
                            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-gray-50"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-600">Serviço</label>
                        <select
                            name="servico"
                            value={formData.servico}
                            onChange={(e) => setFormData({ ...formData, servico: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-gray-50 cursor-pointer"
                            required
                        >
                            <option value="" disabled>Selecione um serviço</option>
                            <option value="Desenvolvimento">Desenvolvimento</option>
                            <option value="Consultoria">Consultoria</option>
                            <option value="Estratégia">Estratégia</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label className="text-sm font-semibold text-slate-600">Descreva sua ideia</label>
                        <textarea
                            rows={3}
                            name="mensagem"
                            placeholder="Fale um pouco sobre o seu projeto..."
                            value={formData.mensagem}
                            onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                            className="w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-800 bg-gray-50 resize-none"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-[#331c5e] text-white font-extrabold rounded-xl hover:bg-[#251347] transition-all shadow-md"
                    >
                        Enviar
                    </button>
                </form>
            </div>

            <div className="w-full max-w-6xl mt-16 pt-12 border-t border-indigo-800/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-300">
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">E-mail para contato:</h4>
                    <a href="mailto:techtinsjr@unitins.br" className="flex items-center gap-2 text-indigo-300 hover:underline">
                        <Mail className="w-5 h-5 text-yellow-500" />
                        techtinsjr@unitins.br
                    </a>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">Onde nos encontrar?</h4>
                    <div className="flex items-start gap-2 max-w-xs text-gray-400 leading-relaxed">
                        <MapPin className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <p>Universidade Estadual do Tocantins Q. 108 Sul Alameda 11, 03 - Plano Diretor Sul, Palmas - TO, 77020-122</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold text-white uppercase tracking-wider text-xs">Redes sociais:</h4>
                    <a href="https://instagram.com/techtins.jr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-300 hover:underline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#FFDE1D"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                        @techtins.jr
                    </a>
                </div>
            </div>
        </div>
    );
}