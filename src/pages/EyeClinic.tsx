import { Link } from "react-router-dom";
import { Clock, Stethoscope, Eye, Baby, Brain, Scissors } from "lucide-react";
import hero8 from "@/assets/hero-8.jpg";
import hero9 from "@/assets/hero-9.jpg";
import hero7 from "@/assets/hero-7.jpg";

const clinicServices = [
  { icon: Baby, title: "Pediatric Eye Care", desc: "Specialized diagnosis and treatment for children from infancy through adolescence." },
  { icon: Eye, title: "Cataract & Glaucoma", desc: "Advanced surgical and medical management of cataracts and glaucoma." },
  { icon: Stethoscope, title: "Low Vision Assessment", desc: "Comprehensive evaluation and optical aids to maximize remaining vision." },
  { icon: Brain, title: "Neuro-Ophthalmology", desc: "Diagnosis of vision problems related to the nervous system." },
  { icon: Scissors, title: "Strabismus & Ptosis Surgery", desc: "Corrective surgery for squint (misaligned eyes) and drooping eyelids." },
  { icon: Eye, title: "ROP Screening", desc: "Early detection of Retinopathy of Prematurity in premature newborns." },
];

const hours = [
  { day: "Monday – Friday", time: "8:00 AM – 5:00 PM" },
  { day: "Saturday", time: "8:00 AM – 2:00 PM" },
  { day: "Sunday", time: "Closed" },
  { day: "Low Vision Clinic", time: "Fridays at 9:00 AM" },
];

const EyeClinic = () => (
  <div>
    <section className="relative py-20 bg-primary">
      <div className="container">
        <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">Medical Services</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground max-w-3xl">
          The Lens Eye Clinic
        </h1>
        <p className="mt-4 text-primary-foreground/80 text-lg max-w-2xl">
          Expert eye care from pediatric ophthalmology to advanced surgical procedures, led by Prof. Adedayo Adio.
        </p>
      </div>
    </section>

    {/* Overview */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Comprehensive Eye Care</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Lens Eye Clinic provides expert diagnosis and treatment for a wide range of eye conditions. Our team, led by a fellowship-trained pediatric ophthalmologist, brings world-class expertise to Port Harcourt.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are equipped for both outpatient consultations and surgical procedures, including cataract extraction, strabismus correction, and ptosis repair.
          </p>
        </div>
        <img src={hero8} alt="Eye examination" className="rounded-2xl shadow-xl w-full" />
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-blue py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">Clinic Services</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clinicServices.map((s, i) => (
            <div key={i} className="p-8 rounded-2xl bg-background border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <s.icon size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Surgery */}
    <section className="py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <img src={hero9} alt="Surgery" className="rounded-2xl shadow-xl w-full" />
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Surgical Excellence</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our surgical team performs sight-restoring procedures with precision and care. From routine cataract surgeries to complex pediatric operations, we bring the best of ophthalmic surgery to our patients.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Every surgery is performed with state-of-the-art monitoring and the highest safety standards.
          </p>
        </div>
      </div>
    </section>

    {/* Hours & Training */}
    <section className="section-warm py-20">
      <div className="container grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <Clock size={28} className="text-secondary" /> Clinic Hours
          </h2>
          <div className="space-y-4">
            {hours.map((h, i) => (
              <div key={i} className="flex justify-between py-3 border-b border-border">
                <span className="font-medium text-foreground">{h.day}</span>
                <span className="text-muted-foreground">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img src={hero7} alt="Low Vision Course" className="rounded-2xl shadow-xl w-full mb-6" />
          <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Professional Training</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We offer intensive low vision courses for optometrists, ophthalmologists, and eye care workers, equipping professionals across Nigeria with vital skills.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default EyeClinic;
