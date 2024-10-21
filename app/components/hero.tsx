// import fotoku from "."
import foto from "../foto.jpeg"
export default function Hero() {
    function Profile() {
        return <img src={foto.src} alt="Sahna Putri Yunindra Profile" className="rounded-full m-4 mx-auto block border-5 border-white shadow-[0_0_10px_rgb(255,46,175)] h-52 w-52 object-cover " />;
      }
    return (
        <div>
            <h1 className="text-gray-300 font-bold">CV ONLINE</h1>
        <h1 className="text-3xl">Sahna Putri Yunindra</h1>
        <Profile />
        <p>
        Saya berminat menjadi programmer dan belajar PHP serta HTML. Saya ingin menikmati memecahkan masalah dan menciptakan solusi yang inovatif.
        </p>
        </div>
    )
}