export default function GetInTouch() {

    return (
        <button
            onClick={() => {
                window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeanvXW5z4Yq7e1TbiXun2iqpTvVDc5VY7CCc58k7ftQbl_Hg/viewform?usp=header",
                    "_blank"
                );
            }}
            className="mx-auto w-fit px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 font-bold text-sm md:text-base lg:text-lg xl:text-xl"
        >
            Get in touch
        </button>
    );
}