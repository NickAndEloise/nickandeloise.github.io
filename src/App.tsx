import { motion, type MotionProps } from "framer-motion";
import React, { useEffect, useState } from "react";
import passwordBg from "./assets/password-bg.png";

const PASSWORD = "mountsnow";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  align?: "center" | "left";
  animation?: MotionProps;
};

type ScheduleEvent = {
  time: string;
  title: string;
  description?: string;
};

type DaySchedule = {
  day: string;
  dressCode: string;
  location: string;
  events: ScheduleEvent[];
};

const arrivalDetails = [
  {
    title: "Parking & Transportation",
    detail:
      "Shuttle and valet details will follow—there will be plenty of space for guests arriving by car.",
  },
  {
    title: "Weather",
    detail:
      "Early September can be crisp in the evenings. Pack a wrap or jacket to stay cozy once the sun sets.",
  },
];

const schedule: DaySchedule[] = [
  {
    day: "Saturday, September 5",
    dressCode: "New England Cocktail",
    location: "Beer Naked",
    events: [
      {
        time: "6:00 – 9:00 PM",
        title: "Welcome Party",
        description:
          "Settle into Vermont with wood-fired pizzas, local brews, and sweeping mountain views as we kick off the festivities.",
      },
    ],
  },
  {
    day: "Sunday, September 6",
    dressCode: "Formal",
    location: "The Hermitage Inn",
    events: [
      {
        time: "5:00 – 6:00 PM",
        title: "Ceremony",
        description:
          "Join us lakeside for vows framed by the Green Mountains. Arrive early to soak in the scenery!",
      },
      {
        time: "6:00 – 7:00 PM",
        title: "Cocktail Hour",
        description:
          "Sip signature drinks and sample New England bites as the sun dips behind the valley.",
      },
      {
        time: "7:00 – 10:00 PM",
        title: "Reception",
        description:
          "Dinner, toasts, and plenty of dancing under the tented pavilion. Bring your best moves!",
      },
      {
        time: "10:00 PM – late",
        title: "After Party",
        description:
          "Nightcaps, late-night bites, and a cozy lounge to keep the celebration going.",
      },
    ],
  },
  {
    day: "Monday, September 7",
    dressCode: "Casual",
    location: "The Hermitage Inn",
    events: [
      {
        time: "10:00 AM",
        title: "Farewell Brunch",
        description:
          "Before you hit the road, join us for Vermont maple pancakes and one more round of hugs.",
      },
    ],
  },
];

const stayOptions = [
  {
    title: "The White House Inn",
    detail:
      "Room block reserved under Nick & Eloise – please mention when booking.",
  },
  {
    title: "Local Airbnbs",
    detail:
      "There are beautiful homes and chalets within minutes of The Hermitage Inn.",
  },
];

const travelTips = [
  {
    title: "Fly into Boston",
    detail:
      "Logan International (BOS) is about 3 hours by car through the Berkshires.",
  },
  {
    title: "Fly into NYC",
    detail:
      "JFK, LGA, and EWR offer plenty of flights—expect a scenic 4-hour drive north.",
  },
];

const attractions = [
  "Pine Hill Orchard",
  "Dot's Restaurant",
  "Two Tannery Inn",
  "Four Chimneys",
  "The Vermont Country Deli",
  "American Flatbread",
];

const navLinks = [
  { href: "#schedule", label: "Schedule" },
  { href: "#travel", label: "Travel" },
  { href: "#registry", label: "Registry" },
];

const PasswordGate: React.FC<{ onUnlock: () => void }> = ({ onUnlock }) => {
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (passwordInput.trim() === PASSWORD) {
      localStorage.setItem("weddingSiteAuthenticated", "true");
      setError(null);
      onUnlock();
    } else {
      setError("Incorrect password. Please try again.");
      setPasswordInput("");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#0c1a18] text-[#f5f1ea]"
      style={{
        backgroundImage: `linear-gradient(rgba(12, 26, 24, 0.8), rgba(12, 26, 24, 0.8)), url(${passwordBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-4 w-full max-w-md rounded-2xl border border-white/20 bg-white/10 p-10 backdrop-blur-lg shadow-2xl"
      >
        <h1 className="font-heading text-center text-4xl tracking-[0.2em] uppercase text-white">
          Nick &amp; Eloise
        </h1>
        <p className="mt-6 text-center text-sm text-white/80">
          We&apos;re so glad you&apos;re here. Please enter the password to step
          into our wedding weekend.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          <label
            className="text-xs uppercase tracking-[0.3em] text-white/70"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-full border border-white/30 bg-white/90 px-5 py-3 text-[#0c1a18] focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 mt-1"
            value={passwordInput}
            onChange={(event) => setPasswordInput(event.target.value)}
            autoComplete="current-password"
          />
          {error && (
            <p className="text-sm text-rose-200" role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className="w-full rounded-full bg-white/90 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#0c1a18] transition-colors hover:bg-white"
          >
            Enter
          </button>
        </form>
      </motion.div>
    </div>
  );
};

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed inset-x-0 top-0 z-50 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
    >
      <div className="relative mx-auto mt-6 flex max-w-4xl items-center justify-between rounded-full border border-white/40 bg-white/70 px-6 py-4 text-sm uppercase tracking-[0.3em] text-[#304136] shadow-lg backdrop-blur">
        <a
          href="#top"
          className="font-heading text-base tracking-[0.4em] text-[#2b3a33]"
        >
          Nick &amp; Eloise
        </a>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-[#2b3a33] transition-colors hover:bg-white/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#304136] md:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </button>
        <ul
          id="primary-navigation"
          className="hidden items-center gap-6 text-xs md:flex"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="transition-colors hover:text-[#51665b]"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {isMenuOpen && (
          <div className="absolute right-3 top-[calc(100%+0.75rem)] w-48 rounded-2xl border border-white/60 bg-white/95 p-4 text-xs text-[#2b3a33] shadow-xl md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={`mobile-${link.href}`}>
                  <a
                    className="block w-full rounded-full px-4 py-2 text-center transition-colors hover:bg-[#f0ebe2]"
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

const Section: React.FC<SectionProps> = ({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "center",
  animation,
}) => {
  const defaultAnimation: MotionProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.8 },
    viewport: { once: true, amount: 0.2 },
  };

  const anim = animation || defaultAnimation;
  const headerWrapperClasses =
    "mx-auto flex max-w-2xl flex-col gap-5 text-center";

  const contentWrapperClasses =
    align === "left"
      ? "mx-auto mt-10 w-full text-[17px] leading-relaxed text-[#3e4b45] md:mx-0"
      : "mx-auto mt-10 max-w-3xl text-[17px] leading-relaxed text-[#3e4b45]";

  return (
    <motion.section
      id={id}
      className="texture-overlay mx-auto sm:my-24 my-12 max-w-4xl rounded-[36px] border border-[#e2d6c6]/70 bg-[#fffdf8]/80 px-8 sm:px-12 py-14 shadow-xl scroll-m-32 sm:scroll-m-24"
      {...anim}
    >
      <div className={headerWrapperClasses}>
        {eyebrow && (
          <span className="text-xs uppercase tracking-[0.4em] text-[#9d8c7c]">
            {eyebrow}
          </span>
        )}
        <h2 className="font-heading text-4xl md:text-5xl text-[#2f3d35]">
          {title}
        </h2>
        {description && (
          <p className="text-base text-[#4f5c55]">{description}</p>
        )}
      </div>
      <div className={contentWrapperClasses}>{children}</div>
    </motion.section>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("weddingSiteAuthenticated") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <PasswordGate onUnlock={() => setIsAuthenticated(true)} />;
  }

  return (
    <div
      id="top"
      className="relative min-h-screen bg-transparent text-[#705640]"
    >
      <div className="relative overflow-hidden bg-[#f4efe6]">
        <NavBar />
        <header className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:pb-24 pb-12 pt-24 text-center text-[#2f3d35]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm uppercase tracking-[0.5em] text-[#5a6d62]"
          >
            The wedding of
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 font-heading text-5xl sm:text-6xl md:text-7xl tracking-[0.25em]"
          >
            Nick &amp; Eloise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 text-xs uppercase tracking-[0.4em] text-[#5a6d62]"
          >
            will take place on
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.9 }}
            className="mt-6 font-heading text-5xl sm:text-6xl md:text-7xl"
          >
            September 6, 2026
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9 }}
            className="mt-6 text-sm uppercase tracking-[0.35em] text-[#5a6d62]"
          >
            in Dover, Vermont at
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.9 }}
            className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl"
          >
            The Hermitage Inn
          </motion.h2>
          <motion.a
            href="#schedule"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 text-sm md:font-semibold uppercase md:tracking-[0.35em] text-[#2f3d35] underline underline-offset-8"
          >
            <span className="inline-block align-middle ml-2">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  d="M6 9l5 5 5-5"
                  stroke="#2f3d35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.a>
        </header>
      </div>

      <main className="relative z-10 px-6 pb-32 pt-10">
        <Section
          id="schedule"
          eyebrow="A Weekend in Vermont"
          title="Weekend Schedule"
          description="From welcome drinks to goodbye brunch, here’s how we’ll be spending time together."
          align="left"
        >
          <div className="relative border-l border-[#d2c5b3] pl-6">
            <div
              className="absolute left-[-5px] top-0 h-full border-l border-[#d2c5b3]"
              aria-hidden
            />
            <div className="space-y-12">
              {schedule.map((day) => (
                <div key={day.day} className="relative sm:pl-6 pl-1">
                  <span className="absolute -left-6.5 -top-1.5 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#c9b8a4] bg-[#fdf9f2] font-heading text-xs uppercase text-[#7a6c5b]">
                    ★
                  </span>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#705640]">
                    {day.day}
                  </p>
                  <div className="mt-3 font-heading text-base">
                    <span className="uppercase text-[#705640]">
                      Dress Code:{" "}
                    </span>
                    <span className="mt-1 italic text-[#2f3d35]">
                      {day.dressCode}
                    </span>
                  </div>
                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-[#705640]">
                    Location
                  </div>
                  <p className="text-sm text-[#4f5c55]">{day.location}</p>
                  <ul className="mt-4 space-y-6">
                    {day.events.map((event) => (
                      <li key={`${day.day}-${event.title}`}>
                        <h3 className="font-heading text-2xl text-[#2f3d35]">
                          {event.title}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-[#4f5c55]">
                          {event.time}
                        </p>
                        {event.description && (
                          <p className="mt-3 text-sm text-[#4f5c55]">
                            {event.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="travel"
          eyebrow="Plan Your Stay"
          title="Travel &amp; Stay"
          description="Drive up scenic Route 100, nestle into a charming inn, and explore nearby towns."
          align="left"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-[#2f3d35]">
                Where to Stay
              </h3>
              <div className="space-y-4">
                {stayOptions.map((option) => (
                  <div
                    key={option.title}
                    className="rounded-2xl border border-[#e2d6c6]/60 bg-white/80 p-5 shadow-sm"
                  >
                    <p className="font-heading text-xl text-[#2f3d35]">
                      {option.title}
                    </p>
                    <p className="mt-2 text-sm text-[#4f5c55]">
                      {option.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-heading text-2xl text-[#2f3d35]">
                Getting There
              </h3>
              <div className="space-y-4">
                {travelTips.map((tip) => (
                  <div
                    key={tip.title}
                    className="rounded-2xl border border-[#e2d6c6]/60 bg-white/80 p-5 shadow-sm"
                  >
                    <p className="font-heading text-xl text-[#2f3d35]">
                      {tip.title}
                    </p>
                    <p className="mt-2 text-sm text-[#4f5c55]">{tip.detail}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4 md:col-span-2">
              <h3 className="font-heading text-2xl text-[#2f3d35]">
                Arrival Details
              </h3>
              {arrivalDetails.map((detail) => (
                <div
                  key={detail.title}
                  className="rounded-2xl border border-[#e2d6c6]/60 bg-white/80 p-6 shadow-sm"
                >
                  <h3 className="font-heading text-xl text-[#2f3d35]">
                    {detail.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#4f5c55] sm:text-base">
                    {detail.detail}
                  </p>
                </div>
              ))}
            </div>
            <div className="md:col-span-2">
              <h3 className="font-heading text-2xl text-[#2f3d35]">
                Local Favorites
              </h3>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-[#4f5c55] sm:grid-cols-2 md:grid-cols-3">
                {attractions.map((attraction) => (
                  <li
                    key={attraction}
                    className="flex items-center gap-2 rounded-full border border-[#e2d6c6]/60 bg-white/70 px-4 py-2"
                  >
                    <span className="text-[#705640]">✦</span>
                    {attraction}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="registry"
          eyebrow="Gifts"
          title="Registry"
          description="Your presence in Vermont is the greatest gift. Registry details will be shared soon for those who would like to contribute."
        >
          <p className="text-center text-sm text-[#4f5c55]">
            We&apos;re working on curating a registry that reflects our next
            adventure together. Please check back for updates.
          </p>
        </Section>
      </main>

      <footer className="relative z-10 bg-[#1a2a24] py-10 text-center text-[#f4efe6]">
        <p className="font-heading text-xl tracking-[0.4em] uppercase">
          Nick &amp; Eloise
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.3em] text-[#c9b8a4]">
          September 6, 2026 · Dover, Vermont
        </p>
      </footer>
    </div>
  );
};

export default App;
