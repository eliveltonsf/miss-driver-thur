# Resgate Ministry - Landing Page

Uma landing page desenvolvida para o Ministério Resgate, apresentando uma experiência narrativa multi-página com versículos bíblicos, mensagens inspiracionais, vídeos e música de fundo.

## 🎯 Sobre o Projeto

Este projeto é uma jornada espiritual dividida em sete páginas sequenciais (`/one` até `/seven`), cada uma apresentando:
- **Versículos bíblicos** em banners com efeito parallax
- **Mensagens reflexivas** sobre fé e esperança
- **Vídeos inspiracionais** exclusivos para cada etapa

## 🚀 Tecnologias Utilizadas

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Estilização utility-first
- **[Framer Motion](https://www.framer.com/motion/)** - Animações
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI
- **Google Fonts** - Poppins & Love Ya Like A Sister

## 📁 Estrutura do Projeto

```
miss-driver-thur/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout global com fonts e configs
│   │   ├── one/ a seven/       # Páginas sequenciais da jornada
│   ├── components/
│   │   ├── banner.tsx          # Banner parallax com versículos
│   │   ├── hero.tsx            # Seção de mensagem principal
│   │   ├── movie.tsx           # Container de vídeo
│   │   ├── playMusic.tsx       # Controle de música de fundo
│   │   └── footer.tsx          # Rodapé padrão
│   ├── styles/
│   │   └── globals.css         # Estilos globais e utilities
│   └── lib/
│       └── utils.ts            # Funções utilitárias
├── public/
│   ├── images/                 # banner.png, resgate.png
│   ├── videos/                 # one.mp4 até seven.mp4
│   └── music/                  # mil-motivos.mp3
└── tailwind.config.ts          # Configuração customizada
```

## 🎨 Sistema de Design

### Paleta de Cores Customizada
- **Background principal**: `green-100` (#F7F9F0)
- **Texto**: `green-900` (#5B6D71)
- **Escala completa**: 100-900 em tons de verde (ver `tailwind.config.ts`)

### Tipografia
- **Fonte principal**: Poppins (400-900)
- **Fonte decorativa**: Love Ya Like A Sister (400)
- Ambas otimizadas via `next/font` com CSS variables

### Padrões Importantes
```tsx
// ✅ Sempre usar svh/svw (small viewport) para altura/largura total
className="h-svh w-svw"

// ✅ Banner parallax com background fixo
className="bg-fixed bg-[url('/images/banner.png')]"

// ✅ Posicionamento customizável do background
bgPosition="bg-center" | "bg-bottom" | "bg-top"
```

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18.17+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre no diretório
cd miss-driver-thur

# Instale as dependências
npm install
```

### Comandos Disponíveis

```bash
# Desenvolvimento (porta 4000, não 3000!)
npm run dev
# Acesse: http://localhost:4000

# Build de produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

> ⚠️ **Importante**: O servidor de desenvolvimento roda na porta **4000**, não na porta padrão 3000.

## 📄 Estrutura de Página Padrão

Todas as páginas seguem o mesmo padrão de composição:

```tsx
export default function PageName() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden relative">
      {/* Banner superior com versículo */}
      <Banner message="Versículo bíblico" bgPosition="bg-center">
        <Image src="/images/resgate.png" alt="Logo" width={200} height={80} />
      </Banner>
      
      {/* Mensagem principal */}
      <Hero message="Mensagem inspiracional..." />
      
      {/* Banner inferior com mensagem de encerramento */}
      <Banner bgPosition="bg-bottom" message="Mensagem final 🙏" />
      
      {/* Vídeo da página */}
      <Movie>
        <video width="600" height="auto" controls>
          <source src="videos/page-name.mp4" type="video/mp4" />
        </video>
      </Movie>
      
      {/* Rodapé */}
      <Footer />
    </div>
  );
}
```

## 🎵 Recursos Multimídia

### Imagens (`/public/images/`)
- `banner.png` - Imagem de fundo parallax
- `resgate.png` - Logo do ministério

### Vídeos (`/public/videos/`)
- `one.mp4` até `seven.mp4` - Um vídeo para cada página da jornada

## 🔧 Configurações Importantes

### Next.js Config
- Domínios de imagem permitidos: `picsum.photos`, `images.unsplash.com`
- App Router (não Pages Router)

### ESLint
- Regra desabilitada: `@next/next/no-sync-scripts` (necessário para Hammer.js CDN)

### Tailwind
- Scrollbar global ocultada via classe `.style-scrollbar-h`
- Plugin `tailwindcss-animate` para animações

### Path Aliases
```typescript
// Use @ para importações absolutas
import Banner from '@/components/banner'
import { cn } from '@/lib/utils'
```

## 📝 Licença

Este projeto foi desenvolvido com 🙏 para o Ministério Resgate.

---

Made with 🧡 By Elivelton Ferreira. [Get in touch!](https://www.linkedin.com/in/eliveltonsf/) :calling: