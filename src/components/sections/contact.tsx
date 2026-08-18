"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { MotionContainer } from "@/components/ui/motion-container";
import { Button } from "@/components/ui/button";
import { contactContent } from "@/content/contact";
import { useLanguage } from "@/context/language-context";

export const Contact: React.FC = () => {
  const { language } = useLanguage();
  const content = contactContent[language];
  const [transmitted, setTransmitted] = React.useState(false);

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28 border-b border-cyber-cyan/30">
      <Container size="lg">
        <MotionContainer delay={0.1}>
          <SpotlightCard className="p-8 sm:p-14 text-center space-y-8 max-w-3xl mx-auto shadow-2xl border-cyber-yellow/50 bg-[#0c0e14]/95">
            <div className="space-y-4 max-w-xl mx-auto font-mono">
              <span className="text-xs font-bold text-cyber-yellow tracking-widest uppercase block">
                {"// 05_SECURE_UPLINK_NODE"}
              </span>
              <div className="flex justify-center">
                <Badge variant="success" size="sm" className="bg-cyber-yellow/15 text-cyber-yellow border-cyber-yellow/30 font-mono">
                  [{content.statusMessage}]
                </Badge>
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase neon-glow-cyan">
                {content.sectionTitle}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {content.sectionDescription}
              </p>
            </div>

            {/* Interactive Signal Terminal Form Panel */}
            <div className="max-w-xl mx-auto p-5 border border-cyber-cyan/30 rounded bg-cyber-black/80 space-y-4 text-left font-mono text-xs">
              <div className="flex items-center justify-between border-b border-cyber-cyan/20 pb-2 text-[10px] text-cyber-cyan">
                <span>CHANNEL_FREQ: 142.80 MHz</span>
                <span>STATUS: ENCRYPTED (AES-256)</span>
              </div>

              {transmitted ? (
                <div className="p-4 border border-cyber-yellow bg-cyber-yellow/10 rounded text-cyber-yellow font-bold text-center space-y-1">
                  <p>[ SIGNAL TRANSMITTED SUCCESSFULLY ]</p>
                  <p className="text-[10px] text-muted-foreground font-normal">
                    {language === "en" ? "Opening mail client protocol..." : "Abriendo protocolo de correo..."}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] text-muted-foreground uppercase mb-1">
                      {language === "en" ? "TARGET EMAIL NODE:" : "NODO DE CORREO DESTINO:"}
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={content.email}
                      className="w-full bg-cyber-gray border border-cyber-cyan/30 rounded p-2 text-cyber-yellow font-bold focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <Button
                      variant="primary"
                      size="lg"
                      href={`mailto:${content.email}`}
                      onClick={() => setTransmitted(true)}
                      className="w-full sm:w-auto font-mono text-xs font-bold uppercase clip-chamfer-btn bg-cyber-yellow text-cyber-black hover:bg-cyber-yellow/90 hover:shadow-[0_0_20px_rgba(252,238,10,0.6)]"
                    >
                      {content.emailCtaLabel} ✉
                    </Button>

                    <Button
                      variant="secondary"
                      size="lg"
                      href={content.cvUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto font-mono text-xs uppercase clip-chamfer-btn border border-cyber-cyan text-cyber-cyan bg-cyber-black hover:bg-cyber-cyan hover:text-cyber-black"
                    >
                      {content.cvCtaLabel} ↗
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Social Nodes */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs">
              {content.socials.map((social) => (
                <Button
                  key={social.platform}
                  variant="outline"
                  size="md"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs clip-chamfer-btn border-cyber-cyan/40 text-cyber-cyan hover:border-cyber-yellow hover:text-cyber-yellow"
                >
                  {social.platform} {"// NODE ↗"}
                </Button>
              ))}
            </div>
          </SpotlightCard>
        </MotionContainer>
      </Container>
    </section>
  );
};
