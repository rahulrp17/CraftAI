
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import {  Mail,  Phone,  MapPin,  Send,  Loader2,  ChevronDown,  Sparkles,  MessageCircle,} from "lucide-react";
import { toast } from "react-toastify";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Most orders are delivered within 3–7 business days across India.",
  },
  {
    question: "Are all products handmade?",
    answer:
      "Yes. Every CraftAI product is carefully handcrafted by skilled artisans.",
  },
  {
    question: "Can I return a product?",
    answer:
      "Yes. Returns are accepted within 7 days for eligible products.",
  },
  {
    question: "Do you offer custom orders?",
    answer:
      "Absolutely! Contact us with your requirements and we'll help you.",
  },
];

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [openFAQ, setOpenFAQ] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully 🚀");

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F8F5EF] pt-14">

      {/* Animated Background Blobs */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 18,
        }}
        className="  absolute  top-20  left-[-120px]  w-[320px]  h-[320px]  rounded-full  bg-green-300/30  blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 22,
        }}
        className="  absolute  top-[30%]  right-[-120px]  w-[350px]  h-[350px]  rounded-full  bg-emerald-200/40  blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 12,
        }}
        className="  absolute  bottom-[-120px]  left-[30%]  w-[280px]  h-[280px]  rounded-full  bg-green-100  blur-3xl"
      />

      {/* Hero Section */}

      <section className="relative z-10 px-4 py-20 text-center">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div
            className="  inline-flex  items-center  gap-2  px-5  py-2  rounded-full  bg-white/60  backdrop-blur-xl  border  border-white/40  shadow-lg"
          >
            <Sparkles
              size={18}
              className="text-green-700"
            />

            <span className="text-green-700 font-medium">
              CraftAI Support
            </span>
          </div>

          <h1
            className="  mt-8  text-5xl  md:text-7xl  font-black  text-green-900  leading-tight"
          >
            Let's Create
            <br />

            Something Beautiful
          </h1>

          <p
            className="  max-w-2xl  mx-auto  mt-6  text-gray-600  text-lg  leading-relaxed"
          >
            Questions, custom orders, collaborations,
            or simply saying hello —
            we'd love to hear from you.
          </p>

          <div
            className="  mt-10  flex  justify-center  gap-4  flex-wrap"
          >
            <div
              className="   px-5   py-3   rounded-2xl   bg-white/70   backdrop-blur-xl   shadow-lg "
            >
              ✨ 100% Handmade
            </div>

            <div
              className="    px-5    py-3    rounded-2xl    bg-white/70    backdrop-blur-xl    shadow-lg  "
            >
              🚚 Fast Delivery
            </div>

            <div
              className="  px-5  py-3  rounded-2xl  bg-white/70  backdrop-blur-xl  shadow-lg"
            >
              ❤️ Trusted by Customers
            </div>
          </div>
        </motion.div>

      </section>

      {/* Main Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Glass Contact Form */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
            className="  bg-white/60  backdrop-blur-2xl  border  border-white/40  shadow-2xl  rounded-[40px]  p-6  md:p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div
                className="  w-14  h-14  rounded-2xl  bg-green-100  flex  items-center  justify-center"
              >
                <MessageCircle
                  size={28}
                  className="text-green-700"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-green-900">
                  Send a Message
                </h2>

                <p className="text-gray-500">
                  We'd love to hear from you.
                </p>
              </div>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className=" w-full rounded-2xl border border-green-300 bg-white/80 px-5 py-4 outline-none transition focus:ring-2 focus:ring-green-600
                "
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="  w-full  rounded-2xl  border  border-green-300  bg-white/80  px-5  py-4  outline-none  transition  focus:ring-2  focus:ring-green-600"
              />

              {/* Subject */}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="  w-full  rounded-2xl  border  border-green-300  bg-white/80  px-5  py-4  outline-none  transition  focus:ring-2  focus:ring-green-600"
              />

              {/* Message */}
              <textarea
                rows="6"
                name="message"
                placeholder="Tell us how we can help..."
                required
                className="  w-full  rounded-2xl  border  border-green-300  bg-white/80  px-5  py-4  outline-none  resize-none  transition  focus:ring-2  focus:ring-green-600"
              />

              {/* Premium Send Button */}
              <motion.button
                whileHover={!loading ? {
                  scale: 1.02,
                } : {}}
                whileTap={!loading ? {
                  scale: 0.97,
                } : {}}
                type="submit"
                disabled={loading}
                className={`  w-full  py-4  rounded-2xl  text-white  font-semibold  flex  items-center  justify-center  gap-3  shadow-xl  transition-all  ${    loading      ? "bg-green-500 cursor-not-allowed"      : "bg-gradient-to-r from-green-700 to-emerald-600 hover:shadow-green-300"  }`}
              >
                {loading ? (
                  <>
                    <Loader2
                      size={20}
                      className="animate-spin"
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />

                    Send Message
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

          {/* Floating Contact Cards */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: false }}
            transition={{
              duration: 0.8,
            }}
            className="space-y-6"
          >

            {/* Email Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}className="  bg-white/70  backdrop-blur-2xl  border  border-white/40  rounded-[32px]  shadow-xl  p-6  flex  items-start  gap-5"
            >
              <div
                className="  w-16  h-16  rounded-2xl  bg-green-100  flex  items-center  justify-center  shrink-0"
              >
                <Mail
                  size={30}
                  className="text-green-700"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900">
                  Email Us
                </h3>

                <p className="text-gray-500 mt-2">
                  Reach our support team anytime.
                </p>

                <a
                  href="mailto:support@craftai.com"
                  className="  mt-3  inline-block  text-green-700  font-semibold"
                >
                  support@craftai.com
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="  bg-white/70  backdrop-blur-2xl  border  border-white/40  rounded-[32px]  shadow-xl  p-6  flex  items-start  gap-5"
            >
              <div
                className="  w-16  h-16  rounded-2xl  bg-green-100  flex  items-center  justify-center  shrink-0"
              >
                <Phone
                  size={30}
                  className="text-green-700"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900">
                  Call Us
                </h3>

                <p className="text-gray-500 mt-2">
                  We're available Monday to Saturday.
                </p>

                <a
                  href="tel:+919876543210"
                  className="  mt-3  inline-block  text-green-700  font-semibold"
                >
                  +91 9342830199
                </a>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="  bg-white/70  backdrop-blur-2xl  border  border-white/40  rounded-[32px]  shadow-xl  p-6  flex  items-start  gap-5"
            >
              <div
                className="  w-16  h-16  rounded-2xl  bg-green-100  flex  items-center  justify-center  shrink-0"
              >
                <MapPin
                  size={30}
                  className="text-green-700"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-green-900">
                  Visit Us
                </h3>

                <p className="text-gray-500 mt-2">
                  Trichy, Tamil Nadu, India
                </p>

                <span
                  className="  mt-3  inline-block  text-green-700  font-semibold"
                >
                  CraftAI Headquarters
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </section>

      {/* Premium Google Map */}
      <section className="relative z-10 px-4 pb-20">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: false }}
          className="  max-w-7xl  mx-auto  overflow-hidden  rounded-[40px]  shadow-2xl  border  border-white/40"
        >
          <iframe
            title="CraftAI Location"
            src="https://www.google.com/maps?q=Trichy,Tamil+Nadu,India&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
            allowFullScreen
          />

        </motion.div>

      </section>
      {/* ================= FAQ SECTION ================= */}
      <section className="relative z-10 px-4 pb-24">

        <div className="max-w-4xl mx-auto">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <span
              className="  inline-flex  items-center  gap-2  px-4  py-2  rounded-full  bg-white/70  backdrop-blur-xl  shadow-lg  text-green-700  font-medium"
            >
              <Sparkles size={16} />
              Frequently Asked Questions
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-5xl
                font-black
                text-green-900
              "
            >
              Got Questions?
            </h2>

            <p className="mt-4 text-gray-600">
              Find quick answers to common questions.
            </p>
          </motion.div>

          <div className="space-y-5">

            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: false }}
                transition={{
                  delay: index * 0.1,
                }}
                className="  bg-white/70  backdrop-blur-2xl  border  border-white/40  rounded-[28px]  shadow-xl  overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(
                      openFAQ === index
                        ? null
                        : index
                    )
                  }
                  className="  w-full  flex  items-center  justify-between  px-6  py-6  text-left"
                >
                  <span
                    className="
                      text-xl
                      font-semibold
                      text-green-700
                    "
                  >
                    {faq.question}
                  </span>

                  <motion.div
                    animate={{
                      rotate:
                        openFAQ === index
                          ? 180
                          : 0,
                    }}
                  >
                    <ChevronDown
                      className="text-green-700"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <div
                        className="  px-6  pb-6  text-gray-600  leading-relaxed"
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;



