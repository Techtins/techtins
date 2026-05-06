// import { Win, Eye, BookOpen, ChartNoAxesColumnIncreasing, Check, Heart, Star } from "lucide-react";
import Navbar from "../components/Navbar";
import SlideShow from "../components/SlideShow";
import MissaoValores from "../components/MissaoValores";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Impacto";
import Membros from "../components/Membros";


export default function SaibaMais() {
    return (
        <div>
            <Navbar variant="dark"></Navbar>
            <SlideShow></SlideShow>
            <MissaoValores></MissaoValores>
            <Roadmap></Roadmap>
            <Membros></Membros>
            <Footer></Footer>


        </div>
    );
}