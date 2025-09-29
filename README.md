# 📚 Sistema Escolar  

## Funcionalidades  

### 🔐 Login e autenticação (Admin, Professor, Aluno)  

#### 👤 Admin  
- Gerenciar turmas.  
- Gerenciar professores.  
- Gerenciar alunos.  

#### 👩‍🏫 Professor  
- Visualizar suas turmas.  
- Lançar chamadas e notas.  

#### 👨‍🎓 Aluno  
- Consultar suas notas.  
- Acompanhar sua frequência.  

---

## 👥 Usuários de Exemplo  

**Administrador:**  
- Usuário: `admin`  
- Senha: `admin123`  

**Professor:**  
- Usuário: `prof.ana`  
- Senha: `ana123`  

**Aluno:**  
- Usuário: `aluno.joao`  
- Senha: `joao123`  

---

## 🚀 Como Executar o Projeto  

1. Baixe ou clone este repositório:  
```bash
git clone https://github.com/seu-usuario/sistema-escolar.git
```
2. Instale as dependências na pasta do backend:
```bash
npm i
```


## 🔎 Análise de Concorrentes

| Plataforma   | Visão Geral                                                                 | Pontos Fortes                                                                                          | Pontos Fracos                                                                                   | Funcionalidades Interessantes                                                |
|--------------|-----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| **Canvas LMS (Instructure)** | Amplamente adotado em educação básica e superior, com interface intuitiva, ecossistema de integrações e apps móveis. | - Grande comunidade e documentação.<br> - Usabilidade simples, app estável.<br> - Open-source, APIs e LTI. | - Configuração institucional exige equipe técnica.<br> - Analytics avançado depende de add-ons. | Assignments, Quizzes, Discussions, Mastery Paths. |
| **Docebo**   | Plataforma AI-first, voltada para educação corporativa, com automação e analytics robustos. | - Automação, certificações, gamificação.<br> - Advanced Analytics com previsões.<br> - Segurança corporativa (SSO, criptografia). | - Foco corporativo, menos adaptado a K-12.<br> - Custo mais alto que soluções open-source. | Jornadas automatizadas, marketplace de extensões, forecasting em analytics. |
| **Schoology** | LMS K-12 integrado ao PowerSchool, forte em comunicação entre escola e famílias. | - Integração com fluxos escolares e comunicação com pais.<br> - Repositório de recursos e currículo.<br> - Documentação consistente. | - Melhor experiência quando usado com PowerSchool.<br> - Performance limitada em cursos muito grandes. | Conexão com pais, colaboração docente, visão do progresso do aluno. |

### 📊 Comparação rápida com Google Classroom
- **Canvas**: mais completo e extensível, com trilhas de aprendizagem.  
- **Docebo**: analytics e automação além do modelo “sala de aula”.  
- **Schoology**: foco no dia a dia escolar com participação dos pais.  
