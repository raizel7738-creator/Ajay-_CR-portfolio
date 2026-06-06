import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, Mail, MapPin, Phone, Send } from "lucide-react"
import GlassCard from "./ui/GlassCard"
import SectionTitle from "./ui/SectionTitle"

const contactInfo = [
  { icon: Mail, label: "Email", value: "ajaycr2005@gmail.com", href: "mailto:ajaycr2005@gmail.com" },
  { icon: Phone, label: "Phone", value: "9778200321", href: "tel:9778200321" },
  { icon: "github", label: "GitHub", value: "raizel7738-creator", href: "https://github.com/raizel7738-creator" },
  { icon: MapPin, label: "Location", value: "Kerala, India", href: null },
]

const GitHubMark = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.66-.31-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.05.14 3.01.4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12.01 12.01 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
  </svg>
)

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.open(`mailto:ajaycr2005@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    setForm({ name: "", email: "", message: "" })
  }

  const fieldClass = "w-full bg-white/[0.04] border border-white/[0.1] rounded-xl px-4 py-3 text-white text-sm placeholder:text-zinc-600 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/15 transition-all"

  return (
    <section id="Contact" className="section-panel py-20 pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Have an idea, opening, or build in mind?" subtitle="Send a message and I will turn it into a clear next step." centered />

        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-8">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <GlassCard key={label} hover className="p-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/12 border border-accent/25 flex items-center justify-center flex-shrink-0 text-accent">
                    {Icon === "github" ? <GitHubMark /> : <Icon size={20} />}
                  </div>

                  <div className="min-w-0 flex-grow">
                    <p className="text-zinc-500 text-sm mb-1">{label}</p>

                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="break-words text-white font-semibold hover:text-accent transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{value}</p>
                    )}
                  </div>
                </div>
              </GlassCard>
            ))}
          </motion.div>

          <motion.form initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={handleSubmit}>
            <GlassCard className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={fieldClass} />
                <input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={fieldClass} />
              </div>
              <textarea placeholder="Tell me what you want to build" rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${fieldClass} resize-none`} />
              <button type="submit" className="w-full min-h-12 px-6 py-3 bg-accent text-accent-ink rounded-xl font-bold text-sm hover:bg-accent-light transition-colors flex items-center justify-center gap-2 active:scale-[0.99]">
                {sent ? (
                  <><CheckCircle size={18} /> Message prepared</>
                ) : (
                  <><Send size={18} /> Send message</>
                )}
              </button>
            </GlassCard>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
