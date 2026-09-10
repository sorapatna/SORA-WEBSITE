"use client";

import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

interface MediaItem {
  type: "image" | "video";
  src: string;
}

interface CalendarEvent {
  title: string;
  start: Date;
  end: Date;
  description?: string;
  media?: MediaItem[];
}

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events: CalendarEvent[] = [
  {
    title: "Monthly Meet",
    start: new Date(2026, 7, 29, 16, 0),
    end: new Date(2026, 7, 29, 18, 0),
    description: "We had a review of progress on our 145.100 MHz net which we operate morning and evening. Morning 7am to 8.30am. Evening time 5pm onwards till 8pm one operator minimum is on standby. We decided that once a week all our group members will log in and talk on vhf which is mandatory…everyone agreed 👍 time and date to be communicated this includes YL members. I had bought a lot of low cost antenna designs and equipment to demonstrate to new hams who have recently been licensed but none of them turned up in the program. So the Demo was brief for hams who are already operating. We also confirmed that monthly program will be revived even if 10-12 hams are attending at a fellow hams residence or location. Next program in September will be communicated.",
    media: [
      {
        type: "image",
        src: "/images/Meeting-1.webp",
      },
      {
        type: "image",
        src: "/images/Meeting-2.webp",
      },
      {
        type: "image",
        src: "/images/Meeting-3.webp",
      },
      
    ],
  },
];

export default function CalendarComponent() {
  const [isClient, setIsClient] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSelectEvent = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setCurrentMediaIndex(0);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handlePrevMedia = () => {
    if (!selectedEvent?.media) return;
    setCurrentMediaIndex((prev) => 
      prev === 0 ? selectedEvent.media!.length - 1 : prev - 1
    );
  };

  const handleNextMedia = () => {
    if (!selectedEvent?.media) return;
    setCurrentMediaIndex((prev) => 
      prev === selectedEvent.media!.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div style={{ minHeight: "100vh", width: "100%", backgroundColor: "#f0f8ff", padding: "10px", position: "relative" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          color: "#B22222",
          margin: "30px 0 20px",
        }}
      >
        Event Calendar
      </h1>
      
      <div style={{ height: 600, backgroundColor: "white", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        {isClient ? (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date(2026, 7, 29)}
            showMultiDayTimes
            style={{ height: "100%" }}
            onSelectEvent={handleSelectEvent}
          />
        ) : (
          <div style={{ textAlign: "center", paddingTop: "100px" }}>Loading Calendar...</div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedEvent && (
        <div 
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "white",
              padding: "24px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "550px",
              maxHeight: "85vh",
              overflowY: "auto",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <button 
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                color: "#666",
                zIndex: 10
              }}
            >
              &times;
            </button>

            {/* Event Details */}
            <h2 style={{ margin: "0 0 10px 0", color: "#B22222", fontSize: "1.8rem" }}>
              {selectedEvent.title}
            </h2>

            <p style={{ margin: "0 0 15px 0", fontSize: "0.9rem", color: "#555", fontWeight: "bold" }}>
              📅 {format(selectedEvent.start, "PPP p")} - {format(selectedEvent.end, "PPP p")}
            </p>

            {/* Interactive Carousel Slider Wrapper */}
            {selectedEvent.media && selectedEvent.media.length > 0 && (
              <div 
                style={{ 
                  position: "relative",
                  width: "100%", 
                  height: "260px",
                  borderRadius: "8px", 
                  overflow: "hidden", 
                  backgroundColor: "#000",
                  marginBottom: "15px"
                }}
              >
                {/* Active Media Renderer */}
                <div style={{ width: "100%", height: "100%" }}>
                  {selectedEvent.media[currentMediaIndex].type === "image" ? (
                    <img 
                      src={selectedEvent.media[currentMediaIndex].src} 
                      alt={`Visual asset ${currentMediaIndex + 1}`} 
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  ) : (
                    <video 
                      key={selectedEvent.media[currentMediaIndex].src} 
                      src={selectedEvent.media[currentMediaIndex].src} 
                      controls
                      playsInline
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                    />
                  )}
                </div>

                {/* Show Navigation Elements Only if Multiple Items Exist */}
                {selectedEvent.media.length > 1 && (
                  <>
                    {/* Left Navigation Arrow */}
                    <button 
                      onClick={handlePrevMedia}
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.2s"
                      }}
                    >
                      ❮
                    </button>

                    {/* Right Navigation Arrow */}
                    <button 
                      onClick={handleNextMedia}
                      style={{
                        position: "absolute",
                        top: "50%",
                        right: "10px",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(0,0,0,0.6)",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "36px",
                        height: "36px",
                        cursor: "pointer",
                        fontSize: "1.2rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "background 0.2s"
                      }}
                    >
                      ❯
                    </button>

                    {/* Bottom Slide Indicators/Dots */}
                    <div 
                      style={{
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        gap: "6px"
                      }}
                    >
                      {selectedEvent.media.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentMediaIndex(idx)}
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            border: "none",
                            backgroundColor: currentMediaIndex === idx ? "white" : "rgba(255,255,255,0.4)",
                            cursor: "pointer",
                            padding: 0
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Event Description Text */}
            <p style={{ margin: 0, color: "#333", lineHeight: "1.5" }}>
              {selectedEvent.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
