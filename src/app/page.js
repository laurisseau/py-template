import Image from 'next/image';
import img from '@/app/public/images/file.png';

export default function Home() {

  const header = 'Build Your Dream Physique Fat Loss';
  const paragraph =
    'Lorem ipsum dolor sit, bus earum, aliquam ipsa repellat iusto esse laudantium animi vitae consectetur obcaecati.';

  return (
    <div className="landing-page">
      {/* <div className="overlay"></div> */}
      <div className="content h-full">
        <div className=" pl-5 flex nav">
          <div className="w-48 flex items-center justify-between ">
            <p className="instagram">
              <i className="fab fa-instagram"></i>
            </p>

            <p className="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </p>

            <i className="fa-brands fa-tiktok"></i>

            <p className="youtube">
              <i className="fa-brands fa-youtube"></i>
            </p>
          </div>
        </div>
        <div className="h-full flex">
          <div className=" flex justify-center items-center w-full">
            <div className=" w-4/5  text-left">
              <h3 className="text-5xl font-bold roboto-regular">{header}</h3>
              <p className="mt-2 text-2xl roboto-regular">{paragraph}</p>
              <button className="mt-5 px-16 py-3 submit-button rounded-md roboto-regular">
                Submit
              </button>
            </div>
          </div>
          <div className="  w-full hidden lg:block">
            <Image
              className="h-full w-full object-coverobject-cover"
              src={img}
              alt="Buisness Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
