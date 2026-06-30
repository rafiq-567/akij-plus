import CategoriesBanner from "@/components/home/CategoriesBanner";
import HeroBanner from "@/components/home/HeroBanner";
import HomeButton from "@/components/home/HomeButton";
import NewArrivalCategories from "@/components/home/NewArrivalCategories";


export default function Home() {
  return (
    <div className="flex flex-col bg-zinc-50 dark:bg-black">
      
      <HeroBanner />
      <HomeButton />
      <NewArrivalCategories />
      <CategoriesBanner />
    </div>
  );
}