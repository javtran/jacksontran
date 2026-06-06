"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VideoModalProps = {
  videoId: string;
  title: string;
  onClose: () => void;
};

const VideoModal = ({ videoId, title, onClose }: VideoModalProps) => {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-slate-400 hover:text-white transition-colors duration-200 text-sm tracking-wide"
          >
            ESC ✕
          </button>

          {/* Video */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-2xl">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <p className="mt-3 text-slate-300 text-sm text-center">{title}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default VideoModal;
