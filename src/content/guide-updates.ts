export type GuideUpdate = {
  title: string;
  description: string;
  heading: string;
  answer: string;
  sections: { title: string; text: string }[];
  actions: string[];
  sources: { label: string; url: string }[];
};
export const GUIDE_UPDATES: Record<string, GuideUpdate> = {
  "gta-online": {
    title: "GTA V and GTA Online: Age Rating and Parent Guide",
    description:
      "Why GTA V is PEGI 18, how GTA Online differs from story mode, and what chat, spending and session controls can and cannot change.",
    heading: "What age is GTA V suitable for?",
    answer:
      "GTA V is PEGI 18 in the UK: it is intended for adults. GTA Online is its online multiplayer component, not a child-friendly alternative. Turning off chat or using an invite-only session does not remove the adult content.",
    sections: [
      {
        title: "Why is GTA an 18?",
        text: "PEGI identifies graphic violence, violence against vulnerable characters, strong language and gambling-related content in GTA V. The rating describes game content; it is separate from whether an account asks for proof of age.",
      },
      {
        title: "Story mode or GTA Online?",
        text: "Story mode follows scripted characters and missions. GTA Online adds other players, online interactions and optional real-money purchases. Ask which version and mode your child means before discussing it. Both require an adult-content decision.",
      },
      {
        title: "Is there a setting that makes it suitable for children?",
        text: "No parental setting changes the PEGI 18 rating. For a child, choose a different game with an appropriate content rating. For an adult household member, chat, session and platform purchase controls can still reduce unwanted contact and spending.",
      },
    ],
    actions: [
      "Check the exact game and edition in the platform store.",
      "Use the console or device family controls to restrict adult-rated games on a child account.",
      "Require purchase approval and review saved payment methods; discuss invitations and off-platform messages.",
    ],
    sources: [
      {
        label: "PEGI: GTA V rating and content explanation",
        url: "https://pegi.info/search-pegi?q=Grand+Theft+Auto+V",
      },
    ],
  },
  fortnite: {
    title: "Fortnite Age Ratings and Parental Controls: UK Guide",
    description:
      "Understand Fortnite experience ratings, Battle Royale suitability, Cabined Accounts, and parental controls for chat, purchases and play time.",
    heading: "Why is Fortnite rated 12, and does that cover every game?",
    answer:
      "Fortnite Battle Royale is PEGI 12, but Fortnite contains many different experiences with their own ratings. Check the rating on the specific experience your child wants to play, then set a content limit in Epic parental controls.",
    sections: [
      {
        title: "Rating and suitability are separate decisions",
        text: "Battle Royale includes combat with weapons. A rating does not assess your child’s comfort with competition, the people in their squad or how easily they stop playing. Try the chosen experience together and agree a stopping point.",
      },
      {
        title: "What does a Cabined Account do?",
        text: "Epic limits some features on younger players’ accounts while parental consent is pending. This is an account safeguard, not a recommendation that every Fortnite experience suits younger children. Review the content limit even after giving consent.",
      },
      {
        title: "Check chat and spending in two places",
        text: "Epic controls cover experience ratings, social permissions and purchases through Epic. Console and device stores have their own payment and communication controls. Review both; a squad can include people your child does not know offline.",
      },
    ],
    actions: [
      "Open Epic parental controls and protect changes with a private PIN.",
      "Set an experience-rating limit, then choose voice and text chat permissions deliberately.",
      "Review purchase permissions in Epic and the console or mobile store; agree time limits and a finishing routine.",
    ],
    sources: [
      {
        label: "Epic: parental controls and experience ratings",
        url: "https://safety.epicgames.com/parental-controls",
      },
      {
        label: "PEGI: Fortnite Battle Royale",
        url: "https://pegi.info/search-pegi?q=Fortnite+Battle+Royale",
      },
    ],
  },
  roblox: {
    title: "Roblox Age Ratings and Parental Controls: UK Guide",
    description:
      "Separate Roblox account age, content maturity and chat eligibility. Learn how to review games, link parent controls and manage spending.",
    heading: "What is the Roblox age limit in the UK?",
    answer:
      "Roblox is a platform containing many user-made games, so one age label cannot tell you whether every game is suitable. Account age, each game’s content maturity and permission to communicate are separate checks. Use your child’s real date of birth and review the controls available for their age.",
    sections: [
      {
        title: "Choose games as well as a content level",
        text: "Use content-maturity restrictions and the available game allow/block controls, then play the chosen games together. A maturity label describes content; it does not guarantee that every interaction with another player will be appropriate.",
      },
      {
        title: "Age checks do not make chat risk-free",
        text: "Roblox requires an age check for chat access. Communication permissions also depend on age, parental permission and available features. Check the current communication screen on the child’s account rather than assuming that completing a check turns every chat feature on or makes contacts trustworthy.",
      },
      {
        title: "Parent controls change as children get older",
        text: "Link a parent account to manage the available settings from your own device, or follow Roblox’s Parent mode instructions where offered. Content, communication, screen-time and spending controls vary with age; revisit them after birthdays and product updates.",
      },
    ],
    actions: [
      "Review the account birthday and link parent controls using Roblox’s official instructions.",
      "Choose content maturity, review individual games and inspect communication permissions together.",
      "Review available Robux spending limits, purchase approvals and play-time controls; practise blocking and reporting.",
    ],
    sources: [
      {
        label: "Roblox: parental controls overview",
        url: "https://en.help.roblox.com/hc/en-us/articles/30428310121620-Parental-Controls-Overview",
      },
      {
        label: "Roblox: understanding age checks",
        url: "https://en.help.roblox.com/hc/en-us/articles/39143693116052-Understanding-Age-Checks-on-Roblox",
      },
    ],
  },
  minecraft: {
    title: "Minecraft Age Rating and Parental Controls: UK Guide",
    description:
      "Minecraft is PEGI 7. Compare solo play, private Realms and public servers, then review multiplayer, communication and spending permissions.",
    heading: "What age is Minecraft suitable for?",
    answer:
      "Minecraft’s base game has a UK PEGI 7 rating. That content rating does not cover every conversation, public server or third-party download. Consider solo play, an invitation-only world and a public server as different choices.",
    sections: [
      {
        title: "What does PEGI 7 mean for your family?",
        text: "Minecraft includes fantasy threats and combat alongside building and exploration. Consider whether your child enjoys those elements and can manage frustration. Creative or peaceful play may better match some children’s preferences, while the game’s content rating still applies.",
      },
      {
        title: "Solo, Realms or public servers?",
        text: "Solo play avoids contact with other players. A private world or Realm lets an owner choose invitees, but those people still need to be trusted and invitations reviewed. Public servers introduce wider communities and moderation rules you do not control.",
      },
      {
        title: "Check the edition before following instructions",
        text: "Java and Bedrock editions, consoles and Microsoft accounts expose different settings. Use Microsoft family and Xbox privacy permissions for supported multiplayer and communication controls, then check the actual game and any separate chat apps. Do not assume every server provides native voice chat.",
      },
    ],
    actions: [
      "Identify Java or Bedrock and the device before opening the official instructions.",
      "Review multiplayer, friends and communication permissions for the child’s Microsoft account.",
      "Choose known play partners and approved servers; review purchases and avoid untrusted mods or downloads.",
    ],
    sources: [
      {
        label: "Minecraft: official parents’ guide",
        url: "https://www.minecraft.net/en-us/article/parents--guide-minecraft",
      },
      {
        label: "Minecraft: parental controls",
        url: "https://www.minecraft.net/en-us/article/parental-controls",
      },
    ],
  },
  "iphone-first-setup": {
    title: "Set Up an iPhone for Your Child: Parental Controls",
    description:
      "Set up a child’s Apple Account, Family Sharing, Screen Time and Ask to Buy, with prerequisites, checks and troubleshooting for parents.",
    heading: "Before you set up your child’s iPhone",
    answer:
      "Use a separate Apple Account for your child and add it to Family Sharing. Update the family’s devices, have account passwords and recovery details ready, and keep a Screen Time passcode that differs from the child’s device passcode. You will use both Family settings and Screen Time.",
    sections: [
      {
        title: "What you need",
        text: "Have the child’s iPhone, the family organiser’s Apple device, internet access and access to the organiser’s Apple Account. Check whether the child already has an account before creating another. Back up an existing phone before changing its account or erasing anything.",
      },
      {
        title: "If your child does not appear in Family",
        text: "Check that the correct child account has joined your family group and that each device is signed into the intended account. Update devices and follow Apple’s current instructions for your software version; menu names can differ.",
      },
      {
        title: "If limits or purchase requests do not work",
        text: "Check Screen Time is enabled for the correct child, Content & Privacy Restrictions are on, and the relevant app is not Always Allowed. Review Ask to Buy separately: updates, some redownloads and redemption codes are exceptions. Use Apple’s official support if requests still fail.",
      },
    ],
    actions: [
      "Finish the setup steps below, then check the child’s phone together.",
      "Try a restricted website and an app-limit boundary; confirm an eligible download sends a purchase request.",
      "Check that agreed contacts and essential apps remain usable, and explain how your child can ask for an exception.",
    ],
    sources: [
      {
        label: "Apple: parental controls for a child’s iPhone or iPad",
        url: "https://support.apple.com/en-gb/105121",
      },
      {
        label: "Apple: approve purchases with Ask to Buy",
        url: "https://support.apple.com/en-gb/105055",
      },
    ],
  },
};
