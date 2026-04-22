import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-deep text-white px-6">
      
      <div className="text-center flex flex-col items-center">
        
        {/* 404 Number */}
        <div className="text-[8rem] md:text-[12rem] font-playfair font-black leading-none text-transparent 
                        [webkit-text-stroke:1px_rgba(201,168,76,0.3)] mb-2">
          404
        </div>

        {/* Title */}
        <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-3">
          Page <span className="text-gold">Not Found</span>
        </h1>

        {/* Description */}
        <p className="text-muted text-sm max-w-md leading-relaxed mb-8 text-center">
          The page you're looking for doesn't exist. Let's get you back to the music.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-gold to-goldLight text-black px-6 py-3 text-xs uppercase font-semibold hover:brightness-110 transition"
        >
          ← Back to Home
        </button>

      </div>
    </div>
  );
}

export default NotFound;