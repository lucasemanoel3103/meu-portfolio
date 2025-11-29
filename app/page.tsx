import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: "Pedido Flow",
    description: "Um sistema voltado para gerenciamento de restaurantes, pizzarias, lanchonetes etc..",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Sass", "Express"],
    link: "https://github.com/lucasemanoel3103/sistema-restaurantes",
  },
  {
    title: "MecaHub",
    description: "Sistema completo para gerenciamento de oficinas de mecânicas.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Sass", "Express"],
    link: "#",
  },
];

const skills = [
  "JavaScript / TypeScript", "React / Next.js", "Node.js", "Nest.js / Express",
  "CSS / Sass", "Git / GitHub", "SQL / Postgres / MongoDB", "Prisma / Sequelize", "N8N"
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
    
      <header className="container mx-auto px-6 py-24 flex flex-col items-start justify-center min-h-[80vh]">
        <p className="text-cyan-400 font-mono mb-4">Olá, meu nome é</p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Lucas Emanoel
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8">
          Desenvolvedor Full-Stack
        </h2>
        <p className="max-w-xl text-lg text-slate-400 mb-12">
         
        </p>
        <a 
          href="#projects" 
          className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors"
        >
          Veja meus projetos
        </a>
      </header>

      
      <section id="about" className="container mx-auto px-6 py-20">
        <h3 className="flex items-center text-2xl font-bold text-white mb-8">
          <span className="text-cyan-400 mr-2">01.</span> Sobre Mim
          <span className="ml-4 h-px bg-slate-700 grow max-w-xs"></span>
        </h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-slate-400 leading-relaxed">
            <p className="mb-4">
              Atualmente, divido meu tempo entre a faculdade de ADS, trabalho e projetos pessoais. Gosto de explorar desde o front-end até o back-end e automações com n8n. Estou sempre estudando algo novo com o objetivo de construir aplicações modernas e eficientes.
            </p>
            <p className="mb-4">
              Hoje, sou desenvolvedor Full-stack júnior na Empresa Coraxy. No meu dia a dia trabalho montando e dando manutenções em automações para provedores de internet, usando sempre o desenvolvimento com código e o N8N para montar as automações.
            </p>
          </div>
      
          <div className="relative group w-full max-w-xs mx-auto md:mx-0">
             <div className="absolute inset-0 bg-cyan-400 rounded translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
             
             <div className="relative bg-slate-800 rounded h-64 w-full border-2 border-slate-700 overflow-hidden">
                <Image 
                  src="/imagem.png"
                  alt="Foto de Lucas Emanoel"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
             </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <h3 className="flex items-center text-2xl font-bold text-white mb-8">
          <span className="text-cyan-400 mr-2">02.</span> Tecnologias
          <span className="ml-4 h-px bg-slate-700 grow max-w-xs"></span>
        </h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-slate-400 font-mono text-sm">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="text-cyan-400 mr-2">▹</span> {skill}
            </li>
          ))}
        </ul>
      </section>

      <section id="projects" className="container mx-auto px-6 py-20">
        <h3 className="flex items-center text-2xl font-bold text-white mb-12">
          <span className="text-cyan-400 mr-2">03.</span> Projetos que construí
          <span className="ml-4 h-px bg-slate-700 grow max-w-xs"></span>
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="bg-slate-900 p-6 rounded hover:-translate-y-2 transition-transform duration-300 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <Code2 className="text-cyan-400 w-10 h-10" />
                <div className="flex gap-4 text-slate-400">
                  <a href={project.link} target="_blank" className="hover:text-cyan-400"><Github size={20} /></a>
                  <a href={project.link} target="_blank" className="hover:text-cyan-400"><ExternalLink size={20} /></a>
                </div>
              </div>
              <h4 className="text-xl font-bold text-slate-200 mb-2">{project.title}</h4>
              <p className="text-slate-400 text-sm mb-4">{project.description}</p>
              <ul className="flex flex-wrap gap-3 mt-auto text-xs font-mono text-slate-500">
                {project.tags.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="container mx-auto px-6 py-24 text-center max-w-2xl">
        <p className="text-cyan-400 font-mono mb-4">04. E agora?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Entre em contato</h2>
        <p className="text-slate-400 text-lg mb-12">
          Estou sempre aberto a novas oportunidades e desafios. 
          Seja para uma pergunta ou apenas para dar um oi, minha caixa de entrada está aberta!
        </p>
        
        <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com/lucasemanoel3103" target="_blank" className="p-3 text-slate-400 hover:text-cyan-400 transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/lucas-emanoel-dev/" target="_blank" className="p-3 text-slate-400 hover:text-cyan-400 transition-colors"><Linkedin size={24} /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lucasemanoel625@gmail.com" target="_blank" className="p-3 text-slate-400 hover:text-cyan-400 transition-colors"><Mail size={24} /></a>
        </div>

        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lucasemanoel625@gmail.com" target="_blank" className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded hover:bg-cyan-400/10 transition-colors font-mono">
          Diga Olá
        </a>
      </section>
      
    </div>
  );
}