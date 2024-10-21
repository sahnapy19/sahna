import RiwayatPd from "./components/riwayatPd";
import RiwayatPk from "./components/riwayatPk";
import Hero from "./components/hero";
import FavColor from "./components/fav.Color";

export default function Gallery() {
  return(
    <section>
        <Hero/>
        <RiwayatPd/>
        <FavColor/>
    </section>
  );
}