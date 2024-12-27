export default function ZoomVideo({ src, isZoomed, setIsZoomed }) {
  return (
    <div
      // iszoomed={isZoomed}
      onClick={() => setIsZoomed(false)}
      className={`fixed cursor-zoom-out w-full h-full inset-0 z-50 flex flex-col justify-center items-center bg-white ${
        isZoomed
          ? "visible"
          : "invisible"
      }`}
    >
      {isZoomed && (
        <video className="mx-auto max-h-[500px] max-w-[90vw] animate-fade-in" autoPlay muted loop>
          <source src={src} />
          Your browser does not support the video tag...
        </video>
      )}
      <p className="font-secondary font-light text-md text-center my-3 text-subtitleGray">
        Click anywhere to exit
      </p>
    </div>
  );
}
