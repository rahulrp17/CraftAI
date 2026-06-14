import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Bot, Send, X, Sparkles, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../../context/AuthContext";
const AIChat = () => {
  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");
  const { backendUrl } = useAuth();
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "👋 Hi! I'm CraftAI Assistant. Ask me about products, prices, gift ideas, home decor, handmade crafts and more.",
    },
  ]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);

    const currentMessage = input;

    setInput("");

    try {
      setLoading(true);

      const res = await axios.post(`${backendUrl}/api/ai/chat`, {
        message: currentMessage,
      });

      console.log(res.data);

      if (res.data.type === "products") {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            type: "products",
            products: res.data.products,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            text: res.data.reply,
          },
        ]);
      }
    } catch (error) {
      console.log(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "❌ AI service is currently unavailable.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      {/* Premium Floating Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
        }}
        transition={{
          opacity: { duration: 0.4 },
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="fixed cursor-pointer bottom-5 right-5 md:bottom-6 md:right-6 z-50"
      >
        <button
          onClick={() => setOpen(!open)}
          className="  group  relative cursor-pointer  overflow-hidden  flex  items-center  gap-3  rounded-full  bg-white/90  backdrop-blur-xl  border  border-green-100  shadow-[0_20px_50px_rgba(0,0,0,0.12)]  hover:shadow-[0_25px_60px_rgba(22,163,74,0.25)]  transition-all  duration-500  px-4  py-3"
        >
          {/* Glow */}
          <span className=" absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-green-500/10 via-emerald-500/20 to-green-500/10" />
          {/* Bot Icon */}
          <div className="  relative  flex  items-center  justify-center  w-12  h-12  rounded-full  bg-gradient-to-br  from-green-600  to-emerald-500  text-white  shadow-lg">
            <Bot size={24} />

            {/* Pulse Dot */}
            <span className="   absolute   top-0   right-0   w-3   h-3   rounded-full   bg-green-400 " />

            <span className="    absolute    top-0    right-0    w-3    h-3    rounded-full    bg-green-400    animate-ping  " />
          </div>

          {/* Text */}
          <div className="hidden sm:block text-left relative">
            <p className="text-xs text-gray-500 font-medium">
              CraftAI Assistant
            </p>

            <p className="font-bold text-green-800">Ask Anything</p>
          </div>
        </button>
      </motion.div>
      {/* Chat Window */}

      {open && (
        <div className="  fixed  bottom-24  right-6  w-[330px]  h-[500px]  lg:w-[380px]  lg:h-[600px]  z-[999]  bg-white  rounded-3xl  shadow-2xl  overflow-hidden  flex  flex-col">
          {/* Header */}

          <div className="  bg-gradient-to-r  from-green-700  to-emerald-600  text-white  p-4  flex  justify-between  items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={20} />

              <h2 className="font-bold text-lg">CraftAI Assistant</h2>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="hover:rotate-90 transition"
            >
              <X />
            </button>
          </div>

          {/* Messages */}

          <div className="  flex-1  overflow-y-auto  p-4  bg-[#f8f5ef]  space-y-3">
            {messages.map((msg, index) => (
              <div key={index}>
                {msg.type === "products" ? (
                  <div className="space-y-3">
                    {msg.products.map((product) => (
                      <div
                        key={product._id}
                        className="  bg-white  rounded-2xl  overflow-hidden    border border-green-200 shadow-md"
                      >
                        <img
                          src={product.image}
                          alt={product.title}
                          className="  w-full  h-40  object-cover"
                        />

                        <div className="p-3">
                          <h3 className="font-semibold">{product.title}</h3>

                          <p className="text-green-700 font-bold">
                            ₹{product.price}
                          </p>

                          <p className="text-xs text-gray-500">
                            Stock: {product.stock}
                          </p>

                          <Link
                            to={`/products/${product._id}`}
                            className=" block mt-2 text-center bg-green-700 text-white py-2 rounded-xl    "
                          >
                            View Product
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div
                    className={`max-w-[80%] p-3 rounded-xl whitespace-pre-wrap ${
                      msg.role === "user"
                        ? "ml-auto bg-green-700 text-white"
                        : "bg-gray-100"
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="bg-white shadow p-3 rounded-2xl w-fit">
                <Loader2 className="animate-spin" size={18} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}

          <div className="px-3 py-2  bg-white">
            <div className="flex gap-2 overflow-x-auto">
              <button
                onClick={() => setInput("Suggest wood craft products")}
                className="  text-xs  px-3  py-2  rounded-full  bg-green-100  whitespace-nowrap"
              >
                Wood Crafts
              </button>

              <button
                onClick={() => setInput("Best handmade gifts")}
                className="  text-xs  px-3  py-2  rounded-full  bg-green-100  whitespace-nowrap"
              >
                Gifts
              </button>

              <button
                onClick={() => setInput("Home decor ideas")}
                className="  text-xs  px-3  py-2  rounded-full  bg-green-100  whitespace-nowrap"
              >
                Decor
              </button>

              <button
                onClick={() => setInput("Fashion ")}
                className="  text-xs  px-3  py-2  rounded-full  bg-green-100  whitespace-nowrap"
              >
                Fashion
              </button>
            </div>
          </div>

          {/* Input */}

          <div className="  p-3  bg-white  flex  gap-2">
            <input
              value={input}
              onKeyDown={handleKeyDown}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask CraftAI..."
              className="  flex w-60  border lg:flex-1  rounded-xl border-green-300  px-4  py-3  outline-none"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="  bg-green-700  hover:bg-green-800  text-white  px-4  rounded-xl  transition"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
