import FeaturesSection from "@/components/landing/FeaturesSection";
import Footer from "@/components/landing/Footer";
import HeroSection from "@/components/landing/HeroSection";
import Navbar from "@/components/landing/Navbar";

export default function Home() {
  // const [session, setSession] = useState<Session | null>(null);
  // const fetchSession = async () => {
  //   const supabase = createClient();
  //   const { data } = await supabase.auth.getSession();
  //   setSession(data.session);
  //   console.log(session);
  // };
  // useEffect(() => {
  //   fetchSession();
  //   const supabase = createClient();
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (_event, session) => setSession(session),
  //   );
  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, []);
  return (
    <div className="min-h-screen bg-black text-zinc-50 font-sans selection:bg-indigo-500/30">
      <main>
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
}
