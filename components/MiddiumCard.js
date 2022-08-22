import Image from "next/image";

function MiddiumCard({ img, title }) {
    return (
        <div>
            <div className="relative h-80 w-80 transition transform duration-200 ease-out hover:bg-gray-100 hover:scale-105">
                <Image
                    src={img}
                    layout="fill"
                    className="rounded-xl"
                />

            </div>
            <h3 className="text-2xl mt-3">{title}</h3>
        </div>
    );
}

export default MiddiumCard;
