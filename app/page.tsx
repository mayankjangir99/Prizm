"use client";
import Link from "next/link";
import Image from "next/image";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Award,
  Building2,
  CalendarDays,
  ChevronDown,
  CheckCircle2,
  Gem,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Ruler,
  Send,
  Shield,
  Sparkles,
  Star,
  Sun,
  X
} from "lucide-react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Worli Sea-Facing Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1745301558339-44eb3217d5da?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Bandra Founder Apartment",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Colaba Boutique Suite",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1724947053227-2335bf21d0ae?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Alibaug Weekend Villa",
    category: "Luxury Villas",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Juhu Collector Home",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85"
  },
  {
    title: "Lower Parel Members Club",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1400&q=85"
  },
   {
    title: "Sunlit Modern Living Room",
    category: "Residential",
    image: "/collov-home-design-4_jQL4JCS98-unsplash.jpg"
  },
  {
    title: "Grand Reception Lounge",
    category: "Commercial",
    image: "/frames-for-your-heart-zSG-kd-L6vw-unsplash.jpg"
  },
  {
    title: "Private Luxury Suite",
    category: "Hospitality",
    image: "/iwood-R5v8Xtc0ecg-unsplash.jpg"
  },
  {
    title: "Contemporary Designer Lounge",
    category: "Residential",
    image: "/mahmoud-azmy-8ccOqbNdp1A-unsplash.jpg"
  },
  {
    title: "Scandinavian Living Space",
    category: "Residential",
    image: "/minh-pham-OtXADkUh3-I-unsplash.jpg"
  },
  {
    title: "Luxury Villa Lounge",
    category: "Luxury Villas",
    image: "/prydumano-design-vIbxvHj9m9g-unsplash.jpg"
  },
  {
    title: "Modern Family Living Room",
    category: "Residential",
    image: "/spacejoy-c0JoR_-2x3E-unsplash.jpg"
  },
  {
    title: "Open Concept Villa Interior",
    category: "Luxury Villas",
    image: "/zac-gudakov-mw_mj-noYHM-unsplash.jpg"
  },
  {
    title: "Premium Double Height Residence",
    category: "Luxury Villas",
    image: "/zac-gudakov-ztWpwTEx728-unsplash.jpg"
  }
  
   
  
  
  

];

const services = [
  ["Interior Design", "Layered Indian materiality, bespoke furniture, art curation, and refined styling."],
  ["Architecture", "Quietly iconic Mumbai homes, villas, offices, and hospitality spaces shaped for Indian living."],
  ["Space Planning", "Precise circulation, puja zones, storage, vastu-aware flow, privacy, and compact luxury."],
  ["3D Visualization", "Photorealistic previews, virtual walkthroughs, and material simulations before execution."],
  ["Renovation", "Sensitive transformations of apartments, bungalows, offices, and occupied homes."],
  ["Turnkey Projects", "Complete sourcing, contractor coordination, procurement, installation, and handover."]
];

const testimonials = [
  ["Ananya M.", "Private Client, Worli", "They made our home feel premium without losing warmth. Every room feels personal, calm, and beautifully Bombay."],
  ["Kabir Shah", "Hotelier, Colaba", "The studio understood hospitality drama, service flow, and Indian craft. Our property finally has a distinct identity."],
  ["Meera Patel", "Developer, Alibaug", "Their process is calm, precise, and obsessively detailed. The finished villa exceeded the renderings."],
  ["Rohan S.", "Founder, Bandra", "From sourcing to styling, everything felt curated. Guests still ask who designed the residence."]
];

const process = ["Private Brief", "Concept Salon", "Design Development", "Procurement", "Installation"];
const awards = ["India Design ID Feature", "IIID Circle Recognition", "GoodHomes India", "Architectural Digest India", "Elle Decor India", "Houzz Best of Design"];
const categories = ["All", "Residential", "Commercial", "Hospitality", "Luxury Villas"];

const pressNotes = ["Architectural Digest India", "Elle Decor India", "GoodHomes", "India Design ID", "IIID", "Houzz India"];

const materials = [
  ["Makrana Marble", "Indian stone selected slab by slab for calm veining and timeless presence."],
  ["Teak and Walnut", "Deep-grain millwork with concealed hardware, shadow gaps, and durable finishes."],
  ["Brass and Cane", "Warm craft details used sparingly for screens, trims, furniture, and lighting."],
  ["Linen and Handloom", "Soft upholstery and Indian textiles chosen for tactility, comfort, and quiet depth."]
];

const signaturePrinciples = [
  ["Quiet Luxury", "Richness comes through proportion, light, millwork discipline, and tactile restraint rather than visual noise."],
  ["Private Process", "Every commission is run with clear approvals, calm communication, and detail-rich coordination across teams."],
  ["Bombay Intelligence", "Layouts account for Indian routines, hosting, storage, staff movement, climate, and vastu-led priorities."]
];

const consultationFlow = [
  ["01", "Share your brief", "Home type, size, timeline, and the atmosphere you want us to create."],
  ["02", "Receive a studio response", "We align on fit, scope range, and the right consultation format."],
  ["03", "Begin the concept journey", "Once aligned, we shape the project into drawings, materials, and execution."],
];

function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1150);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[90] grid place-items-center bg-noir"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto mb-6 h-px w-44 bg-gold-line" />
        <div className="mx-auto mb-6 grid h-28 w-28 place-items-center bg-ivory p-4">
          <Image src="/prizm-logo.png" alt="The PRIZM Design Studio logo" width={96} height={96} className="h-full w-full object-contain" priority />
        </div>
        <p className="font-display text-4xl tracking-normal text-ivory md:text-6xl">The PRIZM</p>
        <p className="mt-4 text-xs uppercase tracking-[0.42em] text-champagne">Design Studio / ESTD 2012</p>
      </motion.div>
    </motion.div>
  );
}

function CustomCursor() {
  const cursor = useRef<HTMLDivElement>(null);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (event: MouseEvent) => {
      gsap.to(cursor.current, { x: event.clientX, y: event.clientY, duration: 0.28, ease: "power3.out" });
      gsap.to(dot.current, { x: event.clientX, y: event.clientY, duration: 0.08, ease: "power3.out" });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div ref={cursor} className="custom-cursor hidden md:block" />
      <div ref={dot} className="cursor-dot hidden md:block" />
    </>
  );
}

function ThreeRoom() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 1.3, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 0.08, 4.4),
      new THREE.MeshStandardMaterial({ color: "#1b1712", roughness: 0.42, metalness: 0.18 })
    );
    floor.position.y = -1;
    group.add(floor);

    const wall = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 3.2, 0.08),
      new THREE.MeshStandardMaterial({ color: "#f1e7d5", roughness: 0.7 })
    );
    wall.position.set(0, 0.62, -2.15);
    group.add(wall);

    const sofa = new THREE.Mesh(
      new THREE.BoxGeometry(2.6, 0.7, 0.82),
      new THREE.MeshStandardMaterial({ color: "#11100f", roughness: 0.5 })
    );
    sofa.position.set(-0.9, -0.55, -0.7);
    group.add(sofa);

    const table = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.18, 0.8),
      new THREE.MeshStandardMaterial({ color: "#d7b46a", roughness: 0.24, metalness: 0.68 })
    );
    table.position.set(0.92, -0.76, 0.55);
    group.add(table);

    const art = new THREE.Mesh(
      new THREE.BoxGeometry(1.45, 1.05, 0.08),
      new THREE.MeshStandardMaterial({ color: "#6f5730", roughness: 0.35, metalness: 0.25 })
    );
    art.position.set(1.15, 0.86, -2.05);
    group.add(art);

    const lamp = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.26, 1.45, 32),
      new THREE.MeshStandardMaterial({ color: "#efe0bd", roughness: 0.36, metalness: 0.35 })
    );
    lamp.position.set(2.15, -0.28, -0.8);
    group.add(lamp);

    const ambient = new THREE.AmbientLight("#fff2d0", 1.65);
    const key = new THREE.PointLight("#d7b46a", 18, 12);
    key.position.set(-1.8, 2.6, 3.2);
    scene.add(ambient, key);

    const handleMove = (event: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(group.rotation, { y: x * 0.38, x: y * 0.18, duration: 0.8, ease: "power3.out" });
    };

    const resize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    let frame = 0;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      group.position.y = Math.sin(Date.now() * 0.001) * 0.04;
      renderer.render(scene, camera);
    };

    mount.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", resize);
    animate();

    return () => {
      cancelAnimationFrame(frame);
      mount.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="h-[520px] w-full md:h-[680px]" aria-label="Interactive luxury room model" />;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [slider, setSlider] = useState(52);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [message, setMessage] = useState("");
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 55, damping: 28 });
  const springY = useSpring(pointerY, { stiffness: 55, damping: 28 });
  const heroX = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const heroY = useTransform(springY, [-0.5, 0.5], [-5, 5]);

 const filteredProjects = useMemo(() => {
  const data =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return data.slice(0, 6);
}, [activeCategory]);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
    document.documentElement.classList.toggle("light", lightMode);
  }, [lightMode]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".reveal-line span", {
        y: 0,
        duration: 1.45,
        stagger: 0.16,
        ease: "expo.out",
        delay: 0.28
      });

      gsap.fromTo(
        ".hero-image",
        { scale: 1.06 },
        { scale: 1, duration: 2.4, ease: "expo.out" }
      );

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 1.25,
            ease: "expo.out",
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true
            }
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8
          }
        });
      });

      gsap.utils.toArray<HTMLElement>(".counter").forEach((element) => {
        const target = Number(element.dataset.target);
        gsap.fromTo(
          element,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2.4,
            ease: "power2.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: element,
              start: "top 86%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleMouse = (event: React.MouseEvent<HTMLElement>) => {
    pointerX.set(event.clientX / window.innerWidth - 0.5);
    pointerY.set(event.clientY / window.innerHeight - 0.5);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      phone,
      message,
    }),
  });

  const data = await response.json();

  if (data.success) {
    alert("Message Sent Successfully!");

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  } else {
    alert("Failed To Send Message");
  }
};

  return (
    <main className={`grain overflow-hidden selection:bg-champagne/30 ${lightMode ? "bg-porcelain text-noir" : "bg-noir text-ivory"}`}>
      <LoadingScreen />
      <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
        <div className="nav-shell mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-sm md:px-5">
          <a href="#hero" className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-ivory p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.24)]">
              <Image src="/prizm-logo.png" alt="The PRIZM Design Studio" width={40} height={40} className="h-full w-full object-contain" />
            </span>
            <span className="leading-none">
              <span className="block text-base font-black tracking-[0.34em] text-ivory md:text-lg">PRIZM</span>
              <span className="mt-1 block text-[0.56rem] uppercase tracking-[0.3em] text-ivory/58">Design Studio</span>
            </span>
          </a>
          <div className="hidden items-center gap-10 text-[0.72rem] uppercase tracking-[0.34em] text-ivory/70 lg:flex">
            {["Projects", "Services", "Process", "Awards", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-champagne">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              aria-label="Toggle color mode"
              onClick={() => setLightMode((value) => !value)}
              className="grid h-10 w-10 place-items-center border border-white/12 text-ivory transition hover:border-champagne hover:text-champagne"
            >
              {lightMode ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <button
              aria-label="Open navigation"
              onClick={() => setMenuOpen((value) => !value)}
              className="grid h-10 w-10 place-items-center border border-white/15 text-ivory lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mx-auto mt-3 grid max-w-7xl gap-3 glass p-5 text-sm uppercase tracking-[0.22em] text-ivory lg:hidden">
            {["Projects", "Services", "Process", "Awards", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
            ))}
          </div>
        )}
      </nav>

      <section
        id="hero"
        onMouseMove={handleMouse}
        className="relative flex min-h-[100svh] items-end overflow-hidden px-5 pb-12 pt-28 md:px-10 md:pb-16"
      >
        <video
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
  className="absolute inset-0 h-full w-full object-cover hero-video"
>
  <source src="/hero-video.mp4" type="video/mp4" />
</video>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.86),rgba(0,0,0,.38)_48%,rgba(0,0,0,.62)),linear-gradient(180deg,rgba(0,0,0,.46),transparent_32%,rgba(0,0,0,.72))]" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/70 to-transparent" />
        <div className="hero-aura absolute -left-20 top-24 h-72 w-72 rounded-full bg-champagne/20 blur-3xl" />
        <div className="hero-aura absolute bottom-8 right-0 h-80 w-80 rounded-full bg-[#7f6744]/25 blur-3xl" />
        <motion.div
          style={{ x: heroX, y: heroY }}
          className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[0.95fr_0.65fr] md:items-end"
        >
          <div>
            <div className="premium-badge mb-6 inline-flex items-center gap-3 text-[0.62rem] uppercase tracking-[0.38em] text-ivory/78">
              <span className="h-2 w-2 rounded-full bg-champagne" />
              Available for private 2026 commissions
            </div>
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-champagne">The PRIZM Design Studio / ESTD 2012</p>
            <h1 className="max-w-5xl font-display text-[5rem] leading-[0.82] tracking-normal text-ivory md:text-[9.5rem]">
              <span className="reveal-line"><span>PRIZM</span></span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/78 md:text-xl">
              Premium Mumbai interiors shaped with clarity, proportion, craft, and a quietly memorable design language.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#projects" className="premium-button group inline-flex items-center justify-center gap-3 bg-ivory px-7 py-4 text-sm uppercase tracking-[0.22em] text-noir">
                View Commissions <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="premium-button premium-button-ghost inline-flex items-center justify-center gap-3 border border-ivory/35 px-7 py-4 text-sm uppercase tracking-[0.22em] text-ivory">
                Book Consultation <CalendarDays size={16} />
              </a>
            </div>
            <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
              {[
                ["12+", "Years of premium practice"],
                ["120+", "Commissions completed"],
                ["End-to-end", "Design to turnkey handover"]
              ].map(([value, label]) => (
                <div key={label} className="hero-stat border border-white/12 bg-black/24 px-5 py-4 backdrop-blur-md">
                  <p className="font-display text-3xl text-ivory">{value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-ivory/58">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-signature hidden border border-white/16 bg-black/28 p-7 backdrop-blur-xl md:block">
            <div className="flex items-start justify-between gap-6">
              <Image src="/prizm-logo.png" alt="The PRIZM Design Studio logo" width={120} height={120} className="h-24 w-24 bg-ivory object-contain p-3" priority />
              <div className="max-w-[12rem] text-right">
                <p className="text-[0.62rem] uppercase tracking-[0.34em] text-champagne">Signature Scope</p>
                <p className="mt-3 text-sm leading-6 text-ivory/62">Sea-facing residences, boutique hospitality, founder homes, and private villas.</p>
              </div>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.42em] text-champagne">Design Studio</p>
            <p className="mt-4 font-display text-3xl leading-tight text-ivory">Mumbai homes, sea-facing apartments, villas, offices, hospitality, and retail interiors.</p>
            <div className="mt-8 border-t border-white/10 pt-6 text-sm text-ivory/60">
              A high-touch studio experience with material-led concepts, precise drawings, procurement control, and composed final styling.
            </div>
          </div>
        </motion.div>
        <a href="#intro" className="absolute bottom-8 right-6 z-10 hidden items-center gap-3 text-xs uppercase tracking-[0.26em] text-ivory/70 md:flex">
          Scroll <ChevronDown className="animate-bounce text-champagne" size={18} />
        </a>
      </section>

      <section id="intro" className="section-shell bg-ivory text-noir">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div data-reveal className="relative min-h-[620px] overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEDf3o7qYVowK5VVW8DTV8SQmmo2sP0Lo0y5n24w-AVdjkeRmCxrVADWVF0UnhHNyvhyHOxcCogoqXDAv7Va7mJ1g9KcpX-sBS5XEOhLhNuhljP7kDRGSQ93x1MiaQmBUBWnyP9=s1360-w1360-h1020-rw"
              alt="Mumbai heritage-inspired luxury hospitality space"
              fill
              className="soft-image object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
              priority
            />
            <div className="absolute inset-x-8 bottom-8 border border-white/15 bg-black/52 p-7 text-ivory backdrop-blur-md">
              <p className="font-display text-3xl">Bombay spaces composed with craft, light, silence, and precision.</p>
            </div>
          </div>
          <div data-reveal>
            <p className="mb-5 text-xs uppercase tracking-[0.42em] text-antique">Studio Vision</p>
            <h2 className="font-display text-5xl leading-tight md:text-7xl">A studio identity built for contemporary Mumbai luxury.</h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-noir/68">
              The PRIZM Design Studio has shaped refined interiors since 2012. Based in Bombay, the studio pairs clean architectural thinking with Indian materials, custom furniture, vastu-aware planning, and meticulous delivery for clients who want spaces that feel distinctive without shouting.
            </p>
            <div className="mt-9 grid gap-4 text-sm leading-7 text-noir/68 md:grid-cols-2">
              {[
                "Concepts built around Bombay light, sea-facing views, privacy, craft, and family rituals.",
                "Custom furniture, finishes, styling, and execution under one studio vision.",
                "Detailed INR budgets and timelines before fabrication begins.",
                "Premium site coordination across Mumbai homes, villas, offices, retail, and hospitality spaces."
              ].map((item) => (
                <p key={item} className="flex gap-3">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-antique" />
                  {item}
                </p>
              ))}
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                ["120", "Projects"],
                ["12", "Years Experience"],
                ["98", "Client Satisfaction"]
              ].map(([value, label]) => (
                <div key={label} className="border-l border-antique/40 pl-5">
                  <p className="font-display text-5xl"><span className="counter" data-target={value}>0</span>{label === "Client Satisfaction" ? "%" : "+"}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-noir/55">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {signaturePrinciples.map(([title, copy]) => (
                <article key={title} className="editorial-panel border border-black/10 bg-black/[0.025] p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-antique">{title}</p>
                  <p className="mt-4 text-sm leading-7 text-noir/66">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-noir px-5 py-8 text-ivory md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-y border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.42em] text-champagne">Seen in Mumbai design circles</p>
          <div className="flex flex-wrap gap-x-9 gap-y-4 text-sm uppercase tracking-[0.28em] text-ivory/58">
            {pressNotes.map((note) => (
              <span key={note}>{note}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell bg-noir">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.42em] text-champagne">Featured Projects</p>
              <h2 className="font-display text-5xl md:text-7xl">Selected Mumbai commissions</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ivory/62">
                A quieter portfolio view across Worli, Bandra, Colaba, Juhu, Lower Parel, Alibaug, and greater Mumbai.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`premium-button border px-4 py-3 text-xs uppercase tracking-[0.2em] ${
                    activeCategory === category ? "border-champagne bg-champagne text-noir" : "border-white/15 text-ivory/70"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.title}
                data-reveal
                layout
                className="premium-card group relative h-[340px] overflow-hidden border border-white/10"
              >
                <Image src={project.image} alt={project.title} fill className="soft-image object-cover transition duration-[1600ms] group-hover:scale-[1.035]" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-black/10" />
                <div className="absolute bottom-5 right-5 z-20 pointer-events-none opacity-70">
  <Image
    src="/prizm-logo.png"
    alt="PRIZM"
    width={55}
    height={55}
    className="object-contain"
  />
</div>
                <div className="project-frame absolute inset-5 border border-white/10 opacity-0 transition duration-700 group-hover:opacity-100" />
                <div className="absolute left-6 top-6 flex gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-ivory/76">
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                  <h3 className="mt-2 font-display text-4xl">{project.title}</h3>
                  <div className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-ivory/78">
                    
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div data-reveal className="mt-12 grid gap-4 border-y border-white/10 py-8 md:grid-cols-3">
            {[
              ["Project Floor", "INR 35L+ turnkey interiors"],
              ["Lead Time", "8 to 36 weeks by scope"],
              ["Privacy", "NDA-ready for private homes"]
            ].map(([label, value]) => (
              <div key={label} className="flex items-center gap-4">
                {label === "Privacy" ? <Shield className="text-champagne" size={22} /> : <Ruler className="text-champagne" size={22} />}
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-ivory/44">{label}</p>
                  <p className="mt-1 font-display text-2xl">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex justify-center">
  <a
    href="/projects"
    className="premium-button bg-champagne px-8 py-4 text-sm uppercase tracking-[0.2em] text-noir"
  >
    View All Projects
  </a>
</div>
      </section>
      

      <section className="section-shell bg-ivory text-noir">
        <div className="mx-auto max-w-7xl" data-reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-antique">Before and After</p>
          <h2 className="max-w-4xl font-display text-5xl md:text-7xl">Mumbai homes transformed with warmth and restraint.</h2>
          <div className="before-after relative mt-12 h-[560px] overflow-hidden bg-noir">
            <Image
  src="/before (1).png"
  alt="Before Temple Interior"
  fill
  className="object-cover grayscale"
  sizes="100vw"
/>
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - slider}% 0 0)` }}>
              <Image
  src="/after.png"
  alt="After Luxury Temple Interior"
  fill
  className="object-cover"
  sizes="100vw"
/> 
            </div>
            <div className="absolute inset-y-0 w-px bg-champagne" style={{ left: `${slider}%` }} />
            <input
              aria-label="Compare before and after"
              type="range"
              min="10"
              max="90"
              value={slider}
              onChange={(event) => setSlider(Number(event.target.value))}
              className="absolute inset-0 h-full w-full cursor-ew-resize"
            />
           <div className="absolute right-6 top-6 bg-champagne px-4 py-2 text-xs uppercase tracking-[0.25em] text-noir">After</div>
            <div className="absolute right-6 top-6 bg-champagne px-4 py-2 text-xs uppercase tracking-[0.25em] text-noir">Before</div>
          </div>
        </div>
      </section>

      <section id="services" className="section-shell bg-noir">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-champagne">Services</p>
            <h2 className="font-display text-5xl md:text-7xl">A complete private studio for exceptional spaces.</h2>
            <p className="mt-6 text-lg leading-8 text-ivory/62">
              Strategy, design, sourcing, contractor coordination, and installation stay under one calm studio process.
            </p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text], index) => (
              <div key={title} data-reveal className="premium-card group min-h-[260px] border border-white/10 bg-white/[0.02] p-7">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-champagne/50 text-champagne">
                  {index % 2 === 0 ? <Building2 size={21} /> : <Gem size={21} />}
                  </div>
                  <p className="text-xs uppercase tracking-[0.34em] text-ivory/34">0{index + 1}</p>
                </div>
                <h3 className="font-display text-3xl">{title}</h3>
                <p className="mt-5 leading-7 text-ivory/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-[#0c0b09]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div data-reveal className="concierge-panel border border-white/10 p-8 md:p-10">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-champagne">Studio Concierge</p>
            <h2 className="max-w-xl font-display text-5xl md:text-7xl">A white-glove design process your buyers can feel.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ivory/62">
              Premium clients do not just buy drawings. They buy confidence, curation, responsiveness, and a home that feels expensive in every quiet detail.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "Detailed cost intelligence before execution",
                "Vendor, artisan, and site coordination under one studio eye",
                "Styling, artwork, and finishing layers included in the design language",
                "Discreet communication for founder homes and private residences"
              ].map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-7 text-ivory/68">
                  <CheckCircle2 size={18} className="mt-1 shrink-0 text-champagne" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="grid gap-4" data-reveal>
            {consultationFlow.map(([number, title, copy]) => (
              <article key={number} className="premium-card border border-white/10 bg-white/[0.03] p-7 md:p-8">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.34em] text-champagne">Step {number}</p>
                    <h3 className="mt-3 font-display text-4xl text-ivory">{title}</h3>
                  </div>
                  <div className="grid h-14 w-14 place-items-center border border-white/12 text-sm tracking-[0.24em] text-ivory/58">{number}</div>
                </div>
                <p className="mt-5 max-w-2xl leading-7 text-ivory/62">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-ivory text-noir">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div data-reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-antique">PRIZM Material Library</p>
            <h2 className="font-display text-5xl md:text-7xl">Luxury rooted in Indian material intelligence.</h2>
            <p className="mt-7 text-lg leading-8 text-noir/66">
              The palette is edited for permanence: tactile, layered, climate-aware, and specific enough to give every project its own signature.
            </p>
          </div>
          <div data-reveal className="grid gap-4 md:grid-cols-2">
            {materials.map(([name, detail]) => (
              <article key={name} className="material-panel premium-card min-h-52 border border-black/10 p-7">
                <p className="text-xs uppercase tracking-[0.3em] text-antique">Finish</p>
                <h3 className="mt-8 font-display text-4xl">{name}</h3>
                <p className="mt-4 leading-7 text-noir/62">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[100svh] overflow-hidden bg-ivory text-noir">
        <div className="absolute inset-0 opacity-20" data-parallax>
          <Image src="https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&w=1800&q=85" alt="" fill className="object-cover" sizes="100vw" />
        </div>
        <div className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-10 px-5 py-24 md:px-10 lg:grid-cols-[.8fr_1.2fr]">
          <div data-reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-antique">3D Experience</p>
            <h2 className="font-display text-5xl md:text-7xl">Walk the room before it exists.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-noir/66">Our visualization team turns material palettes, furniture scale, and lighting strategy into immersive spatial previews for confident decisions.</p>
          </div>
          <div data-reveal className="relative">
            <ThreeRoom />
            <div className="pointer-events-none absolute left-8 top-8 glass p-5 text-ivory">
              <p className="text-xs uppercase tracking-[0.32em] text-champagne">Mouse-reactive model</p>
              <p className="mt-2 font-display text-3xl">Bandra Salon Study</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-noir">
        <div data-reveal className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.42em] text-champagne">Testimonials</p>
          <h2 className="max-w-4xl font-display text-5xl md:text-7xl">Trusted by Mumbai families, founders, and hospitality clients.</h2>
          <div className="mt-14 overflow-hidden">
            <div className="testimonial-track flex w-max gap-5">
              {[...testimonials, ...testimonials].map(([name, role, quote], index) => (
                <article key={`${name}-${index}`} className="glass premium-card w-[330px] p-7 md:w-[430px]">
                  <div className="mb-7 flex gap-1 text-champagne">{Array.from({ length: 5 }).map((_, starIndex) => <Star key={starIndex} size={16} fill="currentColor" />)}</div>
                  <p className="font-display text-3xl leading-snug">&ldquo;{quote}&rdquo;</p>
                  <div className="mt-7 flex items-center gap-4">
                    <div className="grid h-12 w-12 place-items-center bg-champagne font-display text-xl text-noir">{name[0]}</div>
                    <div>
                      <p className="font-medium">{name}</p>
                      <p className="text-sm text-ivory/55">{role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="section-shell bg-ivory text-noir">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="mb-16 max-w-3xl">
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-antique">Design Process</p>
            <h2 className="font-display text-5xl md:text-7xl">A composed path from private brief to final reveal.</h2>
          </div>
          <div className="relative grid gap-6 md:grid-cols-5">
            <div className="absolute left-0 top-10 hidden h-px w-full bg-antique/25 md:block" />
            {process.map((step, index) => (
              <div key={step} data-reveal className="relative bg-ivory p-2">
                <div className="mb-7 grid h-20 w-20 place-items-center border border-antique/35 bg-noir font-display text-3xl text-champagne">{index + 1}</div>
                <h3 className="font-display text-3xl">{step}</h3>
                <p className="mt-4 text-sm leading-7 text-noir/60">
                  {[
                    "Family goals, Mumbai property context, vastu preferences, budget, timeline, and decision makers.",
                    "Atmosphere, references, Indian craft direction, and early investment guidance.",
                    "Drawings, materials, lighting, furniture, and approval-ready specifications.",
                    "Vendor management, custom fabrication, contractor coordination, and quality control.",
                    "Installation, styling, documentation, handover, and aftercare."
                  ][index]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="section-shell bg-noir">
        <div className="mx-auto max-w-7xl">
          <div data-reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.42em] text-champagne">Awards and Recognition</p>
              <h2 className="max-w-4xl font-display text-5xl md:text-7xl">Recognized within Mumbai&apos;s premium design conversation.</h2>
            </div>
            <Award className="text-champagne" size={72} />
          </div>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award) => (
              <div key={award} data-reveal className="premium-card flex min-h-32 items-center justify-between border border-white/10 px-6 py-7">
                <p className="font-display text-3xl">{award}</p>
                <Sparkles className="text-champagne" size={22} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-shell bg-ivory text-noir">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.95fr_1.05fr]">
          <div data-reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.42em] text-antique">Contact</p>
            <h2 className="font-display text-5xl md:text-7xl">Begin with a PRIZM design consultation.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-noir/66">
              For Mumbai homeowners, builders, developers, hoteliers, and founders seeking a refined studio partner.
            </p>
            <div className="mt-10 grid gap-4 text-noir/70">
              <p className="flex items-center gap-3"><MapPin size={18} className="text-antique" /> A- LANDMARK BUILDING, Tokarkhada, Samarvarni, Silvassa, Dadra and Nagar Haveli and Daman and Diu 396230</p>
              <p className="flex items-center gap-3"><Phone size={18} className="text-antique" /> +91 84018 14312</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-antique" />raj.interiors312@gmail.com</p>
            </div>
            <a href="https://wa.me/8401814312" className="premium-button mt-8 inline-flex items-center gap-3 bg-noir px-7 py-4 text-sm uppercase tracking-[0.22em] text-ivory">
              WhatsApp Studio <Send size={16} />
            </a>
            <iframe
              title="The PRIZM Design Studio location map"
              className="mt-10 h-72 w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Mumbai%20Maharashtra%20India&output=embed"
            />
          </div>
          <div data-reveal className="contact-shell relative overflow-hidden border border-black/10 bg-noir p-6 text-ivory shadow-glass md:p-10">
            <div className="pointer-events-none absolute -right-20 top-0 h-56 w-56 rounded-full bg-champagne/12 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/6 blur-3xl" />
            <div className="relative mb-8 flex flex-col gap-5 border-b border-white/10 pb-7 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.34em] text-champagne">Private Enquiry</p>
                <p className="mt-3 max-w-md font-display text-3xl">Tell us about your project and we&apos;ll shape the right first conversation.</p>
              </div>
              <div className="grid gap-2 text-xs uppercase tracking-[0.24em] text-ivory/52">
                <span>Residential</span>
                <span>Hospitality</span>
                <span>Commercial</span>
              </div>
            </div>
          <form onSubmit={handleSubmit} className="relative">
            <div className="grid gap-5 md:grid-cols-2">
              <input
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="premium-field border border-white/12 bg-white/5 px-5 py-4 text-ivory placeholder:text-ivory/60 caret-ivory outline-none"
  placeholder="Name"
  aria-label="Name"
/>
<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="premium-field border border-white/12 bg-white/5 px-5 py-4 text-ivory placeholder:text-ivory/60 caret-ivory outline-none"
  placeholder="Email"
  aria-label="Email"
/>
<input
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="premium-field border border-white/12 bg-white/5 px-5 py-4 text-ivory placeholder:text-ivory/60 caret-ivory outline-none"
  placeholder="Phone"
  aria-label="Phone"
/>
              <select className="premium-field border border-white/12 bg-noir px-5 py-4 text-ivory outline-none" aria-label="Project type">
                <option>Apartment / Flat</option>
                <option>Bungalow / Villa</option>
                <option>Hospitality</option>
                <option>Office / Commercial</option>
                <option>Retail / Showroom</option>
              </select>
              <select className="premium-field border border-white/12 bg-noir px-5 py-4 text-ivory outline-none md:col-span-2" aria-label="Estimated investment">
                <option>Estimated Investment</option>
                <option>INR 35L to 1Cr</option>
                <option>INR 1Cr to 3Cr</option>
                <option>INR 3Cr+</option>
                <option>Confidential</option>
              </select>
            </div>
            <textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="premium-field mt-5 min-h-40 w-full border border-white/12 bg-white/5 px-5 py-4 text-ivory placeholder:text-ivory/60 caret-ivory outline-none"
  placeholder="Tell us about your project..."
  aria-label="Project details"
/><button
  type="submit"
  className="premium-button mt-6 inline-flex w-full items-center justify-center gap-3 bg-champagne px-7 py-4 text-sm uppercase tracking-[0.22em] text-noir"
>
  Request Design Consultation
  <ArrowRight size={16} />
</button>
          </form>
          </div>
        </div>
      </section>

      <footer className="bg-noir px-5 py-12 text-ivory md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 border-t border-white/10 pt-10 md:grid-cols-[1.1fr_.7fr_.7fr_.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid h-16 w-16 place-items-center bg-ivory p-2">
                <Image src="/prizm-logo.png" alt="The PRIZM Design Studio logo" width={54} height={54} className="h-full w-full object-contain" />
              </span>
              <div>
                <p className="font-black tracking-[0.32em]">PRIZM</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-ivory/55">Design Studio / ESTD 2012</p>
              </div>
            </div>
            <p className="mt-4 max-w-md leading-7 text-ivory/55">Premium Mumbai interiors, architecture, visualization, and turnkey project delivery for apartments, villas, offices, showrooms, and hospitality properties.</p>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-champagne">Office</p>
            <div className="space-y-3 text-sm leading-7 text-ivory/58">
              <p>Silvassa / Dadra & Nagar Haveli</p>
              <p>By appointment only</p>
              <p>Private consultations across South Mumbai, Bandra, Juhu, Powai, Thane, and Alibaug</p>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-champagne">Newsletter</p>
            <div className="flex border border-white/12 bg-white/[0.03]">
              <input aria-label="Newsletter email" className="premium-field min-w-0 flex-1 bg-transparent px-4 py-4 text-ivory placeholder:text-ivory/55 outline-none" placeholder="Email address" />
              <button aria-label="Subscribe" className="grid w-14 place-items-center bg-champagne text-noir"><ArrowRight size={18} /></button>
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-champagne">Social</p>
            <div className="flex gap-3">
              <a aria-label="Instagram" href="https://www.instagram.com/the_prizm_design_studio?igsh=aHc2NHhlOWpqcDI1" className="grid h-11 w-11 place-items-center border border-white/12 transition hover:border-champagne hover:text-champagne"><Instagram size={18} /></a>
              <a aria-label="LinkedIn" href="#" className="grid h-11 w-11 place-items-center border border-white/12 transition hover:border-champagne hover:text-champagne"><Linkedin size={18} /></a>
              <a aria-label="Email" href="mailto:raj.interiors312@gmail.com" className="grid h-11 w-11 place-items-center border border-white/12 transition hover:border-champagne hover:text-champagne"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
