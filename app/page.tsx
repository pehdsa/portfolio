import { FloatingNav } from '@/components/ui/FloatingNav';
import { navItems } from '@/data';

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Testmonials from "@/components/Testmonials";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 min-h-screen">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={ navItems } />
                <Hero />
                <Grid />
                <RecentProjects />
                <Testmonials />
                <Experience />
                <Approach />
                <Footer />
            </div>
        </main>
    );
}
