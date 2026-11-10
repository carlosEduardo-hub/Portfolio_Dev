export type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  githubSecondary?: string;
  githubSecondaryLabel?: string;
  live?: string;
};

export type FeaturedProject = {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  live: string;
  ctaLabel: string;
};

export const featuredSoul: FeaturedProject = {
  title: "Soul",
  description:
    "Meu SaaS próprio (cofundador): plataforma de estudos com IA para suporte personalizado a estudantes. Full-stack de ponta a ponta — interface, backend, autenticação, pagamentos, infra, analytics, LGPD e recursos de IA.",
  highlights: [
    "Arquitetura full-stack com foco em escala e autenticação segura",
    "Integração de IA para personalizar a jornada de estudos",
    "Pagamentos, analytics e operação sustentada em cloud",
  ],
  tech: ["React", "Next.js", "TypeScript", "Node.js", "IA / LLMs", "Cloud"],
  live: "https://soul.luminacodeltda.com.br/",
  ctaLabel: "Acessar Soul",
};

export const projects: Project[] = [
  {
    title: "Sistema de Gerenciamento Multimídia",
    description:
      "Sistema onde usuários fazem upload e gerenciamento de vídeos e áudios, com interface moderna e fluxo completo de mídia.",
    tech: ["TypeScript", "React", "Vercel"],
    github: "https://github.com/carlosEduardo-hub/Sistema-de-Gerenciamento-Multimidia",
    live: "https://sistema-de-gerenciamento-multimidia.vercel.app",
  },
  {
    title: "DevStage",
    description:
      "Aplicação de inscrição em eventos com compartilhamento e fluxo completo. Card único cobrindo frontend e backend do produto.",
    tech: ["TypeScript", "React", "Node.js"],
    github: "https://github.com/carlosEduardo-hub/DevStage_Frontend",
    githubSecondary: "https://github.com/carlosEduardo-hub/DevStage_Backend",
    githubSecondaryLabel: "Backend",
  },
  {
    title: "in.orbit",
    description:
      "Sistema de criação e gerenciamento de metas semanais (NLW Pocket). Frontend React/Vite com progresso e listagem; backend Fastify, Drizzle ORM, PostgreSQL e Docker.",
    tech: ["React", "Vite", "Fastify", "Drizzle", "PostgreSQL", "Docker"],
    github: "https://github.com/carlosEduardo-hub/in.orbit_Frontend",
    githubSecondary: "https://github.com/carlosEduardo-hub/in.orbit_Backend",
    githubSecondaryLabel: "Backend",
  },
  {
    title: "Nearby",
    description:
      "App mobile em React Native + Expo para descobrir e resgatar cupons em estabelecimentos parceiros, com QR code e mapas.",
    tech: ["React Native", "Expo", "Node.js", "Prisma"],
    github: "https://github.com/carlosEduardo-hub/Nearby",
  },
  {
    title: "PetShop Dev",
    description:
      "Landing page de petshop construída com Next.js, Shadcn UI e Tailwind CSS.",
    tech: ["Next.js", "Shadcn", "Tailwind CSS"],
    github: "https://github.com/carlosEduardo-hub/PetShop-Dev",
    live: "https://pet-shop-dev-chi.vercel.app",
  },
  {
    title: "Dashboard Next.js + Shadcn",
    description:
      "Dashboard responsivo para web e mobile com Next.js, Shadcn UI e Tailwind CSS, focado em interface moderna e boas práticas.",
    tech: ["Next.js", "Shadcn UI", "Tailwind CSS"],
    github: "https://github.com/carlosEduardo-hub/Dashboard_NextJS_Shadcn",
    live: "https://dashboard-next-js-shadcn-two.vercel.app/",
  },
  {
    title: "Sistema PPGCC",
    description:
      "Sistema para o Programa de Pós-Graduação em Ciência da Computação da UFPI: dashboard, rotas e visualização de dados Excel em gráficos.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/carlosEduardo-hub/Sistema_PPGCC",
    live: "https://carloseduardo-hub.github.io/Sistema_PPGCC/",
  },
  {
    title: "Notes Expert",
    description:
      "App de notas em React + TypeScript com gravação de áudio e conversão para texto via Speech Recognition API.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Speech API"],
    github: "https://github.com/carlosEduardo-hub/Notes_Expert",
    live: "https://notes-expert-nine.vercel.app/",
  },
  {
    title: "DevBurguer",
    description:
      "Cardápio online de hamburgueria com carrinho e finalização do pedido direto no WhatsApp.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/carlosEduardo-hub/Projeto-DevBurguer",
    live: "https://dev-burguer-kappa.vercel.app/",
  },
];
