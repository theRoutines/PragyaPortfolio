import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactTerminal = () => {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState("connect");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const terminalEndRef = useRef(null);

  const addLine = (text) => {
    setLines((prev) => [...prev, text]);
  };

  /* Auto scroll */
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  /* Boot */
  useEffect(() => {
    addLine("CORE-SYSTEM v2.1 INITIALIZED");
    addLine("Type 'connect pragya singh' to establish secure link");
  }, []);



  const handleCommand = (cmd) => {
    addLine(`> ${cmd}`);

    if (step === "connect") {
      if (cmd.toLowerCase() === "connect pragya singh") {
        addLine("Establishing secure connection...");
        setTimeout(() => {
          addLine("Connection established ✔");
          addLine("Enter your name:");
          setStep("name");
        }, 800);
      } else {
        addLine("Invalid command. Use: connect pragya singh");
      }
    }

    else if (step === "name") {
      setFormData((p) => ({ ...p, name: cmd }));
      addLine(`Hello ${cmd}`);
      addLine("Enter your email:");
      setStep("email");
    }

    else if (step === "email") {
      setFormData((p) => ({ ...p, email: cmd }));
      addLine("Email recorded");
      addLine("Enter your message:");
      setStep("message");
    }

    else if (step === "message") {
      setFormData((p) => ({ ...p, message: cmd }));
      addLine("Message captured");
      addLine("Type 'send' to transmit");
      setStep("send");
    }

    else if (step === "send") {
      if (cmd.toLowerCase() === "send") {
        runFakeBackend();
      } else {
        addLine("Type 'send' to proceed");
      }
    }
  };

  /* EmailJS Integration */
  const runFakeBackend = () => {
    setStep("processing");

    const logs = [
      "Initializing secure channel...",
      "Authenticating node...",
      "Encrypting payload...",
      "Routing packets...",
      "Sending transmission...",
      "Awaiting response..."
    ];

    logs.forEach((log, i) => {
      setTimeout(() => {
        addLine(log);
      }, i * 700);
    });

    const sendDelay = logs.length * 700;

    setTimeout(() => {
      emailjs
        .send(
          "service_v6vpcck",
          "template_ab54ywg",
          {
            from_name: formData.name,
            reply_to: formData.email,
            message: formData.message,
            name: formData.name,
            email: formData.email
          },
          "FiKf890GIymh9eHGD"
        )
        .then(
          () => {
            addLine("Message delivered successfully ✔");
            addLine("I will reply shortly.");
          },
          (error) => {
            addLine("Transmission failed ❌");
            addLine("Error: " + (error.text || "Network validation error."));
          }
        );
    }, sendDelay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleCommand(input.trim());
    setInput("");
  };

  return (
    <section className="bg-sand-dune py-32 px-6 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-pine-teal tracking-tight">
            Initiate Contact
          </h2>
        </div>

        {/* TERMINAL */}
        <div className="bg-pine-teal rounded-[2.5rem] border border-dark-teal/30 shadow-[0_40px_120px_rgba(8,44,45,0.4)] overflow-hidden">

          {/* TOP BAR */}
          <div className="flex justify-between items-center px-6 py-4 bg-dark-teal/40">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#FF5F56] rounded-full" />
              <div className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
              <div className="w-3 h-3 bg-[#27C93F] rounded-full" />
            </div>

            <div className="text-[10px] text-pale-oak/40 tracking-widest">
              SECURE TERMINAL
            </div>

            <div className="w-10" />
          </div>

          {/* BODY */}
          <div className="p-8 font-mono text-pale-oak text-sm min-h-[420px] relative">

            {/* SCANLINE */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.02)_50%,rgba(0,0,0,0.05)_50%)] bg-[length:100%_4px]" />

            {/* OUTPUT */}
            <div className="space-y-2 h-[300px] overflow-y-auto pr-2">
              {lines.map((line, index) => (
                <div key={index} className="leading-relaxed">
                  {line}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* INPUT */}
            {step !== "processing" && (
              <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-6">
                <span className="text-emerald-400">{">"}</span>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent outline-none text-pale-oak caret-emerald-400"
                />
              </form>
            )}
          </div>

          {/* FOOTER */}
          <div className="px-6 py-3 text-[10px] text-pale-oak/20 tracking-widest border-t border-white/5">
            NODE: PRAGYA_CORE · STATUS: ACTIVE · LATENCY: 42ms
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTerminal;