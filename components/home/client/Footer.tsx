import Fade from "@mui/material/Fade";

export function Footer() {
  return (
    <Fade in timeout={1200}>
      <footer className="w-full mt-auto border-t border-white/10 bg-black backdrop-blur-md text-white/70 px-6 sm:px-10 py-10 transition-all duration-300">
        <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3 font-body text-sm">
          
          {/* قسم بيانات المطعم */}
          <div className="space-y-1 transform transition-transform duration-300 hover:translate-y-[-2px]">
            <h3 className="font-display text-lg text-white font-semibold mb-2 tracking-wide">
              Nile Grill House
            </h3>
            <p className="text-white/80">14 Corniche El Nil, Maadi, Cairo</p>
            <p className="text-white/60 text-xs">Open daily, 12:00 — 00:00</p>
          </div>

          {/* قسم التواصل */}
          <div className="space-y-1 transform transition-transform duration-300 hover:translate-y-[-2px]">
            <h3 className="font-display text-lg text-white font-semibold mb-2 tracking-wide">
              Contact
            </h3>
            <p className="hover:text-white transition-colors cursor-pointer">
              +20 100 111 2233
            </p>
            <p className="hover:text-white transition-colors cursor-pointer text-xs">
              hello@nilegrillhouse.example
            </p>
          </div>

          {/* قسم التواصل الاجتماعي */}
          <div className="space-y-1 transform transition-transform duration-300 hover:translate-y-[-2px]">
            <h3 className="font-display text-lg text-white font-semibold mb-2 tracking-wide">
              Follow
            </h3>
            <div className="flex items-center gap-3 text-white/80">
              <span className="hover:text-white hover:scale-105 transition-all cursor-pointer">
                Instagram
              </span>
              <span>·</span>
              <span className="hover:text-white hover:scale-105 transition-all cursor-pointer">
                Facebook
              </span>
              <span>·</span>
              <span className="hover:text-white hover:scale-105 transition-all cursor-pointer">
                TikTok
              </span>
            </div>
          </div>

        </div>

        {/* حقوق النشر */}
        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-[11px] font-mono text-white/40">
          <p>© 2026 Nile Grill House — powered by RMS</p>
          <p className="mt-2 sm:mt-0 text-white/30 hover:text-white/60 transition-colors">
            All rights reserved.
          </p>
        </div>
      </footer>
    </Fade>
  );
}