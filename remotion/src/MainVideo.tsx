import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
  useCurrentFrame,
  interpolate,
  spring,
  useVideoConfig,
} from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/Fraunces";
import { loadFont as loadBody } from "@remotion/google-fonts/Inter";

const { fontFamily: display } = loadDisplay("normal", { weights: ["500", "600"] });
const { fontFamily: body } = loadBody("normal", { weights: ["400", "500", "600"] });

const BG = "#F5EFE6";
const INK = "#1A2438";
const ACCENT = "#E26D5A";
const MUTED = "#6B7280";
const PHONE_BG = "#FFFFFF";

// segment durations (30fps) measured from generated VO
const segs = [
  { start: 0, dur: 200 },
  { start: 200, dur: 232 },
  { start: 432, dur: 159 },
  { start: 591, dur: 284 },
  { start: 875, dur: 292 },
  { start: 1167, dur: 304 },
  { start: 1471, dur: 148 },
  { start: 1619, dur: 246 },
  { start: 1865, dur: 155 },
];

const FadeIn: React.FC<{ delay?: number; children: React.ReactNode; y?: number }> = ({
  delay = 0,
  children,
  y = 24,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  return (
    <div
      style={{
        opacity: s,
        transform: `translateY(${interpolate(s, [0, 1], [y, 0])}px)`,
      }}
    >
      {children}
    </div>
  );
};

const StepLabel: React.FC<{ n: number; total: number }> = ({ n, total }) => (
  <div
    style={{
      fontFamily: body,
      fontSize: 22,
      letterSpacing: 4,
      textTransform: "uppercase",
      color: ACCENT,
      fontWeight: 600,
    }}
  >
    Step {n} <span style={{ color: MUTED, marginLeft: 12 }}>/ {total}</span>
  </div>
);

const Phone: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 18, stiffness: 90, mass: 1 } });
  return (
    <div
      style={{
        width: 380,
        height: 780,
        borderRadius: 50,
        background: "#0F172A",
        padding: 14,
        boxShadow: "0 40px 80px -20px rgba(15,23,42,0.35)",
        transform: `translateY(${interpolate(s, [0, 1], [60, 0])}px) scale(${interpolate(s, [0, 1], [0.92, 1])})`,
        opacity: s,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 38,
          background: PHONE_BG,
          overflow: "hidden",
          position: "relative",
          fontFamily: body,
          color: INK,
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 14,
            left: "50%",
            transform: "translateX(-50%)",
            width: 110,
            height: 24,
            borderRadius: 14,
            background: "#0F172A",
          }}
        />
        <div style={{ paddingTop: 60, width: "100%", height: "100%" }}>{children}</div>
      </div>
    </div>
  );
};

const SceneLayout: React.FC<{
  step: number;
  eyebrow?: string;
  title: string;
  body?: string;
  phone: React.ReactNode;
}> = ({ step, eyebrow, title, body: bodyText, phone }) => (
  <AbsoluteFill style={{ background: BG, color: INK, padding: "100px 140px" }}>
    <div style={{ display: "flex", height: "100%", gap: 100, alignItems: "center" }}>
      <div style={{ flex: 1, maxWidth: 760 }}>
        <FadeIn>
          <StepLabel n={step} total={9} />
        </FadeIn>
        {eyebrow && (
          <FadeIn delay={4}>
            <div
              style={{
                fontFamily: body,
                fontSize: 26,
                color: MUTED,
                marginTop: 28,
                fontWeight: 500,
              }}
            >
              {eyebrow}
            </div>
          </FadeIn>
        )}
        <FadeIn delay={8}>
          <h1
            style={{
              fontFamily: display,
              fontSize: 84,
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: -2,
              margin: "24px 0 0",
            }}
          >
            {title}
          </h1>
        </FadeIn>
        {bodyText && (
          <FadeIn delay={16}>
            <p
              style={{
                fontFamily: body,
                fontSize: 28,
                lineHeight: 1.5,
                color: MUTED,
                marginTop: 36,
                maxWidth: 620,
              }}
            >
              {bodyText}
            </p>
          </FadeIn>
        )}
      </div>
      <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
        {phone}
      </div>
    </div>
  </AbsoluteFill>
);

// ===== Phone screens =====

const TitleScreen: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: BG, color: INK, padding: 140 }}>
      <FadeIn>
        <div style={{ fontFamily: body, fontSize: 22, letterSpacing: 5, color: ACCENT, fontWeight: 600, textTransform: "uppercase" }}>
          A parent's tutorial
        </div>
      </FadeIn>
      <FadeIn delay={10}>
        <h1
          style={{
            fontFamily: display,
            fontSize: 160,
            fontWeight: 500,
            lineHeight: 1.0,
            letterSpacing: -5,
            margin: "32px 0 0",
            maxWidth: 1500,
          }}
        >
          Set up Family Link.
        </h1>
      </FadeIn>
      <FadeIn delay={22}>
        <p
          style={{
            fontFamily: body,
            fontSize: 36,
            color: MUTED,
            marginTop: 40,
            maxWidth: 1200,
            lineHeight: 1.4,
          }}
        >
          Pair your phone with your child's Android in about five minutes — then control screen time, apps and emergency calls.
        </p>
      </FadeIn>
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 140,
          width: interpolate(frame, [40, 180], [0, 700], { extrapolateRight: "clamp" }),
          height: 6,
          background: ACCENT,
          borderRadius: 4,
        }}
      />
    </AbsoluteFill>
  );
};

const PhoneInstall: React.FC = () => {
  const frame = useCurrentFrame();
  const installed = frame > 80;
  return (
    <div style={{ padding: "30px 28px" }}>
      <div style={{ fontSize: 14, color: MUTED, marginBottom: 18 }}>Google Play</div>
      <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ width: 70, height: 70, borderRadius: 16, background: "linear-gradient(135deg,#4285F4,#34A853,#FBBC04,#EA4335)" }} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>Family Link</div>
          <div style={{ fontSize: 13, color: MUTED }}>Google LLC</div>
        </div>
      </div>
      <div
        style={{
          marginTop: 30,
          background: installed ? "#E5F4EA" : ACCENT,
          color: installed ? "#0E7C3A" : "#fff",
          textAlign: "center",
          padding: "14px 0",
          borderRadius: 999,
          fontWeight: 600,
          fontSize: 16,
          transition: "none",
        }}
      >
        {installed ? "✓ Installed" : "Install"}
      </div>
      <div style={{ marginTop: 30, height: 6, background: "#F1F1F1", borderRadius: 4, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${interpolate(frame, [10, 80], [0, 100], { extrapolateRight: "clamp" })}%`, background: ACCENT }} />
      </div>
    </div>
  );
};

const PhoneAddChild: React.FC = () => (
  <div style={{ padding: "30px 28px" }}>
    <div style={{ fontWeight: 600, fontSize: 22, marginBottom: 24 }}>Family</div>
    <div style={{ border: "1.5px dashed #CBD5E1", borderRadius: 18, padding: 30, textAlign: "center" }}>
      <div style={{ width: 64, height: 64, borderRadius: 999, background: ACCENT, color: "#fff", fontSize: 32, lineHeight: "64px", margin: "0 auto 16px" }}>+</div>
      <div style={{ fontWeight: 600, fontSize: 17 }}>Add a child</div>
      <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>Tap to begin</div>
    </div>
  </div>
);

const PhoneAccountChoice: React.FC = () => {
  const frame = useCurrentFrame();
  const hl = frame > 40 ? 0 : -1;
  return (
    <div style={{ padding: "30px 24px" }}>
      <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 22 }}>Your child's account</div>
      {[
        { t: "Create a new account", s: "For under-13s without a Google account" },
        { t: "Link existing account", s: "If your child already has one" },
      ].map((o, i) => (
        <div
          key={i}
          style={{
            border: `2px solid ${hl === i ? ACCENT : "#E5E7EB"}`,
            background: hl === i ? "#FDEDE8" : "#fff",
            borderRadius: 14,
            padding: 18,
            marginBottom: 14,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 16 }}>{o.t}</div>
          <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>{o.s}</div>
        </div>
      ))}
    </div>
  );
};

const PhonePairing: React.FC = () => {
  const frame = useCurrentFrame();
  const dots = Math.floor((frame / 12) % 4);
  return (
    <div style={{ padding: "40px 28px", textAlign: "center" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 30, marginTop: 40 }}>
        <div style={{ width: 60, height: 90, borderRadius: 10, border: `3px solid ${INK}` }} />
        <div style={{ alignSelf: "center", color: ACCENT, fontSize: 30, fontWeight: 600 }}>
          ↔
        </div>
        <div style={{ width: 60, height: 90, borderRadius: 10, border: `3px solid ${ACCENT}` }} />
      </div>
      <div style={{ marginTop: 50, fontWeight: 600 }}>Pairing devices{".".repeat(dots)}</div>
      <div style={{ marginTop: 10, fontSize: 13, color: MUTED }}>Signing in on child's phone</div>
    </div>
  );
};

const PhoneScreenTime: React.FC = () => {
  const frame = useCurrentFrame();
  const val = interpolate(frame, [10, 90], [0, 120], { extrapolateRight: "clamp" });
  return (
    <div style={{ padding: "30px 24px" }}>
      <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 22 }}>Daily limit</div>
      <div style={{ background: "#F8FAFC", borderRadius: 16, padding: 22 }}>
        <div style={{ fontSize: 13, color: MUTED }}>School days</div>
        <div style={{ fontFamily: display, fontSize: 48, fontWeight: 500, color: INK, marginTop: 4 }}>
          {Math.floor(val / 60)}h {Math.round(val % 60)}m
        </div>
        <div style={{ height: 8, background: "#E5E7EB", borderRadius: 4, marginTop: 16, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${(val / 180) * 100}%`, background: ACCENT }} />
        </div>
      </div>
      <div style={{ background: "#F8FAFC", borderRadius: 16, padding: 22, marginTop: 14 }}>
        <div style={{ fontSize: 13, color: MUTED }}>Weekends</div>
        <div style={{ fontFamily: display, fontSize: 48, fontWeight: 500, color: INK, marginTop: 4 }}>3h 0m</div>
        <div style={{ height: 8, background: "#E5E7EB", borderRadius: 4, marginTop: 16, overflow: "hidden" }}>
          <div style={{ height: "100%", width: "100%", background: ACCENT }} />
        </div>
      </div>
    </div>
  );
};

const PhoneAppApproval: React.FC = () => {
  const frame = useCurrentFrame();
  const approved = frame > 70;
  return (
    <div style={{ padding: "30px 24px" }}>
      <div style={{ fontSize: 13, color: ACCENT, fontWeight: 600, letterSpacing: 1, textTransform: "uppercase" }}>
        Approval request
      </div>
      <div style={{ marginTop: 16, display: "flex", gap: 14, alignItems: "center" }}>
        <div style={{ width: 56, height: 56, borderRadius: 14, background: "#1DA1F2" }} />
        <div>
          <div style={{ fontWeight: 600, fontSize: 17 }}>Snapchat</div>
          <div style={{ fontSize: 13, color: MUTED }}>Wants to install</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginTop: 30 }}>
        <div style={{ flex: 1, textAlign: "center", padding: "13px 0", borderRadius: 999, border: `1.5px solid #E5E7EB`, fontSize: 14, fontWeight: 600 }}>
          Deny
        </div>
        <div
          style={{
            flex: 1,
            textAlign: "center",
            padding: "13px 0",
            borderRadius: 999,
            background: approved ? "#0E7C3A" : ACCENT,
            color: "#fff",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          {approved ? "✓ Approved" : "Approve"}
        </div>
      </div>
    </div>
  );
};

const PhoneAppLimit: React.FC = () => (
  <div style={{ padding: "30px 24px" }}>
    <div style={{ fontWeight: 600, fontSize: 20, marginBottom: 20 }}>App limits</div>
    {[
      { name: "YouTube", color: "#FF0000", limit: "30 min" },
      { name: "TikTok", color: "#000", limit: "20 min" },
      { name: "Roblox", color: ACCENT, limit: "45 min" },
    ].map((a) => (
      <div key={a.name} style={{ display: "flex", alignItems: "center", padding: "14px 0", borderBottom: "1px solid #F1F1F1" }}>
        <div style={{ width: 38, height: 38, borderRadius: 10, background: a.color, marginRight: 14 }} />
        <div style={{ flex: 1, fontWeight: 600, fontSize: 16 }}>{a.name}</div>
        <div style={{ fontSize: 14, color: MUTED }}>{a.limit}</div>
      </div>
    ))}
  </div>
);

const PhoneEmergency: React.FC = () => {
  const frame = useCurrentFrame();
  const pulse = 1 + Math.sin(frame / 8) * 0.04;
  return (
    <div style={{ padding: "30px 24px", textAlign: "center" }}>
      <div style={{ fontSize: 13, color: MUTED, marginBottom: 16 }}>Time's up for today</div>
      <div style={{ background: "#F1F5F9", borderRadius: 18, padding: 28 }}>
        <div style={{ fontWeight: 600, fontSize: 17 }}>Phone locked</div>
        <div style={{ fontSize: 13, color: MUTED, marginTop: 6 }}>Bedtime · 21:00–07:00</div>
      </div>
      <div
        style={{
          marginTop: 36,
          background: "#DC2626",
          color: "#fff",
          borderRadius: 999,
          padding: "16px 0",
          fontWeight: 600,
          fontSize: 17,
          transform: `scale(${pulse})`,
        }}
      >
        📞 Emergency call
      </div>
      <div style={{ marginTop: 14, fontSize: 12, color: MUTED }}>Always available</div>
    </div>
  );
};

const EndScreen: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 200 } });
  return (
    <AbsoluteFill style={{ background: INK, color: BG, padding: 140, justifyContent: "center" }}>
      <div style={{ opacity: s, transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)` }}>
        <div style={{ fontFamily: body, fontSize: 22, letterSpacing: 5, color: ACCENT, fontWeight: 600, textTransform: "uppercase" }}>
          You're set
        </div>
        <h1 style={{ fontFamily: display, fontSize: 140, fontWeight: 500, lineHeight: 1, letterSpacing: -4, margin: "32px 0 0" }}>
          Five minutes.
          <br />
          <span style={{ color: ACCENT }}>Peace of mind every day.</span>
        </h1>
      </div>
    </AbsoluteFill>
  );
};

// ===== Main =====

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: BG }}>
      <Audio src={staticFile("audio/vo.mp3")} />

      <Sequence from={segs[0].start} durationInFrames={segs[0].dur}>
        <TitleScreen />
      </Sequence>

      <Sequence from={segs[1].start} durationInFrames={segs[1].dur}>
        <SceneLayout
          step={1}
          eyebrow="On your phone"
          title="Install Family Link."
          body="Open the Google Play Store, search for Family Link, tap Install, then open the app."
          phone={<Phone><PhoneInstall /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[2].start} durationInFrames={segs[2].dur}>
        <SceneLayout
          step={2}
          title="Add a child."
          body="Tap the + button to begin adding your child's account."
          phone={<Phone><PhoneAddChild /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[3].start} durationInFrames={segs[3].dur}>
        <SceneLayout
          step={3}
          title="New account, or existing one."
          body="Create a Google account for children under 13, or link the account they already use."
          phone={<Phone><PhoneAccountChoice /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[4].start} durationInFrames={segs[4].dur}>
        <SceneLayout
          step={4}
          eyebrow="On your child's phone"
          title="Sign in to pair."
          body="Sign in with the child account during setup. Family Link pairs the two phones automatically."
          phone={<Phone><PhonePairing /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[5].start} durationInFrames={segs[5].dur}>
        <SceneLayout
          step={5}
          title="Set screen time."
          body="Two hours on school days, three at weekends — adjust to suit your family."
          phone={<Phone><PhoneScreenTime /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[6].start} durationInFrames={segs[6].dur}>
        <SceneLayout
          step={6}
          title="Approve every install."
          body="A notification pops up the moment your child tries to download a new app."
          phone={<Phone><PhoneAppApproval /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[7].start} durationInFrames={segs[7].dur}>
        <SceneLayout
          step={7}
          title="Per-app limits."
          body="Cap individual apps — 30 minutes a day for YouTube, for instance."
          phone={<Phone><PhoneAppLimit /></Phone>}
        />
      </Sequence>

      <Sequence from={segs[8].start} durationInFrames={segs[8].dur}>
        <SceneLayout
          step={8}
          title="Emergency calls always work."
          body="Even when the daily limit runs out or bedtime kicks in, the dialler stays available."
          phone={<Phone><PhoneEmergency /></Phone>}
        />
      </Sequence>

      <Sequence from={1990} durationInFrames={120}>
        <EndScreen />
      </Sequence>
    </AbsoluteFill>
  );
};
